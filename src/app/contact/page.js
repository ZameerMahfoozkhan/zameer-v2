import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/content";

export const metadata = {
  title: "Contact Zameer Khan — Freelance Web Developer in Ayodhya",
  description: "Get in touch with Zameer Khan for web development, website design, or SEO services. Based in Ayodhya, India — available for worldwide projects. Free consultation.",
  alternates: { canonical: "https://zameer-v2.vercel.app/contact" },
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

            <form className="contact-form" action={`https://formspree.io/f/${siteConfig.formspreeId}`} method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="E-commerce">E-commerce Development</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget">
                    <option value="">Select budget...</option>
                    <option value="Under ₹10,000">Under ₹10,000</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows="6" placeholder="Tell me about your project, goals, timeline, and any specific requirements..." required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
