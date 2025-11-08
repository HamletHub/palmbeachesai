import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
    
    // Check if className contains a custom background (accent specifically)
    // Convert className to string using clsx to handle all formats
    const classNameStr = clsx(className);
    const hasCustomBg = classNameStr.includes('bg-accent');
    
    const variants = {
      default: hasCustomBg ? 'text-primary-foreground' : 'bg-primary text-primary-foreground hover:bg-primary/90',
      outline: hasCustomBg ? 'border border-input' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: hasCustomBg ? 'text-secondary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-lg'
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };