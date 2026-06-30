"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { n8nDarkTheme } from "@/lib/n8n-theme";
import { N8nProvider } from "@/lib/n8n-context";
import { motion, AnimatePresence } from "framer-motion";

export default function N8nHostingLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={n8nDarkTheme}>
      <CssBaseline />
      <N8nProvider>
        <div className="min-h-screen" style={{ background: "#0A0A0F" }}>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </N8nProvider>
    </ThemeProvider>
  );
}
