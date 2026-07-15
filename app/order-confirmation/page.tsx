"use client";

import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export default function OrderConfirmationPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#080F0F" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] mb-4">Thank You For Your Order</h1>
      <p className="text-text-secondary mb-3">Your order has been received and a confirmation email will be sent to you shortly.</p>
      <p className="text-sm text-text-muted mb-8">
        Your digital product is available for download in your Dashboard.{" "}
        Questions? Contact us at {BUSINESS.email} or {BUSINESS.phone}.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/dashboard" className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-3.5 text-sm font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">Go to Dashboard</Link>
        <Link href="/shop" className="inline-flex items-center justify-center rounded-2xl border border-primary/20 px-8 py-3.5 text-sm font-semibold text-[#EAFFFB] hover:bg-primary/5 transition-colors">Continue Shopping</Link>
      </div>
    </div>
  );
}
