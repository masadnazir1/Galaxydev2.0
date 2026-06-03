import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Newspaper,
  Mic,
  Users,
  Globe,
  BookOpen,
  Headphones,
  MessageSquare,
  ArrowRight,
  Check,
  ExternalLink,
  BarChart3,
  Share2,
  Search,
  Shield,
  Zap,
} from "lucide-react";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "KashmirBook — AJ&K's Digital Publishing Platform",
  description:
    "KashmirBook by GalaxyDev Pvt Ltd is Azad Kashmir's first modern digital publishing platform featuring article publishing, live audio discussion rooms, writer monetization, and community engagement tools.",
  openGraph: {
    title: "KashmirBook — Digital Publishing for Azad Kashmir | GalaxyDev Pvt Ltd",
    description:
      "AJ&K's first modern platform for news, articles, and community dialogue with live audio discussion rooms.",
    url: "https://galaxydev.pk/products/kashmirbook",
  },
  twitter: {
    title: "KashmirBook — Digital Publishing for Azad Kashmir | GalaxyDev Pvt Ltd",
    description:
      "AJ&K's first modern platform for news, articles, and community dialogue with live audio discussion rooms.",
  },
  alternates: { canonical: "https://galaxydev.pk/products/kashmirbook" },
};

const kashmirGreen = "#1B6B3A";

const features = [
  {
    icon: BookOpen,
    title: "Rich Article Editor",
    description:
      "A powerful WYSIWYG editor with Markdown support, media embeds, and formatting tools tailored for journalists and writers.",
  },
  {
    icon: Mic,
    title: "Live Audio Rooms",
    description:
      "Host real-time audio discussions on any topic. Listeners can raise hands, ask questions, and participate in community conversations.",
  },
  {
    icon: Users,
    title: "Community & Followers",
    description:
      "Build your audience. Writers can grow their follower base, receive notifications, and engage directly with readers.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track article views, reader demographics, engagement metrics, and revenue with intuitive visual dashboards.",
  },
  {
    icon: MessageSquare,
    title: "Comments & Discussions",
    description:
      "Threaded comments with moderation tools. Foster healthy discussions while maintaining content quality.",
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description:
      "One-click sharing to all major platforms with auto-generated social cards, OG images, and share analytics.",
  },
  {
    icon: Search,
    title: "Advanced Discovery",
    description:
      "AI-powered content recommendations, full-text search, topic tags, and personalized feeds for every reader.",
  },
  {
    icon: Shield,
    title: "Content Moderation",
    description:
      "Automated spam detection, profanity filters, and role-based moderation workflows to keep discussions clean.",
  },
];

const techStack = [
  { label: "Next.js 16", category: "Frontend" },
  { label: "Node.js", category: "Backend" },
  { label: "PostgreSQL", category: "Database" },
  { label: "Redis", category: "Cache" },
  { label: "WebSockets", category: "Real-time" },
  { label: "OpenAI", category: "AI/ML" },
  { label: "Stripe", category: "Payments" },
  { label: "Elasticsearch", category: "Search" },
];

