import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleSize?: 'lg' | 'xl' | '2xl';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  titleSize = 'xl',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  const titleSizes: Record<string, string> = {
    lg:  'text-2xl sm:text-3xl md:text-4xl',
    xl:  'text-3xl sm:text-4xl md:text-[2.75rem]',
    '2xl':'text-4xl sm:text-5xl md:text-6xl',
  };

  return (
    <div className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center mx-auto' : 'items-start text-left'} max-w-3xl ${isCenter ? 'w-full' : ''}`}>
      <h2 className={`font-display font-medium tracking-wide leading-[1.12] text-current ${titleSizes[titleSize]}`}>
        {title}
      </h2>

      {subtitle && (
        <p className="font-body text-sm md:text-base text-muted mt-1 leading-[1.75] font-light max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
