'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

interface EmailRevealProps {
  user: string;
  domain: string;
  className?: string;
}

export function EmailReveal({ user, domain, className = '' }: EmailRevealProps) {
  const [showEmail, setShowEmail] = useState(false);
  
  const email = `${user}@${domain}`;
  
  if (showEmail) {
    return (
      <a 
        href={`mailto:${email}`}
        className={`text-accent hover:text-accent/80 transition-colors ${className}`}
      >
        {email}
      </a>
    );
  }
  
  return (
    <button
      onClick={() => setShowEmail(true)}
      className={`inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors ${className}`}
    >
      <Mail className="h-4 w-4" />
      <span>Click to reveal email</span>
    </button>
  );
}