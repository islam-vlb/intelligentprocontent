export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  sizes: string[] | null;
  image: string;
};

export const FALLBACK_CATEGORIES: string[] = ["Prompt Systems", "Content Frameworks", "Workflow Tools", "Operations Kits"];

export const FALLBACK_PRODUCTS: Product[] = [
  { id: 1, slug: "starter-prompt-set-25-ai-prompts-for-marketers-1", name: "Starter Prompt Set — 25 AI Prompts for Marketers", price: 9.99, category: "Prompt Systems", sizes: null, image: "/images/products/product-1.jpg" },
  { id: 2, slug: "email-subject-line-prompt-pack-50-prompts-2", name: "Email Subject Line Prompt Pack (50 Prompts)", price: 13.95, category: "Prompt Systems", sizes: null, image: "/images/products/product-2.png" },
  { id: 3, slug: "blog-ideation-framework-30-topic-generators-3", name: "Blog Ideation Framework — 30 Topic Generators", price: 14.75, category: "Content Frameworks", sizes: null, image: "/images/products/product-3.jpg" },
  { id: 4, slug: "social-media-content-calendar-framework-4", name: "Social Media Content Calendar Framework", price: 17.95, category: "Content Frameworks", sizes: null, image: "/images/products/product-4.jpg" },
  { id: 5, slug: "brand-voice-prompt-toolkit-40-prompts-5", name: "Brand Voice Prompt Toolkit (40 Prompts)", price: 18.75, category: "Prompt Systems", sizes: null, image: "/images/products/product-5.jpg" },
  { id: 6, slug: "seo-content-brief-framework-complete-system-6", name: "SEO Content Brief Framework — Complete System", price: 28.76, category: "Content Frameworks", sizes: null, image: "/images/products/product-6.webp" },
  { id: 7, slug: "content-repurposing-workflow-7-channel-system-7", name: "Content Repurposing Workflow — 7-Channel System", price: 38.64, category: "Workflow Tools", sizes: null, image: "/images/products/product-7.png" },
  { id: 8, slug: "lead-magnet-creation-toolkit-8", name: "Lead Magnet Creation Toolkit", price: 47.89, category: "Operations Kits", sizes: null, image: "/images/products/product-8.png" },
  { id: 9, slug: "weekly-content-planning-system-9", name: "Weekly Content Planning System", price: 49.76, category: "Workflow Tools", sizes: null, image: "/images/products/product-9.jpg" },
  { id: 10, slug: "sales-page-copy-framework-full-structure-10", name: "Sales Page Copy Framework — Full Structure", price: 53.45, category: "Content Frameworks", sizes: null, image: "/images/products/product-10.jpg" },
  { id: 11, slug: "newsletter-content-engine-12-week-system-11", name: "Newsletter Content Engine — 12-Week System", price: 54.95, category: "Workflow Tools", sizes: null, image: "/images/products/product-11.png" },
  { id: 12, slug: "agency-content-operations-toolkit-12", name: "Agency Content Operations Toolkit", price: 86.88, category: "Operations Kits", sizes: null, image: "/images/products/product-12.png" },
  { id: 13, slug: "full-funnel-copy-framework-top-to-bottom-13", name: "Full Funnel Copy Framework — Top to Bottom", price: 87.64, category: "Content Frameworks", sizes: null, image: "/images/products/product-13.jpeg" },
  { id: 14, slug: "ai-content-strategy-playbook-14", name: "AI Content Strategy Playbook", price: 87.76, category: "Operations Kits", sizes: null, image: "/images/products/product-14.png" },
  { id: 15, slug: "90-day-content-launch-system-15", name: "90-Day Content Launch System", price: 94.82, category: "Workflow Tools", sizes: null, image: "/images/products/product-15.png" },
  { id: 16, slug: "complete-intelligent-content-suite-all-systems-16", name: "Complete Intelligent Content Suite — All Systems", price: 96.95, category: "Operations Kits", sizes: null, image: "/images/products/product-16.png" }
];

export const hasSizeGuide = false;
