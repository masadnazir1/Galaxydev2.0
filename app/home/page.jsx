import Head from "next/head";
import HeroSection from "../components/sections/HeroSection/HeroSection";
import ProjectsCarousel from "../components/sections/ProjectsCarousel/ProjectsCarousel";
import ServicesSection from "../components/sections/ServicesSection/ServicesSection";
import TrustUs from "../components/sections/TrustUs/TrustUs";
import { projectsHome } from "../data/projectsHome";
import styles from "../page.module.css";

export default function Home() {
  // JSON-LD Schema for Local Business & Software Organization
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GalaxyDev",
    image: "https://www.galaxydev.pk/assets/images/logo.png",
    url: "https://www.galaxydev.pk",
    telephone: "+92 300 1234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Techno City, Main Shahrah-e-Faisal",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      postalCode: "74000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.8607",
      longitude: "67.0011",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/galaxydev",
      "https://www.linkedin.com/company/galaxydev",
      "https://www.instagram.com/galaxydev",
    ],
    priceRange: "$$",
  };

  return (
    <>
      <Head>
        {/* Primary Title & Description */}
        <title>
          GalaxyDev | Top Software & Mobile App Development Company in Pakistan
        </title>
        <meta
          name="description"
          content="Transform your business with GalaxyDev. We deliver high-performance Custom Software, Mobile Apps (iOS/Android), and AI-driven Web Solutions. Trusted by startups and enterprises globally."
        />

        {/* Keywords (Focus: Location + Niche) */}
        <meta
          name="keywords"
          content="GalaxyDev, software company Pakistan, mobile app development Karachi, custom software solutions, Next.js developers, React Native experts, enterprise software, web design agency"
        />

        {/* Technical & Crawler Directives */}
        <meta name="author" content="GalaxyDev Team" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.galaxydev.pk/" />

        {/* Open Graph (Social Media Previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.galaxydev.pk/" />
        <meta
          property="og:title"
          content="GalaxyDev - Innovation Driven Software Solutions"
        />
        <meta
          property="og:description"
          content="We build scalable digital products. From Mobile Apps to Cloud Architecture, partner with Pakistan's leading tech agency."
        />
        <meta
          property="og:image"
          content="https://www.galaxydev.pk/assets/images/og-share-image.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GalaxyDev | Full-Stack Development Experts"
        />
        <meta
          name="twitter:description"
          content="Expert software engineering teams ready to build your next big idea."
        />
        <meta
          name="twitter:image"
          content="https://www.galaxydev.pk/assets/images/og-share-image.webp"
        />

        {/* Local SEO Tags */}
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content="Karachi" />
        <meta name="geo.position" content="24.8607;67.0011" />
        <meta name="ICBM" content="24.8607, 67.0011" />

        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main className={styles.mainContainer}>
        {/* Semantic Structure: 
           Each component should ideally render a <section> tag internally.
           If not, wrap them here.
        */}

        <div className={styles.heroWrapper}>
          <HeroSection />
        </div>

        {/* Trust/Social Proof should often come high up for credibility */}
        <section className={styles.sectionSpacing}>
          <TrustUs />
        </section>

        <section className={styles.sectionSpacing} id="services">
          <ServicesSection />
        </section>

        <section className={styles.sectionSpacing} id="projects">
          <ProjectsCarousel projects={projectsHome} />
        </section>
      </main>
    </>
  );
}
