"use client";

import { useState, useMemo } from "react";
import { FALLBACK_PRODUCTS, FALLBACK_CATEGORIES } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";
import CategoryTiles from "@/components/CategoryTiles";

export default function ShopClient() {
  const [active, setActive] = useState<string>("All");
  const search = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("search") : "";

  const filtered = useMemo(() => {
    let list = FALLBACK_PRODUCTS;
    if (active !== "All") list = list.filter((p) => p.category === active);
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    return list;
  }, [active, search]);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-2">Content Systems</h1>
        {search && <p className="text-text-secondary mb-6">Results for <span className="font-semibold text-primary">&quot;{search}&quot;</span></p>}
      </div>
      <CategoryTiles />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setActive("All")} className={`min-h-[40px] rounded-full px-5 py-2 text-sm font-semibold transition-all ${active === "All" ? "bg-primary text-bg" : "border border-primary/20 text-text-secondary hover:text-primary"}`}>All</button>
          {FALLBACK_CATEGORIES.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`min-h-[40px] rounded-full px-5 py-2 text-sm font-semibold transition-all ${active === c ? "bg-primary text-bg" : "border border-primary/20 text-text-secondary hover:text-primary"}`}>{c}</button>
          ))}
        </div>
        {filtered.length === 0 ? <p className="text-text-muted py-12 text-center">No systems found in this category.</p> : (
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 pb-12">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
