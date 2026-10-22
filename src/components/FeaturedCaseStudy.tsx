import React from "react";

export default function FeaturedCaseStudy(): React.JSX.Element {
  return (
    <section className="portfolio-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <a className="featured-case-study" href="/case-studies/clouddley">
        <span className="fcs-tag">Featured case study</span>
        <h3>Cutting support tickets ~80% with a Diátaxis docs rebuild</h3>
        <p>
          How restructuring Clouddley's documentation around user intent — and
          closing the highest-volume gaps — measurably reduced inbound support
          load, and how the number was measured.
        </p>
        <span className="fcs-link">Read the case study →</span>
      </a>
    </section>
  );
}
