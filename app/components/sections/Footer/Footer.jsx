"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import Button from "../../UI/Button/Button";
import styles from "./Footer.module.css";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const toggleContactForm = (e) => {
    if (e) e.preventDefault();
    setContactOpen(!contactOpen);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", newsletterEmail);
    setNewsletterEmail("");
    alert("Thanks for subscribing!");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.blurCircle} />

      <div className={styles.container}>
        <div className={styles.footerTop}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logofull.png"
                width={160}
                height={50}
                alt="GalaxyDev Logo"
                className={styles.logoImg}
                priority
              />
            </Link>

            <p className={styles.brandDesc}>
              Empowering businesses with cutting-edge software solutions, cloud
              architecture, and digital transformation services.
            </p>

            <div className={styles.socialRow}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Links + Newsletter */}
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Legal</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/services">Web Development</Link>
                </li>
                <li>
                  <Link href="/services">Mobile Apps</Link>
                </li>
                <li>
                  <Link href="/services">Cloud Solutions</Link>
                </li>
                <li>
                  <Link href="/services">UI/UX Design</Link>
                </li>
                <li>
                  <Link href="/payment-solutions">Payment Gateway</Link>
                </li>
              </ul>
            </div>

            <div className={styles.newsletterColumn}>
              <h4>Stay Connected</h4>
              <p>Join our newsletter for the latest tech insights.</p>

              <form
                onSubmit={handleNewsletterSubmit}
                className={styles.newsForm}
              >
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Subscribe">
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} GalaxyDev.pk. All Rights Reserved.</p>

          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/privacy-policy">Terms of Service</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Quick Contact Modal */}
      {contactOpen && (
        <div className={styles.contactFormOverlay} onClick={toggleContactForm}>
          <div
            className={styles.contactForm}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3>Quick Inquiry</h3>
              <button onClick={toggleContactForm} aria-label="Close">
                <FaTimes />
              </button>
            </div>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Message" rows={4} required />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}
