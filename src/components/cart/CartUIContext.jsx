"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartUIContext = createContext(null);

export function CartUIProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({
      open,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      toggleCart: () => setOpen((v) => !v),
    }),
    [open],
  );
  return <CartUIContext.Provider value={value}>{children}</CartUIContext.Provider>;
}

export function useCartUI() {
  const ctx = useContext(CartUIContext);
  if (!ctx) throw new Error("useCartUI must be used within a CartUIProvider");
  return ctx;
}
