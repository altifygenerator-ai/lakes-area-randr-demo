import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryPageHero from "@/components/GalleryPageHero";
import FullGallery from "@/components/FullGallery";
import FinalCTA from "@/components/FinalCTA";

export default function GalleryPage() {
  return (
    <main className="site-shell">
      <Header />
      <GalleryPageHero />
      <FullGallery />
      <FinalCTA />
      <Footer />
    </main>
  );
}