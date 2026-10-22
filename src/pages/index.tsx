import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";

// ─── DATA ────────────────────────────────────────────────────

const PROOF = [
  {
    stat: "2+",
    title: "Docs tools I've built",
    desc: "CLIs and pipelines that keep documentation accurate: an AI changelog generator, executable runbooks, and more.",
    href: "/work#projects",
    cta: "See projects →",
  },
  {
    stat: "Live",
    title: "Working docs sample",
    desc: "A real open-source CLI documented end to end with Diátaxis — tutorial, how-to, reference, explanation.",
    href: "/docs/intro",
    cta: "See the sample →",
  },
  {
    stat: "20+",
    title: "Published articles",
    desc: "on AppSignal, Clouddley, HackerNoon & more",
    href: "/writing",
    cta: "All writing →",
  },
];

// const CREDENTIALS = ["AppSignal", "HackerNoon", "Clouddley", "Helm (OSS)"];

const TESTIMONIALS = [
  {
    quote:
      "I had the pleasure of managing Faith while she was a Documentation Engineer at Clouddley. She played a crucial role in developing our technical documentation from the ground up, making complex multi-cloud infrastructure concepts accessible to developers of all levels. Any team would be fortunate to have her.",
    name: "Obinna Odirionye",
    role: "Founder & CEO",
    company: "Clouddley",
    link: "https://www.linkedin.com/in/faith-wachukwu/details/recommendations/",
  },
  {
    quote:
      "I'm pleased to recommend Faith Kovi, a talented Documentation Engineer whose work at Clouddley has been consistently thoughtful, clear, and impactful. Faith has a strong knack for turning complex technical topics into user-friendly documentation that genuinely supports both our internal team and our wider user community.",
    name: "Chibuzor Ojukwu",
    role: "Co-founder & CTO",
    company: "Clouddley",
    link: "https://www.linkedin.com/in/faith-wachukwu/details/recommendations/",
  },
  {
    quote:
      "One of her key strengths is her ability to quickly understand technical concepts and translate them into clear, structured, and user-friendly content. Her writing is precise, well-organized, and always tailored to the intended audience.",
    name: "Tijana Glušac",
    role: "Operations Manager",
    company: "Literally",
    link: "https://www.linkedin.com/in/faith-wachukwu/details/recommendations/",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-split">
        <div className="hero-content">
          <span className="hero-eyebrow">
            Documentation Engineer · Technical Writer
          </span>
          <h1 className="hero-headline hero-greeting">
            <span className="greet-lead">Hey, I'm</span>{" "}
            <span className="greet-name" aria-label="Faith Wachukwu">
              {"Faith Wachukwu".split("").map((ch, i) => (
                <span
                  key={i}
                  className="greet-letter"
                  aria-hidden="true"
                  style={{ animationDelay: `${0.3 + i * 0.04}s` }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-formerly">
            <span className="formerly-label"> (formerly </span>
            <span className="formerly-name">Faith Kovi) </span>
          </p>
          <h1 className="hero-headline">
            Creating documentation users trust, support teams rely on, and products grow with.
          </h1>
          <p className="hero-description">
            With 5+ years across DevOps and Documentation engineering; I create developer guides, API references, tutorials, and build the docs-as-code systems that keep them accurate as your product changes.
          </p>
          <div className="hero-actions">
            <a href="/work" className="btn-primary">
              See My Work
            </a>
            <a href="/Faith_Wachukwu_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
              View my Resume
            </a>
          </div>
        </div>
        <div className="hero-photo-col">
          <img
            className="hero-photo"
            src="/img/profile.jpg"
            alt="Faith Wachukwu"
          />
          <div className="hero-status-chip">
            <span className="status-dot" /> Open to roles
            <span className="status-meta">Remote</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofCardsSection() {
  return (
    <section className="portfolio-section">
      <div className="proof-grid">
        {PROOF.map((p) => (
          <a className="proof-card" href={p.href} key={p.title}>
            <span className="proof-stat">{p.stat}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="proof-cta">{p.cta}</span>
          </a>
        ))}
      </div>
      {/* <div className="credentials-row">
        {CREDENTIALS.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div> */}
    </section>
  );
}

function HowIWorkSection() {
  return (
    <section className="portfolio-section">
      <div className="dark-band">
        <div className="dark-band-text">
          <span className="band-eyebrow">How I work</span>
          <h2>Every doc ships like production code.</h2>
          <p>
            Drafted against real user questions, peer-reviewed in Git, linted
            in CI, versioned, and continuously deployed. I start with evidence 
            from support tickets, search queries, and onboarding drop-off, so documentation effort goes where readers actually struggle.
          </p>
        </div>
        <ul className="band-checklist">
          <li>Peer-reviewed in Git</li>
          <li>Prose linted in CI</li>
          <li>Deployed on merge</li>
          <li>Written for humans &amp; AI retrieval</li>
        </ul>
      </div>
    </section>
  );
}

const FEATURED_WRITING = [
  {
    type: "Blog post",
    title: "Migrating from Material for MkDocs to Zensical",
    href: "/blog/migrating-from-material-for-mkdocs-to-zensical/",
    date: "20 May 2026",
    image: "/img/blog/mkdocs1.png",
    description:
      "Material for MkDocs is a popular theme for MkDocs, but it has some limitations. This article explains how to migrate from Material for MkDocs to Zensical, a new documentation theme that offers more flexibility and customization options.",
  },
  {
    type: "HackerNoon",
    title: "How to Create Accessible Documentation That Works for Everyone",
    href: "https://hackernoon.com/accessibility-in-writing-how-to-create-accessible-documentation-that-works-for-everyone",
    date: "Jul 2026",
    description:
      "Practical techniques for documentation that people with disabilities, and everyone else, can actually use.",
  },
  {
    type: "HackerNoon",
    title: "Architecture Decision Records (ADRs): A Beginner's Guide",
    href: "https://hackernoon.com/architecture-decision-records-adrs-a-beginners-guide",
    date: "Oct. 2026",
    description:
      "A practical guide to using Architecture Decision Records (ADRs) to document software architecture decisions, including how to write and maintain ADRs, and how to use them to improve communication and collaboration within a development team.",
  },
];

function FeaturedWritingSection() {
  return (
    <section className="portfolio-section">
      <p className="section-label">Featured writing</p>
      <h2 className="section-title">Articles, guides, and docs</h2>
      <div className="writing-card-grid">
        {FEATURED_WRITING.map((w) => {
          const external = w.href.startsWith("http");
          return (
            <a
              className="writing-card"
              href={w.href}
              key={w.href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {w.image ? (
                <div className="writing-card-media">
                  <img src={w.image} alt="" loading="lazy" />
                  <span className="writing-card-date">{w.date}</span>
                </div>
              ) : (
                <div className="writing-card-media writing-card-media--tile">
                  <span className="writing-tile-platform">{w.type}</span>
                  <span className="writing-card-date">{w.date}</span>
                </div>
              )}
              <span className="writing-card-type">
                {w.type}
                {external && " ↗"}
              </span>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </a>
          );
        })}
      </div>
      <div className="latest-writing-actions">
        <a href="/writing" className="btn-outline">
          All writing →
        </a>
      </div>
    </section>
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
          I build documentation systems that accelerate product adoption and
          stay accurate as the product changes. Open to documentation
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
        <ProofCardsSection />
        <HowIWorkSection />
        <FeaturedWritingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
