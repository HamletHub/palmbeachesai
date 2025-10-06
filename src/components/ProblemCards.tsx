import { Card, CardContent } from '@/components/ui/card';
import { XCircle } from 'lucide-react';

interface ProblemCard {
  title: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    title: "Solving the wrong problem",
    description: "Automating processes that don't save money or add value"
  },
  {
    title: "Poor customer experience",
    description: "Using AI for customer service with incomplete data, frustrating users instead of helping them"
  },
  {
    title: "Bad data quality",
    description: "AI decisions are only as good as the data they're based on—garbage in, garbage out"
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
