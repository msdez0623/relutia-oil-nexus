// ################################################################
// #                    ARTICLES DATABASE                        #
// # This file contains all your articles and content            #
// # Simply add new articles to the arrays below                 #
// ################################################################

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  category: string;
  featured: boolean;
  author?: string;
  tags?: string[];
}

// #################################################
// # ADD YOUR FEATURED ARTICLES HERE             #
// #################################################
export const featuredArticles: Article[] = [
  {
    id: "expansion-2024",
    title: "ROC Announces Major Expansion of Relutia Central Refinery",
    content: `
      <h2>Historic Investment in Demetheria's Energy Future</h2>
      
      <p>RELUTIA, DEMETHERIA - In a groundbreaking announcement that promises to reshape the nation's energy landscape, Relutia Oil Company (ROC) today unveiled its ambitious €1.8 billion expansion project for the Central Relutia Refinery complex.</p>
      
      <h3>Project Overview</h3>
      <p>The massive expansion will increase the refinery's processing capacity by 40%, bringing total daily output to over 2 million barrels. This represents the largest single investment in Demetheria's energy infrastructure in over two decades.</p>
      
      <h3>Economic Impact</h3>
      <ul>
        <li>Creation of 2,000 permanent jobs</li>
        <li>Additional 5,000 construction jobs during the 3-year build phase</li>
        <li>Estimated €500 million annual boost to the regional economy</li>
        <li>Enhanced energy security for the entire nation</li>
      </ul>
      
      <h3>Environmental Innovation</h3>
      <p>The expansion incorporates cutting-edge environmental technology, including advanced emission control systems and renewable energy integration, positioning ROC as a leader in sustainable energy production.</p>
      
      <blockquote>
        "This expansion represents our unwavering commitment to Demetheria's energy independence and economic prosperity. We're not just building infrastructure; we're building the future." - CEO Alexandra Dimitrov
      </blockquote>
      
      <p>Construction is scheduled to begin in Q2 2024, with full operational capacity expected by 2027.</p>
    `,
    excerpt: "The company unveils plans for a €1.8 billion expansion project that will increase refining capacity by 40% and create 2,000 new jobs.",
    date: "March 15, 2024",
    category: "Expansion",
    featured: true,
    author: "Corporate Communications",
    tags: ["expansion", "investment", "jobs", "refinery"]
  }
];

// #################################################
// # ADD YOUR REGULAR ARTICLES HERE              #
// #################################################
export const regularArticles: Article[] = [
  {
    id: "clean-tech-breakthrough",
    title: "Breakthrough in Clean Petroleum Technology",
    content: `
      <h2>Revolutionary Catalytic Process Reduces Emissions</h2>
      
      <p>ROC's research division has achieved a major breakthrough in clean petroleum technology with the development of new catalytic processes that reduce emissions by 35% while maintaining production efficiency.</p>
      
      <h3>Technical Innovation</h3>
      <p>The new catalytic system, developed over three years of intensive research, utilizes advanced molecular engineering to optimize the refining process at the atomic level.</p>
      
      <h3>Environmental Benefits</h3>
      <ul>
        <li>35% reduction in greenhouse gas emissions</li>
        <li>Decreased sulfur content in refined products</li>
        <li>Improved air quality in surrounding communities</li>
        <li>Enhanced water treatment efficiency</li>
      </ul>
      
      <p>This breakthrough positions ROC at the forefront of sustainable energy production and demonstrates our commitment to environmental stewardship.</p>
    `,
    excerpt: "Our research division successfully develops new catalytic processes that reduce emissions by 35% while maintaining production efficiency.",
    date: "March 10, 2024",
    category: "Innovation",
    featured: false,
    author: "Dr. Marcus Petrov, Research Director",
    tags: ["technology", "environment", "innovation", "sustainability"]
  },
  {
    id: "demetheria-partnership",
    title: "Partnership with Demetheria National Energy Council",
    content: `
      <h2>Strategic Alliance for Energy Independence</h2>
      
      <p>ROC has signed a groundbreaking strategic partnership with the Demetheria National Energy Council to lead the nation's energy independence initiative over the next decade.</p>
      
      <h3>Partnership Objectives</h3>
      <ul>
        <li>Achieve 95% energy independence by 2034</li>
        <li>Develop strategic petroleum reserves</li>
        <li>Modernize national energy infrastructure</li>
        <li>Enhance emergency response capabilities</li>
      </ul>
      
      <h3>National Security Benefits</h3>
      <p>This partnership strengthens Demetheria's energy security and reduces dependence on foreign energy sources, ensuring stable supply for future generations.</p>
    `,
    excerpt: "ROC signs strategic partnership to lead the nation's energy independence initiative over the next decade.",
    date: "March 5, 2024",
    category: "Partnership",
    featured: false,
    author: "Government Relations Department",
    tags: ["partnership", "government", "energy security", "independence"]
  }
];

// #################################################
// # COMBINE ALL ARTICLES FOR EASY ACCESS        #
// #################################################
export const allArticles: Article[] = [...featuredArticles, ...regularArticles];

// #################################################
// # HELPER FUNCTIONS                             #
// #################################################
export const getArticleById = (id: string): Article | undefined => {
  return allArticles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return allArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): Article[] => {
  return allArticles.filter(article => article.featured);
};