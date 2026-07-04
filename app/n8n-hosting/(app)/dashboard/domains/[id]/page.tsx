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
  Globe,
  CheckCircle,
  XCircle,
  Loader,
  ArrowLeft,
  Calendar,
  Server,
  Copy,
  ExternalLink,
  Hash,
  Trash2,
  Info,
} from "lucide-react";
import { apiFetch } from "@/lib/api-client";
import { c } from "@/lib/dashboard-theme";

interface ApiInstance {
  id: string;
  name: string;
  status: string;
  subdomain: string;
}

interface ApiDomain {
  id: string;
  userId: string;
  instanceId: string;
  instance?: ApiInstance;
  domain: string;
  isDefault: boolean;
  status: "verified" | "pending" | "failed";
  verificationToken: string | null;
  verifiedAt: string | null;
  createdAt: string;
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

export default function DomainDetailPage() {
  const params = useParams();
  const router = useRouter();
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const [domain, setDomain] = useState<ApiDomain | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: "" });
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [instructions, setInstructions] = useState<string>("");
  const [instructionsLoading, setInstructionsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/domains/${params.id}`);
        if (res.ok) setDomain(await res.json());
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    })();
  }, [params.id]);

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

  if (!domain) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <XCircle size={48} style={{ color: "#EF4444", margin: "0 auto 16px" }} />
        <Typography variant="h6" sx={{ color: "#EF4444", mb: 1 }}>Domain not found</Typography>
        <Button variant="outlined" onClick={() => router.push("/n8n-hosting/dashboard/domains")} startIcon={<ArrowLeft size={16} />}>
          Back to Domains
        </Button>
      </Box>
    );
  }

  const statusConfig: Record<string, { label: string; color: string }> = {
    verified: { label: "Verified", color: "#22C55E" },
    pending: { label: "Pending", color: "#F59E0B" },
    failed: { label: "Failed", color: "#EF4444" },
  };

  const statusIcon = (s: string) =>
    s === "verified" ? <CheckCircle size={14} /> : s === "pending" ? <Loader size={14} /> : <XCircle size={14} />;

  const navigate = domain.domain.startsWith("http") ? domain.domain : `https://${domain.domain}`;

  const handleDelete = async () => {
    setActionLoading(true);
    try {
      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/domains/${domain.id}`, { method: "DELETE" });
      if (res.ok) {
        setSnackbar({ open: true, message: "Domain deleted" });
        setTimeout(() => router.push("/n8n-hosting/dashboard/domains"), 600);
      } else {
        const body = await res.json();
        setSnackbar({ open: true, message: body.message?.[0] || "Failed to delete domain" });
      }
    } catch {
      setSnackbar({ open: true, message: "Failed to delete domain" });
    } finally {
      setDeleteOpen(false);
      setActionLoading(false);
    }
  };

  const handleVerify = async () => {
    setVerifying(true);
    try {
      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/domains/${domain.id}/verify`, { method: "POST" });
      if (res.ok) {
        setSnackbar({ open: true, message: "Domain verified!" });
        const updated = await res.json();
        setDomain(updated);
      } else {
        const body = await res.json();
        setSnackbar({ open: true, message: body.message?.[0] || "Verification failed" });
        const updatedRes = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/domains/${domain.id}`);
        if (updatedRes.ok) setDomain(await updatedRes.json());
      }
    } catch {
      setSnackbar({ open: true, message: "Verification failed" });
    } finally {
      setVerifying(false);
    }
  };

  const handleShowInstructions = async () => {
    setInstructionsOpen(true);
    setInstructionsLoading(true);
    try {
      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/domains/${domain.id}/instructions`);
      if (res.ok) {
        const body = await res.json();
        setInstructions(typeof body === "string" ? body : JSON.stringify(body, null, 2));
      } else {
        setInstructions("Failed to load DNS instructions.");
      }
    } catch {
      setInstructions("Failed to load DNS instructions.");
    } finally {
      setInstructionsLoading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Button
          component={Link}
          href="/n8n-hosting/dashboard/domains"
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
              <Box
                sx={{
                  width: 56, height: 56, borderRadius: 2.5,
                  background: domain.isDefault ? "linear-gradient(135deg, #2693FF, #7C41FF)" : "linear-gradient(135deg, #22C55E, #16A34A)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Globe size={28} style={{ color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>{domain.domain}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Chip
                    icon={statusIcon(domain.status)}
                    label={statusConfig[domain.status]?.label || domain.status}
                    size="small"
                    sx={{ background: `${statusConfig[domain.status]?.color}15`, color: statusConfig[domain.status]?.color || "#94A3B8", fontWeight: 600 }}
                  />
                  {domain.isDefault && (
                    <Chip label="Default" size="small" sx={{ background: "rgba(38,147,255,0.1)", color: "#2693FF", fontWeight: 500, fontSize: "0.7rem" }} />
                  )}
                  <Typography variant="caption" sx={{ color: "#64748B" }}>ID: {domain.id.slice(0, 8)}...</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              {domain.status === "verified" && (
                <Button variant="outlined" size="small" startIcon={<ExternalLink size={14} />} component="a" href={navigate} target="_blank">
                  Open
                </Button>
              )}
              <Button variant="outlined" size="small" startIcon={<Copy size={14} />} onClick={() => { navigator.clipboard.writeText(domain.domain); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
                {copied ? "Copied" : "Copy"}
              </Button>
              {!domain.isDefault && (
                <Button variant="outlined" size="small" startIcon={<Info size={14} />} onClick={handleShowInstructions}>
                  DNS
                </Button>
              )}
              {!domain.isDefault && (
                <Button variant="outlined" size="small" color="error" startIcon={<Trash2 size={14} />} disabled={actionLoading} onClick={() => setDeleteOpen(true)}>
                  Delete
                </Button>
              )}
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#F1F5F9" }}>Domain Details</Typography>
              <Box sx={{ p: 2, borderRadius: 2, background: colors.cardBg }}>
                <DetailRow icon={<Globe size={16} />} label="Domain" value={domain.domain} />
                <DetailRow icon={<Hash size={16} />} label="Type" value={domain.isDefault ? "Default" : "Custom"} />
                <DetailRow icon={statusIcon(domain.status)} label="Status" value={statusConfig[domain.status]?.label || domain.status} />
                {domain.verifiedAt && (
                  <DetailRow icon={<CheckCircle size={16} />} label="Verified" value={new Date(domain.verifiedAt).toLocaleString()} />
                )}
                <DetailRow icon={<Calendar size={16} />} label="Created" value={new Date(domain.createdAt).toLocaleString()} />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#F1F5F9" }}>Linked Instance</Typography>
              {domain.instance ? (
                <Box
                  component={Link}
                  href={`/n8n-hosting/dashboard/instances/${domain.instanceId}`}
                  sx={{ textDecoration: "none", display: "block" }}
                >
                  <Box sx={{ p: 2, borderRadius: 2, background: colors.cardBg, "&:hover": { background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)" } }}>
                    <DetailRow icon={<Server size={16} />} label="Name" value={domain.instance.name} />
                    <DetailRow icon={<Hash size={16} />} label="Status" value={domain.instance.status} />
                    {domain.instance.subdomain && (
                      <DetailRow icon={<ExternalLink size={16} />} label="URL" value={`${domain.instance.subdomain}-n8n.galaxydev.pk`} />
                    )}
                  </Box>
                </Box>
              ) : (
                <Box sx={{ p: 2, borderRadius: 2, background: colors.cardBg }}>
                  <DetailRow icon={<Server size={16} />} label="Instance ID" value={domain.instanceId} />
                  <Typography variant="caption" sx={{ color: "#64748B" }}>
                    Instance details not available.
                  </Typography>
                </Box>
              )}
            </Box>

            {domain.verificationToken && domain.status === "pending" && (
              <Box sx={{ p: 2.5, borderRadius: 2, background: colors.iconBg("#F59E0B"), border: `1px solid ${dark ? "rgba(245,158,11,0.12)" : "rgba(245,158,11,0.3)"}` }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                  <Typography variant="caption" sx={{ color: "#F59E0B", fontWeight: 600 }}>DNS Verification Required</Typography>
                  <Button
                    size="small"
                    variant="contained"
                    disabled={verifying}
                    onClick={handleVerify}
                    sx={{ background: "#F59E0B", color: "#000", "&:hover": { background: "#D97706" }, fontWeight: 600 }}
                  >
                    {verifying ? "Verifying..." : "Verify Now"}
                  </Button>
                </Box>
                <Typography variant="caption" sx={{ color: colors.textSecondary, display: "block", mb: 1 }}>
                  Add this TXT record to your DNS provider to verify ownership:
                </Typography>
                <Box sx={{ p: 1.5, borderRadius: 1.5, background: "rgba(0,0,0,0.2)", fontFamily: "monospace", fontSize: "0.8125rem", color: colors.textPrimary, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: colors.textMuted, fontFamily: "monospace" }}>Type: </Typography>TXT{"  "}
                    <Typography variant="caption" sx={{ color: colors.textMuted, fontFamily: "monospace" }}>Name: </Typography>_n8n-verify{"  "}
                    <Typography variant="caption" sx={{ color: colors.textMuted, fontFamily: "monospace" }}>Value: </Typography>{domain.verificationToken}
                  </Box>
                  <Button size="small" variant="text" onClick={() => { navigator.clipboard.writeText(`TXT _n8n-verify ${domain.verificationToken}`); setSnackbar({ open: true, message: "DNS record copied" }); }}
                    sx={{ minWidth: "auto", color: "#64748B" }}>
                    <Copy size={14} />
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Card>
      </motion.div>

      <Dialog open={deleteOpen} onClose={() => !actionLoading && setDeleteOpen(false)} maxWidth="xs">
        <DialogTitle>Delete Domain?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            Are you sure you want to delete <strong>{domain.domain}</strong>? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)} disabled={actionLoading}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDelete} disabled={actionLoading}>Delete</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={instructionsOpen} onClose={() => setInstructionsOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>DNS Instructions</DialogTitle>
        <DialogContent>
          {instructionsLoading ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                style={{ width: 32, height: 32, margin: "0 auto", border: "3px solid rgba(38,147,255,0.1)", borderTopColor: "#2693FF", borderRadius: "50%" }} />
            </Box>
          ) : (
            <Box
              component="pre"
              sx={{
                p: 2, borderRadius: 1.5, background: "rgba(0,0,0,0.2)", fontFamily: "monospace",
                fontSize: "0.8125rem", color: colors.textPrimary, whiteSpace: "pre-wrap", overflowX: "auto",
              }}
            >
              {instructions}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInstructionsOpen(false)}>Close</Button>
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
