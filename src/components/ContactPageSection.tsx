import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { siteData } from "@/data/site";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function ContactPageSection() {
  return (
    <section className="section contact-page-section">
      <div className="container contact-page-grid">
        <FadeIn className="contact-info-card">
          <SectionHeading eyebrow="Get In Touch" title="Contact Information" />

          <div className="contact-info-list">
            <a href={`tel:${siteData.phone}`}>
              <FiPhone />
              <span>
                <strong>Phone</strong>
                {siteData.phone}
              </span>
            </a>

            <a href={`mailto:${siteData.email}`}>
              <FiMail />
              <span>
                <strong>Email</strong>
                {siteData.email}
              </span>
            </a>

            <div>
              <FiMapPin />
              <span>
                <strong>Address</strong>
                {siteData.address}
              </span>
            </div>
          </div>

          <div className="contact-note">
            <h3>Need a rental quote?</h3>
            <p>
              Use the rental form and include the rental you are interested in,
              the date needed, and how long you need it.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="contact-form-card">
          <div className="contact-form-heading">
            <p className="eyebrow">General Questions</p>
            <h2>Ask For More Info</h2>
            <p>
              Send a message about rentals, activities, hours, the putting
              course, Green Bean Coffee, The Caddyshack, or anything else on
              property.
            </p>
          </div>

          <ContactForm formType="contact" buttonLabel="Send Message" />
        </FadeIn>

        <FadeIn className="contact-form-card rental-contact-form-card">
          <div className="contact-form-heading">
            <p className="eyebrow">Rental Quote</p>
            <h2>Request a Rental Quote</h2>
            <p>
              Tell us what rental you are interested in and when you need it.
            </p>
          </div>

          <ContactForm formType="rental" buttonLabel="Request Quote" />
        </FadeIn>
      </div>
    </section>
  );
}