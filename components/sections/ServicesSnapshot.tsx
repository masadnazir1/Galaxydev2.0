"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
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
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design & Product Strategy",
    description: "Research-driven interfaces that delight users and drive conversion.",
    href: "/services",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Scalable, secure, and maintainable codebases for mission-critical systems.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "SaaS Platform Development",
    description: "Multi-tenant architectures with subscription billing and analytics built-in.",
    href: "/services",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Headless commerce platforms with custom checkout and marketplace logic.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Digital Transformation Consulting",
    description: "Strategic roadmaps to modernize legacy systems and adopt cloud-native practices.",
    href: "/services",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform apps with React Native and Flutter that ship fast.",
    href: "/services",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    description: "Meta Ads, TikTok, Google Ads, and third-party platforms to scale your brand.",
    href: "/services",
  },
  {
    icon: Video,
    title: "Video Editing & Production",
    description: "Professional video editing, motion graphics, and content production for every platform.",
    href: "/services",
  },
];

export function ServicesSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-bg-secondary" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple/10 text-purple text-xs font-semibold uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Full-Spectrum Product Engineering
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From strategy to ship — we cover every discipline needed to build world-class digital
            products.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={service.href} className="group block">
                  <div className="relative overflow-hidden bg-bg-card border border-border-default rounded-md shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250 p-6 md:p-8">
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue via-purple to-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue/20 via-purple/20 to-magenta/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 transition-all duration-200">
                      Learn More
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
