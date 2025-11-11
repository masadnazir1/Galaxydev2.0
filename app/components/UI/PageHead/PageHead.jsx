// components/ui/PageHead/PageHead.jsx
"use client";
import React from "react";
import clsx from "clsx";
import styles from "./PageHead.module.css";

export default function PageHead({
  title,
  subtitle,
  align = "left",
  height = "40vh",
  gradientFrom = "var(--primary-dark)",
  gradientTo = "var(--primary)",
  overlay = true,
  overlayColor = "rgba(0,0,0,0.35)",
  textColor = "#fff",
  bgImage,
  blur = false,
  className,
  children,
}) {
  const cssVars = {
    "--pagehead-height":
      typeof height === "number" ? `${height}px` : String(height),
    "--pagehead-gradient-from": gradientFrom,
    "--pagehead-gradient-to": gradientTo,
    "--pagehead-overlay": overlay ? overlayColor : "transparent",
    "--pagehead-text": textColor,
  };

  const backgroundValue = bgImage
    ? `linear-gradient(to bottom right, var(--pagehead-gradient-from), var(--pagehead-gradient-to)), url(${bgImage})`
    : `linear-gradient(to bottom right, var(--pagehead-gradient-from), var(--pagehead-gradient-to))`;

  return (
    <section
      className={clsx(styles.wrapper, className, {
        [styles.center]: align === "center",
        [styles.right]: align === "right",
        [styles.blur]: blur,
      })}
      style={{
        ...cssVars,
        backgroundImage: backgroundValue,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: cssVars["--pagehead-height"],
      }}
    >
      <div
        className={styles.overlay}
        style={{ background: cssVars["--pagehead-overlay"] }}
      />
      <div className={styles.content}>
        <h1 style={{ color: cssVars["--pagehead-text"] }}>{title}</h1>
        {subtitle && <p style={{ color: "#ffff" }}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
