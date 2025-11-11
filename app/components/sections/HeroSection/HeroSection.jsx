"use client";

import Image from "next/image";
import styles from "./HeroSection.module.css";
import Button from "../../UI/Button/Button";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Build{" "}
          <span className={styles.highlight}>Smart Digital Solutions</span> with{" "}
          <span className={styles.brand}>GalaxyDev.pk</span>
        </h1>

        <p className={styles.subtitle}>
          Empowering businesses with full-stack web and mobile app development,
          modern UI/UX, and cloud-native solutions built for scalability and
          performance.
        </p>
        <div className={styles.ButtonWrapper}>
          <Button> Let’s Get Started</Button>
          <Button variant="outline"> Let’s Get Started</Button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/Hero_image.png"
          alt="GalaxyDev team collaboration illustration"
          width={500}
          height={400}
          priority
          className={styles.image}
        />
      </div>
    </section>
  );
}
