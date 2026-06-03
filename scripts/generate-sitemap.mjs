import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SITE_URL = "https://galaxydev.pk";
const NOW = new Date().toISOString();

const staticPages = [
  { loc: "", priority: "1.0", changefreq: "monthly" },
  { loc: "/services", priority: "0.9", changefreq: "monthly" },
  { loc: "/products", priority: "0.9", changefreq: "monthly" },
  { loc: "/blog", priority: "0.8", changefreq: "weekly" },
  { loc: "/about", priority: "0.7", changefreq: "monthly" },
  { loc: "/contact", priority: "0.7", changefreq: "yearly" },
];

const blogSlugs = [
  "building-saas-pakistan",
  "ai-legal-research",
  "design-system-scaling",
  "nextjs-app-router",
  "pakistan-tech-ecosystem",
  "stripe-payments-saas",
];

function xml() {
  let out = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  out += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const page of staticPages) {
    out += `  <url>\n`;
    out += `    <loc>${SITE_URL}${page.loc}</loc>\n`;
    out += `    <lastmod>${NOW}</lastmod>\n`;
    out += `    <changefreq>${page.changefreq}</changefreq>\n`;
    out += `    <priority>${page.priority}</priority>\n`;
    out += `  </url>\n`;
  }

  for (const slug of blogSlugs) {
    out += `  <url>\n`;
    out += `    <loc>${SITE_URL}/blog/${slug}</loc>\n`;
    out += `    <lastmod>${NOW}</lastmod>\n`;
    out += `    <changefreq>monthly</changefreq>\n`;
    out += `    <priority>0.6</priority>\n`;
    out += `  </url>\n`;
  }

  out += `</urlset>\n`;
  return out;
}

const outputPath = resolve(root, "sitemap.xml");
writeFileSync(outputPath, xml(), "utf-8");
console.log(`✓ Sitemap written to sitemap.xml (${staticPages.length + blogSlugs.length} URLs)`);
