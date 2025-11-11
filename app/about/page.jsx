"use client";

import Image from "next/image";
import styles from "./About.module.css";
import Button from "../components/UI/Button/Button";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaUsers,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";
import PageHead from "../components/UI/PageHead/PageHead";

export default function About() {
  return (
    <>
      <PageHead
        title="About Us"
        subtitle="Learn more about our mission, vision, and values"
        align="center"
        height="40vh"
        overlay={true}
        overlayColor="rgba(191, 93, 230, 0.49)"
        gradientFrom="transparent"
        gradientTo="transparent"
        bgImage="/assets/images/headbg.webp"
      />

      <main className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>About Galaxydev</h1>
            <p>
              Galaxydev.pk is a leading technology company delivering innovative
              software, mobile apps, web solutions, and business automation
              tools that empower businesses across Pakistan and globally. We
              transform ideas into scalable, impactful, and reliable technology
              solutions.
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/assets/images/about.webp"
              width={600}
              height={400}
              alt="Galaxydev About"
            />
          </div>
        </section>

        {/* Company Mission & Vision */}
        <section className={styles.section}>
          <div className={styles.missionVision}>
            <div className={styles.card}>
              <h2>Our Mission</h2>
              <p>
                Empower businesses with innovative technology solutions that
                drive growth, efficiency, and digital transformation across
                industries. We deliver reliable products while enabling teams to
                achieve excellence in every project.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Our Vision</h2>
              <p>
                To be recognized as Pakistan’s most trusted technology partner,
                delivering end-to-end solutions that revolutionize industries,
                enhance productivity, and create lasting global impact.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.values}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <FaLaptopCode className={styles.icon} />
              <h3>Innovation</h3>
              <p>
                Creativity and cutting-edge technologies are at the heart of
                solving complex business challenges.
              </p>
            </div>
            <div className={styles.valueCard}>
              <FaUsers className={styles.icon} />
              <h3>Customer Focus</h3>
              <p>
                We craft tailored solutions that maximize client value and
                long-term ROI.
              </p>
            </div>
            <div className={styles.valueCard}>
              <FaCheckCircle className={styles.icon} />
              <h3>Integrity</h3>
              <p>
                Transparency, honesty, and strong ethics guide every project we
                deliver.
              </p>
            </div>
            <div className={styles.valueCard}>
              <FaCloud className={styles.icon} />
              <h3>Excellence</h3>
              <p>
                Commitment to quality ensures every solution is reliable,
                scalable, and efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className={styles.section}>
          <h2>Our Expertise</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <FaCheckCircle className={styles.icon} /> Graphic Design &
              Branding
            </div>
            <div className={styles.serviceCard}>
              <FaMobileAlt className={styles.icon} /> Mobile App Development
              (iOS & Android)
            </div>
            <div className={styles.serviceCard}>
              <FaLaptopCode className={styles.icon} /> Windows & Desktop App
              Development
            </div>
            <div className={styles.serviceCard}>
              <FaLaptopCode className={styles.icon} /> Ecommerce Solutions
              (Shopify & WordPress)
            </div>
            <div className={styles.serviceCard}>
              <FaLaptopCode className={styles.icon} /> Custom Software
              Development
            </div>
            <div className={styles.serviceCard}>
              <FaCloud className={styles.icon} /> Digital Cloud Solutions
            </div>
            <div className={styles.serviceCard}>
              <FaCheckCircle className={styles.icon} /> Business Automation &
              Workflow Optimization
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className={styles.section}>
          <h2>Our Journey</h2>
          <p>
            Founded in 2023, Galaxydev has grown from a small tech startup to a
            leading software solutions provider in Pakistan. Over the years, we
            have successfully delivered hundreds of projects across industries,
            building a reputation for excellence, reliability, and innovation.
          </p>
        </section>

        {/* Achievements */}
        <section className={styles.section}>
          <h2>Achievements & Milestones</h2>
          <div className={styles.achievements}>
            <div className={styles.achievementCard}>
              <FaAward className={styles.icon} />
              <h3>500+ Projects Delivered</h3>
              <p>
                Successfully completed diverse projects across multiple
                industries worldwide.
              </p>
            </div>
            <div className={styles.achievementCard}>
              <FaLightbulb className={styles.icon} />
              <h3>Innovative Solutions</h3>
              <p>
                Continuous innovation in technology, design, and business
                automation.
              </p>
            </div>
            <div className={styles.achievementCard}>
              <FaUsers className={styles.icon} />
              <h3>Global Client Base</h3>
              <p>
                Serving clients from startups to Fortune 500 companies across
                the globe.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let’s build innovative solutions together. Contact us today and see
            how Galaxydev can transform your ideas into reality.
          </p>
          <Button>Get In Touch</Button>
        </section>
      </main>
    </>
  );
}
