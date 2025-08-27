'use client';

import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EmailReveal } from '@/components/EmailReveal';
import { CheckCircle, XCircle, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import Image from 'next/image';
import { ProblemCards } from '@/components/ProblemCards';
import { SolutionsCards } from '@/components/SolutionsCards';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-30 py-8">
            <Logo variant="horizontal" size="md" logoPosition="left" />
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              onClick={() => window.open('/contact', '_blank')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden">
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
{/*             <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 font-semibold">
                Discover the Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Schedule Consultation
              </Button>
            </div>
 */}          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <ProblemCards />

      <SolutionsCards />

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
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/accentureaimaturity.png"
                alt="AI Success and Maturity Framework"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
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
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4 font-semibold"
              onClick={() => window.open('/contact', '_blank')}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
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
            <p>&copy; {new Date().getFullYear()} Palm Beaches AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
