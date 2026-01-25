"use client";

import { useState } from "react";
import {
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaGlobe,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import Button from "../components/UI/Button/Button";
import PageHead from "../components/UI/PageHead/PageHead";
import styles from "./PaymentSolutions.module.css";

export default function PaymentSolutions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className={styles.container}>
      <PageHead
        title="Scalable Payments for Modern Businesses"
        subtitle="The unified payment orchestration layer for Pakistan's digital economy."
        align="center"
        gradientFrom="transparent"
        gradientTo="rgba(255,255,255,0.8)"
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.dotPulse}></span> Coming Soon
          </div>
          <h1 className={styles.heroTitle}>
            The{" "}
            <span className={styles.gradientText}>
              Financial Infrastructure
            </span>
            <br />
            You've Been Waiting For
          </h1>
          <p className={styles.heroSubtitle}>
            Accept payments, manage subscriptions, and automate payouts with a
            single integration. 99.99% uptime, purpose-built for high-growth
            startups and enterprises.
          </p>
          <div className={styles.ctaGroup}>
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("waitlist")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Join the Waitlist
            </Button>
          </div>
        </div>

        {/* Code Visual */}
        <div className={styles.codeSection}>
          <div className={styles.codeWindow}>
            <div className={styles.windowHeader}>
              <div className={`${styles.dot} ${styles.dotRed}`}></div>
              <div className={`${styles.dot} ${styles.dotYellow}`}></div>
              <div className={`${styles.dot} ${styles.dotGreen}`}></div>
            </div>
            <div className={styles.codeContent}>
              <pre>
                <code>
                  <span className={styles.keyword}>const</span>{" "}
                  <span className={styles.function}>payment</span> ={" "}
                  <span className={styles.keyword}>await</span> galaxyPay.
                  <span className={styles.function}>createCharge</span>({`{`}
                  {"\n"}
                  <span className={styles.string}>"amount"</span>: 2500,{"\n"}
                  <span className={styles.string}>"currency"</span>: "PKR",
                  {"\n"}
                  <span className={styles.string}>"source"</span>: "card_123",
                  {"\n"}
                  <span className={styles.string}>"capture"</span>:{" "}
                  <span className={styles.keyword}>true</span>
                  {"\n"}
                  {`}`});{"\n"}
                  <span className={styles.comment}>
                    // Payment processed instantly. Webhook fired.
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeading}>
          <h2>Everything you need to scale</h2>
          <p>Built for developers, designed for growth.</p>
        </div>

        <div className={styles.grid}>
          <FeatureCard
            icon={<FaServer />}
            title="99.99% Uptime SLA"
            desc="Redundant architecture ensuring your checkout never goes down, even during Black Friday spikes."
          />
          <FeatureCard
            icon={<FaCode />}
            title="Unified API"
            desc="One clean API for Cards, JazzCash, Easypaisa, Raast, and Bank Transfers. No more spaghetti code."
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Fraud Detection"
            desc="AI-powered fraud prevention that blocks risky transactions in milliseconds without manual review."
          />
          <FeatureCard
            icon={<FaBolt />}
            title="Instant Settlement"
            desc="Access your funds faster. Automated payout schedules to any bank account in Pakistan."
          />
          <FeatureCard
            icon={<FaGlobe />}
            title="Global & Local"
            desc="Accept payments from anywhere in the world, settled in PKR. Multi-currency support built-in."
          />
          <FeatureCard
            icon={<FaCheckCircle />}
            title="Developer Experience"
            desc="SDKs for Node, Python, PHP, and React. Sandbox environments that actually work."
          />
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className={styles.waitlistSection}>
        <div className={styles.waitlistContent}>
          <h2>Get Early Access</h2>
          <p>
            We are currently onboarding a select group of beta partners. Secure
            your spot in line.
          </p>

          {!submitted ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                  className={styles.input}
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Work Email</label>
                <input
                  className={styles.input}
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Company/Business Name</label>
                <input
                  className={styles.input}
                  type="text"
                  required
                  placeholder="GalaxyDev Inc."
                  value={formData.business}
                  onChange={(e) =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                />
              </div>
              <Button type="submit" className={styles.submitBtn}>
                Request Access
              </Button>
            </form>
          ) : (
            <div
              className={styles.form}
              style={{ textAlign: "center", padding: "4rem 2rem" }}
            >
              <FaCheckCircle
                style={{
                  fontSize: "3rem",
                  color: "#4f46e5",
                  marginBottom: "1rem",
                }}
              />
              <h3>You're on the list!</h3>
              <p>We'll be in touch shortly with your beta credentials.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
