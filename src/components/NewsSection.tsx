import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      title: "ROC Announces Major Expansion of Relutia Central Refinery",
      excerpt: "The company unveils plans for a €1.8 billion expansion project that will increase refining capacity by 40% and create 2,000 new jobs.",
      date: "March 15, 2024",
      category: "Expansion",
      featured: true
    },
    {
      title: "Breakthrough in Clean Petroleum Technology",
      excerpt: "Our research division successfully develops new catalytic processes that reduce emissions by 35% while maintaining production efficiency.",
      date: "March 10, 2024",
      category: "Innovation",
      featured: false
    },
    {
      title: "Partnership with Demetheria National Energy Council",
      excerpt: "ROC signs strategic partnership to lead the nation's energy independence initiative over the next decade.",
      date: "March 5, 2024",
      category: "Partnership",
      featured: false
    },
    {
      title: "Q4 Financial Results Exceed Expectations",
      excerpt: "Record-breaking quarterly results demonstrate ROC's continued dominance in the energy sector with 18% growth.",
      date: "February 28, 2024",
      category: "Financial",
      featured: false
    }
  ];

  return (
    <section id="news" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest <span className="text-primary">News & Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed about ROC's latest developments, industry insights, 
            and contributions to Demetheria's energy landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-r from-petroleum-blue/10 to-steel-blue/10 border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary text-background">Featured</Badge>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{newsItems[0].date}</span>
                  </div>
                </div>
                <CardTitle className="text-3xl text-foreground leading-tight">
                  {newsItems[0].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {newsItems[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary text-primary">
                    {newsItems[0].category}
                  </Badge>
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 font-semibold">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regular Articles */}
          {newsItems.slice(1).map((item, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            View All News & Reports
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;