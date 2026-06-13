import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageHero from "@/components/ContactPageHero";
import ContactPageSection from "@/components/ContactPageSection";

export default function ContactPage() {
  return (
    <main className="site-shell">
      <Header />
      <ContactPageHero />
      <ContactPageSection />
      <Footer />
    </main>
  );
}