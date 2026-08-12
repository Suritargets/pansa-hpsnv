import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HelpSection from "@/components/HelpSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TrainingSection from "@/components/TrainingSection";
import BannerSection from "@/components/BannerSection";
import GallerySection from "@/components/GallerySection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <HelpSection />
        <AboutSection />
        <WhyChooseUs />
        <ServicesSection />
        <StatsSection />
        <TrainingSection />
        <BannerSection />
        <GallerySection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
