import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQ from "@/components/sections/FAQ";
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = {
  title: "Freelance Web Developer in Ayodhya | Zameer Khan — Hire for Your Project",
  description: "Hire a freelance web developer in Ayodhya. Zameer Khan offers affordable, professional web development services. React, Next.js & Node.js expert. 3+ years experience, 40+ projects.",
  alternates: { canonical: "https://zameerkhan.online/freelance-web-developer-ayodhya" },
  keywords: ["freelance web developer ayodhya", "freelance web developer in ayodhya", "hire web developer ayodhya", "freelance developer ayodhya"],
};

const faqs = [
  { q: "Why hire a freelance web developer instead of an agency?", a: "Freelancers offer more personalized attention, faster communication, and competitive pricing. You work directly with the developer — no middlemen, no project managers diluting your vision. I provide the expertise of an agency with the flexibility and affordability of a freelancer." },
  { q: "How do you handle project communication?", a: "I use WhatsApp, email, and video calls for project communication. You'll get regular updates, milestone demos, and quick responses. Being based in Ayodhya, I'm also available for in-person meetings for local clients." },
  { q: "Do you work with clients outside Ayodhya?", a: "Absolutely! While I'm based in Ayodhya, I work with clients from across India and internationally. Modern collaboration tools make remote work seamless and efficient." },
  { q: "What is your typical project timeline?", a: "Simple websites take 1-2 weeks, business websites 2-4 weeks, and complex projects 4-8 weeks. I provide clear timelines upfront and keep you updated throughout the development process." },
  { q: "Do you offer ongoing support after project completion?", a: "Yes, I offer maintenance packages that include bug fixes, updates, performance monitoring, and content changes. I'm committed to the long-term success of every website I build." },
];

export default function FreelanceWebDeveloperAyodhyaPage() {
  const localSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Freelance Web Developer in Ayodhya" }]} />

      <section className="location-hero">
        <div className="section-container">
          <span className="section-tag">📍 Ayodhya, India</span>
          <h1><span className="accent-gradient">Freelance Web Developer</span> in Ayodhya</h1>
          <p>Hire a professional freelance web developer in Ayodhya for your next project. I&apos;m Zameer Khan — with 3+ years of experience and 40+ projects delivered, I build websites that perform, rank, and convert.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container location-content">
          <h2>Hire a Freelance Developer in Ayodhya</h2>
          <p>As a freelance web developer in Ayodhya, I provide end-to-end web development services for businesses of all sizes. From initial consultation to final deployment, I handle every aspect of your web project with attention to detail and commitment to quality.</p>
          <p>Unlike agencies with high overhead costs, I offer competitive freelance rates without compromising on quality. You work directly with me throughout the project — ensuring clear communication, faster turnaround, and a final product that matches your vision perfectly.</p>

          <h2>What I Offer as a Freelance Developer</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Custom Websites</h3>
              <p>Hand-coded websites built from scratch, tailored to your business needs and brand identity.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>E-commerce Stores</h3>
              <p>Online stores with product management, payment integration, and optimized checkout flows.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>SEO Optimization</h3>
              <p>Search engine optimization that helps your business rank higher on Google and attract organic traffic.</p>
            </div>
          </div>

          <h2>Why Choose Me as Your Freelance Developer</h2>
          <div className="benefits-grid">
            <div className="benefit-card"><h4>3+ Years Experience</h4><p>Proven track record of delivering successful web projects.</p></div>
            <div className="benefit-card"><h4>40+ Projects Delivered</h4><p>From landing pages to full e-commerce platforms.</p></div>
            <div className="benefit-card"><h4>Direct Communication</h4><p>Work directly with the developer — no middlemen.</p></div>
            <div className="benefit-card"><h4>Competitive Pricing</h4><p>Quality work at freelance rates, not agency prices.</p></div>
            <div className="benefit-card"><h4>Modern Tech Stack</h4><p>React, Next.js, Node.js — the latest technologies.</p></div>
            <div className="benefit-card"><h4>Ongoing Support</h4><p>Post-launch maintenance and support packages.</p></div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Ready to Hire a Freelance Developer?</h2>
            <p>Get a free consultation and custom quote for your project. I&apos;m ready to bring your vision to life.</p>
            <Link href="/contact" className="btn-primary"><span>Hire Me Now →</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
