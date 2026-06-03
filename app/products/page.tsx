import type { Metadata } from "next";
import { Check, ArrowRight, Car, Scale, Package, Store } from "lucide-react";
import Link from "next/link";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Dealit, PakistanLawHelp, DeliverIt, and JKMarkaz — proprietary SaaS products built by GalaxyDev Pvt Ltd for global industries.",
  openGraph: {
    title: "Products | GalaxyDev Pvt Ltd",
    description:
      "Proprietary SaaS products built by GalaxyDev Pvt Ltd — fleet management, legaltech, logistics, and e-commerce.",
    url: "https://galaxydev.pk/products",
  },
  twitter: {
    title: "Products | GalaxyDev Pvt Ltd",
    description:
      "Proprietary SaaS products built by GalaxyDev Pvt Ltd — fleet management, legaltech, logistics, and e-commerce.",
  },
  alternates: { canonical: "https://galaxydev.pk/products" },
};

const products = [
  {
    name: "Dealit",
    tagline: "Car Rental & Fleet Digitalization SaaS",
    description:
      "A comprehensive SaaS platform that digitizes every aspect of car rental and fleet management — from bookings and payments to maintenance tracking and driver management.",
    color: "blue",
    accent: "from-blue via-blue to-blue",
    features: [
      "Fleet management with real-time vehicle tracking",
      "Online booking engine with calendar integration",
      "Stripe-powered payment processing",
      "Analytics dashboard with revenue reporting",
      "Driver and customer management portal",
      "Maintenance scheduling and alerts",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    mockup: "Dealit Dashboard",
  },
  {
    name: "PakistanLawHelp",
    tagline: "AI-Powered Legal Research Platform",
    description:
      "An intelligent legal research assistant that helps lawyers, students, and researchers find relevant case law, analyze documents, and generate citations in seconds.",
    color: "purple",
    accent: "from-purple via-purple to-purple",
    features: [
      "AI-powered case law search across Pakistani courts",
      "Document analyzer with key entity extraction",
      "Automatic citation generator (multiple formats)",
      "Lawyer directory with specialization filters",
      "Save and organize research into projects",
      "Collaborative annotation and sharing",
    ],
    tech: ["Next.js", "Python", "PostgreSQL", "OpenAI", "Elasticsearch"],
    mockup: "PakistanLawHelp Research",
  },
  {
    name: "DeliverIt",
    tagline: "Logistics & Last-Mile Delivery SaaS",
    description:
      "A full-stack logistics platform connecting businesses with delivery fleets. Real-time tracking, route optimization, and multi-vendor support for modern logistics operations.",
    color: "purple",
    accent: "from-blue via-purple to-magenta",
    features: [
      "Real-time package tracking with ETA predictions",
      "AI-powered route optimization engine",
      "Multi-vendor and multi-fleet management",
      "White-label driver mobile app (iOS & Android)",
      "Automated dispatch and assignment",
      "Proof of delivery with photo capture",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "Redis", "Google Maps"],
    mockup: "DeliverIt Tracking",
  },
  {
    name: "JKMarkaz",
    tagline: "Multi-Vendor E-Commerce Marketplace",
    description:
      "A scalable marketplace platform that enables businesses to launch and manage multi-vendor e-commerce operations with vendor onboarding, escrow payments, and storefront management.",
    color: "magenta",
    accent: "from-magenta via-magenta to-magenta",
    features: [
      "Self-serve vendor onboarding and verification",
      "Product catalog with advanced search and filters",
      "Escrow payment system with Stripe Connect",
      "Vendor storefront builder with themes",
      "Order management and fulfillment tracking",
      "Commission and payout automation",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Elasticsearch"],
    mockup: "JKMarkaz Storefront",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-primary">
        <GradientOrb color="blue" size="lg" position="top-left" />
        <GradientOrb color="magenta" size="lg" position="bottom-right" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary font-medium">Products</span>
          </nav>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-text-primary mb-4">
            Products Built to <span className="gradient-text">Last</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
            Proprietary platforms engineered for scale, solving real problems across industries.
          </p>
        </div>
      </section>

      {products.map((product, i) => {
        const Icon = [Car, Scale, Package, Store][i];
        const isEven = i % 2 === 0;

        const colorToGradient: Record<string, string> = {
          blue: "from-blue/20 to-blue/10",
          purple: "from-purple/20 to-purple/10",
          magenta: "from-magenta/20 to-magenta/10",
        };
        const colorToText: Record<string, string> = {
          blue: "text-blue",
          purple: "text-purple",
          magenta: "text-magenta",
        };
        const colorToMockupBg: Record<string, string> = {
          blue: "from-blue/10 to-blue/5",
          purple: "from-purple/10 to-purple/5",
          magenta: "from-magenta/10 to-magenta/5",
        };
        const colorToTextDim: Record<string, string> = {
          blue: "text-blue/30",
          purple: "text-purple/30",
          magenta: "text-magenta/30",
        };
        const colorToCheck: Record<string, string> = {
          blue: "text-blue",
          purple: "text-purple",
          magenta: "text-magenta",
        };

        const gradClass = colorToGradient[product.color] || colorToGradient.blue;
        const textClass = colorToText[product.color] || colorToText.blue;
        const mockupBgClass = colorToMockupBg[product.color] || colorToMockupBg.blue;
        const textDimClass = colorToTextDim[product.color] || colorToTextDim.blue;
        const checkClass = colorToCheck[product.color] || colorToCheck.blue;

        return (
          <section
            key={product.name}
            className={`py-20 md:py-28 ${isEven ? "bg-bg-primary" : "bg-bg-secondary"}`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradClass} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${textClass}`} />
                    </div>
                    <Badge variant={product.color as "blue" | "purple" | "magenta"}>SaaS</Badge>
                  </div>
                  <h2 className="font-display font-semibold text-3xl md:text-4xl text-text-primary mb-2">
                    {product.name}
                  </h2>
                  <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check className={`w-4 h-4 ${checkClass} shrink-0 mt-0.5`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tech.map((t) => (
                      <Badge key={t} variant="muted">{t}</Badge>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-glow"
                  >
                    Request Demo <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="rounded-lg border border-border-default bg-bg-card shadow-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border-default">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <span className="text-xs text-text-muted ml-2">{product.mockup}</span>
                    </div>
                    <div className={`aspect-[16/10] bg-gradient-to-br ${mockupBgClass} flex items-center justify-center p-6`}>
                      <Icon className={`w-20 h-20 ${textDimClass}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-r from-blue via-purple to-magenta">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Want to See These in Action?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            We&apos;ll walk you through a personalized demo of any product.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Book a Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
