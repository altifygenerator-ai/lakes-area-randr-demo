import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RentalsPageHero from "@/components/RentalsPageHero";
import RentalsFullSection from "@/components/RentalsFullSection";
import RentalActivitiesSection from "@/components/RentalActivitiesSection";
import RentalTermsSection from "@/components/RentalTermsSection";
import FinalCTA from "@/components/FinalCTA";

export default function RentalsPage() {
  return (
    <main className="site-shell">
      <Header />
      <RentalsPageHero />
      <RentalsFullSection />
      <RentalActivitiesSection />
      <RentalTermsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}