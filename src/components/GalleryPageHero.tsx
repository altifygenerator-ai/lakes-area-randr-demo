import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function GalleryPageHero() {
  const hero = siteData.galleryPage.hero;

  return (
    <section className="subpage-hero gallery-page-hero">
      <div className="subpage-hero-bg">
        <img src="/images/lakes-gallery-1.jpg" alt={hero.title} />
      </div>
      <div className="subpage-hero-overlay" />

      <div className="container subpage-hero-grid">
        <FadeIn className="subpage-hero-copy">
          <p className="hero-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.body}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#full-gallery">
              View Photos
            </a>
            <a className="btn btn-ghost" href="/rentals">
              View Rentals
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}