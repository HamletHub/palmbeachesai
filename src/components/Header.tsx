'use client';

import { Logo } from '@/components/Logo';
import { CTAButton } from '@/components/ui/cta-button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  hideContactNav?: boolean;
  hideCtaButton?: boolean;
  currentPage?: 'home' | 'about' | 'blog' | 'contact';
}

export function Header({ hideContactNav = false, hideCtaButton = false, currentPage = 'home' }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo and Motto */}
          <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink">
            <Logo variant="horizontal" size="sm" logoPosition="left" />
            <div className="hidden md:block text-lg font-bold text-accent whitespace-nowrap">
              AI → ROI
            </div>
          </div>
          
          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-accent border-b-2 border-accent pb-1' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`font-medium transition-colors ${
                currentPage === 'blog' 
                  ? 'text-accent border-b-2 border-accent pb-1' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Blog
            </Link>
            {!hideContactNav && (
              <Link 
                href="/contact" 
                className={`font-medium transition-colors ${
                  currentPage === 'contact' 
                    ? 'text-accent border-b-2 border-accent pb-1' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Contact
              </Link>
            )}
          </nav>
          
          {/* Right Side - Phone and CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <a href="tel:561-652-1200" className="hover:text-foreground font-medium transition-colors">
                (561) 652-1200
              </a>
            </div>
            {!hideCtaButton && (
              <CTAButton
                variant="header"
                trackGoal={false}
                showIcon={false}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}