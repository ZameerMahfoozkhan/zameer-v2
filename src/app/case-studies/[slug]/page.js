import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `Case Study: ${project.title} — Web Development by Zameer Khan`,
    description: `How Zameer Khan built ${project.title}. ${project.caseStudy.overview.substring(0, 120)}...`,
    alternates: { canonical: `https://zameerkhan.online/case-studies/${project.slug}` },
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const cs = project.caseStudy;

  return (
    <div className="page-enter">
      <Breadcrumbs items={[
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: project.title },
      ]} />

      <section className="service-detail-header">
        <div className="section-container">
          <span className="section-tag">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{cs.overview}</p>
          <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><span>View Live Site →</span></a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"><span>View Code</span></a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="case-study-content">
            <h2>The Challenge</h2>
            <p>{cs.problem}</p>

            <h2>My Solution</h2>
            <p>{cs.solution}</p>

            <h2>Technologies Used</h2>
            <div className="project-tech" style={{ marginBottom: 32 }}>
              {project.technologies.map((t) => (<span key={t}>{t}</span>))}
            </div>

            <h2>Challenges Overcome</h2>
            <ul>
              {cs.challenges.map((c, i) => (<li key={i}>{c}</li>))}
            </ul>

            <h2>Results Achieved</h2>
            <div className="results-grid">
              {cs.results.map((r, i) => (
                <div className="result-card" key={i}>
                  <div className="result-metric">{r.metric}</div>
                  <div className="result-value">{r.value}</div>
                </div>
              ))}
            </div>

            <h2>Key Takeaways</h2>
            <ul>
              {cs.keyTakeaways.map((t, i) => (<li key={i}>{t}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Want Similar Results for Your Business?</h2>
            <p>Let&apos;s discuss your project and create a custom solution that drives real business results.</p>
            <Link href="/contact" className="btn-primary"><span>Get a Free Quote →</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
