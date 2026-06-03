"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ArrowRight, Car, Scale, Package, Newspaper, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const products = [
  {
    icon: Car,
    name: "Dealit",
    tagline: "Car Rental & Fleet Digitalization",
    description:
      "End-to-end fleet management, booking engine, payment integration, and analytics dashboard for car rental businesses.",
    badge: "SaaS",
    color: "blue" as const,
    href: "/products",
  },
  {
    icon: Scale,
    name: "PakistanLawHelp",
    tagline: "AI-Powered Legal Research",
    description: "Case law search, document analyzer, citation generator, and lawyer directory.",
    badge: "AI",
    color: "purple" as const,
    href: "/products",
  },
  {
    icon: Package,
    name: "DeliverIt",
    tagline: "Logistics & Last-Mile Delivery",
    description: "Real-time tracking, route optimization, multi-vendor support, and driver app.",
    badge: "SaaS",
    color: "magenta" as const,
    href: "/products",
  },
];

export function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const kashmirRgb = "27, 107, 58";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-bg-primary" id="products">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Built by <span className="gradient-text">GalaxyDev</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Proprietary products that solve real problems across industries — from legaltech to
            logistics.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-6">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="group block h-full">
              <div
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                style={{
                  backgroundColor: `rgba(${kashmirRgb}, 0.05)`,
                  border: `1px solid rgba(${kashmirRgb}, 0.2)`,
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
                  style={{ background: "linear-gradient(180deg, #1B6B3A, var(--color-blue))" }}
                />

                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: `rgba(${kashmirRgb}, 0.15)` }}
                    >
                      <Newspaper className="w-7 h-7" style={{ color: "#1B6B3A" }} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white border shadow-sm"
                        style={{ borderColor: `rgba(${kashmirRgb}, 0.3)`, color: "#1B6B3A" }}
                      >
                        Media &amp; Publishing · AJ&amp;K
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-300 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-2 leading-tight">
                      KashmirBook — The Voice of Azad Kashmir
                    </h3>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                      AJ&amp;K&apos;s First Modern Digital Publishing Platform
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
                      The region&apos;s first modern platform for news, articles, and community
                      dialogue. Writers publish, readers discover, and communities connect through
                      live audio discussion rooms — all built for AJ&amp;K.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Article Publishing", "Audio Discussion Rooms", "News & Media", "Writer Monetization"].map(
                        (f) => (
                          <span
                            key={f}
                            className="inline-flex px-3 py-1.5 text-xs font-semibold rounded-full border"
                            style={{
                              backgroundColor: `rgba(${kashmirRgb}, 0.08)`,
                              color: "#1B6B3A",
                              borderColor: `rgba(${kashmirRgb}, 0.2)`,
                            }}
                          >
                            {f}
                          </span>
                        )
                      )}
                    </div>

                    <div
                      className="rounded-lg border overflow-hidden mb-6"
                      style={{
                        borderColor: `rgba(${kashmirRgb}, 0.15)`,
                        backgroundColor: `rgba(${kashmirRgb}, 0.03)`,
                      }}
                    >
                      <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: `rgba(${kashmirRgb}, 0.1)` }}>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          </div>
                          <span className="text-xs font-medium" style={{ color: `rgba(${kashmirRgb}, 0.6)` }}>kashmirbook.galaxydev.pk</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-green-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> live
                        </span>
                      </div>

                      <div className="p-4 md:p-5">
                        <div className="grid md:grid-cols-5 gap-4 items-end">
                          <div className="md:col-span-3 space-y-2">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-6 h-6 rounded-md" style={{ backgroundColor: `rgba(${kashmirRgb}, 0.2)` }} />
                              <div className="h-3 rounded-sm flex-1" style={{ backgroundColor: `rgba(${kashmirRgb}, 0.1)`, maxWidth: "200px" }} />
                            </div>
                            <div className="h-2.5 rounded-sm" style={{ backgroundColor: `rgba(${kashmirRgb}, 0.12)`, width: "90%" }} />
                            <div className="h-2.5 rounded-sm" style={{ backgroundColor: `rgba(${kashmirRgb}, 0.08)`, width: "75%" }} />
                            <div className="h-2.5 rounded-sm" style={{ backgroundColor: `rgba(${kashmirRgb}, 0.08)`, width: "85%" }} />
                            <div className="h-2.5 rounded-sm" style={{ backgroundColor: `rgba(${kashmirRgb}, 0.06)`, width: "50%" }} />
                            <div className="flex gap-2 mt-3">
                              <div className="h-8 w-20 rounded-md" style={{ backgroundColor: `rgba(${kashmirRgb}, 0.15)` }} />
                              <div className="h-8 w-20 rounded-md border" style={{ borderColor: `rgba(${kashmirRgb}, 0.2)` }} />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <div
                              className="rounded-lg p-3 border"
                              style={{
                                backgroundColor: `rgba(${kashmirRgb}, 0.06)`,
                                borderColor: `rgba(${kashmirRgb}, 0.15)`,
                              }}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold" style={{ color: "#1B6B3A" }}>Live Discussion</span>
                              </div>
                              <div className="text-xs font-medium mb-2" style={{ color: `rgba(${kashmirRgb}, 0.7)` }}>
                                Kashmir&apos;s Digital Future
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex -space-x-1.5">
                                  {["#1B6B3A", "#2B8B4A", "#3BAB5A"].map((c, a) => (
                                    <div
                                      key={a}
                                      className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white"
                                      style={{ backgroundColor: c }}
                                    >
                                      {["A", "S", "R"][a]}
                                    </div>
                                  ))}
                                </div>
                                <span className="text-[10px] font-semibold" style={{ color: `rgba(${kashmirRgb}, 0.6)` }}>
                                  128 listening
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                      <a
                        href="https://kashmirbook.galaxydev.pk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
                        style={{ background: "linear-gradient(135deg, #1B6B3A, #2693FF)" }}
                      >
                        Visit Platform <ExternalLink size={16} />
                      </a>
                      <Link
                        href="/products/kashmirbook"
                        className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 border-2"
                        style={{
                          borderColor: "#1B6B3A",
                          color: "#1B6B3A",
                          backgroundColor: "transparent",
                        }}
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {products.map((product, i) => {
              const Icon = product.icon;
              const colorClasses: Record<string, string> = {
                purple: "from-purple/20 to-purple/10 text-purple",
                magenta: "from-magenta/20 to-magenta/10 text-magenta",
                blue: "from-blue/20 to-blue/10 text-blue",
              };
              const cc = colorClasses[product.color] || colorClasses.blue;
              const [fromClass, toClass, textClass] = cc.split(" ");
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex-1"
                >
                  <Link href={product.href} className="group block h-full">
                    <div className="relative overflow-hidden bg-bg-card border border-border-default rounded-md shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250 h-full p-6 md:p-8">
                      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue via-purple to-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${fromClass} ${toClass} flex items-center justify-center`}
                        >
                          <Icon className={`w-6 h-6 ${textClass}`} />
                        </div>
                        <Badge variant={product.color as "blue" | "purple" | "magenta"}>
                          {product.badge}
                        </Badge>
                      </div>
                      <h3 className="font-display font-semibold text-xl text-text-primary mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 transition-all duration-200">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href="/products"
                className="group flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue/10 via-purple/10 to-magenta/10 border border-blue/20 rounded-md text-text-primary font-semibold hover:from-blue/20 hover:via-purple/20 hover:to-magenta/20 transition-all duration-200"
              >
                View All Products <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
