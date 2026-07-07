import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Server,
  Layout,
  Globe,
  Terminal,
  Database,
  Container,
  Settings,
  Cloud,
  Mail,
  Network,
  Cpu,
  Bot,
  Zap,
  Gauge,
  Building2,
  Sparkles,
  Shield,
  Clock,
  Users,
  CheckCircle,
  BookOpen,
  Lightbulb,
  Target,
  Layers,
  Workflow,
  Palette,
  ChevronDown,
} from "lucide-react";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FounderStats } from "@/components/sections/FounderStats";
import { FounderTestimonials } from "@/components/sections/FounderTestimonials";

const siteUrl = "https://galaxydev.pk";
const pagePath = "/about/founder";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Muhammad Asad — Founder & Full Stack Engineer",
  description:
    "Meet Muhammad Asad, Founder & Full Stack Engineer at GalaxyDev. Expert in NestJS, Node.js, React, Next.js, DevOps, Cloud Infrastructure, AI Integrations, and Enterprise Software Development. Based in Pakistan.",
  openGraph: {
    title: "Muhammad Asad — Founder & Full Stack Engineer | GalaxyDev",
    description:
      "Meet Muhammad Asad, Founder of GalaxyDev. Full Stack Engineer specializing in scalable software, cloud infrastructure, DevOps, AI solutions, and enterprise development.",
    url: pageUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asad — Founder & Full Stack Engineer | GalaxyDev",
    description:
      "Meet Muhammad Asad, Founder of GalaxyDev. Full Stack Engineer specializing in scalable software, cloud infrastructure, DevOps, AI solutions, and enterprise development.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: pageUrl },
  keywords: [
    "Muhammad Asad",
    "GalaxyDev Founder",
    "Founder of GalaxyDev",
    "Full Stack Developer",
    "Software Engineer",
    "DevOps Engineer",
    "Cloud Architect",
    "AI Developer",
    "NestJS Expert",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "API Developer",
    "Pakistan Software Engineer",
    "Enterprise Software Development",
    "SaaS Development",
    "Custom Software Development",
    "Cloud Infrastructure",
    "Technical Consultant",
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
      name: "Muhammad Asad — Founder & Full Stack Engineer | GalaxyDev",
      description:
        "Meet Muhammad Asad, Founder & Full Stack Engineer at GalaxyDev. Expert in NestJS, Node.js, React, Next.js, DevOps, Cloud Infrastructure, AI Integrations.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
          { "@type": "ListItem", position: 3, name: "Founder", item: pageUrl },
        ],
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
      },
    },
    {
      "@type": "Person",
      "@id": `${pageUrl}#person`,
      name: "Muhammad Asad",
      jobTitle: "Founder & Full Stack Engineer",
      affiliation: {
        "@type": "Organization",
        name: "GalaxyDev Pvt Ltd",
        url: siteUrl,
      },
      url: pageUrl,
      knowsAbout: [
        "Software Engineering",
        "Full Stack Development",
        "NestJS",
        "Node.js",
        "React",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "DevOps",
        "Cloud Infrastructure",
        "System Architecture",
        "API Development",
        "AI Integration",
        "Automation",
        "Performance Optimization",
      ],
      sameAs: [
        "https://linkedin.com/in/galaxydev",
        "https://github.com/galaxydev",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
        { "@type": "ListItem", position: 3, name: "Founder", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the founder of GalaxyDev?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Muhammad Asad is the Founder and Full Stack Engineer at GalaxyDev, a Pakistan-based software house building enterprise-grade SaaS platforms, custom software, and digital products for global clients.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Muhammad Asad specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Muhammad Asad specializes in NestJS, Node.js, React, Next.js, TypeScript, PostgreSQL, Docker, Kubernetes, DevOps, Cloud Infrastructure (AWS, DigitalOcean, Cloudflare), Nginx, Email Infrastructure, API Development, System Architecture, AI Integrations, and Automation.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does GalaxyDev serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GalaxyDev serves startups, SMBs, and enterprises across fleet management, logistics, legaltech, e-commerce, fintech, and SaaS verticals, delivering custom software, cloud infrastructure, and AI-powered solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Does Muhammad Asad provide technical consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Muhammad Asad provides technical consulting services including system architecture design, technology stack selection, cloud infrastructure planning, DevOps strategy, and AI integration advisory for businesses of all sizes.",
          },
        },
        {
          "@type": "Question",
          name: "Can GalaxyDev build enterprise software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, GalaxyDev specializes in building enterprise-grade SaaS platforms, custom software solutions, and scalable distributed systems. Their portfolio includes fleet management, legaltech, marketplace, and logistics platforms serving thousands of users.",
          },
        },
        {
          "@type": "Question",
          name: "Does GalaxyDev provide AI integration services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, GalaxyDev offers AI integration services including LLM integration, OpenAI API integration, AI-powered automation, intelligent document processing, and custom AI solution development for business workflows.",
          },
        },
      ],
    },
  ],
};

