// components/ui/PageHead/PageHead.jsx
"use client";
import clsx from "clsx";
import styles from "./PageHead.module.css";

export default function PageHead({
  title,
  subtitle,
  align = "left",
  height = "45vh",
  gradientFrom = "var(--primary-dark)",
  gradientTo = "var(--primary)",
  overlay = true,
  textColor = "#1e293b",
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
    "--pagehead-overlay": overlay ? "#ff99e9ff" : "transparent",
    "--pagehead-text": textColor,
  };

  // Determine background styles
  const isImageBg = Boolean(bgImage);

  const styleProps = {
    ...cssVars,
    height: cssVars["--pagehead-height"],
  };

  if (isImageBg) {
    styleProps.backgroundImage = `linear-gradient(to bottom right, var(--pagehead-gradient-from), var(--pagehead-gradient-to)), url(${bgImage})`;
    styleProps.backgroundSize = "cover";
    styleProps.backgroundPosition = "center";
  }

  return (
    <section
      className={clsx(styles.wrapper, className, {
        [styles.center]: align === "center",
        [styles.right]: align === "right",
        [styles.blur]: blur,
        [styles.animatedGradient]: !isImageBg, // Apply gradient if no image
      })}
      style={styleProps}
    >
      <div
        className={styles.overlay}
        style={{ background: cssVars["--pagehead-overlay"] }}
      />
      <div className={styles.content}>
        <h1 style={{ color: cssVars["--pagehead-text"] }}>{title}</h1>
        {subtitle && (
          <p style={{ color: cssVars["--pagehead-text"], opacity: 0.8 }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
