import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function RentalsPageHero() {
  const hero = siteData.rentalsPage.hero;

  return (
    <section className="subpage-hero rentals-page-hero">
      <div className="subpage-hero-bg">
        <img src={hero.image} alt={hero.imageAlt} />
      </div>
      <div className="subpage-hero-overlay" />

      <div className="container subpage-hero-grid">
        <FadeIn className="subpage-hero-copy">
          <p className="hero-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.body}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact">
              {hero.secondaryCta}
            </a>
            <a className="btn btn-ghost" href="#rental-equipment">
              {hero.primaryCta}
            </a>
          </div>
        </FadeIn>

        <FadeIn className="subpage-hero-card">
          <h2>Rental Equipment</h2>
          <div>
            {siteData.rentalsPage.categories.slice(0, 6).map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}