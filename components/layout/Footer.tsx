"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "UI/UX Design", href: "/services" },
  { label: "Software Development", href: "/services" },
  { label: "SaaS Development", href: "/services" },
  { label: "E-Commerce Solutions", href: "/services" },
  { label: "Mobile Apps", href: "/services" },
  { label: "Digital Consulting", href: "/services" },
];

const products = [
  { label: "Dealit", href: "/products" },
  { label: "PakistanLawHelp", href: "/products" },
  { label: "DeliverIt", href: "/products" },
  { label: "JKMarkaz", href: "/products" },
  { label: "GalaxyDev Marketplace", href: "/shop" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Founder", href: "/about/founder" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="GalaxyDev Home">
              <Image
                src="/logo.png"
                alt="GalaxyDev"
                width={200}
                height={150}
                className="rounded-lg"
                aria-hidden="true"
              />
              <span className="font-display font-semibold text-xl"> </span>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              A remote-first Pakistani software house building enterprise-grade SaaS platforms, custom
              software, and digital products for global clients — from Pakistan &amp; AJK.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-semibold text-sm text-[#94A3B8] uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#CBD5E1] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-[#94A3B8] uppercase tracking-widest mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#CBD5E1] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-[#94A3B8] uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#CBD5E1] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-12 lg:col-start-1">
            <h3 className="font-semibold text-sm text-[#94A3B8] uppercase tracking-widest mb-4">
              Stay Updated
            </h3>
            <form
              className="flex gap-2 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-md bg-[#1E293B] border border-[#334155] text-sm text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2693FF] transition-colors"
                required
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2693FF] to-[#7C41FF] text-white font-semibold text-sm rounded-md hover:opacity-90 transition-opacity shrink-0"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            &copy; {new Date().getFullYear()} GalaxyDev Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-white transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#64748B]">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
