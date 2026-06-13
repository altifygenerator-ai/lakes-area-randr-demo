// src/components/ReviewsSection.tsx

import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function ReviewsSection() {
  return (
    <section className="section reviews-section">
      <div className="container reviews-grid">
        <FadeIn>
          <SectionHeading
            eyebrow={siteData.reviews.eyebrow}
            title={siteData.reviews.title}
          />
        </FadeIn>

        <div className="review-list">
          {siteData.reviews.items.map((review) => (
            <FadeIn className="review-card" key={review.name}>
              <p>“{review.text}”</p>
              <div>
                <strong>{review.name}</strong>
                <span>{review.date}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}