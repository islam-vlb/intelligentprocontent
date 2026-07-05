import { FALLBACK_PRODUCTS } from "@/lib/supabase";

export default function ProductPriceList() {
  return (
    <div className="mt-6 overflow-x-auto overflow-hidden rounded-2xl border border-primary/10 bg-surface-alt">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-primary/10 bg-primary/5">
            <th className="py-3 px-4 font-semibold text-[#EAFFFB]">Product</th>
            <th className="py-3 px-4 text-right font-semibold text-[#EAFFFB]">Price</th>
          </tr>
        </thead>
        <tbody>
          {FALLBACK_PRODUCTS.map((p, i) => (
            <tr key={p.id} className={`border-b border-primary/5 ${i % 2 === 0 ? "bg-surface" : "bg-surface-alt"}`}>
              <td className="py-3 px-4 text-text-secondary">{p.name}</td>
              <td className="py-3 px-4 text-right font-semibold text-primary">${p.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
