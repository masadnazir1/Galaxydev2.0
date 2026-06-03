"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import {
  Building2,
  Workflow,
  Cloud,
  Globe,
} from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Enterprise Architecture",
    description:
      "We design systems that scale — microservices, event-driven architectures, and cloud-native patterns that Fortune 500 companies rely on.",
  },
  {
    icon: Workflow,
    title: "Full-Cycle Delivery",
    description:
      "From product discovery and UX research to deployment and post-launch optimization — we own the entire lifecycle.",
  },
  {
    icon: Cloud,
    title: "SaaS-Native Thinking",
    description:
      "Multi-tenancy, subscription billing, usage analytics, and self-serve onboarding are baked in from day one, not bolted on later.",
  },
  {
    icon: Globe,
    title: "Pakistan's Global Standard",
    description:
      "We combine local talent, global best practices, and competitive rates to deliver world-class software that competes on quality, not cost.",
  },
];

export function WhyGalaxyDev() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-magenta/10 text-magenta text-xs font-semibold uppercase tracking-widest mb-4">
            Why GalaxyDev
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Built Different. On Purpose.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We don&apos;t just write code — we engineer outcomes. Here&apos;s what sets us apart.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 p-6 md:p-8 bg-bg-card border border-border-default rounded-md shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue/20 via-purple/20 to-magenta/20 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-blue" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
