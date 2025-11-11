import { getBlogs } from "../lib/getBlogs";
import BlogCard from "../components/sections/BlogCard/BlogCard";
import BlogFullWidth from "../components/sections/BlogCard/BlogFullWidth";
import styles from "./BlogsPage.module.css";
import Head from "next/head";
import PageHead from "../components/UI/PageHead/PageHead";

export default function BlogsPage() {
  const blogs = getBlogs();

  return (
    <>
      <Head>
        <title>
          GalaxyDev Blog – Web Development, Tech Insights & Digital Growth
        </title>
        <meta
          name="description"
          content="Explore GalaxyDev Blog for insights on full-stack development, AI integration, modern web design, SaaS engineering, and digital business strategy."
        />
        <meta
          name="keywords"
          content="GalaxyDev, web development, software development, full-stack, SaaS, React, Node.js, Next.js, web apps, AI tools, business automation, Pakistan"
        />
      </Head>

      <PageHead
        title="GalaxyDev Blog – Web Development & Tech Insights"
        subtitle="Read expert-level insights on web development, product engineering, AI automation, and digital transformation from GalaxyDev.pk."
        bgImage="/assets/images/blogs-header.jpg"
        overlay={true}
        overlayColor="rgba(0, 0, 0, 0.75)"
        gradientFrom="transparent"
        gradientTo="transparent"
      />

      <main className={styles.container}>
        <h1 className={styles.heading}>GalaxyDev Blog</h1>
        <p className={styles.intro}>
          Stay updated with the latest trends in modern web frameworks, system
          architecture, and digital innovation. Our team shares real-world
          experience from live projects, tutorials, and product development
          inside GalaxyDev.
        </p>

        <div className={styles.blogGrid}>
          {blogs.map((blog) =>
            blog.fullWidth ? (
              <BlogFullWidth key={blog.slug} blog={blog} />
            ) : (
              <BlogCard key={blog.slug} blog={blog} />
            )
          )}
        </div>
      </main>
    </>
  );
}
