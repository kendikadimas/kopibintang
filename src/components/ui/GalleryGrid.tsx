import React from 'react';
import Image from 'next/image';

interface GalleryGridProps {
  images: { src: string; alt: string; caption?: string }[];
  columns?: 2 | 3 | 4;
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const colStyles: Record<number, string> = {
    2: 'grid-cols-1 md:grid-cols-2 gap-6 md:gap-8',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5',
  };

  return (
    <div className={`grid ${colStyles[columns]} w-full`}>
      {images.map((img, i) => (
        <div key={i} className="flex flex-col gap-3 group">
          {/* Image container — GPU-only hover scale, no layout shift */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-fog/30">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* Hover scrim — adds atmospheric depth */}
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/15 transition-colors duration-500" />
          </div>

          {img.caption && (
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted group-hover:text-bark transition-colors duration-300">
              {img.caption}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
