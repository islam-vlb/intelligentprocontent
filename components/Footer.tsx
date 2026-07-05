import Link from "next/link";
import { BUSINESS } from "@/lib/config";
import { Logo } from "@/components/Header";

function PaymentIconsFooter() {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 50 32" className="h-8 w-auto rounded-lg" aria-label="Visa" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="32" rx="6" fill="#1A1F71" />
        <text x="25" y="21" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">VISA</text>
      </svg>
      <svg viewBox="0 0 50 32" className="h-8 w-auto rounded-lg" aria-label="Mastercard" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="32" rx="6" fill="#1C1C1C" />
        <circle cx="19" cy="16" r="11" fill="#EB001B" />
        <circle cx="31" cy="16" r="11" fill="#F79E1B" />
        <path d="M25 7.5a11 11 0 0 1 0 17A11 11 0 0 1 25 7.5z" fill="#FF5F00" />
      </svg>
    </div>
  );
}

const FOOTER_LINKS = {
  products: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=Prompt Systems", label: "Prompt Systems" },
    { href: "/shop?category=Content Frameworks", label: "Content Frameworks" },
    { href: "/shop?category=Workflow Tools", label: "Workflow Tools" },
    { href: "/shop?category=Operations Kits", label: "Operations Kits" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/digital-delivery", label: "Digital Delivery" },
    { href: "/fulfillment", label: "Fulfillment" },
  ],
  resources: [
    { href: "/shop", label: "Browse Products" },
    { href: "/cart", label: "Cart" },
    { href: "/wishlist", label: "Wishlist" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund", label: "Refund Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg text-[#EAFFFB] relative overflow-hidden border-t border-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_50%)] opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Logo />
            </Link>
            <p className="text-sm text-text-muted max-w-sm leading-relaxed mb-6">
              Intelligent content systems — prompt libraries, content frameworks, workflow tools, and operations kits engineered for teams that ship on schedule.
            </p>
            <div className="flex items-center gap-4">
              <PaymentIconsFooter />
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-[#EAFFFB] mb-4">Products</p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.products.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-[#EAFFFB] mb-4">Company</p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-[#EAFFFB] mb-4">Resources</p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.resources.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider text-[#EAFFFB] mb-4">Legal</p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 space-y-6">
          <div className="grid gap-2 text-sm text-text-muted sm:grid-cols-3">
            <p>{BUSINESS.phone}</p>
            <p>{BUSINESS.email}</p>
            <p>Ecom Fire INC, {BUSINESS.address}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-sm font-bold text-text-secondary">Charges appear as {BUSINESS.descriptor} on your statement</p>
            <p className="text-sm font-semibold text-text-secondary">Personal information will not be shared with Third Parties</p>
            <p className="text-sm font-bold text-red-600">⚠️ Individuals under 18 are not permitted to purchase</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-primary/5">
            <p className="text-sm text-text-muted">© 2026 Ecom Fire INC — {BUSINESS.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
