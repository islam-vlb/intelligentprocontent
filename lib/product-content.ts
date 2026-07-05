export type ProductContent = {
  description: string;
  features: string[];
  whoFor: string[];
};

export const PRODUCT_CONTENT: Record<number, ProductContent> = {
  1: {
    description: "Starter Prompt Set — 25 AI Prompts for Marketers is a one-time digital purchase in our Prompt Systems lineup, delivered by email immediately after checkout. It includes 25 tested prompts covering everyday marketing writing tasks, built as an entry point into structured AI-assisted content production.",
    features: ["25 ready-to-use prompts for common marketing tasks", "Organized by use case for quick reference", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Compatible with major AI writing tools"],
    whoFor: ["Solo marketers", "New content creators", "Small business owners"],
  },
  2: {
    description: "Email Subject Line Prompt Pack (50 Prompts) is a one-time digital purchase in our Prompt Systems lineup, delivered by email immediately after checkout. It includes 50 structured prompts for generating high-performing subject lines across campaign types.",
    features: ["50 subject line prompts across campaign types", "Organized by goal: open rate, urgency, curiosity", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Compatible with major AI writing tools"],
    whoFor: ["Email marketers", "Lifecycle marketing teams", "Newsletter operators"],
  },
  3: {
    description: "Blog Ideation Framework — 30 Topic Generators is a one-time digital purchase in our Content Frameworks lineup, delivered by email immediately after checkout. It includes 30 structured topic-generation frameworks for building an editorial pipeline that never runs dry.",
    features: ["30 structured topic-generation frameworks", "Includes a topic-scoring worksheet", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Content Frameworks"],
    whoFor: ["Content marketers", "SEO writers", "Editorial teams"],
  },
  4: {
    description: "Social Media Content Calendar Framework is a one-time digital purchase in our Content Frameworks lineup, delivered by email immediately after checkout. It includes a full editorial calendar structure plus weekly planning worksheets for organizing social output.",
    features: ["Full editorial calendar framework", "Weekly planning worksheets included", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Content Frameworks"],
    whoFor: ["Social media managers", "Community managers", "Small marketing teams"],
  },
  5: {
    description: "Brand Voice Prompt Toolkit (40 Prompts) is a one-time digital purchase in our Prompt Systems lineup, delivered by email immediately after checkout. It includes 40 prompts designed to define, document, and consistently apply a brand's voice across content.",
    features: ["40 prompts for defining and applying brand voice", "Includes a brand voice reference worksheet", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Compatible with major AI writing tools"],
    whoFor: ["Brand and marketing managers", "Agencies managing client voice", "Content teams with multiple writers"],
  },
  6: {
    description: "SEO Content Brief Framework — Complete System is a one-time digital purchase in our Content Frameworks lineup, delivered by email immediately after checkout. It includes a full content brief structure plus keyword and search-intent worksheets for writers and editors.",
    features: ["Complete SEO content brief structure", "Keyword and search-intent worksheets included", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Content Frameworks"],
    whoFor: ["SEO content teams", "In-house editors", "Content agencies"],
  },
  7: {
    description: "Content Repurposing Workflow — 7-Channel System is a one-time digital purchase in our Workflow Tools lineup, delivered by email immediately after checkout. It includes a step-by-step workflow for turning one core piece of content into assets for seven distribution channels.",
    features: ["Step-by-step 7-channel repurposing workflow", "Covers turning one asset into multiple formats", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Workflow Tools"],
    whoFor: ["Content production teams", "Solo creators scaling output", "Marketing agencies"],
  },
  8: {
    description: "Lead Magnet Creation Toolkit is a one-time digital purchase in our Operations Kits lineup, delivered by email immediately after checkout. It includes structured templates and a planning framework for building lead magnets that support list growth.",
    features: ["Structured lead magnet planning templates", "Includes distribution checklist", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Operations Kits"],
    whoFor: ["Demand generation marketers", "Course creators", "Growth-focused small businesses"],
  },
  9: {
    description: "Weekly Content Planning System is a one-time digital purchase in our Workflow Tools lineup, delivered by email immediately after checkout. It includes a repeatable weekly planning structure that keeps content production on schedule.",
    features: ["Repeatable weekly planning structure", "Includes a production checklist", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Workflow Tools"],
    whoFor: ["Content managers", "Marketing teams of any size", "Independent content creators"],
  },
  10: {
    description: "Sales Page Copy Framework — Full Structure is a one-time digital purchase in our Content Frameworks lineup, delivered by email immediately after checkout. It includes a complete section-by-section structure for writing sales pages that guide a reader from headline to close.",
    features: ["Complete section-by-section sales page structure", "Includes headline and objection-handling prompts", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Content Frameworks"],
    whoFor: ["Copywriters", "Product marketers", "Founders writing their own pages"],
  },
  11: {
    description: "Newsletter Content Engine — 12-Week System is a one-time digital purchase in our Workflow Tools lineup, delivered by email immediately after checkout. It includes a 12-week structured plan for producing a consistent newsletter without starting from a blank page.",
    features: ["12-week structured newsletter plan", "Includes topic bank and send-schedule template", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Workflow Tools"],
    whoFor: ["Newsletter writers", "Community builders", "Content marketers"],
  },
  12: {
    description: "Agency Content Operations Toolkit is a one-time digital purchase in our Operations Kits lineup, delivered by email immediately after checkout. It includes the frameworks, prompts, and checklists an agency needs to run client content production consistently.",
    features: ["Full agency content operations framework", "Includes client onboarding and QA checklists", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Operations Kits"],
    whoFor: ["Content and marketing agencies", "Fractional content teams", "Multi-client freelance writers"],
  },
  13: {
    description: "Full Funnel Copy Framework — Top to Bottom is a one-time digital purchase in our Content Frameworks lineup, delivered by email immediately after checkout. It includes structured copy frameworks for every funnel stage, from top-of-funnel awareness content to bottom-of-funnel conversion copy.",
    features: ["Copy frameworks for every funnel stage", "Includes messaging map worksheet", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Content Frameworks"],
    whoFor: ["Growth marketers", "Copywriters", "Founders building a full funnel"],
  },
  14: {
    description: "AI Content Strategy Playbook is a one-time digital purchase in our Operations Kits lineup, delivered by email immediately after checkout. It includes a complete strategic framework for planning, prioritizing, and operating an AI-assisted content program.",
    features: ["Complete AI content strategy framework", "Includes prioritization and planning worksheets", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Operations Kits"],
    whoFor: ["Heads of content and marketing", "Strategy consultants", "Growing content teams"],
  },
  15: {
    description: "90-Day Content Launch System is a one-time digital purchase in our Workflow Tools lineup, delivered by email immediately after checkout. It includes a full 90-day structured plan for taking a content initiative from kickoff to a repeatable production cadence.",
    features: ["Full 90-day structured launch plan", "Includes week-by-week milestone worksheets", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Workflow Tools"],
    whoFor: ["Teams launching a new content initiative", "Marketing leads", "Consultants onboarding new clients"],
  },
  16: {
    description: "Complete Intelligent Content Suite — All Systems is a one-time digital purchase in our Operations Kits lineup, delivered by email immediately after checkout. It includes every prompt system, content framework, and workflow tool in the IntelliPro catalog in a single bundle.",
    features: ["Includes every current prompt system and framework", "Includes every current workflow tool and operations kit", "Instant digital delivery by email after purchase", "One-time purchase — no recurring charges", "Category: Operations Kits"],
    whoFor: ["Agencies running multiple accounts", "Content leads standardizing a whole team", "Creators who want the entire catalog"],
  },
};
