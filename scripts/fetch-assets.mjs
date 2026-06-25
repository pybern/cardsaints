#!/usr/bin/env node
/**
 * fetch-assets.mjs
 *
 * Builds the Card Saints shop catalog for One Piece TCG releases (Japanese edition).
 *
 * - Pulls the live list of sets from optcgapi.com (free, no auth) for set names.
 * - Selects ALL available OP booster sets plus the EB extra boosters.
 * - Downloads a Japanese cover into public/products/{code}.png:
 *     1. a Japanese sealed booster-BOX photo from a public Shopify product feed,
 *     2. the official Japanese product render (booster pack thumbnail),
 *     3. the marquee "-001" Japanese card art,
 *     4. a generated SVG placeholder so the build never breaks.
 * - Writes the product catalog (prices + mock inventory) to src/lib/catalog.json.
 *
 * Re-runnable and deterministic (no randomness). Run with: `node scripts/fetch-assets.mjs`
 */

import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_DIR = path.join(ROOT, "public", "products");
const CATALOG_PATH = path.join(ROOT, "src", "lib", "catalog.json");

const CURRENCY = "HKD";
const API = "https://optcgapi.com/api";

// Temporary trading state: when true, all released products show "Sold out".
// Pre-orders stay reservable (they are upcoming, not current stock).
// Flip back to false to restore normal mock inventory.
const ALL_OUT_OF_STOCK = true;

// Japanese official CDN. Product (pack) renders live under /images/products/...,
// and per-card art under /images/cardlist/card/... (used as a fallback).
const JP_SITE = "https://www.onepiece-cardgame.com";
const JP_CARD = `${JP_SITE}/images/cardlist/card`;

// Japanese sealed booster-BOX photos (the official JP site only publishes pack/
// banner renders, not boxes). This Shopify storefront exposes a public product
// feed with clean Japanese box photos on the Shopify CDN, keyed by set code.
const JP_BOX_FEED = "https://tcgame.com.au/products.json?limit=250";

// Some hosts reject the default Node user-agent, so present a browser one.
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function fetchWithUA(url, extraHeaders = {}, timeoutMs = 20000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  return fetch(url, { headers: { "User-Agent": UA, ...extraHeaders }, signal: ctrl.signal }).finally(
    () => clearTimeout(timer),
  );
}

// ---------------------------------------------------------------------------
// Curated metadata: release dates. Names come live from the API.
// ---------------------------------------------------------------------------
const RELEASE_DATES = {
  "OP-01": "2022-12-02",
  "OP-02": "2023-03-10",
  "OP-03": "2023-06-30",
  "OP-04": "2023-09-22",
  "OP-05": "2023-12-08",
  "OP-06": "2024-03-08",
  "OP-07": "2024-06-28",
  "OP-08": "2024-09-13",
  "OP-09": "2024-11-08",
  "OP-10": "2025-02-14",
  "OP-11": "2025-05-30",
  "OP-12": "2025-08-29",
  "OP-13": "2025-11-21",
  "OP-14": "2026-02-13",
  "OP-15": "2026-05-29",
  "OP-16": "2026-08-28",
  "EB-01": "2024-03-29",
  "EB-02": "2025-04-25",
};

// EB extra boosters to feature.
const EB_CODES = ["EB-01", "EB-02"];

// Upcoming OP sets offered as pre-orders. Box art is fetched automatically when
// it becomes available; until then a designed black-box placeholder is used.
const PREORDERS = [
  { code: "OP-17", category: "OP", name: "The World's Strongest Warriors", preorder: true },
  { code: "OP-18", category: "OP", name: "To Be Announced", preorder: true },
];

