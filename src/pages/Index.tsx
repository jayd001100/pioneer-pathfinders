import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import AboutUsSection from "@/components/AboutUsSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <AboutUsSection />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
