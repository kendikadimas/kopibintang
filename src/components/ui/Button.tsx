import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant,
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  // Base: inline-flex, font, cursor, focus ring for keyboard accessibility
  const base = [
    'inline-flex items-center justify-center',
    'font-body font-semibold tracking-widest uppercase',
    'rounded-full',
    'cursor-pointer select-none',
    // Focus ring for keyboard nav (§1 Accessibility)
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel focus-visible:ring-offset-2',
    // GPU-only transition
    'transition-colors duration-200 ease-out',
  ].join(' ');

  // 8pt sizing scale, min-height ≥44px for touch targets (§2 Touch)
  const sizes: Record<string, string> = {
    sm: 'px-5 py-2 text-[11px] min-h-[40px]',
    md: 'px-7 py-3 text-[11px] md:text-xs min-h-[44px]',
    lg: 'px-9 py-4 text-xs md:text-sm min-h-[48px]',
  };

  const variants: Record<string, string> = {
    primary: 'bg-bark text-cream border border-bark hover:bg-roast hover:border-roast',
    outline: 'bg-transparent border border-bark text-bark hover:bg-bark hover:text-cream',
    ghost:   'bg-transparent border-none text-muted hover:text-bark underline rounded-none px-0 py-0 min-h-0',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = /^(https?:\/\/|\/\/|wa\.me|mailto:)/.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={classes} onClick={onClick}>{children}</Link>;
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
