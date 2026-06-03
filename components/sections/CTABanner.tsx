import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue via-purple to-magenta" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
          Ready to Build Something Great?
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Let&apos;s discuss your project. Free consultation, no obligation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue font-semibold rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-200"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
