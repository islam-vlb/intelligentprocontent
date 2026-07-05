import { FALLBACK_CATEGORIES, FALLBACK_PRODUCTS } from "@/lib/supabase";

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="font-heading text-2xl font-bold text-[#EAFFFB] mb-6 text-center">Browse by Category</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FALLBACK_CATEGORIES.map((cat) => {
          const count = FALLBACK_PRODUCTS.filter((p) => p.category === cat).length;
          return (
            <a key={cat} href={`/shop?category=${encodeURIComponent(cat)}`} className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-surface-alt p-6 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_rgba(0,229,204,0.25)] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5 text-primary"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              </div>
              <p className="font-heading text-base font-semibold text-[#EAFFFB] mb-1">{cat}</p>
              <p className="text-xs text-text-muted">{count} system{count !== 1 ? "s" : ""}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
