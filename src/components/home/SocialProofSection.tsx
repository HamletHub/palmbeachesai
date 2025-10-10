import { Card, CardContent } from '@/components/ui/card';
import { Clock, MessageSquare, BarChart3 } from 'lucide-react';

export function SocialProofSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
            Join Leading Palm Beach Companies Achieving 30%+ ROI from AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by businesses saving millions with AI-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Time Savings Stat */}
          <Card className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">50%+</div>
              <p className="text-primary font-semibold mb-2">Time Savings</p>
              <p className="text-sm text-muted-foreground">
                from AI automation (SMB research)
              </p>
            </CardContent>
          </Card>

          {/* Support Cost Reduction Stat */}
          <Card className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">30–50%</div>
              <p className="text-primary font-semibold mb-2">Support Cost Reduction</p>
              <p className="text-sm text-muted-foreground">
                with AI chatbots
              </p>
            </CardContent>
          </Card>

          {/* Inventory Efficiency Stat */}
          <Card className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">15%</div>
              <p className="text-primary font-semibold mb-2">Inventory Efficiency</p>
              <p className="text-sm text-muted-foreground">
                improvement with AI forecasting
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
