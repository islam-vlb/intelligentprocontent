"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQty, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
        </div>
        <h1 className="font-heading text-2xl font-bold text-[#EAFFFB] mb-3">Your cart is empty</h1>
        <p className="text-text-secondary mb-8">Browse our content systems and add one to get started.</p>
        <Link href="/shop" className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">Browse Systems</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] mb-8">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}`} className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-primary/10 bg-surface-alt p-4 sm:p-6">
            <div className="relative w-full sm:w-24 h-48 sm:h-24 rounded-xl overflow-hidden bg-surface flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-base font-semibold text-[#EAFFFB] truncate">{item.name}</h3>
              <p className="text-sm text-text-muted mt-1">Digital Product — Instant Delivery</p>
              <p className="text-lg font-bold text-primary mt-2">${(item.price * item.qty).toFixed(2)}</p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3">
              <div className="flex items-center gap-3">
                <button onClick={() => updateQty(item.id, null, Math.max(0, item.qty - 1))} className="min-w-[36px] min-h-[36px] rounded-xl border border-primary/20 text-primary hover:bg-primary/10 transition-colors font-bold">−</button>
                <span className="text-sm font-semibold text-[#EAFFFB] w-6 text-center">{item.qty}</span>
                <button onClick={() => updateQty(item.id, null, item.qty + 1)} className="min-w-[36px] min-h-[36px] rounded-xl border border-primary/20 text-primary hover:bg-primary/10 transition-colors font-bold">+</button>
              </div>
              <button onClick={() => removeItem(item.id, item.size)} className="text-xs text-text-muted hover:text-red-400 transition-colors">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-primary/10 bg-surface-alt p-6">
        <div className="flex justify-between text-sm text-text-secondary mb-2"><span>Subtotal</span><span className="font-semibold text-primary">${totalPrice.toFixed(2)}</span></div>
        <div className="flex justify-between text-sm text-text-secondary mb-4"><span>Digital Delivery — Complimentary</span><span className="font-semibold text-primary">$0.00</span></div>
        <div className="h-px bg-primary/10 mb-4" />
        <div className="flex justify-between text-base font-bold text-[#EAFFFB]"><span>Total</span><span className="text-primary">${totalPrice.toFixed(2)}</span></div>
        <Link href="/checkout" className="mt-6 min-h-[52px] w-full inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-3.5 text-base font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">Proceed to Checkout</Link>
        <Link href="/shop" className="mt-3 inline-flex text-center w-full text-sm text-text-muted hover:text-primary transition-colors">Continue Shopping</Link>
      </div>
    </div>
  );
}
