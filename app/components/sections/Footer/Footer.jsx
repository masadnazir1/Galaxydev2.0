"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
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
    // Integrate API logic here
    console.log("Subscribed:", newsletterEmail);
    setNewsletterEmail("");
    alert("Thanks for subscribing!");
  };

  return (
    <footer className={styles.footer}>
      {/* Background element for visual depth */}
      <div className={styles.bgOverlay}></div>

      <div className={styles.footerTop}>
        {/* Column 1: Brand & Social */}
        <div className={styles.footerColumn}>
          <Link href="/" className={styles.logoLink}>
            {/* Ensure logo image exists in public folder, else use text fallback */}
            <Image
              src="/logofull.png"
              width={140}
              height={45}
              alt="GalaxyDev Logo"
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.footerDesc}>
            Delivering innovative tech solutions, custom software, and
            automation services to empower businesses globally.
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className={styles.footerColumn}>
          <h4>Company</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/careers">Careers / Join Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Legal Center</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources & Help */}
        <div className={styles.footerColumn}>
          <h4>Resources</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/blogs">Tech Blog</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs & Support</Link>
            </li>
            {/* Using button for modal action */}
            <li>
              <button onClick={toggleContactForm} className={styles.textBtn}>
                Quick Inquiry
              </button>
            </li>
            <li>
              <Link href="/sitemap.xml">Sitemap</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className={styles.footerColumn}>
          <h4>Stay Updated</h4>
          <p className={styles.newsletterText}>
            Get the latest tech trends and company updates directly in your
            inbox.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className={styles.newsletterForm}
          >
            <div className={styles.inputGroup}>
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

      {/* Quick Contact Modal Overlay */}
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
              <textarea placeholder="How can we help?" rows={4} required />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      )}

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} GalaxyDev.pk. All rights reserved.</p>
        </div>
        <div className={styles.footerLegal}>
          {/* Both link to Privacy Policy page where Tabs exist */}
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className={styles.separator}>•</span>
          <Link href="/privacy-policy">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
