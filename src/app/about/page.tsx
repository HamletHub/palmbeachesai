'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CTAButton } from '@/components/ui/cta-button';
import {
  generateOrganizationSchema,
  generateBreadcrumbListSchema,
  generateFAQPageSchema,
  renderJSONLD
} from '@/lib/schemas';
import { 
  CheckCircle, 
  Target, 
  TrendingUp,
  Award,
  Lightbulb,
  Clock,
  Building2,
  Shield,
  Users,
  Star,
  Zap
} from 'lucide-react';

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema();

  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: "Home", url: "https://palmbeachesai.com" },
    { name: "About", url: "https://palmbeachesai.com/about" }
  ]);

  const faqSchema = generateFAQPageSchema([
    {
      question: "What makes Palm Beaches AI different from other AI consultants?",
      answer: "We have a proven business-first approach with 94% success rate and 312% average ROI. Our founder brings unique experience from building America's only profitable scalable community media platform and leading operations for publicly traded companies."
    },
    {
      question: "What is the ROI-First Framework™?",
      answer: "Our proven methodology that starts with your business outcomes and works backward to the right AI solution. This approach ensures every AI investment delivers measurable value rather than just implementing technology for technology's sake."
    },
    {
      question: "Who do you typically work with?",
      answer: "We specialize in Palm Beach County mid-market businesses with $10M-$500M revenue, professional services firms, and growth-focused leaders who understand that properly implemented AI creates sustainable competitive advantages."
    },
    {
      question: "What kind of experience does your team have?",
      answer: "Our founder has 13 years of AI-driven system development, built proprietary AI systems processing 100,000+ data sources, led operations for publicly traded companies, and holds IBM and AWS AI certifications."
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(faqSchema)
        }}
      />
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-secondary/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 bg-accent/10 text-accent border-accent/20 text-sm font-medium">
            About Palm Beaches AI
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Turning AI Investments Into Measurable Returns
          </h1>
          <p className="text-xl lg:text-2xl text-accent font-semibold mb-8">
            Where sophisticated business meets proven AI expertise
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We exist to ensure your AI investments deliver the ROI you expect—helping sophisticated businesses leverage artificial intelligence for measurable value creation and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Why We Exist
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mid-market businesses face a critical challenge: how to leverage AI to create measurable value without wasting time and capital on solutions that don&apos;t deliver results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  While <span className="text-accent font-semibold">74% of AI projects fail to meet expectations</span>, successful companies are using AI to transform operations, streamline processes, and create competitive advantages that directly impact performance and valuations.
                </p>
                <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                  <p className="text-lg text-primary font-semibold">
                    We exist to ensure your AI investments deliver the ROI you expect.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Transform AI from a technology experiment into a strategic business advantage that creates measurable value and sustainable competitive differentiation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Our Focus</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Automation excellence, customer experience optimization, and data-driven insights that directly impact business performance and growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
          </div>

          <div className="space-y-12">
            <div className="bg-card rounded-xl p-8 border border-accent/20 shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6">
                Founded on Real-World Experience
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Palm Beaches AI was founded after witnessing too many sophisticated business leaders struggle with AI implementations that promised transformation but delivered complexity instead.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our founder brings a unique combination of technology innovation and business expertise—having built America&apos;s only profitable, scalable community media platform using proprietary AI systems that processed data from over 100,000 sources, while also leading operations for publicly traded companies and advising on strategic processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Technology Innovation</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Built America&apos;s only profitable, scalable community media platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Proprietary AI systems processing 100,000+ data sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>13 years of AI-driven system development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Business Excellence</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Led operations for publicly traded companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Strategic advisory for high-value business processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Deep understanding of performance expectations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card rounded-xl p-8 border border-accent/20 shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6">
                Palm Beach Focus
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                After establishing our presence in Palm Beach and observing the exceptional sophistication of the local business community, we recognized an opportunity to bring proven AI methodologies to companies that demand both innovation and results. We&apos;re here to ensure your AI investments perform at the level you expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              What Makes Us Different
            </h2>
          </div>

          <div className="space-y-12">
            {/* Proven Track Record */}
            <div className="bg-card rounded-xl p-8 border border-accent/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Proven Track Record with Real Business Impact</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">94%</div>
                  <p className="text-muted-foreground">Success rate with our ROI-First methodology</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">312%</div>
                  <p className="text-muted-foreground">Average ROI delivered across implementations</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">45</div>
                  <p className="text-muted-foreground">Days average implementation time</p>
                </div>
              </div>
            </div>

            {/* Business DNA */}
            <div className="bg-card rounded-xl p-8 border border-accent/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Business-First Approach</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">Unlike typical AI consultants, we understand your world:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Operations Excellence</h4>
                    <p className="text-muted-foreground">Led operations for complex, multi-system organizations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Results Focus</h4>
                    <p className="text-muted-foreground">Performance-driven implementations with clear metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Strategic Thinking</h4>
                    <p className="text-muted-foreground">AI initiatives aligned with business objectives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise-Grade Implementation */}
            <div className="bg-card rounded-xl p-8 border border-accent/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Enterprise-Grade AI Implementation</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">45+ AWS services utilized in scalable, cloud-based infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">IBM and AWS AI certifications ensuring best-practice implementations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Proprietary methodologies for data optimization and intelligent automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Enterprise capabilities delivered at mid-market budgets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Approach: The ROI-First Framework™
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures AI implementations deliver measurable business value and sustainable competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-6">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Strategic Assessment</h3>
                <p className="text-muted-foreground">
                  Understanding your objectives and competitive dynamics to ensure AI initiatives align with business strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-6">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Custom Roadmap</h3>
                <p className="text-muted-foreground">
                  Tailored AI solutions addressing unique challenges in automation, customer experience, and data insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-6">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Proven Implementation</h3>
                <p className="text-muted-foreground">
                  Clear success metrics, regular performance reviews, and continuous optimization to maximize ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-6">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Ongoing Partnership</h3>
                <p className="text-muted-foreground">
                  Continuous support, system evolution, and strategic guidance as your business grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Who We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 mx-auto">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Mid-Market Businesses</h3>
                <p className="text-muted-foreground">
                  Companies seeking to leverage AI for competitive advantage, operational improvements, and measurable value creation across all business functions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 mx-auto">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Professional Services</h3>
                <p className="text-muted-foreground">
                  Law firms, accounting practices, and consulting companies looking to enhance client service while optimizing internal operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 mx-auto">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Growth-Focused Leaders</h3>
                <p className="text-muted-foreground">
                  Executives who understand that AI, implemented correctly, creates sustainable competitive advantages and measurable returns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Commitment
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-primary">To Your Success</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Every recommendation must pass our test: &quot;Will this create measurable value for your business?&quot;
                </p>
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <p className="text-accent font-semibold">
                    If the answer isn&apos;t a clear yes, we don&apos;t recommend it.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-primary">To Transparency</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  You&apos;ll always know what we&apos;re building, why we&apos;re building it, and how it impacts your bottom line.
                </p>
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <p className="text-accent font-semibold">
                    No black boxes, no mysterious algorithms—just clear, explainable AI.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-primary">To Excellence</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Palm Beach&apos;s business community sets the standard for professional excellence.
                </p>
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <p className="text-accent font-semibold">
                    We&apos;re honored to contribute our AI expertise to this sophisticated market.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
              IBM Certified
            </Badge>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
              AWS Certified
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Palm Beaches AI is certified by IBM and AWS for artificial intelligence implementation, ensuring our solutions meet enterprise-grade standards for security, scalability, and performance.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Transform Your AI Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            You didn&apos;t build a successful business by accepting mediocre results. Don&apos;t accept mediocre AI results either.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how AI can create measurable value for your business.
          </p>
          
          <div className="bg-accent/5 rounded-lg p-4 mb-8 border border-accent/20 inline-block">
            <p className="text-accent font-semibold">
              $2,500 value - Complete business analysis with ROI projections
            </p>
          </div>
          
          <CTAButton
            variant="default"
            size="lg"
            className="mb-6"
            trackGoal={false}
          />
          
          <p className="text-muted-foreground">
            <CheckCircle className="w-4 h-4 inline mr-2 text-accent" />
            Discover hidden opportunities in 30 minutes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}