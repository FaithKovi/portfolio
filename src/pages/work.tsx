import React, { useState } from "react";
import Layout from "@theme/Layout";

// ─── DATA ────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Runbook as Code (Zensical)",
    description:
      "Docs-as-code site of executable AWS incident-response runbooks (ECS, RDS, Lambda, ALB), built with Zensical and deployed to Netlify. Enforced a consistent runbook template via a custom Python structure validator and ShellCheck linting in GitHub Actions CI, with automated deploys and per-PR previews.",
    emoji: "📝",
    tech: ["Zensical", "Docs-as-Code", "Python", "ShellCheck", "GitHub Actions", "CI/CD"],
    live: "https://runbook-as-code.netlify.app/",
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
    title: "AI Changelog Generator",
    description:
      "A Python CLI tool that reads git commit history and generates polished, categorized changelogs using Gemini's API or Claude's API. Parses commits, filters noise, groups changes by type (Added, Changed, Fixed, Security), and outputs publish-ready markdown following the Keep a Changelog standard.",
    emoji: "✨",
    tech: ["Markdown", "Docs-as-Code", "Python", "Anthropic API", "Git", "Gemini API"],
    code: "https://github.com/FaithKovi/changelog-generator",
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio built with Docusaurus, auto-deployed via GitHub Actions, with RSS, dark mode, and Formspree contact integration.",
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

const ARTICLES = [
  {
    title: "Accessibility in Writing: How to Create Accessible Documentation That Works for Everyone",
    platform: "HackerNoon",
    description: "Accessibility in writing is crucial for creating inclusive documentation that can be understood and used by everyone, including people with disabilities. This article explores how to create accessible documentation that meets the needs of all users, ensuring that your content is usable and effective for a diverse audience.",
    url: "https://hackernoon.com/accessibility-in-writing-how-to-create-accessible-documentation-that-works-for-everyone",
    date: "Jul. 2026",
  },
  {
    title: "How to Set Up Your Monitoring System Alerts",
    platform: "AppSignal Blog",
    description: "Learn how to set up your monitoring system alerts for your application in AppSignal. This article provides a guide to configuring effective alerts that help you stay on top of your application's performance and reliability.",
    url: "https://blog.appsignal.com/2026/04/07/how-to-set-up-your-monitoring-system-alerts",
    date: "Apr. 2026",
  },
  {
    title: "Run apps, databases, brokers, and AI anywhere - with no vendor lock-in",
    platform: "Clouddley",
    description: "Discover how to run your applications, databases, message brokers, and AI workloads anywhere without vendor lock-in. This article explores strategies for achieving cloud portability and flexibility in modern application deployment with Clouddley",
    url: "https://blog.clouddley.com/posts/run-apps-databases-brokers-and-ai-anywhere-with-no-vendor-lock-in",
    date: "Dec. 2025",
  },
  {
    title: "How We Cut Our Google Cloud Bill by 60% with Clouddley",
    platform: "Clouddley",
    description: "Discover how we optimized our Google Cloud costs by 60% using Clouddley. This article shares practical strategies and insights for managing cloud expenses effectively.",
    url: "https://blog.clouddley.com/posts/how-we-cut-our-cloud-bill-by-60-percent-with-clouddley",
    date: "Nov. 2025",
  },
  {
    title: "Exploring API latency analysis using Golang",
    platform: "Medium",
    description: "Users expect instantaneous responses and seamless experience from applications. If an application doesn't do this it impacts the user experience. This is why a critical performance metric called API latency is important to monitor.",
    url: "https://vera-kaka.medium.com/exploring-api-latency-analysis-using-golang-372d54178ff8",
    date: "Apr. 2024",
  },
  {
    title: "Serverless Computing and DevOps: The Future of Cloud Deployment",
    platform: "HackerNoon",
    description: "The world of serverless computing is where innovation drives operations and applications scale seamlessly to meet demand. It is a game changer in the computing industry. This article will highlight its benefits in the future of cloud deployment.",
    url: "https://hackernoon.com/serverless-computing-and-devops-the-future-of-cloud-deployment",
    date: "Nov. 2023",
  },
  {
    title: "Introduction to AWS Elastic Beanstalk",
    platform: "AWS in Plain English",
    description: "AWS Elastic Beanstalk is a powerful platform-as-a-service (PaaS) offering that simplifies the deployment and management of applications in the AWS cloud. It abstracts away the underlying infrastructure, allowing developers to focus on writing code and delivering value to users.",
    url: "https://awstip.com/introduction-to-aws-elastic-beanstalk-126d5628c657",
    date: "Jan. 2023",
  },
  {
    title: "How to Add Environment Variables to Applications Deployed on AWS Amplify",
    platform: "AWS in Plain English",
    description: "Environment variables are essential for managing application configurations in different environments. This article explains how to set and manage environment variables for applications deployed on AWS Amplify.",
    url: "https://awstip.com/how-to-add-environment-variables-to-applications-deployed-on-aws-amplify-9610e6b6e20e",
    date: "Jan. 2023",
  },
  {
    title: "My DevSecOps Journey",
    platform: "Medium",
    description: "A personal journey through the world of DevSecOps, exploring best practices and lessons learned in integrating security into the development lifecycle.",
    url: "https://vera-kaka.medium.com/my-devsecops-journey-65e3708562a9",
    date: "Mar. 2022",
  },
  {
    title: "How to deploy a 3-tier application using docker-compose on GCE",
    platform: "Medium",
    description: "This article explains how to deploy a 3-tier application using docker-compose on Google Compute Engine (GCE). It covers setting up the environment, creating the necessary Docker containers, and deploying the application.",
    url: "https://vera-kaka.medium.com/deploying-a-three-tier-application-to-google-kubernetes-engine-gke-c0ce25f7a3c3",
    date: "Oct. 2021",
  },
  {
    title: "How to automate the creation of VPC and subnets using Terraform",
    platform: "Medium",
    description: "Terraform is a powerful infrastructure-as-code tool that allows you to define and provision cloud infrastructure using declarative configuration files. This article explains how to automate the creation of VPC and subnets using Terraform.",
    url: "https://vera-kaka.medium.com/automate-the-creation-of-vpc-and-subnets-using-terraform-f198f1f57900",
    date: "Oct. 2021",
  },
];

