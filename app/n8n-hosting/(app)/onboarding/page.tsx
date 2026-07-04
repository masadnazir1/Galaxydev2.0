"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CircularProgress,
  LinearProgress,
  IconButton,
  InputAdornment,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { ArrowLeft, ArrowRight, Check, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useN8n } from "@/lib/n8n-context";
import { n8nLightTheme } from "@/lib/n8n-theme";
import { apiFetch } from "@/lib/api-client";

const steps = [
  {
    id: "name",
    title: "Who are you?",
    hint: "Let's get to know you",
    icon: <User size={18} />,
  },
  {
    id: "email",
    title: "Your email",
    hint: "Just taking your email",
    icon: <Mail size={18} />,
  },
  {
    id: "password",
    title: "Secure it",
    hint: "Secure your environment",
    icon: <Lock size={18} />,
  },
];

const stepSchemas = [
  z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    company: z.string().optional(),
  }),
  z.object({
    email: z.string().email("Please enter a valid email address"),
  }),
  z.object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
];

type FormData = {
  fullName: string;
  company: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -200 : 200,
    opacity: 0,
  }),
};

const STEP_KEY = "n8n-onboarding-step";

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setOnboarding } = useN8n();

  const initialStep = (() => {
    const fromUrl = searchParams.get("step");
    if (fromUrl) {
      const parsed = parseInt(fromUrl, 10);
      if (parsed >= 0 && parsed < 3) return parsed;
    }
    const stored = typeof window !== "undefined" ? localStorage.getItem(STEP_KEY) : null;
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (parsed >= 0 && parsed < 3) return parsed;
    }
    return 0;
  })();

  const [step, setStep] = useState(initialStep);
  const [dir, setDir] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { register, handleSubmit, formState: { errors }, setError, clearErrors, getValues } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    localStorage.setItem(STEP_KEY, String(step));
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", String(step));
    router.replace(`/n8n-hosting/onboarding?${params.toString()}`, { scroll: false });
  }, [step, router, searchParams.toString()]);

  const validateStep = useCallback(async (s: number): Promise<boolean> => {
    clearErrors();
    const values = getValues();
    const schema = stepSchemas[s];

    let data: Record<string, unknown>;
    if (s === 0) data = { fullName: values.fullName, company: values.company };
    else if (s === 1) data = { email: values.email };
    else data = { password: values.password, confirmPassword: values.confirmPassword };

    const result = schema.safeParse(data);
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        setError(field as any, { message: issue.message });
      }
      return false;
    }
    return true;
  }, [getValues, setError, clearErrors]);

  const goNext = useCallback(async () => {
    const valid = await validateStep(step);
    if (!valid) return;
    if (step < 2) {
      setDir(1);
      setStep((s) => s + 1);
    }
  }, [step, validateStep]);

  const goBack = useCallback(() => {
    if (step === 0) return;
    setDir(-1);
    setStep((s) => s - 1);
  }, [step]);

  const onSubmit = useCallback(async () => {
    const valid = await validateStep(2);
    if (!valid) return;
    const values = getValues();
    setLoading(true);
    try {
      const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          companyName: values.company || "string",
        }),
      });
      if (res.status === 409) {
        const body = await res.json();
        setError("email", { message: body.message?.[0] || "Email already registered" });
        setStep(1);
        setDir(-1);
        return;
      }
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.message?.[0] || "Something went wrong");
      }
      const body = await res.json();
      setOnboarding({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        company: values.company,
        userId: body.userId,
      });
      router.push(`/n8n-hosting/onboarding/verify?email=${encodeURIComponent(values.email)}`);
    } catch (err) {
      setError("root", { message: err instanceof Error ? err.message : "Something went wrong" });
    } finally {
      setLoading(false);
    }
  }, [validateStep, getValues, setOnboarding, router, setError]);

  const progress = ((step + 1) / steps.length) * 100;

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
          <ArrowLeft size={16} /> Back
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  mb: 1.5,
                }}
              >
                {steps.map((s, i) => (
                  <Box key={s.id} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: i <= step
                          ? "linear-gradient(135deg, #2693FF, #7C41FF)"
                          : "#E2E8F0",
                        color: i <= step ? "#fff" : "#94A3B8",
                        transition: "all 0.4s ease",
                      }}
                    >
                      {i < step ? <Check size={14} /> : i + 1}
                    </Box>
                    {i < steps.length - 1 && (
                      <Box
                        sx={{
                          width: { xs: 24, sm: 40 },
                          height: 2,
                          borderRadius: 1,
                          background: i < step
                            ? "linear-gradient(90deg, #2693FF, #7C41FF)"
                            : "#E2E8F0",
                          transition: "background 0.4s ease",
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>

              <Typography
                variant="caption"
                sx={{ color: "#64748B", fontWeight: 500, letterSpacing: "0.05em" }}
              >
                Step {step + 1} of {steps.length}
              </Typography>

              <Box sx={{ mt: 2, mb: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 4,
                    borderRadius: 2,
                    maxWidth: 240,
                    mx: "auto",
                    bgcolor: "#E2E8F0",
                    "& .MuiLinearProgress-bar": {
                      background: "linear-gradient(90deg, #2693FF, #7C41FF)",
                      borderRadius: 2,
                    },
                  }}
                />
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
                {steps[step].title}
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  borderRadius: 8,
                  background: "rgba(38,147,255,0.08)",
                  color: "#2693FF",
                  fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                  fontWeight: 500,
                }}
              >
                {steps[step].icon}
                {steps[step].hint}
              </Box>
            </Box>

            <Box
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: 3,
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
              }}
            >
              <form onSubmit={handleSubmit(step < 2 ? goNext : onSubmit)}>
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={step}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 2.5 } }}>
                      {step === 0 && (
                        <>
                          <TextField
                            label="Full Name"
                            {...register("fullName")}
                            error={!!errors.fullName}
                            helperText={errors.fullName?.message}
                            fullWidth
                            autoFocus
                            slotProps={{ formHelperText: { sx: { color: "#EF4444" } } }}
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
                            label="Company / Workspace (optional)"
                            {...register("company")}
                            fullWidth
                            slotProps={{ formHelperText: { sx: { color: "#EF4444" } } }}
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
                        </>
                      )}
                      {step === 1 && (
                        <TextField
                          label="Email"
                          type="email"
                          {...register("email")}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          fullWidth
                          autoFocus
                          slotProps={{ formHelperText: { sx: { color: "#EF4444" } } }}
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
                      )}
                      {step === 2 && (
                        <>
                          <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            fullWidth
                            autoFocus
                            slotProps={{
                              input: {
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
                          <TextField
                            label="Confirm Password"
                            type={showConfirm ? "text" : "password"}
                            {...register("confirmPassword")}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                            fullWidth
                            slotProps={{
                              input: {
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton onClick={() => setShowConfirm((p) => !p)} edge="end" size="small" sx={{ color: "#94A3B8" }}>
                                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
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
                        </>
                      )}
                    </Box>
                  </motion.div>
                </AnimatePresence>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    mt: { xs: 2.5, sm: 3 },
                    flexDirection: { xs: "column-reverse", sm: "row" },
                  }}
                >
                  {step > 0 && (
                    <Button
                      type="button"
                      variant="outlined"
                      fullWidth
                      disabled={loading}
                      onClick={goBack}
                      startIcon={<ArrowLeft size={16} />}
                      sx={{
                        py: 1.25,
                        borderColor: "#E2E8F0",
                        color: "#64748B",
                        "&:hover": { borderColor: "#CBD5E1", background: "#F8F9FC" },
                        flex: { sm: 1 },
                      }}
                    >
                      Back
                    </Button>
                  )}
                  <motion.div
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    style={{ flex: 1, width: "100%" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      disabled={loading}
                      endIcon={
                        loading ? (
                          <CircularProgress size={18} sx={{ color: "#fff" }} />
                        ) : (
                          <ArrowRight size={18} />
                        )
                      }
                      sx={{
                        py: 1.25,
                        background: "linear-gradient(135deg, #2693FF, #7C41FF)",
                        "&:hover": {
                          background: "linear-gradient(135deg, #5BB5FF, #A67AFF)",
                        },
                      }}
                    >
                      {loading
                        ? "Creating account..."
                        : step < 2
                        ? "Continue"
                        : "Create Account"}
                    </Button>
                  </motion.div>
                </Box>
              </form>
            </Box>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#94A3B8", display: "block", textAlign: "center", mt: { xs: 2.5, sm: 3 } }}
              >
                By continuing, you agree to our Terms of Service and Privacy Policy.
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#64748B", textAlign: "center", mt: 2 }}
              >
                Already have an account?{" "}
                <Link
                  href="/n8n-hosting/login"
                  style={{
                    color: "#2693FF",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#5BB5FF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#2693FF"; }}
                >
                  Sign in
                </Link>
              </Typography>
            </motion.div>
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

export default function OnboardingPage() {
  return (
    <ThemeProvider theme={n8nLightTheme}>
      <CssBaseline />
      <Suspense fallback={null}>
        <OnboardingContent />
      </Suspense>
    </ThemeProvider>
  );
}
