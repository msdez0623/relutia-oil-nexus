import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  // ################################
  // # EDIT COMPANY FEATURES HERE   #
  // ################################
  const features = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Industry Leadership",
      description: "Leading Demetheria's energy sector with cutting-edge technology and sustainable practices."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Workforce",
      description: "Over 15,000 skilled professionals dedicated to excellence in energy production."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Standards",
      description: "Committed to the highest industry standards and environmental responsibility."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Economic Impact",
      description: "Driving economic growth and energy independence for the nation of Demetheria."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Relutia Oil Company</span>
          </h2>
          {'Relutian Government Certified Oil Company'}
          {'Best Oil Barrel Value and Price on Market'}
          {'Satisfied Customer each day in Demetheria'}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since our founding in the industrial city of Relutia, we have transformed from 
            a fledgling energy producer into Demetheria's most influential corporate entity, 
            setting the standard for excellence in the petroleum industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-petroleum-blue/20 to-steel-blue/20 border-primary/20">
            <CardContent className="p-8">
              {/* ######################### */}
              {/* # EDIT MISSION HERE    # */}
              {/* ######################### */}
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To power Demetheria's future through innovative energy solutions, sustainable practices, 
                and unwavering commitment to excellence. We strive to maintain our position as the nation's 
                energy backbone while fostering economic growth and technological advancement.
              </p>
              {/* ################################## */}
              {/* # EDIT COMPANY STATISTICS HERE  # */}
              {/* ################################## */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1.2M</div>
                  <div className="text-muted-foreground">Barrels Daily</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">N/A</div>
                  <div className="text-muted-foreground">Employees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Reliability Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;