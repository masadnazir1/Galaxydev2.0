"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 8, suffix: "+", label: "Industries Served" },
  { end: 4, label: "Proprietary Products" },
  { end: 100, suffix: "%", label: "Client Retention" },
];

export function StatsBar() {
  return (
    <section className="py-20 md:py-24 bg-bg-secondary border-y border-border-default">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
