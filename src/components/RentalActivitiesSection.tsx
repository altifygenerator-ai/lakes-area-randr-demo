import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function RentalActivitiesSection() {
  const activities = siteData.rentalsPage.activities;

  return (
    <section className="section rental-activities-section">
      <div className="container">
        <FadeIn className="rentals-page-intro">
          <SectionHeading
            eyebrow={activities.eyebrow}
            title={activities.title}
            center
          />
          <p>{activities.intro}</p>
        </FadeIn>

        <div className="activity-grid">
          {activities.items.map((item) => (
            <FadeIn className="activity-card" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}