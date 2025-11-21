"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaEnvelope, FaTimes } from "react-icons/fa";
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
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "FAQs", path: "/faqs" },
  ];

  useEffect(() => {
    // Scroll listener to toggle the sticky class
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    // Close sidebar on resize above mobile threshold
    const handleResize = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
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
      <nav className={`${styles.navbar} ${isScrolled ? styles.sticky : ""}`}>
        {/* Logo Link (Home) */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logofull.png"
            width={180}
            height={50}
            alt="GalaxyDev Home"
            priority={true}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={styles.navLinks}>
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.path}
                className={pathname === menu.path ? styles.activeMenu : ""}
                aria-current={pathname === menu.path ? "page" : undefined}
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" onClick={closeSidebar}>
              <Button>
                <FaEnvelope style={{ marginRight: "0.5rem" }} /> Contact Us
              </Button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className={styles.mobileMenuIcon}
          onClick={toggleSidebar}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isSidebarOpen}
        >
          <FaBars />
        </div>
      </nav>

      {/* Sidebar Overlay and Menu */}
      {isSidebarOpen && (
        <div className={styles.sidebarOverlay} onClick={closeSidebar}>
          <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
            <div className={styles.BrandWrapperMobile}>
              <Link
                href="/"
                onClick={closeSidebar}
                className={styles.logoMobile}
              >
                <Image
                  src="/logofull.png"
                  width={150}
                  height={45}
                  alt="GalaxyDev logo"
                />
              </Link>

              <button
                className={styles.closeBtn}
                onClick={toggleSidebar}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <ul className={styles.mobileLinks}>
              {menus.map((menu) => (
                <li key={menu.name} onClick={closeSidebar}>
                  <Link
                    href={menu.path}
                    className={pathname === menu.path ? styles.activeMenu : ""}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" onClick={closeSidebar}>
                  <Button style={{ width: "100%", marginTop: "1rem" }}>
                    Contact Us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
