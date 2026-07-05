"use client";

import { useWishlist } from "@/lib/wishlist-context";

export default function WishlistButton({ id, className = "" }: { id: number; className?: string }) {
  const { has, toggle } = useWishlist();
  const active = has(id);
  return (
    <button
      type="button"
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
      className={`flex items-center justify-center rounded-xl bg-bg/80 backdrop-blur-sm border border-primary/20 shadow-lg min-w-[44px] min-h-[44px] transition-all duration-300 hover:scale-110 ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={active ? "#00E5CC" : "none"}
        stroke="#00E5CC"
        strokeWidth="2"
      >
        <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.3 4.5 5.8 4c2-.3 3.8.6 5.2 2.3C12.4 4.6 14.2 3.7 16.2 4c3.5.5 5.3 4.1 3.8 7.7C19.5 16.4 12 21 12 21z" />
      </svg>
    </button>
  );
}
