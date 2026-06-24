"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import { useInventory } from "@/components/cart/InventoryContext";
import { useCartUI } from "@/components/cart/CartUIContext";
import {
  formatPrice,
  formatReleaseDate,
  stockLabel,
  stockState,
} from "@/lib/format";

const STATE_STYLES = {
  in: "text-green-700",
  low: "text-amber-700",
  out: "text-red-700",
};

export default function ProductCard({ product, currency }) {
  const [selectedId, setSelectedId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const { add } = useCart();
  const { getStock } = useInventory();
  const { openCart } = useCartUI();

  const variant = product.variants.find((v) => v.id === selectedId) ?? product.variants[0];
  const stock = getStock(variant.id);
  const state = stockState(stock);
  const soldOut = state === "out";

  const clampedQty = Math.min(qty, Math.max(1, stock));

  function handleSelect(id) {
    setSelectedId(id);
    setQty(1);
    setJustAdded(false);
  }

  function handleAdd() {
    if (soldOut) return;
    add(product, { id: variant.id, label: variant.label, price: variant.price }, clampedQty);
    setJustAdded(true);
    openCart();
  }

  const releaseDate = formatReleaseDate(product.releaseDate);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square bg-white">
        <Image
          src={product.image}
          alt={`${product.name} (${product.code}) sealed product`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-contain p-4"
        />
        <span className="absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-1 text-xs font-semibold tracking-wide text-background">
          {product.code}
        </span>
        {soldOut && (
          <span className="absolute right-3 top-3 rounded-full bg-red-700 px-2.5 py-1 text-xs font-semibold text-white">
            Sold out
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
          {releaseDate && (
            <p className="mt-0.5 text-xs text-muted">Released {releaseDate}</p>
          )}
        </div>

        {/* Variant selector */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a format">
          {product.variants.map((v) => {
            const active = v.id === selectedId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => handleSelect(v.id)}
                aria-pressed={active}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background hover:border-accent"
                }`}
              >
                {v.label}
              </button>
            );
          })}
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-xl font-semibold">{formatPrice(variant.price, currency)}</p>
            <p className={`text-xs font-medium ${STATE_STYLES[state]}`}>{stockLabel(stock)}</p>
          </div>

          {/* Quantity stepper */}
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-border">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                disabled={soldOut || clampedQty <= 1}
                className="px-2.5 py-1 text-lg leading-none disabled:opacity-30"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-7 text-center text-sm tabular-nums">{soldOut ? 0 : clampedQty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(stock, q + 1))}
                disabled={soldOut || clampedQty >= stock}
                className="px-2.5 py-1 text-lg leading-none disabled:opacity-30"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          disabled={soldOut}
          className="rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-accent disabled:cursor-not-allowed disabled:bg-muted/40 disabled:text-muted"
        >
          {soldOut ? "Sold out" : justAdded ? "Added ✓ — add more" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}
