// src/components/VisitSection.tsx

import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function VisitSection() {
  return (
    <section className="section section-light visit-section" id="visit">
      <div className="container visit-grid">
        <FadeIn className="visit-copy">
          <SectionHeading
            eyebrow={siteData.visit.eyebrow}
            title={siteData.visit.title}
          />
          <p>{siteData.visit.body}</p>

          <div className="visit-actions">
            <a className="btn btn-primary-dark" href={`tel:${siteData.phone}`}>
              Call Today
            </a>
            <a className="btn btn-outline-dark" href={`mailto:${siteData.email}`}>
              Email Us
            </a>
          </div>
        </FadeIn>

        <FadeIn className="visit-card">
          {siteData.visit.details.map((detail) => (
            <div key={detail.title}>
              <span>{detail.title}</span>
              <strong>{detail.text}</strong>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}