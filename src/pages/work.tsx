import React from "react";
import Layout from "@theme/Layout";

// ─── DATA ────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "AI Changelog Generator",
    description:
      "A Python CLI tool that reads git commit history and generates polished, categorized changelogs using Gemini's API or Claude's API. Parses commits, filters noise, groups changes by type (Added, Changed, Fixed, Security), and outputs publish-ready markdown following the Keep a Changelog standard. Documented end to end in the live docs sample on this site.",
    emoji: "✨",
    tech: ["Markdown", "Docs-as-Code", "Python", "Anthropic API", "Git", "Gemini API"],
    code: "https://github.com/FaithKovi/changelog-generator",
  },
  {
    title: "Documentation Sample Set (Diátaxis)",
    description:
      "A walk-the-talk documentation set built on the Diátaxis framework — tutorials, how-to guides, reference, and explanation — documenting a real CLI tool. Demonstrates information architecture, task-oriented writing, and docs-as-code structure end to end.",
    emoji: "📚",
    tech: ["Diátaxis", "Docs-as-Code", "Technical Writing", "Information Architecture"],
    live: "/docs/intro",
  },
  {
    title: "Runbook as Code (Zensical)",
    description:
      "Docs-as-code site of executable AWS incident-response runbooks (ECS, RDS, Lambda, ALB), built with Zensical and deployed to Netlify. Enforced a consistent runbook template via a custom Python structure validator and ShellCheck linting in GitHub Actions CI, with automated deploys and per-PR previews.",
    emoji: "📝",
    tech: ["Zensical", "Docs-as-Code", "Python", "ShellCheck", "GitHub Actions", "CI/CD"],
    live: "https://runbook-as-code.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio built with Docusaurus, auto-deployed via GitHub Actions, with RSS, dark mode, prose linting (Vale) in CI, an llms.txt for AI retrieval, and Formspree contact integration.",
    emoji: "🌐",
    tech: ["Docusaurus", "Docs-as-Code", "React", "GitHub Pages", "CI/CD"],
    code: "https://github.com/FaithKovi/portfolio",
    live: "https://faithwachukwu.com",
  },
];

const OPEN_SOURCE = [
  {
    org: "Helm",
    icon: "⎈",
    blurb:
      "Fixed a broken community-update job by adding a drift guard to the CI workflow, authored the plugins v3→v4 migration guide, contributed to the Helm 4 release history, the contributing guide, and the Go SDK docs.",
    links: [
      { label: "All my Helm PRs ↗", url: "https://github.com/helm/helm-www/pulls?q=author%3AFaithKovi" },
    ],
  },
  {
    org: "Kubernetes SIGs · image-builder",
    icon: "☸",
    blurb:
      "Cleaned up YAML formatting across the image-builder project to improve consistency and readability of build configuration.",
    links: [
      { label: "YAML cleanup PR #1328", url: "https://github.com/kubernetes-sigs/image-builder/pull/1328" },
    ],
  },
  {
    org: "CHAOSS Africa",
    icon: "🤝",
    blurb:
      "Contributing to the CHAOSS community's African open-source initiatives — repository structure and documentation for the AFOS (African Open Source) program.",
    links: [
      { label: "chaoss-africa structure #4", url: "https://github.com/chaoss/chaoss-africa/pull/4" },
      { label: "AFOS docs #17", url: "https://github.com/chaoss/AFOS-AfricanOpenSource/pull/17" },
    ],
  },
];

