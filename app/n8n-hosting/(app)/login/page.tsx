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
import { ArrowRight, ArrowLeft, Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useN8n } from "@/lib/n8n-context";
import { n8nLightTheme } from "@/lib/n8n-theme";
import { apiFetch } from "@/lib/api-client";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

function decodeJwtPayload(token: string) {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetSuccess = searchParams.get("reset") === "success";
  const { setOnboarding } = useN8n();
  const [loading, setLoading] = useState(false);
  const [rootError, setRootError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: LoginForm) => {
    setLoading(true);
    setRootError("");
    try {
      const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email, password: values.password }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.message?.[0] || body.message || "Invalid email or password");
      }

      const body = await res.json();

      if (body.accessToken) {
        document.cookie = `accessToken=${body.accessToken}; path=/; max-age=86400; SameSite=Lax; Secure`;
      }

      const payload = decodeJwtPayload(body.accessToken);
      const userName = values.email.split("@")[0];

      setOnboarding({
        fullName: userName,
        email: values.email,
        password: values.password,
        userId: payload?.sub || "",
      });

      router.push("/n8n-hosting/dashboard");
    } catch (err) {
      setRootError(err instanceof Error ? err.message : "Something went wrong");
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
            "radial-gradient(ellipse at 20% 0%, rgba(38,147,255,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 40%, rgba(124,65,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(38,147,255,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "gradient-drift 25s ease-in-out infinite alternate",
        },
      }}
    >
      <Container maxWidth="sm" sx={{ pt: { xs: 2, sm: 3 }, position: "relative", zIndex: 1 }}>
        <Link
          href="/n8n-hosting"
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
          <ArrowLeft size={16} /> Back to Home
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
                <LogIn size={22} color="#fff" />
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
                Welcome back
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#64748B",
                  fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                }}
              >
                Sign in to your n8n Hosting account
              </Typography>
            </Box>

            {resetSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  p: 2, mb: 3, borderRadius: 2,
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" sx={{ color: "#22C55E", fontWeight: 500 }}>
                  Password reset successful. Sign in with your new password.
                </Typography>
              </motion.div>
            )}

            <Box
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 3,
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 2.5 } }}>
                  <TextField
                    label="Email"
                    type="email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
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
                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
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
                  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: -1 }}>
                    <Link
                      href="/n8n-hosting/forgot-password"
                      style={{
                        color: "#2693FF",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "0.8125rem",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#5BB5FF"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#2693FF"; }}
                    >
                      Forgot password?
                    </Link>
                  </Box>

                  {rootError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Typography variant="caption" sx={{ color: "#EF4444", display: "block", textAlign: "center" }}>
                        {rootError}
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
                      {loading ? "Signing in..." : "Sign In"}
                    </Button>
                  </motion.div>
                </Box>
              </form>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "#64748B" }}>
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/n8n-hosting/onboarding"
                    style={{
                      color: "#2693FF",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#5BB5FF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#2693FF"; }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <style>{`
        @keyframes gradient-drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(2%, 1%) rotate(1deg); }
          66% { transform: translate(-1%, -1%) rotate(-0.5deg); }
          100% { transform: translate(1%, -2%) rotate(0.5deg); }
        }
      `}</style>
    </Box>
  );
}

export default function LoginPage() {
  return (
    <ThemeProvider theme={n8nLightTheme}>
      <CssBaseline />
      <Suspense fallback={null}>
        <LoginContent />
      </Suspense>
    </ThemeProvider>
  );
}
