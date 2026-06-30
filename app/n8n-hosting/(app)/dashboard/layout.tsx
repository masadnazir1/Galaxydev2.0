"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  Avatar,
  Chip,
  Badge,
  Skeleton,
  ThemeProvider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Server,
  CreditCard,
  Globe,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon,
} from "lucide-react";
import { useN8n } from "@/lib/n8n-context";
import { n8nDarkTheme, n8nLightTheme } from "@/lib/n8n-theme";

const DRAWER_WIDTH = 260;
const DRAWER_COLLAPSED_WIDTH = 72;

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Overview", href: "/n8n-hosting/dashboard", icon: <LayoutDashboard size={20} /> },
  { label: "Instances", href: "/n8n-hosting/dashboard/instances", icon: <Server size={20} /> },
  { label: "Billing", href: "/n8n-hosting/dashboard/billing", icon: <CreditCard size={20} /> },
  { label: "Domains", href: "/n8n-hosting/dashboard/domains", icon: <Globe size={20} /> },
  { label: "Settings", href: "/n8n-hosting/dashboard/settings", icon: <Settings size={20} /> },
];

const c = (dark: boolean) => ({
  sidebarBg: dark ? "#0A0A0F" : "#FFFFFF",
  sidebarBorder: dark ? "rgba(255,255,255,0.06)" : "#E2E8F0",
  topbarBg: dark ? "rgba(10,10,15,0.8)" : "rgba(255,255,255,0.8)",
  topbarBorder: dark ? "rgba(255,255,255,0.06)" : "#E2E8F0",
  textPrimary: dark ? "#F1F5F9" : "#0F172A",
  textSecondary: dark ? "#64748B" : "#64748B",
  textMuted: dark ? "#94A3B8" : "#94A3B8",
  navHover: dark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.04)",
  navActive: dark ? "#F1F5F9" : "#0F172A",
  navInactive: dark ? "#64748B" : "#64748B",
  skeletonBg: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
  sidebarShadow: dark ? "none" : "0 1px 3px rgba(0,0,0,0.04)",
});

