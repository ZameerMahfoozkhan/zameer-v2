export default function sitemap() {
  const baseUrl = "https://zameerkhan.online";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/web-development`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/website-redesign`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ecommerce-development`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/seo-optimization`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/landing-page-development`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/7070-sports-ayodhya`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/little-flower-school`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/anufix-fabrication`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/24x7-customer-service`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-much-does-website-cost-india`, lastModified: new Date('2026-06-10'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/react-vs-nextjs`, lastModified: new Date('2026-06-08'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/seo-tips-small-businesses`, lastModified: new Date('2026-06-05'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/why-every-business-needs-website`, lastModified: new Date('2026-06-03'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/website-design-trends-2026`, lastModified: new Date('2026-05-30'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-to-improve-google-rankings`, lastModified: new Date('2026-05-28'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/best-website-development-practices`, lastModified: new Date('2026-05-25'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/web-developer-ayodhya`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/website-designer-ayodhya`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/freelance-web-developer-ayodhya`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
