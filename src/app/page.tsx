// src/app/page.tsx

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeatureSections from "@/components/FeatureSections";
import RentalsPreview from "@/components/RentalsPreview";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import VisitSection from "@/components/VisitSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import GreenBeanSection from "@/components/GreenBeanSection";
export default function Home() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <AboutSection />
      <FeatureSections />
<GreenBeanSection />
<RentalsPreview />
      <GallerySection />
      <ReviewsSection />
      <VisitSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}