'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

export default function DeliveryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h3 className="font-display text-2xl md:text-3xl text-cream">Pengiriman ke Seluruh Indonesia</h3>
        
        <div className="flex items-center gap-6">
          <span className="font-body text-xs text-cream/50 uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
            Distribusi Terjadwal
          </span>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream hover:bg-white/10 hover:border-white/40 transition-colors"
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream hover:bg-white/10 hover:border-white/40 transition-colors"
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scrollable Container */}
      <div className="-mx-4 px-4 sm:mx-0 sm:px-0 relative">
        {/* Hide scrollbar using inline style for cross-browser compatibility */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory hide-scroll"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="flex-none w-[260px] md:w-[320px] aspect-[4/3] relative rounded-2xl overflow-hidden snap-start border border-white/5 shadow-2xl group cursor-pointer">
              <Image
                src={`/images/delivery${i === 1 ? '' : i}.webp`}
                alt={`Pengiriman ${i}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle overlay that clears on hover */}
              <div className="absolute inset-0 bg-bark/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
