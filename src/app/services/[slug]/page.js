import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQ from "@/components/sections/FAQ";
import { services } from "@/data/services";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://zameer-v2.vercel.app/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://zameer-v2.vercel.app/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = generateServiceSchema(service);
  const faqSchema = generateFAQSchema(service.faqs);

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: service.title },
      ]} />

      <section className="service-detail-header">
        <div className="section-container">
          <span className="section-tag">{service.shortTitle}</span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      {/* Long description */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div style={{ maxWidth: 700 }}>
            {service.longDescription.split("\n\n").map((p, i) => (
              <p key={i} style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Benefits</span>
            <h2 className="section-title">Why Choose My <span className="accent">{service.shortTitle}</span> Services</h2>
          </div>
          <div className="benefits-grid">
            {service.benefits.map((b, i) => (
              <div className="benefit-card" key={i}>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Process</span>
            <h2 className="section-title">How I <span className="accent">Work</span></h2>
          </div>
          <div className="process-steps">
            {service.process.map((step, i) => (
              <div className="process-step" key={i}>
                <div className="process-step-number">{i + 1}</div>
                <h4>{step.step}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Technologies</span>
            <h2 className="section-title">Tools & <span className="accent">Technologies</span></h2>
          </div>
          <div className="tech-grid">
            {service.technologies.map((tech) => (
              <div className="tech-item" key={tech}>
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={service.faqs} />

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Ready to Get Started with {service.title}?</h2>
            <p>Let&apos;s discuss your project requirements and create a custom plan that fits your goals and budget.</p>
            <Link href="/contact" className="btn-primary"><span>Get a Free Quote →</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
