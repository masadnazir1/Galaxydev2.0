interface GradientOrbProps {
  color?: "blue" | "purple" | "magenta" | "mix";
  size?: "sm" | "md" | "lg";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  className?: string;
}

const colorMap: Record<string, string> = {
  blue: "bg-blue",
  purple: "bg-purple",
  magenta: "bg-magenta",
  mix: "bg-gradient-to-br from-blue/40 via-purple/40 to-magenta/40",
};

const sizeMap: Record<string, string> = {
  sm: "w-48 h-48 md:w-64 md:h-64",
  md: "w-72 h-72 md:w-96 md:h-96",
  lg: "w-96 h-96 md:w-[500px] md:h-[500px]",
};

const positionMap: Record<string, string> = {
  "top-left": "-top-24 -left-24",
  "top-right": "-top-24 -right-24",
  "bottom-left": "-bottom-24 -left-24",
  "bottom-right": "-bottom-24 -right-24",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export function GradientOrb({
  color = "mix",
  size = "lg",
  position = "center",
  className = "",
}: GradientOrbProps) {
  return (
    <div
      className={`absolute ${positionMap[position]} ${sizeMap[size]} ${colorMap[color]} rounded-full blur-[120px] opacity-15 pointer-events-none animate-float-slow ${className}`}
      aria-hidden="true"
    />
  );
}
