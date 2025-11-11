import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "./theme.css";
import "./scrollbar.css";
import Navbar from "./components/sections/Navbar/Navbar";
import ScrollToTop from "./components/sections/ScrollToTop/ScrollToTop";
import Footer from "./components/sections/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GalaxyDev.pk – Full-Stack Development & Digital Solutions",
  description:
    "GalaxyDev.pk provides professional full-stack web and mobile app development, UI/UX design, and cloud-based digital solutions. We build scalable, secure, and modern systems tailored for businesses and startups.",
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
