import type { Metadata } from "next";
import { Search, ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { GradientOrb } from "@/components/ui/GradientOrb";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering notes, product insights, and thought leadership from the GalaxyDev Pvt Ltd team on SaaS, software architecture, and tech in Pakistan.",
  openGraph: {
    title: "Blog | GalaxyDev Pvt Ltd",
    description:
      "Engineering notes, product insights, and thought leadership from the GalaxyDev Pvt Ltd team.",
    url: "https://galaxydev.pk/blog",
  },
  twitter: {
    title: "Blog | GalaxyDev Pvt Ltd",
    description:
      "Engineering notes, product insights, and thought leadership from the GalaxyDev Pvt Ltd team.",
  },
  alternates: { canonical: "https://galaxydev.pk/blog" },
};

const posts = [
  {
    slug: "building-saas-pakistan",
    category: "Engineering",
    title: "Building a Multi-Tenant SaaS Platform from Pakistan",
    excerpt:
      "Lessons learned from architecting and shipping Dealit — a fleet management SaaS — entirely from our Lahore office.",
    author: "Ali Hassan",
    date: "May 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "ai-legal-research",
    category: "AI",
    title: "How We Built an AI-Powered Legal Research Engine",
    excerpt:
      "Behind the scenes of PakistanLawHelp: fine-tuning LLMs on Pakistani case law, document parsing, and citation generation.",
    author: "Fatima Ahmed",
    date: "May 20, 2026",
    readTime: "12 min read",
  },
  {
    slug: "design-system-scaling",
    category: "Design",
    title: "Scaling a Design System Across 4 Products",
    excerpt:
      "How we built a unified design system that powers all GalaxyDev products while maintaining brand distinctiveness.",
    author: "Zainab Ali",
    date: "May 14, 2026",
    readTime: "6 min read",
  },
  {
    slug: "nextjs-app-router",
    category: "Engineering",
    title: "Why We Chose Next.js App Router for All New Projects",
    excerpt:
      "Our engineering team's deep dive into React Server Components, streaming, and the mental model shift from Pages Router.",
    author: "Omar Farooq",
    date: "May 8, 2026",
    readTime: "10 min read",
  },
  {
    slug: "pakistan-tech-ecosystem",
    category: "Culture",
    title: "Pakistan's Tech Ecosystem: A Global Opportunity",
    excerpt:
      "Why global companies are increasingly looking at Pakistan for high-quality software engineering talent and partnerships.",
    author: "Ali Hassan",
    date: "April 30, 2026",
    readTime: "7 min read",
  },
  {
    slug: "stripe-payments-saas",
    category: "Engineering",
    title: "Stripe Integration Patterns for SaaS Platforms",
    excerpt:
      "A practical guide to subscription billing, metered pricing, and Stripe Connect marketplace payments.",
    author: "Omar Farooq",
    date: "April 22, 2026",
    readTime: "9 min read",
  },
];

const categories = ["All", "Engineering", "Design", "AI", "Culture"];

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-primary">
        <GradientOrb color="purple" size="md" position="top-left" />
        <GradientOrb color="blue" size="md" position="bottom-right" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary font-medium">Blog</span>
          </nav>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple/10 text-purple text-xs font-semibold uppercase tracking-widest mb-4">
            Insights
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-text-primary mb-6">
            Insights & Engineering <span className="gradient-text">Notes</span>
          </h1>

          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 bg-bg-secondary border border-border-default rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors ${
                  cat === "All"
                    ? "bg-gradient-to-r from-blue via-purple to-magenta text-white"
                    : "bg-bg-card text-text-muted border border-border-default hover:border-border-strong"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-bg-card border border-border-default rounded-md shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="muted">{post.category}</Badge>
                      <span className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display font-semibold text-xl md:text-2xl text-text-primary group-hover:text-blue transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-xs font-bold text-white">
                          {post.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-sm font-medium text-text-primary">{post.author}</span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}

              <nav className="flex items-center justify-center gap-2 pt-8" aria-label="Pagination">
                <button className="px-4 py-2 text-sm font-medium text-text-primary bg-bg-card border border-border-default rounded-md hover:bg-bg-secondary transition-colors" aria-current="page">
                  1
                </button>
                <button className="px-4 py-2 text-sm font-medium text-text-muted bg-bg-card border border-border-default rounded-md hover:bg-bg-secondary transition-colors">
                  2
                </button>
                <button className="px-4 py-2 text-sm font-medium text-text-muted bg-bg-card border border-border-default rounded-md hover:bg-bg-secondary transition-colors">
                  3
                </button>
                <span className="px-2 text-text-muted">...</span>
                <button className="px-4 py-2 text-sm font-medium text-text-muted bg-bg-card border border-border-default rounded-md hover:bg-bg-secondary transition-colors">
                  12
                </button>
              </nav>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-text-primary mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                      <p className="text-sm font-medium text-text-primary group-hover:text-blue transition-colors line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-xs text-text-muted mt-1">{post.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-text-primary mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((cat) => (
                    <div key={cat} className="flex items-center justify-between py-1">
                      <span className="text-sm text-text-secondary">{cat}</span>
                      <span className="text-xs text-text-muted bg-bg-tertiary px-2 py-0.5 rounded-full">
                        {Math.floor(Math.random() * 8) + 2}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue/10 via-purple/10 to-magenta/10 border border-blue/20 rounded-md p-6 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Get the latest posts delivered straight to your inbox.
                </p>
                <div>
                  <label htmlFor="blog-email" className="sr-only">Email</label>
                  <input
                    id="blog-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 bg-white border border-border-default rounded-md text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue mb-3"
                  />
                  <button
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold text-sm rounded-md hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