const expertise = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building complete web applications from database design to polished user interfaces with modern frameworks and best practices.",
  },
  {
    icon: Server,
    title: "NestJS",
    description: "Architecting scalable, maintainable backend systems using NestJS with modular architecture, dependency injection, and microservices.",
  },
  {
    icon: Terminal,
    title: "Node.js",
    description: "Developing high-performance server-side applications with Node.js, event-driven architecture, and asynchronous processing.",
  },
  {
    icon: Layout,
    title: "React",
    description: "Creating dynamic, responsive user interfaces with React, component-driven development, and state management.",
  },
  {
    icon: Globe,
    title: "Next.js",
    description: "Building full-stack React applications with server-side rendering, static generation, and optimal performance.",
  },
  {
    icon: Cpu,
    title: "TypeScript",
    description: "Writing type-safe, maintainable codebases with TypeScript, reducing runtime errors and improving developer productivity.",
  },
  {
    icon: Database,
    title: "PostgreSQL",
    description: "Designing and optimizing relational databases, writing complex queries, and ensuring data integrity at scale.",
  },
  {
    icon: Container,
    title: "Docker",
    description: "Containerizing applications for consistent development, testing, and production environments across any infrastructure.",
  },
  {
    icon: Settings,
    title: "Kubernetes",
    description: "Orchestrating containerized workloads with Kubernetes for automated deployment, scaling, and management.",
  },
  {
    icon: Cloud,
    title: "DevOps",
    description: "Implementing CI/CD pipelines, infrastructure as code, monitoring, and automated workflows for reliable software delivery.",
  },
  {
    icon: Server,
    title: "Linux Servers",
    description: "Administering and optimizing Linux server environments for security, performance, and high availability.",
  },
  {
    icon: Globe,
    title: "Cloud Infrastructure",
    description: "Designing and managing cloud architectures on AWS, DigitalOcean, and Cloudflare for scalability and reliability.",
  },
  {
    icon: Settings,
    title: "Nginx",
    description: "Configuring Nginx for reverse proxy, load balancing, SSL termination, and serving static and dynamic content.",
  },
  {
    icon: Mail,
    title: "Email Infrastructure",
    description: "Setting up and managing SMTP/IMAP servers, email deliverability, DKIM/SPF/DMARC, and transactional email systems.",
  },
  {
    icon: Network,
    title: "API Development",
    description: "Designing RESTful and GraphQL APIs with robust authentication, validation, rate limiting, and comprehensive documentation.",
  },
  {
    icon: Layers,
    title: "System Architecture",
    description: "Architecting distributed systems, microservices, event-driven architectures, and scalable backend infrastructure.",
  },
  {
    icon: Bot,
    title: "AI Integrations",
    description: "Integrating AI services including LLMs, OpenAI, vector databases, and machine learning APIs into production applications.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Building workflow automation, scheduled jobs, event-driven processes, and intelligent task orchestration systems.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Profiling and optimizing application performance, database queries, caching strategies, and frontend rendering.",
  },
];

const journey = [
  {
    year: "2019",
    title: "Learning Programming",
    description: "Began the programming journey with a deep curiosity for how software works. Self-taught foundational concepts and built first applications.",
  },
  {
    year: "2020",
    title: "Building Products",
    description: "Started building real-world products and applications. Gained hands-on experience with modern frameworks, databases, and deployment.",
  },
  {
    year: "2020",
    title: "Creating GalaxyDev",
    description: "Founded GalaxyDev with a vision to build world-class software from Pakistan. Started as a solo developer taking on client projects.",
  },
  {
    year: "2021 — 2022",
    title: "Helping Businesses",
    description: "Scaled client engagements from startups to enterprises. Delivered custom SaaS platforms, APIs, and digital products across multiple industries.",
  },
  {
    year: "2023",
    title: "Building Cloud Infrastructure",
    description: "Deepened expertise in cloud architecture, DevOps, and infrastructure automation. Built scalable systems handling thousands of users.",
  },
  {
    year: "2024 — 2025",
    title: "Expanding into Automation & AI",
    description: "Pioneered AI integrations and automation solutions. Developed intelligent systems combining LLMs, workflow automation, and cloud infrastructure.",
  },
];

