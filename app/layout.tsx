import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

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
    default: "GalaxyDev — Enterprise Software & Tech Products",
    template: "%s | GalaxyDev",
  },
  description:
    "GalaxyDev is a premier Pakistani software house building enterprise-grade SaaS platforms, custom software, and digital products for global clients.",
  openGraph: {
    title: "GalaxyDev — Enterprise Software & Tech Products",
    description:
      "Premier Pakistani software house building enterprise SaaS, custom software, and digital products.",
    url: "https://galaxydev.pk",
    siteName: "GalaxyDev",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GalaxyDev — Enterprise Software & Tech Products",
    description:
      "Premier Pakistani software house building enterprise SaaS, custom software, and digital products.",
    images: ["/og-image.png"],
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
