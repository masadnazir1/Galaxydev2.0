import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCalendar, FaUser } from "react-icons/fa";
import { remark } from "remark";
import html from "remark-html";
import { getBlogs } from "../../lib/getBlogs";
import styles from "../BlogPost.module.css";

// Force static rendering for SEO-friendly static pages
export const dynamic = "force-static";

export default async function BlogPost(props) {
  const { params } = await props;
  const { slug } = await params;

  const blogs = getBlogs();

  const blog = blogs.find((b) => b.slug == slug);

  if (!blog) return notFound();

  const contentHtml = String(
    await remark()
      .use(html)
      .process(blog.content || ""),
  );

  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/blogs" className={styles.backLink}>
          <FaArrowLeft /> Back to Blogs
        </Link>
      </nav>

      <article className={styles.article}>
        {blog.image && (
          <div className={styles.imageWrapper}>
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className={styles.image}
              priority
            />
          </div>
        )}

        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>
              <FaCalendar style={{ marginRight: "8px" }} />
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {blog.author && (
              <span className={styles.author}>
                <FaUser style={{ marginRight: "6px" }} />
                {blog.author}
              </span>
            )}
          </div>
          <h1 className={styles.title}>{blog.title}</h1>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {blog.tags && blog.tags.length > 0 && (
          <div className={styles.content}>
            <div className={styles.tagWrapper}>
              {blog.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
