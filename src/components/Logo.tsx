import Image from 'next/image';

interface LogoProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  logoPosition?: 'left' | 'center' | 'right';
}

export function Logo({ 
  variant = 'horizontal', 
  size = 'md', 
  logoPosition = 'left' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  // Size-based dimensions for horizontal logos
  const horizontalSizes = {
    sm: { width: 40, height: 13 },
    md: { width: 120, height: 40 },
    lg: { width: 180, height: 60 }
  };

  const containerClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  const imageDimensions = variant === 'horizontal' 
    ? horizontalSizes[size]
    : { width: 80, height: 80 };

  return (
    <div className={`flex items-center gap-3 ${containerClasses[logoPosition]}`}>
      <span className="text-lg md:text-xl font-bold text-primary">
        PALM BEACHES
      </span>
      <Image
        src="/images/pbailogo.svg"
        alt="Palm Beaches AI"
        width={imageDimensions.width}
        height={imageDimensions.height}
        className={variant === 'vertical' ? sizeClasses[size] : ''}
      />
    </div>
  );
}