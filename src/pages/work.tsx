import React, { useState } from "react";
import Layout from "@theme/Layout";

// ─── DATA ────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio built with Docusaurus showcasing technical writing samples, project docs, and professional experience. Deployed via GitHub Pages with CI/CD.",
    emoji: "🌐",
    tech: ["Docusaurus", "React", "GitHub Pages", "CI/CD"],
    code: "https://github.com/FaithKovi/portfolio",
    live: "https://faithkovi.xyz",
  },
];

const ARTICLES = [
  {
    title: "Run apps, databases, brokers, and AI anywhere - with no vendor lock-in",
    platform: "Clouddley",
    description: "Discover how to run your applications, databases, message brokers, and AI workloads anywhere without vendor lock-in. This article explores strategies for achieving cloud portability and flexibility in modern application deployment with Clouddley",
    url: "https://blog.clouddley.com/posts/run-apps-databases-brokers-and-ai-anywhere-with-no-vendor-lock-in",
    date: "Dec 2025",
  },
  {
    title: "How We Cut Our Google Cloud Bill by 60% with Clouddley",
    platform: "Clouddley",
    description: "Discover how we optimized our Google Cloud costs by 60% using Clouddley. This article shares practical strategies and insights for managing cloud expenses effectively.",
    url: "https://blog.clouddley.com/posts/how-we-cut-our-cloud-bill-by-60-percent-with-clouddley",
    date: "Nov 2025",
  },
  {
    title: "Exploring API latency analysis using Golang",
    platform: "Medium",
    description: "Users expect instantaneous responses and seamless experience from applications. If an application doesn’t do this it impacts the user experience. This is why a critical performance metric called API latency is important to monitor.",
    url: "https://vera-kaka.medium.com/exploring-api-latency-analysis-using-golang-372d54178ff8",
    date: "Apr 2024",
  },
  {
    title: "Serverless Computing and DevOps: The Future of Cloud Deployment",
    platform: "Hackernoon",
    description: "The world of serverless computing is where innovation drives operations and applications scale seamlessly to meet demand. It is a game changer in the computing industry. This article will highlight its benefits in the future of cloud deployment.",
    url: "https://hackernoon.com/serverless-computing-and-devops-the-future-of-cloud-deployment",
    date: "Nov 2023",
  },
  {
    title: "Introduction to AWS Elastic Beanstalk",
    platform: "MEDIUM(AWSTIP)",
    description: "AWS Elastic Beanstalk is a powerful platform-as-a-service (PaaS) offering that simplifies the deployment and management of applications in the AWS cloud. It abstracts away the underlying infrastructure, allowing developers to focus on writing code and delivering value to users. In this article, we will explore the key features and benefits of AWS Elastic Beanstalk, and how it can help you streamline your application deployment process.",
    url: "https://awstip.com/introduction-to-aws-elastic-beanstalk-126d5628c657",
    date: "Jan 2023",
  },
  {
    title: "How to Add Environment Variables to Applications Deployed on AWS Amplify",
    platform: "MEDIUM(AWSTIP)",
    description: "Environment variables are essential for managing application configurations in different environments. This article explains how to set and manage environment variables for applications deployed on AWS Amplify.",
    url: "https://awstip.com/how-to-add-environment-variables-to-applications-deployed-on-aws-amplify-9610e6b6e20e",
    date: "Jan 2023",
  },
  {
    title: "My DevSecOps Journey",
    platform: "MEDIUM",
    description: "A personal journey through the world of DevSecOps, exploring best practices and lessons learned in integrating security into the development lifecycle.",
    url: "https://vera-kaka.medium.com/my-devsecops-journey-65e3708562a9",
    date: "Mar 2022",
  },
  {
    title: "How to deploy a 3-tier application using docker-compose on GCE",
    platform: "MEDIUM",
    description: "This article explains how to deploy a 3-tier application using docker-compose on Google Compute Engine (GCE). It covers setting up the environment, creating the necessary Docker containers, and deploying the application.",
    url: "https://vera-kaka.medium.com/deploying-a-three-tier-application-to-google-kubernetes-engine-gke-c0ce25f7a3c3",
    date: "Oct 2021",
  },
  {
    title: "How to automate the creation of VPC and subnets using Terraform",
    platform: "MEDIUM",
    description: "Terraform is a powerful infrastructure-as-code tool that allows you to define and provision cloud infrastructure using declarative configuration files. This article explains how to automate the creation of VPC and subnets using Terraform.",
    url: "https://vera-kaka.medium.com/automate-the-creation-of-vpc-and-subnets-using-terraform-f198f1f57900",
    date: "Oct 2021",
  },
];

