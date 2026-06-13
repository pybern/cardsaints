# Card Saints — October 30 Release: Business & Operations Plan

_Last updated: June 13, 2026_

## 1. Snapshot

| Item | Value |
| --- | --- |
| Confirmed orders | 1,200 cases |
| Additional orders | 30 cases |
| **Total cases** | **1,230 cases** |
| Cost per case (from King) | 3,072 |
| Transport cost per case (HK → PH) | 450 _(under negotiation)_ |
| Landed cost per case | 3,522 |
| Release date | **October 30, 2026** |
| Allocation confirmation | ~October 23, 2026 (one week before release, per Kings) |

> All amounts assumed HKD — confirm currency on the King invoice and the freight quote.

## 2. Total Capital Required

| Line item | Calculation | Amount |
| --- | --- | --- |
| Product cost | 1,230 × 3,072 | **3,778,560** |
| Transport (current quote) | 1,230 × 450 | **553,500** |
| **Total outlay** | 1,230 × 3,522 | **4,331,460** |

### Transport negotiation upside

Transport is the main controllable cost right now. At 1,230 cases there is real volume leverage:

| Negotiated rate per case | Total transport | Savings vs. 450 |
| --- | --- | --- |
| 450 (current) | 553,500 | — |
| 400 | 492,000 | 61,500 |
| 350 | 430,500 | 123,000 |
| 300 | 369,000 | 184,500 |

**Action:** push for a volume rate before allocation week. Get 2–3 competing quotes from Kwai Chung-based forwarders as leverage — even if we stay with the current forwarder, a competing quote is the fastest way to a discount.

## 3. Timeline

| Date | Milestone | Owner / Notes |
| --- | --- | --- |
| Now → mid-Oct | Lock final order count (1,230); reconfirm every buyer | Sales side |
| Now → mid-Oct | Negotiate transport rate; collect competing quotes | Logistics |
| Now → mid-Oct | Secure temporary storage near Kwai Chung; Robin's house as fallback | Logistics |
| Now → mid-Oct | Set up payment collection rails on PH side (channels, reference codes per buyer) | Finance |
| **~Oct 23** | **Allocation confirmed by Kings** → trigger everything below | — |
| Oct 23 | King sends invoice → verify quantity/price, schedule payment | Finance |
| Oct 23 | Announce allocation to PH buyers → **start collecting full payments** | Sales |
| Oct 23–29 | Collection window: target 100% of PH payments collected | Finance |
| Oct 23–29 | Pay King in full per invoice terms | Finance |
| Oct 23–29 | Book freight slot for first available sailing/flight after release | Logistics |
| **Oct 30** | **Release.** Receive 1,230 cases into Kwai Chung storage | Logistics |
| Oct 30 | Count, inspect, and photograph stock on intake | Logistics |
| **Oct 31 onward** | **Ship to PH ASAP** — pre-booked freight, no idle days in storage | Logistics |

## 4. Cash Flow Plan

The structure is favorable because both legs trigger on the same event (allocation confirmation):

- **Money in (PH side):** full payments start once allocation is confirmed (~Oct 23).
- **Money out (to King):** due once King sends the invoice after the allocation announcement (~Oct 23).

That means roughly a **one-week window (Oct 23–30)** where ~3.78M must be collected from buyers and paid to King.

### The risk: collection lag

If PH buyers are slow to pay but King's invoice has a short due date, we carry the gap. Mitigations, in order of preference:

1. **Pre-collect deposits now.** Even 20–30% per case (≈614–921 per case) collected before allocation week reduces the bridge dramatically and filters out non-serious buyers.
2. **Confirm King's payment terms early.** Ask now: how many days after invoice is payment due? Even 7 vs. 3 days changes the plan.
3. **Hard payment deadline for buyers.** Full payment within 48–72 hours of allocation announcement, or the case is released to the waitlist.
4. **Maintain a waitlist.** With 1,230 cases, expect some % of fallout; a waitlist converts dropped orders instead of leaving us holding stock.
5. **Bridge buffer.** Know in advance the maximum shortfall we can self-fund (e.g., 5% fallout = ~189K of product cost) and who covers it.

### Collection tracker (set up before Oct 23)

- One ledger row per buyer: name, cases, amount due, amount paid, payment date, status.
- Daily reconciliation during Oct 23–29.
- No case ships without payment cleared — full payment before shipment, no exceptions.

## 5. Logistics & Storage

**Storage decision: temporary storage around Kwai Chung (recommended).**

