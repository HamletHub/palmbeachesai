import { Card, CardContent } from '@/components/ui/card';
import { XCircle } from 'lucide-react';

interface ProblemCard {
  title: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    title: "Lack of Strategic Alignment",
    description: "AI initiatives launched without clear business objectives or measurable outcomes, leading to solutions that don't address real problems."
  },
  {
    title: "Poor Data Foundation",
    description: "Insufficient, low-quality, or improperly prepared data that makes AI models unreliable and business insights meaningless."
  },
  {
    title: "Implementation Gaps",
    description: "Failure to integrate AI solutions into existing workflows and lack of change management for successful adoption."
  }
];

export function ProblemCards() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Why Most AI Projects Fail
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the root causes is the first step to guaranteed success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problemCards.map((card, index) => (
            <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <XCircle className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
