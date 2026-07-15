const path = require("path");
const fs = require("fs");
const {
  COLORS,
  newDoc,
  coverPage,
  tocPage,
  sectionTitle,
  subTitle,
  bodyText,
  bulletList,
  numberedList,
  promptList,
  fieldBlock,
  table,
  checklist,
  divider,
  contactPage,
  addPageNumbers,
  ensureSpace,
} = require("./pdf-helpers");

const BRAND = "IntelligentProContentAutomation";
const DOMAIN = "intelligentprocontentautomation.com";
const PHONE = "(866) 995-3794";
const EMAIL = "support@intelligentprocontentautomation.com";
const ADDRESS = "3590 N Zaragoza Road Ste B103 Unit #107, El Paso, TX, 79938";
const OUT_DIR = path.join(__dirname, "..", "public", "downloads");

// Small local helper for an indented H1 -> H2 -> H3 outline tree.
// Kept local to this file so pdf-helpers.js stays an unmodified copy of the reference.
function outlineTree(doc, items) {
  const labelColor = { 0: COLORS.accent, 1: COLORS.primary, 2: COLORS.muted };
  const labelFor = { 0: "H1", 1: "H2", 2: "H3" };
  items.forEach(({ level, text }) => {
    ensureSpace(doc, 20);
    const indent = 60 + level * 20;
    const width = 535 - indent - 34;
    const y = doc.y;
    doc.fillColor(labelColor[level]).font("Helvetica-Bold").fontSize(9).text(labelFor[level], indent, y, { width: 26 });
    doc.fillColor(COLORS.text).font(level === 0 ? "Helvetica-Bold" : "Helvetica").fontSize(level === 0 ? 10.5 : 9.5).text(text, indent + 30, y, { width });
    doc.moveDown(level === 0 ? 0.45 : 0.3);
  });
  doc.moveDown(0.3);
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// =========================================================================
// PDF 1 — SEO Content Brief Framework — Complete System
// =========================================================================

const SEO_TITLE_FORMULAS = [
  "How to [ACTION] + [RESULT] in [TIMEFRAME]",
  "[NUMBER] Ways to [ACHIEVE GOAL] Without [COMMON OBSTACLE]",
  "The Complete Guide to [TOPIC] for [AUDIENCE]",
  "[NUMBER] [TOPIC] Mistakes That Are Costing You [OUTCOME]",
  "What Is [TOPIC]? A Beginner's Guide for [AUDIENCE]",
  "[TOPIC] vs. [ALTERNATIVE]: Which Is Right for [AUDIENCE]?",
  "The Ultimate [TOPIC] Checklist for [YEAR]",
  "[NUMBER] [TOPIC] Statistics Every [AUDIENCE] Should Know",
  "Why [COMMON BELIEF] Is Wrong — And What to Do Instead",
  "How [AUDIENCE] Can [ACHIEVE GOAL] Without [RESOURCE/BUDGET]",
  "[NUMBER] Signs It's Time to [TAKE ACTION]",
  "The Step-by-Step Framework for [ACHIEVING RESULT]",
  "[TOPIC] 101: Everything [AUDIENCE] Needs to Know",
  "How We [ACHIEVED RESULT] Using [METHOD/TOOL]",
  "[NUMBER] [TOPIC] Tools Worth Using in [YEAR]",
  "The Beginner's Roadmap to [SKILL/GOAL]",
  "[NUMBER] Questions to Ask Before [DECISION]",
  "How to Choose the Right [PRODUCT/SERVICE CATEGORY] for [AUDIENCE]",
  "[TOPIC] Trends [AUDIENCE] Can't Afford to Ignore in [YEAR]",
  "The [NUMBER]-Step Process for [ACHIEVING RESULT]",
  "What Nobody Tells You About [TOPIC]",
  "[NUMBER] [TOPIC] Templates to Save You [TIME/EFFORT]",
  "How to Fix [COMMON PROBLEM] in [TIMEFRAME]",
  "The Pros and Cons of [APPROACH/METHOD] for [AUDIENCE]",
  "[NUMBER] Lessons We Learned From [EXPERIENCE/PROJECT]",
  "A Data-Driven Look at [TOPIC] in [YEAR]",
  "How to Get Started With [TOPIC] (Even If You're [OBJECTION])",
  "[NUMBER] [TOPIC] Myths Debunked",
  "The Only [TOPIC] Guide You'll Ever Need",
  "[TOPIC] Explained: A Practical Guide for [AUDIENCE]",
];

function buildSeoContentBrief() {
  const outPath = path.join(OUT_DIR, "seo-content-brief-system.pdf");
  const doc = newDoc(outPath);

  coverPage(doc, {
    brand: BRAND,
    domain: DOMAIN,
    title: "SEO Content Brief Framework — Complete System",
    subtitle: "A repeatable template system for briefing, outlining, and tracking SEO content",
    tag: "Digital Product",
  });

  tocPage(doc, BRAND, [
    { title: "1. What Is a Content Brief & Why It Matters", page: 3 },
    { title: "2. The Content Brief Template", page: 4 },
    { title: "3. Keyword Research Worksheet", page: 5 },
    { title: "4. Content Outline Template", page: 6 },
    { title: "5. On-Page SEO Checklist", page: 7 },
    { title: "6. Content Performance Tracker", page: 8 },
    { title: "7. 30 SEO Blog Title Formulas", page: 9 },
    { title: "8. Contact & Support", page: 11 },
  ]);

  // ---- 1. What Is a Content Brief & Why It Matters ----
  sectionTitle(doc, "1. What Is a Content Brief & Why It Matters");
  bodyText(
    doc,
    "A content brief is a single document that tells a writer, editor, or AI assistant exactly what to produce before a single word gets written. It captures the target keyword, the intent behind that keyword, the structure the page needs to follow, and the internal and external signals that should support it. Without a brief, writers default to writing what sounds good instead of writing what actually ranks and converts — and every piece of content becomes a one-off guess instead of a repeatable, improvable process."
  );
  bodyText(
    doc,
    "Teams that consistently rank and drive organic traffic almost always share one habit: they brief before they write. A good brief removes ambiguity, shortens the editing cycle, and makes it possible for more than one person to produce content that sounds and performs consistently. It also creates a paper trail — when a page underperforms, you can look back at the brief and see exactly what was intended versus what was shipped."
  );
  bodyText(
    doc,
    "This system gives you a complete, reusable content brief template, a keyword research worksheet, an outline structure, an on-page SEO checklist, and a performance tracker — everything you need to move from 'we should write about this' to a published, measurable page."
  );
  subTitle(doc, "When to Use a Content Brief");
  bulletList(doc, [
    "Before assigning a new blog post, landing page, or pillar page to a writer.",
    "Before prompting an AI writing tool, so the output is grounded in real keyword and structure decisions.",
    "When updating or expanding an existing page that hasn't performed as expected.",
    "When onboarding a new writer or agency and you need them to match your existing content standards.",
  ]);
  subTitle(doc, "What a Strong Brief Always Includes");
  bulletList(doc, [
    "A single, clearly defined target keyword and its search intent.",
    "A proposed H1 and meta description written before the draft, not after.",
    "A full H2/H3 outline so structure is agreed on before writing begins.",
    "Internal links to include and external sources worth referencing or citing.",
    "A clear call-to-action tied to the goal of the page.",
  ]);

  // ---- 2. The Content Brief Template ----
  doc.addPage();
  sectionTitle(doc, "2. The Content Brief Template");
  bodyText(doc, "Copy this template into your CMS, project management tool, or a shared doc and fill it out for every new piece of content before writing begins.");
  fieldBlock(doc, "Target Keyword");
  fieldBlock(doc, "Search Intent (Informational / Navigational / Commercial / Transactional)");
  fieldBlock(doc, "Word Count Target");
  fieldBlock(doc, "H1 Title");
  fieldBlock(doc, "Meta Description (under 155 characters)");
  subTitle(doc, "H2 Subheadings (Plan 5-8 Before Writing)");
  numberedList(doc, [
    "________________________________________________",
    "________________________________________________",
    "________________________________________________",
    "________________________________________________",
    "________________________________________________",
    "________________________________________________",
  ]);
  fieldBlock(doc, "Internal Links to Include");
  fieldBlock(doc, "External Sources to Cite");
  fieldBlock(doc, "Call-to-Action (CTA)");
  fieldBlock(doc, "Competitor URLs to Reference");
  fieldBlock(doc, "Notes");

  // ---- 3. Keyword Research Worksheet ----
  doc.addPage();
  sectionTitle(doc, "3. Keyword Research Worksheet");
  bodyText(doc, "Use this worksheet to organize keyword research before you brief a page. Recreate the columns below in a spreadsheet and fill in a row per target keyword.");
  table(
    doc,
    ["Primary Keyword", "Secondary Keywords", "Long-Tail Variations", "Monthly Volume", "Difficulty"],
    [
      ["content brief template", "SEO brief, content outline", "how to write a content brief", "1,300", "Medium"],
      ["keyword research tool", "SEO keyword tool, keyword finder", "best free keyword research tool", "8,900", "High"],
      ["on-page SEO checklist", "on-page optimization", "on-page SEO checklist for blog posts", "2,400", "Medium"],
      ["content performance tracking", "SEO tracking sheet", "how to track content performance", "590", "Low"],
      ["blog title generator", "SEO title formulas", "catchy blog title ideas", "3,600", "Medium"],
    ],
    [105, 115, 140, 80, 75]
  );
  divider(doc);
  subTitle(doc, "Column Definitions");
  bulletList(doc, [
    "Primary Keyword — the single keyword the page is built to rank for.",
    "Secondary Keywords — closely related terms to work naturally into subheadings and body copy.",
    "Long-Tail Variations — longer, more specific phrases to capture additional search queries.",
    "Monthly Volume — average monthly search volume from your keyword research tool of choice.",
    "Difficulty — relative ranking difficulty (Low / Medium / High) based on current competition.",
  ]);

  // ---- 4. Content Outline Template ----
  doc.addPage();
  sectionTitle(doc, "4. Content Outline Template");
  bodyText(doc, "Once your keyword and brief are set, translate them into a full H1 → H2 → H3 outline before writing begins. The example below shows the structure for a pillar-style blog post.");
  outlineTree(doc, [
    { level: 0, text: "Complete Guide to Content Marketing for SaaS Startups" },
    { level: 1, text: "Why Content Marketing Matters for SaaS Growth" },
    { level: 2, text: "The Cost of Not Having a Content Strategy" },
    { level: 2, text: "How Content Marketing Shortens the Sales Cycle" },
    { level: 1, text: "Building Your First 90-Day Content Plan" },
    { level: 2, text: "Step 1: Define Your Core Topics and Pillars" },
    { level: 2, text: "Step 2: Map Topics to Each Stage of the Buyer Journey" },
    { level: 2, text: "Step 3: Set a Realistic Publishing Cadence" },
    { level: 1, text: "Distributing Content Beyond the Blog" },
    { level: 2, text: "Repurposing One Post Into Five Formats" },
    { level: 1, text: "Measuring Content Marketing ROI" },
    { level: 2, text: "Key Metrics to Track Monthly" },
    { level: 2, text: "Common Reporting Mistakes to Avoid" },
  ]);

  // ---- 5. On-Page SEO Checklist ----
  doc.addPage();
  sectionTitle(doc, "5. On-Page SEO Checklist");
  bodyText(doc, "Run every piece of content through this checklist before it's published. Recreate it in your task tool so it's part of your standard review step.");
  checklist(doc, [
    "Title tag is under 60 characters and includes the target keyword.",
    "Meta description is under 155 characters and includes a clear reason to click.",
    "H1 is used exactly once and matches the page's primary keyword intent.",
    "Target keyword appears naturally within the first 100 words.",
    "All images include descriptive, keyword-relevant alt text.",
    "Page includes at least 2-3 relevant internal links.",
    "Page includes at least 1-2 credible external links to authoritative sources.",
    "URL slug is short, readable, and includes the target keyword.",
    "Applicable schema markup (Article, FAQ, HowTo) is implemented.",
    "Page is fully responsive and renders cleanly on mobile devices.",
    "Page load speed has been checked and optimized (images compressed, scripts deferred).",
    "Content is written at an appropriate readability level for the target audience.",
    "Headers follow a logical hierarchy (H1 → H2 → H3, no skipped levels).",
    "A canonical tag is set to prevent duplicate content issues.",
    "Social meta tags (Open Graph, Twitter Card) are configured for sharing.",
    "Content length is competitive with the current top-ranking pages for the keyword.",
    "Keyword density looks natural — no keyword stuffing.",
    "Related and secondary keywords are included where they fit naturally.",
    "A clear, relevant call-to-action is present on the page.",
    "All internal and external links have been checked and none are broken.",
  ]);

  // ---- 6. Content Performance Tracker ----
  doc.addPage();
  sectionTitle(doc, "6. Content Performance Tracker");
  bodyText(doc, "Recreate this layout in a spreadsheet to track how each published page performs over time. Review it monthly and flag pages that need a content refresh.");
  table(
    doc,
    ["URL", "Publish Date", "Target Keyword", "Ranking Position", "Organic Traffic", "Conversions"],
    [
      ["/blog/content-brief-guide", "01/06/2026", "content brief template", "4", "1,240/mo", "38"],
      ["/blog/keyword-research-101", "01/13/2026", "keyword research tool", "9", "860/mo", "21"],
      ["/blog/on-page-seo-checklist", "01/20/2026", "on-page SEO checklist", "6", "2,150/mo", "54"],
      ["/blog/blog-title-formulas", "01/27/2026", "blog title generator", "12", "540/mo", "12"],
      ["/blog/content-tracker-guide", "02/03/2026", "content performance tracking", "3", "410/mo", "9"],
    ],
    [125, 65, 105, 65, 70, 65]
  );
  divider(doc);
  subTitle(doc, "How to Use This Tracker");
  bulletList(doc, [
    "Log every page the day it's published, using the exact target keyword from its brief.",
    "Update ranking position and organic traffic monthly from your analytics and rank-tracking tools.",
    "Flag any page that hasn't moved into the top 10 within 90 days for a content refresh.",
    "Use the conversions column to identify which topics are driving business results, not just traffic.",
  ]);

  // ---- 7. 30 SEO Blog Title Formulas ----
  doc.addPage();
  sectionTitle(doc, "7. 30 SEO Blog Title Formulas");
  bodyText(doc, "Use these formulas as starting points when titling new content. Swap the bracketed placeholders for your specific topic, audience, and outcome.");
  promptList(doc, SEO_TITLE_FORMULAS, 1);

  contactPage(doc, { brand: BRAND, phone: PHONE, email: EMAIL, address: ADDRESS, domain: DOMAIN });

  addPageNumbers(doc, BRAND);
  doc.end();
  return outPath;
}

// =========================================================================
// PDF 2 — Lead Magnet Creation Toolkit
// =========================================================================

function buildLeadMagnetToolkit() {
  const outPath = path.join(OUT_DIR, "lead-magnet-creation-toolkit.pdf");
  const doc = newDoc(outPath);

  coverPage(doc, {
    brand: BRAND,
    domain: DOMAIN,
    title: "Lead Magnet Creation Toolkit",
    subtitle: "Templates and frameworks for building, launching, and promoting a high-converting lead magnet",
    tag: "Digital Product",
  });

  tocPage(doc, BRAND, [
    { title: "1. Choosing Your Lead Magnet Type", page: 3 },
    { title: "2. Lead Magnet Outline Template", page: 4 },
    { title: "3. Landing Page Copy Framework", page: 5 },
    { title: "4. Thank-You Page Template", page: 6 },
    { title: "5. Email Follow-Up Sequence", page: 7 },
    { title: "6. Lead Magnet Promotion Checklist", page: 9 },
    { title: "7. Performance Metrics Dashboard Layout", page: 10 },
    { title: "8. Contact & Support", page: 11 },
  ]);

  // ---- 1. Choosing Your Lead Magnet Type ----
  sectionTitle(doc, "1. Choosing Your Lead Magnet Type");
  bodyText(
    doc,
    "The right lead magnet format depends on how much effort your audience is willing to spend to get it, and how much effort you're willing to spend to build it. Use the comparison below to choose a format that matches your topic, your resources, and your audience's expectations."
  );
  table(
    doc,
    ["Type", "Pros", "Cons", "Effort Level"],
    [
      ["Checklist", "Fast to build, high perceived value, easy to consume", "Feels lightweight; needs a strong topic to stand out", "Low"],
      ["Ebook", "Positions you as an authority; great for complex topics", "Time-intensive to write and design well", "High"],
      ["Template", "Extremely high perceived value; drives real usage", "Requires a genuinely useful, reusable structure", "Medium"],
      ["Quiz", "Highly engaging; can segment leads by result", "Requires quiz logic and result-page content", "Medium"],
      ["Toolkit", "Bundles multiple resources; highest perceived value", "Most time-consuming to assemble and maintain", "High"],
    ],
    [75, 155, 165, 80]
  );

  // ---- 2. Lead Magnet Outline Template ----
  doc.addPage();
  sectionTitle(doc, "2. Lead Magnet Outline Template");
  bodyText(doc, "Fill this out before you design or write a single page of your lead magnet. It forces clarity on the promise, the problem, and the payoff.");
  fieldBlock(doc, "Title");
  fieldBlock(doc, "Subtitle");
  fieldBlock(doc, "Problem Statement (the specific pain this solves)");
  subTitle(doc, "5 Key Points");
  numberedList(doc, [
    "________________________________________________",
    "________________________________________________",
    "________________________________________________",
    "________________________________________________",
    "________________________________________________",
  ]);
  fieldBlock(doc, "Call-to-Action (what should the reader do next?)");
  fieldBlock(doc, "Design Notes (format, length, visuals, branding)");

  // ---- 3. Landing Page Copy Framework ----
  doc.addPage();
  sectionTitle(doc, "3. Landing Page Copy Framework");
  bodyText(doc, "Use this framework to write the landing page that collects the email address in exchange for your lead magnet.");
  fieldBlock(doc, "Headline");
  fieldBlock(doc, "Subheadline");
  subTitle(doc, "3 Bullet Benefits");
  numberedList(doc, [
    "________________________________________________",
    "________________________________________________",
    "________________________________________________",
  ]);
  fieldBlock(doc, "Form Fields (keep to the minimum needed — usually name + email)");
  fieldBlock(doc, "Button Text");
  fieldBlock(doc, "Trust Elements (testimonials, logos, subscriber count, privacy note)");

  // ---- 4. Thank-You Page Template ----
  doc.addPage();
  sectionTitle(doc, "4. Thank-You Page Template");
  bodyText(doc, "The thank-you page is your first chance to build trust and set up the next step — don't waste it on a blank confirmation message.");
  fieldBlock(doc, "Confirmation Message (confirm delivery and set expectations)");
  fieldBlock(doc, "Next Steps (what should they do while they wait, or right after?)");
  fieldBlock(doc, "Upsell Suggestion (a related product, service, or content offer)");

  // ---- 5. Email Follow-Up Sequence ----
  doc.addPage();
  sectionTitle(doc, "5. Email Follow-Up Sequence");
  bodyText(doc, "A short 3-email sequence turns a one-time download into an ongoing relationship. Use the frameworks below as the backbone for each email.");

  subTitle(doc, "Email 1 — Delivery");
  fieldBlock(doc, "Subject");
  fieldBlock(doc, "Preview Text");
  doc.fillColor(COLORS.primary).font("Helvetica-Bold").fontSize(10).text("Body Framework", { width: 475 });
  doc.moveDown(0.2);
  bodyText(doc, "Deliver the download link immediately and clearly, restate the core promise of the lead magnet in one sentence, and set expectations for what's coming next (e.g., \"Over the next few days, I'll send a couple of quick emails to help you get the most out of this.\"). Keep this email short — its only job is delivery and trust.");

  subTitle(doc, "Email 2 — Value-Add");
  fieldBlock(doc, "Subject");
  fieldBlock(doc, "Preview Text");
  doc.fillColor(COLORS.primary).font("Helvetica-Bold").fontSize(10).text("Body Framework", { width: 475 });
  doc.moveDown(0.2);
  bodyText(doc, "Send this 2-3 days after delivery. Share one additional tip, example, or quick win that builds directly on the lead magnet's topic — something that wasn't in the original download. This email should give real value with no ask, reinforcing that subscribing was worth it.");

  subTitle(doc, "Email 3 — Soft Pitch");
  fieldBlock(doc, "Subject");
  fieldBlock(doc, "Preview Text");
  doc.fillColor(COLORS.primary).font("Helvetica-Bold").fontSize(10).text("Body Framework", { width: 475 });
  doc.moveDown(0.2);
  bodyText(doc, "Send this 4-5 days after delivery. Connect the dots between the problem the lead magnet solved and a paid product or service that solves the next, bigger problem. Keep the pitch low-pressure — one clear offer, one clear benefit, one clear CTA — and make it easy to say no without feeling like the relationship ends there.");

  // ---- 6. Lead Magnet Promotion Checklist ----
  doc.addPage();
  sectionTitle(doc, "6. Lead Magnet Promotion Checklist");
  bodyText(doc, "A lead magnet only works if people see it. Work through this checklist to make sure your offer is placed everywhere your audience already spends time.");
  checklist(doc, [
    "Website popup or slide-in configured on high-traffic pages.",
    "Dedicated CTA added to the bottom (or sidebar) of relevant blog posts.",
    "Link added to your social media bio across all active platforms.",
    "Link or mention added to your email signature.",
    "Mentioned in your bio on any guest posts you publish.",
    "Promoted via at least one paid social ad targeting your ideal audience.",
    "Included in a newsletter swap with a complementary, non-competing partner.",
    "Mentioned on a relevant podcast appearance or your own podcast, if applicable.",
    "Linked in the description of any related YouTube videos.",
    "Turned into a Pinterest pin linking back to the landing page.",
    "Shared as a native LinkedIn post with a clear, scroll-stopping hook.",
    "Shared in relevant online communities or forums where self-promotion is allowed.",
    "Linked from a dedicated resources page on your website.",
    "Included in a retargeting ad aimed at recent website visitors who didn't convert.",
    "Offered to affiliate partners as an incentive to promote alongside their own content.",
  ]);

  // ---- 7. Performance Metrics Dashboard Layout ----
  doc.addPage();
  sectionTitle(doc, "7. Performance Metrics Dashboard Layout");
  bodyText(doc, "Recreate this layout in your analytics tool or a spreadsheet to keep a single, ongoing view of how your lead magnet is performing.");
  table(
    doc,
    ["Metric", "Definition", "Target Benchmark"],
    [
      ["Downloads", "Total number of times the lead magnet has been delivered.", "Trending up month over month"],
      ["Conversion Rate", "Landing page visitors who submit the form, divided by total visitors.", "20%+ for a focused, single-offer page"],
      ["Email Signups", "New subscribers added to your list as a direct result of this lead magnet.", "Match or exceed download count"],
      ["Cost Per Lead", "Total promotion spend divided by number of leads generated (paid channels only).", "Below your average customer value ÷ 10"],
    ],
    [95, 260, 120]
  );

  contactPage(doc, { brand: BRAND, phone: PHONE, email: EMAIL, address: ADDRESS, domain: DOMAIN });

  addPageNumbers(doc, BRAND);
  doc.end();
  return outPath;
}

const p1 = buildSeoContentBrief();
const p2 = buildLeadMagnetToolkit();
console.log("Generated:", p1);
console.log("Generated:", p2);