- Stock ships out of Kwai Chung anyway — storing there removes a transfer leg, handling risk, and 1–2 days of delay vs. Robin's house.
- 1,230 cases is a meaningful volume — confirm Robin's house could even physically hold it; treat it as fallback only.
- Cost note: short-term storage near Kwai Chung should be cheap relative to the 4.3M outlay; even a week of storage fees is justified by the faster turnaround.

**Shipment to PH: ASAP after Oct 30 release.**

- Pre-book the freight slot during allocation week (Oct 23–29) so cases move on the first available departure after release.
- Insure the shipment for landed value (~4.33M). Confirm whether the 450/case rate includes insurance — if not, price it in.
- Prepare PH customs/import paperwork in advance (commercial invoice, packing list); collectible card cases can attract scrutiny, and a customs delay erases the "ASAP" goal.
- Intake protocol at release: count and inspect all 1,230 cases against the King invoice before signing off; photograph condition for any damage claims.

## 6. Key Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Allocation cut (receive < 1,230 cases) | Medium | High | Decide allocation priority order among buyers **now**; communicate that orders are subject to allocation |
| Buyer payment fallout in the 1-week window | Medium | High | Deposits, 48–72h payment deadline, waitlist |
| King invoice due before collections complete | Medium | High | Confirm terms now; pre-collect deposits |
| Transport rate stays at 450 | Medium | Low–Med | Competing quotes; worst case is the budgeted 553,500 |
| Storage unavailable at release week | Low | Medium | Book Kwai Chung space in advance; Robin's house fallback |
| Customs delay into PH | Medium | Medium | Paperwork prepared in advance; experienced forwarder |
| Damage/loss in transit | Low | High | Insurance + intake photos + sealed-case handling protocol |

## 7. Immediate Action Items (before allocation week)

1. [ ] Reconfirm all 1,230 orders and decide allocation priority if we get cut.
2. [ ] Ask King for expected invoice payment terms (days to pay after invoice).
3. [ ] Get 2–3 competing freight quotes; target ≤400/case.
4. [ ] Book temporary storage near Kwai Chung for release week.
5. [ ] Decide deposit policy and start collecting deposits from PH buyers.
6. [ ] Build the buyer payment ledger and set up PH collection channels.
7. [ ] Confirm insurance coverage for storage + transit.
8. [ ] Prepare PH import paperwork templates.

## 8. Inventory Control System

Goal: at any moment, **cases ordered = cases paid = cases allocated = cases shipped + cases on hand**. If that equation breaks, we catch it the same day.

One Google Sheet (shared, edit access limited to 1–2 people), four tabs:

### Tab 1 — Master Inventory (one row per case)

| Column | Notes |
| --- | --- |
| Case ID | Sequential 0001–1230; physically label each carton at intake |
| Status | `expected → received → inspected → allocated → shipped → delivered` |
| Condition | OK / damaged (link to intake photo) |
| Buyer | Filled when allocated |
| Shipment batch | Filled when shipped |

### Tab 2 — Buyer Ledger (one row per buyer)

Buyer, cases ordered, deposit paid, balance due, full payment date, payment status, assigned case IDs, shipment batch. **A case cannot move to `allocated` unless the buyer's payment status is `paid in full`.**

### Tab 3 — Intake Log (Oct 30)

Cartons received vs. King invoice, count per delivery, condition notes, photo links, discrepancies flagged immediately to King while there's still recourse.

### Tab 4 — Shipment Log (one row per batch)

Batch number, ship date, forwarder, tracking/BL number, case IDs included, ETA, arrival confirmation, delivery confirmation per buyer.

### Operating rules

1. Label every carton with its Case ID at intake — physical count must match the sheet before signing the delivery receipt.
2. Daily reconciliation during Oct 23 – delivery: totals across the four tabs must match.
3. Status changes only move forward; any correction is logged with a note, never silently edited.
4. No case ships unless it is `inspected` + buyer `paid in full`.
5. Photograph at two points: intake (condition claims vs. King) and outbound packing (transit insurance claims).

### Barcode scanning (phones, no hardware)

Manual entry of 1,230 case IDs at intake and again at outbound is the main source of inventory errors. Scan instead — no dedicated scanners needed for a one-off release:

