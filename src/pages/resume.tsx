import React from "react";
import Layout from "@theme/Layout";
import { EXPERIENCE, EDUCATION, CV_URL } from "./work";

// ─── DATA ────────────────────────────────────────────────────

const PROJECT_LINES = [
  {
    name: "AI Changelog Generator",
    line: "Python CLI turning git history into Keep-a-Changelog entries via Gemini or Claude; documented end to end in a live Diátaxis docs set.",
  },
  {
    name: "Runbook as Code",
    line: "Executable AWS incident-response runbooks with a custom Python structure validator and ShellCheck linting in CI.",
  },
  {
    name: "Documentation Sample Set",
    line: "A working Diátaxis documentation set — tutorial, how-to, reference, explanation — for a real open-source CLI.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────

export default function Resume(): React.JSX.Element {
  return (
    <Layout
      title="Resume"
      description="Resume of Faith Wachukwu — Documentation Engineer & Technical Writer. DevOps background, docs-as-code systems, measured support-load reduction."
    >
      <main className="resume-page">
        <section className="page-header">
          <p className="section-label">Resume</p>
          <h1 className="page-title">Faith Wachukwu</h1>
          <p className="page-subtitle">
            Documentation Engineer &amp; Technical Writer · Remote · UTC+1
          </p>
          <p className="resume-links">
            <a href="mailto:faithkovi@gmail.com">faithkovi@gmail.com</a>
            {" · "}
            <a href="https://github.com/FaithKovi" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" · "}
            <a href="https://linkedin.com/in/faith-wachukwu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" · "}
            <a href="https://faithwachukwu.com">faithwachukwu.com</a>
          </p>
          <div className="page-header-actions resume-download">
            <a className="btn-primary" href={CV_URL} target="_blank" rel="noopener noreferrer">
              Download PDF ↓
            </a>
          </div>
        </section>

        <section className="portfolio-section resume-body" style={{ paddingTop: 0 }}>
          <p className="resume-arc">
            Started in DevOps; evolved into documentation engineering and the
            tooling that keeps docs accurate.
          </p>

          <h2>Experience</h2>
          {EXPERIENCE.map((exp) => (
            <div className="resume-entry" key={exp.role + exp.company}>
              <div className="resume-entry-head">
                <h3>
                  {exp.role} · {exp.company}
                </h3>
                <span>{exp.period}</span>
              </div>
              <p className="resume-entry-meta">{exp.location}</p>
              <ul>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2>Selected projects</h2>
          <ul className="resume-projects">
            {PROJECT_LINES.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong> — {p.line}
              </li>
            ))}
          </ul>

          <h2>Writing &amp; open source</h2>
          <ul className="resume-projects">
            <li>
              30+ published technical articles on AppSignal, HackerNoon, and
              Clouddley — see <a href="/writing">/writing</a>.
            </li>
            <li>
              Helm documentation contributor (helm-www): plugins v3→v4
              migration guide, Helm 4 release history, contributing guide, Go
              SDK docs, CI drift guard.
            </li>
          </ul>

          <h2>Certifications &amp; education</h2>
          <ul className="resume-projects">
            <li>KCNA — Kubernetes and Cloud Native Associate</li>
            {EDUCATION.map((e) => (
              <li key={e.school}>
                {e.degree}, {e.school} ({e.year})
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
