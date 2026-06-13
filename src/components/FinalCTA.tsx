import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        <img src="/images/lakes-final.jpg" alt="Lakes Area R&R Crystal Lake" />
      </div>
      <div className="final-cta-overlay" />

      <FadeIn className="container final-cta-content">
        <p className="eyebrow">{siteData.finalCta.eyebrow}</p>
        <h2>{siteData.finalCta.title}</h2>
        <p>{siteData.finalCta.body}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={`tel:${siteData.phone}`}>
            {siteData.finalCta.primaryCta}
          </a>
          <a className="btn btn-ghost" href="/rentals">
            {siteData.finalCta.secondaryCta}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}