"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import { useCartUI } from "@/components/cart/CartUIContext";
import { useInventory } from "@/components/cart/InventoryContext";
import { formatPrice } from "@/lib/format";
import catalog from "@/lib/catalog.json";

export default function CartDrawer() {
  const { items, subtotal, setQty, remove } = useCart();
  const { open, closeCart } = useCartUI();
  const { getStock } = useInventory();
  const currency = catalog.currency;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-foreground/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-lg font-semibold">Your cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full p-1.5 text-2xl leading-none text-muted hover:text-foreground"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-muted">Your cart is empty.</p>
            <Link
              href="/buy"
              onClick={closeCart}
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background hover:bg-accent"
            >
              Browse releases
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {items.map((item) => {
                const stock = getStock(item.variantId);
                return (
                  <li key={item.variantId} className="flex gap-3 py-4">
                    <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border border-border bg-card">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold leading-tight">
                            {item.name}{" "}
                            <span className="text-muted">({item.code})</span>
                          </p>
                          <p className="text-xs text-muted">{item.variantLabel}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(item.variantId)}
                          className="text-xs text-muted underline-offset-2 hover:text-red-700 hover:underline"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-border">
                          <button
                            type="button"
                            onClick={() => setQty(item.variantId, item.qty - 1)}
                            className="px-2 py-0.5 text-base leading-none"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-7 text-center text-sm tabular-nums">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(item.variantId, Math.min(stock, item.qty + 1))}
                            disabled={item.qty >= stock}
                            className="px-2 py-0.5 text-base leading-none disabled:opacity-30"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm font-semibold">
                          {formatPrice(item.price * item.qty, currency)}
                        </p>
                      </div>
                      {item.qty >= stock && (
                        <p className="mt-1 text-xs text-amber-700">Max available reached</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-border px-5 py-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="text-lg font-semibold">{formatPrice(subtotal, currency)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="block rounded-lg bg-foreground px-4 py-3 text-center text-sm font-semibold text-background transition hover:bg-accent"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 block w-full text-center text-xs text-muted underline-offset-2 hover:underline"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