const CATEGORIES = [
  {
    key: "OP",
    label: "Booster Sets",
    blurb:
      "The main line. Twenty-four packs per box, twelve boxes per sealed case — the core of every allocation we hold.",
  },
  {
    key: "EB",
    label: "Extra Boosters",
    blurb:
      "Limited between-set releases. Smaller print runs, reliably tight supply, collector demand that outlives the shelf.",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Deterministic small string hash (FNV-1a, 32-bit). */
function hash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Cover-card id (-001) derived from a set id, handling crossover ids. */
function coverId(setId) {
  const compact = setId.replace(/-/g, ""); // OP09, EB01, OP14EB04
  const token = compact.match(/^(OP|EB)\d{2}/i); // leading family token
  const base = token ? token[0] : compact;
  return `${base}-001`;
}

/** Normalize a raw set id to a clean display code (OP-14 from OP14-EB04). */
function displayCode(setId) {
  const m = setId.match(/^(OP|EB)-?(\d{2})/i);
  if (m) return `${m[1].toUpperCase()}-${m[2]}`;
  return setId;
}

/** Vintage multiplier — older / scarcer releases cost more. */
function vintageMult(code) {
  const [fam, nStr] = code.split("-");
  const n = Number(nStr);
  if (fam === "OP") {
    if (n <= 3) return 1.6;
    if (n <= 6) return 1.3;
    return 1.0;
  }
  if (fam === "EB") return code === "EB-01" ? 1.4 : 1.0;
  return 1.0;
}

/** Deterministic mock stock for a variant. Spread includes 0 (sold out) and low (<=6). */
function mockStock(code, variantKey) {
  const raw = (hash(`${code}:${variantKey}`) % 46) - 6; // -6..39
  return Math.max(0, Math.min(40, raw));
}

/** Build the two purchase variants for a product, with HKD prices + mock stock. */
function buildVariants(code, category, preorder = false) {
  const m = vintageMult(code);
  const base = category === "EB" ? 520 : 690;
  const box = Math.round(base * m);
  const kase = Math.round(box * 12 * 0.9);
  const defs = [
    { key: "box", label: "Booster Box (24 packs)", price: box },
    { key: "case", label: "Sealed Case (12 boxes)", price: kase },
  ];
  return defs.map((d) => ({
    id: `${code}:${d.key}`,
    label: d.label,
    price: d.price,
    // Pre-orders are always orderable (no sell-out). Released sets get mock
    // stock, or zero while the shop is temporarily marked out of stock.
    stock: preorder ? 99 : ALL_OUT_OF_STOCK ? 0 : mockStock(code, d.key),
  }));
}

/**
 * Force at least one sold-out and one low-stock item per category so the UI
 * states are always demonstrable. Mutates the products array in place.
 */
function ensureStockStates(products) {
  if (ALL_OUT_OF_STOCK) return; // everything is already zeroed
  for (const cat of ["OP", "EB"]) {
    const inCat = products.filter((p) => p.category === cat);
    if (inCat.length === 0) continue;
    inCat[0].variants[0].stock = 0; // first product: first variant sold out
    const lowTarget = inCat[1] ?? inCat[0];
    lowTarget.variants[lowTarget.variants.length - 1].stock = 3; // low stock
  }
}

async function fetchJson(url) {
  const res = await fetchWithUA(url, { Accept: "application/json" });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.json();
}

/** Japanese product slug, e.g. "OP-15" -> "op15". */
function jpSlug(code) {
  return code.replace(/-/g, "").toLowerCase();
}

/**
 * Fetch the Japanese box-photo feed and build a { code -> imageUrl } map.
 * Prefers a "Booster Box" listing (excluding cases/packs/displays). Non-fatal.
 */
async function fetchJpBoxIndex() {
  const map = {};
  let products;
  try {
    products = (await fetchJson(JP_BOX_FEED)).products || [];
  } catch (err) {
    console.warn("JP box feed unavailable, will fall back to official JP renders:", err.message);
    return map;
  }
  for (const p of products) {
    const title = p.title || "";
    if (!/japanese/i.test(title)) continue;
    const img = (p.images && p.images[0] && p.images[0].src) || null;
    if (!img) continue;
    const isBox = /box/i.test(title) && !/case/i.test(title);
    if (!isBox) continue;
    for (const m of title.matchAll(/\b(OP|EB)[- ]?(\d{1,2})\b/gi)) {
      const code = `${m[1].toUpperCase()}-${String(Number(m[2])).padStart(2, "0")}`;
      if (!map[code]) map[code] = img; // first box listing wins
    }
  }
  return map;
}

async function tryDownload(url, dest, tries = 3) {
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      const res = await fetchWithUA(url, {}, 15000);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length >= 1024) {
          await writeFile(dest, buf);
          return true;
        }
      }
    } catch {
      // transient (timeout / network); retry below
    }
    if (attempt < tries) await sleep(1500);
  }
  return false;
}

