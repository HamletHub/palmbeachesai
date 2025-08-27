import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

const solutionsData = [
  {
    icon: Target,
    title: "Smart Process Automation",
    description: "Eliminate repetitive tasks and let your team focus on what matters most.",
    features: [
      "SMB's report average time savings of over 50% on tasks by using AI agents",
      "Free up employee time for strategic work - Teams report saving 30-40 minutes daily on repetitive tasks", 
      "Reduce support costs by 30–50% by automating routine tasks"
    ],
    realLifeSolution: "A multi-location accounting firm implemented an AI invoicing system that automatically extracts client data, matches payments, and flags exceptions—reducing manual work by 16% and eliminating invoice errors"
  },
  {
    icon: TrendingUp,
    title: "Better customer service without hiring more staff",
    description: "Simple chatbots answer common questions and schedule appointments instantly",
    features: [
      "Resolve 30–50% of common inquiries instantly with AI chatbots",
      "Automated appointment scheduling lets customers book services any time without staff involvement",
      "Boost customer satisfaction by 20–30% with faster, more accurate responses"
    ],
    realLifeSolution: "A boutique e-commerce store used an AI chatbot (ManyChat) to handle order tracking and product FAQs. Within three months, 40% of chat requests were fully automated, leading to a 15% jump in repeat purchases."
  },
  {
    icon: Users,
    title: "Data-Driven Decision Making",
    description: "Make informed choices based on real-time insights and analytics",
    features: [
      "Forecast demand to reduce excess inventory by 15% and stockouts by 10%",
      "Identify top-selling products and optimize pricing in real time",
      "Uncover new revenue opportunities from hidden customer patterns"
    ],
    realLifeSolution: "A local retailer deployed an AI demand-forecasting model that analyzed sales, seasonality, and promotions. Over six months, they cut overstock by 15% and stockouts by 10%, improving both cash flow and customer satisfaction."
  }
];

export function SolutionsCards() {
  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6 px-4 py-2 text-sm font-medium bg-accent text-accent-foreground">
            Our Solutions
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Three Ways Companies are Winning with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Simple AI that actually works: Practical strategies with proven track records and guaranteed ROI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutionsData.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Card key={solution.title} className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="space-y-2 text-left mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg text-left">
                    <p className="text-sm text-muted-foreground italic">
                      <strong className="text-accent font-medium">Real-world success:</strong> {solution.realLifeSolution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}