import { Product } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default function RelatedProducts({ heading, products }: { heading: string; products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-heading text-2xl font-bold text-[#EAFFFB] mb-8">{heading}</h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
