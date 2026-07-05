import { FALLBACK_PRODUCTS } from "@/lib/supabase";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return FALLBACK_PRODUCTS.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = FALLBACK_PRODUCTS.find((p) => String(p.id) === id);
  if (!product) return <div className="mx-auto max-w-7xl px-4 py-20 text-center text-text-muted">Product not found.</div>;
  const related = FALLBACK_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  return <ProductDetailClient product={product} related={related} />;
}
