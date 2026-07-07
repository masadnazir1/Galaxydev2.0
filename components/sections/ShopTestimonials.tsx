"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The GalaxyDev Marketplace saved us months of development time. We found a SaaS boilerplate that perfectly matched our requirements. The quality exceeded our expectations.",
    name: "Imran Khan",
    company: "TechFlow Solutions",
    role: "CTO",
    rating: 5,
  },
  {
    quote:
      "I regularly purchase design assets and templates from the marketplace. The quality is consistently high, and the instant download feature is incredibly convenient for tight deadlines.",
    name: "Zara Mahmood",
    company: "PixelCraft Studio",
    role: "Lead Designer",
    rating: 5,
  },
  {
    quote:
      "As a startup founder, the GalaxyDev Marketplace has been a game-changer. From business templates to AI prompts, everything I need is in one place. Highly recommended for entrepreneurs.",
    name: "Danish Ali",
    company: "StartupLabs PK",
    role: "Founder",
    rating: 4,
  },
];

const initials = ["IK", "ZM", "DA"];

export function ShopTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            What Our Customers <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real feedback from customers who have purchased from the GalaxyDev Marketplace.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
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
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${
                      j < item.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-border-default"
                    }`}
                  />
                ))}
              </div>
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
