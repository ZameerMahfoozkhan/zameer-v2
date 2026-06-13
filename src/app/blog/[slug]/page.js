import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { blogPosts } from "@/data/content";
import { generateArticleSchema } from "@/lib/schema";

const blogContent = {
  "how-much-does-website-cost-india": {
    body: `If you're a business owner in India considering getting a website built, one of the first questions you'll have is: "How much will it cost?" The answer depends on several factors, and understanding them will help you make an informed decision.

## Types of Websites and Their Costs

### Landing Page (₹5,000 – ₹15,000)
A single-page website designed for a specific campaign or purpose. Ideal for startups looking to establish a quick online presence.

### Business Website (₹15,000 – ₹50,000)
A multi-page website with information about your company, services, team, and contact details. This is the most common type for small and medium businesses.

### E-commerce Website (₹30,000 – ₹1,50,000)
An online store with product listings, shopping cart, payment integration, and order management. Costs vary based on the number of products and features needed.

### Custom Web Application (₹50,000 – ₹5,00,000+)
Complex platforms like school management systems, CRMs, or SaaS products. These require custom development and are priced based on scope.

## Factors That Affect Website Cost

**Design Complexity** — A simple, clean design costs less than a highly custom, animated design with unique interactions.

**Number of Pages** — More pages mean more content to design and develop, increasing the overall cost.

**Features & Functionality** — Contact forms, chat widgets, booking systems, and e-commerce features add to the development time and cost.

**SEO Optimization** — Basic SEO is usually included, but comprehensive SEO optimization with keyword research and content strategy costs extra.

**Timeline** — Rush projects may cost 20-30% more than projects with standard timelines.

## How to Get the Best Value

1. **Define your goals clearly** before approaching a developer
2. **Start with an MVP** (Minimum Viable Product) and iterate
3. **Choose a developer who understands SEO** to save costs later
4. **Invest in quality** — a cheap website that doesn't convert is more expensive in the long run

## Conclusion

Website costs in India range widely based on your needs. For most small businesses, a well-built website between ₹15,000 – ₹50,000 provides excellent value and can generate significant returns through improved online visibility and customer trust.

If you're looking for a professional website at a competitive price, feel free to contact me for a free consultation and custom quote.`,
  },
  "react-vs-nextjs": {
    body: `Choosing between React and Next.js is one of the most common decisions frontend developers face today. Both are powerful tools, but they serve different purposes. Let me break down the key differences.

## What is React?

React is a JavaScript library for building user interfaces. Created by Facebook, it's the most popular frontend library in the world. React handles the "view" layer of your application and gives you complete freedom in how you structure everything else.

## What is Next.js?

Next.js is a full-stack React framework built by Vercel. It takes React and adds server-side rendering (SSR), static site generation (SSG), file-based routing, API routes, and many optimizations out of the box.

## Key Differences

### Rendering
- **React**: Client-side rendering (CSR) by default. The browser downloads JavaScript and renders the page.
- **Next.js**: Supports SSR, SSG, and CSR. Pages can be pre-rendered on the server for better SEO and performance.

### SEO
- **React**: Poor SEO out of the box because search engines may struggle with client-rendered content.
- **Next.js**: Excellent SEO with server-side rendering. Pages are pre-rendered with full HTML content.

### Routing
- **React**: No built-in routing. You need react-router or similar libraries.
- **Next.js**: File-based routing built in. Create a file in the pages/app directory and it becomes a route.

### Performance
- **React**: Performance depends on your implementation and bundling setup.
- **Next.js**: Built-in optimizations including automatic code splitting, image optimization, and font optimization.

## When to Use React

- Single-page applications (SPAs)
- Admin dashboards
- Internal tools
- When you want maximum flexibility
- When SEO isn't a priority

## When to Use Next.js

- Marketing websites and landing pages
- E-commerce stores
- Blogs and content sites
- Any project where SEO matters
- When you want built-in optimizations

## My Recommendation

For most projects in 2026, I recommend **Next.js**. It gives you everything React offers plus server-side rendering, better SEO, and built-in performance optimizations. The only scenario where plain React makes more sense is for internal tools or SPAs where SEO isn't a concern.`,
  },
  "seo-tips-small-businesses": {
    body: `If you're a small business owner, SEO might seem complicated and expensive. But the truth is, there are many effective SEO strategies you can implement today without spending a fortune.

## 1. Claim Your Google Business Profile

This is the single most important thing you can do for local SEO. Create and verify your Google Business Profile with accurate information, photos, and business hours.

## 2. Optimize Your Website Title Tags

Every page on your website should have a unique, descriptive title tag that includes your target keywords. For example: "Best Sports Shop in Ayodhya | 7070 Sports" is better than just "Home | 7070 Sports."

## 3. Write Helpful Content

Create blog posts and pages that answer questions your customers are asking. If you're a sports shop, write about "How to Choose the Right Cricket Bat" or "Best Running Shoes for Beginners."

## 4. Make Your Website Mobile-Friendly

Over 70% of searches in India happen on mobile devices. If your website isn't mobile-friendly, you're losing most of your potential customers.

## 5. Improve Page Speed

Slow websites rank lower on Google and frustrate visitors. Optimize your images, minimize code, and use a good hosting provider.

## 6. Get Customer Reviews

Encourage happy customers to leave reviews on Google. Reviews improve your local search rankings and build trust with potential customers.

## 7. Use Local Keywords

Include your city and area name in your website content naturally. "Sports equipment shop in Ayodhya" is more effective than just "sports equipment shop."

## 8. Build Quality Backlinks

Get other reputable websites to link to yours. This could be through local business directories, partnerships, or creating valuable content others want to reference.

## 9. Optimize Your Images

Use descriptive file names and alt text for all images. Instead of "IMG_1234.jpg," use "cricket-bat-collection-ayodhya.jpg."

## 10. Track Your Results

Set up Google Analytics and Google Search Console to monitor your website's performance. You can't improve what you don't measure.

## Start Small, Be Consistent

You don't need to implement all of these at once. Start with the first three, then gradually work through the rest. Consistency is key — SEO is a marathon, not a sprint.`,
  },
  "why-every-business-needs-website": {
    body: `In 2026, having a website isn't a luxury — it's a necessity. Whether you run a small local shop or a growing enterprise, here's why your business absolutely needs a website.

## 1. Your Customers Are Online

Over 700 million people in India use the internet. When they need a product or service, the first thing they do is search online. If you don't have a website, you're invisible to these potential customers.

## 2. Credibility and Trust

A professional website instantly makes your business look more credible. Studies show that 75% of people judge a company's credibility based on their website design.

## 3. 24/7 Availability

Unlike a physical store, your website works for you around the clock. Customers can learn about your products, read reviews, and contact you at any time — even while you sleep.

## 4. Cost-Effective Marketing

Compared to traditional advertising (newspapers, flyers, billboards), a website is incredibly cost-effective. Once built, it continues to attract customers through Google searches month after month.

## 5. Compete with Larger Businesses

A well-built website with good SEO allows small businesses to compete with larger companies on Google search results. Your local expertise combined with online visibility is a powerful combination.

## 6. Customer Insights

With tools like Google Analytics, your website gives you valuable data about your customers — what they're looking for, where they're from, and what interests them.

## 7. Expand Your Reach

A physical store serves customers in your immediate area. A website can reach customers across your city, state, country, or even internationally.

## The Cost of NOT Having a Website

Every day without a website, you're losing potential customers to competitors who are online. The question isn't whether you can afford a website — it's whether you can afford not to have one.

## Getting Started

You don't need a complex website to start. A simple, professional website with your services, contact information, and location is a great first step. As your business grows, your website can grow with it.`,
  },
  "website-design-trends-2026": {
    body: `Web design is constantly evolving, and staying current with trends helps your website feel modern and trustworthy. Here are the top design trends shaping the web in 2026.

## 1. Dark Mode Design

Dark-themed websites continue to dominate, especially in tech and creative industries. Dark backgrounds reduce eye strain, save battery on OLED screens, and make colors pop.

## 2. Micro-Animations

Subtle animations that respond to user interactions — hover effects, scroll animations, loading transitions — make websites feel alive and premium without overwhelming users.

## 3. AI-Powered Personalization

Websites are increasingly using AI to personalize content, recommendations, and user experiences based on visitor behavior and preferences.

## 4. Minimalist Typography

Large, bold typography with minimal decorative elements is trending. Clean fonts like Inter, Outfit, and Space Grotesk are replacing elaborate typefaces.

## 5. Glassmorphism

Frosted glass effects with blur, transparency, and subtle borders create depth and visual hierarchy. This trend works beautifully on dark backgrounds.

## 6. Bento Grid Layouts

Inspired by Japanese bento boxes, these grid layouts organize content in visually appealing, modular sections that are easy to scan and navigate.

## 7. Performance-First Design

With Google's Core Web Vitals affecting search rankings, designers are prioritizing performance. This means optimized images, lazy loading, and efficient CSS.

## 8. Inclusive Design

Accessibility is no longer optional. Modern websites are designed with proper color contrast, keyboard navigation, screen reader support, and clear visual hierarchy.

## 9. 3D Elements and Parallax

Subtle 3D effects and parallax scrolling add depth to otherwise flat designs. The key is restraint — a little goes a long way.

## 10. Real Photography Over Stock

Authentic, brand-specific photography is replacing generic stock images. Real photos build trust and help visitors connect with your brand.

## How to Apply These Trends

Don't chase every trend. Choose the ones that align with your brand and enhance your user experience. A fast, accessible, well-designed website will always outperform a trendy but unusable one.`,
  },
  "how-to-improve-google-rankings": {
    body: `Improving your Google rankings isn't about tricks or shortcuts — it's about providing value to your users and following proven SEO strategies. Here's a comprehensive guide.

## Technical SEO Foundation

### 1. Site Speed Optimization
Google uses page speed as a ranking factor. Use tools like Google PageSpeed Insights to identify and fix performance issues. Aim for a loading time under 3 seconds.

### 2. Mobile Responsiveness
Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking. Ensure your website works perfectly on all device sizes.

### 3. HTTPS Security
An SSL certificate (HTTPS) is essential for both security and rankings. Google has confirmed HTTPS as a ranking signal.

### 4. Clean URL Structure
Use descriptive, keyword-rich URLs. "/services/web-development" is better than "/page?id=123."

## On-Page SEO

### 5. Title Tags and Meta Descriptions
Every page needs a unique, keyword-optimized title tag (50-60 characters) and meta description (150-160 characters).

### 6. Heading Hierarchy
Use a single H1 tag per page with your primary keyword. Use H2 and H3 tags for subheadings, creating a logical content structure.

### 7. Content Quality
Create comprehensive, helpful content that thoroughly answers search queries. Aim for at least 1,000+ words for important pages.

### 8. Internal Linking
Link between your pages strategically to help Google understand your site structure and distribute page authority.

### 9. Image Optimization
Compress images, use descriptive alt text, and implement lazy loading for images below the fold.

## Off-Page SEO

### 10. Quality Backlinks
Earn links from reputable websites through valuable content, partnerships, and industry directories.

### 11. Local SEO
Optimize your Google Business Profile, get listed in local directories, and encourage customer reviews.

### 12. Schema Markup
Implement structured data (JSON-LD) to help Google understand your content and display rich snippets in search results.

## Monitoring and Improvement

Use Google Search Console to monitor your rankings, identify issues, and track improvements. SEO is an ongoing process — review and optimize regularly.`,
  },
  "best-website-development-practices": {
    body: `Building a great website requires more than just writing code. Here are the essential best practices every web developer should follow in 2026.

## Performance Optimization

### Minimize HTTP Requests
Combine CSS and JavaScript files, use CSS sprites for icons, and implement lazy loading for images and iframes.

### Optimize Images
Use modern formats like WebP, compress images without losing quality, and serve responsive images with the srcset attribute.

### Enable Caching
Implement browser caching and CDN caching to reduce server load and improve loading times for returning visitors.

## Code Quality

### Semantic HTML
Use appropriate HTML5 elements (header, main, nav, article, section, footer) instead of generic divs. This improves accessibility and SEO.

### Clean CSS Architecture
Use CSS custom properties (variables), organize styles logically, and avoid overly specific selectors.

### JavaScript Best Practices
Write modular, maintainable code. Use modern ES6+ features, implement error handling, and minimize DOM manipulation.

## Accessibility

### WCAG Compliance
Follow Web Content Accessibility Guidelines. Ensure proper color contrast, keyboard navigation, and screen reader compatibility.

### Alt Text for Images
Every meaningful image should have descriptive alt text. Decorative images should have empty alt attributes.

### Focus Management
Ensure all interactive elements are keyboard-accessible and have visible focus indicators.

## Security

### Input Validation
Always validate and sanitize user input on both client and server sides to prevent XSS and injection attacks.

### HTTPS Everywhere
Use SSL/TLS certificates for all pages. Many browsers now warn users about insecure (HTTP) sites.

### Dependencies
Keep all libraries and frameworks updated. Regularly audit dependencies for known vulnerabilities.

## SEO Best Practices

### Structured Data
Implement JSON-LD schema markup for your content type — Person, Organization, Product, Article, FAQ, etc.

### Meta Tags
Every page needs unique title tags, meta descriptions, and Open Graph tags for social sharing.

### Sitemap and Robots.txt
Maintain an updated XML sitemap and robots.txt to help search engines crawl your site efficiently.

## Conclusion

Following these best practices ensures your website is fast, accessible, secure, and search-engine friendly. They're not optional extras — they're the foundation of professional web development.`,
  },
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Zameer Mahfooz Khan`,
    description: post.excerpt,
    alternates: { canonical: `https://zameerkhan.online/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
    keywords: post.keywords,
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const content = blogContent[slug];
  const articleSchema = generateArticleSchema(post);

  const paragraphs = content.body.split("\n\n");

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumbs items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title },
      ]} />

      <section className="section">
        <div className="section-container">
          <article className="blog-article">
            <h1>{post.title}</h1>
            <div className="blog-article-meta">
              <span>By Zameer Mahfooz Khan</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.category}</span>
            </div>

            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return <h2 key={i}>{para.replace("## ", "")}</h2>;
              }
              if (para.startsWith("### ")) {
                return <h3 key={i}>{para.replace("### ", "")}</h3>;
              }
              if (para.startsWith("1. ") || para.startsWith("2. ")) {
                const items = para.split("\n").filter(Boolean);
                return (
                  <ol key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\.\s/, "")}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={i}>{para.replace(/\*\*(.*?)\*\*/g, "$1")}</p>;
            })}

            <div className="cta-banner" style={{ marginTop: 48 }}>
              <h2>Need Help with Your Website?</h2>
              <p>I can help you implement these practices on your website. Let&apos;s talk.</p>
              <Link href="/contact" className="btn-primary"><span>Get a Free Consultation →</span></Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
