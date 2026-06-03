"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient-outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold shadow-glow hover:scale-105 active:scale-95 transition-all duration-200",
  secondary:
    "border border-border-strong text-text-primary font-semibold hover:bg-bg-secondary transition-all duration-200",
  ghost:
    "text-text-secondary font-medium hover:bg-bg-tertiary transition-all duration-200",
  "gradient-outline":
    "gradient-border bg-transparent font-semibold text-text-primary hover:bg-bg-secondary transition-all duration-200",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-blue focus-visible:outline-offset-3 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
