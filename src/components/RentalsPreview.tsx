import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function RentalsPreview() {
  return (
    <section className="section rentals-section" id="rentals">
      <div className="container">
        <FadeIn className="rentals-top">
          <SectionHeading
            eyebrow={siteData.rentals.eyebrow}
            title={siteData.rentals.title}
          />
          <div>
            <p>{siteData.rentals.intro}</p>
            <a className="btn btn-rental-main" href={siteData.rentals.href}>
              {siteData.rentals.ctaLabel}
            </a>
          </div>
        </FadeIn>

        <div className="rentals-grid rentals-preview-grid">
          {siteData.rentals.items.map((item) => (
            <FadeIn className="rental-preview-card" key={item.name}>
              {item.image ? (
                <div className="rental-preview-image">
                  <img src={item.image} alt={item.imageAlt || item.name} />
                </div>
              ) : null}

              <div className="rental-preview-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.href}>View Rental</a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}