export default function KashmirBookPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-primary">
        <GradientOrb color="mix" size="lg" position="top-left" />
        <GradientOrb color="mix" size="lg" position="bottom-right" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products" className="hover:text-text-primary transition-colors">Products</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary font-medium" style={{ color: kashmirGreen }}>KashmirBook</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: `${kashmirGreen}1A` }}
                >
                  <Newspaper className="w-6 h-6" style={{ color: kashmirGreen }} />
                </div>
                <Badge variant="muted">Media · Publishing</Badge>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              </div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-text-primary mb-4 leading-tight">
                KashmirBook — The{" "}
                <span style={{ color: kashmirGreen }}>Voice</span> of Azad Kashmir
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-4">
                AJ&amp;K&apos;s first modern digital publishing platform. Writers
                publish, readers discover, and communities connect through live
                audio discussion rooms.
              </p>
              <p className="text-sm text-text-muted mb-8">
                Built and maintained by GalaxyDev for the people of Azad Jammu &amp; Kashmir.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://kashmirbook.galaxydev.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${kashmirGreen}, #2693FF)` }}
                >
                  Visit Platform <ExternalLink size={16} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 border-2"
                  style={{ borderColor: kashmirGreen, color: kashmirGreen }}
                >
                  Request Demo <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-lg opacity-10 blur-3xl"
                style={{ backgroundColor: kashmirGreen }}
              />
              <div className="relative rounded-lg border border-border-default bg-bg-card shadow-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border-default">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-text-muted ml-2">KashmirBook — Homepage</span>
                </div>
                <Image
                  src="/images/kashmirbook-hero.svg"
                  alt="KashmirBook Platform Screenshot"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: `${kashmirGreen}14`, color: kashmirGreen }}>
              Platform Overview
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-4">
              Everything a Modern Publisher Needs
            </h2>
            <p className="text-lg text-text-secondary">
              From article creation to community engagement, KashmirBook provides
              every tool required to run a successful digital publication in
              Azad Kashmir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative rounded-lg border border-border-default bg-bg-card p-6 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 inset-x-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: `linear-gradient(90deg, ${kashmirGreen}, #2693FF)` }}
                  />
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${kashmirGreen}14` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: kashmirGreen }} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-bg-primary">
        <GradientOrb color="blue" size="sm" position="center" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ backgroundColor: `${kashmirGreen}14`, color: kashmirGreen }}>
                Editor
              </span>
              <h2 className="font-display font-bold text-4xl text-text-primary mb-4">
                Powerful Publishing Tools
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                KashmirBook&apos;s editor is designed for writers, journalists, and
                content creators. With real-time preview, media embedding,
                SEO scoring, and collaboration features, publishing quality
                content has never been easier.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Markdown & WYSIWYG dual-mode editing",
                  "Real-time preview with mobile/desktop toggle",
                  "Image, video, and audio embedding",
                  "Built-in SEO analysis and suggestions",
                  "Auto-save with version history",
                  "Collaborative editing with team workflows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: kashmirGreen }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-lg opacity-10 blur-3xl"
                style={{ backgroundColor: kashmirGreen }}
              />
              <div className="relative rounded-lg border border-border-default bg-bg-card shadow-sm overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border-default">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-text-muted ml-2">KashmirBook Editor</span>
                </div>
                <Image
                  src="/images/kashmirbook-editor.svg"
                  alt="KashmirBook Editor Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ backgroundColor: `${kashmirGreen}14`, color: kashmirGreen }}>
                Audio Rooms
              </span>
              <h2 className="font-display font-bold text-4xl text-text-primary mb-4">
                Live Audio Discussions
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Host real-time audio conversations on any topic. KashmirBook&apos;s
                live audio rooms bring the community together — from political
                debates to poetry recitals, tech talks to cultural discussions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Create and schedule audio rooms with topics",
                  "Raise hand & moderated Q&A system",
                  "Speaker spotlight with audience polling",
                  "Auto-transcription for accessibility",
                  "Recording & replay for on-demand listening",
                  "Real-time reactions and emoji responses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: kashmirGreen }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative lg:order-1">
              <div className="relative rounded-lg border border-border-default bg-bg-card shadow-sm overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border-default">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-text-muted ml-2">KashmirBook — Audio Rooms</span>
                </div>
                <Image
                  src="/images/kashmirbook-audio.svg"
                  alt="KashmirBook Audio Rooms Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: `${kashmirGreen}14`, color: kashmirGreen }}>
              Writer Monetization
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-4">
              Earn From Your Writing
            </h2>
            <p className="text-lg text-text-secondary">
              KashmirBook empowers writers to monetize their content through
              multiple revenue streams — so you can focus on what matters most:
              telling great stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Revenue Sharing",
                description:
                  "Earn a share of ad revenue generated by your articles. Transparent reporting with monthly payouts via JazzCash, Easypaisa, or bank transfer.",
              },
              {
                icon: Globe,
                title: "Premium Subscriptions",
                description:
                  "Offer premium content behind a paywall. Set your own pricing and keep the majority of subscription revenue from your dedicated readers.",
              },
              {
                icon: Headphones,
                title: "Audio Room Tips",
                description:
                  "Hosts can receive tips and donations from listeners during live audio sessions. Real-time tipping with low processing fees.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-border-default bg-bg-card p-8 text-center hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: `${kashmirGreen}14` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: kashmirGreen }} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ backgroundColor: `${kashmirGreen}14`, color: kashmirGreen }}>
                Tech Stack
              </span>
              <h2 className="font-display font-bold text-4xl text-text-primary mb-4">
                Built on Modern Technology
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                KashmirBook is engineered with the same cutting-edge stack
                that powers all GalaxyDev products — performance, scalability,
                and reliability out of the box.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {(["Frontend", "Backend", "Database", "Cache", "Real-time", "AI/ML", "Payments", "Search"] as const).map(
                  (category) => {
                    const items = techStack.filter((t) => t.category === category);
                    return (
                      <div
                        key={category}
                        className="rounded-lg border border-border-default bg-bg-card p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                          {category}
                        </p>
                        {items.map((t) => (
                          <span
                            key={t.label}
                            className="inline-flex mr-1.5 mb-1 px-2.5 py-1 text-xs font-medium rounded-full"
                            style={{
                              backgroundColor: `${kashmirGreen}0D`,
                              color: kashmirGreen,
                            }}
                          >
                            {t.label}
                          </span>
                        ))}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-lg border border-border-default bg-bg-card shadow-sm overflow-hidden"
              >
                <div className="px-6 py-5 border-b border-border-default">
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-1">
                    Key Integrations
                  </h3>
                  <p className="text-sm text-text-muted">
                    KashmirBook connects with essential services to deliver a
                    complete publishing experience.
                  </p>
                </div>
                <div className="p-6 space-y-5">
                  {[
                    {
                      icon: Globe,
                      title: "Stripe Connect",
                      desc: "Payment processing for subscriptions, ad revenue, and tips.",
                    },
                    {
                      icon: MessageSquare,
                      title: "OpenAI API",
                      desc: "AI-powered content recommendations and moderation.",
                    },
                    {
                      icon: BarChart3,
                      title: "Cloudflare CDN",
                      desc: "Global content delivery with DDoS protection.",
                    },
                    {
                      icon: Users,
                      title: "SendGrid",
                      desc: "Email notifications, newsletters, and digest emails.",
                    },
                    {
                      icon: Shield,
                      title: "AWS S3",
                      desc: "Scalable media storage for images, audio, and video.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${kashmirGreen}14` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: kashmirGreen }} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text-primary">
                            {item.title}
                          </p>
                          <p className="text-xs text-text-muted">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: `linear-gradient(135deg, ${kashmirGreen}, #0F766E, #2693FF)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Ready to Publish with KashmirBook?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Join the growing community of writers and readers shaping the
            digital future of Azad Kashmir.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://kashmirbook.galaxydev.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white font-bold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
              style={{ color: kashmirGreen }}
            >
              Visit KashmirBook <ExternalLink size={18} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 active:scale-95 transition-all duration-200"
            >
              Request Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