const EXPERIENCE = [
  {
    logo: "LR",
    role: "Freelance Technical Writer",
    company: "Literally",
    location: "Oslo, Norway · Remote",
    period: "Aug 2025 – Present",
    bullets: [
      "Write and maintain clear, user-focused technical documentation for client products.",
      "Translate complex technical concepts into practical, easy-to-use content.",
      "Collaborate with engineers, product managers, and stakeholders to define documentation needs.",
      "Adjust tone and depth based on audience, from technical to non-technical users.",
    ],
    tags: ["Technical Writing", "API Docs", "Markdown", "Developer Guides"],
  },
  {
    logo: "CD",
    role: "Documentation Engineer",
    company: "Clouddley",
    location: "Delaware, USA · Remote",
    period: "Jul 2023 – Dec 2025",
    bullets: [
      "Produced comprehensive technical documentation for internal and customer use, enhancing product understanding and user experience.",
      "Curated and maintained a repository of tutorials and help systems, improving user onboarding and support efficiency.",
      "Collaborated with engineering teams to translate technical features into user-friendly docs, resulting in an 80% reduction in support tickets.",
      "Implemented documentation-as-code workflows using Git, enabling version control, peer reviews, and automated publishing.",
    ],
    tags: [
      "Docs-as-Code",
      "Git",
      "Tutorials",
      "Technical Docs",
      "Onboarding",
    ],
  },
  {
    logo: "FD",
    role: "Freelance DevOps Engineer",
    company: "Freelance",
    location: "Remote",
    period: "Nov 2022 – Jun 2023",
    bullets: [
      "Migrated PostgreSQL databases to DigitalOcean Managed Database, documenting the migration process for replicability.",
      "Resolved critical Elastic Beanstalk issues, enhancing application stability and reducing downtime.",
      "Leveraged AWS services including ECS Fargate, DynamoDB, and Lambda to optimize application scalability.",
      "Automated CI/CD pipelines using CodeBuild, CodeDeploy, and CodePipeline for faster, reliable releases.",
    ],
    tags: [
      "AWS",
      "ECS Fargate",
      "DynamoDB",
      "Lambda",
      "CI/CD",
      "DigitalOcean",
    ],
  },
  {
    logo: "GR",
    role: "Junior DevOps/QA Engineer",
    company: "Grais",
    location: "New York, USA · Remote",
    period: "Apr 2022 – Oct 2022",
    bullets: [
      "Automated packaging and deployment of web applications on ECS Fargate using GitHub Actions.",
      "Migrated multiple domains to AWS Route53 for centralized management.",
      "Orchestrated deployment of 3-tier applications with AWS Amplify, Elastic Beanstalk, and RDS.",
      "Implemented comprehensive monitoring and logging with CloudWatch.",
    ],
    tags: [
      "GitHub Actions",
      "AWS",
      "Route53",
      "CloudWatch",
      "ECS Fargate",
    ],
  },
  {
    logo: "SC",
    role: "Cloud Engineer Intern",
    company: "She Code Africa",
    location: "Lagos, Nigeria · Remote",
    period: "Aug 2021 – Oct 2021",
    bullets: [
      "Containerized web applications with Docker for consistent development and deployment environments.",
      "Automated DevOps tool installation using Ansible, optimizing infrastructure setup.",
      "Provisioned Google Cloud infrastructure using Terraform for scalable resource management.",
      "Scripted CI/CD pipelines with Jenkins and CircleCI, automating application deployment.",
    ],
    tags: ["Docker", "Ansible", "Terraform", "GCP", "Jenkins", "CircleCI"],
  },
];

// ─── PAGE ────────────────────────────────────────────────────

export default function Work(): React.JSX.Element {
  const [tab, setTab] = useState<"projects" | "articles" | "experience">(
    "projects"
  );

  return (
    <Layout title="Work" description="Projects, articles, and experience">
      <main>
        <section className="page-header">
          <p className="section-label">Work</p>
          <h1 className="page-title">Things I've built and written</h1>
          <p className="page-subtitle">
            Projects, published articles, and professional experience.
          </p>
        </section>

        <section className="portfolio-section" style={{ paddingTop: 0 }}>
          <div className="tab-buttons">
            <button
              className={`tab-btn ${tab === "projects" ? "active" : ""}`}
              onClick={() => setTab("projects")}
            >
              Projects
            </button>
            <button
              className={`tab-btn ${tab === "articles" ? "active" : ""}`}
              onClick={() => setTab("articles")}
            >
              Articles
            </button>
            <button
              className={`tab-btn ${tab === "experience" ? "active" : ""}`}
              onClick={() => setTab("experience")}
            >
              Experience
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
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code ↗
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live ↗
                        </a>
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
            <div className="experience-list">
              {EXPERIENCE.map((exp) => (
                <div className="experience-card" key={exp.role + exp.company}>
                  <img className="exp-logo" src={exp.logo} alt={exp.company} />
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
          )}
        </section>
      </main>
    </Layout>
  );
}