/**
 * Download the Japanese cover to public/products/{code}.png:
 *   1. a Japanese sealed booster-BOX photo (from the JP box feed),
 *   2. the official Japanese product render (booster pack thumbnail),
 *   3. the marquee "-001" Japanese card art,
 *   4. an SVG placeholder.
 * Returns "jp-box" | "jp-product" | "jp-card" | "jp-placeholder".
 */
async function downloadCover(code, name, jpBoxIndex) {
  const dest = path.join(PRODUCTS_DIR, `${code}.png`);
  const slug = jpSlug(code);

  // 1. Japanese sealed booster-box photo.
  const boxUrl = jpBoxIndex && jpBoxIndex[code];
  if (boxUrl && (await tryDownload(boxUrl, dest, 5))) {
    return "jp-box";
  }

  // 2. Official Japanese sealed-product render (booster pack thumbnail).
  if (await tryDownload(`${JP_SITE}/images/products/boosters/${slug}/img_thumbnail.png`, dest)) {
    return "jp-product";
  }

  // 3. Fallback: Japanese card art.
  if (await tryDownload(`${JP_CARD}/${coverId(code)}.png`, dest)) {
    return "jp-card";
  }

  // 4. Fallback: placeholder.
  await writeFile(dest, placeholderSvg(code, name));
  return "jp-placeholder";
}

/**
 * Download a pre-order cover to public/products/{code}.(png|svg):
 *   1. the real Japanese booster box if it has been released (feed or official),
 *   2. otherwise a designed black-box placeholder (SVG).
 * Returns { image, tag }.
 */
async function downloadPreorderCover(code, name, jpBoxIndex) {
  const pngDest = path.join(PRODUCTS_DIR, `${code}.png`);

  const boxUrl = jpBoxIndex && jpBoxIndex[code];
  if (boxUrl && (await tryDownload(boxUrl, pngDest, 5))) {
    return { image: `/products/${code}.png`, tag: "jp-box" };
  }
  if (await tryDownload(`${JP_SITE}/images/products/boosters/${jpSlug(code)}/img_thumbnail.png`, pngDest)) {
    return { image: `/products/${code}.png`, tag: "jp-product" };
  }

  const svgDest = path.join(PRODUCTS_DIR, `${code}.svg`);
  await writeFile(svgDest, preorderBoxSvg(code, name));
  return { image: `/products/${code}.svg`, tag: "preorder-placeholder" };
}

