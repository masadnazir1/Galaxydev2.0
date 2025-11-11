"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ProjectsCarousel.module.css";
import Image from "next/image";
import Button from "../../UI/Button/Button";

export default function ProjectsCarousel({ projects }) {
  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.heading}>Our Projects & Products</h2>
      <p className={styles.subheading}>
        Highlighting some of our featured projects and products across
        industries.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.CtaSection}>
                <Button className={styles.primaryBtn}>Get Started</Button>
                <Button variant="outline" className={styles.secondaryBtn}>
                  See How It Works
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
