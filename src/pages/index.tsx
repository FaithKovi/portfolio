import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";

// ─── DATA ────────────────────────────────────────────────────

const METRICS = [
  {
    value: "~80%",
    label: "Reduction in inbound support tickets",
    detail: "via a documentation rebuild at Clouddley",
    // href: "/case-studies/clouddley",
  },
  {
    value: "3+ yrs",
    label: "Documentation engineering",
    detail: "across SaaS, PaaS, and developer platforms",
  },
  {
    value: "30+",
    label: "Published technical articles",
    detail: "on Clouddley, AppSignal, HackerNoon & more",
    href: "/work",
  },
  {
    value: "OSS",
    label: "Open-source contributor",
    detail: "Helm documentation",
    href: "https://github.com/helm/helm-www/pulls?q=author%3AFaithKovi",
  },
];

const SERVICES = [
  {
    icon: "📡",
    title: "API Documentation",
    description:
      "Clear, structured API references with endpoint descriptions, request/response examples, authentication guides, and error handling. Built from OpenAPI specs or source code.",
  },
  {
    icon: "📘",
    title: "Developer Guides",
    description:
      "Getting started guides, integration walkthroughs, and conceptual overviews that help developers go from zero to productive with your product.",
  },
  {
    icon: "⚙️",
    title: "Docs-as-Code Systems",
    description:
      "End-to-end documentation pipelines in Docusaurus, GitBook, or Mintlify — with Git workflows, peer review, CI/CD publishing, and versioning built in from day one.",
  },
  {
    icon: "🎓",
    title: "Technical Tutorials",
    description:
      "Step-by-step tutorials and how-to guides that walk users through real workflows, with code samples, screenshots, and troubleshooting tips.",
  },
];

