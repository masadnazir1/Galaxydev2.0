import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { GradientOrb } from "@/components/ui/GradientOrb";

interface Props {
  params: Promise<{ slug: string }>;
}

const postData: Record<string, {
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "building-saas-pakistan": {
    title: "Building a Multi-Tenant SaaS Platform from Pakistan",
    description:
      "Lessons learned from architecting and shipping Dealit — a fleet management SaaS — entirely from our Lahore office.",
    category: "Engineering",
    author: "Ali Hassan",
    date: "May 28, 2026",
    readTime: "8 min read",
    content: `
      <h2>Introduction</h2>
      <p>When we set out to build Dealit — a fleet management and car rental SaaS — we knew we were taking on a significant architectural challenge. Multi-tenancy, subscription billing, real-time tracking, and a polished user experience all had to come together in a single platform.</p>
      <p>Here's how we approached the architecture, the decisions we made, and the lessons we learned along the way.</p>

      <h2>Choosing the Multi-Tenancy Model</h2>
      <p>We evaluated three approaches: isolated databases, shared databases with schema per tenant, and shared databases with shared schemas (row-level isolation). For Dealit, we chose the shared database with row-level isolation approach.</p>
      <p>This gave us the best balance of operational simplicity and cost efficiency while maintaining strong data isolation guarantees through PostgreSQL Row-Level Security (RLS).</p>

      <h2>Tech Stack Decisions</h2>
      <p>Our stack choices were driven by our team's strengths and the need for rapid iteration:</p>
      <ul>
        <li><strong>Next.js</strong> — Full-stack React with SSR for SEO-critical pages</li>
        <li><strong>PostgreSQL</strong> — With RLS for multi-tenant data isolation</li>
        <li><strong>Stripe</strong> — Subscription billing and payment processing</li>
        <li><strong>Redis</strong> — Caching and real-time presence</li>
      </ul>

      <h2>Key Takeaways</h2>
      <p>Building a multi-tenant SaaS from Pakistan comes with unique advantages — access to world-class engineering talent, competitive operational costs, and a growing ecosystem of tech infrastructure. The key is to invest in architecture early and choose technologies that scale with you.</p>
      <blockquote>Good architecture isn't about predicting the future — it's about building a system that can adapt to any future.</blockquote>
    `,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postData[slug];
  if (!post) return { title: "Post Not Found | GalaxyDev Pvt Ltd" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | GalaxyDev Pvt Ltd Blog`,
      description: post.description,
      url: `https://galaxydev.pk/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      title: `${post.title} | GalaxyDev Pvt Ltd Blog`,
      description: post.description,
    },
    alternates: { canonical: `https://galaxydev.pk/blog/${slug}` },
  };
}

function generateTableOfContents(html: string) {
  const headings = html.match(/<h2>(.*?)<\/h2>/g) || [];
  return headings.map((h) => h.replace(/<\/?h2>/g, ""));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postData[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-4xl text-text-primary mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const toc = generateTableOfContents(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "GalaxyDev",
      logo: { "@type": "ImageObject", url: "https://galaxydev.pk/og-image.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://galaxydev.pk/blog/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16 bg-bg-primary">
        <GradientOrb color="blue" size="sm" position="top-left" />
        <GradientOrb color="purple" size="sm" position="bottom-right" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <article>
            <header>
              <div className="flex items-center gap-3 mb-4">
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
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
                {post.title}
              </h1>
              <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-border-default">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-sm font-bold text-white">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text-primary">{post.author}</div>
                    <div className="text-xs text-text-muted">Staff Engineer</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted mr-1">Share:</span>
                  <button className="p-2 text-text-muted hover:text-text-primary hover:bg-bg-tertiary rounded-md transition-colors" aria-label="Share on LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </button>
                  <button className="p-2 text-text-muted hover:text-text-primary hover:bg-bg-tertiary rounded-md transition-colors" aria-label="Share on Twitter">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </button>
                  <button className="p-2 text-text-muted hover:text-text-primary hover:bg-bg-tertiary rounded-md transition-colors" aria-label="Copy link">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </header>

            <div className="grid lg:grid-cols-12 gap-10 mt-10">
              <div className="lg:col-span-8">
                <div
                  className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-text-primary prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-4 prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-blue prose-strong:text-text-primary prose-code:text-purple prose-code:bg-bg-tertiary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-[#0F172A] prose-pre:rounded-md prose-pre:border prose-pre:border-border-default prose-blockquote:border-l-blue prose-blockquote:text-text-secondary prose-blockquote:italic prose-ul:text-text-secondary prose-li:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              <aside className="lg:col-span-4">
                <div className="sticky top-28 space-y-8">
                  {toc.length > 0 && (
                    <div className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm">
                      <h3 className="font-display font-semibold text-sm text-text-muted uppercase tracking-wider mb-4">
                        On this page
                      </h3>
                      <nav className="space-y-2">
                        {toc.map((heading) => (
                          <a
                            key={heading}
                            href={`#${heading.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block text-sm text-text-secondary hover:text-blue transition-colors"
                          >
                            {heading}
                          </a>
                        ))}
                      </nav>
                    </div>
                  )}

                  <div className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm">
                    <h3 className="font-display font-semibold text-sm text-text-muted uppercase tracking-wider mb-4">
                      Share
                    </h3>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-[#0A66C2] text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn
                      </button>
                      <button className="flex-1 px-3 py-2 bg-[#1DA1F2] text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X
                      </button>
                    </div>
                  </div>

                  <div className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-xl font-bold text-white mb-4 mx-auto">
                      {post.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-text-primary text-center mb-1">
                      {post.author}
                    </h3>
                    <p className="text-sm text-text-muted text-center mb-4">Staff Engineer at GalaxyDev Pvt Ltd</p>
                    <p className="text-sm text-text-secondary text-center">
                      Building SaaS platforms and sharing lessons from the trenches.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
