"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import { useCartUI } from "@/components/cart/CartUIContext";

export default function ShopHeader() {
  const { count } = useCart();
  const { openCart } = useCartUI();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-3">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Card Saints
          </Link>
          <span className="hidden text-sm text-muted sm:inline">· One Piece TCG (JP)</span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/buy"
            className="hidden text-sm underline-offset-4 hover:underline sm:inline"
          >
            Releases
          </Link>

          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium transition hover:border-accent"
            aria-label={`Open cart, ${count} items`}
          >
            Cart
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-semibold text-accent-foreground">
              {count}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
