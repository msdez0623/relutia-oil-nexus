import { Button } from "@/components/ui/button";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import rocLogo from "@/assets/roc-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About ROC", href: "#about" },
      { label: "Leadership", href: "#leadership" },
      { label: "Careers", href: "#careers" },
      { label: "Sustainability", href: "#sustainability" }
    ],
    Operations: [
      { label: "Refining", href: "#refining" },
      { label: "Distribution", href: "#distribution" },
      { label: "Exploration", href: "#exploration" },
      { label: "Research & Development", href: "#research" }
    ],
    Community: [
      { label: "Demetheria Wiki", href: "https://demetheria.fandom.com" },
      { label: "Discord Server", href: "#discord" },
      { label: "Roleplay Guide", href: "#roleplay" },
      { label: "News & Updates", href: "#news" }
    ]
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={rocLogo} alt="ROC Logo" className="w-8 h-8" />
              <div className="text-xl font-bold text-foreground">
                <span className="text-primary">Relutia</span> Oil Company
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Powering Demetheria's future through innovative energy solutions, 
              sustainable practices, and unwavering commitment to excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                <span>Relutia Industrial District, Demetheria</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <span>+1 (555) ROC-CORP</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span>info@relutia-oil.dm</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on ROC operations, industry insights, and roleplay events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-to-r from-oil-gold to-energy-amber text-background font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Relutia Oil Company. All rights reserved. Part of the Demetheria Universe.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a 
                href="https://demetheria.fandom.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Globe className="w-4 h-4 mr-2" />
                Demetheria Wiki
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;