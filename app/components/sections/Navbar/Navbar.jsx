"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../../UI/Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  // Define menu structure with paths matching the app directory
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Payments", path: "/payment-solutions" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "FAQs", path: "/faqs" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  useEffect(() => {
    // Scroll listener to toggle the sticky class
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Close sidebar on resize above mobile threshold
    const handleResize = () => {
      if (window.innerWidth > 1024 && isSidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header className={`${styles.navbar} ${isScrolled ? styles.sticky : ""}`}>
        <div className={styles.navContainer}>
          {/* Logo Link (Home) */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logofull.png"
              width={160}
              height={45}
              alt="GalaxyDev Home"
              priority={true}
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navLinks}>
              {menus.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.path}
                    className={`${styles.navLink} ${
                      pathname === menu.path ? styles.activeMenu : ""
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Call to Action & Mobile Toggle */}
          <div className={styles.navActions}>
            <div className={styles.ctaWrapper}>
              <Link href="/contact">
                <Button className={styles.navButton}>Let's Talk</Button>
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button
              className={styles.mobileMenuBtn}
              onClick={toggleSidebar}
              aria-label="Toggle navigation menu"
              aria-expanded={isSidebarOpen}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`${styles.mobileOverlay} ${
          isSidebarOpen ? styles.open : ""
        }`}
        onClick={closeSidebar}
      >
        <div
          className={styles.mobileMenuContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileHeader}>
            <Link href="/" onClick={closeSidebar} className={styles.logoMobile}>
              <Image
                src="/logofull.png"
                width={140}
                height={40}
                alt="GalaxyDev logo"
              />
            </Link>
            <button
              className={styles.closeBtn}
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <div className={styles.mobileContent}>
            <ul className={styles.mobileLinks}>
              {menus.map((menu, index) => (
                <li
                  key={menu.name}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <Link
                    href={menu.path}
                    onClick={closeSidebar}
                    className={`${styles.mobileLink} ${
                      pathname === menu.path ? styles.activeMobile : ""
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.mobileFooter}>
              <Link href="/contact" onClick={closeSidebar}>
                <Button className={styles.mobileCta}>Let's Talk</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