const EXPERIENCE = [
  {
    logo: "/img/literally-logo.jpg",
    role: "Freelance Technical Writer",
    company: "Literally(agency)",
    location: "Oslo, Norway · Remote",
    period: "Aug 2025 – Present",
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
    location: "Delaware, USA · Remote",
    period: "Jul 2023 – Dec 2025",
    bullets: [
      "Reduced customer support tickets by 80% by rebuilding developer documentation and tutorials in GitBook, working with engineers to turn platform features into clear, task-focused guides.",
      "Built docs-as-code workflows using Git and CI/CD, introducing peer reviews and automated publishing to replace manual documentation releases with merge-triggered deployments.",
      "Managed the technical blog on Mintlify and maintained a growing tutorial library, making it easier for new users to understand and adopt the platform.",
    ],
    tags: ["Docs-as-Code", "Diátaxis", "Git", "Information Architecture", "Onboarding"],
    // caseStudy: "/case-studies/clouddley",
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

const EDUCATION = [
  {
    school: "University of Port Harcourt",
    degree: "Bachelor of Science in Biochemistry",
    year: "2016 – 2021",
  },
];

const CV_URL = "/Faith_Wachukwu_Resume.pdf";

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
  const [tab, setTab] = useState<
    "experience" | "projects" | "opensource" | "articles"
  >("experience");

  return (
    <Layout title="Work" description="Projects, articles, and experience">
      <main>
        <section className="page-header">
          <p className="section-label">Work</p>
          <h1 className="page-title">Things I've built and written</h1>
          <p className="page-subtitle">
            Projects, published articles, open-source contributions, and
            professional experience.
          </p>
          <div className="page-header-actions">
            <a className="btn-outline" href={CV_URL} target="_blank" rel="noopener noreferrer">
              Download CV ↓
            </a>
          </div>
        </section>

        {/* Featured case study banner */}
        {/* <section className="portfolio-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <a className="featured-case-study" href="/case-studies/clouddley">
            <span className="fcs-tag">Featured case study</span>
            <h3>Cutting support tickets ~80% with a Diátaxis docs rebuild</h3>
            <p>
              How restructuring Clouddley's documentation around user intent —
              and closing the highest-volume gaps — measurably reduced inbound
              support load.
            </p>
            <span className="fcs-link">Read the case study →</span>
          </a>
        </section> */}

        <section className="portfolio-section" style={{ paddingTop: "2rem" }}>
          <div className="tab-buttons">
            <button
              className={`tab-btn ${tab === "experience" ? "active" : ""}`}
              onClick={() => setTab("experience")}
            >
              Experience
            </button>
            <button
              className={`tab-btn ${tab === "projects" ? "active" : ""}`}
              onClick={() => setTab("projects")}
            >
              Projects
            </button>
            <button
              className={`tab-btn ${tab === "opensource" ? "active" : ""}`}
              onClick={() => setTab("opensource")}
            >
              Open Source
            </button>
            <button
              className={`tab-btn ${tab === "articles" ? "active" : ""}`}
              onClick={() => setTab("articles")}
            >
              Articles
            </button>
          </div>

          {/* Projects Tab */}
          {tab === "projects" && (
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
          )}

          {/* Open Source Tab */}
          {tab === "opensource" && (
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
          )}

          {/* Articles Tab */}
          {tab === "articles" && (
            <div className="articles-list">
              {ARTICLES.map((article) => (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-card"
                  key={article.title}
                >
                  <div className="article-card-content">
                    <div className="article-meta">
                      <span className="article-platform">
                        {article.platform}
                      </span>
                      <span className="article-date">{article.date}</span>
                    </div>
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                  </div>
                  <span className="article-arrow">↗</span>
                </a>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {tab === "experience" && (
            <>
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
                      {/* {exp.caseStudy && (
                        <a className="exp-case-link" href={exp.caseStudy}>
                          Read the full case study →
                        </a>
                      )} */}
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

              {/* Education & Communities */}
              <div className="about-details-stacked" style={{ marginTop: "3rem" }}>
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

                {/* <div>
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
                </div> */}

                <div>
                  <p className="section-label">Communities</p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
                  >
                    <span className="cert-badge">
                      ⎈ Helm Documentation (Contributor)
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </main>
    </Layout>
  );
}
