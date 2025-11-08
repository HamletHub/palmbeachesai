'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { trackEvent, trackBusinessGoal } from '@/components/GoogleTagManager';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  /** Location identifier for tracking (e.g., "hero_section", "final_section") */
  ctaLocation?: string;
  /** Estimated value for tracking */
  estimatedValue?: number;
  /** Whether to track business goal */
  trackGoal?: boolean;
  /** Business goal name for tracking */
  goalName?: string;
  /** Whether to open in new tab */
  openInNewTab?: boolean;
  /** Custom href (defaults to "/contact") */
  href?: string;
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show arrow icon */
  showIcon?: boolean;
  /** Additional className */
  className?: string;
  /** Custom button text (defaults to "Get Your Free ROI Assessment") */
  children?: React.ReactNode;
  /** Variant for different contexts */
  variant?: 'default' | 'header' | 'inline';
}

export function CTAButton({
  ctaLocation,
  estimatedValue = 2500,
  trackGoal = true,
  goalName = 'roi_assessment_interest',
  openInNewTab = true,
  href = '/contact',
  size = 'lg',
  showIcon = true,
  className,
  children = 'Get Your Free ROI Assessment',
  variant = 'default',
}: CTAButtonProps) {
  const handleClick = () => {
    if (ctaLocation) {
      trackEvent('cta_click', {
        cta_location: ctaLocation,
        cta_text: typeof children === 'string' ? children : 'Get Your Free ROI Assessment',
        estimated_value: estimatedValue,
      });
    }

    if (trackGoal) {
      trackBusinessGoal(goalName, estimatedValue);
    }
  };

  const baseClasses = cn(
    'bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all inline-flex items-center justify-center',
    {
      // Default variant - full styling for hero sections
      'px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg shadow-lg hover:shadow-xl':
        variant === 'default' && size === 'lg',
      'px-3 md:px-6 py-2 md:py-3 text-xs md:text-base shadow-md hover:shadow-lg':
        variant === 'default' && size === 'md',
      'px-2 md:px-4 py-2 text-xs md:text-sm shadow-sm hover:shadow-md':
        variant === 'default' && size === 'sm',
      // Header variant - compact for header
      'px-2 md:px-4 py-2 text-xs md:text-sm leading-tight':
        variant === 'header',
      // Inline variant - simpler styling for blog/about pages
      'px-4 md:px-6 py-2 md:py-3 text-sm md:text-base': variant === 'inline',
    },
    className
  );

  const buttonContent = (
    <>
      {typeof children === 'string' ? (
        <span className="text-center whitespace-normal break-words max-w-full">{children}</span>
      ) : (
        children
      )}
      {showIcon && <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 flex-shrink-0" />}
    </>
  );

  if (openInNewTab) {
    return (
      <Button
        size={size}
        className={baseClasses}
        onClick={() => {
          handleClick();
          window.open(href, '_blank');
        }}
      >
        {buttonContent}
      </Button>
    );
  }

  return (
    <Link href={href}>
      <Button size={size} className={baseClasses} onClick={handleClick}>
        {buttonContent}
      </Button>
    </Link>
  );
}

