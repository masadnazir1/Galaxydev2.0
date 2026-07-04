"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Card,
  Button,
  Chip,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  IconButton,
  Grid,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  ExternalLink,
  Copy,
  RotateCw,
  Play,
  Square,
  Trash2,
  Plus,
  Globe,
  CheckCircle,
  Loader,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useN8n } from "@/lib/n8n-context";
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

interface Meta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface InstanceStats {
  cpuPercent: number;
  memoryUsage: number;
  memoryLimit: number;
  memoryPercent: number;
}

function StatusChip({ status }: { status: string }) {
  const config: Record<string, { label: string; color: string; bg: string }> = {
    running: { label: "Running", color: "#22C55E", bg: "rgba(34,197,94,0.1)" },
    stopped: { label: "Stopped", color: "#64748B", bg: "rgba(100,116,139,0.1)" },
    trial: { label: "Trial", color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  };
  const c = config[status] || { label: status, color: "#94A3B8", bg: "rgba(148,163,184,0.1)" };

  return (
    <Chip
      icon={
        <Box
          sx={{
            width: 6, height: 6, borderRadius: "50%",
            background: c.color,
            boxShadow: status === "running" ? `0 0 6px ${c.color}` : "none",
            ml: 0.5,
          }}
        />
      }
      label={c.label}
      size="small"
      sx={{ background: c.bg, color: c.color, fontWeight: 600, fontSize: "0.75rem", border: `1px solid ${c.color}20` }}
    />
  );
}

function InstanceCard({ instance, stats, onAction, onDelete }: { instance: ApiInstance; stats?: InstanceStats; onAction: (id: string, action: "start" | "stop" | "restart") => void; onDelete: (id: string) => void }) {
  const innerTheme = useTheme();
  const innerDark = innerTheme.palette.mode === "dark";
  const colors = c(innerDark);
  const [copied, setCopied] = useState(false);
  const url = `https://${instance.subdomain}-n8n.galaxydev.pk`;

  const cpuPct = stats ? Math.round(stats.cpuPercent) : 0;
  const ramPct = stats ? Math.round(stats.memoryPercent) : 0;

  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
      <Card sx={{ p: 3, mb: 2.5 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 2, background: colors.iconBg("#2693FF"), display: "flex", alignItems: "center", justifyContent: "center", color: "#2693FF" }}>
              <Server size={20} />
            </Box>
            <Box>
              <Link href={`/n8n-hosting/dashboard/instances/${instance.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, "&:hover": { color: "#2693FF" } }}>{instance.name}</Typography>
              </Link>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                <StatusChip status={instance.status} />
                <Typography variant="caption" sx={{ color: "#64748B", display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Clock size={12} />
                  Created {new Date(instance.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1.5, borderRadius: 2, background: colors.cardBg, mb: 2.5 }}>
          <Globe size={14} style={{ color: "#64748B", flexShrink: 0 }} />
          <Typography variant="body2" sx={{ color: "#94A3B8", fontFamily: "monospace", fontSize: "0.8125rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis" }}>
            {url}
          </Typography>
          <IconButton size="small" onClick={() => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }} sx={{ color: copied ? "#22C55E" : "#64748B" }}>
            {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
          </IconButton>
          <IconButton size="small" component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{ color: "#64748B" }}>
            <ExternalLink size={16} />
          </IconButton>
        </Box>

        <Grid container spacing={2} sx={{ mb: 2.5 }}>
          <Grid size={6}>
            <Typography variant="caption" sx={{ color: "#64748B", display: "block", mb: 0.5 }}>CPU Usage</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinearProgress variant="determinate" value={cpuPct} sx={{ flex: 1, height: 6 }} color={cpuPct > 80 ? "error" : "primary"} />
              <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace", minWidth: 32, textAlign: "right" }}>{cpuPct}%</Typography>
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography variant="caption" sx={{ color: "#64748B", display: "block", mb: 0.5 }}>RAM Usage</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinearProgress variant="determinate" value={ramPct} sx={{ flex: 1, height: 6 }} color={ramPct > 80 ? "error" : "primary"} />
              <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace", minWidth: 32, textAlign: "right" }}>{ramPct}%</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button size="small" variant="outlined" startIcon={<ExternalLink size={14} />} component="a" href={url} target="_blank">Open</Button>
          <Button size="small" variant="outlined" startIcon={<RotateCw size={14} />} disabled={instance.status === "stopped"} onClick={() => onAction(instance.id, "restart")}>Restart</Button>
          <Button size="small" variant="outlined" startIcon={instance.status === "running" ? <Square size={14} /> : <Play size={14} />} onClick={() => onAction(instance.id, instance.status === "running" ? "stop" : "start")}>
            {instance.status === "running" ? "Stop" : "Start"}
          </Button>
          <Button size="small" variant="outlined" color="error" startIcon={<Trash2 size={14} />} sx={{ ml: "auto" }} onClick={() => onDelete(instance.id)}>Delete</Button>
          <Button size="small" variant="contained" component={Link} href={`/n8n-hosting/dashboard/instances/${instance.id}`} endIcon={<ArrowRight size={14} />}>
            Details
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
}

export default function InstancesPage() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const { addInstance, updateInstanceStatus, removeInstance, addActivity } = useN8n();

  const [instances, setInstances] = useState<ApiInstance[]>([]);
  const [statsMap, setStatsMap] = useState<Record<string, InstanceStats>>({});
  const [meta, setMeta] = useState<Meta>({ page: 1, limit: 10, totalItems: 0, totalPages: 0, hasNextPage: false, hasPreviousPage: false });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("DESC");
  const [search, setSearch] = useState("");

  const [deployOpen, setDeployOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deployName, setDeployName] = useState("");
  const [deployStep, setDeployStep] = useState(0);
  const [deploying, setDeploying] = useState(false);
  const [deployDone, setDeployDone] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: "" });

  const handleAction = async (id: string, action: "start" | "stop" | "restart") => {
    setActionLoading(id);
    try {
      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/instances/${id}/${action}`, { method: "POST" });
      if (res.ok) {
        setSnackbar({ open: true, message: `Instance ${action === "restart" ? "restarted" : action === "start" ? "started" : "stopped"}` });
        fetchInstances();
      } else {
        const body = await res.json();
        setSnackbar({ open: true, message: body.message?.[0] || `Failed to ${action} instance` });
      }
    } catch {
      setSnackbar({ open: true, message: `Failed to ${action} instance` });
    } finally {
      setActionLoading(null);
    }
  };

  const deployMessages = [
    "Provisioning container...",
    "Configuring n8n...",
    "Issuing SSL certificate...",
    "Setting up subdomain...",
    "Almost ready...",
  ];

  const fetchInstances = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", String(limit));
      params.set("sortBy", sortBy);
      params.set("sortOrder", sortOrder);
      if (search.trim()) params.set("search", search.trim());

      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/instances?${params}`);
      if (res.ok) {
        const body = await res.json();
        const data: ApiInstance[] = body.data || [];
        setInstances(data);
        setMeta(body.meta);

        const statsResults = await Promise.allSettled(
          data.map((inst) =>
            apiFetch(`https://n8nhostingapi-production.galaxydev.pk/instances/${inst.id}/stats`)
              .then((r) => r.ok ? r.json() : null)
              .then((s) => ({ id: inst.id, stats: s as InstanceStats | null }))
          )
        );
        const map: Record<string, InstanceStats> = {};
        for (const result of statsResults) {
          if (result.status === "fulfilled" && result.value.stats) {
            map[result.value.id] = result.value.stats;
          }
        }
        setStatsMap(map);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, [page, limit, sortBy, sortOrder, search]);

  useEffect(() => {
    fetchInstances();
  }, [fetchInstances]);

  const handleDeploy = async () => {
    if (!deployName.trim()) return;
    setDeploying(true);
    setDeployStep(0);
    setError("");
    for (let i = 0; i < deployMessages.length; i++) {
      await new Promise((r) => setTimeout(r, 600));
      setDeployStep(i + 1);
    }
    try {
      const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/instances", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: deployName.trim() }),
      });
      if (res.ok) {
        setDeployDone(true);
        await new Promise((r) => setTimeout(r, 1000));
        setDeployOpen(false);
        setDeployDone(false);
        setDeployName("");
        setSnackbar({ open: true, message: "Instance deployed successfully!" });
        fetchInstances();
      } else {
        const body = await res.json();
        setError(body.message?.[0] || "Failed to deploy instance");
        setDeploying(false);
        setDeployStep(0);
      }
    } catch {
      setError("Network error. Please try again.");
      setDeploying(false);
      setDeployStep(0);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setActionLoading(deleteId);
    try {
      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/instances/${deleteId}`, { method: "DELETE" });
      if (res.ok) {
        setSnackbar({ open: true, message: "Instance deleted" });
        fetchInstances();
      } else {
        const body = await res.json();
        setSnackbar({ open: true, message: body.message?.[0] || "Failed to delete instance" });
      }
    } catch {
      setSnackbar({ open: true, message: "Failed to delete instance" });
    } finally {
      setDeleteId(null);
      setActionLoading(null);
    }
  };

  const toggleSortOrder = () => setSortOrder((o) => (o === "ASC" ? "DESC" : "ASC"));

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3, flexWrap: "wrap", gap: 2 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>Instances</Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>Manage your n8n instances</Typography>
        </Box>
          <Button variant="contained" startIcon={<Plus size={18} />} onClick={() => { setDeployOpen(true); setError(""); }}>Deploy New Instance</Button>
      </Box>

      <Card sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
          <TextField
            placeholder="Search instances..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            size="small"
            sx={{ minWidth: 240 }}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><Search size={18} style={{ color: "#94A3B8" }} /></InputAdornment>,
              },
            }}
          />
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Sort by</InputLabel>
            <Select value={sortBy} label="Sort by" onChange={(e) => setSortBy(e.target.value)}>
              <MenuItem value="createdAt">Created</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="status">Status</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" size="small" onClick={toggleSortOrder} startIcon={<ArrowUpDown size={16} />} sx={{ whiteSpace: "nowrap" }}>
            {sortOrder === "DESC" ? "Newest" : "Oldest"}
          </Button>
        </Box>
      </Card>

      {loading ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ width: 32, margin: "0 auto 16px" }}>
            <Loader size={32} style={{ color: "#64748B" }} />
          </motion.div>
          <Typography variant="body2" sx={{ color: "#64748B" }}>Loading instances...</Typography>
        </Box>
      ) : instances.length === 0 ? (
        <Card sx={{ textAlign: "center", py: 8 }}>
          <Server size={48} style={{ opacity: 0.3, margin: "0 auto 16px", color: "#64748B" }} />
          <Typography variant="h6" sx={{ mb: 1, color: "#94A3B8" }}>
            {search.trim() ? "No instances match your search" : "No instances yet"}
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "#64748B" }}>
            {search.trim() ? "Try a different search term" : "Deploy your first n8n instance to get started."}
          </Typography>
          {!search.trim() && (
            <Button variant="contained" startIcon={<Plus size={18} />} onClick={() => setDeployOpen(true)}>Deploy Now</Button>
          )}
        </Card>
      ) : (
        <AnimatePresence mode="popLayout">
          {instances.map((instance) => (
            <InstanceCard key={instance.id} instance={instance} stats={statsMap[instance.id]} onAction={handleAction} onDelete={(id) => setDeleteId(id)} />
          ))}
        </AnimatePresence>
      )}

      {meta.totalPages > 1 && (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 4 }}>
          <IconButton disabled={!meta.hasPreviousPage} onClick={() => setPage((p) => Math.max(1, p - 1))}>
            <ChevronLeft size={20} />
          </IconButton>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            Page {meta.page} of {meta.totalPages} ({meta.totalItems} total)
          </Typography>
          <IconButton disabled={!meta.hasNextPage} onClick={() => setPage((p) => p + 1)}>
            <ChevronRight size={20} />
          </IconButton>
        </Box>
      )}

      {/* Deploy Modal */}
      <Dialog open={deployOpen} onClose={() => !deploying && setDeployOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{deployDone ? "Deployment Complete!" : "Deploy New Instance"}</DialogTitle>
        <DialogContent>
          {deployDone ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} style={{ textAlign: "center", padding: "24px 0" }}>
              <CheckCircle size={64} style={{ color: "#22C55E", margin: "0 auto 16px" }} />
              <Typography variant="h6" sx={{ color: "#22C55E", mb: 1 }}>Instance Deployed!</Typography>
              <Typography variant="body2" sx={{ color: "#94A3B8" }}>Your n8n instance is now live and ready.</Typography>
            </motion.div>
          ) : deploying ? (
            <Box sx={{ py: 3 }}>
              {deployMessages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: deployStep > i ? 1 : 0.4, x: 0 }}
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", fontFamily: "monospace", fontSize: "0.875rem", color: deployStep > i ? "#22C55E" : "#64748B" }}>
                  {deployStep > i ? <CheckCircle size={16} /> : deployStep === i ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Loader size={16} /></motion.div>
                  ) : <Box sx={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.1)" }} />}
                  {msg}
                </motion.div>
              ))}
              {error && (
                <Typography variant="caption" sx={{ color: "#EF4444", display: "block", textAlign: "center", mt: 2 }}>
                  {error}
                </Typography>
              )}
            </Box>
          ) : (
            <Box sx={{ pt: 2 }}>
              <TextField label="Instance Name" fullWidth value={deployName} onChange={(e) => { setDeployName(e.target.value); setError(""); }}
                placeholder="e.g., My n8n Workspace" helperText="This will be used to generate your subdomain" autoFocus
                error={!!error} />
              {error && (
                <Typography variant="caption" sx={{ color: "#EF4444", display: "block", mt: 1 }}>
                  {error}
                </Typography>
              )}
              <Box sx={{ mt: 2, p: 2, borderRadius: 2, background: "rgba(255,255,255,0.03)" }}>
                <Typography variant="caption" sx={{ color: "#64748B", display: "block", mb: 0.5 }}>Your instance will be available at:</Typography>
                <Typography variant="body2" sx={{ fontFamily: "monospace", color: "#94A3B8" }}>
                  {deployName.trim() ? `${deployName.trim().toLowerCase().replace(/\s+/g, "-")}-n8n.galaxydev.pk` : "your-name-n8n.galaxydev.pk"}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          {!deploying && !deployDone && (
            <><Button onClick={() => setDeployOpen(false)}>Cancel</Button><Button variant="contained" onClick={handleDeploy} disabled={!deployName.trim()}>Deploy</Button></>
          )}
          {deployDone && <Button variant="contained" onClick={() => { setDeployOpen(false); setDeployDone(false); }}>Done</Button>}
        </DialogActions>
      </Dialog>

      {/* Delete confirmation */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)} maxWidth="xs">
        <DialogTitle>Delete Instance?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>This action cannot be undone. All data associated with this instance will be permanently deleted.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbar.open} onClose={() => setSnackbar({ open: false, message: "" })}
        message={snackbar.message} autoHideDuration={3000} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} />
    </Box>
  );
}
