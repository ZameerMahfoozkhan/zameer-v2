import { siteConfig } from "@/data/content";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zameer Mahfooz Khan",
    alternateName: "Zameer Mahfooz Khan",
    url: siteConfig.url,
    image: `${siteConfig.url}/avatar.png`,
    jobTitle: "Freelance Web Developer & Website Designer",
    description:
      "Freelance web developer and website designer based in Ayodhya, India. Specializing in React, Next.js, and Node.js development. Building modern, SEO-optimized websites for businesses worldwide.",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ayodhya",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
    knowsAbout: [
      "Web Development",
      "Website Design",
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SEO",
      "E-commerce Development",
      "Landing Page Development",
      "Performance Optimization",
      "Responsive Design",
      "MongoDB",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Kamla Nehru Institute of Physical and Social Science (KNIPSS)",
      address: { "@type": "PostalAddress", addressLocality: "Sultanpur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    },
    worksFor: {
      "@type": "Organization",
      name: "Zameer Mahfooz Khan — Freelance Web Development",
      url: siteConfig.url,
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zameer Mahfooz Khan — Freelance Web Developer",
    alternateName: "Zameer Mahfooz Khan Portfolio",
    url: siteConfig.url,
    description:
      "Portfolio and services website of Zameer Mahfooz Khan, a freelance web developer and website designer based in Ayodhya, India.",
    author: { "@type": "Person", name: "Zameer Mahfooz Khan" },
    publisher: { "@type": "Person", name: "Zameer Mahfooz Khan" },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Zameer Mahfooz Khan — Web Development Services",
    url: siteConfig.url,
    logo: `${siteConfig.url}/avatar.png`,
    image: `${siteConfig.url}/avatar.png`,
    description:
      "Professional web development services by Zameer Mahfooz Khan. Custom websites, e-commerce, SEO optimization, and landing pages. Based in Ayodhya, serving clients worldwide.",
    email: siteConfig.email,
    founder: { "@type": "Person", name: "Zameer Mahfooz Khan" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ayodhya",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
      postalCode: "224001",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.7922",
      longitude: "82.1998",
    },
    areaServed: [
      { "@type": "City", name: "Ayodhya" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    serviceType: [
      "Web Development",
      "Website Design",
      "E-commerce Development",
      "SEO Optimization",
      "Landing Page Development",
      "Website Redesign",
    ],
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
    priceRange: "$$",
  };
}

export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      "@type": "Person",
      name: "Zameer Mahfooz Khan",
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: service.title,
  };
}

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteConfig.url}${item.url}` : undefined,
    })),
  };
}

export function generateArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    url: `${siteConfig.url}/blog/${article.slug}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Zameer Mahfooz Khan",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "Zameer Mahfooz Khan",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/avatar.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
    inLanguage: "en",
    keywords: article.keywords ? article.keywords.join(", ") : "",
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Zameer Mahfooz Khan — Web Developer in Ayodhya",
    url: siteConfig.url,
    image: `${siteConfig.url}/avatar.png`,
    description:
      "Professional web development and website design services in Ayodhya, Uttar Pradesh. Custom websites, e-commerce, SEO, and more.",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ayodhya",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
      postalCode: "224001",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.7922",
      longitude: "82.1998",
    },
    areaServed: [
      { "@type": "City", name: "Ayodhya" },
      { "@type": "City", name: "Lucknow" },
      { "@type": "State", name: "Uttar Pradesh" },
    ],
    priceRange: "$$",
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
  };
}
