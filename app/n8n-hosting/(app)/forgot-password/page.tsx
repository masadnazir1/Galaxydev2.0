"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CircularProgress,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Mail } from "lucide-react";
import { apiFetch } from "@/lib/api-client";
import { n8nLightTheme } from "@/lib/n8n-theme";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        const body = await res.json();
        router.push(`/n8n-hosting/reset-password?userId=${body.userId}`);
      } else {
        const body = await res.json();
        setError(body.message?.[0] || body.message || "Something went wrong");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={n8nLightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#F2F4F8",
          color: "#0F172A",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(38,147,255,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 40%, rgba(124,65,255,0.05) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="sm" sx={{ pt: { xs: 2, sm: 3 }, position: "relative", zIndex: 1 }}>
          <Link
            href="/n8n-hosting/login"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#64748B",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#0F172A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#64748B"; }}
          >
            <ArrowLeft size={16} /> Back to Sign In
          </Link>
        </Container>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: { xs: 4, sm: 6 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container maxWidth="sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #2693FF, #7C41FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <Mail size={22} color="#fff" />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    color: "#0F172A",
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  }}
                >
                  Reset Password
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#64748B",
                    fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                  }}
                >
                  Enter your email and we&apos;ll send you a reset code
                </Typography>
              </Box>

              <Box
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 2.5 } }}>
                    <TextField
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      error={!!error}
                      helperText={error}
                      fullWidth
                      autoFocus
                      slotProps={{
                        input: { startAdornment: <Mail size={18} style={{ color: "#94A3B8", marginRight: 10 }} /> },
                        formHelperText: { sx: { color: "#EF4444" } },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          background: "#F8F9FC",
                          "& fieldset": { borderColor: "#E2E8F0" },
                          "&:hover fieldset": { borderColor: "#CBD5E1" },
                          "&.Mui-focused fieldset": { borderColor: "#2693FF", borderWidth: 2 },
                        },
                        "& .MuiInputLabel-root": { color: "#94A3B8" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#2693FF" },
                        "& .MuiInputBase-input": { color: "#0F172A" },
                      }}
                    />

                    <motion.div whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: loading ? 1 : 0.98 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={18} sx={{ color: "#fff" }} /> : <ArrowRight size={18} />}
                        sx={{
                          py: 1.5,
                          mt: 1,
                          background: "linear-gradient(135deg, #2693FF, #7C41FF)",
                          "&:hover": {
                            background: "linear-gradient(135deg, #5BB5FF, #A67AFF)",
                          },
                        }}
                      >
                        {loading ? "Sending..." : "Send Reset Code"}
                      </Button>
                    </motion.div>
                  </Box>
                </form>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