1. **Pre-print 1,230 QR labels** encoding case IDs 0001–1230 before release week (any Kwai Chung print shop can run them from a CSV).
2. **Intake (Oct 30):** stick label on carton → scan → status flips to `received`. ~2–3 sec/scan ≈ one hour for the full delivery.
3. **Outbound:** scan each case onto its shipment batch — the scan is proof it physically left storage.
4. **Tooling:** Google AppSheet over the existing Google Sheet (free tier, built-in barcode scanning, writes directly to the Master Inventory tab).

Only buy hardware (1–2 Bluetooth scanners, ~HKD 200–400 each) if this becomes a recurring monthly operation.

If this becomes a recurring monthly operation, it's worth replacing the sheet with a small web tracker (the repo is already a Next.js app), but for a single release the sheet is faster to stand up and easier for everyone to use.

## 9. Moving Funds: PH → HK

Total to move: ~HKD 3,778,560 (≈ PHP 27–28M, ≈ USD 485K). Design principle: **collect locally, convert once.**

### Step 1 — Collect domestically in PH

- All buyers pay into **one PH business account** via InstaPay (≤ PHP 50K/transfer) or PESONet (larger amounts). Domestic, near-free, same-day.
- Never have buyers remit internationally themselves — dozens of retail FX spreads and fees, and reconciliation becomes impossible.

### Step 2 — Convert and remit in 1–2 tranches

