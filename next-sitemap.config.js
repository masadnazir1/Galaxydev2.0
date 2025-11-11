/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.galaxydev.pk/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
