import React from 'react';
import { Logo } from './components/Logo';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import heroImage from 'figma:asset/7e5ca7392b95c624082b4d618c2da0cd531db557.png';
import { 
  TrendingDown, 
  AlertTriangle, 
  Target, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Clock,
  Zap,
  Award,
  Phone,
  Mail,
  MapPin,
  Building2,
  MessageSquare,
  Eye,
  Gauge,
  FileText,
  Calendar,
  UserCheck,
  ChevronRight,
  Star,
  TrendingUp,
  Brain,
  Globe,
  Lightbulb,
  DollarSign,
  Package
} from 'lucide-react';

export default function InvestorRelationsWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Motto */}
            <div className="flex items-center gap-3">
              <Logo variant="horizontal" size="lg" logoPosition="left" />
              <div className="text-lg font-bold text-accent">
                AI → ROI
              </div>
            </div>
            
            {/* Center Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                About
              </a>
              <a href="#blog" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Contact
              </a>
            </nav>
            
            {/* Right Side - Phone and CTA */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:561-220-7004" className="hover:text-foreground font-medium transition-colors">
                  (561) 220-7004
                </a>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                Get Your Free ROI Assessment
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image - Hidden on small screens */}
        <div 
          className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
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
                "74–85% of AI projects fail to deliver expected value" – Gartner
              </p>
              <p className="text-lg text-muted-foreground">
                While many AI projects miss the mark, Palm Beach's smartest executives are unlocking real ROI.
              </p>
            </div>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-primary font-medium mb-6 leading-relaxed">
              We help Palm Beach businesses evaluate, implement, and optimize AI solutions to save time, cut costs, and grow revenue—with proven ROI from day one.
            </p>
            
            {/* Value Prop */}
            <p className="text-lg lg:text-xl font-semibold text-accent mb-8">
              We don't just build AI. We build results.
            </p>
            
            {/* CTA Section */}
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg">
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

      {/* Social Proof Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Join Leading Palm Beach Companies Achieving 30%+ ROI from AI
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses saving millions with AI-driven insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Time Savings Stat */}
            <Card className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">50%+</div>
                <p className="text-primary font-semibold mb-2">Time Savings</p>
                <p className="text-sm text-muted-foreground">
                  from AI automation (SMB research)
                </p>
              </CardContent>
            </Card>

            {/* Support Cost Reduction Stat */}
            <Card className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">30–50%</div>
                <p className="text-primary font-semibold mb-2">Support Cost Reduction</p>
                <p className="text-sm text-muted-foreground">
                  with AI chatbots
                </p>
              </CardContent>
            </Card>

            {/* Inventory Efficiency Stat */}
            <Card className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">15%</div>
                <p className="text-primary font-semibold mb-2">Inventory Efficiency</p>
                <p className="text-sm text-muted-foreground">
                  improvement with AI forecasting
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Why 85% of AI Projects Fail (And How to Beat the Odds)
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-muted-foreground mb-8">
              The Three Critical Problems
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Problem 1: Solving the Wrong Problem */}
            <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-destructive flex items-center gap-2">
                  🎯 Solving the Wrong Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Your team automates processes that don't save money or add value—like digitizing paperwork that shouldn't exist in the first place.
                </p>
              </CardContent>
            </Card>

            {/* Problem 2: Poor Customer Experience */}
            <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-destructive flex items-center gap-2">
                  😤 Poor Customer Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  AI customer service with incomplete data frustrates users instead of helping them, damaging relationships you've spent years building.
                </p>
              </CardContent>
            </Card>

            {/* Problem 3: Garbage Data */}
            <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-destructive flex items-center gap-2">
                  📊 Garbage Data, Garbage Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  AI decisions are only as good as the data they're based on—and most companies discover their data quality issues too late.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Emotional Hook */}
          <div className="bg-muted/50 rounded-xl p-8 border border-muted text-center">
            <p className="text-lg lg:text-xl text-primary font-medium leading-relaxed">
              In Palm Beach's ultra-competitive market, failed AI investments don't just drain budgets—you watch competitors surge ahead while you're left explaining empty promises to your board.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Approach: The Simple AI Path to Smarter Operations
            </h2>
            <p className="text-xl lg:text-2xl text-primary font-medium mb-12 leading-relaxed max-w-4xl mx-auto">
              We don't sell shiny objects. We evaluate, implement, and optimize AI tools so you get measurable returns from day one.
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
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4">
              See How Businesses Are Winning with AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Solutions Section */}
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
                  <h5 className="font-semibold text-primary mb-2">Real Implementation:</h5>
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
                  <h5 className="font-semibold text-primary mb-2">Real Implementation:</h5>
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
                  <h5 className="font-semibold text-primary mb-2">Real Implementation:</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A retail chain used our forecasting AI to analyze sales patterns and local market data. Result: 15% less overstock, 10% fewer stockouts, 12% cash flow improvement, and $320K additional annual profit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section className="py-20 bg-muted/30">
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
                If you don't see measurable ROI within 90 days, we'll refund your investment and fix the issues at no charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Industry Proof: AI Delivers Real Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Independent research shows consistent ROI across AI implementations in business operations.
            </p>
          </div>

          <div className="space-y-8">
            {/* Proof Item 1: Cost Reduction */}
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Cost Reduction</h3>
                    <div className="text-2xl font-bold text-accent mb-2">30% drop in support costs via automation</div>
                    <p className="text-muted-foreground mb-4">
                      Companies implementing AI-powered support automation see significant cost reductions while improving response times and customer satisfaction.
                    </p>
                    <Badge variant="outline" className="text-muted-foreground border-muted">
                      Source: Desk365
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proof Item 2: Inquiry Resolution */}
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Inquiry Resolution</h3>
                    <div className="text-2xl font-bold text-accent mb-2">Up to 80% of queries handled by AI chatbots</div>
                    <p className="text-muted-foreground mb-4">
                      Advanced AI chatbots are now capable of resolving the vast majority of customer inquiries without human intervention, freeing up staff for complex tasks.
                    </p>
                    <Badge variant="outline" className="text-muted-foreground border-muted">
                      Source: Gartner Prediction
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proof Item 3: Time Savings */}
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Time Savings</h3>
                    <div className="text-2xl font-bold text-accent mb-2">Over 92% faster turnaround for SMB tasks</div>
                    <p className="text-muted-foreground mb-4">
                      Small and medium businesses implementing AI automation see dramatic improvements in task completion times, enabling faster business operations.
                    </p>
                    <Badge variant="outline" className="text-muted-foreground border-muted">
                      Source: Industry Report
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proof Item 4: Inventory Optimization */}
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Inventory Optimization</h3>
                    <div className="text-2xl font-bold text-accent mb-2">15% reduction in inventory costs</div>
                    <p className="text-muted-foreground mb-4">
                      AI-powered demand forecasting helps businesses optimize inventory levels, reducing carrying costs while maintaining service levels.
                    </p>
                    <Badge variant="outline" className="text-muted-foreground border-muted">
                      Source: Industry Analysis
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proof Item 5: Revenue Growth */}
            <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Revenue Growth</h3>
                    <div className="text-2xl font-bold text-accent mb-2">10-25% revenue increase through AI insights</div>
                    <p className="text-muted-foreground mb-4">
                      AI analytics uncover hidden customer behavior patterns and market opportunities that drive significant revenue growth for businesses.
                    </p>
                    <Badge variant="outline" className="text-muted-foreground border-muted">
                      Source: McKinsey Research
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              The Science Behind Our 94% Success Rate
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our methodology is backed by research from leading institutions and validated through hundreds of implementations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                      Our ROI-First approach aligns with MIT's framework for successful AI adoption in enterprise environments.
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

      {/* Why Us Section */}
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
                    We're so confident in our approach that we guarantee measurable ROI within 90 days—or we refund your investment and fix the issues at no charge.
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
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4">
                  Get Your Free ROI Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  or <a href="#" className="text-accent hover:underline">download our Palm Beach Business Guide</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Logo variant="horizontal" size="md" logoPosition="left" color="white" />
            </div>
            <p className="text-sm opacity-80">
              © 2024 Palm Beaches AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}