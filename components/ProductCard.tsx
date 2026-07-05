"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/supabase";
import { useCart } from "@/lib/cart-context";
import WishlistButton from "@/components/WishlistButton";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: product.sizes ? "" : null,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-[#0D1717] border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(0,229,204,0.35)] hover:-translate-y-1">
      <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-surface-alt">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <WishlistButton id={product.id} className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <span className="inline-flex items-center w-fit rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
          {product.category}
        </span>
        <h3 className="font-heading text-base font-semibold leading-tight text-[#EAFFFB] group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            className="min-h-[44px] flex-shrink-0 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            {added ? "Added ✓" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
