# Card Saints — October 30 Release: Business & Operations Plan

_Last updated: June 12, 2026_

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
| HK off-ramp blocked (same-name rule, no HK bank account) | Medium | **Critical** | Confirm Wise HK acceptance with OSL/HashKey now; if refused, open HK corporate bank account immediately — gating item for the USDT rail (§9) |
| VASP/platform compliance hold mid-window | Medium | High | Both PH desks onboarded for redundancy; source-of-funds pre-cleared during onboarding; 4–6 tranche split so no single hold strands the full amount |

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

> **⚠ Current state of play (June 12):** Wise Philippines caps PHP → foreign-currency conversion at **USD 10,000 per transfer and USD 50,000 per calendar month** — business accounts included — so Wise PH cannot carry the ~USD 485K main tranche. **International bank wiring is not available to us at the moment**, which takes the bank rail off the table too. That leaves the **licensed USDT corridor (Route A) as the primary rail**: PHP → USDT at a BSP-licensed VASP → USDT → HKD at an SFC-licensed HK platform → bank transfer to King (who accepts cash or bank transfer only). Wise stays in the stack for collections support, sub-cap payments, and — pending one critical confirmation — possibly as the HK off-ramp landing account. The wire mechanics section below is retained as the fallback if banking capability is restored before release.

| Rail | Typical all-in cost on PHP ~27M | Notes |
| --- | --- | --- |
| Crypto Route A (licensed rails — see below) | ~0.45–1.15% ≈ HKD 17–42K | **Primary rail.** Full two-hop corridor; King's HKD lands Mon–Tue. Gating item: the same-name off-ramp (see below) |
| PH corporate bank wire (BDO/BPI/Metrobank) | ~1–2% FX markup ≈ HKD 38–76K | **Not currently available to us.** Becomes the fallback if banking capability is restored before release |
| Wise Business (PH) | Mid-market + ~0.6% fee | **Capped at USD 10K/transfer, USD 50K/month** — small/urgent payments only |
| Crypto P2P / unlicensed OTC | Low spread on paper | **Avoid** — no legal recourse at this size (see below) |

### How the bank wire actually works, step by step

> **Status: fallback only.** Wiring isn't available to us at the moment, so this section is kept as the playbook to activate if banking capability is restored before release. The live primary rail is the USDT corridor below.

**Set up now (weeks before allocation):**

1. **Corporate account + RM.** The PH collection account at BDO/BPI/Metrobank, enrolled in corporate online banking, with a named relationship manager. At ~USD 485K you transact with the bank's **treasury/FX desk** through the RM — never at branch board rates.
2. **Pre-agree the FX terms.** Negotiate a fixed margin over the interbank PHP→HKD rate (often quoted as a PHP→USD→HKD cross) for this transaction size. Ask whether they'll offer a **forward contract** to lock the rate before allocation week — on PHP 27M, a 0.5% rate move is ~PHP 135K, bigger than the wire fees.
3. **Register King as a beneficiary.** Full legal name exactly as on their bank account, account number, bank name and address, SWIFT/BIC. Get these from King in writing alongside the invoice currency confirmation.
4. **Pre-stage the paperwork.** BSP **Application to Purchase FX** form (the bank supplies it), King's invoice as the underlying trade document, and the buyer ledger for source-of-funds. Ask the RM up front exactly which documents their compliance wants for a trade payment of this size, so nothing is requested for the first time during allocation week.
5. **Run a test wire now** (e.g., HKD 5–10K) to King's account — proves beneficiary details, the document chain, and the bank's process end-to-end.

**Execution during allocation week (per tranche):**

1. Buyer payments clear into the collection account — InstaPay (≤ PHP 50K) is 24/7 instant; **PESONet settles in batches on banking days only**, so a buyer paying after the afternoon cutoff credits the next banking day.
2. Once the balance covers the tranche, call the FX desk via the RM, take the live quote at the agreed margin, and **book the deal** — the rate locks at booking. Same-day value usually requires booking before the desk's cutoff (typically late morning Manila time).
3. Submit the Application to Purchase FX + invoice; bank debits PHP and sends HKD by SWIFT.
4. **Charge option "OUR"** so correspondent fees are paid by us and King receives the invoice amount in full — confirm this with King so there's no short-payment dispute. Expect a remittance fee plus correspondent charges, trivial against the FX margin.
5. Get the **SWIFT MT103 copy** from the bank and send it to King as proof of payment. HKD typically credits King same day to T+1 (PH and HK share a timezone, which helps).

