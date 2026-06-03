import type { Metadata } from "next";
import {
  Palette,
  Code2,
  Cloud,
  ShoppingCart,
  Building2,
  Smartphone,
  Megaphone,
  Video,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GalaxyDev offers UI/UX design, custom software development, SaaS platforms, e-commerce solutions, mobile apps, digital marketing, video editing, and digital transformation consulting.",
  openGraph: {
    title: "Services | GalaxyDev",
    description:
      "Full-spectrum product engineering, digital marketing, and video production services from Pakistan's premier software house.",
    url: "https://galaxydev.pk/services",
  },
  twitter: {
    title: "Services | GalaxyDev",
    description:
      "Full-spectrum product engineering services from Pakistan's premier software house.",
  },
  alternates: { canonical: "https://galaxydev.pk/services" },
};

const serviceList = [
  {
    icon: Palette,
    title: "UI/UX Design & Product Strategy",
    points: [
      "User research, personas, and journey mapping",
      "Interactive prototypes and design systems",
      "Usability testing and accessibility audits",
      "Product strategy and roadmap planning",
    ],
    tech: ["Figma", "Framer", "Tailwind CSS", "Storybook"],
  },
  {
    icon: Code2,
    title: "Custom Software Architecture & Development",
    points: [
      "Microservices and event-driven architectures",
      "RESTful and GraphQL API design",
      "Secure, scalable backend systems",
      "CI/CD pipelines and infrastructure as code",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    icon: Cloud,
    title: "SaaS Platform Development",
    points: [
      "Multi-tenant architecture and isolation",
      "Subscription billing and metering",
      "Self-serve onboarding and admin portals",
      "Usage analytics and dashboards",
    ],
    tech: ["Stripe", "Supabase", "Next.js", "Redis", "PostgreSQL"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    points: [
      "Headless commerce architecture",
      "Custom checkout and payment flows",
      "Marketplace and multi-vendor platforms",
      "Inventory and order management systems",
    ],
    tech: ["Stripe", "Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    icon: Building2,
    title: "Digital Transformation & Consulting",
    points: [
      "Legacy system modernization assessments",
      "Cloud migration strategy and execution",
      "DevOps and platform engineering setup",
      "Technical team augmentation and training",
    ],
    tech: ["AWS", "Docker", "Terraform", "Kubernetes"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    points: [
      "Cross-platform apps with React Native",
      "Flutter-based mobile solutions",
      "Native module integration",
      "App store deployment and monitoring",
    ],
    tech: ["React Native", "Flutter", "Expo", "Firebase"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    points: [
      "Meta Ads (Facebook & Instagram) campaign management",
      "TikTok Ads strategy, creative, and optimization",
      "Google Ads (Search, Display, YouTube, Shopping)",
      "Third-party platform advertising (LinkedIn, Snapchat, Pinterest)",
      "Conversion tracking, pixel setup, and analytics",
      "A/B testing, audience segmentation, and retargeting",
    ],
    tech: ["Meta Ads Manager", "TikTok Ads", "Google Ads", "GA4", "Hotjar"],
  },
  {
    icon: Video,
    title: "Video Editing & Production",
    points: [
      "Short-form content for TikTok, Reels, and Shorts",
      "Corporate videos, explainers, and product demos",
      "Motion graphics, lower thirds, and visual effects",
      "Color grading, sound design, and mixing",
      "Multi-platform formatting and optimization",
      "End-to-end production from scripting to delivery",
    ],
    tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Figma", "CapCut"],
  },
];

const steps = [
  { number: "01", title: "Discovery", description: "We learn your business, users, and goals." },
  { number: "02", title: "Architecture", description: "We design the system for scale and maintainability." },
  { number: "03", title: "Build", description: "Agile sprints with continuous delivery." },
  { number: "04", title: "Launch", description: "Production deployment with monitoring and support." },
  { number: "05", title: "Scale", description: "Optimize, iterate, and grow together." },
];

const techCategories = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
  { category: "Cloud", items: ["AWS", "Docker", "Kubernetes", "Terraform"] },
  { category: "Design", items: ["Figma", "Framer", "Storybook", "Lucid"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-primary">
        <GradientOrb color="blue" size="lg" position="top-left" />
        <GradientOrb color="purple" size="md" position="bottom-right" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary font-medium">Services</span>
          </nav>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
            Our Expertise
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-text-primary mb-4">
            What We <span className="gradient-text">Build</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
            End-to-end product engineering services tailored to your business — from strategy to
            ship to scale.
          </p>
        </div>
      </section>

      {serviceList.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.title}
            className={`py-20 md:py-28 ${isEven ? "bg-bg-primary" : "bg-bg-secondary"}`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className={`grid lg:grid-cols-12 gap-12 items-center ${isEven ? "" : "lg:direction-rtl"}`}>
                <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue/20 via-purple/20 to-magenta/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue" />
                  </div>
                  <h2 className="font-display font-semibold text-3xl md:text-4xl text-text-primary mb-6">
                    {service.title}
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-text-secondary">
                        <Check className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tech.map((t) => (
                      <Badge key={t} variant="muted">{t}</Badge>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-glow"
                  >
                    Discuss This Service <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue/10 via-purple/10 to-magenta/10 border border-blue/10 flex items-center justify-center">
                    <Icon className="w-24 h-24 text-blue/30" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple/10 text-purple text-xs font-semibold uppercase tracking-widest mb-4">
              Process
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              How We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A proven methodology that de-risks your investment and accelerates time-to-market.
            </p>
          </div>

          <div className="relative grid md:grid-cols-5 gap-6">
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue via-purple to-magenta hidden md:block" />
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue via-purple to-magenta flex items-center justify-center text-white font-bold text-sm relative z-10">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-magenta/10 text-magenta text-xs font-semibold uppercase tracking-widest mb-4">
              Tech Stack
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Tools We <span className="gradient-text">Master</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm"
              >
                <h3 className="font-semibold text-sm text-text-muted uppercase tracking-wider mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-bg-tertiary text-text-secondary text-xs font-medium rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-r from-blue via-purple to-magenta">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Let&apos;s discuss how we can help you build something amazing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
