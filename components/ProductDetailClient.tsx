"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/supabase";
import { PRODUCT_CONTENT } from "@/lib/product-content";
import { BUSINESS } from "@/lib/config";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedProducts from "@/components/RelatedProducts";
import PaymentIcons from "@/components/PaymentIcons";
import QuantitySelect from "@/components/QuantitySelect";

const USE_CASES = ["Solo marketers building a repeatable content process", "Marketing teams standardizing output across writers", "Agencies running consistent production for multiple clients"];

const DELIVERY_STEPS = [
  { n: "01", title: "Purchase", desc: "Complete a secure, one-time checkout with Visa or Mastercard." },
  { n: "02", title: "Instant Email", desc: "Your content system arrives in your inbox within minutes of purchase." },
  { n: "03", title: "Deploy", desc: "Open, customize, and put your new system to work with your team the same day." },
];

export default function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem, openCart } = useCart();
  const { has, toggle } = useWishlist();
  const [qty, setQty] = useState(1);
  const content = PRODUCT_CONTENT[product.id] ?? { description: "", features: [] };
  const wishlisted = has(product.id);

  function handleAdd() {
    addItem({ id: product.id, name: product.name, price: product.price, size: null, image: product.image }, qty);
    openCart();
  }

  const faqs = [
    { q: "How is this product delivered?", a: "Instantly by email after purchase, with access instructions included. This is a fully digital content system." },
    { q: "Is there a subscription for this product?", a: "No. This is a one-time payment. You will not be billed again for this product." },
    { q: "What is your refund policy?", a: "Refunds are available within 30 days of your purchase date. Contact our support team to request one." },
  ];

  return (
    <div>
      <Breadcrumb category={product.category} name={product.name} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-surface-alt border border-primary/10">
              <Image src={product.image} alt={product.name} fill priority className="object-cover" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#EAFFFB] mt-8">{product.name}</h1>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-bold text-primary mt-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              Digital Product — Instant Delivery
            </div>
            <p className="mt-6 text-text-secondary leading-relaxed max-w-2xl">{content.description}</p>
            <div className="h-px bg-primary/10 my-10" />
            <div>
              <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-5">What&apos;s Included</h2>
              <ul className="space-y-3 max-w-2xl">
                {content.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-px bg-primary/10 my-10" />
            <div>
              <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-5">Who It&apos;s For</h2>
              <div className="flex flex-wrap gap-3">
                {content.whoFor.map((w) => (
                  <span key={w} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">{w}</span>
                ))}
              </div>
            </div>
            <div className="h-px bg-primary/10 my-10" />
            <div>
              <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-6">How You&apos;ll Receive It</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {DELIVERY_STEPS.map((s) => (
                  <div key={s.n}>
                    <div className="font-heading text-3xl font-bold text-primary mb-2">{s.n}</div>
                    <h3 className="font-semibold text-[#EAFFFB] mb-1">{s.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 max-w-2xl">
              <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Frequently Asked Questions</h2>
              <div className="divide-y divide-primary/10 border-t border-b border-primary/10">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="cursor-pointer text-sm font-semibold text-[#EAFFFB] list-none flex items-center justify-between">
                      {faq.q}
                      <svg className="w-4 h-4 text-primary group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:sticky lg:top-24 h-fit space-y-5 rounded-2xl border border-primary/15 bg-surface-alt p-6 shadow-xl shadow-black/20">
            <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
            <p className="text-xs text-text-secondary">One-time payment — no recurring charges</p>
            <div className="h-px bg-primary/10" />
            <div>
              <label className="block text-xs font-semibold text-text-secondary mb-1.5">Quantity</label>
              <QuantitySelect value={qty} onChange={setQty} />
              <p className="mt-1 text-[11px] text-text-muted">Digital license — quantity limited to 1 per order</p>
            </div>
            <button type="button" onClick={handleAdd} className="min-h-[52px] w-full rounded-2xl bg-primary px-4 py-3.5 text-sm font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">Add to Cart</button>
            <button type="button" onClick={() => toggle(product.id)} className={`w-full inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors ${wishlisted ? "text-primary" : "text-text-secondary hover:text-primary"}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? "#00E5CC" : "none"} stroke="#00E5CC" strokeWidth="2"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.3 4.5 5.8 4c2-.3 3.8.6 5.2 2.3C12.4 4.6 14.2 3.7 16.2 4c3.5.5 5.3 4.1 3.8 7.7C19.5 16.4 12 21 12 21z" /></svg>
              {wishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
            </button>
            <div className="h-px bg-primary/10" />
            <PaymentIcons size="h-10" />
            <div className="space-y-1.5 text-xs text-text-secondary">
              <p>Charges appear as <span className="font-semibold text-primary">{BUSINESS.descriptor}</span> on your statement.</p>
              <p>Refunds available within 30 days of purchase.</p>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts heading="You Might Also Need" products={related} />
    </div>
  );
}
