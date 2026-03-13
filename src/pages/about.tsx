import React from "react";
import Layout from "@theme/Layout";

// ─── DATA ────────────────────────────────────────────────────

const SKILLS = [
  {
    category: "Documentation",
    items: [
      "Docusaurus",
      "Markdown",
      "Swagger/OpenAPI",
      "Postman",
      "Mintlify",
      "Hugo",
      "Gitbook",
      "ReadTheDocs",
    ],
  },
  {
    category: "Technical Writing",
    items: [
      "API Docs",
      "Developer Guides",
      "Tutorials",
      "Release Notes",
      "Info Architecture",
      "UX Writing",
    ],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS", "GCP", "DigitalOcean", "Terraform", "CloudFormation"],
  },
  {
    category: "Containers & CI/CD",
    items: [
      "Docker",
      "Kubernetes",
      "ECS Fargate",
      "GitHub Actions",
      "CircleCI",
      "AWS CodePipeline",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Golang", "Bash", "JavaScript"],
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

// ─── PAGE ────────────────────────────────────────────────────

export default function About(): React.JSX.Element {
  return (
    <Layout title="About" description="About Faith Wachukwu">
      <main>
        {/* Hero-style intro */}
        <section className="page-header">
          <p className="section-label">About</p>
          <h1 className="page-title">
            Creating docs that developers actually enjoy reading
          </h1>
        </section>

        {/* Bio */}
        <section className="portfolio-section" style={{ paddingTop: 0 }}>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi, I'm Faith Wachukwu — a Documentation Engineer and Technical
                Writer who turns complex technical concepts into clear,
                actionable content.
              </p>
              <p>
                I started out in Cloud Engineering and DevOps, working hands-on
                with AWS, GCP, Docker, Kubernetes, and Terraform. That
                background taught me what developers actually need from
                documentation because I've been the one searching for answers
                that weren't there.
              </p>
              <p>
                Today, I partner with engineering teams to build API docs,
                developer guides, and tutorials that reduce support tickets and
                help users ship faster.
              </p>
              <p>
                I build scalable documentation systems using docs-as-code tools
                like Docusaurus, GitBook, and Mintlify — with Git-based
                workflows, CI/CD pipelines, and version control built in from
                day one. Every doc I write goes through the same rigorous
                process as production code: peer-reviewed, versioned, and
                continuously deployed.
              </p>
              <p>
                Outside work, I contribute to the CHAOSS open-source community, Helm Docs,
                and write technical articles on developer platforms. I hold a
                Kubernetes and Cloud Native Associate certification, and I'm
                always exploring new ways to make technical knowledge more
                accessible.
              </p>
              <p>
                If you're looking to improve your documentation or create
                technical content that truly serves your users —{" "}
                <a href="/contact">let's talk</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
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

        {/* Education + Certificates + Communities */}
        <section className="portfolio-section">
          <div className="about-details-stacked">
            {/* Education */}
            <div>
              <p className="section-label">Education</p>
              <div className="education-list">
                {EDUCATION.map((edu) => (
                  <div className="education-card" key={edu.school}>
                    <div className="edu-icon">🎓</div>
                    <div className="edu-content">
                      <h4>{edu.school}</h4>
                      <p>{edu.degree}</p>
                      <p className="edu-year">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <p className="section-label">Certificates</p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
              >
                {CERTIFICATES.map((cert) => (
                  <span className="cert-badge" key={cert.name}>
                    🏅 {cert.name} ({cert.year})
                  </span>
                ))}
              </div>
            </div>

            {/* Communities */}
            <div>
              <p className="section-label">Communities</p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
              >
                <span className="cert-badge">
                  🤝 CHAOSS Community (Contributor) · Jun 2022 – Present
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}