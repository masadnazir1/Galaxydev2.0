"use client";

import Image from "next/image";
import Button from "../../UI/Button/Button";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper} aria-label="Introduction">
      {/* Background Decor */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Build{" "}
            <span className={styles.highlight}>Smart Digital Solutions</span>{" "}
            with <span className={styles.brand}>GalaxyDev</span>
          </h1>

          <p className={styles.description}>
            Empowering your business with scalable Full-Stack Development, Cloud
            Architecture, and AI-driven Mobile Applications. Partner with
            Pakistan's leading tech experts today.
          </p>

          <div className={styles.actions}>
            <Button className={styles.primaryBtn}>Let’s Get Started</Button>
            <Button variant="outline" className={styles.secondaryBtn}>
              View Portfolio
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/Hero_image.png"
              alt="GalaxyDev software engineering team collaborating on digital products"
              width={600}
              height={500}
              priority
              className={styles.heroImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
