"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Snackbar,
  Grid,
  Skeleton,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CreditCard,
  CheckCircle,
  Clock,
  Download,
  ChevronLeft,
  ChevronRight,
  Smartphone,
} from "lucide-react";
import { apiFetch } from "@/lib/api-client";
import { c } from "@/lib/dashboard-theme";

interface BillingInfo {
  id: string;
  userId: string;
  plan: string;
  status: string;
  trialEndsAt: string | null;
  nextBillingDate: string | null;
  amountDue: string;
  paymentGatewayRef: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Invoice {
  id: string;
  billingAccountId: string;
  amount: string;
  currency: string;
  status: string;
  issuedAt: string;
  paidAt: string | null;
  gatewayTransactionId: string;
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

export default function BillingPage() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = c(dark);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [billing, setBilling] = useState<BillingInfo | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [invoiceMeta, setInvoiceMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [invoicePage, setInvoicePage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const [billingRes, invRes] = await Promise.all([
          apiFetch("https://n8nhostingapi-production.galaxydev.pk/billing/account"),
          apiFetch(`https://n8nhostingapi-production.galaxydev.pk/billing/invoices?page=${invoicePage}&limit=10&sortBy=createdAt&sortOrder=DESC`),
        ]);
        if (billingRes.ok) setBilling(await billingRes.json());
        if (invRes.ok) {
          const body = await invRes.json();
          setInvoices(body.data || []);
          setInvoiceMeta(body.meta || null);
        }
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    })();
  }, [invoicePage]);

  const planLabel = billing?.plan === "trial" ? "Trial" : billing?.plan || "Unknown";
  const planColor = billing?.plan === "trial" ? "#F59E0B" : "#2693FF";
  const isTrial = billing?.status === "trial";

  const trialRemaining = billing?.trialEndsAt
    ? Math.max(0, Math.ceil((new Date(billing.trialEndsAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : null;

  return (
    <Box>
      {loading ? (
        <Box>
          <Skeleton variant="text" width={120} height={32} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={240} height={20} sx={{ mb: 4 }} />
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Skeleton variant="rounded" height={320} sx={{ mb: 3 }} />
              <Skeleton variant="rounded" height={200} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Skeleton variant="rounded" height={240} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
            Billing
          </Typography>
          <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 4 }}>
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
                      <Typography variant="overline" sx={{ color: colors.textMuted, letterSpacing: "0.1em", fontSize: "0.75rem" }}>
                        Current Plan
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
                        n8n Hosting — {billing ? (billing.plan.charAt(0).toUpperCase() + billing.plan.slice(1)) : "..."}
                      </Typography>
                    </Box>
                    <Chip
                      label={planLabel}
                      sx={{
                        background: `${planColor}15`,
                        color: planColor,
                        fontWeight: 600,
                        border: `1px solid ${planColor}30`,
                      }}
                    />
                  </Box>

                  {isTrial && trialRemaining !== null && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, color: colors.textSecondary }}>
                      <Clock size={16} />
                      <Typography variant="body2">
                        Trial {trialRemaining > 0 ? `ends in ${trialRemaining} day${trialRemaining === 1 ? "" : "s"}` : "ended"} —{" "}
                        <Box component="span" sx={{ color: "#F59E0B", fontWeight: 500 }}>
                          {billing?.amountDue && parseFloat(billing.amountDue) > 0 ? `Rs ${billing.amountDue}/month after` : "Renewal required"}
                        </Box>
                      </Typography>
                    </Box>
                  )}

                  {billing?.nextBillingDate && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, color: colors.textSecondary }}>
                      <Clock size={16} />
                      <Typography variant="body2">
                        Next billing: {new Date(billing.nextBillingDate).toLocaleDateString()} —{" "}
                        <Box component="span" sx={{ color: "#22C55E", fontWeight: 500 }}>
                          Rs {billing.amountDue}
                        </Box>
                      </Typography>
                    </Box>
                  )}

                  <Box sx={{ p: 3, borderRadius: 2, background: colors.cardBg }}>
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
                            <Typography variant="body2" sx={{ color: colors.textPrimary }}>
                              {feature}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Card>

                {/* Invoice History */}
                {invoices.length > 0 && (
                  <Card sx={{ p: 0, overflow: "hidden" }}>
                    <Box sx={{ p: 3, pb: 2, borderBottom: `1px solid ${colors.border}` }}>
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
                          {invoices.map((inv) => (
                            <TableRow key={inv.id}>
                              <TableCell>
                                <Typography variant="body2" sx={{ fontWeight: 500, fontFamily: "monospace", fontSize: "0.75rem" }}>
                                  {inv.id.slice(0, 8)}...
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                                  {new Date(inv.issuedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                  {inv.currency} {inv.amount}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Chip
                                  label={inv.status === "paid" ? "Paid" : inv.status === "pending" ? "Pending" : inv.status}
                                  size="small"
                                  sx={{
                                    background: inv.status === "paid" ? "rgba(34,197,94,0.1)" : inv.status === "pending" ? "rgba(245,158,11,0.1)" : "rgba(148,163,184,0.1)",
                                    color: inv.status === "paid" ? "#22C55E" : inv.status === "pending" ? "#F59E0B" : "#94A3B8",
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
                    {invoiceMeta && invoiceMeta.totalPages > 1 && (
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, py: 2, borderTop: `1px solid ${colors.border}` }}>
                        <IconButton disabled={!invoiceMeta.hasPreviousPage} onClick={() => setInvoicePage((p) => Math.max(1, p - 1))}>
                          <ChevronLeft size={20} />
                        </IconButton>
                        <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                          Page {invoiceMeta.page} of {invoiceMeta.totalPages}
                        </Typography>
                        <IconButton disabled={!invoiceMeta.hasNextPage} onClick={() => setInvoicePage((p) => p + 1)}>
                          <ChevronRight size={20} />
                        </IconButton>
                      </Box>
                    )}
                  </Card>
                )}
              </motion.div>
            </Grid>

            {/* Payment Details */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card sx={{ p: 3 }}>
                  <Typography variant="overline" sx={{ color: colors.textMuted, letterSpacing: "0.1em", fontSize: "0.75rem" }}>
                    Payment Details
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      p: 3,
                      borderRadius: 2,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 40, height: 40, borderRadius: 2,
                          background: "rgba(38,147,255,0.1)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#2693FF", flexShrink: 0,
                        }}
                      >
                        <Smartphone size={20} />
                      </Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Easypaisa</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                      <Box>
                        <Typography variant="caption" sx={{ color: colors.textMuted, display: "block" }}>Account Title</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Muhammad Asad Nazir</Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: colors.textMuted, display: "block" }}>Phone Number</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>03408882796</Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: colors.textMuted, display: "block" }}>Bank / Provider</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Telenor / Easypaisa</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Typography variant="caption" sx={{ color: colors.textMuted, display: "block", mt: 2, textAlign: "center" }}>
                    Use these details to make payments. Send payment confirmation to support.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      )}

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
