import { BUSINESS } from "@/lib/config";

export default function DigitalDeliveryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-8">Digital Delivery</h1>
      <div className="space-y-6">
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Instant Email Delivery</h2>
          <p className="text-sm text-text-secondary leading-relaxed">All IntelliPro products are delivered digitally to the email address you provide at checkout. Delivery is instant — there is no waiting period. Once your order is confirmed, your content system and access instructions will arrive in your inbox within minutes.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">No Physical Shipping</h2>
          <p className="text-sm text-text-secondary leading-relaxed">We do not ship physical products. All content systems are digital files delivered by email. There are no shipping fees, no delivery delays, and no tracking numbers — just immediate access to your purchase.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">What&apos;s Included in Your Delivery Email</h2>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-3"><span className="text-primary mt-0.5">→</span> A download link or access instructions for your content system</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-0.5">→</span> Your order confirmation and receipt</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-0.5">→</span> Instructions for getting started with the system</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-0.5">→</span> Support contact information</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Didn&apos;t Receive Your Order?</h2>
          <p className="text-sm text-text-secondary leading-relaxed">Check your spam or promotions folder. If you still cannot find it, contact our support team at <strong className="text-primary">{BUSINESS.email}</strong> or <strong className="text-primary">{BUSINESS.phone}</strong> and we will resend it immediately.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Complimentary Digital Delivery</h2>
          <p className="text-sm text-text-secondary leading-relaxed">Digital delivery is included with every order at no additional charge. There is no shipping fee of any kind.</p>
        </section>
      </div>
    </div>
  );
}