const SKILLS = [
  {
    category: "Documentation Tools",
    items: ["Docusaurus", "Markdown / MDX", "OpenAPI / Swagger", "Postman", "Mintlify", "GitBook", "Hugo", "Zensical"],
  },
  {
    category: "Writing & Content",
    items: [
      "API References",
      "Developer Guides",
      "Tutorials & How-Tos",
      "Release Notes",
      "Information Architecture (Diátaxis)",
      "UX Writing",
    ],
  },
  {
    category: "Docs Workflow & Tooling",
    items: [
      "Git / GitHub",
      "Docs-as-Code",
      "CI/CD Publishing",
      "GitHub Actions",
      "Peer Review Workflows",
    ],
  },
  {
    category: "Technical Domains I've Documented",
    items: [
      "REST APIs",
      "CI/CD Pipelines",
      "Kubernetes & Cloud-Native",
      "Python / Go / Bash",
      "SaaS, PaaS & IaaS Platforms",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I had the pleasure of managing Faith while she was a Documentation Engineer at Clouddley. She played a key role in building out our team. I had the pleasure of managing Faith while she was a Documentation Engineer at Clouddley. She played a crucial role in developing our technical documentation from the ground up, making complex multi-cloud infrastructure concepts accessible to developers of all levels. Any team would be fortunate to have her.",
    name: "Obinna Odirionye",
    role: "Founder & CEO",
    company: "Clouddley",
    link: "https://www.linkedin.com/in/faith-kovi/details/recommendations/",
  },
  {
    quote:
      "I’m pleased to recommend Faith Kovi, a talented Documentation Engineer whose work at Clouddley has been consistently thoughtful, clear, and impactful. Faith has a strong knack for turning complex technical topics into user-friendly documentation that genuinely supports both our internal team and our wider user community. Faith’s contributions have helped improve the clarity of our docs, strengthen our technical content, and enhance the overall developer experience with Clouddley.",
    name: "Chibuzor Ojukwu",
    role: "Co-founder & CTO",
    company: "Clouddley",
    link: "https://www.linkedin.com/in/faith-kovi/details/recommendations/",
  },
  {
    quote:
      "I am pleased to recommend Faith Wachukwu, who has worked with us as a Technical Writer. Throughout her time on our team, she has proven to be a highly responsible, focused and reliable professional. She consistently delivers high-quality content, even when working under tight deadlines or with complex technical material. One of her key strengths is her ability to quickly understand technical concepts and translate them into clear, structured, and user-friendly content. Her writing is precise, well-organized, and always tailored to the intended audience, which has really helped make the content we produce clear and simple to understand.",
    name: "Tijana Glušac",
    role: "Operations Manager",
    company: "Literally",
    link: "https://www.linkedin.com/in/faith-kovi/details/recommendations/",
  },
];

// COMPONENTS

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="availability-badge">
            <span className="availability-dot" /> Open to Documentation
            Engineer & Technical Writer roles
          </span>
          <h1 className="hero-title">Faith Wachukwu</h1>
          <h6>(formerly Faith Kovi)</h6>
          <span className="hero-label">
            Documentation Engineer | Technical Writer
          </span>
          <p className="hero-description">
            I build docs-as-code systems for developer platforms, creating API references, developer guides, and automation workflows that keep documentation accurate at scale.
          </p>
          <p className="hero-description">
            A documentation rebuild I led reduced support tickets by nearly <b>80%</b>. I lean on a DevOps background and AI-assisted documentation practices to deliver a better developer experience, including writing docs that serve their newest users: the AI agents.
          </p>
          {/* <div className="hero-meta">
            <span>📍 Oslo, Norway</span>
            <span>·</span>
            <span>🌍 Remote / international</span>
          </div> */}
          <div className="hero-actions">
            <a href="/work" className="btn-primary">
              See My Work
            </a>
            <a href="/docs/intro" className="btn-outline">
              How I Structure Docs
            </a>
            <a
              href="/Faith_Wachukwu_Resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV ↓
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img className="hero-image" src="/img/profile.jpg" alt="Faith Wachukwu" />
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <div className="work-section-bg">
      <section className="portfolio-section">
        <p className="section-label">By the numbers</p>
        <h2 className="section-title">Impact</h2>
        <div className="metrics-grid">
          {METRICS.map((m) => {
            const inner = (
              <>
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
                <span className="metric-detail">{m.detail}</span>
              </>
            );
            return m.href ? (
              <a className="metric-card metric-card-link" href={m.href} key={m.label}>
                {inner}
              </a>
            ) : (
              <div className="metric-card" key={m.label}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="portfolio-section" id="services">
      <p className="section-label">What I Do</p>
      <h2 className="section-title">Documentation that drives product adoption</h2>
      <div className="services-grid">
        {SERVICES.map((service) => (
          <div className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <div className="work-section-bg">
      <section className="portfolio-section">
        <p className="section-label">Skills & Tools</p>
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setActive((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <section className="portfolio-section">
      <p className="section-label">What people say</p>
      <h2 className="section-title">Working with me</h2>

      <div
        className="testimonials-slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="testimonials-viewport">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div className="testimonial-slide" key={i} aria-hidden={i !== active}>
                <figure className="testimonial-card">
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                    {t.link && (
                      <a
                        className="testimonial-link"
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read the full recommendation on LinkedIn ↗
                      </a>
                  )}
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>
                      {t.role} · {t.company}
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {count > 1 && (
          <div className="testimonials-dots" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonial-dot ${i === active ? "active" : ""}`}
                aria-label={`Show testimonial ${i + 1}`}
                aria-selected={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <div className="work-section-bg">
      <section className="cta-section">
        <h2>Looking for someone to own your documentation?</h2>
        <p>
          I build documentation systems that reduce support tickets and accelerate product adoption 
          while keeping them accurate as the product changes. Open to documentation
          engineering and technical writing roles, and select consulting.
        </p>
        <div className="cta-actions">
          <a href="/contact" className="btn-primary">
            Get In Touch
          </a>
          <a href="/work" className="btn-outline">
            See My Work
          </a>
        </div>
      </section>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Home"
      description="Faith Wachukwu – Documentation Engineer & Technical Writer"
    >
      <main>
        <HeroSection />
        <MetricsSection />
        <ServicesSection />
        <SkillsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
