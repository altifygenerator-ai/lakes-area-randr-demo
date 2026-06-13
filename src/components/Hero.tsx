// src/components/Hero.tsx

import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-slider" aria-hidden="true">
        {siteData.hero.slides.map((slide) => (
          <div className="hero-slide" key={slide.src}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="container hero-grid">
        <FadeIn>
          <p className="hero-kicker">{siteData.hero.kicker}</p>
          <h1>{siteData.hero.title}</h1>
          <p className="hero-body">{siteData.hero.body}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#visit">
              {siteData.hero.primaryCta}
            </a>
            <a className="btn btn-ghost" href="#activities">
              {siteData.hero.secondaryCta}
            </a>
          </div>
        </FadeIn>

        <FadeIn className="hero-card">
          <h2>Something for everyone</h2>
          <div className="hero-card-list">
            {siteData.trust.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}