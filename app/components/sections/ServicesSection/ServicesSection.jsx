"use client";

import styles from "./ServicesSection.module.css";
import {
  FaPaintBrush,
  FaMobileAlt,
  FaWindows,
  FaShoppingCart,
  FaCode,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import Button from "../../UI/Button/Button";

const services = [
  //   {
  //     icon: <FaPaintBrush />,
  //     title: "Graphic Design",
  //     description:
  //       "Creative and modern designs for branding, marketing, and web assets.",
  //   },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "iOS and Android apps with smooth UX/UI tailored to your needs.",
  },
  //   {
  //     icon: <FaWindows />,
  //     title: "Windows App Development",
  //     description:
  //       "Custom desktop applications for Windows with high performance.",
  //   },
  {
    icon: <FaShoppingCart />,
    title: "Ecommerce Solutions",
    description: "Shopify and WordPress solutions to grow your online store.",
  },
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions for your unique business requirements.",
  },
  {
    icon: <FaCloud />,
    title: "Digital Cloud Solutions",
    description:
      "Scalable cloud infrastructure and digital transformation services.",
  },
  {
    icon: <FaCogs />,
    title: "Business Automation Solutions",
    description:
      "Automation to solve real business problems across industries.",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesHeading}>Our Services</h2>
      <p className={styles.servicesSubheading}>
        We provide a wide range of solutions that cover all technology needs for
        modern businesses.
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <div className={styles.iconWrapper}>{service.icon}</div>
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.ctaWrapper}>
        <Button>View All Services</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </section>
  );
}