/** A designed "black box" placeholder for an unreleased (pre-order) set. */
function preorderBoxSvg(code, name) {
  const showName = name && !/^to be announced$/i.test(name);
  const safeName = String(showName ? name : "Artwork revealed soon")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;");
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" role="img" aria-label="${code} pre-order placeholder">
  <defs>
    <linearGradient id="box" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2c2c31"/>
      <stop offset="0.55" stop-color="#101012"/>
      <stop offset="1" stop-color="#020203"/>
    </linearGradient>
    <linearGradient id="foil" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#9c7a35"/>
      <stop offset="0.5" stop-color="#f1d585"/>
      <stop offset="1" stop-color="#9c7a35"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="#ffffff"/>
  <!-- depth side face -->
  <path d="M402 120 L432 138 L432 502 L402 520 Z" fill="#000" stroke="url(#foil)" stroke-width="2"/>
  <!-- box front -->
  <rect x="172" y="108" width="232" height="412" rx="12" fill="url(#box)" stroke="url(#foil)" stroke-width="3"/>
  <!-- set code -->
  <text x="288" y="178" fill="url(#foil)" font-family="Georgia, 'Times New Roman', serif" font-size="50" font-weight="800" text-anchor="middle" letter-spacing="1">${code}</text>
  <!-- mystery mark -->
  <text x="288" y="330" fill="#3a3a42" font-family="Georgia, serif" font-size="190" font-weight="800" text-anchor="middle">?</text>
  <!-- wordmark -->
  <text x="288" y="404" fill="#f7f5ee" font-family="Georgia, serif" font-size="40" font-weight="800" text-anchor="middle" letter-spacing="2">ONE PIECE</text>
  <text x="288" y="430" fill="url(#foil)" font-family="Georgia, serif" font-size="16" text-anchor="middle" letter-spacing="7">CARD GAME</text>
  <!-- pre-order ribbon -->
  <rect x="172" y="462" width="232" height="40" fill="url(#foil)"/>
  <text x="288" y="490" fill="#0a0a0b" font-family="Georgia, serif" font-size="22" font-weight="800" text-anchor="middle" letter-spacing="4">PRE-ORDER</text>
  <!-- caption -->
  <text x="300" y="556" fill="#8a6a2f" font-family="Georgia, serif" font-size="19" font-style="italic" text-anchor="middle">${safeName}</text>
</svg>`,
    "utf8",
  );
}

function placeholderSvg(code, name) {
  const safe = String(name || code).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="670" viewBox="0 0 480 670">
  <rect width="480" height="670" fill="#2f3a4a"/>
  <rect x="24" y="24" width="432" height="622" rx="14" fill="none" stroke="#8a6a2f" stroke-width="3"/>
  <text x="240" y="320" fill="#f7f5ee" font-family="Georgia, serif" font-size="64" font-weight="700" text-anchor="middle">${code}</text>
  <text x="240" y="370" fill="#cbbd9a" font-family="Georgia, serif" font-size="22" text-anchor="middle">${safe}</text>
</svg>`,
    "utf8",
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!existsSync(PRODUCTS_DIR)) await mkdir(PRODUCTS_DIR, { recursive: true });
  await mkdir(path.dirname(CATALOG_PATH), { recursive: true });

  console.log("Fetching set list from optcgapi.com ...");
  const allSets = await fetchJson(`${API}/allSets/`);

  // Japanese booster-box photo index (non-fatal if down).
  const jpBoxIndex = await fetchJpBoxIndex();
  console.log(`Indexed ${Object.keys(jpBoxIndex).length} Japanese box photos.`);

  // --- OP: all available OP booster sets ---------------------------------
  const opEntries = [];
  const seenOp = new Set();
  for (const s of allSets) {
    const id = s.set_id || "";
    if (!/^OP/i.test(id)) continue;
    const code = displayCode(id);
    if (!/^OP-\d{2}$/.test(code) || seenOp.has(code)) continue;
    seenOp.add(code);
    opEntries.push({ code, category: "OP", name: s.set_name });
  }
  opEntries.sort((a, b) => a.code.localeCompare(b.code));

  // --- EB: curated extra boosters ----------------------------------------
  const setNameById = new Map(allSets.map((s) => [displayCode(s.set_id || ""), s.set_name]));
  const ebEntries = EB_CODES.map((code) => ({
    code,
    category: "EB",
    name: setNameById.get(code) || code,
  }));

  const releases = [...opEntries, ...ebEntries, ...PREORDERS];

  console.log(
    `Selected ${opEntries.length} OP, ${ebEntries.length} EB, ${PREORDERS.length} pre-order = ${releases.length} products.`,
  );
  console.log("Downloading Japanese cover art ...");

  const tally = {
    "jp-box": 0,
    "jp-product": 0,
    "jp-card": 0,
    "jp-placeholder": 0,
    "preorder-placeholder": 0,
  };
  const products = [];
  for (const r of releases) {
    let image, tag;
    if (r.preorder) {
      ({ image, tag } = await downloadPreorderCover(r.code, r.name, jpBoxIndex));
    } else {
      tag = await downloadCover(r.code, r.name, jpBoxIndex);
      image = `/products/${r.code}.png`;
    }
    tally[tag]++;
    products.push({
      id: r.code,
      code: r.code,
      category: r.category,
      name: r.name,
      releaseDate: RELEASE_DATES[r.code] || null,
      preorder: r.preorder || false,
      image,
      variants: buildVariants(r.code, r.category, r.preorder),
    });
    process.stdout.write(`  ${r.code} (${tag})\n`);
  }

  ensureStockStates(products);

  const catalog = { currency: CURRENCY, edition: "Japanese", categories: CATEGORIES, products };
  await writeFile(CATALOG_PATH, JSON.stringify(catalog, null, 2) + "\n", "utf8");

  console.log(
    `\nDone. JP covers: box=${tally["jp-box"]} product=${tally["jp-product"]} card=${tally["jp-card"]}` +
      ` placeholder=${tally["jp-placeholder"]} preorder=${tally["preorder-placeholder"]}`,
  );
  console.log(`Catalog written: ${path.relative(ROOT, CATALOG_PATH)} (${products.length} products)`);
}

main().catch((err) => {
  console.error("fetch-assets failed:", err);
  process.exit(1);
});
