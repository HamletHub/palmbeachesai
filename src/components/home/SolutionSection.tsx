import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-section-lg border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Our Approach: The Simple AI Path to Smarter Operations
          </h2>
          <p className="text-xl lg:text-2xl text-primary font-medium mb-12 leading-relaxed max-w-4xl mx-auto">
            We don&apos;t sell shiny objects. We evaluate, implement, and optimize AI tools so you get measurable returns from day one.
          </p>
        </div>

        {/* The Proven Path Section */}
        <div className="bg-card rounded-xl p-8 mb-12 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
              The Proven Path from AI Investment to Measurable ROI
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our three-step system eliminates the guesswork from AI implementation. While others struggle with complex theories, we deliver practical solutions that work for mid-market companies.
            </p>
          </div>
        </div>

        {/* ROI First Framework Section */}
        <div className="bg-accent/5 rounded-xl p-8 mb-12 border border-accent/20">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
              Our Trademarked ROI First Framework™
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We start with your business outcomes and work backward to the right AI solution—not the other way around.
            </p>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4"
            onClick={() => window.open('/contact', '_blank')}
          >
            See How Businesses Are Winning with AI
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
