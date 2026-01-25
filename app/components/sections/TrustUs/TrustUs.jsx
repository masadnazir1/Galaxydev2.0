"use client";

import Image from "next/image";
import {
  FaClock,
  FaGlobeAmericas,
  FaProjectDiagram,
  FaUserCheck,
} from "react-icons/fa";
import Button from "../../UI/Button/Button";
import styles from "./TrustUs.module.css";

export default function TrustUs() {
  const stats = [
    { number: "250+", label: "Projects Delivered", icon: <FaProjectDiagram /> },
    { number: "98%", label: "Client Retention", icon: <FaUserCheck /> },
    { number: "15+", label: "Countries Served", icon: <FaGlobeAmericas /> },
    { number: "10k+", label: "Hours Saved", icon: <FaClock /> },
  ];

  return (
    <section className={styles.trustSection}>
      {/* Decorative Background Elements */}
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.contentColumn}>
          <div className={styles.badge}>
            <span className={styles.badgeLine}></span>
            Why Choose Us
          </div>

          <h2 className={styles.heading}>
            Leading companies <span className={styles.highlight}>trust us</span>{" "}
            to build their future.
          </h2>

          <p className={styles.description}>
            We don't just write code; we architect solutions. By acting as a
            strategic extension of your team, we bridge the gap between complex
            requirements and scalable, high-performance software.
          </p>

          <p className={styles.descriptionSecondary}>
            From initial discovery to final deployment, our agile methodology
            ensures transparency, efficiency, and quality at every step.
          </p>

          <div className={styles.actions}>
            <Button className={styles.primaryBtn}>Explore Our Work</Button>
            <Button variant="outline" className={styles.secondaryBtn}>
              Meet the Team
            </Button>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div>
                  <h4 className={styles.statNumber}>{stat.number}</h4>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className={styles.visualColumn}>
          <div className={styles.imageCard}>
            <Image
              src="/assets/images/trust.jpg"
              alt="Team collaboration"
              width={600}
              height={700}
              className={styles.mainImage}
            />
            {/* Floating Card Overlay */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>⭐</div>
              <div>
                <h5>5-Star Rated</h5>
                <p>On Clutch & Upwork</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
