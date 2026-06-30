import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "./AppShell";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { n8nLightTheme } from "@/lib/n8n-theme";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "GalaxyDev Pvt Ltd — Enterprise Software & Tech Products",
    template: "%s | GalaxyDev Pvt Ltd",
  },
  description:
    "GalaxyDev Pvt Ltd is a remote-first Pakistani software house building enterprise-grade SaaS platforms, custom software, and digital products for global clients — from Pakistan & AJK.",
  openGraph: {
    title: "GalaxyDev Pvt Ltd — Enterprise Software & Tech Products",
    description:
      "Remote-first Pakistani software house building enterprise SaaS, custom software, and digital products — from Pakistan & AJK.",
    url: "https://galaxydev.pk",
    siteName: "GalaxyDev Pvt Ltd",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GalaxyDev Pvt Ltd — Enterprise Software & Tech Products",
    description:
      "Remote-first Pakistani software house building enterprise SaaS, custom software, and digital products — from Pakistan & AJK.",
    images: ["/og-image.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GalaxyDev Pvt Ltd",
      alternateName: "GalaxyDev",
      url: "https://galaxydev.pk",
      logo: "https://galaxydev.pk/logo.png",
      description:
        "Premier Pakistani software house building enterprise-grade SaaS platforms and digital products.",
      foundingDate: "2020",
      founders: [{ "@type": "Person", name: "Ali Hassan" }],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lahore",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-340-8882796",
          contactType: "sales",
          email: "info@galaxydev.pk",
          availableLanguage: ["en", "ur"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+92-340-8882796",
          contactType: "customer support",
          email: "support@galaxydev.pk",
          availableLanguage: ["en", "ur"],
        },
      ],
      sameAs: [
        "https://linkedin.com/company/galaxydev",
        "https://github.com/galaxydev",
        "https://x.com/galaxydev",
      ],
    }),
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://galaxydev.pk"),
  alternates: { canonical: "https://galaxydev.pk" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider theme={n8nLightTheme}>
          <CssBaseline />
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
