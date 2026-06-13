import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQ from "@/components/sections/FAQ";
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = {
  title: "Web Developer in Ayodhya | Zameer Mahfooz Khan — Custom Websites & Web Apps",
  description: "Looking for a web developer in Ayodhya? Zameer Mahfooz Khan builds modern, SEO-optimized websites for businesses in Ayodhya, Uttar Pradesh. React, Next.js & Node.js specialist. Get a free quote.",
  alternates: { canonical: "https://zameerkhan.online/web-developer-ayodhya" },
  keywords: ["web developer ayodhya", "web developer in ayodhya", "website developer ayodhya", "best web developer ayodhya"],
};

const faqs = [
  { q: "Who is the best web developer in Ayodhya?", a: "Zameer Mahfooz Khan is a highly skilled freelance web developer based in Ayodhya, specializing in React, Next.js, and modern web technologies. With 3+ years of experience and 40+ projects delivered, he provides professional web development services for businesses of all sizes." },
  { q: "How much does a web developer charge in Ayodhya?", a: "Web development costs in Ayodhya vary based on project complexity. Simple websites start from ₹10,000-15,000, while feature-rich websites and e-commerce platforms range from ₹25,000 to ₹1,00,000+. Contact Zameer for a free quote tailored to your needs." },
  { q: "Can I get a custom website built in Ayodhya?", a: "Yes! Zameer Mahfooz Khan builds fully custom websites from scratch using modern technologies. Whether you need a business website, e-commerce store, or web application, he delivers tailored solutions for Ayodhya businesses." },
  { q: "Do you provide SEO services along with web development?", a: "Absolutely. Every website built by Zameer includes on-page SEO optimization. Additional SEO services including keyword research, content strategy, and ongoing optimization are also available." },
  { q: "How long does it take to build a website in Ayodhya?", a: "Typical timelines range from 1-2 weeks for simple websites to 4-8 weeks for complex applications. Zameer provides clear timelines and keeps you updated throughout the development process." },
];

export default function WebDeveloperAyodhyaPage() {
  const localSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Web Developer in Ayodhya" }]} />

      <section className="location-hero">
        <div className="section-container">
          <span className="section-tag">📍 Ayodhya, India</span>
          <h1>Professional <span className="accent-gradient">Web Developer in Ayodhya</span></h1>
          <p>Looking for a skilled web developer in Ayodhya? I&apos;m Zameer Mahfooz Khan — I build modern, fast, and SEO-optimized websites that help Ayodhya businesses grow online. From local shops to established companies, I deliver custom web solutions that drive real results.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container location-content">
          <h2>Web Development Services in Ayodhya</h2>
          <p>As a professional web developer based in Ayodhya, Uttar Pradesh, I offer comprehensive web development services tailored for local businesses. Whether you&apos;re a retail shop on the main market, a school in the city, or a growing startup — I create websites that represent your brand professionally and attract customers online.</p>
          <p>My web development services in Ayodhya include custom website design, e-commerce store development, business website creation, SEO optimization, and ongoing website maintenance. I use modern technologies like React, Next.js, and Node.js to build websites that are fast, mobile-friendly, and rank well on Google.</p>

          <h2>Why Choose a Local Web Developer in Ayodhya?</h2>
          <p>Working with a local developer means you get the advantage of someone who understands the Ayodhya market, local business culture, and customer expectations. I can meet in person to discuss your project, understand your specific needs, and deliver solutions that work for your target audience.</p>
          <p>I&apos;ve already built successful websites for Ayodhya-based businesses including 7070 Sports Ayodhya (an e-commerce platform) and Little Flower School (an institutional website). These projects demonstrate my ability to deliver professional results for local clients.</p>

          <h2>Industries I Serve in Ayodhya</h2>
          <p>I work with businesses across various industries in Ayodhya and nearby areas including retail and e-commerce, education and schools, hospitality and tourism, healthcare, professional services, manufacturing, real estate, and restaurants. Whatever your industry, I can create a website that meets your specific needs.</p>

          <h2>My Ayodhya Portfolio</h2>
          <div className="projects-grid" style={{ marginBottom: 32 }}>
            <div className="project-card" style={{ opacity: 1, transform: "none" }}>
              <div className="project-glow"></div>
              <span className="project-category">E-commerce</span>
              <h3 className="project-title">7070 Sports Ayodhya</h3>
              <p className="project-desc">Complete e-commerce platform for a sports goods retailer in Ayodhya.</p>
              <div className="project-links">
                <a href="https://7070sportsayodhya.com/" target="_blank" rel="noopener noreferrer" className="proj-link live">View Live →</a>
                <Link href="/case-studies/7070-sports-ayodhya" className="proj-link github">Case Study</Link>
              </div>
            </div>
            <div className="project-card" style={{ opacity: 1, transform: "none" }}>
              <div className="project-glow"></div>
              <span className="project-category">Education</span>
              <h3 className="project-title">Little Flower School</h3>
              <p className="project-desc">Professional school website for a CISCE-affiliated institution in Ayodhya.</p>
              <div className="project-links">
                <a href="https://lfs-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="proj-link live">View Live →</a>
                <Link href="/case-studies/little-flower-school" className="proj-link github">Case Study</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Need a Website for Your Ayodhya Business?</h2>
            <p>Get a free consultation and custom quote. I&apos;ll help you create a website that attracts customers and grows your business.</p>
            <Link href="/contact" className="btn-primary"><span>Get Free Quote →</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
