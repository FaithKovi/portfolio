import React from "react";
import Layout from "@theme/Layout";

// ─── DATA ────────────────────────────────────────────────────

const PUBLICATIONS = ["AppSignal", "HackerNoon", "Clouddley", "AWS in Plain English", "Medium"];

const ARTICLES = [
  {
    title: "7 ETL Tools Built for Real-Time Data Integration",
    platform: "TECH DEBT WEEKLY",
    description: "Real-time ETL can mean CDC, event streaming, or a warehouse refreshed every few minutes. How Estuary, Confluent, Striim, Informatica, Dataflow, Lakeflow, and AWS Glue compare, and where Fivetran and Airbyte fit.",
    url: "https://www.techdebtweekly.com/real-time-etl-tools",
    date: "Oct. 2026",
  },
  {
    title: "Architecture Decision Records (ADRs): A Beginner's Guide",
    platform: "HackerNoon",
    description: "Architecture Decision Records (ADRs) are a way to document architectural decisions made during the development of a software system. This article provides a beginner's guide to understanding ADRs, their benefits, and how to implement them effectively in your projects.",
    url: "https://hackernoon.com/architecture-decision-records-adrs-a-beginners-guide",
    date: "Oct. 2026",
  },
  {
    title: "Accessibility in Writing: How to Create Accessible Documentation That Works for Everyone",
    platform: "HackerNoon",
    description: "Accessibility in writing is crucial for ensuring that documentation is usable by everyone, including people with disabilities. This article explores best practices for creating accessible documentation that meets the needs of all users.",
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

export const FROM_THE_BLOG = [
  {
    title: "Migrating from Material for MkDocs to Zensical",
    href: "/blog/migrating-from-material-for-mkdocs-to-zensical/",
    date: "20 May 2026",
    image: "/img/blog/mkdocs1.png",
    description: "Material for MkDocs is a popular theme for MkDocs, but it has some limitations. This article explains how to migrate from Material for MkDocs to Zensical, a new documentation theme that offers more flexibility and customization options.",
  },
  {
    title: "Why On-Call Engineers Ignore Your Runbooks",
    href: "/blog/why-on-call-engineers-ignore-your-runbooks/",
    date: "18 May 2026",
    image: "/img/blog/oncall-cover.png",
    description: "On-call engineers often ignore runbooks because they are not designed with their workflow in mind. This article explores why this happens and how to create more effective runbooks.",
  },
  {
    title: "Documentation UX: Why It Matters More Than Accurate Content Alone",
    href: "/blog/documentation-ux-and-why-matters-more-than-accurate-content-alone/",
    date: "13 Apr 2026",
    image: "/img/blog/cover-doc-ux.png",
    description: "Documentation UX is the user experience of your documentation. This article explains why documentation UX matters more than accurate content alone and how to improve it.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────

export default function Writing(): React.JSX.Element {
  return (
    <Layout
      title="Writing"
      description="20+ published technical articles and blog posts by Faith Wachukwu — docs-as-code, documentation UX, and writing for AI retrieval."
    >
      <main>
        <section className="page-header">
          <p className="section-label">Writing</p>
          <h1 className="page-title">Published work</h1>
          <p className="page-subtitle">
            20+ technical articles across developer publications, blogs, and personal projects. I write about documentation, docs-as-code, developer experience, and writing for AI retrieval.
          </p>
          <div className="publications-strip">
            {PUBLICATIONS.map((p) => (
              <span className="publication-badge" key={p}>
                {p}
              </span>
            ))}
          </div>
        </section>

        <div className="work-section-bg" id="blog">
          <section className="portfolio-section">
            <h2 className="section-title">Latest from my blog</h2>
            <div className="writing-card-grid">
              {FROM_THE_BLOG.map((p) => (
                <a className="writing-card" href={p.href} key={p.href}>
                  <div className="writing-card-media">
                    <img src={p.image} alt="" loading="lazy" />
                    <span className="writing-card-date">{p.date}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </a>
              ))}
            </div>
            <a href="/blog" className="btn-outline" style={{ marginTop: "1.5rem", display: "inline-block" }}>
              All posts →
            </a>
          </section>
        </div>
        <section className="portfolio-section" id="articles" style={{ paddingTop: "1rem" }}>
          <h2 className="section-title">External publications</h2>
          <div className="writing-card-grid">
            {ARTICLES.map((article) => (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-card"
                key={article.title}
              >
                <div className="writing-card-media writing-card-media--tile">
                  <span className="writing-tile-platform">{article.platform}</span>
                  <span className="writing-card-date">{article.date}</span>
                </div>
                <h3>{article.title} ↗</h3>
                <p>{article.description}</p>
              </a>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}
