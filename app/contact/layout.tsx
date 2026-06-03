import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GalaxyDev Pvt Ltd — sales, support, and career inquiries. Reach us at info@galaxydev.pk or +92 340 8882796.",
  openGraph: {
    title: "Contact | GalaxyDev Pvt Ltd",
    description:
      "Reach GalaxyDev Pvt Ltd for enterprise software, SaaS, and digital products.",
    url: "https://galaxydev.pk/contact",
  },
  twitter: {
    title: "Contact | GalaxyDev Pvt Ltd",
    description:
      "Reach GalaxyDev Pvt Ltd for enterprise software, SaaS, and digital products.",
  },
  alternates: { canonical: "https://galaxydev.pk/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
