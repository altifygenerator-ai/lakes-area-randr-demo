import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function FullGallery() {
  return (
    <section className="section section-light full-gallery-section" id="full-gallery">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Gallery"
            title="Photos from Lakes Area R&R"
            center
          />
        </FadeIn>

        <div className="full-gallery-grid">
          {siteData.galleryPage.images.map((image, index) => (
            <FadeIn
              className={`full-gallery-item ${
                index === 0 || index === 7 ? "wide" : ""
              }`}
              key={`${image.src}-${index}`}
            >
              <img src={image.src} alt={image.alt} />
              {image.category ? <span>{image.category}</span> : null}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}