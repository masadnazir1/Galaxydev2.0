import type { ReactNode } from "react";

type BadgeVariant = "gradient" | "muted" | "blue" | "purple" | "magenta";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  gradient: "bg-gradient-to-r from-blue via-purple to-magenta text-white",
  muted: "bg-bg-tertiary text-text-muted",
  blue: "bg-blue/10 text-blue",
  purple: "bg-purple/10 text-purple",
  magenta: "bg-magenta/10 text-magenta",
};

export function Badge({ children, variant = "gradient", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
