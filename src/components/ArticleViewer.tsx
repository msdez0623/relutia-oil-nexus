import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Article } from "@/data/articles";

interface ArticleViewerProps {
  article: Article;
  onBack: () => void;
}

const ArticleViewer = ({ article, onBack }: ArticleViewerProps) => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-primary hover:text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Button>

        <Card className="bg-card border-border">
          <CardHeader className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-primary text-background">
                {article.category}
              </Badge>
              {article.featured && (
                <Badge variant="outline" className="border-energy-amber text-energy-amber">
                  Featured
                </Badge>
              )}
            </div>
            
            <CardTitle className="text-3xl md:text-4xl text-foreground leading-tight">
              {article.title}
            </CardTitle>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{article.date}</span>
              </div>
              {article.author && (
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{article.author}</span>
                </div>
              )}
            </div>
            
            {article.tags && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-primary/30 text-primary/80">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          
          <CardContent>
            <div 
              className="prose prose-lg max-w-none text-foreground
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-muted-foreground prose-ul:my-4
                prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-primary 
                prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground
                prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:my-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArticleViewer;