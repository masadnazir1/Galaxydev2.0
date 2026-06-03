"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "GalaxyDev transformed our fleet management operations. The platform they built reduced our manual work by 80% and gave us real-time visibility across 200+ vehicles.",
    name: "Ahmed Raza",
    company: "Safari Rentals",
    role: "CEO",
  },
  {
    quote:
      "Their team's expertise in SaaS architecture saved us months of development time. The platform handles multi-tenancy flawlessly and the analytics dashboard is world-class.",
    name: "Sarah Khan",
    company: "TechVentures PK",
    role: "CTO",
  },
  {
    quote:
      "Working with GalaxyDev felt like partnering with a Silicon Valley firm. Their product strategy, UI/UX, and engineering quality set a new standard in Pakistan's tech ecosystem.",
    name: "Usman Malik",
    company: "DigitalFirst",
    role: "Product Lead",
  },
];

const initials = ["AR", "SK", "UM"];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real feedback from the teams we&apos;ve partnered with.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-bg-card border border-border-default rounded-md shadow-sm p-6 md:p-8"
            >
              <Quote className="w-8 h-8 text-blue/20 mb-4" aria-hidden="true" />
              <p className="text-text-secondary leading-relaxed mb-6 text-sm">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-xs font-bold text-white">
                  {initials[i]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-text-primary">{item.name}</div>
                  <div className="text-xs text-text-muted">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
