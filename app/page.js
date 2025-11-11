import Head from "next/head";
import styles from "./page.module.css";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import ServicesSection from "./components/sections/ServicesSection/ServicesSection";
import TrustUs from "./components/sections/TrustUs/TrustUs";
import ProjectsCarousel from "./components/sections/ProjectsCarousel/ProjectsCarousel";
import { projectsHome } from "./data/projectsHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          GalaxyDev.pk | Full-Stack Web & App Development in Pakistan
        </title>
        <meta
          name="description"
          content="GalaxyDev.pk delivers full-stack web and mobile app development, modern UI/UX design, cloud deployment, and custom digital solutions for startups and enterprises in Pakistan and beyond."
        />
        <meta
          name="keywords"
          content="GalaxyDev, full stack developer Pakistan, web development, mobile app development, Next.js, Node.js, React, cloud solutions, software agency, digital transformation"
        />
        <meta name="author" content="GalaxyDev.pk" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (Facebook / LinkedIn) */}
        <meta
          property="og:title"
          content="GalaxyDev.pk – Full-Stack Web & App Development"
        />
        <meta
          property="og:description"
          content="Professional full-stack development, UI/UX, and cloud-based digital solutions built for performance and scalability."
        />

        <link rel="canonical" href="https://www.galaxydev.pk/" />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <HeroSection />
          <ServicesSection />
          <TrustUs />
          <ProjectsCarousel projects={projectsHome} />
        </section>
      </main>
    </>
  );
}
