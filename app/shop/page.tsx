import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Cloud,
  Globe,
  Smartphone,
  Palette,
  Layout,
  Paintbrush,
  Image,
  Pen,
  Code,
  Network,
  Zap,
  Bot,
  Monitor,
  Briefcase,
  Users,
  Layers,
  ShoppingCart,
  Server,
  Container,
  Shield,
  Laptop,
  Keyboard,
  Headphones,
  Lightbulb,
  Home,
  Gamepad2,
  Rocket,
  FileText,
  Gem,
  Star,
  Download,
  Building2,
  Sparkles,
  Clock,
  CheckCircle,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ShopFeatured } from "@/components/sections/ShopFeatured";
import { ShopTestimonials } from "@/components/sections/ShopTestimonials";

const siteUrl = "https://galaxydev.pk";
const pagePath = "/shop";
const pageUrl = `${siteUrl}${pagePath}`;
const shopUrl = "https://shop.galaxydev.pk";

export const metadata: Metadata = {
  title: "GalaxyDev Marketplace | Software, AI, Developer Tools, Digital Products & Technology Solutions",
  description:
    "Explore the GalaxyDev Marketplace for premium software, AI solutions, developer tools, templates, cloud infrastructure resources, business assets, electronics, accessories, and enterprise technology solutions. Shop at shop.galaxydev.pk.",
  openGraph: {
    title: "GalaxyDev Marketplace | Software, AI, Developer Tools & Digital Products",
    description:
      "Discover premium software, AI solutions, developer tools, templates, cloud resources, electronics, and business solutions at the GalaxyDev Marketplace.",
    url: pageUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GalaxyDev Marketplace | Software, AI, Developer Tools & Digital Products",
    description:
      "Discover premium software, AI solutions, developer tools, templates, cloud resources, electronics, and business solutions at the GalaxyDev Marketplace.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: pageUrl },
  keywords: [
    "GalaxyDev Marketplace",
    "shop.galaxydev.pk",
    "Software Marketplace",
    "Digital Products",
    "AI Solutions",
    "Developer Tools",
    "SaaS Products",
    "Web Templates",
    "UI Kits",
    "WordPress Themes",
    "n8n Workflows",
    "AI Prompts",
    "Cloud Infrastructure",
    "DevOps Tools",
    "Business Software",
    "Electronics Store",
    "Tech Accessories",
    "Smart Home Devices",
    "Gaming Accessories",
    "Enterprise Software",
  ],
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: "GalaxyDev Marketplace | Software, AI, Developer Tools & Digital Products",
      description:
        "Explore the GalaxyDev Marketplace for premium software, AI solutions, developer tools, templates, cloud infrastructure resources, and enterprise technology solutions.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Shop", item: pageUrl },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Shop", item: pageUrl },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      name: "GalaxyDev Marketplace Collection",
      description: "Complete collection of digital products, software, developer tools, AI solutions, electronics, and accessories.",
      url: pageUrl,
      isPartOf: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the GalaxyDev Marketplace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The GalaxyDev Marketplace is a curated platform offering premium software, digital products, AI solutions, developer tools, templates, business resources, electronics, gadgets, accessories, and technology solutions for businesses, developers, and technology enthusiasts.",
          },
        },
        {
          "@type": "Question",
          name: "What products are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The marketplace features digital products (SaaS, web apps, templates, UI kits, AI prompts), software (desktop apps, business tools, CRM, ERP), developer resources (code libraries, starter kits, Docker templates), AI solutions, cloud infrastructure packages, electronics, accessories, office equipment, smart home devices, gaming gear, and business solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Are digital downloads instant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all digital products including templates, software, source code, design assets, business documents, and AI resources are available for instant download after purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Can businesses request custom solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, businesses can request custom software development, AI systems, automation workflows, cloud infrastructure, and consulting packages through the GalaxyDev contact page.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer enterprise licensing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, enterprise licensing is available for software products, templates, and business solutions. Contact GalaxyDev for custom enterprise licensing options.",
          },
        },
        {
          "@type": "Question",
          name: "Is customer support available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, GalaxyDev provides reliable customer support for all marketplace purchases. Contact the support team through the GalaxyDev website for assistance.",
          },
        },
        {
          "@type": "Question",
          name: "What payment methods are accepted?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The GalaxyDev Marketplace accepts major payment methods including credit/debit cards, PayPal, and other secure online payment options.",
          },
        },
        {
          "@type": "Question",
          name: "Are software products updated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, software products and digital assets are regularly updated to ensure compatibility, security, and access to the latest features.",
          },
        },
      ],
    },
  ],
};