> **⚠ Correction to earlier drafts:** Wise Philippines caps PHP → foreign-currency conversion at **USD 10,000 per transfer and USD 50,000 per calendar month** — and the cap applies to **business accounts too** (BSP regulation, per Wise's published PH limits). Wise PH therefore **cannot** carry the ~USD 485K main tranche. Wise stays in the stack, but in a different role (see the Wise setup section below): the PH Wise account handles collections support and small/urgent payments up to the cap; the **bulk conversion moves by PH corporate bank wire** (or the USDT route if King accepts it); an **HK Wise Business account** (requires an HK-registered entity) gives us an HKD operating account to receive funds and pay King instantly via FPS without opening an HK bank account.

| Rail | Typical all-in cost on PHP ~27M | Notes |
| --- | --- | --- |
| PH corporate bank wire (BDO/BPI/Metrobank) | ~1–2% FX markup ≈ HKD 38–76K | **Primary rail for the main tranche.** Pre-negotiate the FX rate for the size; fits BSP's USD 1M/day corporate window |
| Wise Business (PH) | Mid-market + ~0.6% fee | **Capped at USD 10K/transfer, USD 50K/month** — useful only for small/urgent payments, not the main tranche |
| Crypto (licensed rails — see below) | ~0.3–1.5% ≈ HKD 11–57K | Same-day to minutes; viability hinges on whether King accepts USDT |
| Crypto P2P / unlicensed OTC | Low spread on paper | **Avoid** — no legal recourse at this size (see below) |

### Wise setup — how to create the accounts, and prerequisites per side

Two separate accounts, one per side. Each is opened under that side's registered business — a PH entity opens Wise Business Philippines, an HK entity opens Wise Business Hong Kong. You cannot run both legs off one account.

**How to create either account (same flow, fully online):**

1. Go to wise.com (or the app) → Sign up → choose **Business** account.
2. Enter business details: legal name (must match the registration certificate **exactly** — a spelling mismatch triggers manual review), legal type, business category and activity description, registered + trading addresses, registration number.
3. Add the people: directors' details, plus every beneficial owner at the ownership threshold (20% in PH, 25% in HK).
4. Verify the account opener: photo ID + selfie (done on a phone).
5. Upload the entity documents (lists below) and pay the setup fee where applicable.
6. After verification, activate the currencies you need (PHP balance + account details on the PH account; HKD on the HK account) and send a **small test transfer** end-to-end.

#### Philippines side — Wise Business PH (BSP-licensed)

| | Prerequisites |
| --- | --- |
| Entity types accepted | Freelancer/professional, sole proprietorship, corporation, partnership. Trusts and cooperatives are not onboarded |
| Sole proprietorship docs | **DTI Certificate of Registration** (hard requirement — no DTI cert, no onboarding); photo ID + selfie of owner |
| Corporation docs | SEC Certificate of Incorporation; Articles of Incorporation; latest **General Information Sheet (GIS)** showing directors and ultimate beneficial owners; photo IDs of everyone owning ≥20%; **notarised authorisation letter** signed by the corporate secretary authorising the account opener (Wise provides a template) |
| Fees | Free to register; one-time **PHP 1,400** to unlock local PHP account details |
| Verification time | Typically 2–5 business days once documents are complete |

**Sending from PH (PHP → HKD) — what you need:**

- Fund transfers by bank transfer or e-wallet to **"Wise Pilipinas Inc"** via InstaPay (≤ PHP 50K) or PESONet (larger amounts).
- **No third-party pay-ins:** the funding bank account/e-wallet must be in the exact same name as the Wise Business profile.
- **The binding constraint: USD 10K per transfer / USD 50K per calendar month** for any PHP → foreign-currency conversion (all account types). This is why the main tranche goes by bank wire instead.

**Receiving in PH (PHP account details) — what you need:**

- PHP account details receive **domestic InstaPay only** (max PHP 50K per incoming transfer); no SWIFT/international payments to PHP details.
- Personal and freelancer accounts are capped at PHP 10M received per month; **registered corporations/sole props/partnerships have no monthly receive cap** — another reason collections must run through a registered business profile, not a personal one.
- Practical read for us: the PHP 50K-per-transfer ceiling makes Wise PHP details workable as an overflow collection channel for small buyers, but the primary collection account stays a PH bank account (PESONet for large buyer payments).

#### Hong Kong side — Wise Business HK

| | Prerequisites |
| --- | --- |
| Hard prerequisite | An **HK-registered business** with a valid Business Registration (BR) certificate. No HK entity → no HK Wise account (confirm which of our HK people has one — likely the same entity that contracts with King) |
| Entity types accepted | Sole trader, partnership, limited company (these are also the only types that can **send** HKD from Wise) |
| Sole trader docs | BR certificate; owner's photo ID + personal details |
| Limited company docs | BR certificate; Certificate of Incorporation; directors' details (name, DOB, country of residence); details + photo ID of every shareholder owning ≥25%; up-to-date registered and operating addresses; authorisation letter if the opener isn't an owner/director |
| Verification time | 4–7 working days typical; **extra compliance checks for HKD account details can take up to 60 working days** — this is the single best reason to open the account now, not in October |

**Receiving in HK (HKD account details) — what you need:**

- Local FPS receipts are **free and instant**; CHATS costs ~HK$10/transaction; SWIFT receipts in HKD/USD/CNY/EUR also supported. **No receiving limits.**
- Only HKD, USD, CNY, EUR can land on HKD details — anything else bounces back to the sender.
- Received funds must be used (withdrawn, sent, or converted) within 90 days — irrelevant for us since money moves to King within days.
- This is the landing pad if the PH bank wire routes to our own HK entity before paying King, and the receiving account if King ever needs to refund us.

**Sending from HK (paying King in HKD) — what you need:**

- Pay King by local HKD transfer to their account number or **FPS ID** (instant). Limit: **HKD 10M per transfer** — covers our full ~3.78M in one go.
- The **first** HKD transfer must be funded by bank transfer (to Wise's account or FPS ID `hkd@wise.com`), not by card — build this into the test-transfer step.
- Funding must come from an HK bank account in the business's own name.

**Reverse direction (HK → PH), if we ever need it (refunds to buyers, PH-side expenses):**

- Wise sends HKD → PHP to any PH bank account, up to **PHP 70M per transfer**; large amounts arrive in 1–2 working days.
- Mobile wallets (GCash, Maya, etc.) are capped at PHP 50K per transfer — fine for small refunds, not bulk.

**Bottom line on Wise's role:** PH Wise = collections support + sub-USD 10K payments. HK Wise = HKD operating account to receive and pay King via FPS instantly. The PHP → HKD conversion of the main tranche itself goes by pre-negotiated PH corporate bank wire (or USDT Route B below).

### Crypto routes in detail

**Route A — Licensed stablecoin corridor (PHP → USDT → HKD).**
PHP → USDT on a BSP-licensed VASP (Coins.ph or PDAX; use their OTC desks — PHP 27M is too big for open order books without slippage) → on-chain transfer (minutes, ~$1) → sell USDT for HKD on an SFC-licensed HK platform (OSL or HashKey; under HK's Stablecoins Ordinance only licensed platforms may handle this) → withdraw HKD via FPS. ~0.5–1.5% all-in, same-day. Requires **two corporate KYC onboardings** and full source-of-funds checks on both sides — doubles the compliance work vs. the bank wire for comparable cost. Only wins on speed.

**Route B — King accepts USDT directly (the route worth pursuing).**
HK collectibles/TCG wholesalers commonly accept USDT. If King does, the HK off-ramp disappears: PHP → USDT on Coins.ph/PDAX → King's wallet. ~0.3–1% all-in (PH on-ramp only), settlement in **minutes**, and King can be paid within hours of buyer collections — largely dissolving the Oct 23–30 cash-timing squeeze. Controls required: verified wallet address, small test transfer first, proper invoice/receipt from King (no bank trail for customs paperwork otherwise).

**Route C — Binance P2P / unlicensed OTC: no.**
Binance is not BSP-licensed; HK's Stablecoins Ordinance bars unlicensed OTC shops from stablecoin dealing. At USD ~485K: frozen-account risk, counterparty fraud risk, zero recourse.

**Route D — Hybrid (recommended posture).**
PH corporate bank wire (pre-negotiated FX) as the primary rail for the main tranche; one licensed crypto rail (Route B if King accepts USDT, else Route A) onboarded and tested as the backup pipe; Wise accounts on both sides for collections support, the HK-side FPS payment leg, and any sub-cap urgent payments.

**→ Action: ask King this week whether they accept USDT.** If yes, Route B or a bank-wire+USDT split beats fiat-only. If no, the bank wire stays primary.

### Alternative architecture: collect directly in HK (Shopify + Stripe)

**The proposal:** stand up a Shopify store under the HK entity, have PH buyers pay by card through Stripe Hong Kong (which settles in HKD to an HK bank account), then withdraw in HK to pay King via FPS. The appeal is real: if buyers pay into an HK account directly, the bulk **PH → HK remittance problem disappears entirely** — no BSP outward-FX window, no Wise USD 50K/month cap, no bank-wire FX negotiation. The card networks do the cross-border leg, funds land in HKD, and paying King is the easy FPS step we already planned. It is fully legal, and Stripe gives a clean, auto-reconciled paper trail (one order = one payment per buyer), which also helps source-of-funds and customs evidence.

But for **this** deal — ~HKD 3.78M of high-ticket payments collected in a one-week burst — card processing is the wrong primary rail. Three problems, in order of severity:

**1. Fund holds / reserves can freeze the cash exactly when we need it (the deal-killer risk).**
Stripe (like all payment facilitators) onboards instantly and underwrites *after* money starts moving. The textbook triggers for a reserve or freeze are: a brand-new merchant, a sudden volume spike, high average ticket, and **fulfillment that happens after payment** (we ship after Oct 30). This deal hits *every* trigger at once. Stripe can hold 100% of the balance, impose a 5–30% rolling reserve, or delay payouts 30–120 days. If that happens during **Oct 23–30**, the money is locked precisely when King's invoice is due — converting our manageable collection-lag risk into a frozen-funds crisis with no recourse on King's timeline.

**2. Fees are roughly 3–6× the bank-wire / crypto cost.**
Stripe HK is 3.4% + HK$2.35 (domestic), **+0.5% for international cards** (all PH-issued cards are international to an HK account), **+2% if currency conversion is required**. Realistic landed rate for PH-card → HKD settlement is **~3.9–5.9%**.

| Rail | All-in cost on ~HKD 3.78M | vs. bank wire (~1–2%) |
| --- | --- | --- |
| Stripe HK, no conversion (~3.9%) | ~HKD 147K + per-txn fees | +70K to +110K |
| Stripe HK, with conversion (~5.9%) | ~HKD 223K + per-txn fees | +150K to +185K |
| PH corporate bank wire (1–2%) | ~HKD 38–76K | baseline |
| Licensed crypto (0.3–1.5%) | ~HKD 11–57K | cheaper |

On top of that: **HK$85 per chargeback**, and a dispute rate over ~0.75% itself triggers reserves. That HKD 100–185K delta is a direct hit to margin.

**3. Chargebacks reverse the "no case ships without cleared payment" rule.**
Card payments are reversible for ~120 days; bank transfers and USDT are not. For high-value collectibles shipped *after* payment, "item not received" / "not as described" disputes are a known abuse vector, and the merchant often loses by default. The current plan's irreversibility (PESONet/wire/USDT) is a feature we'd be giving up.

**Secondary frictions:**
- **Buyer card limits.** A multi-case order is tens of thousands of HKD on one charge (3 cases ≈ HKD 10,566 ≈ PHP 75K+). Many PH consumer cards can't hold that, and large foreign-currency charges are routinely declined by issuers as suspected fraud.
- **Buyer-side FX returns.** Buyers' cards add ~1–3% foreign-transaction fees — reintroducing the "dozens of retail FX spreads" this plan deliberately avoids, just shifted onto the buyer (and onto our price competitiveness).
- **Shopify is overkill** for a known, pre-committed buyer list. If we want the HK-landing benefit, Stripe Payment Links / invoices do the same job without a storefront subscription; Shopify only adds value if we're building an ongoing public store.

**Verdict — useful as a supplementary channel, not the main rail.**
- **Do not** route the main tranche through Stripe: the freeze risk in the Oct 23–30 window alone disqualifies it, before counting the fee and chargeback costs.
- **Optionally** use it for small / single-case buyers, deposits, or buyers who genuinely only have a card and can't do a bank transfer — capped to a small share of total volume.
- **If used at all,** open and *warm up* the Stripe account months ahead (process small real volumes in Aug–Sep so the October burst isn't a cold-start spike), and proactively tell Stripe underwriting the expected October volume and fulfillment timeline with documentation. A cold account taking HKD 3.78M in one week will almost certainly be held.
- The clean way to capture the "land funds directly in HK" benefit without card risk is **King accepting USDT (Route B)** or the pre-negotiated PH bank wire — both already in the stack and both cheaper and irreversible.

### Regulatory (BSP)

- Banks may sell FX for outward remittance without prior BSP approval up to **USD 1M/day for corporates** (USD 500K/day for individuals) with an Application to Purchase FX form. Our ~USD 485K fits in one day as a corporate; as an individual it's at the line — remit as a business entity or split over two days.
- Expect source-of-funds checks at this size: the buyer ledger + King's invoice are the evidence to have ready.

### Do now (not in allocation week)

1. [ ] Confirm which registered entities we open Wise under: PH side (DTI sole prop or SEC corporation — gather DTI cert / SEC cert + Articles + GIS + notarised authorisation letter) and HK side (entity with a valid BR certificate).
2. [ ] Open + verify **both** Wise Business accounts now — PH verification is 2–5 days, but HK extra checks for HKD account details can run up to 60 working days.
3. [ ] Pay the PHP 1,400 fee for PH local account details; activate HKD details on the HK account.
4. [ ] **Pre-negotiate the FX rate with a PH bank for the full ~PHP 27M wire — this is now the primary rail**, not the fallback (Wise PH conversion is capped at USD 50K/month).
5. [ ] Send a small test transfer end-to-end on every rail we plan to use: PH bank wire → King (or → our HK Wise), and HK Wise → King via FPS (first Wise HKD transfer must be funded by bank transfer, not card).
6. [ ] Confirm with King which currency the invoice is in (HKD assumed), their receiving bank details, and whether they accept FPS.
7. [ ] Ask King whether they accept USDT — if yes, onboard with Coins.ph/PDAX (corporate) and run a small test payment to their verified wallet.

## 10. Operations Team (minimum viable)

Three core people plus outsourced labor at peak moments. Most work concentrates in Oct 23 – early Nov.

| Role | Owns | Load |
| --- | --- | --- |
| **Ops lead (HK)** | Freight negotiation, storage, Oct 30 intake, outbound shipment | Bursts; near full-time release week |
| **Finance / collections** | Buyer ledger, deposits, payment chasing (Oct 23–29), paying King | Critical seat in allocation week |
| **PH lead** | Buyer comms, customs broker liaison, last-mile distribution | Light until shipment lands, then primary |

**Outsourced, not staffed:**

- Freight forwarder — export/import paperwork and trucking (confirm customs clearance is included in the 450/case rate)
- PH customs broker — usually the forwarder's local partner
- 2 temp laborers for intake day only — our people scan and verify counts; hired hands move boxes

**Hard rule:** collections and physical intake peak in the same week — never assign both to one person. Absolute minimum is two people (PH lead also runs collections, since buyer comms and payment chasing are the same conversations), but three is the realistic floor for 1,230 cases.

## 11. Open Questions

- Currency confirmation for the 3,072 and 450 figures (assumed HKD).
- Selling price per case on the PH side — needed to compute margin and break-even fallout rate.
- Does the 450/case transport rate include insurance and PH-side duties/taxes, or freight only?
- Who clears customs and pays duties in PH — us or the buyers?
- King's exact invoice due date convention (days after invoice vs. before release).
- Which HK-registered entity (with BR certificate) opens the HK Wise account — and is it the same entity King invoices?
- PH side: do we register a corporation or run this as a DTI sole proprietorship? (Affects Wise docs, the BSP USD 1M/day corporate FX window, and the no-receive-cap status on collections.)
