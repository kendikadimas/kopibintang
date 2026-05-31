import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface ProductCardProps {
  image: string;
  name: string;
  tagline: string;
  specs: { label: string; value: string }[];
  href?: string;
}

export default function ProductCard({ image, name, tagline, specs, href }: ProductCardProps) {
  return (
    <div className="card-hover bg-white border border-fog/50 rounded-2xl overflow-hidden flex flex-col h-full group">

      {/* Image — GPU-only scale, correct aspect ratio */}
      <div className="relative aspect-[4/5] bg-parchment overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority
        />
        {/* Bottom-to-top fade for text readability if overlaid */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-40" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-xl md:text-2xl tracking-wide text-ink group-hover:text-bark transition-colors duration-200 leading-tight">
            {name}
          </h3>
          <p className="font-body text-xs italic text-muted leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Specs table */}
        <div className="flex flex-col bg-cream rounded-xl border border-fog/30 overflow-hidden mt-1">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="flex justify-between items-start px-4 py-2.5 border-b border-fog/20 last:border-b-0 gap-4"
            >
              <span className="font-body text-[10px] font-semibold text-muted uppercase tracking-widest shrink-0">
                {spec.label}
              </span>
              <span className="font-body text-xs text-ink text-right leading-snug">
                {spec.value || '—'}
              </span>
            </div>
          ))}
        </div>

        {href && (
          <div className="mt-auto pt-2">
            <Button variant="primary" href={href} className="w-full">
              Lihat Detail
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
