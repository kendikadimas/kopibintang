import React from 'react';

interface BenefitItemProps {
  icon?: React.ReactNode;   // SVG icon kecil, bukan emoji
  title: string;
  description: string;
  variant?: 'card' | 'inline';
}

export default function BenefitItem({
  icon,
  title,
  description,
  variant = 'inline',
}: BenefitItemProps) {
  if (variant === 'card') {
    return (
      <div className="card-hover bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-white/5 hover:border-caramel/30 px-6 py-7 md:px-8 md:py-8 flex flex-col items-start gap-4 rounded-3xl group text-left cursor-default relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-caramel/5 blur-xl group-hover:bg-caramel/10 transition-all duration-500 pointer-events-none z-0" />

        {icon && (
          <div className="w-8 h-8 text-white group-hover:text-caramel transition-colors duration-300 mb-1.5 shrink-0 relative z-10">
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-2 relative z-10">
          <h3 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider group-hover:text-caramel transition-colors duration-300">
            {title}
          </h3>
          <p className="font-body text-xs md:text-sm text-cream/70 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 w-full text-left group">
      {/* Clean modern layout divider */}
      <div className="h-[2px] w-12 bg-bark group-hover:w-20 group-hover:bg-caramel transition-all duration-300" />
      {icon && <div className="text-bark w-6 h-6">{icon}</div>}
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl font-semibold text-ink leading-tight">
          {title}
        </h3>
        <p className="font-body text-xs md:text-sm text-muted leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
