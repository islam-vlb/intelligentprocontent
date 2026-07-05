import { FALLBACK_PRODUCTS } from "@/lib/supabase";
import { BUSINESS } from "@/lib/config";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-3">Privacy Policy</h1>
      <p className="text-sm text-text-muted mb-8">Last updated: July 2026</p>
      <div className="space-y-6">
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Information We Collect</h2>
          <p className="text-sm text-text-secondary leading-relaxed">We collect only the information necessary to process your order: your name, email address, billing address, and payment information. This information is used solely to complete your transaction and deliver your digital product.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">How We Use Your Information</h2>
          <p className="text-sm text-text-secondary leading-relaxed">Your information is used to process payments, deliver your digital products by email, and respond to support inquiries. We do not sell or share your personal information with third parties for marketing purposes.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Third Parties</h2>
          <p className="text-text-secondary font-semibold">Personal information will not be shared with Third Parties.</p>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">Payment processing is handled by our processor Payarc, who receives only the information necessary to authorize and process your payment.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Data Security</h2>
          <p className="text-sm text-text-secondary leading-relaxed">We implement reasonable security measures to protect your personal information. Sensitive payment information is handled by our secure payment processor and is not stored on our servers.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Products</h2>
          <ul className="space-y-2">
            {FALLBACK_PRODUCTS.map((p) => <li key={p.id} className="text-sm text-text-secondary flex justify-between"><span>{p.name}</span><span className="font-semibold text-primary">${p.price.toFixed(2)}</span></li>)}
          </ul>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Contact</h2>
          <p className="text-sm text-text-secondary">For privacy inquiries, contact us at {BUSINESS.email}.</p>
        </section>
      </div>
    </div>
  );
}
