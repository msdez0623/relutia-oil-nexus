import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-refinery.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Relutia Oil Refinery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-energy-amber bg-clip-text text-transparent">
            Powering Demetheria's Future
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Welcome to the official workplace of Relutia Oil Company, 
            the nation's leading energy corporation driving innovation 
            and excellence in the petroleum industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-oil-gold to-energy-amber text-background font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Explore Operations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
            >
              Company Profile
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">50+</span>
              </div>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-6 h-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">12</span>
              </div>
              <p className="text-muted-foreground">Refinery Facilities</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-primary">85%</span>
              </div>
              <p className="text-muted-foreground">National Energy Supply</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;