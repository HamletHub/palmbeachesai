import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface HighlightBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isVisible?: boolean;
  transitionDelay?: string | number;
}

const HighlightBox = forwardRef<HTMLDivElement, HighlightBoxProps>(
  ({ children, isVisible = true, transitionDelay, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-muted/50 rounded-xl p-8 border-2 border-muted text-center transition-all duration-700 hover:border-destructive/30 hover:shadow-lg',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          className
        )}
        style={{ transitionDelay: transitionDelay ? `${transitionDelay}ms` : undefined, ...props.style }}
        {...props}
      >
        <p className="text-lg lg:text-xl text-primary font-medium leading-relaxed">{children}</p>
      </div>
    );
  }
);
HighlightBox.displayName = 'HighlightBox';

export { HighlightBox };

