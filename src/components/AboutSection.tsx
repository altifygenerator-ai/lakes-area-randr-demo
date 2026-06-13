import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section className="section section-light" id="activities">
      <div className="container about-grid">
        <FadeIn className="about-photo">
          <img
            src="/images/lakes-about.jpg"
            alt="Lakes Area R&R outdoor recreation area"
          />
        </FadeIn>

        <FadeIn className="about-copy">
          <SectionHeading
            eyebrow={siteData.about.eyebrow}
            title={siteData.about.title}
          />

          {siteData.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}