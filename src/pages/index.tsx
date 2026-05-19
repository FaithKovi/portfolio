import React, { useState } from "react";
import Layout from "@theme/Layout";

// ─── DATA ────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: "📡",
    title: "API Documentation",
    description:
      "Clear, structured API references with endpoint descriptions, request/response examples, authentication guides, and error handling — built from OpenAPI specs or source code.",
  },
  {
    icon: "📘",
    title: "Developer Guides",
    description:
      "Getting started guides, integration walkthroughs, and conceptual overviews that help developers go from zero to productive with your product.",
  },
  {
    icon: "⚙️",
    title: "Docs-as-Code Setup",
    description:
      "End-to-end documentation systems using tools like Docusaurus, GitBook, or Mintlify — with Git workflows, CI/CD publishing, and version control baked in.",
  },
  {
    icon: "🎓",
    title: "Technical Tutorials",
    description:
      "Step-by-step tutorials and how-to guides that walk users through real workflows, with code samples, screenshots, and troubleshooting tips.",
  },
];

const IMPACT_STATS = [
  {
    number: "80%",
    label: "Reduction in support tickets",
    sublabel: "via documentation rebuild at Clouddley",
  },
  {
    number: "3+",
    label: "Years shipping developer docs",
    sublabel: "for SaaS, PaaS, and developer-tool teams",
  },
  {
    number: "CNCF",
    label: "Open-source contributor",
    sublabel: "Helm, CHAOSS — docs & community",
  },
  {
    number: "15+",
    label: "Published technical articles",
    sublabel: "on AppSignal, Clouddley, HackerNoon, Medium",
  },
];

// TODO: Replace these with real testimonials from past managers, engineering
// partners, or clients. Ask for 1–3 sentences focused on outcomes ("docs
// rebuild cut our support load…", "X turned around API references in Y weeks…").
// Until at least one real quote is in place, leave TESTIMONIALS as an empty array
// and the section will not render.
const TESTIMONIALS: {
  quote: string;
  author: string;
  role: string;
}[] = [
  // Example entry shape (uncomment and replace with a real quote):
  // {
  //   quote:
  //     "Faith rebuilt our docs from the ground up and cut our support load by 80% in six months. She doesn't just write — she owns the user's journey end to end.",
  //   author: "[Name]",
  //   role: "[Title], Clouddley",
  // },
];

const SKILLS = [
  {
    category: "Documentation Tools",
    items: [
      "Docusaurus",
      "Markdown / MDX",
      "Swagger / OpenAPI",
      "Postman",
      "Mintlify",
      "Hugo",
      "GitBook",
      "ReadTheDocs",
    ],
  },
  {
    category: "Writing & Content",
    items: [
      "API References",
      "Developer Guides",
      "Tutorials & How-Tos",
      "Release Notes",
      "Information Architecture",
      "UX Writing",
    ],
  },
  {
    category: "Docs Workflow & Tooling",
    items: [
      "Git / GitHub",
      "CI/CD Publishing",
      "GitHub Actions",
      "Docs-as-Code",
      "Version Control",
      "Peer Review Workflows",
    ],
  },
  {
    category: "Technical Domains I've Documented",
    items: [
      "REST APIs",
      "CI/CD Pipelines",
      "Python / Go / Bash",
      "Saas Products & Developer Platforms",
      "PaaS / IaaS / Cloud Services",
    ],
  },
];

const EDUCATION = [
  {
    school: "University of Port Harcourt",
    degree: "Bachelor of Science, Biochemistry",
    year: "2016 – 2021",
  },
];

const CERTIFICATES = [
  { name: "Kubernetes and Cloud Native Associate", year: "2024" },
];

// COMPONENTS

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="availability-badge">
            <span className="availability-dot" /> Open to Senior Documentation
            Engineer & Technical Writer roles — remote
          </span>
          <h1 className="hero-title">Faith Wachukwu</h1>
        <span className="hero-label">Documentation Engineer | Technical Writer</span>
          <p className="hero-description">
            A Documentation Engineer and Technical Writer with 3+ years building
            developer-focused docs. My last rebuild cut inbound support tickets
            by 80%.
          </p>
          <p className="hero-description">
            I build scalable docs-as-code workflows, partner with engineering teams on guides and APIs, contribute to open source (Helm, CHAOSS), and write about developer experience and documentation strategy.
          </p>
          <div className="hero-meta">
            {/* <span>📍 Lagos, Nigeria</span>
            <span>·</span> */}
            {/* <span>✍️ Freelance</span> */}
          </div>
          <div className="hero-actions">
            <a href="/work" className="btn-primary">
              See My Work
            </a>
            <a href="/contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src="/img/profile.jpg"
            alt="Faith Wachukwu"
          />
        </div>
      </div>
    </section>
  );
}

function ImpactStatsSection() {
  return (
    <div className="work-section-bg">
      <section className="portfolio-section impact-section">
        <p className="section-label">By The Numbers</p>
        <h2 className="section-title">Impact across teams I've worked with</h2>
        <div className="impact-stats-grid">
          {IMPACT_STATS.map((stat) => (
            <div className="impact-stat-card" key={stat.label}>
              <div className="impact-stat-number">{stat.number}</div>
              <div className="impact-stat-label">{stat.label}</div>
              <div className="impact-stat-sublabel">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TestimonialsSection() {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section className="portfolio-section">
      <p className="section-label">What People Say</p>
      <h2 className="section-title">Working with me</h2>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <figure className="testimonial-card" key={t.author}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <strong>{t.author}</strong>
              <span>{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="portfolio-section" id="services">
      <p className="section-label">What I Do</p>
      <h2 className="section-title">
        Documentation that drives product adoption
      </h2>
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

function CTASection() {
  return (
    <div className="work-section-bg">
      <section className="cta-section">
        <h2>Need documentation that developers will actually read?</h2>
        <p>
          I help engineering teams and developer-focused companies create clear,
          impactful documentation that reduces support tickets and accelerates
          product adoption.
        </p>
        <div className="cta-actions">
          <a href="/contact" className="btn-primary">
            Let's Talk
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
        <ImpactStatsSection />
        <ServicesSection />
        <SkillsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
