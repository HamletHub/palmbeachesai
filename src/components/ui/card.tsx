import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { clsx } from 'clsx';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    // Check if className contains a custom background (accent, primary, secondary, etc.)
    // Convert className to string using clsx to handle all formats
    const classNameStr = clsx(className);
    const hasCustomBg = classNameStr.includes('bg-accent') || 
                       classNameStr.includes('bg-primary') || 
                       classNameStr.includes('bg-secondary') ||
                       classNameStr.includes('bg-destructive') ||
                       classNameStr.includes('bg-muted');
    
    const baseClasses = hasCustomBg
      ? 'rounded-lg border text-card-foreground shadow-sm'
      : 'rounded-lg border bg-card text-card-foreground shadow-sm';
    
    return (
      <div
        ref={ref}
        className={cn(baseClasses, className)}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };