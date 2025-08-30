import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Truck, Zap, Shield, ArrowRight } from "lucide-react";

const OperationsSection = () => {
  // #########################################
  // # EDIT OPERATIONS & SERVICES HERE     #
  // #########################################
  const operations = [
    {
      icon: <Factory className="w-12 h-12 text-primary" />,
      title: "Refining Operations",
      description: "State-of-the-art refining facilities processing crude oil into premium petroleum products.",
      details: "12 major refineries across Demetheria with advanced catalytic cracking technology."
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Distribution Network",
      description: "Comprehensive logistics network ensuring reliable energy supply nationwide.",
      details: "2,500+ service stations and strategic partnerships with major distributors."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Energy Innovation",
      description: "Research and development in renewable energy and clean petroleum technologies.",
      details: "€2.1B invested in sustainable energy initiatives and emission reduction."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Safety & Environment",
      description: "Industry-leading safety protocols and environmental protection measures.",
      details: "Zero major incidents for 8 consecutive years with 99.7% safety compliance rate."
    }
    // #############################################
    // # ADD MORE OPERATIONS IN THE SAME FORMAT: #
    // # {                                       #
    // #   icon: <IconName className="w-12 h-12 text-primary" />, #
    // #   title: "Operation Title",             #
    // #   description: "Description...",        #
    // #   details: "Additional details..."      #
    // # }                                       #
    // #############################################
  ];

  return (
    <section id="operations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From exploration to distribution, discover how Relutia Oil Company 
            maintains its position as Demetheria's premier energy corporation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {operations.map((operation, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {operation.icon}
                  </div>
                  <CardTitle className="text-2xl text-foreground">{operation.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {operation.description}
                </p>
                <p className="text-sm text-muted-foreground mb-6 italic">
                  {operation.details}
                </p>
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-energy-amber/10 border-primary/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Operational Excellence</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our integrated approach to energy production ensures maximum efficiency, 
                safety, and environmental responsibility across all operations.
              </p>
              <Button className="bg-gradient-to-r from-oil-gold to-energy-amber text-background font-semibold">
                View Full Operations Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;