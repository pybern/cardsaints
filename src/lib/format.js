// Formatting + inventory helpers for the Card Saints shop.

const LOW_STOCK_THRESHOLD = 6;

const formatters = {};

/** Format an integer amount as currency, e.g. formatPrice(7452, "HKD") -> "HK$7,452". */
export function formatPrice(amount, currency = "HKD") {
  if (!formatters[currency]) {
    formatters[currency] = new Intl.NumberFormat("en-HK", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    });
  }
  return formatters[currency].format(amount);
}

/** Stock bucket for a given quantity on hand. */
export function stockState(stock) {
  if (stock <= 0) return "out";
  if (stock <= LOW_STOCK_THRESHOLD) return "low";
  return "in";
}

/** Human label for a stock level. */
export function stockLabel(stock) {
  switch (stockState(stock)) {
    case "out":
      return "Sold out";
    case "low":
      return `Low stock — ${stock} left`;
    default:
      return "In stock";
  }
}

/** Format an ISO date string as e.g. "Nov 8, 2024". Returns "" when missing. */
export function formatReleaseDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export { LOW_STOCK_THRESHOLD };
