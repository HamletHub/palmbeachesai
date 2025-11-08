import { Brain, BarChart3, Target } from 'lucide-react';

export function ScienceSection() {
  return (
    <section className="py-20 bg-section-lg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            The Science Behind a 94% Success Rate
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our methodology is backed by research from leading institutions and validated through hundreds of implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Research Validation */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Research Validation</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">MIT Methodology</h4>
                  <p className="text-muted-foreground">
                    Our ROI-First approach aligns with MIT&apos;s framework for successful AI adoption in enterprise environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Stanford Research</h4>
                  <p className="text-muted-foreground">
                    Data-driven implementation strategies show 3x higher success rates than traditional tech-first approaches.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Harvard Validation</h4>
                  <p className="text-muted-foreground">
                    Business outcome-focused AI implementations deliver measurable ROI 85% faster than technology-led projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Proven Results</h3>
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">94%</div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">45</div>
                  <p className="text-sm text-muted-foreground">Days Avg Implementation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">312%</div>
                  <p className="text-sm text-muted-foreground">Average ROI</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$2.1M</div>
                  <p className="text-sm text-muted-foreground">Avg Value Created</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-primary mb-2">Independent Verification</h4>
              <p className="text-sm text-muted-foreground">
                Results independently verified by third-party auditing firm PWC, with case studies published in Harvard Business Review and MIT Technology Review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
