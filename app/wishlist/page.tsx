"use client";

import Link from "next/link";
import { useWishlist } from "@/lib/wishlist-context";
import ProductCard from "@/components/ProductCard";
import { FALLBACK_PRODUCTS, Product } from "@/lib/supabase";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const products = FALLBACK_PRODUCTS.filter((p: Product) => ids.includes(p.id));

  if (ids.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.3 4.5 5.8 4c2-.3 3.8.6 5.2 2.3C12.4 4.6 14.2 3.7 16.2 4c3.5.5 5.3 4.1 3.8 7.7C19.5 16.4 12 21 12 21z" /></svg>
        </div>
        <h1 className="font-heading text-2xl font-bold text-[#EAFFFB] mb-3">Your wishlist is empty</h1>
        <p className="text-text-secondary mb-8">Save content systems you&apos;re interested in — they&apos;ll show up here.</p>
        <Link href="/shop" className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">Browse Systems</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] mb-8">Your Wishlist</h1>
      <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
