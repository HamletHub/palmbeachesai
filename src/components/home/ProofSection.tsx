import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, MessageSquare, Clock, Package, TrendingUp } from 'lucide-react';

export function ProofSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Industry Proof: AI Delivers Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Independent research shows consistent ROI across AI implementations in business operations.
          </p>
        </div>

        <div className="space-y-8">
          {/* Proof Item 1: Cost Reduction */}
          <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">Cost Reduction</h3>
                  <div className="text-2xl font-bold text-accent mb-2">30% drop in support costs via automation</div>
                  <p className="text-muted-foreground mb-4">
                    Companies implementing AI-powered support automation see significant cost reductions while improving response times and customer satisfaction.
                  </p>
                  <Badge variant="outline" className="text-muted-foreground border-muted">
                    Source: Desk365
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proof Item 2: Inquiry Resolution */}
          <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">Inquiry Resolution</h3>
                  <div className="text-2xl font-bold text-accent mb-2">Up to 80% of queries handled by AI chatbots</div>
                  <p className="text-muted-foreground mb-4">
                    Advanced AI chatbots are now capable of resolving the vast majority of customer inquiries without human intervention, freeing up staff for complex tasks.
                  </p>
                  <Badge variant="outline" className="text-muted-foreground border-muted">
                    Source: Gartner Prediction
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proof Item 3: Time Savings */}
          <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">Time Savings</h3>
                  <div className="text-2xl font-bold text-accent mb-2">Over 92% faster turnaround for SMB tasks</div>
                  <p className="text-muted-foreground mb-4">
                    Small and medium businesses implementing AI automation see dramatic improvements in task completion times, enabling faster business operations.
                  </p>
                  <Badge variant="outline" className="text-muted-foreground border-muted">
                    Source: Industry Report
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proof Item 4: Inventory Optimization */}
          <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">Inventory Optimization</h3>
                  <div className="text-2xl font-bold text-accent mb-2">15% reduction in inventory costs</div>
                  <p className="text-muted-foreground mb-4">
                    AI-powered demand forecasting helps businesses optimize inventory levels, reducing carrying costs while maintaining service levels.
                  </p>
                  <Badge variant="outline" className="text-muted-foreground border-muted">
                    Source: Industry Analysis
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proof Item 5: Revenue Growth */}
          <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">Revenue Growth</h3>
                  <div className="text-2xl font-bold text-accent mb-2">10-25% revenue increase through AI insights</div>
                  <p className="text-muted-foreground mb-4">
                    AI analytics uncover hidden customer behavior patterns and market opportunities that drive significant revenue growth for businesses.
                  </p>
                  <Badge variant="outline" className="text-muted-foreground border-muted">
                    Source: McKinsey Research
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
