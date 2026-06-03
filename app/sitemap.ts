import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

const staticPages = [
  { url: "", priority: 1.0, changeFrequency: "monthly" as const },
  { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { url: "/products", priority: 0.9, changeFrequency: "monthly" as const },
  { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { url: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://galaxydev.pk";
  const blogSlugs = getAllSlugs();

  return [
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
