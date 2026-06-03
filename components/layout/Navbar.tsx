"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border-default shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="GalaxyDev Home">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="36" height="36" rx="8" fill="url(#logo-grad)" />
            <path
              d="M10 26V10h4.5l3.5 8.5L21.5 10H26v16h-4V17.5l-3.5 8h-1l-3.5-8V26H10z"
              fill="white"
            />
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="36" y2="36">
                <stop stopColor="#2693FF" />
                <stop offset="0.5" stopColor="#7C41FF" />
                <stop offset="1" stopColor="#E014EC" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-display font-semibold text-xl text-text-primary">GalaxyDev <span className="text-xs font-medium text-text-muted hidden sm:inline">Pvt Ltd</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-150 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue via-purple to-magenta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-blue via-purple to-magenta hover:scale-105 active:scale-95 transition-all duration-200 shadow-glow"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>

          <button
            className="lg:hidden p-2 text-text-primary hover:bg-bg-tertiary rounded-md transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-bg-primary shadow-lg transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border-default">
            <span className="font-display font-semibold text-lg text-text-primary">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-text-secondary hover:bg-bg-tertiary rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-bg-tertiary rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 inset-x-0 p-4 border-t border-border-default">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-semibold text-white rounded-md bg-gradient-to-r from-blue via-purple to-magenta transition-all"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
