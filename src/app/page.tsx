import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectCargoSection from "@/components/sections/ProjectCargoSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import GlobalFootprintSection from "@/components/sections/GlobalFootprintSection";
import ContactSection from "@/components/sections/ContactSection";
import TradeFinanceSection from "@/components/sections/TradeFinanceSection";
import CorridorSection from "@/components/sections/CorridorSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <TradeFinanceSection />
        <ProjectCargoSection />
        <WhyChooseUsSection />
        <CorridorSection />
        <IndustriesSection />
        <GlobalFootprintSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
