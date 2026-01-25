"use client";

import {
  FaClock,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Button from "../components/UI/Button/Button";
import PageHead from "../components/UI/PageHead/PageHead";
import styles from "./Contact.module.css";

export default function Contact() {
  // SEO: Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Galaxydev",
    image: "https://galaxydev.pk/assets/images/logo.png",
    telephone: "+92 300 1234567",
    email: "info@galaxydev.pk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Shahrah-e-Faisal",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    url: "https://galaxydev.pk/contact",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHead
        title="Contact Us"
        subtitle="Ready to start your digital transformation? Let's discuss your next big project."
        align="center"
        overlay={true}
        gradientFrom="transparent"
        gradientTo="var(--background-light)"
      />

      <main className={styles.contactPage}>
        <div className={styles.layoutGrid}>
          {/* Left Column: Contact Form */}
          <section className={styles.formSection}>
            <div className={styles.formHeader}>
              <h1 className={styles.sectionTitle}>Send us a Message</h1>
              <p className={styles.sectionText}>
                Fill out the form below for inquiries about custom software,
                mobile apps, or IT consultancy. We typically reply within 24
                hours.
              </p>
            </div>

            <form className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+92 300..."
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <select id="subject" className={styles.input}>
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Career Opportunity</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  required
                  className={styles.textarea}
                ></textarea>
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </section>

          {/* Right Column: Contact Info & Map */}
          <aside className={styles.infoSidebar}>
            {/* Info Cards */}
            <div className={styles.infoWrapper}>
              <h2 className={styles.sidebarTitle}>Contact Information</h2>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+92 300 1234567</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>info@galaxydev.pk</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Visit Us</h3>
                  <p>Techno City, Karachi, Pakistan</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <FaClock />
                </div>
                <div>
                  <h3>Working Hours</h3>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Social Proof / Quick Links */}
              <div className={styles.socialLinks}>
                <a href="#" aria-label="WhatsApp" className={styles.socialIcon}>
                  <FaWhatsapp />
                </a>
                <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6302710465!2d66.59499551722738!3d25.19338953698835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f4455504035!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Galaxydev Office Location"
              ></iframe>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
