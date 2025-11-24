import { Logo } from '@/components/Logo';
import { EmailReveal } from '@/components/EmailReveal';

export function Footer() {
  return (
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
                <a href="tel:561-652-1200" className="text-foreground hover:text-primary transition-colors">
                  561-652-1200
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
  );
}