import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Web Development Services — Custom Websites, E-commerce, SEO",
  description: "Professional web development services by Zameer Khan. Custom websites, website redesign, e-commerce, SEO optimization, and landing pages. Based in Ayodhya, serving worldwide.",
  alternates: { canonical: "https://zameer-v2.vercel.app/services" },
};

const serviceIcons = { code: "💻", refresh: "🔄", cart: "🛒", search: "🔍", landing: "🚀" };

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <section className="service-detail-header">
        <div className="section-container">
          <span className="section-tag">Services</span>
          <h1>Professional Web Development <span className="accent-gradient">Services</span></h1>
          <p>End-to-end web development solutions for businesses of all sizes. From custom websites to e-commerce platforms and SEO optimization — I deliver results that drive growth.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="services-grid">
            {services.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug} className="service-card">
                <div className="service-icon">{serviceIcons[service.icon]}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Not Sure What You Need?</h2>
            <p>Book a free consultation call and I&apos;ll help you figure out the best approach for your business.</p>
            <Link href="/contact" className="btn-primary"><span>Get Free Consultation</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
