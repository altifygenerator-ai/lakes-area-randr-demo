import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function GallerySection() {
  return (
    <section className="section section-light gallery-section">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow={siteData.gallery.eyebrow}
            title={siteData.gallery.title}
            center
          />
        </FadeIn>

        <div className="gallery-grid">
          {siteData.gallery.images.map((image, index) => (
            <FadeIn
              className={`gallery-item ${index === 0 ? "large" : ""}`}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} />
              {image.category ? <span>{image.category}</span> : null}
            </FadeIn>
          ))}
        </div>

        <FadeIn className="gallery-preview-action">
          <a className="btn btn-primary-dark" href={siteData.gallery.href}>
            {siteData.gallery.ctaLabel}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}