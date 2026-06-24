"use client";

import { createContext, useContext, useEffect, useMemo, useReducer, useRef } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "cardsaints.lang.v1";

/** Returns the image path for a product in the given language, with fallbacks. */
export function productImage(product, lang) {
  return product?.images?.[lang] || product?.images?.en || product?.image;
}

function reducer(state, action) {
  if (action.type === "set" && (action.lang === "en" || action.lang === "jp")) return action.lang;
  return state;
}

export function LanguageProvider({ children }) {
  // Always start "en" so server and client first render match; hydrate after mount.
  const [lang, dispatch] = useReducer(reducer, "en");
  const skipPersist = useRef(true);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) dispatch({ type: "set", lang: saved });
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (skipPersist.current) {
      skipPersist.current = false;
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang: (l) => dispatch({ type: "set", lang: l }) }),
    [lang],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
