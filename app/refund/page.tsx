import { BUSINESS } from "@/lib/config";

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-3">Refund Policy</h1>
      <p className="text-sm text-text-muted mb-8">Last updated: July 2026</p>
      <div className="space-y-6">
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">30-Day Refund Window</h2>
          <p className="text-sm text-text-secondary leading-relaxed">We offer a 30-day refund window from the date of purchase. If you are not satisfied with your digital content system for any reason, contact our support team at <strong className="text-primary">{BUSINESS.email}</strong> or <strong className="text-primary">{BUSINESS.phone}</strong> to request a refund.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Digital Goods</h2>
          <p className="text-sm text-text-secondary leading-relaxed">All IntelliPro products are digital goods delivered by email. There are no physical items to return. Refunds are processed to the original payment method and typically appear within 5–10 business days, depending on your card issuer.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">How to Request a Refund</h2>
          <p className="text-sm text-text-secondary leading-relaxed">Email <strong className="text-primary">{BUSINESS.email}</strong> with your order number and reason for the refund request. No physical returns or shipping labels are required since all products are digital.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Non-Refundable Cases</h2>
          <p className="text-sm text-text-secondary leading-relaxed">Refund requests must be submitted within 30 days of the original purchase date. Requests received after this window cannot be honored.</p>
        </section>
      </div>
    </div>
  );
}
