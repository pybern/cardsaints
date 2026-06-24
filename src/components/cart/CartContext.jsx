"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "cardsaints.cart.v1";

const initialState = { items: {} };

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.state ?? state;

    case "add": {
      const { product, variant, qty } = action;
      const existing = state.items[variant.id];
      const nextQty = (existing?.qty ?? 0) + qty;
      return {
        items: {
          ...state.items,
          [variant.id]: {
            variantId: variant.id,
            qty: nextQty,
            code: product.code,
            name: product.name,
            category: product.category,
            image: product.image,
            variantLabel: variant.label,
            price: variant.price,
          },
        },
      };
    }

    case "setQty": {
      const { variantId, qty } = action;
      if (qty <= 0) {
        const next = { ...state.items };
        delete next[variantId];
        return { items: next };
      }
      const existing = state.items[variantId];
      if (!existing) return state;
      return { items: { ...state.items, [variantId]: { ...existing, qty } } };
    }

    case "remove": {
      const next = { ...state.items };
      delete next[action.variantId];
      return { items: next };
    }

    case "clear":
      return { items: {} };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Refs (not state) so we never call setState inside an effect.
  const hydratedRef = useRef(false);
  const skipPersistRef = useRef(true);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", state: JSON.parse(raw) });
    } catch {
      // ignore corrupt storage
    }
    hydratedRef.current = true;
  }, []);

  // Persist on change — but skip the initial (pre-hydration) render so we never
  // overwrite stored data with the empty initial state.
  useEffect(() => {
    if (skipPersistRef.current) {
      skipPersistRef.current = false;
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota / privacy-mode errors
    }
  }, [state]);

  const items = useMemo(() => Object.values(state.items), [state.items]);
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      add: (product, variant, qty = 1) => dispatch({ type: "add", product, variant, qty }),
      setQty: (variantId, qty) => dispatch({ type: "setQty", variantId, qty }),
      remove: (variantId) => dispatch({ type: "remove", variantId }),
      clear: () => dispatch({ type: "clear" }),
    }),
    [items, count, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
