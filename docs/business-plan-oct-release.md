# Card Saints — October 30 Release: Business & Operations Plan

_Last updated: June 11, 2026_

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

**Primary rail: Wise Business (Philippines)** — BSP-licensed, supports PHP → HKD funded via PESONet, mid-market FX rate, automatic volume discounts above USD 25K equivalent, dedicated high-value team for ~USD 500K transfers.

| Rail | Typical all-in cost on PHP ~27M | Notes |
| --- | --- | --- |
| Wise Business | ~0.4–0.6% ≈ HKD 15–23K | Mid-market rate; PESONet funding; 1–2 working days |
| PH bank wire (BDO/BPI/Metrobank) | ~1–2% FX markup ≈ HKD 38–76K | Fallback rail; pre-negotiate FX rate for the size |
| Crypto (licensed rails — see below) | ~0.3–1.5% ≈ HKD 11–57K | Same-day to minutes; viability hinges on whether King accepts USDT |
| Crypto P2P / unlicensed OTC | Low spread on paper | **Avoid** — no legal recourse at this size (see below) |

### Crypto routes in detail

**Route A — Licensed stablecoin corridor (PHP → USDT → HKD).**
PHP → USDT on a BSP-licensed VASP (Coins.ph or PDAX; use their OTC desks — PHP 27M is too big for open order books without slippage) → on-chain transfer (minutes, ~$1) → sell USDT for HKD on an SFC-licensed HK platform (OSL or HashKey; under HK's Stablecoins Ordinance only licensed platforms may handle this) → withdraw HKD via FPS. ~0.5–1.5% all-in, same-day. Requires **two corporate KYC onboardings** and full source-of-funds checks on both sides — doubles the compliance work vs. Wise for comparable cost. Only wins on speed.

**Route B — King accepts USDT directly (the route worth pursuing).**
HK collectibles/TCG wholesalers commonly accept USDT. If King does, the HK off-ramp disappears: PHP → USDT on Coins.ph/PDAX → King's wallet. ~0.3–1% all-in (PH on-ramp only), settlement in **minutes**, and King can be paid within hours of buyer collections — largely dissolving the Oct 23–30 cash-timing squeeze. Controls required: verified wallet address, small test transfer first, proper invoice/receipt from King (no bank trail for customs paperwork otherwise).

**Route C — Binance P2P / unlicensed OTC: no.**
Binance is not BSP-licensed; HK's Stablecoins Ordinance bars unlicensed OTC shops from stablecoin dealing. At USD ~485K: frozen-account risk, counterparty fraud risk, zero recourse.

**Route D — Hybrid (recommended posture).**
Wise as primary rail; one licensed crypto rail (Route B if King accepts USDT, else Route A) onboarded and tested as the backup pipe in case Wise verification or daily limits bite during the one-week window.

**→ Action: ask King this week whether they accept USDT.** If yes, Route B or a Wise+USDT split beats fiat-only. If no, Wise stays primary.

### Regulatory (BSP)

- Banks may sell FX for outward remittance without prior BSP approval up to **USD 1M/day for corporates** (USD 500K/day for individuals) with an Application to Purchase FX form. Our ~USD 485K fits in one day as a corporate; as an individual it's at the line — remit as a business entity or split over two days.
- Expect source-of-funds checks at this size: the buyer ledger + King's invoice are the evidence to have ready.

### Do now (not in allocation week)

1. [ ] Open + fully verify Wise Business account and the PH collection account — KYC on a USD 500K corridor takes time.
2. [ ] Send a small test transfer to King's account to prove the route end-to-end.
3. [ ] Pre-negotiate a fallback FX rate with a PH bank for the full amount.
4. [ ] Confirm with King which currency the invoice is in (HKD assumed) and their receiving bank details.
5. [ ] Ask King whether they accept USDT — if yes, onboard with Coins.ph/PDAX (corporate) and run a small test payment to their verified wallet.

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
