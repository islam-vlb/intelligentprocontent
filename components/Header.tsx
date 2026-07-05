"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3 group">
      <span className="text-primary text-2xl leading-none group-hover:animate-pulse-slow transition-transform group-hover:scale-110 group-hover:rotate-12">
        ⟐
      </span>
      <span className="font-heading text-xl font-bold tracking-tight gradient-text group-hover:animate-gradient transition-all duration-700">
        intelligentprocontentautomation
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const { totalItems, openCart } = useCart();
  const { ids } = useWishlist();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_-10px_rgba(0,229,204,0.15)]"
            : "bg-bg/70 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative py-2"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex min-w-[44px] min-h-[44px] items-center justify-center rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            <Link
              href="/wishlist"
              className="relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Wishlist"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.3 4.5 5.8 4c2-.3 3.8.6 5.2 2.3C12.4 4.6 14.2 3.7 16.2 4c3.5.5 5.3 4.1 3.8 7.7C19.5 16.4 12 21 12 21z" />
              </svg>
              {ids.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-bg shadow-sm">
                  {ids.length}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={openCart}
              className="relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Open cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-bg shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              href="/shop"
              className="hidden sm:inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Shop Systems
            </Link>

            <button
              type="button"
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-bg/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fade-in">
          <div className="w-full max-w-2xl bg-surface rounded-3xl shadow-2xl border border-primary/15 p-6 animate-scale-in">
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={searchRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search prompt systems, frameworks, kits..."
                className="w-full min-h-[56px] pl-14 pr-4 rounded-2xl bg-surface-alt border border-primary/15 text-[#EAFFFB] placeholder-text-muted text-base focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-text-muted">Press ESC to close</p>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-sm text-text-secondary hover:text-primary font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
          <div className="absolute inset-0 bg-bg/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-surface shadow-2xl border-l border-primary/15 p-6 animate-slide-right">
            <div className="flex items-center justify-between mb-8">
              <span className="font-heading text-lg font-bold text-[#EAFFFB]">Menu</span>
              <button
                type="button"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-text-secondary hover:text-primary"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setSearchOpen(true);
                setOpen(false);
              }}
              className="w-full mb-4 min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-surface-alt border border-primary/15 text-sm text-text-secondary hover:text-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Search
            </button>
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-medium"
                >
                  {n.label}
                </Link>
              ))}
              <Link href="/wishlist" onClick={() => setOpen(false)} className="py-3 px-4 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-medium">
                Wishlist
              </Link>
              <div className="mt-4 pt-4 border-t border-primary/10">
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center min-h-[44px] rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-bg"
                >
                  Shop Systems
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
