import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function FeatureSections() {
  return (
    <section className="section feature-section">
      <div className="container feature-grid">
        {siteData.features.map((feature) => (
          <FadeIn className="feature-card" key={feature.title}>
            <div className="feature-image">
              <img src={feature.image} alt={feature.imageAlt} />
            </div>

            <div className="feature-content">
              <p className="eyebrow">{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <a className="btn btn-outline-dark" href={feature.href}>
                {feature.ctaLabel}
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}