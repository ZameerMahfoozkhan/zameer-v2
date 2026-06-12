import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Web Development Portfolio",
  description: "Explore the web development portfolio of Zameer Khan. E-commerce stores, school websites, business sites, and more. Real projects for real businesses.",
  alternates: { canonical: "https://zameerkhan.online/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="page-enter">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Projects" }]} />

      <section className="service-detail-header">
        <div className="section-container">
          <span className="section-tag">Portfolio</span>
          <h1>My <span className="accent-gradient">Projects</span></h1>
          <p>A collection of websites and web applications I&apos;ve built for businesses across India and beyond.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.slug} style={{ opacity: 1, transform: "none" }}>
                <div className="project-glow"></div>
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (<span key={tech}>{tech}</span>))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="proj-link live">Live →</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-link github">GitHub</a>
                  <Link href={`/case-studies/${project.slug}`} className="proj-link github">Case Study</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Like What You See?</h2>
            <p>Let&apos;s create something amazing for your business too. I&apos;m ready to help.</p>
            <Link href="/contact" className="btn-primary"><span>Start Your Project →</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
