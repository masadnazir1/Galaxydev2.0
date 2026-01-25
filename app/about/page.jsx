"use client";

import Image from "next/image";
import {
  FaAward,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaCogs,
  FaHandshake,
  FaLaptopCode,
  FaLightbulb,
  FaMobileAlt,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import Button from "../components/UI/Button/Button";
import PageHead from "../components/UI/PageHead/PageHead";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <PageHead
        title="Who We Are"
        subtitle="Driving digital transformation through innovation and integrity."
        align="center"
        overlay={true}
        gradientFrom="transparent"
        gradientTo="rgba(255,255,255,0.8)"
      />

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Innovating <span className={styles.gradientText}>Today</span> for
              a Better <span className={styles.gradientText}>Tomorrow</span>
            </h1>
            <p className={styles.leadText}>
              Galaxydev is a premier technology partner delivering scalable
              software, mobile apps, and business automation tools. We empower
              businesses globally to transform ideas into impactful digital
              reality.
            </p>
            <div className={styles.btnWrapper}>
              <Button size="lg">Start Your Journey</Button>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/assets/images/about.webp"
              width={600}
              height={500}
              alt="Galaxydev Team Collaboration"
              className={styles.heroImg}
              priority
              quality={90}
            />
          </div>
        </section>

        {/* Mission & Vision - Split Layout */}
        <section className={styles.splitSection}>
          <div className={`${styles.infoCard} ${styles.cardMission}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <FaRocket />
              </div>
              <h2>Our Mission</h2>
            </div>
            <p>
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and digital transformation. We deliver
              reliable products while enabling teams to achieve excellence in
              every project we undertake.
            </p>
          </div>
          <div className={`${styles.infoCard} ${styles.cardVision}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <FaLightbulb />
              </div>
              <h2>Our Vision</h2>
            </div>
            <p>
              To be recognized as a trusted global technology partner,
              delivering end-to-end solutions that revolutionize industries,
              enhance productivity, and create a lasting impact through code and
              creativity.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.sectionCenter}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <p className={styles.sectionSubtitle}>
            The principles that guide every line of code we write and every
            partnership we build.
          </p>
          <div className={styles.gridValues}>
            <div className={styles.valueCard}>
              <div className={styles.iconBox}>
                <FaLaptopCode />
              </div>
              <h3>Innovation</h3>
              <p>
                Solving complex challenges with creativity and modern tech
                stacks.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.iconBox}>
                <FaUsers />
              </div>
              <h3>Customer Focus</h3>
              <p>
                Crafting tailored solutions that maximize client ROI and
                satisfaction.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.iconBox}>
                <FaHandshake />
              </div>
              <h3>Integrity</h3>
              <p>Transparency and ethics guide our development process.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.iconBox}>
                <FaAward />
              </div>
              <h3>Excellence</h3>
              <p>Ensuring reliability, scalability, and quality in delivery.</p>
            </div>
          </div>
        </section>

        {/* Services Strip */}
        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Expertise</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive digital solutions customized for your needs.
          </p>
          <div className={styles.gridServices}>
            {[
              { icon: <FaCheckCircle />, text: "Graphic Design & Branding" },
              { icon: <FaMobileAlt />, text: "Mobile App Dev" },
              { icon: <FaLaptopCode />, text: "Web Applications" },
              { icon: <FaChartLine />, text: "SEO & Marketing" },
              { icon: <FaCogs />, text: "Custom Automation" },
              { icon: <FaCloud />, text: "Cloud Solutions" },
            ].map((service, index) => (
              <div key={index} className={styles.servicePill}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <span>{service.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* History & Stats */}
        <section className={styles.historyContainer}>
          <div className={styles.historyContent}>
            <h2>Our Journey</h2>
            <p>
              Founded with a passion for code, Galaxydev has evolved from a
              startup to a leading solutions provider. With a reputation built
              on reliability, we have successfully delivered projects for
              startups and enterprises alike.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <FaCheckCircle className={styles.statIcon} />
              <strong>500+</strong>
              <span>Projects</span>
            </div>
            <div className={styles.statItem}>
              <FaUsers className={styles.statIcon} />
              <strong>150+</strong>
              <span>Happy Clients</span>
            </div>
            <div className={styles.statItem}>
              <FaAward className={styles.statIcon} />
              <strong>99%</strong>
              <span>Success Rate</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaWrapper}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let’s build innovative solutions together. See how Galaxydev can
              transform your ideas into reality.
            </p>
            <div className={styles.ctaBtn}>
              <Button>Get In Touch</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
