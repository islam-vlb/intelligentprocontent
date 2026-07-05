import Link from "next/link";

export default function Breadcrumb({ category, name }: { category: string; name: string }) {
  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 text-xs text-text-muted sm:text-sm">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        <li className="text-text-muted">/</li>
        <li>
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
        </li>
        <li className="text-text-muted">/</li>
        <li>
          <Link href={`/shop?category=${encodeURIComponent(category)}`} className="hover:text-primary transition-colors">
            {category}
          </Link>
        </li>
        <li className="text-text-muted">/</li>
        <li className="text-[#EAFFFB] font-medium truncate max-w-[200px]">{name}</li>
      </ol>
    </nav>
  );
}
