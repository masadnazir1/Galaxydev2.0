"use client";

import { createTheme } from "@mui/material/styles";

export const n8nDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2693FF",
      light: "#5BB5FF",
      dark: "#1A75CC",
    },
    secondary: {
      main: "#7C41FF",
      light: "#A67AFF",
      dark: "#5A2DB8",
    },
    background: {
      default: "#0A0A0F",
      paper: "#12121A",
    },
    text: {
      primary: "#F1F5F9",
      secondary: "#94A3B8",
    },
    divider: "rgba(255,255,255,0.06)",
    error: {
      main: "#EF4444",
    },
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#F59E0B",
    },
  },
  typography: {
    fontFamily: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
    h1: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 24px",
          fontSize: "0.9375rem",
        },
        contained: {
          background: "linear-gradient(135deg, #2693FF 0%, #7C41FF 100%)",
          boxShadow: "0 0 24px rgba(38, 147, 255, 0.25)",
          "&:hover": {
            background: "linear-gradient(135deg, #5BB5FF 0%, #A67AFF 100%)",
            boxShadow: "0 0 32px rgba(38, 147, 255, 0.4)",
          },
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.12)",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.04)",
          },
        },
        text: {
          "&:hover": {
            background: "rgba(255,255,255,0.04)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#12121A",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: "rgba(255,255,255,0.03)",
            borderRadius: 10,
            "& fieldset": {
              borderColor: "rgba(255,255,255,0.1)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255,255,255,0.2)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2693FF",
              borderWidth: 2,
            },
          },
          "& .MuiInputLabel-root": {
            color: "#64748B",
          },
          "& .MuiInputBase-input": {
            color: "#F1F5F9",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#0E0E18",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(10,10,15,0.8)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          background: "rgba(255,255,255,0.06)",
        },
        bar: {
          borderRadius: 4,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "#12121A",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            borderRadius: 12,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px !important",
          "&:before": { display: "none" },
          marginBottom: 8,
          "&.Mui-expanded": {
            margin: "0 0 8px 0",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "&.Mui-expanded": {
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableHead-root .MuiTableCell-head": {
            color: "#94A3B8",
            fontWeight: 600,
            fontSize: "0.8125rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          },
          "& .MuiTableCell-body": {
            color: "#F1F5F9",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#1E1E2A",
          borderRadius: 8,
          fontSize: "0.8125rem",
        },
      },
    },
  },
});

export const n8nLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2693FF",
    },
    secondary: {
      main: "#7C41FF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#334155",
    },
    divider: "#E2E8F0",
  },
  typography: {
    fontFamily: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
    h1: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Sora", ui-sans-serif, system-ui, sans-serif', fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, padding: "10px 24px" },
        contained: {
          background: "linear-gradient(135deg, #2693FF 0%, #7C41FF 100%)",
          "&:hover": { background: "linear-gradient(135deg, #5BB5FF 0%, #A67AFF 100%)" },
        },
      },
    },
  },
});
