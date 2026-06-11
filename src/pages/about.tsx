import React from "react";
import Layout from "@theme/Layout";



// ─── PAGE ────────────────────────────────────────────────────

export default function About(): React.JSX.Element {
  return (
    <Layout title="About" description="About Faith Wachukwu">
      <main>
        {/* Hero-style intro */}
        <section className="page-header">
          <p className="section-label">About Me</p>
          <h1 className="page-title">
            Creating documentation for humans and AI
          </h1>
        </section>

        {/* Bio */}
        <section className="portfolio-section" style={{ paddingTop: 0 }}>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Documentation Engineer and Technical Writer who turns complex 
                technical concepts into clear, actionable content.
              </p>
              <p>
                I build scalable documentation systems using docs-as-code tools like 
                Docusaurus, GitBook, and Mintlify —with version control, AI automated quality 
                checks, and CI/CD pipelines built in. Every doc I write goes through the same 
                rigorous process as production code: peer-reviewed, versioned, and continuously deployed.
              </p>
              <p>
                I started as a DevOps engineer working hands-on with AWS, GCP, Docker, Kubernetes, and Terraform. 
                That background taught me what developers actually need from documentation, because I've been the 
                one searching for answers that weren't there. 
              </p>
              <p>
                Today, I partner with engineering teams to build API docs, developer guides, tutorials, and to set 
                up AI-assisted workflows that have cut support tickets by 80% and help users ship faster. 
                I also explore building tooling for documentation systems.
              </p>
              <p>
                Outside work, I contribute to the open-source, write technical articles on developer 
                platforms, and read books on writing, tech and personal development. I'm always exploring new ways 
                to make technical knowledge more accessible.
              </p>
              <p>
                If you're looking to improve your documentation or create technical content that truly serves your users —{" "}
                <a href="/contact">let's talk</a>.
              </p>
            </div>
            <div className="hero-image-wrapper">
              <img className="hero-image" src="/img/profile.jpg" alt="Faith Wachukwu" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}