interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
}

export function ObfuscatedEmail({ user, domain, className = '' }: ObfuscatedEmailProps) {
  return (
    <span className={className}>
      <span style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}>
        {domain.split('').reverse().join('')}@{user.split('').reverse().join('')}
      </span>
    </span>
  );
}