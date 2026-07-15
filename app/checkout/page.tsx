"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import { addOrder, savePendingOrder, OrderItem } from "@/lib/orders";
import { FALLBACK_PRODUCTS } from "@/lib/supabase";
import { BUSINESS } from "@/lib/config";
import { US_STATES } from "@/lib/us-states";
import PaymentIcons from "@/components/PaymentIcons";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clear } = useCart();
  const { user } = useAuth();
  const [agreed, setAgreed] = useState(false);
  const [state, setState] = useState("");
  const total = totalPrice;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed || items.length === 0) return;

    const orderItems: OrderItem[] = items.map((i) => ({
      id: i.id,
      name: i.name,
      price: i.price,
      qty: i.qty,
      image: i.image,
      downloadFile: FALLBACK_PRODUCTS.find((p) => p.id === i.id)?.downloadFile ?? null,
    }));

    if (user) {
      addOrder(user.email, orderItems, total);
      clear();
      router.push("/order-confirmation");
    } else {
      savePendingOrder(orderItems, total);
      clear();
      router.push("/register?checkout=1");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-6">Contact Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="First Name" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
              <input required placeholder="Last Name" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
              <input required type="email" placeholder="Email Address" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all sm:col-span-2" />
              <input required type="tel" placeholder="Phone" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all sm:col-span-2" />
            </div>
          </section>

          <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-6">Billing Address</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Street Address" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all sm:col-span-2" />
              <input required placeholder="City" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
              <select required value={state} onChange={(e) => setState(e.target.value)} className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                <option value="">Select State</option>
                {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <input required placeholder="ZIP Code" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
              <input disabled value="United States" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-text-muted" />
            </div>
          </section>

          <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-6">Payment</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Card Number" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all sm:col-span-2" />
              <input required placeholder="MM / YY" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
              <input required placeholder="CVV" className="min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <PaymentIcons size="h-10" />
              <span className="text-xs text-text-secondary">Visa and Mastercard only</span>
            </div>
          </section>

          <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
            <label className="flex items-start gap-3 text-sm text-text-secondary">
              <input type="checkbox" required checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 h-5 w-5 flex-shrink-0 rounded border-primary/20 bg-surface text-primary focus:ring-primary/30" />
              <span>I have read and agree to the <a href="/terms" target="_blank" className="font-bold text-primary underline">Terms &amp; Conditions</a> and <a href="/privacy" target="_blank" className="font-bold text-primary underline">Privacy Policy</a>, and <a href="/refund" target="_blank" className="font-bold text-primary underline">Refund Policy</a></span>
            </label>
            <div className="mt-5 space-y-1.5">
              <p className="text-base font-semibold text-[#EAFFFB]">I agree to be billed ${total.toFixed(2)}</p>
              <p className="text-base font-bold text-[#EAFFFB]">Your credit card will be charged ${total.toFixed(2)}</p>
              <p className="text-sm font-bold text-text-secondary">Charges will appear as {BUSINESS.descriptor} on your statement</p>
              <p className="text-sm font-semibold text-text-secondary">Personal information will not be shared with Third Parties</p>
              <p className="text-sm font-bold text-red-400">&#9888;&#65039; Individuals under 18 are not permitted to purchase</p>
            </div>
            <p className="mt-5 text-sm text-text-secondary">This is a one-time payment. No subscription or auto-renewal.</p>
            <button type="submit" disabled={!agreed || items.length === 0} className="mt-4 min-h-[52px] w-full rounded-2xl bg-primary px-4 py-3.5 text-sm font-bold text-bg disabled:cursor-not-allowed disabled:opacity-40 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">Place Order</button>
          </section>
        </div>

        <div className="h-fit rounded-2xl border border-primary/10 bg-surface-alt p-6 shadow-sm">
          <h2 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-4">Order Summary</h2>
          <ul className="space-y-3">
            {items.map((i) => (
              <li key={`${i.id}-${i.size}`} className="flex justify-between text-sm text-text-secondary">
                <span className="flex-1 pr-2">{i.name} {i.size ? `(${i.size})` : ""} × {i.qty}</span>
                <span className="font-semibold text-primary">${(i.price * i.qty).toFixed(2)}</span>
              </li>
            ))}
            {items.length === 0 && <li className="text-sm text-text-muted">Your cart is empty.</li>}
          </ul>
          <div className="mt-4 space-y-2 border-t border-primary/10 pt-4 text-sm">
            <div className="flex justify-between text-text-secondary"><span>Subtotal</span><span className="font-semibold text-primary">${totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between text-text-secondary"><span>Digital Delivery — Complimentary (Instant via Email)</span><span className="font-semibold text-primary">$0.00</span></div>
            <div className="flex justify-between text-base font-bold text-[#EAFFFB] pt-2 border-t border-primary/10"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
        </div>
      </form>
    </div>
  );
}
