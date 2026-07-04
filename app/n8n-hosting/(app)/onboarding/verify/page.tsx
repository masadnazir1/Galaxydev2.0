"use client";

import { useState, useRef, useEffect, Suspense, type KeyboardEvent, type ClipboardEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Typography,
  Container,
  Button,
  CircularProgress,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useN8n } from "@/lib/n8n-context";
import { n8nLightTheme } from "@/lib/n8n-theme";
import { apiFetch } from "@/lib/api-client";

const OTP_LENGTH = 6;
const COUNTDOWN_SECONDS = 30;

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { onboarding } = useN8n();
  const email = onboarding?.email || searchParams.get("email") || "";
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(COUNTDOWN_SECONDS);
  const [resendDisabled, setResendDisabled] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!onboarding && !searchParams.get("email")) {
      router.replace("/n8n-hosting/onboarding");
    }
  }, [onboarding, router, searchParams]);

  useEffect(() => {
    if (resendCountdown <= 0) {
      setResendDisabled(false);
      return;
    }
    const timer = setInterval(() => {
      setResendCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCountdown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    setError("");
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const fullOtp = newOtp.join("");
    if (fullOtp.length === OTP_LENGTH) {
      verifyOtp(fullOtp);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const newOtp = pasted.split("").concat(Array(OTP_LENGTH - pasted.length).fill(""));
    setOtp(newOtp);
    setError("");
    const nextIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[pasted.length >= OTP_LENGTH ? OTP_LENGTH - 1 : pasted.length]?.focus();

    if (pasted.length === OTP_LENGTH) {
      verifyOtp(pasted);
    }
  };

  const verifyOtp = async (code: string) => {
    const userId = onboarding?.userId;
    if (!userId) {
      setError("Session expired. Please sign up again.");
      return;
    }
    setVerifying(true);
    setError("");
    try {
      const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, code }),
      });
      if (res.ok) {
        const body = await res.json();
        if (body.accessToken) {
          document.cookie = `accessToken=${body.accessToken}; path=/; max-age=86400; SameSite=Lax; Secure`;
        }
        setSuccess(true);
        setTimeout(() => {
          router.push("/n8n-hosting/dashboard");
        }, 1200);
      } else if (res.status === 400 || res.status === 409) {
        const body = await res.json();
        setError(body.message?.[0] || "Invalid verification code");
        setOtp(Array(OTP_LENGTH).fill(""));
        inputRefs.current[0]?.focus();
      } else {
        const body = await res.json();
        setError(body.message?.[0] || "Verification failed");
        setOtp(Array(OTP_LENGTH).fill(""));
        inputRefs.current[0]?.focus();
      }
    } catch {
      setError("Network error. Please try again.");
      setOtp(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
    } finally {
      setVerifying(false);
    }
  };

  const handleResend = () => {
    setResendDisabled(true);
    setResendCountdown(COUNTDOWN_SECONDS);
    setOtp(Array(OTP_LENGTH).fill(""));
    setError("");
    inputRefs.current[0]?.focus();
  };

  if (!onboarding && !searchParams.get("email")) return null;

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
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link
            href="/n8n-hosting/onboarding"
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
            <ArrowLeft size={16} /> Back
          </Link>
          <Link
            href="/n8n-hosting/login"
            style={{
              color: "#2693FF",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#5BB5FF"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#2693FF"; }}
          >
            Sign in
          </Link>
        </Box>
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
              <Typography
                variant="overline"
                sx={{
                  color: "#64748B",
                  letterSpacing: "0.1em",
                  fontSize: "0.75rem",
                  mb: 1,
                  display: "block",
                }}
              >
                Step 2 of 2
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: "#0F172A",
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                }}
              >
                Verify your email
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#64748B",
                  px: { xs: 1, sm: 0 },
                  overflowWrap: "break-word",
                  fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                }}
              >
                We sent a code to{" "}
                <Box component="span" sx={{ color: "#0F172A", fontWeight: 500 }}>
                  {email}
                </Box>
              </Typography>
            </Box>

            <Box
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 3,
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                textAlign: "center",
              }}
            >
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <Box sx={{ py: 4 }}>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle size={64} style={{ color: "#22C55E", margin: "0 auto 16px" }} />
                      </motion.div>
                      <Typography variant="h6" sx={{ color: "#22C55E", fontWeight: 600 }}>
                        Verified!
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5 }}>
                        Redirecting to your dashboard...
                      </Typography>
                    </Box>
                  </motion.div>
                ) : (
                  <motion.div key="input" exit={{ scale: 0.8, opacity: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: { xs: 0.5, sm: 1, md: 1.5 },
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      {otp.map((digit, i) => (
                        <motion.div
                          key={i}
                          animate={error ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                          transition={{ duration: 0.3 }}
                          style={{ position: "relative" }}
                        >
                          <input
                            ref={(el) => { inputRefs.current[i] = el; }}
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            onPaste={i === 0 ? handlePaste : undefined}
                            style={{
                              width: 52,
                              height: 56,
                              textAlign: "center",
                              fontSize: "1.25rem",
                              fontWeight: 600,
                              fontFamily: "monospace",
                              border: `2px solid ${error ? "#EF4444" : digit ? "#2693FF" : "#E2E8F0"}`,
                              borderRadius: 10,
                              background: error ? "rgba(239,68,68,0.04)" : "#F8F9FC",
                              color: "#0F172A",
                              outline: "none",
                              transition: "border-color 0.2s, box-shadow 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = "#2693FF";
                              e.target.style.boxShadow = "0 0 0 3px rgba(38,147,255,0.15)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = error ? "#EF4444" : digit ? "#2693FF" : "#E2E8F0";
                              e.target.style.boxShadow = "none";
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ marginBottom: 16 }}
                      >
                        <Typography variant="caption" sx={{ color: "#EF4444" }}>
                          {error}
                        </Typography>
                      </motion.div>
                    )}

                    <motion.div
                      whileHover={{ scale: verifying ? 1 : 1.02 }}
                      whileTap={{ scale: verifying ? 1 : 0.98 }}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={otp.join("").length < OTP_LENGTH || verifying}
                        onClick={() => verifyOtp(otp.join(""))}
                        endIcon={
                          verifying ? (
                            <CircularProgress size={18} sx={{ color: "#fff" }} />
                          ) : (
                            <ArrowRight size={18} />
                          )
                        }
                        sx={{
                          py: 1.5,
                          background: "linear-gradient(135deg, #2693FF, #7C41FF)",
                          "&:hover": {
                            background: "linear-gradient(135deg, #5BB5FF, #A67AFF)",
                          },
                        }}
                      >
                        {verifying ? "Verifying..." : "Verify"}
                      </Button>
                    </motion.div>

                    <Box sx={{ mt: 3, display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                      <Typography variant="body2" sx={{ color: "#64748B" }}>
                        Didn&apos;t get a code?
                      </Typography>
                      <Button
                        variant="text"
                        size="small"
                        disabled={resendDisabled}
                        onClick={handleResend}
                        sx={{
                          fontSize: "0.8125rem",
                          color: resendDisabled ? "#94A3B8" : "#2693FF",
                          minWidth: "auto",
                          p: 0,
                          "&:hover": {
                            color: resendDisabled ? "#94A3B8" : "#5BB5FF",
                            background: "none",
                          },
                        }}
                      >
                        Resend{resendDisabled ? ` (${resendCountdown}s)` : ""}
                      </Button>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
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

export default function VerifyPage() {
  return (
    <ThemeProvider theme={n8nLightTheme}>
      <CssBaseline />
      <Suspense fallback={null}>
        <VerifyContent />
      </Suspense>
    </ThemeProvider>
  );
}
