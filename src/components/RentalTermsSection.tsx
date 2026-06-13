import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function RentalTermsSection() {
  return (
    <section className="section section-light rental-terms-section">
      <div className="container terms-grid">
        <FadeIn>
          <SectionHeading
            eyebrow="Reservation Terms"
            title="Rental information"
          />
        </FadeIn>

        <FadeIn className="terms-card">
          <ul>
            {siteData.rentalsPage.reservationTerms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}