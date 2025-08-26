import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EmailReveal } from '@/components/EmailReveal';
import { CheckCircle, XCircle, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { ProblemCards } from '@/components/ProblemCards';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-30 py-8">
            <Logo variant="horizontal" size="md" logoPosition="left" />
            <div className="hidden md:flex space-x-8">
              <a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Solutions
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
{/*             <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Industry Problem
            </Badge>
 */}            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
              <span className="text-accent">74-85%</span> of AI projects fail to deliver expected value
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground text-right mb-6 font-medium">
              Gartner
            </p>
            <p className="text-lg lg:text-xl text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              There are <strong className="text-primary">three critical reasons</strong> for this failure rate, 
              and <strong className="text-accent">three proven solutions</strong> that guarantee ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 font-semibold">
                Discover the Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <ProblemCards />

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-6 px-4 py-2 text-sm font-medium bg-accent text-accent-foreground">
              Our Solutions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Three Solutions That Guarantee ROI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology addresses each failure point with strategic precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Strategic AI Alignment</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We begin every project by mapping AI capabilities to your specific business 
                  objectives, ensuring measurable impact from day one.
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Business case development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">ROI framework design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Success metrics definition</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Data Excellence Program</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our comprehensive data audit and preparation process ensures your AI 
                  models are built on a foundation of high-quality, relevant data.
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Data quality assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Pipeline optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Governance framework</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Seamless Integration</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We ensure smooth deployment and adoption through proven change management 
                  and integration methodologies that minimize disruption.
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Workflow integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Team training programs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Ongoing support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                Leadership
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Proven AI Expertise You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Palm Beaches AI is founded on the principle that AI should deliver measurable 
                business value, not just technological novelty. Our approach combines deep 
                technical expertise with strategic business acumen.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Strategic Focus</h4>
                    <p className="text-muted-foreground">Every AI initiative aligned with clear business objectives and ROI metrics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Proven Methodology</h4>
                    <p className="text-muted-foreground">Battle-tested processes that eliminate the common causes of AI project failure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Guaranteed Results</h4>
                    <p className="text-muted-foreground">Our commitment to delivering measurable value, backed by clear success metrics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-accent/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Ken Ducey, Jr.</h3>
                  <p className="text-accent font-medium">Founder & CEO</p>
                </div>
                <p className="text-muted-foreground text-center leading-relaxed mb-6">
                  With extensive experience in AI strategy and implementation, Ken leads 
                  Palm Beaches AI&apos;s mission to ensure every AI project delivers measurable 
                  business value.
                </p>
                <div className="border-t border-border pt-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <EmailReveal user="info" domain="PalmBeachesAI.com" className="text-primary font-medium" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="text-primary font-medium">561-220-7004</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Guarantee Your AI ROI?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Don&apos;t become another AI failure statistic. Let&apos;s discuss how our proven 
            methodology can ensure your AI project delivers the results you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-semibold">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download ROI Framework
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Logo variant="horizontal" size="md" logoPosition="left" />
              <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
                Artificial Intelligence solutions that guarantee measurable business value and ROI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>340 Royal Poinciana Way</p>
                <p>Suite #328, PO Box 403</p>
                <p>Palm Beach, FL 33480</p>
                <p className="pt-2">
                  <a href="tel:561-220-7004" className="text-accent hover:text-accent/80 transition-colors">
                    561-220-7004
                  </a>
                </p>
                <p>
                  <EmailReveal user="info" domain="PalmBeachesAI.com" />
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>AI Strategy Consulting</p>
                <p>Data Foundation Audit</p>
                <p>Implementation Support</p>
                <p>ROI Optimization</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Palm Beaches AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
