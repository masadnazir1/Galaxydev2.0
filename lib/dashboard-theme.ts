export const c = (dark: boolean) => ({
  textPrimary: dark ? "#F1F5F9" : "#0F172A",
  textSecondary: dark ? "#94A3B8" : "#475569",
  textMuted: dark ? "#64748B" : "#64748B",
  border: dark ? "rgba(255,255,255,0.06)" : "#E2E8F0",
  cardBg: dark ? "rgba(255,255,255,0.03)" : "#F8F9FC",
  cardBorder: dark ? "rgba(255,255,255,0.06)" : "#E2E8F0",
  hoverBg: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
  iconBg: (color: string) => dark ? `${color}1A` : `${color}0D`,
  chipBg: (color: string) => dark ? `${color}1A` : `${color}0D`,
  chipBorder: (color: string) => dark ? `${color}30` : `${color}20`,
});