**The calendar wrinkle: Oct 23, 2026 is a Friday.** Allocation confirms Friday; weekend collections arrive via InstaPay only (PESONet sleeps until Monday), and the FX desk is closed Sat–Sun. Realistic earliest wire for the bulk is **Monday Oct 26**, crediting King ~Oct 26–27. That still beats the Oct 30 release, but it means: (a) push buyers hard to pay Friday before PESONet cutoff, (b) consider two tranches — wire whatever has cleared by Friday's cutoff, wire the rest Monday/Tuesday — wire fees are fixed and small, so a second tranche costs almost nothing and de-risks the deadline, and (c) confirm King is fine with payment landing in two parts.

**Optional variant — route via our HK Wise account:** the PH bank wires SWIFT HKD to our HK Wise HKD account details instead of King directly, then we pay King by FPS (instant, free) at the exact moment we choose. Adds a hop and Wise's SWIFT receiving fee, but decouples "money left PH" from "King got paid" — useful if King's invoice timing and our collection timing don't line up cleanly.

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

**Bottom line on Wise's role:** PH Wise = collections support + sub-USD 10K payments. HK Wise = HKD operating account — and potentially the **landing account for the USDT off-ramp**, if OSL/HashKey accept Wise account details under their same-name rule (the gating question in the Route A section below). The main tranche itself moves via the licensed USDT corridor while wiring is unavailable.

### Crypto routes in detail

> **King's answer (confirmed): cash or bank transfer only — no USDT.** That kills Route B (paying King's wallet directly), which was the cheap, fast version. The only crypto path left is **Route A**, the full two-hop corridor ending in an HKD bank transfer to King. Cash settlement of HKD 3.78M is a non-starter regardless of rail: AML reporting thresholds, physical handling risk, and no payment trail for the customs file.

