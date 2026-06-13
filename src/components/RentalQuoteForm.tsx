import ContactForm from "@/components/ContactForm";
import { siteData } from "@/data/site";

type RentalQuoteFormProps = {
  rentalName: string;
};

export default function RentalQuoteForm({ rentalName }: RentalQuoteFormProps) {
  return (
    <div className="rental-quote-form" id={`quote-${rentalName}`}>
      <div className="quote-form-heading">
        <p>{siteData.rentalsPage.quoteForm.eyebrow}</p>
        <h3>{siteData.rentalsPage.quoteForm.title}</h3>
        <span>{siteData.rentalsPage.quoteForm.body}</span>
      </div>

      <ContactForm
        formType="rental"
        selectedRental={rentalName}
        buttonLabel="Request Quote"
      />
    </div>
  );
}