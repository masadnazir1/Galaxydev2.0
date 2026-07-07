"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 6, suffix: "+", label: "Years of Experience" },
  { end: 30, suffix: "+", label: "Technologies Mastered" },
  { end: 20, suffix: "+", label: "Happy Clients" },
  { end: 100, suffix: "+", label: "APIs Developed" },
  { end: 50, suffix: "+", label: "Servers Managed" },
];

export function FounderStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-bg-secondary border-y border-border-default">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple/10 text-purple text-xs font-semibold uppercase tracking-widest mb-4">
            By the Numbers
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Impact in <span className="gradient-text">Numbers</span>
          </h2>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
