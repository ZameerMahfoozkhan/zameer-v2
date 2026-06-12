import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/sections/FAQ";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials, skills, homepageFaqs, siteConfig } from "@/data/content";
import { generateFAQSchema } from "@/lib/schema";

export const metadata = {
  title: "Zameer Khan — Freelance Web Developer & Website Designer in Ayodhya | React & Next.js Expert",
  description:
    "Zameer Mahfooz Khan is a freelance web developer and website designer based in Ayodhya, India. Specializing in React, Next.js, Node.js, and SEO optimization. Building modern, high-performance websites for businesses worldwide. 3+ years experience, 40+ projects delivered.",
  alternates: { canonical: "https://zameer-v2.vercel.app" },
};

const serviceIcons = {
  code: "💻",
  refresh: "🔄",
  cart: "🛒",
  search: "🔍",
  landing: "🚀",
};

const techIcons = {
  html: "🌐", css: "🎨", javascript: "⚡", typescript: "🔷",
  react: "⚛️", nextjs: "▲", nodejs: "🟢", mongodb: "🍃",
  seo: "📈", speed: "⚡", responsive: "📱", python: "🐍",
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(homepageFaqs);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for hire
            </div>
            <div className="hero-location-badge">
              📍 Ayodhya, India · Worldwide
            </div>
          </div>

          <h1 className="hero-title">
            Freelance <span className="accent-gradient">Web Developer</span> &amp; Website Designer in Ayodhya
          </h1>

          <p className="hero-description">
            I help businesses build modern, fast, and SEO-optimized websites that rank on Google and convert visitors into customers. Based in Ayodhya, serving clients worldwide.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              <span>Start a Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/projects" className="btn-secondary">
              <span>View My Work</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{siteConfig.experience}</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">{siteConfig.projectCount}</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">{siteConfig.clientCount}</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Avatar Visual */}
        <div className="hero-visual">
          <div className="avatar-ring outer-ring"></div>
          <div className="avatar-ring mid-ring"></div>
          <div className="avatar-container">
            <Image
              src="/avatar.png"
              alt="Zameer Mahfooz Khan — Freelance Web Developer in Ayodhya, India"
              width={380}
              height={380}
              className="avatar-img"
              priority
            />
          </div>

          <div className="float-badge badge-react" style={{ "--delay": "0s" }}>⚛️ React</div>
          <div className="float-badge badge-next" style={{ "--delay": "0.4s" }}>▲ Next.js</div>
          <div className="float-badge badge-node" style={{ "--delay": "0.8s" }}>🟢 Node.js</div>
          <div className="float-badge badge-ts" style={{ "--delay": "1.2s" }}>🔷 TypeScript</div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <section className="trusted-section">
        <div className="section-container">
          <span className="trusted-label">Trusted by businesses across India</span>
          <div className="trusted-logos">
            <span className="trusted-logo">7070 Sports</span>
            <span className="trusted-logo">Little Flower School</span>
            <span className="trusted-logo">Anufix</span>
            <span className="trusted-logo">24x7 Customer Service</span>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section" id="services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">What I Do</span>
            <h2 className="section-title">My <span className="accent">Services</span></h2>
            <p className="section-subtitle">End-to-end web development services to help your business grow online.</p>
          </div>
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

      {/* ===== TECH STACK ===== */}
      <section className="section" id="tech-stack">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Technologies</span>
            <h2 className="section-title">My <span className="accent">Tech Stack</span></h2>
            <p className="section-subtitle">Modern technologies I use to build fast, scalable, and SEO-friendly websites.</p>
          </div>
          <div className="tech-grid">
            {skills.map((skill) => (
              <div className="tech-item" key={skill.name}>
                <span className="tech-icon">{techIcons[skill.icon]}</span>
                <span className="tech-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section" id="projects">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
            <p className="section-subtitle">Real projects delivered for real businesses.</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div className="project-card" key={project.slug} style={{ opacity: 1, transform: "none" }}>
                <div className="project-glow"></div>
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="proj-link live">Live →</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-link github">GitHub</a>
                  <Link href={`/case-studies/${project.slug}`} className="proj-link github">Case Study</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/projects" className="btn-secondary">
              <span>View All Projects</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonials">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Reviews</span>
            <h2 className="section-title">What <span className="accent">Clients Say</span></h2>
            <p className="section-subtitle">Don&apos;t just take my word for it — hear from my clients.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQ faqs={homepageFaqs} />

      {/* ===== CTA BANNER ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Ready to Build Your Next Website?</h2>
            <p>Let&apos;s discuss your project and create something amazing together. Free consultation, no obligations.</p>
            <Link href="/contact" className="btn-primary">
              <span>Get a Free Quote</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section" id="contact">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">Let&apos;s <span className="accent">Connect</span></h2>
            <p className="section-subtitle">Have a project in mind? I&apos;d love to hear about it.</p>
          </div>
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
                <span style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>Available for remote work worldwide</span>
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
            </div>

            <form className="contact-form" id="contactForm" action={`https://formspree.io/f/${siteConfig.formspreeId}`} method="POST">
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
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service">
                  <option value="">Select a service...</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="E-commerce">E-commerce Development</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Landing Page">Landing Page Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project, timeline, and budget..." required></textarea>
              </div>
              <button type="submit" className="btn-submit" id="submitBtn">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
