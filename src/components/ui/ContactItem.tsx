import React from 'react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;     // untuk WhatsApp — tampil lebih prominent
}

export default function ContactItem({
  icon,
  label,
  value,
  href,
  highlight = false,
}: ContactItemProps) {
  const content = (
    <>
      <div className={`p-3 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
        highlight 
          ? 'bg-bark text-cream group-hover:bg-roast' 
          : 'bg-parchment text-bark group-hover:bg-bark/10'
      }`}>
        {icon}
      </div>
      <div className="flex flex-col text-left gap-1 min-w-0">
        <span className="font-body font-medium text-[9px] sm:text-[10px] tracking-wider uppercase text-muted truncate">
          {label}
        </span>
        <span className={`font-body font-medium transition-colors duration-300 text-xs sm:text-sm md:text-base break-words ${
          highlight 
            ? 'text-bark group-hover:text-caramel font-semibold' 
            : 'text-ink group-hover:text-bark'
        }`}>
          {value}
        </span>
      </div>
    </>
  );

  const wrapperClass = `flex items-center gap-4 p-6 transition-all duration-300 border text-left group rounded-2xl shadow-sm hover:shadow-md ${
    highlight 
      ? 'bg-white border-bark/60 hover:border-caramel' 
      : 'bg-white border-fog/60 hover:border-bark/30'
  }`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('wa.me') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={wrapperClass}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={wrapperClass}>
      {content}
    </div>
  );
}
