import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

const solutionsData = [
  {
    icon: Target,
    title: "Strategic AI Alignment",
    description: "We begin every project by mapping AI capabilities to your specific business objectives, ensuring measurable impact from day one.",
    features: [
      "Business case development",
      "ROI framework design", 
      "Success metrics definition"
    ]
  },
  {
    icon: TrendingUp,
    title: "Data Excellence Program",
    description: "Our comprehensive data audit and preparation process ensures your AI models are built on a foundation of high-quality, relevant data.",
    features: [
      "Data quality assessment",
      "Pipeline optimization",
      "Governance framework"
    ]
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description: "We ensure smooth deployment and adoption through proven change management and integration methodologies that minimize disruption.",
    features: [
      "Workflow integration",
      "Team training programs",
      "Ongoing support"
    ]
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
            Three Solutions That Guarantee ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology addresses each failure point with strategic precision
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => {
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
                  <div className="space-y-2 text-left">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
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