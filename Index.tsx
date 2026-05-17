import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DeveloperSection from "@/components/DeveloperSection";
import MediaSection from "@/components/MediaSection";
import ContentSection from "@/components/ContentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DeveloperSection />
      <MediaSection />
      <ContentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
