"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Save, Trash2, AlertTriangle } from "lucide-react";
import { useN8n } from "@/lib/n8n-context";
import { c } from "@/lib/dashboard-theme";

export default function SettingsPage() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const { onboarding } = useN8n();
  const [name, setName] = useState(onboarding?.fullName || "");
  const [email] = useState(onboarding?.email || "");
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleSave = () => {
    setSnackbar({ open: true, message: "Settings saved (demo)" });
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
        Settings
      </Typography>
      <Typography variant="body2" sx={{ color: "#94A3B8", mb: 4 }}>
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              value={email}
              fullWidth
              disabled
              helperText="Email cannot be changed"
            />
            <Box>
              <Button
                variant="contained"
                startIcon={<Save size={16} />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </Card>

        <Card
          sx={{
            p: 4,
            maxWidth: 600,
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <AlertTriangle size={20} style={{ color: "#EF4444" }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#EF4444" }}>
              Danger Zone
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "#94A3B8", mb: 3 }}>
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
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
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
