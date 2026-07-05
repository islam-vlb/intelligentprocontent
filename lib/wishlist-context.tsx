"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type WishlistContextType = {
  ids: number[];
  toggle: (id: number) => void;
  has: (id: number) => boolean;
};

const WishlistContext = createContext<WishlistContextType | null>(null);
const STORAGE_KEY = "wishlist-ids";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, hydrated]);

  function toggle(id: number) {
    setIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }

  return (
    <WishlistContext.Provider value={{ ids, toggle, has: (id) => ids.includes(id) }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
