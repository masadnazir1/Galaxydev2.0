"use client";

import { useRef, type ReactNode } from "react";
import { useInView, motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "primary" | "secondary";
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  background = "primary",
  id,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      className={`py-20 md:py-28 lg:py-32 ${
        background === "secondary" ? "bg-bg-secondary" : "bg-bg-primary"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
