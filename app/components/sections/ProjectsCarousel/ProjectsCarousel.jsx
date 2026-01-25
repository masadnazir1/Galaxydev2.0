"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../UI/Button/Button";
import styles from "./ProjectsCarousel.module.css";

export default function ProjectsCarousel({ projects }) {
  return (
    <section className={styles.carouselSection}>
      <div className={styles.headerContent}>
        <h2 className={styles.heading}>Our Projects & Products</h2>
        <p className={styles.subheading}>
          Highlighting some of our featured projects and products across
          industries.
        </p>
      </div>

      {/* Custom Navigation Buttons Container */}
      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={false} // Clean grid alignment
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className={styles.swiper}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <div className={styles.projectTag}>Featured</div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                  />
                  <div className={styles.imgOverlay}></div>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.footer}>
                    <Button variant="ghost" className={styles.detailsBtn}>
                      View Case Study{" "}
                      <FaArrowRight className={styles.btnIcon} />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
