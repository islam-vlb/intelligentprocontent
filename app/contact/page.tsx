"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/config";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-3">Contact Us</h1>
        <p className="text-text-secondary max-w-xl mx-auto">Questions about an order or a product? Reach out and our team will get back to you promptly.</p>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <form className="space-y-5 rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1.5">Name</label>
            <input required placeholder="Your name" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1.5">Email</label>
            <input required type="email" placeholder="your@email.com" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1.5">Subject</label>
            <input required placeholder="How can we help?" className="input-field w-full" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1.5">Message</label>
            <textarea required rows={5} placeholder="Tell us more..." className="input-field w-full resize-none" />
          </div>
          <button type="submit" className="min-h-[52px] w-full rounded-2xl bg-primary px-8 py-3.5 text-sm font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
            {sent ? "Message sent — thank you." : "Send Message"}
          </button>
        </form>
        <div className="space-y-6">
          <div className="rounded-2xl border border-primary/10 bg-surface-alt p-6">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary mb-3">Email</h3>
            <a href={`mailto:${BUSINESS.email}`} className="text-sm text-[#EAFFFB] hover:text-primary transition-colors">{BUSINESS.email}</a>
          </div>
          <div className="rounded-2xl border border-primary/10 bg-surface-alt p-6">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary mb-3">Phone</h3>
            <a href={`tel:${BUSINESS.phone}`} className="text-sm text-[#EAFFFB] hover:text-primary transition-colors">{BUSINESS.phone}</a>
          </div>
          <div className="rounded-2xl border border-primary/10 bg-surface-alt p-6">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary mb-3">Business Address</h3>
            <p className="text-sm text-text-secondary">Ecom Fire INC<br />{BUSINESS.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
