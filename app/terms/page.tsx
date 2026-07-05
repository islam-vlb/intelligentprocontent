import { FALLBACK_PRODUCTS } from "@/lib/supabase";
import ProductPriceList from "@/components/ProductPriceList";
import { BUSINESS } from "@/lib/config";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-3">Terms &amp; Conditions</h1>
      <p className="text-sm text-text-muted mb-8">Last updated: July 2026</p>
      <div className="prose prose-invert max-w-none space-y-6">
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">1. Agreement to Terms</h2>
          <p className="text-sm text-text-secondary leading-relaxed">By purchasing any product from IntelligentProContentAutomation.com, you agree to these Terms &amp; Conditions. These terms govern all purchases of digital content systems delivered by email.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">2. Digital Products</h2>
          <p className="text-sm text-text-secondary leading-relaxed">All products sold on this site are digital content systems delivered via email. There are no physical goods, no shipping, and no returns process for physical items.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">3. Payment</h2>
          <p className="text-sm text-text-secondary leading-relaxed">We accept Visa and Mastercard only. All payments are processed securely through our payment processor, Payarc. Prices are listed in USD. There are no recurring charges or subscription fees.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">4. Delivery</h2>
          <p className="text-sm text-text-secondary leading-relaxed">Products are delivered electronically to the email address provided at checkout. Delivery is instant — digital delivery is complimentary with every order. No physical shipping is involved.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">5. Refunds</h2>
          <p className="text-sm text-text-secondary leading-relaxed">Refunds are available within 30 days of purchase. Contact {BUSINESS.email} to request a refund. Once a refund is approved, it will be processed back to the original payment method.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">6. Product Prices</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">All products and their prices are listed below:</p>
          <ProductPriceList />
        </section>
      </div>
    </div>
  );
}
