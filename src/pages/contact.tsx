import React, { useState } from "react";
import Layout from "@theme/Layout";

// ─── PAGE ────────────────────────────────────────────────────

export default function Contact(): React.JSX.Element {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwpblqjg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout title="Contact" description="Get in touch with Faith Wachukwu">
      <main>
        <section className="page-header">
          <p className="section-label">Contact</p>
          <h1 className="page-title">Let's work together</h1>
          <p className="page-subtitle">
            Need documentation that actually helps your users? I'd love to hear
            about your project.
          </p>
        </section>

        <section className="portfolio-section contact-page" style={{ paddingTop: 0 }}>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Other ways to reach me
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                Whether it's API docs, developer guides, or a full docs-as-code
                setup — I'm available for freelance projects and full-time roles.
              </p>
              <div className="contact-direct-links">
                <a
                  href="https://www.linkedin.com/in/faith-kovi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-direct-link"
                >
                  <span className="contact-link-icon">💼</span>
                  <div>
                    <strong>LinkedIn</strong>
                    <span>Connect professionally</span>
                  </div>
                </a>
                <a
                  href="https://github.com/FaithKovi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-direct-link"
                >
                  <span className="contact-link-icon">🐙</span>
                  <div>
                    <strong>GitHub</strong>
                    <span>See my code & projects</span>
                  </div>
                </a>
                <a
                  href="mailto:faithkovi@gmail.com"
                  className="contact-direct-link"
                >
                  <span className="contact-link-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <span>faithkovi@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {status === "success" ? (
                <div className="form-success">
                  <span className="form-success-icon">✅</span>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    className="tab-btn active"
                    onClick={() => setStatus("idle")}
                    style={{ marginTop: "1rem" }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <div className="contact-form-card">
                  <h3>Send a message</h3>
                  <p className="form-subtitle">
                    Fill out the form and I'll respond within 24–48 hours.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project, timeline, and what you're looking for..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="form-submit-btn"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    {status === "error" && (
                      <p className="form-error">
                        Something went wrong. Please try again or email me
                        directly.
                      </p>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}