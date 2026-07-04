"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  TextField,
  Chip,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Save, Trash2, AlertTriangle, CheckCircle, XCircle, Calendar, Building } from "lucide-react";
import { useN8n } from "@/lib/n8n-context";
import { apiFetch } from "@/lib/api-client";
import { c } from "@/lib/dashboard-theme";

interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function SettingsPage() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const { onboarding, setOnboarding } = useN8n();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/users/me");
        if (res.ok) {
          const data: UserProfile = await res.json();
          setProfile(data);
          setName(data.fullName);
          setCompanyName(data.companyName);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSave = async () => {
    if (!profile) return;
    setSaving(true);
    try {
      const res = await apiFetch("https://n8nhostingapi-production.galaxydev.pk/users/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName: name, companyName }),
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.message?.[0] || "Failed to update profile");
      }
      const updated: UserProfile = await res.json();
      setProfile(updated);
      setOnboarding({ ...onboarding, fullName: updated.fullName, company: updated.companyName } as any);
      setSnackbar({ open: true, message: "Profile updated" });
    } catch (err) {
      setSnackbar({ open: true, message: err instanceof Error ? err.message : "Something went wrong" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
        Settings
      </Typography>
      <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 4 }}>
        Manage your account settings
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card sx={{ p: 4, mb: 4, maxWidth: 600 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Profile
          </Typography>
          {loading ? (
            <Typography variant="body2" sx={{ color: colors.textMuted }}>
              Loading profile...
            </Typography>
          ) : profile ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #2693FF, #7C41FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {profile.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {profile.fullName}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Typography variant="caption" sx={{ color: colors.textMuted }}>
                      {profile.email}
                    </Typography>
                    {profile.isEmailVerified ? (
                      <CheckCircle size={14} style={{ color: "#22C55E" }} />
                    ) : (
                      <XCircle size={14} style={{ color: "#EF4444" }} />
                    )}
                  </Box>
                </Box>
              </Box>

              <Divider />

              <TextField
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <TextField
                label="Email"
                value={profile.email}
                fullWidth
                disabled
                helperText="Email cannot be changed"
              />
              <TextField
                label="Company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                fullWidth
                slotProps={{
                  input: { startAdornment: <Building size={18} style={{ color: "#94A3B8", marginRight: 10 }} /> },
                }}
              />

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Calendar size={16} style={{ color: colors.textMuted }} />
                  <Typography variant="caption" sx={{ color: colors.textMuted }}>
                    Joined {new Date(profile.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </Typography>
                </Box>
                <Chip
                  label={profile.isEmailVerified ? "Email Verified" : "Email Not Verified"}
                  size="small"
                  color={profile.isEmailVerified ? "success" : "warning"}
                  variant="outlined"
                />
              </Box>

              <Box>
                <Button
                  variant="contained"
                  startIcon={saving ? <CircularProgress size={16} sx={{ color: "#fff" }} /> : <Save size={16} />}
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </Box>
            </Box>
          ) : (
            <Typography variant="body2" sx={{ color: "#EF4444" }}>
              Failed to load profile
            </Typography>
          )}
        </Card>

        <Card
          sx={{
            p: 4,
            maxWidth: 600,
            border: `1px solid ${dark ? "rgba(239,68,68,0.2)" : "rgba(239,68,68,0.3)"}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <AlertTriangle size={20} style={{ color: "#EF4444" }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#EF4444" }}>
              Danger Zone
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3 }}>
            Once you delete your account, there is no going back. Please be certain.
          </Typography>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Trash2 size={16} />}
            onClick={() => setDeleteOpen(true)}
          >
            Delete Account
          </Button>
        </Card>
      </motion.div>

      {/* Delete confirmation */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)} maxWidth="xs">
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <AlertTriangle size={20} style={{ color: "#EF4444" }} />
          Delete Account?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: colors.textSecondary }}>
            This will permanently delete your account and all associated data, including
            your n8n instances, domains, and billing history.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={() => {
            setDeleteOpen(false);
            setSnackbar({ open: true, message: "Account deletion requested (demo)" });
          }}>
            Delete Account
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
