"use client";

import {
  FaChartLine,
  FaCheck,
  FaCloudUploadAlt,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaSearchDollar,
} from "react-icons/fa";
import Button from "../components/UI/Button/Button";
import PageHead from "../components/UI/PageHead/PageHead";
import styles from "./Services.module.css";

export default function Services() {
  // SEO Note: Defining data here allows for easy content updates for keyword targeting
  const servicesData = [
    {
      id: 1,
      title: "Custom Software Development",
      description:
        "We build robust, scalable, and secure enterprise software tailored to your specific business processes.",
      icon: <FaCode />,
      features: [
        "Enterprise Resource Planning (ERP)",
        "CRM Development",
        "SaaS Product Development",
        "API Integration & Development",
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that offer seamless user experiences on iOS and Android.",
      icon: <FaMobileAlt />,
      features: [
        "React Native & Flutter Solutions",
        "iOS (Swift) & Android (Kotlin)",
        "App Store Optimization (ASO)",
        "Mobile UI/UX Design",
      ],
    },
    {
      id: 3,
      title: "Web Design & Development",
      description:
        "High-performance websites and web applications optimized for speed, SEO, and conversion.",
      icon: <FaRocket />,
      features: [
        "Next.js & React Applications",
        "E-commerce (Shopify/WooCommerce)",
        "Progressive Web Apps (PWA)",
        "CMS Development",
      ],
    },
    {
      id: 4,
      title: "UI/UX Design & Branding",
      description:
        "User-centric design that combines aesthetics with functionality to build strong brand identities.",
      icon: <FaPaintBrush />,
      features: [
        "Wireframing & Prototyping",
        "User Journey Mapping",
        "Brand Identity & Logo Design",
        "Interactive Mockups",
      ],
    },
    {
      id: 5,
      title: "Cloud & DevOps Solutions",
      description:
        "Streamline your operations with secure cloud infrastructure and automated CI/CD pipelines.",
      icon: <FaCloudUploadAlt />,
      features: [
        "AWS & Azure Architecture",
        "Server Migration & Management",
        "Docker & Kubernetes",
        "Database Optimization",
      ],
    },
    {
      id: 6,
      title: "Digital Marketing & SEO",
      description:
        "Data-driven marketing strategies to increase your online visibility and drive organic traffic.",
      icon: <FaSearchDollar />,
      features: [
        "Technical SEO Audits",
        "Content Marketing Strategy",
        "Social Media Management",
        "PPC & Lead Generation",
      ],
    },
  ];

  return (
    <>
      <PageHead
        title="Our Services"
        subtitle="End-to-end technology solutions designed to scale your business."
        align="center"
        height="40vh"
        overlay={true}
        overlayColor="rgba(15, 23, 42, 0.7)"
        gradientFrom="transparent"
        gradientTo="var(--background-light)"
        bgImage="/assets/images/services-bg.webp"
      />

      <main className={styles.container}>
        {/* Intro Section - SEO Rich Text */}
        <section className={styles.intro}>
          <h1 className={styles.mainHeading}>
            Comprehensive Tech Solutions for the{" "}
            <span className={styles.highlight}>Modern Era</span>
          </h1>
          <p className={styles.introText}>
            At Galaxydev, we don't just write code; we solve business problems.
            From conceptualization to deployment, our full-stack capabilities
            ensure that your digital ecosystem is efficient, secure, and ready
            for growth. Explore how our specialized services can elevate your
            brand.
          </p>
        </section>

        {/* Services Grid */}
        <section className={styles.servicesSection}>
          <div className={styles.grid}>
            {servicesData.map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.cardIconWrapper}>{service.icon}</div>
                <h2 className={styles.cardTitle}>{service.title}</h2>
                <p className={styles.cardDescription}>{service.description}</p>

                <div className={styles.separator}></div>

                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className={styles.checkIcon} /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section - Builds Trust */}
        <section className={styles.processSection}>
          <h2 className={styles.sectionTitle}>How We Deliver Excellence</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>01</span>
              <h3>Discovery</h3>
              <p>We analyze your requirements and business goals.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>02</span>
              <h3>Design</h3>
              <p>Creating intuitive workflows and visual prototypes.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>03</span>
              <h3>Development</h3>
              <p>Agile coding with regular updates and testing.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>04</span>
              <h3>Launch</h3>
              <p>Deployment, training, and ongoing support.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <FaChartLine className={styles.ctaIcon} />
            <h2>Ready to Scale Your Business?</h2>
            <p>
              Whether you need a new website, a complex mobile app, or digital
              transformation consulting, we are here to help.
            </p>
            <Button>Get a Free Quote</Button>
          </div>
        </section>
      </main>
    </>
  );
}
