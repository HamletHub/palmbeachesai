export function HowToSection() {
  return (
    <section className="py-20 bg-section-lg">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Three Step Risk-Free Path to AI Success
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1: Evaluate */}
          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-4">Evaluate</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Identify where AI creates the biggest ROI.
            </p>
          </div>

          {/* Step 2: Implement */}
          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-4">Implement</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deploy the right AI tools that guarantee ROI, quickly, securely, and affordably.
            </p>
          </div>

          {/* Step 3: Optimize */}
          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-4">Optimize</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We handle the technical complexity while you focus on your business. You see measurable improvements.
            </p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-card rounded-xl p-8 mt-16 border border-accent/20">
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">
              Our Guarantee:
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you don&apos;t see measurable ROI within 90 days, we&apos;ll refund your investment and fix the issues at no charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
