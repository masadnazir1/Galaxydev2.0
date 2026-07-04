"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Rocket,
  Workflow,
  Shield,
  Globe,
  CopyCheck,
  RefreshCw,
  Server,
  ChevronDown,
  Cpu,
  Clock,
  CheckCircle,
  Terminal,
  Menu,
  X,
} from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div variants={fadeSlideUp}>
      <Card
        sx={{
          p: { xs: 2.5, sm: 3.5 },
          height: "100%",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "rgba(38, 147, 255, 0.3)",
            transform: "translateY(-4px)",
            boxShadow: "0 8px 40px rgba(38, 147, 255, 0.1)",
          },
        }}
      >
        <Box sx={{ color: "#2693FF", mb: 1.5 }}>{icon}</Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, color: "#0F172A", fontSize: { xs: "0.95rem", sm: "1rem" } }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6, fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}>
          {description}
        </Typography>
      </Card>
    </motion.div>
  );
}

export default function N8nLandingPage() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Navbar */}
      <Box
        component="nav"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.85)",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: { xs: 1.25, sm: 1.5 } }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1.5,
                  background: "linear-gradient(135deg, #2693FF, #7C41FF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                N
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#0F172A", fontSize: { xs: "1rem", sm: "1.1rem" }, whiteSpace: "nowrap" }}>
                n8n Hosting
              </Typography>
            </Link>

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: "#64748B",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    padding: "6px 14px",
                    borderRadius: 8,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#0F172A";
                    e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#64748B";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <Button
                variant="text"
                size="small"
                onClick={() => router.push("/n8n-hosting/login")}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  px: 2,
                  py: 0.75,
                  fontSize: "0.8125rem",
                  color: "#64748B",
                  fontWeight: 500,
                  "&:hover": { color: "#0F172A", background: "rgba(0,0,0,0.04)" },
                }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => router.push("/n8n-hosting/onboarding")}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  px: 2.5,
                  py: 0.75,
                  fontSize: "0.8125rem",
                }}
              >
                Get Started
              </Button>
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ display: { md: "none" }, color: "#64748B" }}
              >
                <Menu size={22} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

    <Box
      sx={{
        bgcolor: "#F2F4F8",
        color: "#0F172A",
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(38,147,255,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(124,65,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 50% 70%, rgba(38,147,255,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "gradient-drift 25s ease-in-out infinite alternate",
        },
      }}
    >

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: 280, background: "#fff" } }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py: 1.5, borderBottom: "1px solid #E2E8F0" }}>
          <Typography sx={{ fontWeight: 700, color: "#0F172A" }}>Menu</Typography>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "#64748B" }}>
            <X size={20} />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  setMobileOpen(false);
                  router.push(link.href);
                }}
                sx={{ px: 3, py: 1.5 }}
              >
                <Typography variant="body2" sx={{ fontSize: "0.9375rem", color: "#334155" }}>
                  {link.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ px: 2, pb: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => {
              setMobileOpen(false);
              router.push("/n8n-hosting/login");
            }}
            sx={{ py: 1.25, mb: 1, color: "#0F172A", borderColor: "#E2E8F0" }}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              setMobileOpen(false);
              router.push("/n8n-hosting/onboarding");
            }}
            sx={{ py: 1.25 }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>

      {/* ===== HERO ===== */}
      <Box
        id="hero"
        sx={{ position: "relative", pt: { xs: 6, sm: 8, md: 12 }, pb: { xs: 8, sm: 10, md: 16 } }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "400px", sm: "600px" },
            height: { xs: "400px", sm: "600px" },
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(38,147,255,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 5, sm: 6 },
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: { md: "0 0 58.333%" }, maxWidth: { md: "58.333%" }, width: "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem", lg: "3.5rem" },
                    lineHeight: 1.15,
                    mb: 2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Your own n8n instance,{" "}
                  <Box component="span" sx={{ background: "linear-gradient(90deg, #2693FF, #7C41FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    live in 60 seconds
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#64748B",
                    fontWeight: 400,
                    fontSize: { xs: "0.9375rem", sm: "1.05rem", md: "1.1rem" },
                    maxWidth: 540,
                    mb: { xs: 3, sm: 4 },
                    lineHeight: 1.7,
                  }}
                >
                  Deploy your own fully managed n8n instance with one click. SSL, subdomain, backups —
                  everything included. No DevOps required.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
                  <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={() => router.push("/n8n-hosting/onboarding")}
                        endIcon={<ArrowRight size={18} />}
                        sx={{ px: 4, py: 1.5, fontSize: { xs: "0.9375rem", sm: "1rem" }, whiteSpace: "nowrap" }}
                      >
                        Get Started &mdash; It&apos;s Free
                      </Button>
                    </motion.div>
                  </Box>
                  <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      sx={{ px: 4, py: 1.5, fontSize: { xs: "0.9375rem", sm: "1rem" }, whiteSpace: { xs: "normal", sm: "nowrap" } }}
                      onClick={() => {
                        const el = document.getElementById("how-it-works");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      See How It Works
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1.5, sm: 3 },
                    mt: 4,
                    color: "#64748B",
                    "& svg": { color: "#22C55E", flexShrink: 0 },
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}>
                    <CheckCircle size={16} /> No credit card
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}>
                    <CheckCircle size={16} /> 3-day free trial
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}>
                    <CheckCircle size={16} /> Cancel anytime
                  </Box>
                </Box>
              </motion.div>
            </Box>
            <Box
              sx={{
                flex: { md: "0 0 41.666%" },
                maxWidth: { md: "41.666%" },
                width: "100%",
                display: { xs: "none", sm: "block" },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <Card
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    border: "1px solid rgba(38,147,255,0.15)",
                    boxShadow: "0 0 60px rgba(38,147,255,0.08)",
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Terminal size={16} style={{ color: "#2693FF" }} />
                    <Typography variant="caption" sx={{ color: "#64748B", fontFamily: "monospace" }}>
                      Deployment log
                    </Typography>
                  </Box>
                  {[
                    { text: "Provisioning container...", done: true },
                    { text: "Configuring n8n...", done: true },
                    { text: "Issuing SSL certificate...", done: true },
                    { text: "Setting up subdomain...", done: true },
                    { text: "Deployment complete!", done: true, highlight: true },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "4px 0",
                        fontFamily: "monospace",
                        fontSize: "0.8125rem",
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: line.done ? "#22C55E" : "#64748B",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "monospace",
                          color: line.highlight ? "#22C55E" : "#94A3B8",
                          fontWeight: line.highlight ? 600 : 400,
                          fontSize: { xs: "0.7rem", sm: "0.75rem" },
                        }}
                      >
                        {line.text}
                      </Typography>
                    </motion.div>
                  ))}
                  <Box
                    sx={{
                      mt: 2,
                      pt: 2,
                      borderTop: "1px solid #E2E8F0",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#22C55E",
                        boxShadow: "0 0 8px rgba(34,197,94,0.5)",
                        animation: "pulse 2s infinite",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#22C55E",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        fontSize: { xs: "0.65rem", sm: "0.75rem" },
                        lineHeight: 1.3,
                      }}
                    >
                      n8n instance running at my-workspace-n8n.galaxydev.pk
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ===== HOW IT WORKS ===== */}
      <Box id="how-it-works" sx={{ py: { xs: 6, sm: 8, md: 14 }, borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <motion.div variants={fadeSlideUp}>
              <Typography
                variant="overline"
                sx={{
                  color: "#2693FF",
                  letterSpacing: "0.15em",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  mb: 1,
                  display: "block",
                }}
              >
                How it works
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
                  mb: { xs: 4, sm: 6 },
                  maxWidth: 500,
                }}
              >
                From zero to automating in minutes
              </Typography>
            </motion.div>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {[
                { icon: <Zap size={24} />, title: "Sign Up", desc: "Create your account in seconds. No credit card needed for your 3-day trial." },
                { icon: <Rocket size={24} />, title: "Deploy", desc: "Choose a subdomain and we provision your n8n instance with SSL and everything." },
                { icon: <Workflow size={24} />, title: "Automate", desc: "Start building workflows with n8n's powerful automation toolkit immediately." },
              ].map((step, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                  <motion.div variants={fadeSlideUp}>
                    <Card
                      sx={{
                        p: { xs: 3, sm: 4 },
                        textAlign: "center",
                        height: "100%",
                        "&:hover": { borderColor: "rgba(38,147,255,0.2)" },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 48, sm: 56 },
                          height: { xs: 48, sm: 56 },
                          mx: "auto",
                          mb: 2,
                          borderRadius: 2.5,
                          background: "rgba(38,147,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2693FF",
                        }}
                      >
                        {step.icon}
                      </Box>
                      <Typography variant="h6" sx={{ mb: 0.75, fontWeight: 600, fontSize: { xs: "1rem", sm: "1.125rem" } }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#64748B", fontSize: { xs: "0.8125rem", sm: "0.875rem" }, px: { xs: 0, sm: 1 } }}>
                        {step.desc}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ===== PRICING ===== */}
      <Box id="pricing" sx={{ py: { xs: 6, sm: 8, md: 14 }, borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <ScrollReveal>
            <motion.div variants={fadeSlideUp}>
              <Typography
                variant="overline"
                sx={{
                  color: "#2693FF",
                  letterSpacing: "0.15em",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  mb: 1,
                  display: "block",
                }}
              >
                Pricing
              </Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" }, mb: 1.5 }}>
                Simple, transparent pricing
              </Typography>
              <Typography variant="body1" sx={{ color: "#64748B", mb: { xs: 4, sm: 5 }, maxWidth: 480, mx: "auto", fontSize: { xs: "0.875rem", sm: "1rem" } }}>
                Choose the right plan for your needs. Start with a free 3-day trial.
              </Typography>
            </motion.div>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 2.5, sm: 3 },
                justifyContent: "center",
                alignItems: "stretch",
              }}
            >
              <Box sx={{ flex: { md: "0 0 calc(50% - 12px)" }, maxWidth: { md: 480 }, width: "100%", mx: { xs: "auto", md: 0 } }}>
                <motion.div variants={fadeSlideUp} style={{ height: "100%" }}>
                  <Card
                    sx={{
                      p: { xs: 3, sm: 4, md: 5 },
                      textAlign: "center",
                      height: "100%",
                      position: "relative",
                      border: "1px solid rgba(38,147,255,0.2)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: -1,
                        borderRadius: 17,
                        background: "linear-gradient(135deg, rgba(38,147,255,0.3), rgba(124,65,255,0.3))",
                        zIndex: -1,
                        animation: "pulse-glow 3s ease-in-out infinite",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        px: 2,
                        py: 0.5,
                        borderRadius: 6,
                        background: "rgba(38,147,255,0.1)",
                        color: "#2693FF",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        mb: 2.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Starter
                    </Box>
                    <Box sx={{ mb: 2.5 }}>
                      <Box component="span" sx={{ fontSize: { xs: "2.5rem", sm: "3rem" }, fontWeight: 700 }}>
                        Rs 100
                      </Box>
                      <Box component="span" sx={{ color: "#64748B" }}>/month</Box>
                    </Box>
                    <Box sx={{ textAlign: "left", mb: 3 }}>
                      {[
                        "1 fully managed n8n instance",
                        "SSL certificate (auto-renewed)",
                        "Subdomain (your-name-n8n.galaxydev.pk)",
                        "Daily automated backups",
                        "99.9% uptime guarantee",
                        "Community support",
                        "Cancel anytime",
                      ].map((feature, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 0.6 }}>
                          <CheckCircle size={15} style={{ color: "#22C55E", flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: "#334155", fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={() => router.push("/n8n-hosting/onboarding")}
                        endIcon={<ArrowRight size={18} />}
                        sx={{ py: 1.5 }}
                      >
                        Start Free Trial
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              </Box>
              <Box sx={{ flex: { md: "0 0 calc(50% - 12px)" }, maxWidth: { md: 480 }, width: "100%", mx: { xs: "auto", md: 0 } }}>
                <motion.div variants={fadeSlideUp} style={{ height: "100%" }}>
                  <Card
                    sx={{
                      p: { xs: 3, sm: 4, md: 5 },
                      textAlign: "center",
                      height: "100%",
                      border: "1px solid #E2E8F0",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        px: 2,
                        py: 0.5,
                        borderRadius: 6,
                        background: "rgba(124,65,255,0.1)",
                        color: "#A67AFF",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        mb: 2.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Custom
                    </Box>
                    <Typography variant="h3" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, fontWeight: 700, mb: 1 }}>
                      Need more?
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748B", mb: 2.5, fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}>
                      Multiple instances, team access, dedicated support, or something else? We&apos;ll build a plan around your needs.
                    </Typography>
                    <Box sx={{ textAlign: "left", mb: 3, flex: 1 }}>
                      {[
                        "Multiple n8n instances",
                        "Team collaboration",
                        "Priority support",
                        "Custom resource limits",
                        "Dedicated subdomain",
                        "SLA guarantee",
                        "Volume discounts",
                      ].map((feature, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 0.6 }}>
                          <CheckCircle size={15} style={{ color: "#A67AFF", flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: "#334155", fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="outlined"
                        size="large"
                        fullWidth
                        onClick={() => router.push("/contact")}
                        endIcon={<ArrowRight size={18} />}
                        sx={{
                          py: 1.5,
                          borderColor: "rgba(124,65,255,0.3)",
                          color: "#A67AFF",
                          "&:hover": { borderColor: "#A67AFF", background: "rgba(124,65,255,0.06)" },
                        }}
                      >
                        Contact Us
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              </Box>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ===== FEATURES GRID ===== */}
      <Box id="features" sx={{ py: { xs: 6, sm: 8, md: 14 }, borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <motion.div variants={fadeSlideUp}>
              <Typography
                variant="overline"
                sx={{
                  color: "#2693FF",
                  letterSpacing: "0.15em",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  mb: 1,
                  display: "block",
                }}
              >
                Features
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
                  mb: { xs: 4, sm: 6 },
                }}
              >
                Everything you need to run n8n
              </Typography>
            </motion.div>
            <Grid container spacing={{ xs: 2, sm: 2.5 }}>
              {[
                { icon: <Shield size={20} />, title: "Auto SSL", desc: "Automatic SSL certificate issuance and renewal via Let's Encrypt." },
                { icon: <Globe size={20} />, title: "Custom Domains", desc: "Bring your own domain with a simple CNAME record configuration." },
                { icon: <CopyCheck size={20} />, title: "Daily Backups", desc: "Automated daily backups with 7-day retention. Restore with one click." },
                { icon: <RefreshCw size={20} />, title: "Auto Updates", desc: "Your n8n instance stays up to date with the latest releases." },
                { icon: <Server size={20} />, title: "Isolated Containers", desc: "Each instance runs in its own isolated container for security." },
                { icon: <Cpu size={20} />, title: "Resource Monitoring", desc: "Real-time CPU, RAM, and uptime monitoring for your instance." },
              ].map((feature, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                  <FeatureCard icon={feature.icon} title={feature.title} description={feature.desc} />
                </Grid>
              ))}
            </Grid>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ===== FAQ ===== */}
      <Box id="faq" sx={{ py: { xs: 6, sm: 8, md: 14 }, borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="md">
          <ScrollReveal>
            <motion.div variants={fadeSlideUp}>
              <Typography
                variant="overline"
                sx={{
                  color: "#2693FF",
                  letterSpacing: "0.15em",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  mb: 1,
                  display: "block",
                  textAlign: "center",
                }}
              >
                FAQ
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
                  mb: { xs: 4, sm: 5 },
                  textAlign: "center",
                }}
              >
                Frequently asked questions
              </Typography>
            </motion.div>
            {[
              {
                q: "What happens after the 3-day trial?",
                a: "Your instance will be paused until you add a payment method. We'll send you reminder emails before the trial ends so you never lose your work.",
              },
              {
                q: "Can I use my own domain?",
                a: "Absolutely! You can add a custom domain from your dashboard. We'll provide you with the DNS configuration — just add a CNAME record pointing to your n8n subdomain.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. There are no long-term contracts. You can cancel from your dashboard at any time. Your instance will stay active until the end of your billing period.",
              },
              {
                q: "What if I need more than one instance?",
                a: "Each plan includes one instance. If you need more, contact us and we'll set up a custom plan for your team.",
              },
              {
                q: "Is my data backed up?",
                a: "Yes! We run automated daily backups with 7-day retention. All backups are encrypted and stored securely.",
              },
              {
                q: "What n8n version do you run?",
                a: "We run the latest stable n8n release and automatically update your instance within 48 hours of new releases.",
              },
            ].map((faq, i) => (
              <motion.div key={i} variants={fadeSlideUp} style={{ marginBottom: 10 }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ChevronDown size={18} style={{ color: "#64748B" }} />}>
                    <Typography sx={{ fontWeight: 500, color: "#0F172A", fontSize: { xs: "0.875rem", sm: "0.9375rem" } }}>
                      {faq.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.7, fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}>
                      {faq.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </ScrollReveal>
        </Container>
      </Box>

      {/* ===== FINAL CTA ===== */}
      <Box sx={{ py: { xs: 6, sm: 8, md: 14 }, borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Typography variant="h3" sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" }, mb: 1.5 }}>
              Ready to automate?
            </Typography>
            <Typography variant="body1" sx={{ color: "#64748B", mb: 3, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
              Deploy your n8n instance in under a minute. Free for 3 days.
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => router.push("/n8n-hosting/onboarding")}
                endIcon={<ArrowRight size={18} />}
                sx={{
                  px: { xs: 4, sm: 6 },
                  py: 1.5,
                  fontSize: { xs: "0.9375rem", sm: "1.05rem" },
                  maxWidth: { sm: 400 },
                }}
              >
                Get Started Free
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ borderTop: "1px solid #E2E8F0", py: { xs: 3, sm: 4 }, textAlign: "center", px: 2 }}>
        <Typography variant="caption" sx={{ color: "#64748B", fontSize: { xs: "0.6875rem", sm: "0.75rem" } }}>
          &copy; {new Date().getFullYear()} GalaxyDev Pvt. Ltd. n8n is a trademark of n8n GmbH.
        </Typography>
      </Box>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes gradient-drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(2%, 1%) rotate(1deg); }
          66% { transform: translate(-1%, -1%) rotate(-0.5deg); }
          100% { transform: translate(1%, -2%) rotate(0.5deg); }
        }
      `}</style>
    </Box>
    </>
  );
}
