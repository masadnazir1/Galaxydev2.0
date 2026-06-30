import type { Metadata } from "next";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GradientOrb } from "@/components/ui/GradientOrb";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center bg-bg-primary">
      <GradientOrb color="blue" size="lg" position="top-left" />
      <GradientOrb color="magenta" size="lg" position="bottom-right" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8 md:mb-12" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-text-primary font-medium">404</span>
        </nav>
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-magenta/10 text-magenta text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6">
            Error 404
          </span>
          <h1 className="font-display font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-text-primary leading-none mb-4 md:mb-6">
            <span className="gradient-text">404</span>
          </h1>
          <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-text-primary mb-3">
            Page Not Found
          </p>
          <p className="text-base sm:text-lg text-text-secondary max-w-lg mb-8 md:mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-glow"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-border-strong text-text-primary font-semibold rounded-md hover:bg-bg-secondary transition-all duration-200"
            >
              <ArrowLeft size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
