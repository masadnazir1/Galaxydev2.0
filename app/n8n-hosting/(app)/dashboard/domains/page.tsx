"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
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
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { apiFetch } from "@/lib/api-client";
import { c } from "@/lib/dashboard-theme";

interface ApiDomain {
  id: string;
  userId: string;
  instanceId: string;
  domain: string;
  isDefault: boolean;
  status: "verified" | "pending" | "failed";
  verificationToken: string | null;
  verifiedAt: string | null;
  createdAt: string;
}

interface Meta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

function DomainStatusChip({ status }: { status: string }) {
  const config: Record<string, { label: string; color: string; bg: string }> = {
    verified: { label: "Verified", color: "#22C55E", bg: "rgba(34,197,94,0.1)" },
    pending: { label: "Pending", color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
    failed: { label: "Failed", color: "#EF4444", bg: "rgba(239,68,68,0.1)" },
  };
  const c = config[status] || { label: status, color: "#94A3B8", bg: "rgba(148,163,184,0.1)" };

  return (
    <Chip
      icon={status === "verified" ? <CheckCircle size={14} /> : status === "pending" ? <Loader size={14} /> : <XCircle size={14} />}
      label={c.label}
      size="small"
      sx={{ background: c.bg, color: c.color, fontWeight: 600, fontSize: "0.75rem", border: `1px solid ${c.color}20` }}
    />
  );
}

export default function DomainsPage() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);

  const [domains, setDomains] = useState<ApiDomain[]>([]);
  const [meta, setMeta] = useState<Meta>({ page: 1, limit: 10, totalItems: 0, totalPages: 0, hasNextPage: false, hasPreviousPage: false });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("DESC");
  const [search, setSearch] = useState("");

  const [addOpen, setAddOpen] = useState(false);
  const [domainInput, setDomainInput] = useState("");
  const [instanceId, setInstanceId] = useState("");
  const [instances, setInstances] = useState<{ id: string; name: string }[]>([]);
  const [verificationToken, setVerificationToken] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const fetchDomains = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", String(limit));
      params.set("sortBy", sortBy);
      params.set("sortOrder", sortOrder);
      if (search.trim()) params.set("search", search.trim());

      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/domains?${params}`);
      if (res.ok) {
        const body = await res.json();
        setDomains(body.data || []);
        setMeta(body.meta);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, [page, limit, sortBy, sortOrder, search]);

  useEffect(() => { fetchDomains(); }, [fetchDomains]);

  const handleDelete = async (id: string) => {
    try {
      const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/domains/${id}`, { method: "DELETE" });
      if (res.ok) {
        setSnackbar({ open: true, message: "Domain removed" });
        fetchDomains();
      } else {
        const body = await res.json();
        setSnackbar({ open: true, message: body.message?.[0] || "Failed to remove domain" });
      }
    } catch {
      setSnackbar({ open: true, message: "Failed to remove domain" });
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3, flexWrap: "wrap", gap: 2 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>Domains</Typography>
          <Typography variant="body2" sx={{ color: colors.textSecondary }}>Manage your custom domains</Typography>
        </Box>
        <Button variant="contained" startIcon={<Plus size={18} />} onClick={async () => {
          setAddOpen(true);
          setError("");
          setVerificationToken(null);
          setDomainInput("");
          setInstanceId("");
          try {
            const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/instances?page=1&limit=100");
            if (res.ok) {
              const body = await res.json();
              setInstances((body.data || body.instances || []).map((i: { id: string; name: string }) => ({ id: i.id, name: i.name })));
            }
          } catch {}
        }}>
          Add Custom Domain
        </Button>
      </Box>

      <Card sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
          <TextField
            placeholder="Search domains..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            size="small"
            sx={{ minWidth: 240 }}
            slotProps={{
              input: { startAdornment: <InputAdornment position="start"><Search size={18} style={{ color: "#94A3B8" }} /></InputAdornment> },
            }}
          />
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Sort by</InputLabel>
            <Select value={sortBy} label="Sort by" onChange={(e) => setSortBy(e.target.value)}>
              <MenuItem value="createdAt">Created</MenuItem>
              <MenuItem value="domain">Domain</MenuItem>
              <MenuItem value="status">Status</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" size="small" onClick={() => setSortOrder((o) => (o === "ASC" ? "DESC" : "ASC"))} sx={{ whiteSpace: "nowrap" }}>
            {sortOrder === "DESC" ? "Newest" : "Oldest"}
          </Button>
        </Box>
      </Card>

      {loading ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ width: 32, margin: "0 auto 16px" }}>
            <Loader size={32} style={{ color: "#64748B" }} />
          </motion.div>
          <Typography variant="body2" sx={{ color: "#64748B" }}>Loading domains...</Typography>
        </Box>
      ) : domains.length === 0 ? (
        <Card sx={{ textAlign: "center", py: 8 }}>
          <Globe size={48} style={{ opacity: 0.3, margin: "0 auto 16px", color: "#64748B" }} />
          <Typography variant="h6" sx={{ mb: 1, color: "#94A3B8" }}>
            {search.trim() ? "No domains match your search" : "No domains yet"}
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "#64748B" }}>
            {search.trim() ? "Try a different search term" : "Add your first custom domain to get started."}
          </Typography>
        </Card>
      ) : (
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
                    width: 40, height: 40, borderRadius: 2,
                    background: domain.isDefault ? "rgba(38,147,255,0.1)" : domain.status === "verified" ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: domain.isDefault ? "#2693FF" : domain.status === "verified" ? "#22C55E" : "#F59E0B",
                    flexShrink: 0,
                  }}
                >
                  <Globe size={20} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      <Box component={Link} href={`/n8n-hosting/dashboard/domains/${domain.id}`} sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "#2693FF" } }}>
                        {domain.domain}
                      </Box>
                    </Typography>
                    {domain.isDefault && (
                      <Chip label="Default" size="small" sx={{ background: "rgba(38,147,255,0.1)", color: "#2693FF", fontWeight: 500, fontSize: "0.7rem", height: 20 }} />
                    )}
                  </Box>
                  <DomainStatusChip status={domain.status} />
                  {domain.verifiedAt && (
                    <Typography variant="caption" sx={{ color: "#64748B", display: "block", mt: 0.5 }}>
                      Verified {new Date(domain.verifiedAt).toLocaleDateString()}
                    </Typography>
                  )}
                </Box>
                {!domain.isDefault && (
                  <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
                    <Button size="small" variant="outlined" startIcon={<ExternalLink size={14} />}
                      onClick={() => setSnackbar({ open: true, message: "DNS instructions copied" })}>
                      DNS
                    </Button>
                    <IconButton size="small" color="error" onClick={() => handleDelete(domain.id)}>
                      <Trash2 size={16} />
                    </IconButton>
                  </Box>
                )}
              </Card>
            </motion.div>
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

      {/* Add Domain Modal */}
      <Dialog open={addOpen} onClose={() => { setAddOpen(false); setVerificationToken(null); }} maxWidth="sm" fullWidth>
        <DialogTitle>{verificationToken ? "Domain Added" : "Add Custom Domain"}</DialogTitle>
        <DialogContent>
          {verificationToken ? (
            <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} style={{ textAlign: "center" }}>
                <CheckCircle size={48} style={{ color: "#22C55E", margin: "0 auto 12px" }} />
                <Typography variant="h6" sx={{ color: "#22C55E", mb: 0.5 }}>Domain Added!</Typography>
                <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 2 }}>
                  Verify ownership by adding this TXT record to your DNS provider:
                </Typography>
              </motion.div>
              <Box sx={{ p: 2.5, borderRadius: 2, background: colors.iconBg("#2693FF"), border: `1px solid ${dark ? "rgba(38,147,255,0.12)" : "rgba(38,147,255,0.3)"}` }}>
                <Typography variant="caption" sx={{ color: "#2693FF", fontWeight: 600, display: "block", mb: 1.5 }}>DNS Verification</Typography>
                <Box sx={{ p: 1.5, borderRadius: 1.5, background: "rgba(0,0,0,0.2)", fontFamily: "monospace", fontSize: "0.8125rem", color: colors.textPrimary, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: colors.textMuted, fontFamily: "monospace" }}>Type: </Typography>TXT{"  "}
                    <Typography variant="caption" sx={{ color: colors.textMuted, fontFamily: "monospace" }}>Name: </Typography>_n8n-verify{"  "}
                    <Typography variant="caption" sx={{ color: colors.textMuted, fontFamily: "monospace" }}>Value: </Typography>{verificationToken}
                  </Box>
                  <IconButton size="small" onClick={() => { navigator.clipboard.writeText(`TXT _n8n-verify ${verificationToken}`); setSnackbar({ open: true, message: "DNS record copied" }); }} sx={{ color: colors.textMuted }}>
                    <Copy size={14} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField label="Domain" placeholder="n8n.mydomain.com" fullWidth value={domainInput}
                onChange={(e) => { setDomainInput(e.target.value); setError(""); }}
                autoFocus error={!!error} helperText={error} />
              <FormControl fullWidth size="small">
                <InputLabel>Instance</InputLabel>
                <Select value={instanceId} label="Instance" onChange={(e) => setInstanceId(e.target.value)}>
                  {instances.map((inst) => (
                    <MenuItem key={inst.id} value={inst.id}>{inst.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          {!verificationToken && (
            <>
              <Button onClick={() => { setAddOpen(false); setVerificationToken(null); }}>Cancel</Button>
              <Button variant="contained" onClick={async () => {
                if (!domainInput.trim() || !instanceId) return;
                try {
                  const params = new URLSearchParams({ instanceId });
                  const res = await apiFetch(`https://n8nhostingapi-production.galaxydev.pk/domains?${params}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ domain: domainInput.trim() }),
                  });
                  if (res.ok) {
                    const body = await res.json();
                    setVerificationToken(body.verificationToken);
                    fetchDomains();
                  } else {
                    const body = await res.json();
                    setError(body.message?.[0] || "Failed to add domain");
                  }
                } catch {
                  setError("Network error. Please try again.");
                }
              }} disabled={!domainInput.trim() || !instanceId}>
                Add Domain
              </Button>
            </>
          )}
          {verificationToken && (
            <Button variant="contained" onClick={() => { setAddOpen(false); setVerificationToken(null); }}>Done</Button>
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
