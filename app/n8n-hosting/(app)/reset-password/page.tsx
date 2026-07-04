"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CircularProgress,
  IconButton,
  InputAdornment,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Lock, KeyRound, Eye, EyeOff } from "lucide-react";
import { apiFetch } from "@/lib/api-client";
import { n8nLightTheme } from "@/lib/n8n-theme";

function ResetContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId") || "";

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || !newPassword.trim() || !userId) return;
    setLoading(true);
    setError("");
    try {
      const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, code: code.trim(), newPassword }),
      });
      if (res.ok) {
        router.push("/n8n-hosting/login?reset=success");
      } else {
        const body = await res.json();
        setError(body.message?.[0] || body.message || "Failed to reset password");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
                <KeyRound size={22} color="#fff" />
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
                Enter Reset Code
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#64748B",
                  fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                }}
              >
                Check your email for the reset code and enter your new password
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
                    label="Reset Code"
                    value={code}
                    onChange={(e) => { setCode(e.target.value); setError(""); }}
                    error={!!error}
                    fullWidth
                    autoFocus
                    slotProps={{
                      input: { startAdornment: <KeyRound size={18} style={{ color: "#94A3B8", marginRight: 10 }} /> },
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
                  <TextField
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => { setNewPassword(e.target.value); setError(""); }}
                    error={!!error}
                    helperText={error}
                    fullWidth
                    slotProps={{
                      input: {
                        startAdornment: <InputAdornment position="start"><Lock size={18} style={{ color: "#94A3B8" }} /></InputAdornment>,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword((p) => !p)} edge="end" size="small" sx={{ color: "#94A3B8" }}>
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
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

                  {error && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
                      <Typography variant="caption" sx={{ color: "#EF4444", display: "block", textAlign: "center" }}>
                        {error}
                      </Typography>
                    </motion.div>
                  )}

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
                      {loading ? "Resetting..." : "Reset Password"}
                    </Button>
                  </motion.div>
                </Box>
              </form>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default function ResetPasswordPage() {
  return (
    <ThemeProvider theme={n8nLightTheme}>
      <CssBaseline />
      <Suspense fallback={null}>
        <ResetContent />
      </Suspense>
    </ThemeProvider>
  );
}
