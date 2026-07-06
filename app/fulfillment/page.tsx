import { BUSINESS } from "@/lib/config";

export default function FulfillmentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-8">Fulfillment &amp; Business Address</h1>
      <div className="space-y-6">
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Business &amp; Fulfillment Address</h2>
          <p className="text-base text-primary font-semibold mb-2">Logi Depot Inc</p>
          <p className="text-sm text-text-secondary leading-relaxed">Logi Depot Inc<br/>4711 34th St. N. Suite F<br/>St. Petersburg, FL 33714<br/>United States</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Digital Delivery Model</h2>
          <p className="text-sm text-text-secondary leading-relaxed">All IntelliPro products are delivered electronically via email. There is no physical shipping involved. Your product is accessible instantly after purchase with no waiting period and no physical package to receive.</p>
        </section>
        <section className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-4">Contact This Location</h2>
          <p className="text-sm text-text-secondary">Phone: {BUSINESS.phone}</p>
          <p className="text-sm text-text-secondary">Email: {BUSINESS.email}</p>
        </section>
      </div>
    </div>
  );
}
