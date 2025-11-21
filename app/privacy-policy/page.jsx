"use client";

import { useState } from "react";
import { FaFileContract, FaLock, FaShieldAlt } from "react-icons/fa";
import PageHead from "../components/UI/PageHead/PageHead";
import styles from "./Legal.module.css";

export default function Legal() {
  const [activeTab, setActiveTab] = useState("privacy"); // 'privacy' or 'terms'

  return (
    <>
      <PageHead
        title="Legal Center"
        subtitle="Transparency is key to our partnership. Read our policies below."
        align="center"
        height="35vh"
        overlay={true}
        overlayColor="rgba(15, 23, 42, 0.8)"
        gradientFrom="transparent"
        gradientTo="var(--background-light)"
        bgImage="/assets/images/legal-bg.webp"
      />

      <main className={styles.legalPage}>
        {/* Tab Controller */}
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabBtn} ${
              activeTab === "privacy" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("privacy")}
          >
            <FaShieldAlt /> Privacy Policy
          </button>
          <button
            className={`${styles.tabBtn} ${
              activeTab === "terms" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("terms")}
          >
            <FaFileContract /> Terms of Service
          </button>
        </div>

        <div className={styles.lastUpdated}>
          Last Updated: November 21, 2025
        </div>

        {/* Content Area */}
        <div className={styles.contentWrapper}>
          {/* === PRIVACY POLICY === */}
          {activeTab === "privacy" && (
            <article className={styles.prose}>
              <h2>1. Introduction</h2>
              <p>
                At <strong>Galaxydev</strong>, we value your privacy. This
                policy outlines how we collect, use, and protect your personal
                information when you visit our website or use our software
                services.
              </p>

              <h2>2. Information We Collect</h2>
              <ul className={styles.list}>
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, and company details when you fill out our
                  contact forms.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, and
                  device information collected via cookies to improve site
                  performance.
                </li>
                <li>
                  <strong>Project Data:</strong> Information specifically
                  related to the software projects we build for you.
                </li>
              </ul>

              <h2>3. How We Use Your Data</h2>
              <p>
                We do not sell your data to third parties. We use your
                information strictly to:
              </p>
              <div className={styles.highlightBox}>
                <FaLock className={styles.boxIcon} />
                <p>
                  Provide and maintain our services, communicate about project
                  milestones, and improve our website's user experience.
                </p>
              </div>

              <h2>4. Cookies & Tracking</h2>
              <p>
                We use cookies to analyze website traffic and personalize
                content. You can choose to disable cookies through your browser
                settings, though this may affect site functionality.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement industry-standard security measures (SSL
                encryption, secure servers) to protect your data from
                unauthorized access, alteration, or disclosure.
              </p>
            </article>
          )}

          {/* === TERMS OF SERVICE === */}
          {activeTab === "terms" && (
            <article className={styles.prose}>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services of{" "}
                <strong>Galaxydev</strong>, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>

              <h2>2. Intellectual Property (IP)</h2>
              <p>Unless otherwise stated in a specific client contract:</p>
              <ul className={styles.list}>
                <li>
                  <strong>Client Ownership:</strong> Upon full payment, all
                  custom code, designs, and assets created specifically for the
                  client belong to the client.
                </li>
                <li>
                  <strong>Galaxydev Rights:</strong> We retain the right to
                  reuse generic code snippets, libraries, and knowledge gained
                  that do not contain client-specific business logic or trade
                  secrets.
                </li>
              </ul>

              <h2>3. Payment & Invoicing</h2>
              <p>
                Project fees are outlined in individual proposals. Standard
                terms often require a 50% deposit before work begins, with the
                remaining balance due upon project completion or milestone
                delivery.
              </p>

              <h2>4. Limitation of Liability</h2>
              <div className={styles.highlightBox}>
                <FaFileContract className={styles.boxIcon} />
                <p>
                  Galaxydev shall not be liable for any indirect, incidental, or
                  consequential damages resulting from the use or inability to
                  use our software services.
                </p>
              </div>

              <h2>5. Project Termination</h2>
              <p>
                Either party may terminate a project with written notice. In
                such events, the client agrees to pay for all work completed up
                to the termination date.
              </p>
            </article>
          )}
        </div>

        {/* Footer Contact */}
        <section className={styles.contactFooter}>
          <p>Questions about these documents?</p>
          <a href="mailto:legal@galaxydev.pk">legal@galaxydev.pk</a>
        </section>
      </main>
    </>
  );
}
