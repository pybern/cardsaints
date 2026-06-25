"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import catalog from "@/lib/catalog.json";

const InventoryContext = createContext(null);

/** Seed a { [variantId]: stock } map from the static catalog. */
function seedStock() {
  const map = {};
  for (const product of catalog.products) {
    for (const variant of product.variants) {
      map[variant.id] = variant.stock;
    }
  }
  return map;
}

export function InventoryProvider({ children }) {
  const [stock, setStock] = useState(seedStock);

  const getStock = useCallback((variantId) => stock[variantId] ?? 0, [stock]);

  /** Decrement stock for a set of ordered { variantId, qty } lines (mock checkout). */
  const decrement = useCallback((lines) => {
    setStock((prev) => {
      const next = { ...prev };
      for (const { variantId, qty } of lines) {
        next[variantId] = Math.max(0, (next[variantId] ?? 0) - qty);
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ stock, getStock, decrement }), [stock, getStock, decrement]);

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export function useInventory() {
  const ctx = useContext(InventoryContext);
  if (!ctx) throw new Error("useInventory must be used within an InventoryProvider");
  return ctx;
}
