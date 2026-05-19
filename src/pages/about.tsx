import React from "react";
import Layout from "@theme/Layout";



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
                actionable content. My last documentation rebuild cut inbound
                support tickets by <strong>80%</strong>.
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
                Outside client work, I contribute documentation to{" "}
                <a
                  href="https://github.com/helm/helm-www"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Helm
                </a>{" "}
                — the CNCF-graduated Kubernetes package manager — and to the
                CHAOSS open-source community. I hold a Kubernetes and Cloud
                Native Associate (KCNA) certification, write a{" "}
                <a href="/blog">technical blog</a> on docs strategy and
                developer experience, and I'm always exploring new ways to make
                technical knowledge more accessible.
              </p>
              <p>
                <strong>Currently open to</strong> Senior Documentation
                Engineer, Technical Writer, and Developer Experience roles —
                remote, full-time or contract. If you're looking to improve
                your documentation or create technical content that truly
                serves your users — <a href="/contact">let's talk</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}