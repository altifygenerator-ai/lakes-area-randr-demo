import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";
import { FiMail, FiPhone } from "react-icons/fi";

export default function ContactPageHero() {
  return (
    <section className="contact-page-hero">
      <div className="contact-page-hero-bg">
        <img src="/images/lakes-gallery-9.jpg" alt="Lakes Area R&R" />
      </div>
      <div className="contact-page-hero-overlay" />

      <div className="container contact-page-hero-content">
        <FadeIn>
          <p className="hero-kicker">Contact Lakes Area R&R</p>
          <h1>Plan Your Visit</h1>
          <p>
            Have questions about rentals, activities, the putting course, the
            bottle shop, coffee, food, or a visit to Crystal Lake? Reach out and
            Lakes Area R&R will help you get pointed in the right direction.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${siteData.phone}`}>
              <FiPhone />
              Call Today
            </a>

            <a className="btn btn-ghost" href={`mailto:${siteData.email}`}>
              <FiMail />
              Email Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}