import type { FullRentalItem } from "@/types/site";
import FadeIn from "@/components/FadeIn";
import RentalQuoteForm from "@/components/RentalQuoteForm";
import { FiCheckCircle, FiDollarSign } from "react-icons/fi";

type RentalCardProps = {
  rental: FullRentalItem;
};

export default function RentalCard({ rental }: RentalCardProps) {
  return (
    <FadeIn className="rental-full-card">
      <div className="rental-anchor" id={rental.id} />

      <div className="rental-full-image">
        <img src={rental.image} alt={rental.imageAlt} />
        <span>{rental.category}</span>
      </div>

      <div className="rental-full-content">
        <div className="rental-full-main">
          <p className="eyebrow">{rental.category}</p>
          <h2>{rental.name}</h2>
          <p>{rental.description}</p>

          {rental.rates.length > 0 ? (
            <div className="rental-rates">
              <h3>
                <FiDollarSign />
                Rates
              </h3>
              {rental.rates.map((rate) => (
                <div key={`${rental.id}-${rate.label}`}>
                  <span>{rate.label}</span>
                  <strong>{rate.price}</strong>
                </div>
              ))}
            </div>
          ) : null}

          {rental.details.length > 0 ? (
            <div className="rental-details">
              <h3>
                <FiCheckCircle />
                Details
              </h3>
              <ul>
                {rental.details.map((detail) => (
                  <li key={detail}>
                    <FiCheckCircle />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {rental.notes && rental.notes.length > 0 ? (
            <div className="rental-notes">
              {rental.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          ) : null}
        </div>

        <RentalQuoteForm rentalName={rental.name} />
      </div>
    </FadeIn>
  );
}