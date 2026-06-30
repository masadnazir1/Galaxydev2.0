"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  CheckCircle,
  XCircle,
  Loader,
  Copy,
  Trash2,
  Plus,
  ExternalLink,
} from "lucide-react";
import { useN8n, type Domain } from "@/lib/n8n-context";
import { c } from "@/lib/dashboard-theme";

function DomainStatusChip({ status }: { status: Domain["status"] }) {
  const config = {
    verified: { label: "Verified", color: "#22C55E", bg: "rgba(34,197,94,0.1)" },
    pending: { label: "Pending", color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
    failed: { label: "Failed", color: "#EF4444", bg: "rgba(239,68,68,0.1)" },
  }[status];

  return (
    <Chip
      icon={
        status === "verified" ? (
          <CheckCircle size={14} />
        ) : status === "pending" ? (
          <Loader size={14} />
        ) : (
          <XCircle size={14} />
        )
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

export default function DomainsPage() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const { domains, addDomain, updateDomainStatus, removeDomain, addActivity } = useN8n();
  const [addOpen, setAddOpen] = useState(false);
  const [domainInput, setDomainInput] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleAddDomain = async () => {
    if (!domainInput.trim()) return;
    const newDomain: Domain = {
      id: `dom-${Date.now()}`,
      domain: domainInput.trim(),
      status: "pending",
      isDefault: false,
    };
    addDomain(newDomain);
    setAddOpen(true);
    setSnackbar({ open: true, message: "Domain added. Verify it to start using." });
  };

  const handleVerify = async () => {
    setVerifying(true);
    await new Promise((r) => setTimeout(r, 2000));
    const domain = domains[0];
    if (domain) {
      updateDomainStatus(domain.id, "verified");
      setVerified(true);
      addActivity({
        id: `act-${Date.now()}`,
        action: `Domain "${domain.domain}" verified`,
        timestamp: new Date().toISOString(),
        type: "domain",
      });
    }
    setVerifying(false);
    setTimeout(() => {
      setAddOpen(false);
      setVerified(false);
      setDomainInput("");
      setSnackbar({ open: true, message: "Domain verified successfully!" });
    }, 800);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
            Domains
          </Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            Manage your custom domains
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<Plus size={18} />} onClick={() => setAddOpen(true)}>
          Add Custom Domain
        </Button>
      </Box>

      <AnimatePresence mode="popLayout">
        {domains.map((domain) => (
          <motion.div
            key={domain.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card sx={{ p: 3, mb: 2, display: "flex", alignItems: "center", gap: 2.5, flexWrap: "wrap" }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: domain.isDefault
                    ? "rgba(38,147,255,0.1)"
                    : domain.status === "verified"
                    ? "rgba(34,197,94,0.1)"
                    : "rgba(245,158,11,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: domain.isDefault
                    ? "#2693FF"
                    : domain.status === "verified"
                    ? "#22C55E"
                    : "#F59E0B",
                  flexShrink: 0,
                }}
              >
                <Globe size={20} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {domain.domain}
                  </Typography>
                  {domain.isDefault && (
                    <Chip
                      label="Default"
                      size="small"
                      sx={{
                        background: "rgba(38,147,255,0.1)",
                        color: "#2693FF",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                        height: 20,
                      }}
                    />
                  )}
                </Box>
                <DomainStatusChip status={domain.status} />
              </Box>
              {!domain.isDefault && (
                <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<ExternalLink size={14} />}
                    onClick={() => setSnackbar({ open: true, message: "DNS instructions copied" })}
                  >
                    DNS
                  </Button>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => {
                      removeDomain(domain.id);
                      setSnackbar({ open: true, message: "Domain removed" });
                    }}
                  >
                    <Trash2 size={16} />
                  </IconButton>
                </Box>
              )}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Add Domain Modal */}
      <Dialog open={addOpen} onClose={() => { if (!verifying) { setAddOpen(false); setVerified(false); setDomainInput(""); } }} maxWidth="sm" fullWidth>
        <DialogTitle>{verified ? "Domain Verified!" : "Add Custom Domain"}</DialogTitle>
        <DialogContent>
          {verified ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ textAlign: "center", padding: "24px 0" }}
            >
              <CheckCircle size={64} style={{ color: "#22C55E", margin: "0 auto 16px" }} />
              <Typography variant="h6" sx={{ color: "#22C55E" }}>
                Domain Verified!
              </Typography>
            </motion.div>
          ) : verifying ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                style={{ width: 48, height: 48, margin: "0 auto 16px", border: "3px solid rgba(38,147,255,0.1)", borderTopColor: "#2693FF", borderRadius: "50%" }}
              />
              <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                Verifying DNS configuration...
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Domain"
                placeholder="your-domain.com"
                fullWidth
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                autoFocus
              />
              <Box sx={{ p: 2.5, borderRadius: 2, background: "rgba(38,147,255,0.05)", border: "1px solid rgba(38,147,255,0.12)" }}>
                <Typography variant="caption" sx={{ color: "#2693FF", fontWeight: 600, display: "block", mb: 1.5 }}>
                  DNS Configuration
                </Typography>
                <Typography variant="caption" sx={{ color: "#94A3B8", display: "block", mb: 1 }}>
                  Add this CNAME record to your DNS provider:
                </Typography>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 1.5,
                    background: "rgba(0,0,0,0.2)",
                    fontFamily: "monospace",
                    fontSize: "0.8125rem",
                    color: "#CBD5E1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="caption" sx={{ color: "#64748B", fontFamily: "monospace" }}>Type: </Typography>CNAME
                    {"  "}
                    <Typography variant="caption" sx={{ color: "#64748B", fontFamily: "monospace" }}>Name: </Typography>@
                    {"  "}
                    <Typography variant="caption" sx={{ color: "#64748B", fontFamily: "monospace" }}>Value: </Typography>your-name.n8n.galaxydev.pk
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => {
                      navigator.clipboard.writeText("CNAME @ your-name.n8n.galaxydev.pk");
                      setSnackbar({ open: true, message: "DNS config copied" });
                    }}
                    sx={{ color: "#64748B" }}
                  >
                    <Copy size={14} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          {!verifying && !verified && (
            <>
              <Button onClick={() => { setAddOpen(false); setDomainInput(""); }}>Cancel</Button>
              <Button variant="contained" onClick={handleAddDomain} disabled={!domainInput.trim()}>
                Add Domain
              </Button>
              <Button
                variant="contained"
                onClick={handleVerify}
                disabled={!domainInput.trim()}
                sx={{ ml: 1 }}
              >
                Add & Verify
              </Button>
            </>
          )}
          {verified && (
            <Button variant="contained" onClick={() => { setAddOpen(false); setVerified(false); setDomainInput(""); }}>
              Done
            </Button>
          )}
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
