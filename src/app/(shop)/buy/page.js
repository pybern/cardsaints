import Link from "next/link";
import catalog from "@/lib/catalog.json";
import CategorySection from "@/components/shop/CategorySection";

export const metadata = {
  title: "Buy One Piece TCG Releases — Card Saints",
  description:
    "Shop sealed One Piece TCG product from Card Saints — Booster Sets (OP), Extra Boosters (EB), and Starter Decks (ST). Booster boxes, sealed cases, and displays. Prices in HKD.",
};

export default function BuyPage() {
  const { categories, products, currency } = catalog;
  const productsByCategory = (key) => products.filter((p) => p.category === key);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-12 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          One Piece Card Game
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Buy current releases
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Sealed product from across the line — Booster Sets, Extra Boosters, and Starter
          Decks. Sourced by the case, sold by the box, deck, or display. All prices in HKD.
        </p>

        <nav className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link
              key={c.key}
              href={`#${c.key}`}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium transition hover:border-accent"
            >
              {c.label}{" "}
              <span className="text-muted">({productsByCategory(c.key).length})</span>
            </Link>
          ))}
        </nav>
      </header>

      <div className="flex flex-col gap-16">
        {categories.map((category) => (
          <CategorySection
            key={category.key}
            category={category}
            products={productsByCategory(category.key)}
            currency={currency}
          />
        ))}
      </div>
    </main>
  );
}
