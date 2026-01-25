"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll));

      if (totalScroll > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circle configuration
  const radius = 20;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div
      className={`${styles.progressWrap} ${
        visible ? styles.activeProgress : ""
      }`}
      onClick={scrollToTop}
    >
      <svg
        className={styles.progressCircle}
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          className={styles.progressPath}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset:
              strokeDashoffset > 0 ? 307.919 - scrollProgress * 307.919 : 0,
            // Logic simplified: using pathLength=1 in CSS or manual approx.
            // Let's us pre-calculated path for M50,1 a49,49... which is ~307 circumference
          }}
        />
      </svg>
      <span className={styles.scrollIcon}>
        <FaArrowUp />
      </span>
    </div>
  );
}
