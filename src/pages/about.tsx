import React from "react";
import Layout from "@theme/Layout";

// ─── PAGE ────────────────────────────────────────────────────

export default function About(): React.JSX.Element {
  return (
    <Layout
      title="About"
      description="Faith Wachukwu — the path from DevOps engineering to documentation engineering, and how I work."
    >
      <main>
        <section className="page-header">
          <p className="section-label">About Me</p>
          <h1 className="page-title">
            The engineer who went looking for the missing docs
          </h1>
        </section>

        <section className="portfolio-section" style={{ paddingTop: 0 }}>
          <div className="about-content">
          <div className="about-text">
          <p>
            I didn't start out in documentation. I started in Cloud and DevOps engineering, containerizing applications, provisioning infrastructure with Terraform, and building CI/CD pipelines on AWS and GCP.
          </p>

          <p>
            That meant I spent a lot of time reading other people's documentation. Some of it got me unstuck in minutes. Some of it left me digging through GitHub issues, Stack Overflow, and source code because the important step was missing, the example no longer worked, or the answer just wasn't there.
          </p>

          <p>
            I started documenting what I learned so the next engineer wouldn't have to go through the same process. Eventually, I realized I enjoyed that part of the work more than I expected.
          </p>

          <h2>What I do now</h2>

          <p>
            I'm a documentation engineer and technical writer. I currently write for teams through Literally, an AEO & Content Marketing agency for Tech Companies. I've written for developer publications with more than 20+ published articles so far.
          </p>

          <p>
            Before that, I owned developer documentation at Clouddley. I rebuilt the docs from the ground up and moved them to a docs-as-code workflow, with changes reviewed in Git and published automatically. Support tickets dropped by about 80%.
          </p>

          <h2>How I approach documentation</h2>

          <p>
            <strong>Start with the questions people are already asking.</strong> Support tickets, search queries, and places where users get stuck tell me where the documentation needs work. I'd rather fix a real problem than publish another page nobody needs.
          </p>

          <p>
            <strong>Treat documentation like a product.</strong> I use version control, peer review, CI checks, and automated deployments because documentation needs the same discipline as the software it describes. When the product changes, the docs should change with it.
          </p>

          <p>
            <strong>Write for the person in front of me.</strong> That might be an experienced engineer looking for one configuration flag, someone setting up the product for the first time, or an AI assistant retrieving an answer on a user's behalf. Good documentation should work for all of them.
          </p>

          <h2>Beyond the day job</h2>

          <p>
            I contribute to open source, mostly through documentation. With Helm, I've worked on the plugins v3 to v4 migration guide, Helm 4 release history, and Go SDK documentation. I've also contributed to Kubernetes SIGs and CHAOSS Africa previously.
          </p>

          <p>
            I build small tools when I see a repetitive problem worth solving. One example is a CLI that turns Git history into a changelog.
          </p>
              <p>
                I love reading books and the color blue. I also love writing, and I write about documentation, engineering, and the intersection of the two on my <a href="/blog">blog</a>.
              </p>
            <p>
              If you're looking for someone to own your documentation,{" "}
              <a href="/contact">let's talk</a>.
            </p>
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

      </main>
    </Layout>
  );
}
