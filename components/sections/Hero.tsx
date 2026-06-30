"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { GradientOrb } from "@/components/ui/GradientOrb";

const floatingBadges = [
  { label: "99.9% Uptime", x: "70%", y: "20%", delay: "0s" },
  { label: "Remote First", x: "78%", y: "50%", delay: "0.5s" },
  { label: "Built in Pakistan", x: "65%", y: "75%", delay: "1s" },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
    >
      <GradientOrb color="blue" size="lg" position="top-left" className="opacity-20" />
      <GradientOrb color="magenta" size="lg" position="bottom-right" className="opacity-15" />
      <GradientOrb color="purple" size="md" position="center" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-subtle border border-blue/20 text-xs font-semibold uppercase tracking-widest text-blue mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
              Remote First · Built in Pakistan &amp; AJK
            </div>

            <h1
              className={`font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] text-text-primary mb-6 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Building{" "}
              <span className="shimmer-text inline-block">Pakistan</span>
              &apos;s
              <br />
              <span className="gradient-text">Digital Future</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg mb-10 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We architect and ship enterprise-grade SaaS platforms, custom software, and digital
              products that power businesses across the globe — remote-first, from Pakistan &amp; AJK.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
              >
                See Our Work
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-border-strong text-text-primary font-semibold rounded-md hover:bg-bg-secondary transition-all duration-200"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-4">
                {[
                  { color: "from-blue/30 to-purple/30", label: "React" },
                  { color: "from-purple/30 to-magenta/30", label: "Node.js" },
                  { color: "from-blue/20 to-blue/10", label: "Cloud" },
                  { color: "from-purple/20 to-magenta/20", label: "AI" },
                  { color: "from-blue via-purple to-magenta", label: "Dev" },
                  { color: "from-magenta/20 to-purple/20", label: "Mobile" },
                  { color: "from-blue/10 to-blue/20", label: "SaaS" },
                  { color: "from-purple/30 to-magenta/30", label: "Design" },
                  { color: "from-blue/30 to-blue/10", label: "DevOps" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-xs font-semibold text-white/80 backdrop-blur-sm border border-white/10 shadow-sm`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-blue/5 via-purple/5 to-magenta/5 rounded-2xl blur-sm" />
            </div>

            {floatingBadges.map((badge) => (
              <div
                key={badge.label}
                className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-border-default rounded-full shadow-md text-xs font-medium text-text-secondary"
                style={{
                  left: badge.x,
                  top: badge.y,
                  animation: `float 6s ease-in-out infinite alternate`,
                  animationDelay: badge.delay,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator">
        <ChevronDown size={24} className="text-text-muted" />
      </div>
    </section>
  );
}