const philosophy = [
  {
    icon: Building2,
    title: "Build for Scalability",
    description: "Every system is architected to grow. From day one, design decisions account for future scale, ensuring your software can handle success.",
  },
  {
    icon: Sparkles,
    title: "Simplicity Over Complexity",
    description: "The best solutions are simple, elegant, and easy to understand. Avoid over-engineering while maintaining robustness and flexibility.",
  },
  {
    icon: Shield,
    title: "Security by Default",
    description: "Security is not an afterthought. Every layer of the stack is hardened against threats with encryption, authentication, and secure practices.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimized code, efficient databases, and fast CDNs. Performance is engineered from the ground up, not patched in later.",
  },
  {
    icon: Clock,
    title: "Long-Term Maintainability",
    description: "Code is written for humans first. Clean architecture, thorough testing, and documentation ensure your software remains maintainable for years.",
  },
  {
    icon: Users,
    title: "Customer-Focused Engineering",
    description: "Technology serves people. Every feature, architecture decision, and optimization is guided by real user needs and business outcomes.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "End-to-end development of tailored software solutions designed to meet specific business requirements and goals.",
  },
  {
    icon: Globe,
    title: "SaaS Development",
    description: "Building multi-tenant SaaS platforms with subscription management, analytics dashboards, and scalable cloud infrastructure.",
  },
  {
    icon: Network,
    title: "API Engineering",
    description: "Designing and building robust RESTful and GraphQL APIs with comprehensive documentation, authentication, and rate limiting.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Architecting and managing cloud environments on AWS, DigitalOcean, and Cloudflare for optimal performance and reliability.",
  },
  {
    icon: Container,
    title: "DevOps",
    description: "Setting up CI/CD pipelines, infrastructure as code, container orchestration, and monitoring for streamlined development workflows.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Integrating AI and machine learning capabilities into applications, from LLM integration to intelligent automation workflows.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Building automated workflows, data pipelines, and process automation to reduce manual effort and increase operational efficiency.",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Technical advisory services covering architecture review, technology selection, code audits, and strategic planning.",
  },
  {
    icon: Layers,
    title: "Technical Architecture",
    description: "Designing system architectures, microservices, event-driven systems, and distributed applications for enterprise scalability.",
  },
];

const techStack = [
  "TypeScript",
  "JavaScript",
  "NestJS",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "Linux",
  "Nginx",
  "GitHub Actions",
  "AWS",
  "DigitalOcean",
  "Cloudflare",
  "RabbitMQ",
  "BullMQ",
  "Prisma",
  "TypeORM",
];

const faq = [
  {
    question: "Who is the founder of GalaxyDev?",
    answer:
      "Muhammad Asad is the Founder and Full Stack Engineer at GalaxyDev, a Pakistan-based software house building enterprise-grade SaaS platforms, custom software, and digital products for global clients.",
  },
  {
    question: "What technologies does Muhammad Asad specialize in?",
    answer:
      "Muhammad Asad specializes in NestJS, Node.js, React, Next.js, TypeScript, PostgreSQL, Docker, Kubernetes, DevOps, Cloud Infrastructure (AWS, DigitalOcean, Cloudflare), Nginx, Email Infrastructure, API Development, System Architecture, AI Integrations, and Automation.",
  },
  {
    question: "What industries does GalaxyDev serve?",
    answer:
      "GalaxyDev serves startups, SMBs, and enterprises across fleet management, logistics, legaltech, e-commerce, fintech, and SaaS verticals, delivering custom software, cloud infrastructure, and AI-powered solutions.",
  },
  {
    question: "Does Muhammad Asad provide technical consulting?",
    answer:
      "Yes, Muhammad Asad provides technical consulting services including system architecture design, technology stack selection, cloud infrastructure planning, DevOps strategy, and AI integration advisory for businesses of all sizes.",
  },
  {
    question: "Can GalaxyDev build enterprise software?",
    answer:
      "Yes, GalaxyDev specializes in building enterprise-grade SaaS platforms, custom software solutions, and scalable distributed systems. Their portfolio includes fleet management, legaltech, marketplace, and logistics platforms serving thousands of users.",
  },
  {
    question: "Does GalaxyDev provide AI integration services?",
    answer:
      "Yes, GalaxyDev offers AI integration services including LLM integration, OpenAI API integration, AI-powered automation, intelligent document processing, and custom AI solution development for business workflows.",
  },
];

