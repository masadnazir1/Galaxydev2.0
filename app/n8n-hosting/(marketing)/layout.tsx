"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { n8nLightTheme } from "@/lib/n8n-theme";

export default function N8nMarketingLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={n8nLightTheme}>
      {children}
    </ThemeProvider>
  );
}
