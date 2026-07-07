"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const products = [
  {
    name: "Pro SaaS Boilerplate",
    category: "Development",
    price: "$49",
    rating: 4.9,
    reviews: 128,
    description: "Production-ready Next.js + NestJS boilerplate with authentication, billing, team management, and multi-tenant support.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "AI Chatbot Template",
    category: "AI",
    price: "$29",
    rating: 4.8,
    reviews: 86,
    description: "Full-featured AI chatbot with OpenAI integration, context management, and customizable conversation flows.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Premium UI Kit Pro",
    category: "Design",
    price: "$39",
    rating: 4.7,
    reviews: 215,
    description: "500+ components, 100+ templates, dark/light mode, and Figma source files for rapid prototyping.",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "DevOps Starter Pack",
    category: "Infrastructure",
    price: "$59",
    rating: 4.6,
    reviews: 64,
    description: "Complete CI/CD pipelines, Docker configurations, Kubernetes manifests, and monitoring stack.",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Business Website Template",
    category: "Templates",
    price: "$24",
    rating: 4.5,
    reviews: 342,
    description: "Modern, responsive business website template with blog, services, portfolio, and contact sections.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "n8n Workflow Bundle",
    category: "Automation",
    price: "$34",
    rating: 4.8,
    reviews: 97,
    description: "50+ production-ready n8n workflows for CRM, marketing, HR, finance, and operations automation.",
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Cloud VPS Pro Config",
    category: "Cloud",
    price: "$19",
    rating: 4.4,
    reviews: 153,
    description: "Optimized VPS configuration scripts with security hardening, monitoring, and auto-scaling setup.",
    color: "from-sky-500 to-blue-500",
  },
  {
    name: "Smart Home Starter Kit",
    category: "IoT",
    price: "$89",
    rating: 4.3,
    reviews: 41,
    description: "Complete smart home automation bundle with hub, sensors, smart plugs, and mobile app integration.",
    color: "from-emerald-500 to-green-500",
  },
];

const shopUrl = "https://shop.galaxydev.pk";

export function ShopFeatured() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge variant="blue" className="mb-4">Featured Products</Badge>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Hand-picked products our team recommends for quality and value.
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-bg-card border border-border-default rounded-md shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250 flex flex-col"
            >
              <div className={`h-32 rounded-t-md bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                <span className="text-white/20 text-4xl font-display font-bold select-none">
                  {product.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="muted">{product.category}</Badge>
                  <span className="font-display font-bold text-lg text-text-primary">
                    {product.price}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-base text-text-primary mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-3 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border-default">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-text-primary">{product.rating}</span>
                    <span className="text-xs text-text-muted">({product.reviews})</span>
                  </div>
                  <a
                    href={`${shopUrl}/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue hover:text-purple transition-colors"
                  >
                    View Product <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={`${shopUrl}/products`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
            >
              View All Products <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
