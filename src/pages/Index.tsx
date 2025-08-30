import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OperationsSection from "@/components/OperationsSection";
import NewsSection from "@/components/NewsSection";
import WorkplaceSection from "@/components/WorkplaceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <OperationsSection />
      <NewsSection />
      <WorkplaceSection />
      <Footer />
    </div>
  );
};

export default Index;