const categoryGroups = [
  {
    title: "Digital Products",
    icon: Package,
    description: "Premium digital assets for businesses, creators, and developers.",
    color: "blue" as const,
    items: [
      "SaaS Solutions", "Web Applications", "Mobile Applications",
      "WordPress Themes", "Website Templates", "UI Kits",
      "Icons & Graphics", "Source Code", "APIs",
      "Automation Workflows", "AI Prompts", "AI Agents",
      "n8n Workflows", "Chatbot Templates", "Email Templates",
      "Resume Templates", "Business Documents", "Marketing Assets",
    ],
  },
  {
    title: "Software",
    icon: Monitor,
    description: "Professional software for business operations and productivity.",
    color: "purple" as const,
    items: [
      "Desktop Applications", "Productivity Software", "Business Software",
      "CRM Systems", "ERP Solutions", "POS Systems",
      "HR Software", "Accounting Software", "Inventory Systems",
    ],
  },
  {
    title: "Developer Resources",
    icon: Code,
    description: "Tools and resources to accelerate development workflows.",
    color: "magenta" as const,
    items: [
      "Code Libraries", "Components", "Starter Kits",
      "Boilerplates", "CLI Tools", "SDKs",
      "DevOps Scripts", "Docker Templates", "Kubernetes Templates",
      "NestJS Projects", "React Projects", "Next.js Projects",
    ],
  },
  {
    title: "AI & Automation",
    icon: Bot,
    description: "Intelligent solutions powered by artificial intelligence.",
    color: "blue" as const,
    items: [
      "AI Assistants", "Automation Packages", "Workflow Templates",
      "Business Automation", "AI APIs", "Prompt Libraries",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Infrastructure templates and cloud deployment solutions.",
    color: "purple" as const,
    items: [
      "Server Templates", "VPS Configurations", "Cloud Deployment Packages",
      "Docker Images", "Monitoring Solutions", "Security Configurations",
    ],
  },
  {
    title: "Electronics",
    icon: Laptop,
    description: "Quality electronics for work and productivity.",
    color: "magenta" as const,
    items: [
      "Laptops", "Desktop Computers", "Monitors",
      "Keyboards", "Mice", "Networking Equipment",
      "Storage Devices", "Smart Devices",
    ],
  },
  {
    title: "Accessories",
    icon: Headphones,
    description: "Essential accessories for your tech setup.",
    color: "blue" as const,
    items: [
      "Laptop Accessories", "Mobile Accessories", "Charging Solutions",
      "Cables & Adapters", "USB Hubs", "Audio Accessories",
      "Camera Accessories",
    ],
  },
  {
    title: "Office",
    icon: Briefcase,
    description: "Everything your office needs to run efficiently.",
    color: "purple" as const,
    items: [
      "Office Equipment", "Office Furniture", "Printers",
      "Scanners", "Whiteboards", "Organization Products",
    ],
  },
  {
    title: "Smart Home",
    icon: Home,
    description: "Intelligent devices for modern living spaces.",
    color: "magenta" as const,
    items: [
      "Smart Lighting", "Smart Security", "Smart Switches",
      "IoT Devices", "Home Automation",
    ],
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Gear and accessories for gamers and streamers.",
    color: "blue" as const,
    items: [
      "Gaming Accessories", "Controllers", "Streaming Equipment",
      "Gaming Furniture",
    ],
  },
  {
    title: "Business Solutions",
    icon: Building2,
    description: "Complete packages for launching and growing your business.",
    color: "purple" as const,
    items: [
      "Branding Packages", "Business Templates", "Business Automation",
      "Startup Resources", "Company Documents",
    ],
  },
];

const benefits = [
  {
    icon: Gem,
    title: "Carefully Curated Products",
    description: "Every product is selected for quality, reliability, and value. We only list what we would use ourselves.",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description: "All products meet rigorous quality standards. Digital assets are tested, physical items are verified.",
  },
  {
    icon: CheckCircle,
    title: "Secure Checkout",
    description: "Your transactions are protected with industry-standard encryption and secure payment processing.",
  },
  {
    icon: Star,
    title: "Trusted Marketplace",
    description: "Backed by GalaxyDev&apos;s reputation for excellence. Thousands of satisfied customers worldwide.",
  },
  {
    icon: Package,
    title: "Fast Delivery",
    description: "Physical products shipped promptly. Digital downloads available instantly after purchase.",
  },
  {
    icon: Download,
    title: "Instant Digital Downloads",
    description: "Access your digital purchases immediately. No waiting, no delays.",
  },
  {
    icon: Users,
    title: "Reliable Customer Support",
    description: "Our team is ready to help with any questions, issues, or product inquiries.",
  },
  {
    icon: Briefcase,
    title: "Business-Focused Solutions",
    description: "Products designed to solve real business problems and drive growth.",
  },
  {
    icon: Sparkles,
    title: "Regular Updates",
    description: "Digital products receive regular updates with new features, improvements, and security patches.",
  },
];

const digitalDownloads = [
  { icon: Layout, label: "Templates" },
  { icon: Monitor, label: "Software" },
  { icon: Code, label: "Source Code" },
  { icon: Pen, label: "Design Assets" },
  { icon: FileText, label: "Business Documents" },
  { icon: Bot, label: "AI Resources" },
];

const faq = [
  {
    question: "What is the GalaxyDev Marketplace?",
    answer: "The GalaxyDev Marketplace is a curated platform offering premium software, digital products, AI solutions, developer tools, templates, business resources, electronics, gadgets, accessories, and technology solutions for businesses, developers, and technology enthusiasts.",
  },
  {
    question: "What products are available?",
    answer: "The marketplace features digital products (SaaS, web apps, templates, UI kits, AI prompts), software (desktop apps, business tools, CRM, ERP), developer resources (code libraries, starter kits, Docker templates), AI solutions, cloud infrastructure packages, electronics, accessories, office equipment, smart home devices, gaming gear, and business solutions.",
  },
  {
    question: "Are digital downloads instant?",
    answer: "Yes, all digital products including templates, software, source code, design assets, business documents, and AI resources are available for instant download after purchase.",
  },
  {
    question: "Can businesses request custom solutions?",
    answer: "Yes, businesses can request custom software development, AI systems, automation workflows, cloud infrastructure, and consulting packages through the GalaxyDev contact page. Our team will work with you to create tailored solutions.",
  },
  {
    question: "Do you offer enterprise licensing?",
    answer: "Yes, enterprise licensing is available for software products, templates, and business solutions. Contact GalaxyDev for custom enterprise licensing options tailored to your organization's needs.",
  },
  {
    question: "Is customer support available?",
    answer: "Yes, GalaxyDev provides reliable customer support for all marketplace purchases. Contact our support team through the GalaxyDev website for assistance with any product or order.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "The GalaxyDev Marketplace accepts major payment methods including credit/debit cards, PayPal, and other secure online payment options. All transactions are processed securely.",
  },
  {
    question: "Are software products updated?",
    answer: "Yes, software products and digital assets are regularly updated to ensure compatibility, security, and access to the latest features. Update policies vary by product.",
  },
];

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-primary">
        <GradientOrb color="blue" size="lg" position="top-left" />
        <GradientOrb color="magenta" size="lg" position="bottom-right" />
        <GradientOrb color="purple" size="md" position="center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary font-medium">Shop</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="blue" className="mb-4">Marketplace</Badge>
              <h1 className="font-display font-bold text-5xl md:text-7xl text-text-primary mb-4">
                GalaxyDev <span className="gradient-text">Marketplace</span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                Discover premium software, digital products, AI solutions, developer tools,
                templates, business resources, electronics, gadgets, accessories, and carefully
                selected products — all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Visit Marketplace <ExternalLink size={18} />
                </a>
                <a
                  href={`${shopUrl}/categories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-border-strong text-text-primary font-semibold rounded-md hover:bg-bg-secondary transition-all duration-200"
                >
                  Browse Categories
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue/5 via-purple/5 to-magenta/5 border border-blue/10 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue via-purple to-magenta flex items-center justify-center shadow-glow">
                      <Package className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-text-muted">shop.galaxydev.pk</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple/20 to-magenta/20 rounded-full blur-3xl" aria-hidden="true" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue/20 rounded-full blur-3xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="purple" className="mb-4">Introduction</Badge>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
                Your One-Stop <span className="gradient-text">Marketplace</span>
              </h2>
              <p className="text-text-muted mb-4">
                Powered by <span className="font-semibold text-text-primary">shop.galaxydev.pk</span>
              </p>
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                GalaxyDev Marketplace is designed to provide businesses, developers, creators,
                and technology enthusiasts with access to premium products and carefully curated
                solutions. From enterprise-grade software to everyday electronics, every product
                meets our quality standards.
              </p>
              <p>
                The marketplace brings together digital and physical products in one unified
                platform. Whether you need a SaaS boilerplate to accelerate your next project,
                AI prompts to streamline your workflow, a laptop for your development team, or
                smart home devices for your office — you&apos;ll find it here.
              </p>
              <p>
                Every product is vetted for quality, usability, and value. We work directly with
                developers, designers, and manufacturers to ensure you get the best technology
                solutions available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="blue" className="mb-4">Categories</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Explore Our <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Browse through our extensive collection of products organized by category.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryGroups.map((group) => {
              const Icon = group.icon;
              return (
                <Card key={group.title} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue/20 via-purple/20 to-magenta/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {group.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">{group.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {group.items.slice(0, 6).map((item) => (
                      <span
                        key={item}
                        className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-bg-tertiary text-text-muted"
                      >
                        {item}
                      </span>
                    ))}
                    {group.items.length > 6 && (
                      <span className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-bg-tertiary text-text-subtle">
                        +{group.items.length - 6} more
                      </span>
                    )}
                  </div>
                  <a
                    href={`${shopUrl}/category/${group.title.toLowerCase().replace(/\s+/g, "-")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-purple transition-colors"
                  >
                    Explore <ArrowRight size={14} />
                  </a>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href={`${shopUrl}/categories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Browse All Categories <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ShopFeatured />

      {/* Why Shop With GalaxyDev */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="purple" className="mb-4">Why Shop With Us</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Why Shop at GalaxyDev <span className="gradient-text">Marketplace</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We are committed to providing the best shopping experience for technology products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue/20 via-purple/20 to-magenta/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Downloads */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="magenta" className="mb-4">Instant Access</Badge>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
                Instant Digital <span className="gradient-text">Downloads</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                All digital products are available for instant download immediately after purchase.
                No shipping delays, no waiting — just immediate access to the resources you need.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {digitalDownloads.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-md bg-bg-card border border-border-default text-sm font-medium text-text-secondary"
                    >
                      <Icon className="w-4 h-4 text-blue shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue via-purple to-magenta p-1 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-bg-primary flex items-center justify-center">
                    <div className="text-center">
                      <Download className="w-20 h-20 text-blue mx-auto mb-4" />
                      <p className="text-lg font-display font-semibold text-text-primary">Instant Access</p>
                      <p className="text-sm text-text-muted">Download immediately</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple/20 to-magenta/20 rounded-full blur-2xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <Badge variant="blue" className="mb-4">Enterprise</Badge>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
                Enterprise Technology <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Beyond individual products, GalaxyDev provides complete technology solutions for
                businesses of all sizes. From custom software development to AI systems, automation
                workflows, cloud infrastructure, and consulting — our team delivers end-to-end
                solutions tailored to your needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Code, label: "Custom Software" },
                  { icon: Bot, label: "AI Systems" },
                  { icon: Zap, label: "Automation" },
                  { icon: Cloud, label: "Cloud Infrastructure" },
                  { icon: Users, label: "Consulting" },
                  { icon: Briefcase, label: "Development Services" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Icon className="w-4 h-4 text-blue shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </div>
            <div className="md:col-span-2 hidden md:flex justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-gradient-to-br from-blue/5 via-purple/5 to-magenta/5 border border-blue/10 rounded-2xl p-8 shadow-lg">
                  <Building2 className="w-16 h-16 text-blue mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-xl text-text-primary text-center mb-2">
                    Need a Custom Solution?
                  </h3>
                  <p className="text-sm text-text-muted text-center mb-6">
                    Our team builds enterprise-grade technology solutions tailored to your business.
                  </p>
                  <div className="space-y-3">
                    {["Requirements Analysis", "Architecture Design", "Development & Testing", "Deployment & Support"].map(
                      (step, i) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-xs font-bold text-white shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-text-secondary">{step}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ShopTestimonials />

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-bg-primary" aria-label="Frequently Asked Questions">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="magenta" className="mb-4">FAQ</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to know about the GalaxyDev Marketplace.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group bg-bg-card border border-border-default rounded-md shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer list-none text-text-primary font-display font-semibold text-base hover:bg-bg-card-hover transition-colors">
                  {item.question}
                  <ChevronDown className="w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-text-secondary text-sm leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-r from-blue via-purple to-magenta">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Start Exploring the Marketplace
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Discover premium products and solutions for your business, projects, and daily needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
            >
              Visit shop.galaxydev.pk <ExternalLink size={18} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
