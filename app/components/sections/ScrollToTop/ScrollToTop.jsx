"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.scrollButton} ${visible ? styles.show : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
