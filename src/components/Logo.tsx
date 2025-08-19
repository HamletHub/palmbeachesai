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

  const containerClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  return (
    <div className={`flex items-center gap-3 ${containerClasses[logoPosition]}`}>
      <span className="text-lg md:text-xl font-bold text-primary">
        PALM BEACHES
      </span>
      <Image
        src="/images/pbailogo.svg"
        alt="Palm Beaches AI"
        width={variant === 'horizontal' ? 120 : 80}
        height={variant === 'horizontal' ? 40 : 80}
        className={variant === 'vertical' ? sizeClasses[size] : ''}
      />
    </div>
  );
}