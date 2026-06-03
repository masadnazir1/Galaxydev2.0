import { Hero } from "@/components/sections/Hero";
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { DigitalMarketing } from "@/components/sections/DigitalMarketing";
import { WhyGalaxyDev } from "@/components/sections/WhyGalaxyDev";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

const techLogos = [
  "React", "Next.js", "Node.js", "Python", "AWS", "Supabase", "Stripe", "Figma",
  "TypeScript", "PostgreSQL", "Docker", "GraphQL",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-12 bg-bg-secondary border-y border-border-default overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-text-subtle mb-6">
            Trusted Technologies
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee w-max">
              {[...techLogos, ...techLogos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-sm font-medium text-text-subtle px-4 py-2 border border-border-default rounded-md bg-bg-card whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesSnapshot />
      <FeaturedProducts />
      <DigitalMarketing />
      <WhyGalaxyDev />
      <StatsBar />
      <Testimonials />
      <CTABanner />
    </>
  );
}
