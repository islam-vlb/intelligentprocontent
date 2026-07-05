export default function QuantitySelect({
  value,
  onChange,
  max = 10,
}: {
  value: number;
  onChange: (n: number) => void;
  max?: number;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="min-h-[44px] rounded-xl border border-primary/20 bg-surface-alt px-3 py-2 text-sm text-[#EAFFFB] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
      aria-label="Quantity"
    >
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <option key={n} value={n}>
          Qty: {n}
        </option>
      ))}
    </select>
  );
}
