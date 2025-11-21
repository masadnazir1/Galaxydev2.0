import Head from "next/head";
import BlogCard from "../components/sections/BlogCard/BlogCard";
import BlogFullWidth from "../components/sections/BlogCard/BlogFullWidth";
import PageHead from "../components/UI/PageHead/PageHead";
import { getBlogs } from "../lib/getBlogs";
import styles from "./BlogsPage.module.css";

export default function BlogsPage() {
  const blogs = getBlogs();

  // Mocking categories for UI visualization
  const categories = ["All", "Engineering", "Design", "SaaS", "Tutorials"];

  // SEO: Structured Data for Blog
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "GalaxyDev Tech Insights",
    url: "https://www.galaxydev.pk/blog",
    description:
      "Expert insights on web development, AI integration, and software architecture.",
    publisher: {
      "@type": "Organization",
      name: "GalaxyDev",
      logo: {
        "@type": "ImageObject",
        url: "https://www.galaxydev.pk/assets/images/logo.png",
      },
    },
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title, // Assuming blog object has a title
      image: blog.image, // Assuming blog object has an image url
      author: {
        "@type": "Person",
        name: "GalaxyDev Team",
      },
    })),
  };

  return (
    <>
      <Head>
        <title>GalaxyDev Insights | Engineering, Design & Tech Trends</title>
        <meta
          name="description"
          content="Read our latest articles on Full-Stack Development, AI Automation, Next.js, and Digital Strategy. Practical tutorials and industry insights from GalaxyDev."
        />
        <meta
          name="keywords"
          content="GalaxyDev blog, software engineering tutorials, React best practices, Next.js SEO, SaaS development Pakistan, AI integration guide"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.galaxydev.pk/blog" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="blog" />
        <meta
          property="og:title"
          content="GalaxyDev Insights - The Tech Blog"
        />
        <meta
          property="og:description"
          content="Deep dives into modern web architecture and product engineering."
        />
        <meta
          property="og:image"
          content="https://www.galaxydev.pk/assets/images/blog-og.webp"
        />
        <meta property="og:url" content="https://www.galaxydev.pk/blog" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GalaxyDev Tech Blog" />
        <meta
          name="twitter:description"
          content="Latest trends in software development and digital growth."
        />
        <meta
          name="twitter:image"
          content="https://www.galaxydev.pk/assets/images/blog-og.webp"
        />

        {/* Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <PageHead
        title="Knowledge Hub"
        subtitle="Exploring the frontiers of code, design, and business logic."
        bgImage="/assets/images/blogs-header.jpg"
        overlay={true}
        overlayColor="rgba(15, 23, 42, 0.8)"
        gradientFrom="transparent"
        gradientTo="var(--background-light)"
      />

      <main className={styles.container}>
        {/* Intro & Controls Section */}
        <section className={styles.controlsSection}>
          <div className={styles.introContent}>
            <h1 className={styles.heading}>Latest Articles</h1>
            <p className={styles.intro}>
              From architectural decisions to code snippets, we share what we
              learn building scalable software for the real world.
            </p>
          </div>

          {/* Search & Filter UI */}
        </section>

        {/* Blog Grid */}
        <section className={styles.blogGrid}>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.slug}
                className={
                  blog.fullWidth ? styles.fullWidthWrapper : styles.cardWrapper
                }
              >
                {blog.fullWidth ? (
                  <BlogFullWidth blog={blog} />
                ) : (
                  <BlogCard blog={blog} />
                )}
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>No articles found. Check back soon!</p>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className={styles.newsletter}>
          <h2>Never miss an update</h2>
          <p>Join 2,000+ developers getting our weekly tech digest.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </section>
      </main>
    </>
  );
}
