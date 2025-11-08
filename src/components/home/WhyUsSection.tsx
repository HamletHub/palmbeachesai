'use client';

import { CTAButton } from '@/components/ui/cta-button';
import { Target, Shield, Clock, MapPin, Building2, Users } from 'lucide-react';

export function WhyUsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            While others talk about AI potential, we deliver measurable business results through our proven methodology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ROI-First Methodology */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">ROI-First Methodology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We start with your business outcomes and work backward to the right AI solution. This approach has delivered an average 312% ROI across our implementations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">90-Day ROI Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We&apos;re so confident in our approach that we guarantee measurable ROI within 90 days—or we refund your investment and fix the issues at no charge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Rapid Implementation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our proven framework allows us to deliver results in 45 days on average—not 12-18 months like traditional consulting approaches.
                </p>
              </div>
            </div>
          </div>

          {/* South Florida Expertise */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">South Florida Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Based in Palm Beach, we understand the unique challenges and opportunities of South Florida businesses—from seasonal fluctuations to diverse market demographics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Mid-Market Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We specialize in companies with $10M-$500M revenue who need enterprise-grade AI solutions without enterprise-level complexity and cost.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Hands-On Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike big consulting firms that drop off recommendations, we stay engaged through implementation and optimization to ensure sustained success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-card rounded-xl p-8 border border-accent/20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">
              Ready to see what AI can do for your business?
            </h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Get a free 20-minute consultation to discover exactly how AI can drive ROI for your specific business challenges. No sales pitch—just actionable insights you can use immediately.
            </p>

            <div className="bg-accent/5 rounded-lg p-4 mb-6 border border-accent/20">
              <p className="text-accent font-semibold">
                $2,500 value - Complete business analysis with ROI projections
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton
                ctaLocation="final_section"
                estimatedValue={2500}
                variant="default"
                size="lg"
              />
{/*               <p className="text-sm text-muted-foreground">
                or <a href="#" className="text-accent hover:underline">download our Palm Beach Business Guide</a>
              </p>
 */}            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
