import ProductCard from "@/components/shop/ProductCard";

export default function CategorySection({ category, products, currency }) {
  return (
    <section id={category.key} className="scroll-mt-24">
      <div className="mb-6 border-b border-border pb-4">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">{category.label}</h2>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
            {category.key} · {products.length} releases
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-muted">{category.blurb}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} currency={currency} />
        ))}
      </div>
    </section>
  );
}