function NavLink({ item, active, collapsed, dark, onClick }: { item: NavItem; active: boolean; collapsed: boolean; dark: boolean; onClick?: () => void }) {
  const colors = c(dark);
  return (
    <Link href={item.href} onClick={onClick} style={{ textDecoration: "none", position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : undefined,
          gap: collapsed ? 0 : 2,
          px: collapsed ? 0 : 2.5,
          py: 1.5,
          mx: collapsed ? 0 : 1,
          borderRadius: 2,
          color: active ? colors.navActive : colors.navInactive,
          position: "relative",
          transition: "color 0.2s",
          "&:hover": { color: colors.navActive, background: colors.navHover },
        }}
      >
        {item.icon}
        <motion.div
          animate={{
            width: collapsed ? 0 : "auto",
            opacity: collapsed ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          <Typography variant="body2" sx={{ fontWeight: active ? 600 : 400, fontSize: "0.9375rem" }}>
            {item.label}
          </Typography>
        </motion.div>
        {active && (
          <motion.div
            layoutId="activeNav"
            style={{
              position: "absolute",
              left: 0,
              top: 8,
              bottom: 8,
              width: 3,
              borderRadius: 4,
              background: "linear-gradient(180deg, #2693FF, #7C41FF)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Box>
    </Link>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { onboarding } = useN8n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!onboarding) {
      router.replace("/n8n-hosting/onboarding");
      return;
    }
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [onboarding, router]);

  if (!onboarding) return null;

  const initials = onboarding.fullName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const trialEndDate = new Date(Date.now() + 2 * 86400000 + 14 * 3600000);
  const remainingMs = trialEndDate.getTime() - Date.now();
  const daysLeft = Math.floor(remainingMs / 86400000);
  const hoursLeft = Math.floor((remainingMs % 86400000) / 3600000);

  const colors = c(darkMode);

  const sidebar = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", py: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", px: collapsed ? 0 : 3, justifyContent: "center", mb: 3 }}>
        <Link href="/n8n-hosting" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 2,
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
            <motion.div
              animate={{
                width: collapsed ? 0 : "auto",
                opacity: collapsed ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                n8n Hosting
              </Typography>
            </motion.div>
          </Box>
        </Link>
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            active={pathname === item.href}
            collapsed={collapsed}
            dark={darkMode}
            onClick={() => setMobileOpen(false)}
          />
        ))}
      </Box>

      <Box sx={{ px: collapsed ? 0 : 2, mt: "auto" }}>
        <Box
          onClick={() => { router.push("/n8n-hosting"); }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : undefined,
            gap: collapsed ? 0 : 2,
            px: collapsed ? 0 : 2.5,
            py: 1.5,
            mx: collapsed ? 0 : 0.5,
            borderRadius: 2,
            color: "#EF4444",
            cursor: "pointer",
            "&:hover": { background: "rgba(239,68,68,0.06)" },
          }}
        >
          <LogOut size={20} />
          <motion.div
            animate={{
              width: collapsed ? 0 : "auto",
              opacity: collapsed ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <Typography variant="body2" sx={{ fontWeight: 400, fontSize: "0.9375rem", color: colors.textPrimary }}>
              Logout
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={darkMode ? n8nDarkTheme : n8nLightTheme}>
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: darkMode ? "#0A0A0F" : "#F2F4F8" }}>
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: collapsed ? DRAWER_COLLAPSED_WIDTH : DRAWER_WIDTH,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          transition: "width 0.2s ease",
          "& .MuiDrawer-paper": {
            width: collapsed ? DRAWER_COLLAPSED_WIDTH : DRAWER_WIDTH,
            boxSizing: "border-box",
            transition: "width 0.2s ease, background 0.2s ease",
            overflowX: "hidden",
            bgcolor: colors.sidebarBg,
            borderRight: `1px solid ${colors.sidebarBorder}`,
          },
        }}
      >
        {sidebar}
      </Drawer>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            bgcolor: colors.sidebarBg,
            borderRight: `1px solid ${colors.sidebarBorder}`,
          },
        }}
      >
        {sidebar}
      </Drawer>

      {/* Main content */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
            py: 1.5,
            borderBottom: `1px solid ${colors.topbarBorder}`,
            background: colors.topbarBg,
            backdropFilter: "blur(16px)",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <IconButton
              onClick={() => setCollapsed((c) => !c)}
              sx={{ color: colors.textMuted, "&:hover": { color: colors.textPrimary }, display: { xs: "none", md: "inline-flex" } }}
              size="small"
            >
              {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
            </IconButton>
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: "none" }, color: colors.textMuted }}
            >
              <Menu size={22} />
            </IconButton>
            <Typography
              variant="subtitle2"
              sx={{ color: colors.textMuted, fontWeight: 400, display: { xs: "none", sm: "block" } }}
            >
              Welcome back,
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: colors.textPrimary, display: { xs: "none", sm: "block" } }}>
              {onboarding.fullName}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Chip
              label={`Trial ends in ${daysLeft}d ${hoursLeft}h`}
              size="small"
              sx={{
                background: "rgba(245,158,11,0.1)",
                color: "#F59E0B",
                border: "1px solid rgba(245,158,11,0.2)",
                fontWeight: 600,
                fontSize: "0.75rem",
                display: { xs: "none", sm: "inline-flex" },
              }}
            />
            <IconButton
              onClick={() => setDarkMode((d) => !d)}
              sx={{ color: colors.textMuted, "&:hover": { color: colors.textPrimary } }}
              size="small"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </IconButton>
            <IconButton sx={{ color: colors.textMuted }}>
              <Badge badgeContent={2} color="error" sx={{ "& .MuiBadge-badge": { fontSize: 10, minWidth: 16, height: 16 } }}>
                <Bell size={20} />
              </Badge>
            </IconButton>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                background: "linear-gradient(135deg, #2693FF, #7C41FF)",
                fontSize: "0.8125rem",
                fontWeight: 700,
              }}
            >
              {initials}
            </Avatar>
          </Box>
        </Box>

        {/* Page content */}
        <Box sx={{ flex: 1, p: { xs: 2, md: 4 }, overflow: "auto" }}>
          {loading ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Skeleton variant="rounded" height={40} sx={{ bgcolor: colors.skeletonBg, maxWidth: 300 }} />
              <Box sx={{ display: "flex", gap: 2 }}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} variant="rounded" height={120} sx={{ bgcolor: colors.skeletonBg, flex: 1 }} />
                ))}
              </Box>
              <Skeleton variant="rounded" height={200} sx={{ bgcolor: colors.skeletonBg }} />
            </Box>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          )}
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
}
