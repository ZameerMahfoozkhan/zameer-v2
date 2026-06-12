import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Case Studies — Web Development Results & Success Stories",
  description: "Detailed case studies showing how Zameer Khan helped businesses grow online with custom web development, e-commerce, and SEO. Real results from real projects.",
  alternates: { canonical: "https://zameer-v2.vercel.app/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div className="page-enter">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Case Studies" }]} />
      <section className="service-detail-header">
        <div className="section-container">
          <span className="section-tag">Case Studies</span>
          <h1>Real Projects, Real <span className="accent-gradient">Results</span></h1>
          <p>Detailed breakdowns of how I helped businesses solve their challenges through custom web development.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="projects-grid">
            {projects.map((project) => (
              <Link href={`/case-studies/${project.slug}`} key={project.slug} className="project-card" style={{ opacity: 1, transform: "none", display: "block" }}>
                <div className="project-glow"></div>
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((t) => (<span key={t}>{t}</span>))}
                </div>
                <span className="service-link">Read Case Study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
