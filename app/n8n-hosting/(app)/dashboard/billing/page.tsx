"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Snackbar,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CreditCard,
  CheckCircle,
  Clock,
  Download,
  Plus,
} from "lucide-react";
import { c } from "@/lib/dashboard-theme";

const invoiceHistory = [
  { id: "INV-001", date: "Apr 1, 2026", amount: "Rs 100", status: "paid" },
  { id: "INV-002", date: "Mar 1, 2026", amount: "Rs 100", status: "paid" },
  { id: "INV-003", date: "Feb 1, 2026", amount: "Rs 0", status: "trial" },
];

export default function BillingPage() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleAddPayment = () => {
    setPaymentOpen(false);
    setSnackbar({ open: true, message: "Payment method saved (demo)" });
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
        Billing
      </Typography>
      <Typography variant="body2" sx={{ color: "#94A3B8", mb: 4 }}>
        Manage your subscription and payment methods
      </Typography>

      <Grid container spacing={3}>
        {/* Current Plan */}
        <Grid size={{ xs: 12, md: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card sx={{ p: 4, mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 3 }}>
                <Box>
                  <Typography variant="overline" sx={{ color: "#64748B", letterSpacing: "0.1em", fontSize: "0.75rem" }}>
                    Current Plan
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
                    n8n Hosting — Monthly
                  </Typography>
                </Box>
                <Chip
                  label="Trial"
                  sx={{
                    background: "rgba(245,158,11,0.1)",
                    color: "#F59E0B",
                    fontWeight: 600,
                    border: "1px solid rgba(245,158,11,0.2)",
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, color: "#94A3B8" }}>
                <Clock size={16} />
                <Typography variant="body2">
                  Trial ends in 2 days 14 hours —{" "}
                  <Box component="span" sx={{ color: "#F59E0B", fontWeight: 500 }}>
                    Rs 100/month after
                  </Box>
                </Typography>
              </Box>

              <Box sx={{ p: 3, borderRadius: 2, background: "rgba(255,255,255,0.03)" }}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  What&apos;s included
                </Typography>
                <Grid container spacing={1.5}>
                  {[
                    "1 n8n instance",
                    "SSL certificate",
                    "Subdomain",
                    "Daily backups",
                    "99.9% uptime",
                  ].map((feature, i) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={i}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CheckCircle size={14} style={{ color: "#22C55E" }} />
                        <Typography variant="body2" sx={{ color: "#CBD5E1" }}>
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Card>

            {/* Invoice History */}
            <Card sx={{ p: 0, overflow: "hidden" }}>
              <Box sx={{ p: 3, pb: 2, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Invoice History
                </Typography>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Invoice</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {invoiceHistory.map((inv) => (
                      <TableRow key={inv.id}>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {inv.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                            {inv.date}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {inv.amount}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={inv.status === "paid" ? "Paid" : "Trial"}
                            size="small"
                            sx={{
                              background: inv.status === "paid" ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
                              color: inv.status === "paid" ? "#22C55E" : "#F59E0B",
                              fontWeight: 500,
                              fontSize: "0.75rem",
                            }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Button size="small" variant="text" startIcon={<Download size={14} />}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </motion.div>
        </Grid>

        {/* Payment Method Sidebar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card sx={{ p: 3 }}>
              <Typography variant="overline" sx={{ color: "#64748B", letterSpacing: "0.1em", fontSize: "0.75rem" }}>
                Payment Method
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  p: 3,
                  borderRadius: 2,
                  border: "2px dashed rgba(255,255,255,0.08)",
                  textAlign: "center",
                }}
              >
                <CreditCard size={32} style={{ color: "#64748B", margin: "0 auto 12px", opacity: 0.5 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8", mb: 2 }}>
                  No payment method added
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<Plus size={16} />}
                  onClick={() => setPaymentOpen(true)}
                >
                  Add Payment Method
                </Button>
              </Box>
              <Typography variant="caption" sx={{ color: "#64748B", display: "block", mt: 2, textAlign: "center" }}>
                You won&apos;t be charged until your trial ends
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Add Payment Modal */}
      <Dialog open={paymentOpen} onClose={() => setPaymentOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Payment Method</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, pt: 2 }}>
            <TextField label="Card Number" placeholder="4242 4242 4242 4242" fullWidth />
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField label="Expiry" placeholder="MM/YY" sx={{ flex: 1 }} />
              <TextField label="CVC" placeholder="123" sx={{ flex: 1 }} />
            </Box>
            <TextField label="Cardholder Name" fullWidth />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setPaymentOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddPayment}>
            Save Card
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
