import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/content";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact Zameer Mahfooz Khan — Freelance Web Developer in Ayodhya",
  description: "Get in touch with Zameer Mahfooz Khan for web development, website design, or SEO services. Based in Ayodhya, India — available for worldwide projects. Free consultation.",
  alternates: { canonical: "https://zameerkhan.online/contact" },
};

export default function ContactPage() {
  return (
    <div className="page-enter">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Contact" }]} />

      <section className="service-detail-header">
        <div className="section-container">
          <span className="section-tag">Get in Touch</span>
          <h1>Let&apos;s <span className="accent-gradient">Work Together</span></h1>
          <p>Have a project in mind? I&apos;d love to hear about it. Fill out the form below or reach out directly — I typically respond within 24 hours.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h4>Email</h4>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h4>Location</h4>
                <span>Ayodhya, Uttar Pradesh, India</span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>Available worldwide for remote projects</span>
              </div>
              <div className="contact-card">
                <div className="contact-icon">💼</div>
                <h4>LinkedIn</h4>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">zameer-mahfooz-khan</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🐙</div>
                <h4>GitHub</h4>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">ZameerMahfoozkhan</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📸</div>
                <h4>Instagram</h4>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">@web_by_zam</a>
              </div>
            </div>

            <ContactForm showBudget={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
