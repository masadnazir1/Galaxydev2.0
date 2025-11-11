"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Button from "../../UI/Button/Button";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const toggleContactForm = () => setContactOpen(!contactOpen);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo + Description */}
        <div className={styles.footerColumn}>
          <div className={styles.logo}>
            <Image src="/logofull.png" width={150} height={50} alt="Logo" />
          </div>
          <p className={styles.footerDesc}>
            Delivering innovative tech solutions, custom software, and
            automation services to clients globally.
          </p>
          <div className={styles.socialIcons}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className={styles.footerColumn}>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#docs">Docs</a>
            </li>
            <li>
              <a href="#help">Help Center</a>
            </li>
            <li>
              <a href="#tutorials">Tutorials</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleContactForm}>
                Quick Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.footerColumn}>
          <h4>Subscribe to our Newsletter</h4>
          <p>
            Get the latest updates on our services, blogs, and tech insights.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className={styles.newsletterForm}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Contact Form Overlay */}
      {contactOpen && (
        <div className={styles.contactFormOverlay} onClick={toggleContactForm}>
          <div
            className={styles.contactForm}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
      )}

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Galaxydev.pk All rights reserved.</p>
        <div className={styles.footerLegal}>
          <a href="#terms">Terms of Service</a>
          <span>|</span>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
