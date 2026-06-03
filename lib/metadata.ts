import type { Metadata } from "next";

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/og-image.png",
}: PageMetadataParams): Metadata {
  const url = `https://galaxydev.pk${path}`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | GalaxyDev Pvt Ltd`,
      description,
      url,
      siteName: "GalaxyDev Pvt Ltd",
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | GalaxyDev Pvt Ltd`,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GalaxyDev Pvt Ltd",
  url: "https://galaxydev.pk",
  logo: "https://galaxydev.pk/og-image.png",
  description:
    "Remote-first Pakistani software house building enterprise-grade SaaS platforms and digital products — from Pakistan & AJK.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-340-8882796",
    contactType: "sales",
    email: "info@galaxydev.pk",
  },
  sameAs: [
    "https://linkedin.com/company/galaxydev",
    "https://github.com/galaxydev",
    "https://x.com/galaxydev",
  ],
};
