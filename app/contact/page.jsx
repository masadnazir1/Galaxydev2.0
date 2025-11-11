"use client";

import styles from "./Contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../components/UI/Button/Button";
import Image from "next/image";
import PageHead from "../components/UI/PageHead/PageHead";

export default function Contact() {
  return (
    <>
      <PageHead
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project or inquiries"
        align="center"
        height="40vh"
        overlay={true}
        overlayColor="rgba(191, 93, 230, 0.49)"
        gradientFrom="transparent"
        gradientTo="transparent"
        bgImage="/assets/images/headbg.webp"
      />
      <main className={styles.contactPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Contact Galaxydev</h1>
            <p>
              Have a project in mind or need technical assistance? Reach out to
              our team and let's create innovative solutions together.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/assets/images/contact-hero.webp"
              width={500}
              height={400}
              alt="Contact Galaxydev"
            />
          </div>
        </section>

        {/* Contact Info */}
        <section className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <FaPhoneAlt className={styles.icon} />
            <h3>Phone</h3>
            <p>+92 300 1234567</p>
          </div>
          <div className={styles.infoCard}>
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <p>info@galaxydev.pk</p>
          </div>
          <div className={styles.infoCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Address</h3>
            <p>Karachi, Pakistan</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className={styles.contactFormSection}>
          <h2>Send Us a Message</h2>
          <p>
            Fill out the form below and our team will get back to you shortly.
          </p>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows={6} required></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </section>

        {/* Map */}
        <section className={styles.mapSection}>
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890!2d67.001234567!3d24.86012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ed123456789%3A0x123456789abcdef!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "var(--radius-lg)" }}
            allowFullScreen=""
            loading="lazy"
            title="Galaxydev Location"
          ></iframe>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2>Let's Build Something Amazing</h2>
          <p>
            Contact us today and turn your ideas into reality with Galaxydev.
          </p>
          <Button>Get In Touch</Button>
        </section>
      </main>
    </>
  );
}
