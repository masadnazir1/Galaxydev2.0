"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Typography,
  Card,
  Button,
  Chip,
  LinearProgress,
  Grid,
  Skeleton,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Server,
  ExternalLink,
  Copy,
  Globe,
  CheckCircle,
  ArrowLeft,
  Clock,
  Container,
  Hash,
  Cpu,
  MemoryStick,
  Calendar,
  Activity,
  XCircle,
  RotateCw,
  Play,
  Square,
  Trash2,
} from "lucide-react";
import { apiFetch } from "@/lib/api-client";
import { c } from "@/lib/dashboard-theme";

interface ApiInstance {
  id: string;
  userId: string;
  name: string;
  subdomain: string;
  customDomainId: string | null;
  containerId: string;
  containerName: string;
  status: "running" | "stopped" | "trial";
  trialEndsAt: string;
  cpuLimit: number;
  memLimit: number;
  port: number;
  errorMessage: string | null;
  createdAt: string;
  updatedAt: string;
}

interface InstanceStats {
  cpuPercent: number;
  memoryUsage: number;
  memoryLimit: number;
  memoryPercent: number;
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 1 }}>
      <Box sx={{ color: "#64748B", flexShrink: 0 }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: "#94A3B8", minWidth: 120, flexShrink: 0 }}>{label}</Typography>
      <Typography variant="body2" sx={{ color: "#F1F5F9", fontWeight: 500 }}>{value}</Typography>
    </Box>
  );
}

