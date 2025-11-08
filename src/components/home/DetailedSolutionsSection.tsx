import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function DetailedSolutionsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Simple AI That Actually Works: Our Proven Path to ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three Examples of proven solutions utilized by Palm Beach businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Solution 1: Automation */}
          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-accent mb-4">
                Free up 30-40 minutes daily per employee for strategic work
              </CardTitle>
              <h4 className="font-semibold text-primary mb-3">What You Get:</h4>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">50% reduction in time spent on repetitive tasks (Industry average: McKinsey Research)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">30-50% lower operational costs through intelligent automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Zero human error in data processing and routine workflows</span>
                </li>
              </ul>

              <div className="bg-muted/30 rounded-lg p-4 border border-muted">
                <h5 className="font-semibold text-primary mb-2">Implementation:</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A multi-location accounting firm automated their invoicing system—client data extraction, payment matching, and exception flagging reduced manual work by 60% while eliminating all invoice errors.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Solution 2: Customer Experience */}
          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-accent mb-4">
                Handle 40% more customers without hiring staff
              </CardTitle>
              <h4 className="font-semibold text-primary mb-3">What You Get:</h4>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Resolve 45% of customer inquiries instantly with intelligent responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">24/7 automated scheduling and service booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">25% boost in customer satisfaction through faster, accurate service</span>
                </li>
              </ul>

              <div className="bg-muted/30 rounded-lg p-4 border border-muted">
                <h5 className="font-semibold text-primary mb-2">Implementation:</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A service company deployed our customer AI system. Within 90 days, 45% of customer interactions were automated, leading to 20% higher customer retention and $180K annual savings in staffing costs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Solution 3: Analytics */}
          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-accent mb-4">
                Turn your data into profit-generating insights
              </CardTitle>
              <h4 className="font-semibold text-primary mb-3">What You Get:</h4>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">15% inventory cost reduction through demand forecasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Real-time pricing optimization that identifies new revenue streams</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Hidden customer behavior patterns that drive 10-25% revenue growth</span>
                </li>
              </ul>

              <div className="bg-muted/30 rounded-lg p-4 border border-muted">
                <h5 className="font-semibold text-primary mb-2">Implementation:</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A retail chain used our forecasting AI to analyze sales patterns and local market data. Result: 15% less overstock, 10% fewer stockouts, 12% cash flow improvement, and $320K additional annual profit.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
