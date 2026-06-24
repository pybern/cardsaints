"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import { useCartUI } from "@/components/cart/CartUIContext";
import { useLanguage } from "@/components/shop/LanguageContext";

export default function ShopHeader() {
  const { count } = useCart();
  const { openCart } = useCartUI();
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-3">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Card Saints
          </Link>
          <span className="hidden text-sm text-muted sm:inline">· One Piece TCG</span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/buy"
            className="hidden text-sm underline-offset-4 hover:underline sm:inline"
          >
            Releases
          </Link>

          {/* Edition language toggle */}
          <div
            className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-medium"
            role="group"
            aria-label="Card edition language"
          >
            {[
              { id: "en", label: "EN" },
              { id: "jp", label: "JP" },
            ].map((opt) => {
              const active = lang === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setLang(opt.id)}
                  aria-pressed={active}
                  className={`rounded-full px-3 py-1 transition ${
                    active ? "bg-accent text-accent-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

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
