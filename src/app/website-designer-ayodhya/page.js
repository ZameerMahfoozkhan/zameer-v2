import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQ from "@/components/sections/FAQ";
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = {
  title: "Website Designer in Ayodhya | Zameer Khan — Modern & Responsive Designs",
  description: "Professional website designer in Ayodhya. Zameer Khan creates stunning, mobile-responsive website designs that convert visitors into customers. Modern UI/UX design with SEO optimization.",
  alternates: { canonical: "https://zameer-v2.vercel.app/website-designer-ayodhya" },
  keywords: ["website designer ayodhya", "website designer in ayodhya", "web design ayodhya", "best website designer ayodhya"],
};

const faqs = [
  { q: "Who is the best website designer in Ayodhya?", a: "Zameer Khan is a professional website designer in Ayodhya known for creating modern, visually stunning websites. He combines clean aesthetics with SEO optimization and conversion-focused design for businesses of all sizes." },
  { q: "What types of websites can you design?", a: "I design business websites, e-commerce stores, portfolio sites, landing pages, school websites, and custom web applications. Every design is responsive, mobile-friendly, and optimized for search engines." },
  { q: "Do you design mobile-responsive websites?", a: "Yes, every website I design is fully responsive and mobile-first. This means your site will look and function perfectly on smartphones, tablets, and desktops." },
  { q: "Can you redesign my existing website?", a: "Absolutely. I offer website redesign services that modernize your online presence while preserving your SEO value. I can transform outdated designs into modern, high-converting websites." },
];

export default function WebsiteDesignerAyodhyaPage() {
  const localSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Website Designer in Ayodhya" }]} />

      <section className="location-hero">
        <div className="section-container">
          <span className="section-tag">📍 Ayodhya, India</span>
          <h1>Professional <span className="accent-gradient">Website Designer in Ayodhya</span></h1>
          <p>Need a stunning website for your Ayodhya business? I&apos;m Zameer Khan — I design beautiful, modern websites that capture attention, build trust, and convert visitors into customers.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container location-content">
          <h2>Website Design Services in Ayodhya</h2>
          <p>As a website designer based in Ayodhya, I create visually compelling websites that reflect your brand identity and engage your target audience. My designs are clean, modern, and built with user experience as the top priority.</p>
          <p>Every website I design follows the latest web design trends — dark mode aesthetics, micro-animations, glassmorphism effects, and responsive layouts that look stunning on every device. But beyond looks, my designs are strategically crafted for conversions and SEO.</p>

          <h2>My Design Process</h2>
          <div className="process-steps">
            <div className="process-step"><div className="process-step-number">1</div><h4>Discovery</h4><p>Understanding your brand, goals, and target audience.</p></div>
            <div className="process-step"><div className="process-step-number">2</div><h4>Wireframing</h4><p>Planning the layout, content hierarchy, and user flow.</p></div>
            <div className="process-step"><div className="process-step-number">3</div><h4>Design</h4><p>Creating pixel-perfect designs with your brand colors and style.</p></div>
            <div className="process-step"><div className="process-step-number">4</div><h4>Development</h4><p>Turning designs into fast, responsive, SEO-optimized websites.</p></div>
          </div>

          <h2>Why My Designs Stand Out</h2>
          <div className="benefits-grid">
            <div className="benefit-card"><h4>Modern Aesthetics</h4><p>Clean, premium designs that build instant credibility.</p></div>
            <div className="benefit-card"><h4>Mobile-First</h4><p>Designed for mobile users first, then scaled up for desktop.</p></div>
            <div className="benefit-card"><h4>SEO-Optimized</h4><p>Designs that search engines love as much as users do.</p></div>
            <div className="benefit-card"><h4>Conversion-Focused</h4><p>Strategic placement of CTAs and trust elements.</p></div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Ready for a Beautiful Website?</h2>
            <p>Let&apos;s design a website that makes your Ayodhya business shine online.</p>
            <Link href="/contact" className="btn-primary"><span>Get Free Consultation →</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
