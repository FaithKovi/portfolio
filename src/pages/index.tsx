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

// COMPONENTS

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">Documentation Engineer | Technical Writer</span>
          <h1 className="hero-title">Faith Wachukwu</h1>
          <p className="hero-description">
            Documentation Engineer and Technical Writer with 3+ years of
            experience creating developer-focused documentation that simplifies
            complex technical concepts. Passionate about docs-as-code, cloud
            infrastructure, and improving developer experience.
          </p>
          <div className="hero-meta">
            {/* <span>📍 Lagos, Nigeria</span>
            <span>·</span> */}
            <span>✍️ Freelance</span>
          </div>
          <div className="hero-actions">
          <a href="/blog/" className="btn-primary">
            Read Blog
          </a>
           <a href="/work" className="btn-primary">
              View My Work
            </a>
            <a href="/about" className="btn-outline">
              About Me
            </a>
            <a href="/contact" className="btn-outline">
              Get In Touch
            </a>
            {/* <a
              href="https://github.com/FaithKovi"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/faith-kovi"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a> */}
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
        <CTASection />
      </main>
    </Layout>
  );
}
