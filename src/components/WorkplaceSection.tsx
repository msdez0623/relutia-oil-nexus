import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, FileText, Globe, Shield, Briefcase } from "lucide-react";

const WorkplaceSection = () => {
  // #############################################
  // # EDIT WORKPLACE/ROLEPLAY FEATURES HERE   #
  // #############################################
  const workplaceFeatures = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Roleplay Community",
      description: "Join the vibrant Demetheria Discord community and participate in corporate roleplay scenarios."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Interactive Discussions",
      description: "Engage with other players in corporate meetings, strategic planning, and industry discussions."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Company Database",
      description: "Access comprehensive company profiles, operational data, and internal documentation."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "National Impact",
      description: "Explore ROC's influence on Demetheria's political and economic systems through roleplay."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Executive Positions",
      description: "Apply for leadership roles and shape the future of ROC through strategic decision-making."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Career Development",
      description: "Progress through the corporate hierarchy from entry-level to C-suite positions."
    }
  ];

  return (
    <section id="workplace" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ROC <span className="text-primary">Workplace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step into the corporate world of Relutia Oil Company. Join our immersive 
            roleplay environment and experience the complexities of running Demetheria's 
            most influential energy corporation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workplaceFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-petroleum-blue/20 to-steel-blue/20 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Join the ROC Team</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ready to shape Demetheria's energy future? Connect with the Demetheria Discord server 
                and start your journey in the Relutia Oil Company workplace. Whether you're interested 
                in operations, management, or strategic planning, there's a place for you in our corporate structure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground">Department Divisions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Active Community</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-oil-gold to-energy-amber text-background font-semibold"
                >
                  Join Discord Server
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-background"
                >
                  Learn About Demetheria
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkplaceSection;