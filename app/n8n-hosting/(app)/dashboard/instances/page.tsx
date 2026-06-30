"use client";

import { useState } from "react";
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
  Alert,
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
} from "lucide-react";
import { useN8n, type Instance } from "@/lib/n8n-context";
import { c } from "@/lib/dashboard-theme";

function StatusChip({ status }: { status: Instance["status"] }) {
  const config = {
    running: { label: "Running", color: "#22C55E", bg: "rgba(34,197,94,0.1)" },
    stopped: { label: "Stopped", color: "#64748B", bg: "rgba(100,116,139,0.1)" },
    trial: { label: "Trial", color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  }[status];

  return (
    <Chip
      icon={
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: config.color,
            boxShadow: status === "running" ? `0 0 6px ${config.color}` : "none",
            ml: 0.5,
          }}
        />
      }
      label={config.label}
      size="small"
      sx={{
        background: config.bg,
        color: config.color,
        fontWeight: 600,
        fontSize: "0.75rem",
        border: `1px solid ${config.color}20`,
      }}
    />
  );
}

function InstanceCard({
  instance,
  onRestart,
  onToggle,
  onDelete,
}: {
  instance: Instance;
  onRestart: (id: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const innerTheme = useTheme();
  const innerDark = innerTheme.palette.mode === "dark";
  const colors = c(innerDark);
  const [copied, setCopied] = useState(false);
  const url = `https://${instance.subdomain}.n8n.galaxydev.pk`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{ p: 3, mb: 2.5 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                background: colors.iconBg("#2693FF"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2693FF",
              }}
            >
              <Server size={20} />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {instance.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                <StatusChip status={instance.status} />
                <Typography variant="caption" sx={{ color: "#64748B" }}>
                  Uptime: {instance.uptime}%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1.5,
            borderRadius: 2,
            background: colors.cardBg,
            mb: 2.5,
          }}
        >
          <Globe size={14} style={{ color: "#64748B", flexShrink: 0 }} />
          <Typography variant="body2" sx={{ color: "#94A3B8", fontFamily: "monospace", fontSize: "0.8125rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis" }}>
            {url}
          </Typography>
          <IconButton size="small" onClick={handleCopy} sx={{ color: copied ? "#22C55E" : "#64748B" }}>
            {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
          </IconButton>
          <IconButton
            size="small"
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#64748B" }}
          >
            <ExternalLink size={16} />
          </IconButton>
        </Box>

        <Grid container spacing={2} sx={{ mb: 2.5 }}>
          <Grid size={6}>
            <Typography variant="caption" sx={{ color: "#64748B", display: "block", mb: 0.5 }}>
              CPU Usage
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinearProgress
                variant="determinate"
                value={instance.cpu}
                sx={{ flex: 1, height: 6 }}
                color={instance.cpu > 80 ? "error" : "primary"}
              />
              <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace", minWidth: 32, textAlign: "right" }}>
                {instance.cpu}%
              </Typography>
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography variant="caption" sx={{ color: "#64748B", display: "block", mb: 0.5 }}>
              RAM Usage
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinearProgress
                variant="determinate"
                value={instance.ram}
                sx={{ flex: 1, height: 6 }}
                color={instance.ram > 80 ? "error" : "primary"}
              />
              <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace", minWidth: 32, textAlign: "right" }}>
                {instance.ram}%
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button size="small" variant="outlined" startIcon={<ExternalLink size={14} />} component="a" href={url} target="_blank">
            Open
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={<RotateCw size={14} />}
            onClick={() => onRestart(instance.id)}
            disabled={instance.status === "stopped"}
          >
            Restart
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={instance.status === "running" ? <Square size={14} /> : <Play size={14} />}
            onClick={() => onToggle(instance.id)}
          >
            {instance.status === "running" ? "Stop" : "Start"}
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<Trash2 size={14} />}
            onClick={() => onDelete(instance.id)}
            sx={{ ml: "auto" }}
          >
            Delete
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
  const { instances, addInstance, updateInstanceStatus, removeInstance, addActivity } = useN8n();
  const [deployOpen, setDeployOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deployName, setDeployName] = useState("");
  const [deployStep, setDeployStep] = useState(0);
  const [deploying, setDeploying] = useState(false);
  const [deployDone, setDeployDone] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: "" });

  const deployMessages = [
    "Provisioning container...",
    "Configuring n8n...",
    "Issuing SSL certificate...",
    "Setting up subdomain...",
    "Almost ready...",
  ];

  const handleDeploy = async () => {
    if (!deployName.trim()) return;
    setDeploying(true);
    setDeployStep(0);
    for (let i = 0; i < deployMessages.length; i++) {
      await new Promise((r) => setTimeout(r, 600));
      setDeployStep(i + 1);
    }
    const newInstance: Instance = {
      id: `inst-${Date.now()}`,
      name: deployName.trim(),
      subdomain: deployName.trim().toLowerCase().replace(/\s+/g, "-"),
      status: "running",
      uptime: 100,
      cpu: Math.floor(Math.random() * 20) + 5,
      ram: Math.floor(Math.random() * 30) + 20,
      createdAt: new Date().toISOString(),
    };
    addInstance(newInstance);
    addActivity({
      id: `act-${Date.now()}`,
      action: `Instance "${newInstance.name}" deployed`,
      timestamp: new Date().toISOString(),
      type: "deploy",
    });
    setDeployDone(true);
    await new Promise((r) => setTimeout(r, 1000));
    setDeployOpen(false);
    setDeployDone(false);
    setDeploying(false);
    setDeployName("");
    setSnackbar({ open: true, message: "Instance deployed successfully!" });
  };

  const handleRestart = (id: string) => {
    addActivity({
      id: `act-${Date.now()}`,
      action: `Instance restarted`,
      timestamp: new Date().toISOString(),
      type: "restart",
    });
    setSnackbar({ open: true, message: "Instance restarted" });
  };

  const handleToggle = (id: string) => {
    const instance = instances.find((i) => i.id === id);
    if (!instance) return;
    const newStatus = instance.status === "running" ? "stopped" : "running";
    updateInstanceStatus(id, newStatus);
    addActivity({
      id: `act-${Date.now()}`,
      action: `Instance ${newStatus === "running" ? "started" : "stopped"}`,
      timestamp: new Date().toISOString(),
      type: newStatus === "running" ? "restart" : "stop",
    });
    setSnackbar({ open: true, message: `Instance ${newStatus}` });
  };

  const handleDelete = () => {
    if (!deleteId) return;
    removeInstance(deleteId);
    setDeleteId(null);
    setSnackbar({ open: true, message: "Instance deleted" });
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
            Instances
          </Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            Manage your n8n instances
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<Plus size={18} />} onClick={() => setDeployOpen(true)}>
          Deploy New Instance
        </Button>
      </Box>

      <AnimatePresence mode="popLayout">
        {instances.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: "center",
              paddingTop: 64,
              paddingBottom: 64,
              color: "#64748B",
            }}
          >
            <Server size={48} style={{ opacity: 0.3, margin: "0 auto 16px" }} />
            <Typography variant="h6" sx={{ mb: 1, color: "#94A3B8" }}>
              No instances yet
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Deploy your first n8n instance to get started.
            </Typography>
            <Button variant="contained" startIcon={<Plus size={18} />} onClick={() => setDeployOpen(true)}>
              Deploy Now
            </Button>
          </motion.div>
        ) : (
          instances.map((instance) => (
            <InstanceCard
              key={instance.id}
              instance={instance}
              onRestart={handleRestart}
              onToggle={handleToggle}
              onDelete={(id) => setDeleteId(id)}
            />
          ))
        )}
      </AnimatePresence>

      {/* Deploy Modal */}
      <Dialog open={deployOpen} onClose={() => !deploying && setDeployOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {deployDone ? "Deployment Complete!" : "Deploy New Instance"}
        </DialogTitle>
        <DialogContent>
          {deployDone ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ textAlign: "center", padding: "24px 0" }}
            >
              <CheckCircle size={64} style={{ color: "#22C55E", margin: "0 auto 16px" }} />
              <Typography variant="h6" sx={{ color: "#22C55E", mb: 1 }}>
                Instance Deployed!
              </Typography>
              <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                Your n8n instance is now live and ready.
              </Typography>
            </motion.div>
          ) : deploying ? (
            <Box sx={{ py: 3 }}>
              {deployMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: deployStep > i ? 1 : 0.4,
                    x: 0,
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                    color: deployStep > i ? "#22C55E" : "#64748B",
                  }}
                >
                  {deployStep > i ? (
                    <CheckCircle size={16} />
                  ) : deployStep === i ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Loader size={16} />
                    </motion.div>
                  ) : (
                    <Box sx={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.1)" }} />
                  )}
                  {msg}
                </motion.div>
              ))}
            </Box>
          ) : (
            <Box sx={{ pt: 2 }}>
              <TextField
                label="Instance Name"
                fullWidth
                value={deployName}
                onChange={(e) => setDeployName(e.target.value)}
                placeholder="e.g., My n8n Workspace"
                helperText="This will be used to generate your subdomain"
                autoFocus
              />
              <Box sx={{ mt: 2, p: 2, borderRadius: 2, background: "rgba(255,255,255,0.03)" }}>
                <Typography variant="caption" sx={{ color: "#64748B", display: "block", mb: 0.5 }}>
                  Your instance will be available at:
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "monospace", color: "#94A3B8" }}>
                  {deployName.trim()
                    ? `${deployName.trim().toLowerCase().replace(/\s+/g, "-")}.n8n.galaxydev.pk`
                    : "your-name.n8n.galaxydev.pk"}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          {!deploying && !deployDone && (
            <>
              <Button onClick={() => setDeployOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={handleDeploy} disabled={!deployName.trim()}>
                Deploy
              </Button>
            </>
          )}
          {deployDone && (
            <Button variant="contained" onClick={() => { setDeployOpen(false); setDeployDone(false); }}>
              Done
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Delete confirmation */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)} maxWidth="xs">
        <DialogTitle>Delete Instance?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            This action cannot be undone. All data associated with this instance will be permanently deleted.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ open: false, message: "" })}
        message={snackbar.message}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  );
}
