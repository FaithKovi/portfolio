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
          <h1 className="hero-title">Faith Wachukwu</h1>
          <h6>(formerly Faith Kovi)</h6>
        <span className="hero-label">Documentation Engineer | Technical Writer</span>
          <p className="hero-description">
            A Documentation Engineer and Technical Writer with over 3+ years of experience creating developer-focused docs that simplify complex concepts.
          </p>
          <p className="hero-description">
            I build scalable docs-as-code workflows, partner with engineering teams on guides and APIs, contribute to open source, and write about developer experience and documentation strategy.
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
        <ServicesSection />
        <SkillsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
