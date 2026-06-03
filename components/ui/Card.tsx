"use client";

import { type ReactNode, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
  variant?: "default" | "bento" | "testimonial";
}

const variantClasses: Record<string, string> = {
  default:
    "bg-bg-card border border-border-default rounded-md shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250",
  bento:
    "bg-bg-card border border-border-default rounded-lg shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-250",
  testimonial:
    "bg-bg-card border border-border-default rounded-md shadow-sm",
};

export function Card({
  children,
  hoverable = true,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`relative overflow-hidden group ${variantClasses[variant]} ${
        hoverable ? "hover:-translate-y-0.5" : ""
      } ${className}`}
      {...props}
    >
      {hoverable && (
        <div
          className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue via-purple to-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
