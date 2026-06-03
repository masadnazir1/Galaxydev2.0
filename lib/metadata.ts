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
      title: `${title} | GalaxyDev`,
      description,
      url,
      siteName: "GalaxyDev",
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | GalaxyDev`,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GalaxyDev",
  url: "https://galaxydev.pk",
  logo: "https://galaxydev.pk/og-image.png",
  description:
    "Premier Pakistani software house building enterprise-grade SaaS platforms and digital products.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://linkedin.com/company/galaxydev",
    "https://github.com/galaxydev",
    "https://x.com/galaxydev",
  ],
};
