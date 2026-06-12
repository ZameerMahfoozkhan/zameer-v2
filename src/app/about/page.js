import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig, skills } from "@/data/content";

export const metadata = {
  title: "About Zameer Khan — Freelance Web Developer in Ayodhya, India",
  description: "Learn about Zameer Mahfooz Khan, a freelance web developer and website designer based in Ayodhya, India. 3+ years experience building modern websites with React, Next.js & Node.js.",
  alternates: { canonical: "https://zameerkhan.online/about" },
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "About" }]} />

      <section className="section">
        <div className="section-container">
          <div className="about-layout">
            <div style={{ display: "flex", flexDirection: "column", gap: "48px", justifyContent: "center", animation: "fadeInDown 0.8s 0.15s both" }}>
              <div className="hero-visual" style={{ margin: "0 auto", marginBottom: "2rem", transform: "scale(0.9)" }}>
                <div className="avatar-ring outer-ring"></div>
                <div className="avatar-ring mid-ring"></div>
                <div className="avatar-container">
                  <Image
                    src="/avatar.png"
                    alt="Zameer Khan"
                    width={280}
                    height={280}
                    className="avatar-img"
                    priority
                  />
                </div>
                <div className="float-badge badge-react" style={{ "--delay": "0s" }}>⚛️ React</div>
                <div className="float-badge badge-next" style={{ "--delay": "0.4s" }}>▲ Next.js</div>
                <div className="float-badge badge-node" style={{ "--delay": "0.8s" }}>🟢 Node.js</div>
                <div className="float-badge badge-ts" style={{ "--delay": "1.2s" }}>🔷 TypeScript</div>
              </div>
              <div className="about-code-window" style={{ animation: "fadeInUp 0.8s 0.45s both" }}>
                <div className="code-window-header">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                  <span className="code-window-title">zameer.js</span>
                </div>
                <div className="code-window-body">
                  <pre><code><span className="code-kw">const</span> <span className="code-var">zameer</span> = {`{`}{"\n"}  <span className="code-key">name</span>: <span className="code-str">&quot;Zameer Mahfooz Khan&quot;</span>,{"\n"}  <span className="code-key">role</span>: <span className="code-str">&quot;Freelance Web Developer&quot;</span>,{"\n"}  <span className="code-key">location</span>: <span className="code-str">&quot;Ayodhya, India 🇮🇳&quot;</span>,{"\n"}  <span className="code-key">availability</span>: <span className="code-str">&quot;Worldwide&quot;</span>,{"\n"}  <span className="code-key">education</span>: <span className="code-str">&quot;B.Tech Computer Science&quot;</span>,{"\n"}  <span className="code-key">expertise</span>: [{"\n"}    <span className="code-str">&quot;React&quot;</span>, <span className="code-str">&quot;Next.js&quot;</span>,{"\n"}    <span className="code-str">&quot;Node.js&quot;</span>, <span className="code-str">&quot;SEO&quot;</span>,{"\n"}  ],{"\n"}  <span className="code-fn">hireable</span>: () =&gt; <span className="code-bool">true</span>,{"\n"}{`}`};</code></pre>
                </div>
              </div>
            </div>

            <div className="about-content">
              <h1 className="about-headline" style={{ animation: "fadeInDown 0.8s 0.15s both" }}>
                I&apos;m <span className="about-name">Zameer Mahfooz Khan</span> — a freelance web developer turning ideas into high-performing digital experiences.
              </h1>
              <div style={{ animation: "fadeInUp 0.8s 0.3s both" }}>
                <p className="about-bio">
                  Based in <strong>Ayodhya, Uttar Pradesh, India</strong>, I&apos;ve spent the last 3+ years building websites and web applications for businesses of all sizes — from local shops in Ayodhya to companies across India and beyond.
                </p>
                <p className="about-bio">
                  I specialize in <strong>React, Next.js, Node.js, and SEO optimization</strong>. My approach combines clean code, thoughtful design, and genuine empathy for end users. Every website I build is crafted to rank well on Google, load blazingly fast, and convert visitors into customers.
                </p>
                <p className="about-bio">
                  Currently pursuing a <strong>B.Tech in Computer Science</strong> at Kamla Nehru Institute of Physical and Social Science (KNIPSS), Sultanpur. When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open-source projects, or perfecting UI animations.
                </p>
              </div>

              <div className="about-highlights" style={{ animation: "fadeInUp 0.8s 0.45s both" }}>
                <div className="about-highlight-card">
                  <div className="about-hl-icon">🚀</div>
                  <div>
                    <span className="about-hl-number">3+</span>
                    <span className="about-hl-label">Years building for the web</span>
                  </div>
                </div>
                <div className="about-highlight-card">
                  <div className="about-hl-icon">🎯</div>
                  <div>
                    <span className="about-hl-number">40+</span>
                    <span className="about-hl-label">Projects delivered</span>
                  </div>
                </div>
                <div className="about-highlight-card">
                  <div className="about-hl-icon">🌍</div>
                  <div>
                    <span className="about-hl-number">20+</span>
                    <span className="about-hl-label">Happy clients worldwide</span>
                  </div>
                </div>
              </div>

              <div className="about-closing" style={{ animation: "fadeInUp 0.8s 0.6s both" }}>
                I&apos;m always open to exciting collaborations — whether you&apos;re a startup, a growing business, or an established company looking to modernize your web presence. Let&apos;s build something amazing together.
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", paddingTop: 4, animation: "fadeInUp 0.8s 0.75s both" }}>
                <Link href="/contact" className="btn-primary"><span>Let&apos;s Talk</span></Link>
                <a href="/Zameer_Resume.pdf" className="btn-secondary" download="Zameer_Resume.pdf"><span>Download Resume</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Education</span>
            <h2 className="section-title">Academic <span className="accent">Background</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-item" style={{ opacity: 1, transform: "none" }}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-date">2024 – 2028</span>
                  <span className="timeline-badge current">Ongoing</span>
                </div>
                <h3 className="timeline-role">B.Tech — Computer Science</h3>
                <span className="timeline-company">KNIPSS, Sultanpur</span>
                <p className="timeline-desc">Pursuing a 4-year undergraduate degree in Computer Science, building expertise in software engineering, data structures, algorithms, and full-stack web development.</p>
              </div>
            </div>
            <div className="timeline-item" style={{ opacity: 1, transform: "none" }}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-meta"><span className="timeline-date">2023 – 2024</span></div>
                <h3 className="timeline-role">Class 12th — Intermediate</h3>
                <span className="timeline-company">MJS Academy, Ayodhya</span>
                <p className="timeline-desc">Completed senior secondary education, strengthening analytical thinking and problem-solving skills.</p>
              </div>
            </div>
            <div className="timeline-item" style={{ opacity: 1, transform: "none" }}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-meta"><span className="timeline-date">2021 – 2022</span></div>
                <h3 className="timeline-role">Class 10th — High School</h3>
                <span className="timeline-company">Innovative Minds Academy, Ayodhya</span>
                <p className="timeline-desc">Completed secondary education with a strong academic record, sparking an early interest in technology and programming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-container">
          <div className="cta-banner">
            <h2>Want to Work Together?</h2>
            <p>I&apos;m currently available for freelance projects. Let&apos;s discuss how I can help your business grow online.</p>
            <Link href="/contact" className="btn-primary"><span>Start a Project →</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
