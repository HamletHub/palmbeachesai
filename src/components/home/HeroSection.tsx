"use client"

import { Badge } from "@/components/ui/badge"
import { CTAButton } from "@/components/ui/cta-button"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image - Hidden on small screens */}
      <div className="absolute inset-0 hidden md:block">
        <div
          className="bg-cover bg-center bg-no-repeat absolute inset-0"
          style={{ backgroundImage: "url(/images/clearoffice.png)" }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
      </div>

      {/* White background for small screens */}
      <div className="absolute inset-0 md:hidden bg-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <Badge
            variant="outline"
            className="mb-6 bg-accent/10 text-accent border-accent/50 text-sm font-semibold animate-slide-down"
            style={{ animationDelay: "100ms" }}
          >
            Palm Beach Executives Are Turning AI Investments Into 6-Figure Returns
          </Badge>

          <div
            className="text-5xl lg:text-7xl font-bold mb-4 leading-tight animate-slide-down"
            style={{ animationDelay: "200ms" }}
          >
            <span className="animated-gradient-text">AI → ROI</span>
          </div>

          <h1
            className="text-3xl lg:text-5xl font-bold text-primary mb-8 leading-tight animate-slide-down"
            style={{ animationDelay: "300ms" }}
          >
            Turn Your AI Investments Into Measurable Returns
          </h1>

          <div className="animate-slide-down" style={{ animationDelay: "400ms" }}>
            <div className="bg-muted/30 rounded-xl p-6 mb-6 border-2 border-accent/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <p className="text-lg lg:text-xl font-semibold text-primary mb-2">
                &quot;74–85% of AI projects fail to deliver expected value&quot; – Gartner
              </p>
              <p className="text-lg text-muted-foreground">
                We help you be in the successful 15%.
              </p>
            </div>
          </div>

          <p
            className="text-xl lg:text-2xl text-primary font-medium mb-6 leading-relaxed animate-slide-down"
            style={{ animationDelay: "500ms" }}
          >
            We partner with Palm Beach County businesses to evaluate, implement, and optimize AI solutions that immediately:
            <ul className="list-disc list-inside text-left ml-10 text-lg lg:text-xl mt-4">
              <li><span className="font-bold">Save Time</span> (Automate High-Cost Tasks)</li>
              <li><span className="font-bold">Cut Costs</span> (Eliminate Operational Waste)</li>
              <li><span className="font-bold">Grow Revenue</span> (Unlock New Market Opportunities)</li>
            </ul>

          </p>

          <p
            className="text-lg lg:text-xl font-semibold text-foreground mb-8 animate-slide-down"
            style={{ animationDelay: "600ms" }}
          >
            We don&apos;t just build AI. We build results.
          </p>

          <div className="flex flex-col items-center gap-4 animate-slide-down" style={{ animationDelay: "700ms" }}>
            <CTAButton
              ctaLocation="hero_section"
              estimatedValue={2500}
              variant="default"
              size="lg"
            />
            <p className="text-sm text-muted-foreground">Discover your 3 highest-return AI opportunities. No sales pitch, just strategic insights you can use immediately.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
