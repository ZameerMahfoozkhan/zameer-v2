import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { blogPosts } from "@/data/content";

export const metadata = {
  title: "Blog — Web Development, SEO & Design Tips",
  description: "Read articles about web development, SEO optimization, website design trends, and business tips by Zameer Mahfooz Khan, freelance web developer in Ayodhya.",
  alternates: { canonical: "https://zameerkhan.online/blog" },
};

export default function BlogPage() {
  return (
    <div className="page-enter">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Blog" }]} />
      <section className="service-detail-header">
        <div className="section-container">
          <span className="section-tag">Blog</span>
          <h1>Web Development <span className="accent-gradient">Insights</span></h1>
          <p>Tips, tutorials, and insights about web development, SEO, design, and growing your business online.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-read-more">Read Article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
