"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import { useInventory } from "@/components/cart/InventoryContext";
import { formatPrice } from "@/lib/format";
import catalog from "@/lib/catalog.json";

const SHIPPING_FLAT = 120; // HKD, mock flat insured shipping

const PAYMENT_METHODS = [
  {
    id: "bank",
    label: "Bank transfer",
    hint: "PESONet / InstaPay — settles same day",
  },
  {
    id: "card",
    label: "Credit / debit card",
    hint: "Visa, Mastercard, UnionPay",
  },
  {
    id: "usdt",
    label: "USDT (crypto)",
    hint: "TRC-20 / ERC-20 — settles in minutes",
  },
];

function mockOrderId() {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `CS-${n}`;
}

export default function CheckoutPage() {
  const currency = catalog.currency;
  const { items, subtotal, clear } = useCart();
  const { decrement } = useInventory();

  const [form, setForm] = useState({ name: "", email: "", country: "Hong Kong" });
  const [payment, setPayment] = useState("bank");
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  const shipping = items.length > 0 ? SHIPPING_FLAT : 0;
  const total = subtotal + shipping;

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Please enter a valid email.";
    if (!form.country.trim()) next.country = "Please enter a country.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function placeOrder(e) {
    e.preventDefault();
    if (items.length === 0 || !validate()) return;

    const orderId = mockOrderId();
    const method = PAYMENT_METHODS.find((m) => m.id === payment);
    const summary = {
      orderId,
      total,
      method: method?.label ?? payment,
      email: form.email.trim(),
      lines: items.map((i) => ({
        variantId: i.variantId,
        label: `${i.name} (${i.code}) — ${i.variantLabel}`,
        qty: i.qty,
        amount: i.price * i.qty,
      })),
    };

    // Mock fulfilment: draw down inventory and clear the cart.
    decrement(items.map((i) => ({ variantId: i.variantId, qty: i.qty })));
    clear();
    setConfirmation(summary);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- Confirmation state -------------------------------------------------
  if (confirmation) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Order confirmed
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Thank you — we&apos;re on it.</h1>
          <p className="mt-3 text-muted">
            Order <span className="font-semibold text-foreground">{confirmation.orderId}</span> has
            been placed. A confirmation has been sent to{" "}
            <span className="font-semibold text-foreground">{confirmation.email}</span>.
          </p>

          <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
            {confirmation.lines.map((l) => (
              <div key={l.variantId} className="flex justify-between gap-4">
                <dt className="text-muted">
                  {l.label} <span className="tabular-nums">× {l.qty}</span>
                </dt>
                <dd className="font-medium tabular-nums">{formatPrice(l.amount, currency)}</dd>
              </div>
            ))}
            <div className="flex justify-between border-t border-border pt-3">
              <dt className="font-semibold">Total paid · {confirmation.method}</dt>
              <dd className="text-lg font-semibold tabular-nums">
                {formatPrice(confirmation.total, currency)}
              </dd>
            </div>
          </dl>

          <p className="mt-6 rounded-lg bg-background px-4 py-3 text-xs text-muted">
            This is a demonstration store. No payment was processed and no product will ship.
          </p>

          <Link
            href="/buy"
            className="mt-6 inline-block rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent"
          >
            Back to releases
          </Link>
        </div>
      </main>
    );
  }

  // ---- Empty cart ---------------------------------------------------------
  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold">Your cart is empty</h1>
        <p className="mt-3 text-muted">Add a few releases before checking out.</p>
        <Link
          href="/buy"
          className="mt-6 inline-block rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent"
        >
          Browse releases
        </Link>
      </main>
    );
  }

  // ---- Checkout form ------------------------------------------------------
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Checkout</h1>

      <form onSubmit={placeOrder} className="grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Left: details + payment */}
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="mb-4 text-lg font-semibold">Contact &amp; shipping</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Full name"
                value={form.name}
                onChange={(v) => update("name", v)}
                error={errors.name}
                className="sm:col-span-2"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                className="sm:col-span-2"
              />
              <Field
                label="Country / region"
                value={form.country}
                onChange={(v) => update("country", v)}
                error={errors.country}
                className="sm:col-span-2"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold">Payment method</h2>
            <div className="flex flex-col gap-3">
              {PAYMENT_METHODS.map((m) => {
                const active = payment === m.id;
                return (
                  <label
                    key={m.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                      active ? "border-accent bg-accent/5" : "border-border hover:border-accent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={m.id}
                      checked={active}
                      onChange={() => setPayment(m.id)}
                      className="mt-1 accent-[var(--accent)]"
                    />
                    <span>
                      <span className="block font-medium">{m.label}</span>
                      <span className="block text-sm text-muted">{m.hint}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right: order summary */}
        <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="mb-4 text-lg font-semibold">Order summary</h2>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.variantId} className="flex gap-3">
                <div className="relative h-16 w-12 flex-shrink-0 overflow-hidden rounded border border-border bg-background">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="flex flex-1 justify-between gap-2 text-sm">
                  <span>
                    <span className="font-medium">{item.name}</span>{" "}
                    <span className="text-muted">({item.code})</span>
                    <span className="block text-xs text-muted">
                      {item.variantLabel} × {item.qty}
                    </span>
                  </span>
                  <span className="font-medium tabular-nums">
                    {formatPrice(item.price * item.qty, currency)}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <dl className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
            <Row label="Subtotal" value={formatPrice(subtotal, currency)} />
            <Row label="Insured shipping" value={formatPrice(shipping, currency)} />
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <dt className="font-semibold">Total</dt>
              <dd className="font-semibold tabular-nums">{formatPrice(total, currency)}</dd>
            </div>
          </dl>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:bg-accent"
          >
            Place order
          </button>
          <Link
            href="/buy"
            className="mt-3 block text-center text-xs text-muted underline-offset-2 hover:underline"
          >
            Continue shopping
          </Link>
        </aside>
      </form>
    </main>
  );
}

function Field({ label, value, onChange, error, type = "text", className = "" }) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-lg border bg-background px-3 py-2 text-sm outline-none transition focus:border-accent ${
          error ? "border-red-500" : "border-border"
        }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted">{label}</dt>
      <dd className="tabular-nums">{value}</dd>
    </div>
  );
}
