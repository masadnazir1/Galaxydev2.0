"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, Target, Users } from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    icon: BarChart3,
    name: "Meta Ads",
    description:
      "Facebook & Instagram campaign management with advanced audience targeting, creative testing, and conversion optimization.",
    stats: "Facebook • Instagram • Messenger",
  },
  {
    icon: TrendingUp,
    name: "TikTok Ads",
    description:
      "Short-form video ads that capture attention. Creative strategy, Spark Ads, and TikTok Shop integration.",
    stats: "In-Feed • Spark • Branded Effects • Shop",
  },
  {
    icon: Target,
    name: "Google Ads",
    description:
      "Search, Display, YouTube, and Shopping campaigns with keyword strategy, bid management, and performance tracking.",
    stats: "Search • Display • YouTube • Shopping",
  },
  {
    icon: Users,
    name: "Third-Party Platforms",
    description:
      "LinkedIn, Snapchat, Pinterest, and emerging networks. Multi-channel attribution and unified reporting.",
    stats: "LinkedIn • Snapchat • Pinterest • More",
  },
];

export function DigitalMarketing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-bg-primary overflow-hidden" id="marketing">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
              Growth Engine
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
              Digital Marketing That <span className="gradient-text">Drives Revenue</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl">
              Full-funnel paid media management across every major platform. We don&apos;t just
              run ads — we engineer growth loops.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-glow"
            >
              Explore Marketing Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative overflow-hidden h-full bg-bg-card border border-border-default rounded-md shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250 p-6 group">
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue via-purple to-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue/20 via-purple/20 to-magenta/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {platform.description}
                  </p>
                  <div className="pt-3 border-t border-border-default">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                      {platform.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
