import React from 'react';

interface StepItemProps {
  number: string;          // "01", "02", dst
  title: string;
  description: string;
  isLast?: boolean;
}

export default function StepItem({
  number,
  title,
  description,
  isLast = false,
}: StepItemProps) {
  return (
    <div className="flex gap-4 sm:gap-6 w-full group items-start">
      {/* Left indicator column with circular badge and vertical line */}
      <div className="flex flex-col items-center h-full">
        <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bark text-cream group-hover:bg-caramel transition-all duration-300 flex items-center justify-center font-body font-medium text-xs md:text-sm font-bold shadow-sm select-none shrink-0">
          {number}
        </span>
        {!isLast && (
          <div className="w-[2px] h-[70px] md:h-[60px] bg-fog/60 my-2 group-hover:bg-caramel/40 transition-colors duration-500 shrink-0" />
        )}
      </div>

      {/* Content Column wrapped in a modern rounded card */}
      <div className="flex flex-col gap-2 p-5 sm:p-6 bg-white border border-fog/50 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 text-left w-full">
        <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-ink group-hover:text-bark transition-colors duration-300">
          {title}
        </h3>
        <p className="font-body text-xs sm:text-sm text-muted leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
