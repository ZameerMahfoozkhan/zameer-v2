import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContactButton from "@/components/layout/StickyContactButton";
import { generatePersonSchema, generateWebsiteSchema, generateOrganizationSchema } from "@/lib/schema";

export const metadata = {
  metadataBase: new URL("https://zameerkhan.online"),
  title: {
    default: "Zameer Mahfooz Khan — Freelance Web Developer & Website Designer in Ayodhya | React & Next.js Expert",
    template: "%s | Zameer Mahfooz Khan",
  },
  description:
    "Zameer Mahfooz Khan is a freelance web developer and website designer based in Ayodhya, India. Specializing in React, Next.js, Node.js, and SEO. Building modern, high-performance websites for businesses worldwide.",
  keywords: [
    "Zameer Mahfooz Khan", "Zameer Mahfooz Khan", "Web Developer", "Website Designer",
    "Freelance Web Developer", "Web Developer in Ayodhya", "Website Designer in Ayodhya",
    "React Developer", "Next.js Developer", "Node.js Developer",
    "Freelance Web Developer Ayodhya", "Website Development Ayodhya",
    "Web Developer India", "SEO Expert Ayodhya",
  ],
  authors: [{ name: "Zameer Mahfooz Khan", url: "https://zameerkhan.online" }],
  creator: "Zameer Mahfooz Khan",
  publisher: "Zameer Mahfooz Khan",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zameerkhan.online",
    siteName: "Zameer Mahfooz Khan — Freelance Web Developer",
    title: "Zameer Mahfooz Khan — Freelance Web Developer & Website Designer in Ayodhya",
    description:
      "Freelance web developer and website designer based in Ayodhya, India. Specializing in React, Next.js & Node.js. Building modern websites for businesses worldwide.",
    images: [{ url: "/avatar.png", width: 800, height: 800, alt: "Zameer Mahfooz Khan — Freelance Web Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zameer Mahfooz Khan — Freelance Web Developer & Website Designer in Ayodhya",
    description:
      "Freelance web developer in Ayodhya, India. React, Next.js & Node.js specialist. Building modern websites for businesses worldwide.",
    images: ["/avatar.png"],
  },
  alternates: { canonical: "https://zameerkhan.online" },
  verification: { google: "google2bfb8b207faffbd8" },
  icons: {
    icon: "/avatar.png",
    shortcut: "/avatar.png",
    apple: "/avatar.png",
  },
  other: {
    "theme-color": "#0F0A05",
  },
};

export default function RootLayout({ children }) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {/* Background Blobs */}
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyContactButton />
      </body>
    </html>
  );
}
