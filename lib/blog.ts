export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    slug: "building-saas-pakistan",
    category: "Engineering",
    title: "Building a Multi-Tenant SaaS Platform from Pakistan",
    description:
      "Lessons learned from architecting and shipping Dealit — a fleet management SaaS — entirely from our Lahore office.",
    author: "Ali Hassan",
    date: "May 28, 2026",
    readTime: "8 min read",
    excerpt:
      "Lessons learned from architecting and shipping Dealit — a fleet management SaaS — entirely from our Lahore office.",
  },
  {
    slug: "ai-legal-research",
    category: "AI",
    title: "How We Built an AI-Powered Legal Research Engine",
    description:
      "Behind the scenes of PakistanLawHelp: fine-tuning LLMs on Pakistani case law, document parsing, and citation generation.",
    author: "Fatima Ahmed",
    date: "May 20, 2026",
    readTime: "12 min read",
    excerpt:
      "Behind the scenes of PakistanLawHelp: fine-tuning LLMs on Pakistani case law, document parsing, and citation generation.",
  },
  {
    slug: "design-system-scaling",
    category: "Design",
    title: "Scaling a Design System Across 4 Products",
    description:
      "How we built a unified design system that powers all GalaxyDev products while maintaining brand distinctiveness.",
    author: "Zainab Ali",
    date: "May 14, 2026",
    readTime: "6 min read",
    excerpt:
      "How we built a unified design system that powers all GalaxyDev products while maintaining brand distinctiveness.",
  },
  {
    slug: "nextjs-app-router",
    category: "Engineering",
    title: "Why We Chose Next.js App Router for All New Projects",
    description:
      "Our engineering team's deep dive into React Server Components, streaming, and the mental model shift from Pages Router.",
    author: "Omar Farooq",
    date: "May 8, 2026",
    readTime: "10 min read",
    excerpt:
      "Our engineering team's deep dive into React Server Components, streaming, and the mental model shift from Pages Router.",
  },
  {
    slug: "pakistan-tech-ecosystem",
    category: "Culture",
    title: "Pakistan's Tech Ecosystem: A Global Opportunity",
    description:
      "Why global companies are increasingly looking at Pakistan for high-quality software engineering talent and partnerships.",
    author: "Ali Hassan",
    date: "April 30, 2026",
    readTime: "7 min read",
    excerpt:
      "Why global companies are increasingly looking at Pakistan for high-quality software engineering talent and partnerships.",
  },
  {
    slug: "stripe-payments-saas",
    category: "Engineering",
    title: "Stripe Integration Patterns for SaaS Platforms",
    description:
      "A practical guide to subscription billing, metered pricing, and Stripe Connect marketplace payments.",
    author: "Omar Farooq",
    date: "April 22, 2026",
    readTime: "9 min read",
    excerpt:
      "A practical guide to subscription billing, metered pricing, and Stripe Connect marketplace payments.",
  },
];

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