export const EXPERIENCE = [
  {
    logo: "/img/literally-logo.jpg",
    role: "Freelance Technical Writer",
    company: "Literally(agency)",
    location: "Oslo, Norway · Remote",
    period: "Aug 2025 – Present (concurrent with Clouddley contract)",
    bullets: [
      "Built AI-assisted documentation workflows using prompt engineering and RAG to identify content gaps and improve consistency in writing, reducing manual review time while maintaining editorial quality.",
      "Collaborate with engineers, product managers, and stakeholders to ensure accuracy and identify gaps in technical content.",
      "Tailor tone, structure, and depth for diverse audiences ranging from senior developers to non-technical end users.",
    ],
    tags: ["Docs-as-Code", "Technical Writing", "Markdown", "Developer Guides", "AI-assisted Documentation", "RAG"],
  },
  {
    logo: "/img/clouddley-logo.jpg",
    role: "Documentation Engineer (Contract)",
    company: "Clouddley",
    location: "Remote (US company)",
    period: "Jul 2023 – Dec 2025",
    bullets: [
      "Reduced customer support tickets by ~80% by rebuilding developer documentation and tutorials in GitBook, working with engineers to turn platform features into clear, task-focused guides.",
      "Built docs-as-code workflows using Git and CI/CD, introducing peer reviews and automated publishing to replace manual documentation releases with merge-triggered deployments.",
      "Managed the technical blog on Mintlify and maintained a growing tutorial library, making it easier for new users to understand and adopt the platform.",
    ],
    tags: ["Docs-as-Code", "Diátaxis", "Git", "Information Architecture", "Onboarding"],
  },
  {
    logo: "",
    initials: "FL",
    role: "Freelance DevOps Engineer",
    company: "Freelance",
    location: "Remote",
    period: "Nov 2022 – Jun 2023",
    bullets: [
      "Migrated PostgreSQL databases to DigitalOcean Managed Database and authored migration runbooks ensuring replicability and knowledge transfer across teams.",
      "Automated CI/CD pipelines using AWS CodeBuild, CodeDeploy, and CodePipeline; documented deployment workflows and infrastructure architecture for cross-team reference.",
      "Leveraged AWS services (ECS Fargate, DynamoDB, Lambda) to optimize application scalability, creating technical reference documentation for each component.",
    ],
    tags: ["AWS", "ECS Fargate", "DynamoDB", "Lambda", "CI/CD", "DigitalOcean"],
  },
  {
    logo: "",
    initials: "GR",
    role: "Junior DevOps/QA Engineer",
    company: "Grais",
    location: "New York, USA · Remote",
    period: "Apr 2022 – Oct 2022",
    bullets: [
      "Automated web application packaging and deployment on ECS Fargate using GitHub Actions; maintained internal deployment guides and operational runbooks.",
      "Orchestrated 3-tier application deployments on AWS (Amplify, Elastic Beanstalk, RDS) and implemented CloudWatch monitoring, documented operational procedures and integrated various AWS services to meet business/client needs.",
    ],
    tags: ["GitHub Actions", "AWS", "Route53", "CloudWatch", "ECS Fargate"],
  },
  {
    logo: "",
    initials: "SC",
    role: "Cloud Engineer Intern",
    company: "She Code Africa",
    location: "Lagos, Nigeria · Remote",
    period: "Aug 2021 – Oct 2021",
    bullets: [
      "Containerized web applications with Docker, provisioned GCP infrastructure using Terraform, and scripted CI/CD pipelines with Jenkins and CircleCI.",
      "Automated infrastructure setup using Ansible; documented provisioning procedures to reduce onboarding time for incoming team members.",
    ],
    tags: ["Docker", "Ansible", "Terraform", "GCP", "Jenkins", "CircleCI"],
  },
];

export const EDUCATION = [
  {
    school: "University of Port Harcourt",
    degree: "Bachelor of Science in Biochemistry",
    year: "2016 – 2021",
  },
];

export const CV_URL = "/Faith_Wachukwu_Resume.pdf";

// ─── HELPERS ─────────────────────────────────────────────────

function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

// ─── PAGE ────────────────────────────────────────────────────

export default function Work(): React.JSX.Element {
  return (
    <Layout
      title="Work"
      description="Projects, open-source contributions, and professional experience of Faith Wachukwu, Documentation Engineer."
    >
      <main>
        <section className="page-header">
          <p className="section-label">Work</p>
          <h1 className="page-title">Things I've built and written</h1>
          <p className="page-subtitle">
            Projects, open-source contributions, and professional experience.
          </p>
          <div className="page-header-actions">
            <a className="btn-outline" href={CV_URL} target="_blank" rel="noopener noreferrer">
              Download Resume ↓
            </a>
          </div>
        </section>

        <section className="portfolio-section" id="projects" style={{ paddingTop: "2rem" }}>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-card-img">{project.emoji}</div>
                <div className="project-card-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-links">
                    {project.code && (
                      <SmartLink href={project.code}>Code ↗</SmartLink>
                    )}
                    {project.live && (
                      <SmartLink href={project.live}>
                        {isExternal(project.live) ? "Live ↗" : "View →"}
                      </SmartLink>
                    )}
                  </div>
                  <div className="project-tech-tags">
                    {project.tech.map((t) => (
                      <span className="project-tech-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="opensource">
          <h2 className="section-title">Open source</h2>
          <div className="oss-list">
            {OPEN_SOURCE.map((oss) => (
              <div className="oss-card" key={oss.org}>
                <div className="oss-header">
                  <span className="oss-icon">{oss.icon}</span>
                  <h4 className="oss-org">{oss.org}</h4>
                </div>
                <p className="oss-blurb">{oss.blurb}</p>
                <div className="oss-links">
                  {oss.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {EXPERIENCE.map((exp) => (
              <div className="experience-card" key={exp.role + exp.company}>
                {exp.logo ? (
                  <img className="exp-logo" src={exp.logo} alt={exp.company} />
                ) : (
                  <div className="exp-logo exp-logo-initials">
                    {exp.initials || exp.company.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div className="exp-content">
                  <h4>{exp.role}</h4>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-meta">
                    {exp.period} · {exp.location}
                  </p>
                  <ul>
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="exp-tags">
                    {exp.tags.map((t) => (
                      <span className="project-tech-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="education">
          <div className="about-details-stacked">
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

            <div>
              <p className="section-label">Communities</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <span className="cert-badge">
                  ⎈ Helm Documentation (Contributor)
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
