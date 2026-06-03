"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ArrowRight, Car, Scale, Package, Store } from "lucide-react";
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
    color: "blue",
    href: "/products",
    featured: true,
  },
  {
    icon: Scale,
    name: "PakistanLawHelp",
    tagline: "AI-Powered Legal Research",
    description: "Case law search, document analyzer, citation generator, and lawyer directory.",
    badge: "AI",
    color: "purple",
    href: "/products",
    featured: false,
  },
  {
    icon: Package,
    name: "DeliverIt",
    tagline: "Logistics & Last-Mile Delivery",
    description: "Real-time tracking, route optimization, multi-vendor support, and driver app.",
    badge: "SaaS",
    color: "magenta",
    href: "/products",
    featured: false,
  },
];

export function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <Link href="/products" className="group block h-full">
              <div className="relative overflow-hidden bg-bg-card border border-border-default rounded-lg shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250 h-full p-8 md:p-10">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue via-purple to-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 flex items-center justify-center">
                      <Car className="w-7 h-7 text-blue" />
                    </div>
                    <Badge variant="blue">{products[0].badge}</Badge>
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-text-primary mb-1">
                    {products[0].name}
                  </h3>
                  <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                    {products[0].tagline}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                    {products[0].description}
                  </p>

                  <div className="border border-border-default rounded-md bg-bg-secondary p-4 mb-6">
                    <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                      <span>Dealit Dashboard</span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" /> live
                      </span>
                    </div>
                    <div className="h-32 rounded-sm bg-gradient-to-br from-blue/5 via-purple/5 to-magenta/5 border border-border-default flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-1.5 p-3 w-full h-full">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded-sm bg-gradient-to-br from-blue/20 to-purple/20"
                            style={{ height: `${40 + Math.sin(i * 1.5) * 30}%`, alignSelf: "flex-end" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue group-hover:gap-3 transition-all duration-200">
                    Explore Dealit <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col gap-6">
            {products.slice(1).map((product, i) => {
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
                  <Link href="/products" className="group block h-full">
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
