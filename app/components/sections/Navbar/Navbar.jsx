"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Button from "../../UI/Button/Button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

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

  const closeSidebar = (e) => {
    if (e.target === e.currentTarget) setSidebarOpen(false);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setSidebarOpen(false);
    const pagelink = menu?.toLowerCase();
    router.replace(pagelink);
  };

  const menus = ["Home", "About", "Services", "Blogs"];

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.sticky : ""} ${
          isSidebarOpen && window.innerWidth <= 768 ? styles.hiddenNav : ""
        }`}
      >
        <div className={styles.logo}>
          <Image
            src="/logofull.png"
            width={200}
            height={60}
            alt="Galaxydev logo"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        <ul className={styles.navLinks}>
          {menus.map((menu) => (
            <li
              key={menu}
              className={activeMenu === menu ? styles.activeMenu : ""}
              onClick={() => handleMenuClick(menu)}
            >
              {menu}
            </li>
          ))}
          <li>
            <Button onClick={() => handleMenuClick("contact")}>
              Contact Us
            </Button>
          </li>
        </ul>

        <div className={styles.mobileMenuIcon} onClick={toggleSidebar}>
          &#9776;
        </div>
      </nav>

      {isSidebarOpen && window.innerWidth <= 768 && (
        <div className={styles.sidebarOverlay} onClick={closeSidebar}>
          <div className={styles.sidebar}>
            <div className={styles.BrandWrapperMoile}>
              <Image
                src="/logofull.png"
                width={200}
                height={60}
                alt="Galaxydev logo"
                className={styles.logoMobile}
              />

              <Button
                style={{ width: "30px", padding: "10px" }}
                variant="danger"
                onClick={toggleSidebar}
              >
                x
              </Button>
            </div>
            <ul>
              {menus.map((menu) => (
                <li key={menu} onClick={() => handleMenuClick(menu)}>
                  {menu}
                </li>
              ))}
              <li>
                <Button onClick={() => handleMenuClick("contact")}>
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