export default function FounderPage() {
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
            <Link href="/about" className="hover:text-text-primary transition-colors">About</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary font-medium">Founder</span>
          </nav>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <Badge variant="blue" className="mb-4">Meet the Founder</Badge>
              <h1 className="font-display font-bold text-5xl md:text-7xl text-text-primary mb-4">
                Muhammad <span className="gradient-text">Asad</span>
              </h1>
              <p className="text-lg md:text-xl font-semibold text-text-secondary mb-2">
                Founder &amp; Full Stack Engineer at GalaxyDev
              </p>
              <p className="text-base md:text-lg text-text-muted leading-relaxed mb-8 max-w-2xl">
                Founded GalaxyDev with the vision of building scalable software, automation platforms,
                AI-powered solutions, and cloud infrastructure that empower businesses to grow and
                compete globally. Passionate about engineering excellence, clean architecture, and
                technology that delivers real business value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  View Services <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-border-strong text-text-primary font-semibold rounded-md hover:bg-bg-secondary transition-all duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue via-purple to-magenta p-1 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-bg-primary flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-3xl font-bold text-white shadow-glow">
                        MA
                      </div>
                      <p className="text-xs text-text-muted">Photo coming soon</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple/20 to-magenta/20 rounded-full blur-2xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <Badge variant="purple" className="mb-4">About</Badge>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
                The Person Behind <span className="gradient-text">GalaxyDev</span>
              </h2>
              <p className="text-text-muted text-sm">
                A technologist committed to building solutions that matter.
              </p>
            </div>
            <div className="md:col-span-3 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Muhammad Asad is the Founder and Full Stack Engineer behind GalaxyDev, a Pakistan-based
                software house dedicated to building enterprise-grade digital products. His journey into
                technology began with curiosity and self-driven learning, evolving into a career building
                scalable systems that power businesses across the globe.
              </p>
              <p>
                Asad&apos;s expertise spans the entire software development lifecycle. From architecting
                distributed backend systems with NestJS and Node.js to crafting polished user interfaces
                with React and Next.js, he brings a holistic approach to every project. His deep
                understanding of TypeScript ensures codebases are type-safe, maintainable, and ready for
                growth.
              </p>
              <p>
                On the infrastructure side, Asad manages cloud environments on AWS, DigitalOcean, and
                Cloudflare, orchestrates containers with Docker and Kubernetes, and configures reverse
                proxies with Nginx. He has built and maintained email infrastructure handling millions
                of transactions, and designed automation pipelines that eliminate manual toil.
              </p>
              <p>
                In recent years, Asad has expanded into AI integration, bringing LLMs, vector databases,
                and intelligent automation into production systems. His work helps businesses leverage
                cutting-edge AI without the complexity typically associated with it.
              </p>
              <p>
                Beyond technical skills, Asad is passionate about solving real business problems. He
                believes that technology should serve strategy, not the other way around. Every system he
                builds is designed with business outcomes in mind — reducing costs, increasing revenue,
                or enabling new capabilities.
              </p>
              <p>
                Continuous learning is a cornerstone of Asad&apos;s philosophy. He stays at the forefront
                of emerging technologies, evaluating and adopting tools that deliver measurable value to
                clients. Whether it&apos;s a new framework, a cloud service, or an AI capability, he
                approaches every innovation with both enthusiasm and practical judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="blue" className="mb-4">Expertise</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A comprehensive skill set spanning the full technology stack.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item) => {
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

      {/* Professional Journey Timeline */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="purple" className="mb-4">Journey</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From first lines of code to building enterprise solutions.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue via-purple to-magenta hidden md:block" />
            <div className="space-y-12">
              {journey.map((m, i) => (
                <div key={`${m.year}-${i}`} className="relative md:pl-20">
                  <div className="absolute left-5 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-blue via-purple to-magenta flex items-center justify-center text-white text-xs font-bold hidden md:flex">
                    {i + 1}
                  </div>
                  <div className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-bold text-blue">{m.year}</span>
                    <h3 className="font-display font-semibold text-xl text-text-primary mt-1 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-text-secondary text-sm">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-bg-primary">
        <GradientOrb color="purple" size="md" position="top-right" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="magenta" className="mb-4">Philosophy</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Engineering <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The core beliefs that guide every project and decision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophy.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue via-purple to-magenta flex items-center justify-center mb-4 shadow-glow">
                    <Icon className="w-6 h-6 text-white" />
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

      {/* Stats Section */}
      <FounderStats />

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="blue" className="mb-4">Services</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Personally Led <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Every service area is directly led and delivered by Muhammad Asad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
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

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="purple" className="mb-4">Tech Stack</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Technology <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Tools and technologies used daily to build production systems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-4 py-2 rounded-md bg-bg-card border border-border-default text-sm font-medium text-text-secondary hover:border-blue/30 hover:text-blue transition-all duration-200 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <FounderTestimonials />

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-bg-primary" aria-label="Frequently Asked Questions">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="blue" className="mb-4">FAQ</Badge>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
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

      {/* Contact / CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-r from-blue via-purple to-magenta">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Have a project in mind? Let&apos;s discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
            >
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-200"
            >
              Contact GalaxyDev
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
