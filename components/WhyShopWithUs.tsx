const FEATURES = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>, title: "Instant Digital Delivery", body: "Every purchase is delivered instantly to your email with access instructions. Start implementing within minutes." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: "Secure Checkout", body: "Your payment and personal information are protected with secure checkout, accepting Visa and Mastercard only." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>, title: "Responsive Support", body: "USA-based support team available by phone and email for questions about orders or product use." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>, title: "30-Day Refund Window", body: "Not the right fit? Request a refund within 30 days of purchase. No physical returns to manage." },
];

export default function WhyShopWithUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-heading text-2xl font-bold text-[#EAFFFB] sm:text-3xl text-center mb-12">Why content teams choose IntelliPro</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex flex-col items-start rounded-2xl border border-primary/10 bg-surface-alt p-6 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_rgba(0,229,204,0.25)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">{f.icon}</div>
            <h3 className="font-heading text-base font-semibold text-[#EAFFFB] mb-2">{f.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
