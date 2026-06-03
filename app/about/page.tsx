import type { Metadata } from "next";
import { Target, Eye, ArrowRight, Heart, Shield, Zap, Users, Globe, Award } from "lucide-react";
import Link from "next/link";
import { GradientOrb } from "@/components/ui/GradientOrb";

export const metadata: Metadata = {
  title: "About",
  description:
    "GalaxyDev Pvt Ltd is a remote-first Pakistani software house building enterprise-grade SaaS platforms and digital products for global clients — from Pakistan & AJK. Learn our story, mission, and values.",
  openGraph: {
    title: "About | GalaxyDev Pvt Ltd",
    description:
      "Learn about GalaxyDev Pvt Ltd — Pakistan & AJK's remote-first software house building enterprise SaaS for global clients.",
    url: "https://galaxydev.pk/about",
  },
  twitter: {
    title: "About | GalaxyDev Pvt Ltd",
    description:
      "Learn about GalaxyDev Pvt Ltd — Pakistan & AJK's remote-first software house building enterprise SaaS for global clients.",
  },
  alternates: { canonical: "https://galaxydev.pk/about" },
};

const milestones = [
  {
    year: "2020",
    title: "The Founding",
    description: "GalaxyDev was founded in Lahore with a vision to build world-class software from Pakistan.",
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Dealit v1 launched — a fleet management SaaS that would become our flagship product.",
  },
  {
    year: "2022",
    title: "Team Growth",
    description: "Expanded to 25+ engineers, designers, and product managers across two offices.",
  },
  {
    year: "2023",
    title: "Product Expansion",
    description: "Launched PakistanLawHelp and DeliverIt, entering legaltech and logistics verticals.",
  },
  {
    year: "2024",
    title: "JKMarkaz & Global Clients",
    description: "Launched JKMarkaz marketplace platform and began serving international clients.",
  },
  {
    year: "2025",
    title: "Scale & Recognition",
    description: "50+ projects delivered, 4 proprietary products, recognized as a top Pakistani software house.",
  },
];

const leaders = [
  {
    name: "M Asad Nazir",
    title: "Founder & CEO",
    subtitle: "Product Visionary · Tech Entrepreneur · Software Engineer",
  },
  {
    name: "Ahmed Mujtaba",
    title: "CTO & Solution Architect",
    subtitle: "Senior Software Engineer · System Architect · Full-Stack",
  },
  {
    name: "Hassan Shehzad",
    title: "Cloud Expert & DevOps Lead",
    subtitle: "AWS/Azure · Kubernetes · CI/CD · Infrastructure as Code",
  },
];

const values = [
  { icon: Shield, title: "Engineering Excellence", description: "We hold ourselves to the highest standards of code quality, security, and performance." },
  { icon: Users, title: "Client Partnership", description: "We succeed when our clients succeed. Every engagement is a true partnership." },
  { icon: Heart, title: "People First", description: "Our team is our greatest asset. We invest in growth, well-being, and culture." },
  { icon: Zap, title: "Relentless Execution", description: "We ship fast without compromising quality. Bias for action is in our DNA." },
  { icon: Globe, title: "Global Mindset", description: "We think globally, compete globally, and deliver globally — from Pakistan." },
  { icon: Award, title: "Continuous Learning", description: "Technology evolves fast. We stay ahead through constant learning and experimentation." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-primary">
        <GradientOrb color="blue" size="lg" position="top-left" />
        <GradientOrb color="magenta" size="lg" position="bottom-right" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary font-medium">About</span>
          </nav>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
            Our Story
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-text-primary mb-4">
            We Build Pakistan&apos;s <span className="gradient-text">Digital Future</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
            A team of engineers, designers, and product thinkers on a mission to prove that
            world-class software can be built from Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-bg-card border border-border-default rounded-md p-8 md:p-10 shadow-sm">
              <Target className="w-10 h-10 text-blue mb-4" />
              <h2 className="font-display font-semibold text-3xl text-text-primary mb-4">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed">
                To build enterprise-grade software that competes on quality, not cost. We empower
                businesses globally with SaaS platforms, custom software, and digital products
                engineered for scale, security, and delight.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue/5 via-purple/5 to-magenta/5 border border-blue/20 rounded-md p-8 md:p-10 shadow-sm">
              <Eye className="w-10 h-10 text-purple mb-4" />
              <h2 className="font-display font-semibold text-3xl text-text-primary mb-4">Our Vision</h2>
              <p className="text-text-secondary leading-relaxed">
                A future where Pakistan is recognized as a global hub for high-quality software
                engineering. We&apos;re building that future, one product at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple/10 text-purple text-xs font-semibold uppercase tracking-widest mb-4">
              Timeline
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue via-purple to-magenta hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative md:pl-20">
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

      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
              Leadership
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leaders.map((person) => (
              <div
                key={person.name}
                className="text-center bg-bg-card border border-border-default rounded-md p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-2xl font-bold text-white">
                  {person.name.split(" ").filter(Boolean).map((n) => n[0]).join("")}
                </div>
                <h3 className="font-display font-semibold text-lg text-text-primary">{person.name}</h3>
                <p className="text-sm font-semibold text-text-primary mb-1">{person.title}</p>
                <p className="text-xs text-text-muted mb-4 leading-relaxed">{person.subtitle}</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-blue transition-colors"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-magenta/10 text-magenta text-xs font-semibold uppercase tracking-widest mb-4">
              Values
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              What We Stand <span className="gradient-text">For</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue/20 via-purple/20 to-magenta/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
                </div>
              );
            })}
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
            Building from Pakistan, for the World
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Join us on our mission to redefine what&apos;s possible.
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