export default function InstanceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const [instance, setInstance] = useState<ApiInstance | null>(null);
  const [stats, setStats] = useState<InstanceStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: "" });

  const fetchInstance = async () => {
    try {
      const [instRes, statsRes] = await Promise.all([
        apiFetch(`https://n8nhostingapi-production.galaxydev.pk/instances/${params.id}`),
        apiFetch(`https://n8nhostingapi-production.galaxydev.pk/instances/${params.id}/stats`),
      ]);
      if (instRes.ok) setInstance(await instRes.json());
      if (statsRes.ok) setStats(await statsRes.json());
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchInstance(); }, [params.id]);

  const handleAction = async (action: "start" | "stop" | "restart") => {
    if (!instance) return;
    setActionLoading(true);
    try {
      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/instances/${instance.id}/${action}`, { method: "POST" });
      if (res.ok) {
        setSnackbar({ open: true, message: `Instance ${action === "restart" ? "restarted" : action === "start" ? "started" : "stopped"}` });
        fetchInstance();
      } else {
        const body = await res.json();
        setSnackbar({ open: true, message: body.message?.[0] || `Failed to ${action} instance` });
      }
    } catch {
      setSnackbar({ open: true, message: `Failed to ${action} instance` });
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!instance) return;
    setActionLoading(true);
    try {
      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/instances/${instance.id}`, { method: "DELETE" });
      if (res.ok) {
        setSnackbar({ open: true, message: "Instance deleted" });
        setTimeout(() => router.push("/n8n-hosting/dashboard/instances"), 600);
      } else {
        const body = await res.json();
        setSnackbar({ open: true, message: body.message?.[0] || "Failed to delete instance" });
      }
    } catch {
      setSnackbar({ open: true, message: "Failed to delete instance" });
    } finally {
      setDeleteOpen(false);
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <Box>
        <Skeleton variant="text" width={200} height={40} sx={{ mb: 2 }} />
        <Card sx={{ p: 4 }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} variant="text" height={36} sx={{ mb: 1, maxWidth: 400 }} />
          ))}
        </Card>
      </Box>
    );
  }

  if (!instance) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <XCircle size={48} style={{ color: "#EF4444", margin: "0 auto 16px" }} />
        <Typography variant="h6" sx={{ color: "#EF4444", mb: 1 }}>Instance not found</Typography>
        <Button variant="outlined" onClick={() => router.push("/n8n-hosting/dashboard/instances")} startIcon={<ArrowLeft size={16} />}>
          Back to Instances
        </Button>
      </Box>
    );
  }

  const url = `https://${instance.subdomain}-n8n.galaxydev.pk`;
  const cpuPct = stats ? Math.round(stats.cpuPercent) : 0;
  const ramPct = stats ? Math.round(stats.memoryPercent) : 0;

  const statusConfig: Record<string, { label: string; color: string }> = {
    running: { label: "Running", color: "#22C55E" },
    stopped: { label: "Stopped", color: "#64748B" },
    trial: { label: "Trial", color: "#F59E0B" },
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Button
          component={Link}
          href="/n8n-hosting/dashboard/instances"
          variant="text"
          startIcon={<ArrowLeft size={16} />}
          sx={{ color: "#64748B", textTransform: "none" }}
        >
          Back
        </Button>
      </Box>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card sx={{ p: 4, mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 4, flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <Box sx={{ width: 56, height: 56, borderRadius: 2.5, background: "linear-gradient(135deg, #2693FF, #7C41FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Server size={28} style={{ color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>{instance.name}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Chip
                    icon={<Box sx={{ width: 6, height: 6, borderRadius: "50%", background: statusConfig[instance.status]?.color || "#94A3B8", ml: 0.5 }} />}
                    label={statusConfig[instance.status]?.label || instance.status}
                    size="small"
                    sx={{ background: `${statusConfig[instance.status]?.color}15`, color: statusConfig[instance.status]?.color || "#94A3B8", fontWeight: 600 }}
                  />
                  <Typography variant="caption" sx={{ color: "#64748B" }}>ID: {instance.id.slice(0, 8)}...</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" size="small" startIcon={<ExternalLink size={14} />} component="a" href={url} target="_blank">Open</Button>
              <Button variant="outlined" size="small" startIcon={<RotateCw size={14} />} disabled={actionLoading || instance.status === "stopped"} onClick={() => handleAction("restart")}>Restart</Button>
              <Button variant="outlined" size="small" startIcon={instance.status === "running" ? <Square size={14} /> : <Play size={14} />} disabled={actionLoading} onClick={() => handleAction(instance.status === "running" ? "stop" : "start")}>
                {instance.status === "running" ? "Stop" : "Start"}
              </Button>
              <Button variant="outlined" size="small" color="error" startIcon={<Trash2 size={14} />} disabled={actionLoading} onClick={() => setDeleteOpen(true)}>
                Delete
              </Button>
            </Box>
            </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#F1F5F9" }}>Connection</Typography>
              <Box sx={{ p: 2, borderRadius: 2, background: colors.cardBg, mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <Globe size={14} style={{ color: "#64748B" }} />
                  <Typography variant="caption" sx={{ color: "#94A3B8" }}>URL</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2" sx={{ fontFamily: "monospace", color: "#2693FF", flex: 1 }}>{url}</Typography>
                  <Button size="small" variant="text" onClick={() => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                    sx={{ minWidth: "auto", color: copied ? "#22C55E" : "#64748B" }}>
                    {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </Button>
                </Box>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#F1F5F9" }}>Container</Typography>
              <Box sx={{ p: 2, borderRadius: 2, background: colors.cardBg }}>
                <DetailRow icon={<Container size={16} />} label="Container" value={instance.containerName} />
                <DetailRow icon={<Hash size={16} />} label="Container ID" value={instance.containerId.slice(0, 16)} />
                <DetailRow icon={<Activity size={16} />} label="Port" value={instance.port} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#F1F5F9" }}>Resources</Typography>
              <Box sx={{ p: 2, borderRadius: 2, background: colors.cardBg, mb: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                    <Typography variant="caption" sx={{ color: "#94A3B8", display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Cpu size={14} /> CPU
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace" }}>{stats ? `${stats.cpuPercent.toFixed(1)}%` : `${instance.cpuLimit}m`}</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={cpuPct} sx={{ height: 6, borderRadius: 3 }} />
                </Box>
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                    <Typography variant="caption" sx={{ color: "#94A3B8", display: "flex", alignItems: "center", gap: 0.5 }}>
                      <MemoryStick size={14} /> Memory
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace" }}>{stats ? `${stats.memoryUsage.toFixed(0)} MB / ${stats.memoryLimit} MB` : `${instance.memLimit} MB`}</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={ramPct} sx={{ height: 6, borderRadius: 3 }} />
                </Box>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#F1F5F9" }}>Timeline</Typography>
              <Box sx={{ p: 2, borderRadius: 2, background: colors.cardBg }}>
                <DetailRow icon={<Calendar size={16} />} label="Created" value={new Date(instance.createdAt).toLocaleString()} />
                <DetailRow icon={<Clock size={16} />} label="Updated" value={new Date(instance.updatedAt).toLocaleString()} />
                <DetailRow icon={<Clock size={16} />} label="Trial ends" value={new Date(instance.trialEndsAt).toLocaleString()} />
              </Box>
            </Grid>
          </Grid>

          {instance.errorMessage && (
            <Box sx={{ mt: 4, p: 2, borderRadius: 2, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <Typography variant="subtitle2" sx={{ color: "#EF4444", mb: 0.5 }}>Error</Typography>
              <Typography variant="body2" sx={{ color: "#FCA5A5" }}>{instance.errorMessage}</Typography>
            </Box>
          )}
        </Card>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ open: false, message: "" })}
        message={snackbar.message}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />

      <Dialog open={deleteOpen} onClose={() => !actionLoading && setDeleteOpen(false)} maxWidth="xs">
        <DialogTitle>Delete Instance?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            This action cannot be undone. All data associated with this instance will be permanently deleted.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)} disabled={actionLoading}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDelete} disabled={actionLoading}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
