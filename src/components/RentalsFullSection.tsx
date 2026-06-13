import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import RentalCard from "@/components/RentalCard";

export default function RentalsFullSection() {
  return (
    <section className="section rentals-full-section" id="rental-equipment">
      <div className="container">
        <FadeIn className="rentals-page-intro">
          <SectionHeading
            eyebrow={siteData.rentalsPage.intro.eyebrow}
            title={siteData.rentalsPage.intro.title}
            center
          />
          <p>{siteData.rentalsPage.intro.body}</p>
        </FadeIn>

        <FadeIn className="rental-category-strip">
          {siteData.rentalsPage.categories.map((category) => (
            <a key={category} href={`#${category.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`}>
              {category}
            </a>
          ))}
        </FadeIn>

        <div className="rental-full-grid">
          {siteData.rentalsPage.items.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      </div>
    </section>
  );
}