**Route A — Licensed stablecoin corridor (PHP → USDT → HKD → bank transfer to King).**
PHP → USDT on a BSP-licensed VASP OTC desk (Coins.ph or PDAX — PHP 27M is too big for open order books) → on-chain transfer (minutes, ~USD 1 on TRC-20) → sell USDT for HKD on an SFC-licensed HK platform (OSL or HashKey; under HK's Stablecoins Ordinance only licensed platforms may handle this) → withdraw HKD to a same-name bank account → pay King by FPS/bank transfer.

**Route C — Binance P2P / unlicensed OTC: no.**
Binance is not BSP-licensed; HK's Stablecoins Ordinance bars unlicensed OTC shops from stablecoin dealing. At USD ~485K: frozen-account risk, counterparty fraud risk, zero recourse.

### Route A total cost of operations — the calculations

**Anchor numbers.** King must receive **HKD 3,778,560**. Assumed mid rates for the worked math (refresh on the day): USD/HKD 7.80, USD/PHP 56.5 → PHP/HKD cross ≈ 7.244. At a frictionless mid rate the transfer would cost **PHP 27.37M**. Every rail is measured by how much *more* PHP it takes to land the same HKD.

**Leg-by-leg cost build-up (on the full amount):**

| # | Leg | Cost assumption | Cost in HKD terms |
| --- | --- | --- | --- |
| 1 | PESONet, collection account → VASP (same-name, ~5 tranches) | ~PHP 0–50 per transfer | ~0 |
| 2 | PHP → USDT on the OTC desk | 0.3–0.7% spread vs. mid¹ | 11.3K – 26.5K |
| 3 | USDT withdrawal fee + TRC-20 gas (~5 transfers) | ~USDT 5–20 per transfer | 0.2K – 0.8K |
| 4 | USDT → HKD on OSL/HashKey OTC | 0.15–0.4% spread vs. mid | 5.7K – 15.1K |
| 5 | HKD withdrawal to bank + FPS to King | ~0–HK$50 | ~0 |
| | **Total friction** | **~0.45–1.15%** | **~HKD 17K – 42K** |

¹ The PH leg is the expensive one because USDT in PHP routinely trades at a **0.2–0.5% premium** over the USD mid — that premium is the market's price for moving money out of PHP, and it's embedded in the desk's quote. Always compare the quote against the live PHP/USD mid before accepting.

**Worked example at the mid-range (~0.75% all-in):**

1. Start with **PHP 27,580,000** (mid requirement 27.37M grossed up 0.75%).
2. PH OTC desk converts at 0.5% off mid: 27,580,000 ÷ 56.5 × 0.995 ≈ **USDT 485,700**.
3. Withdraw on-chain, minus ~USDT 20 fees → **USDT 485,680** lands at the HK platform.
4. HK desk sells at 0.25% off mid: 485,680 × 7.80 × 0.9975 ≈ **HKD 3,778,830**.
5. Withdraw and pay King **HKD 3,778,560** by FPS — ~HKD 270 to spare.

Total friction in this scenario: **~PHP 205,000 ≈ HKD 28,300**.

**Head-to-head on the full amount:**

| Rail | All-in friction | HKD cost on 3.78M | When King's HKD lands |
| --- | --- | --- | --- |
| Bank wire at board rates (1.5–2%) — *currently unavailable* | worst case | 57K – 76K | Mon Oct 26 booking → Mon–Tue |
| Bank wire, negotiated margin (0.5–0.75%) — *currently unavailable* | target case | 19K – 28K | Mon Oct 26 booking → Mon–Tue |
| **Route A USDT (0.45–1.15%) — primary** | quote-dependent | 17K – 42K | ~Mon–Wed — see timeline below |
| ~~Route B (King's wallet)~~ | ~~8K – 28K, Saturday~~ | — | **Dead — King is fiat-only** |

**The timing edge is mostly gone too.** Route B's killer feature was weekend settlement into King's wallet. With King fiat-only, the corridor must exit through the HK platform's fiat withdrawal queue (1–2 business days processing) into a bank account before King can be paid — so the HKD realistically lands Monday–Tuesday, the same as the wire. The USDT itself moves on Saturday, but that just means the money waits in a different queue.

**Operational costs that don't show up in the fee math:**

- **Two corporate KYB onboardings** (Coins.ph Business/TradeDesk or PDAX Prime via prime@pdax.ph on the PH side: SEC docs, board resolution, UBO form; OSL/HashKey institutional onboarding on the HK side, e.g. global-vip@hashkey.com), each with source-of-funds review. Expect the HK side to take as long as Wise HK.
- **The same-name withdrawal problem:** OSL/HashKey pay fiat out only to a bank account matching the verified corporate name. If the HK entity has no HK corporate bank account, this route is **blocked** — and opening one at an HK bank for a fresh entity is its own slow project. The one escape to verify during onboarding: whether withdrawal to our **Wise HK Business account details** satisfies the same-name rule. If yes, the loop closes; if no, Route A needs an HK bank account the bank wire doesn't need.
- **Wallet ops controls:** whitelisted addresses, 2FA, two-person checks on every on-chain transfer, tx-hash record-keeping, and a manual paper trail (invoice + hashes + receipts) replacing the bank's MT103.
- **Minimum deposits / desk minimums:** OSL has had ~HK$10K minimum first deposits; PDAX OTC minimum trade is PHP 1M — neither binds at our size.

### Decision: Route A is the primary rail — operating posture

International wiring isn't available to us right now, so the USDT corridor carries the main tranche. The cost build-up above stands (~0.45–1.15% ≈ HKD 17–42K). Being the **only** rail changes how we run it — it's now a single point of failure, and the posture below is about removing each failure mode before allocation week:

1. **Critical path #1 — resolve the off-ramp now.** Ask OSL **and** HashKey this week whether fiat withdrawal to our Wise HK Business account details satisfies their same-name rule. If either says yes, the loop closes. If both say no, **start opening an HK corporate bank account immediately** — it's slow for fresh entities and becomes the longest lead-time item in the whole plan. No resolved off-ramp = no route = no way to pay King. Everything else in this section is secondary to this answer.
2. **Redundancy on the PH leg.** Onboard **both** Coins.ph TradeDesk and PDAX Prime, not one. If one desk puts a tranche into compliance review mid-window, the other keeps moving. The document pack is identical, so the second onboarding is cheap.
3. **Pre-clear compliance on every hop.** Hand the source-of-funds pack (buyer ledger + King's invoice + business registration) to both PH desks and the HK platform **during onboarding** — not when PHP 27M suddenly arrives. A compliance hold during Oct 23–29 is the most likely way this route fails.
4. **Tranche discipline.** Move the money in 4–6 tranches of PHP ~5–7M, daily as collections clear — never a single lump we can't afford to have frozen for 48 hours. Each tranche: PESONet → VASP → OTC quote (checked against live PHP/USD mid) → on-chain → HK desk sale → withdrawal queue.
5. **Full dress rehearsal before Oct 23.** Run PHP ~100K through every hop — collection account → VASP → USDT → HK platform → HKD → King's bank account, confirmed by King. Not a partial test; the full chain, including the off-ramp withdrawal.
6. **Keep the wire warm as fallback.** If banking capability is restored before release, the wire section above reactivates as the backup pipe — at a negotiated margin it costs about the same and de-risks the crypto-only dependency.

**Timeline on the USDT rail (Friday Oct 23 allocation):** PHP that clears into the VASP by Friday's PESONet cutoff converts Friday/Saturday; USDT moves on-chain over the weekend; the HK desk sale happens Saturday–Monday (confirm weekend desk hours during onboarding); the fiat withdrawal queue (1–2 business days) means **King's HKD lands ~Monday Oct 26 – Wednesday Oct 28**. Commit to Oct 28 with King and treat anything earlier as buffer. The PHP funding leg is the bottleneck: push buyers to pay before Friday's PESONet cutoff, because weekend collections (InstaPay ≤ 50K only) can't enter the VASP until Monday.

### Regulatory (BSP)

- Banks may sell FX for outward remittance without prior BSP approval up to **USD 1M/day for corporates** (USD 500K/day for individuals) with an Application to Purchase FX form. Our ~USD 485K fits in one day as a corporate; as an individual it's at the line — remit as a business entity or split over two days.
- Expect source-of-funds checks at this size: the buyer ledger + King's invoice are the evidence to have ready.

### Do now (not in allocation week)

1. [ ] Confirm which registered entities we open Wise under: PH side (DTI sole prop or SEC corporation — gather DTI cert / SEC cert + Articles + GIS + notarised authorisation letter) and HK side (entity with a valid BR certificate).
2. [ ] Open + verify **both** Wise Business accounts now — PH verification is 2–5 days, but HK extra checks for HKD account details can run up to 60 working days.
3. [ ] Pay the PHP 1,400 fee for PH local account details; activate HKD details on the HK account.
4. [ ] **Gating item — resolve the HK off-ramp this week:** ask OSL and HashKey whether fiat withdrawal to our **Wise HK Business account details** satisfies their same-name rule. If both say no, start opening an HK corporate bank account **immediately** (longest lead-time item in the plan).
5. [ ] **Onboard both PH desks now:** Coins.ph TradeDesk (otcdesk_ph@coins.ph, needs Level 3 business verification) and PDAX Prime (prime@pdax.ph). Get OTC quotes at PHP 5–7M clip sizes, confirm weekend desk availability, and hand over the source-of-funds pack (buyer ledger + King invoice + registration docs) during onboarding.
6. [ ] Onboard the chosen HK platform (OSL or HashKey institutional, e.g. global-vip@hashkey.com) with the same source-of-funds pack; confirm weekend desk hours and fiat withdrawal processing times.
7. [ ] Confirm with King: invoice currency (HKD assumed), receiving bank details, whether they accept FPS, and a committed payment date of **Oct 28** (earlier is buffer). ~~Ask about USDT~~ — answered: **cash or bank transfer only**.
8. [ ] **Full dress rehearsal before Oct 23:** PHP ~100K through the entire chain — collection account → VASP → USDT → HK platform → HKD → King's account, confirmed by King.
9. [ ] If banking capability is restored before release: reactivate the wire playbook above as the backup pipe (negotiate the FX margin, register King as beneficiary, test wire).

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
- PH side: do we register a corporation or run this as a DTI sole proprietorship? (Affects Wise docs, VASP onboarding, and the no-receive-cap status on collections.)
- Why is wiring unavailable, and is it expected back before October? (Determines whether the wire fallback in §9 is real or theoretical.)
- Confirm the collection account can still send domestic PESONet to the VASP — the USDT rail depends on that funding leg even with international wiring down.
