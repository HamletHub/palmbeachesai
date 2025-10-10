'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { trackEvent, trackBusinessGoal } from '@/components/GoogleTagManager';

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image - Hidden on small screens */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/clearoffice.png)' }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* White background for small screens */}
      <div className="absolute inset-0 md:hidden bg-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <Badge variant="outline" className="mb-6 bg-accent/10 text-accent border-accent/20 text-sm font-medium">
            AI Solutions for Palm Beach Mid-Market Companies
          </Badge>

          {/* Display */}
          <div className="text-5xl lg:text-7xl font-bold text-accent mb-4 leading-tight">
            AI → ROI
          </div>

          {/* Headline */}
          <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
            Turn Your AI Investments Into Measurable Returns
          </h1>

          {/* Authority Line */}
          <div className="bg-muted/50 rounded-xl p-6 mb-6 border border-muted">
            <p className="text-lg lg:text-xl font-semibold text-primary mb-2">
              &quot;74–85% of AI projects fail to deliver expected value&quot; – Gartner
            </p>
            <p className="text-lg text-muted-foreground">
              While many AI projects miss the mark, Palm Beach&apos;s smartest executives are unlocking real ROI.
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-primary font-medium mb-6 leading-relaxed">
            We help Palm Beach businesses evaluate, implement, and optimize AI solutions to save time, cut costs, and grow revenue—with proven ROI from day one.
          </p>

          {/* Value Prop */}
          <p className="text-lg lg:text-xl font-semibold text-accent mb-8">
            We don&apos;t just build AI. We build results.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg"
              onClick={() => {
                trackEvent('cta_click', {
                  cta_location: 'hero_section',
                  cta_text: 'Get Your Free ROI Assessment',
                  estimated_value: 2500
                });
                trackBusinessGoal('roi_assessment_interest', 2500);
                window.open('/contact', '_blank');
              }}
            >
              Get Your Free ROI Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Discover hidden opportunities in 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
