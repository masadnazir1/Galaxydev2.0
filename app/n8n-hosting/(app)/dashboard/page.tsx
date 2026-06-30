"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Server,
  Clock,
  CreditCard,
  Activity,
  ArrowRight,
  Zap,
  Shield,
  CopyCheck,
} from "lucide-react";
import { useN8n } from "@/lib/n8n-context";
import { c } from "@/lib/dashboard-theme";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(easeOut * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [value]);

  return <>{display}{suffix}</>;
}

export default function DashboardOverviewPage() {
  const router = useRouter();
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const { instances, activities } = useN8n();

  const trialEndDate = new Date(Date.now() + 2 * 86400000 + 14 * 3600000);
  const remainingMs = trialEndDate.getTime() - Date.now();
  const daysLeft = Math.floor(remainingMs / 86400000);
  const hoursLeft = Math.floor((remainingMs % 86400000) / 3600000);

  const runningInstances = instances.filter((i) => i.status === "running").length;

  const activityIcons: Record<string, React.ReactNode> = {
    deploy: <Zap size={16} />,
    ssl: <Shield size={16} />,
    trial: <Clock size={16} />,
    domain: <CopyCheck size={16} />,
    billing: <CreditCard size={16} />,
    restart: <Activity size={16} />,
    stop: <Activity size={16} />,
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible">
      <motion.div variants={fadeUp}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          Overview
        </Typography>
        <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 4 }}>
          Your n8n hosting at a glance
        </Typography>
      </motion.div>

      {/* Summary cards */}
      <Grid container spacing={2.5} sx={{ mb: 4 }}>
        {[
          {
            icon: <Server size={22} />,
            label: "Active Instances",
            value: runningInstances,
            suffix: "",
            color: "#2693FF",
          },
          {
            icon: <Clock size={22} />,
            label: "Trial Status",
            value: `${daysLeft}d ${hoursLeft}h`,
            suffix: "",
            color: "#F59E0B",
            custom: true,
          },
          {
            icon: <CreditCard size={22} />,
            label: "Next Billing",
            value: "Rs 100",
            suffix: "",
            color: "#22C55E",
            custom: true,
          },
          {
            icon: <Activity size={22} />,
            label: "Uptime",
            value: 99.97,
            suffix: "%",
            color: "#7C41FF",
          },
        ].map((stat, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={i}>
            <motion.div variants={fadeUp}>
              <Card
                sx={{
                  p: 3,
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${stat.color}, transparent)`,
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Box sx={{ color: stat.color }}>{stat.icon}</Box>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {stat.custom ? (
                    stat.value
                  ) : (
                    <AnimatedNumber value={stat.value as number} suffix={stat.suffix} />
                  )}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Quick action */}
      <motion.div variants={fadeUp}>
        <Card
          sx={{
            p: 3,
            mb: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            border: `1px solid ${dark ? "rgba(38,147,255,0.15)" : "rgba(38,147,255,0.3)"}`,
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Need another instance?
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondary }}>
              Deploy a new n8n instance in under 60 seconds.
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={() => router.push("/n8n-hosting/dashboard/instances")}
            endIcon={<ArrowRight size={16} />}
          >
            Deploy New Instance
          </Button>
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={fadeUp}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Recent Activity
        </Typography>
        <Card sx={{ p: 0, overflow: "hidden" }}>
          {activities.slice(0, 6).map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 20px",
                borderBottom: i < Math.min(activities.length, 6) - 1 ? `1px solid ${colors.border}` : "none",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 2,
                  background: colors.iconBg("#2693FF"),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2693FF",
                  flexShrink: 0,
                }}
              >
                {activityIcons[activity.type] || <Activity size={16} />}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {activity.action}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: colors.textMuted, flexShrink: 0 }}>
                {new Date(activity.timestamp).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </motion.div>
          ))}
        </Card>
      </motion.div>
    </motion.div>
  );
}
