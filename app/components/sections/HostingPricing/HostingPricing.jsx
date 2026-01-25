"use client";

import Link from "next/link";
import { FaCheck, FaCrown, FaRocket, FaServer } from "react-icons/fa";
import Button from "../../UI/Button/Button";
import styles from "./HostingPricing.module.css";

export default function HostingPricing() {
  const plans = [
    {
      id: 1,
      title: "Shared Hosting",
      price: "$9.99",
      period: "/ mo",
      desc: "Perfect for startups and small business websites.",
      icon: <FaRocket />,
      features: [
        "10 Websites",
        "50 GB NVMe Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      id: 2,
      title: "VPS Hosting",
      price: "$29.99",
      period: "/ mo",
      desc: "Scalable power for growing applications and traffic.",
      icon: <FaServer />,
      features: [
        "Unlimited Websites",
        "100 GB NVMe Storage",
        "4 GB RAM & 2 Cores",
        "Dedicated IP Address",
        "Priority 24/7 Support",
      ],
      cta: "Try VPS Pro",
      popular: true,
    },
    {
      id: 3,
      title: "Custom Solution",
      price: "Custom",
      period: "",
      desc: "Tailored infrastructure for enterprise-grade needs.",
      icon: <FaCrown />,
      features: [
        "Dedicated Resources",
        "Custom Configuration",
        "Load Balancing",
        "Advanced Security Suite",
        "Account Manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className={styles.pricingSection}>
      {/* Decorative Blur */}
      <div className={styles.blurTop}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Premium <span className={styles.highlight}>Hosting Services</span>
          </h2>
          <p className={styles.subtext}>
            Reliable, high-speed hosting solutions tailored to your business
            needs. From simple sites to complex cloud infrastructure.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.popular ? styles.cardPopular : ""}`}
            >
              {plan.popular && <div className={styles.badge}>Most Popular</div>}

              <div className={styles.iconWrapper}>{plan.icon}</div>

              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.planDesc}>{plan.desc}</p>

              <div className={styles.priceWrapper}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>

              <div className={styles.divider}></div>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className={styles.checkIcon} /> {feature}
                  </li>
                ))}
              </ul>

              <div className={styles.action}>
                <Link href={plan.id === 3 ? "/contact" : "/contact"}>
                  <Button
                    className={
                      plan.popular ? styles.btnPopular : styles.btnRegular
                    }
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
