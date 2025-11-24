import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Script from "next/script"; // Import Script for JSON-LD
import Footer from "./components/sections/Footer/Footer";
import Navbar from "./components/sections/Navbar/Navbar";
import ScrollToTop from "./components/sections/ScrollToTop/ScrollToTop";
import "./globals.css";
import "./scrollbar.css";
import "./theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // PROFESSIONAL TITLE CHANGE
  title: "GalaxyDev.pk – Software Engineering & Digital Product Development",
  // ENHANCED DESCRIPTION FOR TECH FOCUS AND SEO
  description:
    "GalaxyDev.pk provides professional full-cycle software engineering, scalable cloud architecture, and modern digital product development. We build secure, performance-optimized, and industry-standard systems tailored for businesses and startups.",
};

// JSON-LD Schema Data (LocalBusiness)
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GalaxyDev.pk",
  image: "https://galaxydev.pk/logo.png", // Replace with actual logo URL
  url: "https://galaxydev.pk/",
  telephone: "+92-XXX-XXXXXXX", // Replace with actual phone number
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address", // Replace with actual address
    addressLocality: "Your City",
    addressRegion: "Your Region",
    postalCode: "Your Postal Code",
    addressCountry: "PK",
  },
  priceRange: "$$", // Example: Adjust based on your pricing
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://galaxydev.pk/search?q={search_term_string}", // Replace with actual search URL
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Galaxydev" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD for SEO 📈 */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
          key="json-ld-localbusiness"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </>
      </body>
    </html>
  );
}
