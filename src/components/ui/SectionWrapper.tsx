import React from 'react';

interface SectionWrapperProps {
  id?: string;
  background?: 'cream' | 'parchment' | 'dark' | 'white' | 'caramel';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  background = 'cream',
  paddingY = 'lg',
  children,
  className = '',
}: SectionWrapperProps) {
  const bgStyles: Record<string, string> = {
    cream:    'bg-cream text-ink',
    parchment:'bg-parchment text-ink',
    // Slightly warmer dark (roast) instead of pure espresso for more visual warmth
    dark:     'bg-roast text-cream',
    white:    'bg-white text-ink',
    caramel:  'bg-caramel text-bark',
  };

  // 8pt rhythm: sm=32/48, md=48/64, lg=64/96, xl=80/128
  const padStyles: Record<string, string> = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24 lg:py-28',
    xl: 'py-20 md:py-32',
  };

  return (
    <section
      id={id}
      className={`w-full ${bgStyles[background]} ${padStyles[paddingY]} ${className}`}
    >
      {/* Max-w-6xl for content density control, generous horizontal padding */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        {children}
      </div>
    </section>
  );
}
