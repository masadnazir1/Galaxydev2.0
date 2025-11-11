"use client";

import Image from "next/image";
import styles from "./TrustUs.module.css";
import Button from "../../UI/Button/Button";

export default function TrustUs() {
  return (
    <section className={styles.trustSection}>
      <div className={styles.trustWrapper}>
        {/* Left Column */}
        <div className={styles.trustContent}>
          <span className={styles.roundedBox}></span>
          <h2 className={styles.trustHeading}>Leading companies trust us</h2>
          <h2 className={styles.trustHeading}>to develop software</h2>
          <p className={styles.trustParagraph}>
            We add development capacity to tech teams, helping organizations
            accelerate their projects and achieve their goals efficiently. Our
            value goes beyond simply building teams—we contribute strategically
            across every stage of the project lifecycle, from planning and
            architecture to implementation, testing, and deployment. As a
            trusted custom software development company, we ensure the
            successful delivery of high-quality solutions tailored to your
            business needs. We focus on creating scalable, maintainable, and
            innovative software that empowers companies to solve complex
            problems and stay ahead in the competitive tech landscape.
          </p>
          <div className={styles.buttonGroup}>
            <Button>Explore Our Services</Button>
            <Button variant="secondary">Visit Our Blog</Button>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.trustImageWrapper}>
          <Image
            src="/assets/images/trust.jpg" // replace with your image path
            alt="Trusted by leading companies"
            width={600}
            height={400}
            className={styles.trustImage}
          />
        </div>
      </div>
    </section>
  );
}
