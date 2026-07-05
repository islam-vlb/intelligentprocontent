"use client";

import { useState } from "react";
import Link from "next/link";
import { FALLBACK_PRODUCTS } from "@/lib/supabase";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";

const STEPS = [
  {
    step: "01",
    title: "Choose Your System",
    desc: "Browse prompt libraries, content frameworks, workflow tools, and operations kits built for how content teams actually produce.",
  },
  {
    step: "02",
    title: "Checkout Securely",
    desc: "Complete a secure, one-time checkout with Visa or Mastercard. Digital delivery is complimentary and included with every order.",
  },
  {
    step: "03",
    title: "Deploy Across Your Team",
    desc: "Receive instant access by email and start using your new content system immediately — no waiting, no onboarding calls required.",
  },
];

const FEATURES = [
  { title: "Structured Prompt Libraries", desc: "Pre-written, tested prompts organized by marketing task so teams can move from blank page to draft faster.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
  { title: "Content Frameworks", desc: "Repeatable editorial and copy structures that give writers a clear path from research to published content.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg> },
  { title: "Workflow Systems", desc: "Step-by-step planning and scheduling systems that keep content production on track without constant check-ins.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
  { title: "Instant Digital Delivery", desc: "Every system is delivered to your email immediately after checkout with clear access instructions included.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg> },
  { title: "One-Time Purchase", desc: "Pay once and own the system permanently. No subscriptions, no renewals, no surprise charges.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { title: "30-Day Refund Window", desc: "Not the right fit? Request a refund within 30 days of purchase. No questions, no physical returns required.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg> },
];

const FAQS = [
  { q: "Is this a physical product?", a: "No. Every IntelliPro product is a digital content system delivered to your email immediately after purchase — nothing physical to ship." },
  { q: "How do I receive my purchase?", a: "Your content system is delivered instantly to the email address you provide at checkout, with clear access instructions included." },
  { q: "Is there a subscription?", a: "No. Each purchase is a one-time payment. There is nothing recurring, and you will not be billed again for that product." },
  { q: "Who are these systems designed for?", a: "Content marketers, marketing teams, agencies, and business owners who want to produce content consistently without reinventing their workflow every time." },
  { q: "Can I use these with my AI writing tools?", a: "Yes. Prompt systems are compatible with all major AI writing tools. Formats are plain text and easy to import." },
  { q: "Are updates included with my purchase?", a: "Each purchase includes the system at the version available at time of purchase. Content systems are self-contained and designed to be used indefinitely." },
];

export default function HomePage() {
  const featured = FALLBACK_PRODUCTS.slice(0, 8);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Hero />

      <section className="bg-bg py-20 border-t border-primary/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-4">How It Works</h2>
            <p className="text-lg text-text-secondary max-w-2xl">From selecting a system to deploying it with your team, three steps to a better content operation.</p>
          </div>
          <div className="relative">
            <div className="hidden sm:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
            <div className="space-y-12">
              {STEPS.map((s) => (
                <div key={s.step} className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <span className="font-heading text-xl font-bold text-primary">{s.step}</span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-2">{s.title}</h3>
                    <p className="text-text-secondary leading-relaxed max-w-2xl">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-3">Featured Systems</h2>
              <p className="text-lg text-text-secondary max-w-2xl">A cross-section of the IntelliPro catalog — from starter prompt packs to complete operations kits.</p>
            </div>
            <Link href="/shop" className="text-sm font-semibold text-primary hover:text-accent transition-colors whitespace-nowrap">View all systems →</Link>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-4">Built for repeatable content operations</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Every system in the catalog follows the same disciplined structure</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start rounded-2xl border border-primary/10 bg-surface p-6 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_rgba(0,229,204,0.2)] transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">{f.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 border-t border-primary/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-primary/10 border-t border-b border-primary/10">
            {FAQS.map((faq, i) => (
              <div key={faq.q}>
                <button className="w-full flex items-center justify-between py-6 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-heading text-base font-semibold text-[#EAFFFB] pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                {openFaq === i && <div className="pb-6 animate-slide-up"><p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
