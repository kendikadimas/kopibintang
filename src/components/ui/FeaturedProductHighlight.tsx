import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { PRODUCT, CONTACT } from '@/lib/constants';

export default function FeaturedProductHighlight() {
  return (
    <SectionWrapper background="dark" className="!bg-bark overflow-hidden" paddingY="xl">
      
      {/* Header Section */}
      <div className="flex flex-col items-center mb-16 lg:mb-24 relative z-10">
        <div className="flex items-center gap-3 text-caramel mb-4">
          <span className="inline-block w-8 h-px bg-current" />
          <span className="font-body text-[10px] tracking-[0.3em] uppercase font-semibold">
            Produk Unggulan
          </span>
          <span className="inline-block w-8 h-px bg-current" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-tight tracking-wide text-center max-w-2xl">
          {PRODUCT.name}
        </h2>
        <p className="font-body text-cream/70 mt-6 text-center max-w-xl leading-relaxed">
          {PRODUCT.tagline} Diproses secara higienis di {CONTACT.addressShort} demi konsistensi rasa kopi Lampung murni klasik yang tebal.
        </p>
      </div>

      {/* 3-Column Features Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Feature Cards */}
        <div className="flex flex-col gap-12 lg:gap-20 order-2 lg:order-1 lg:pr-10">
          <div className="text-center lg:text-right flex flex-col items-center lg:items-end group">
            <span className="font-display text-4xl md:text-5xl text-caramel/20 mb-2 group-hover:text-caramel/40 transition-colors duration-500">01</span>
            <h3 className="font-display text-2xl text-cream mb-3">100% Robusta Asli</h3>
            <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs">Biji kopi pilihan terbaik dari dataran tinggi Lampung, dipetik pada tingkat kematangan sempurna.</p>
          </div>
          <div className="text-center lg:text-right flex flex-col items-center lg:items-end group">
            <span className="font-display text-4xl md:text-5xl text-caramel/20 mb-2 group-hover:text-caramel/40 transition-colors duration-500">02</span>
            <h3 className="font-display text-2xl text-cream mb-3">Roasting Klasik</h3>
            <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs">Diproses dengan profil sangrai tradisional yang menghasilkan rasa tebal, pekat, dan otentik.</p>
          </div>
        </div>

        {/* Center Product Image */}
        <div className="relative aspect-square flex items-center justify-center order-1 lg:order-2 group py-8 lg:py-0">
          {/* Solid Latte colored circle background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C8B092] rounded-full transition-transform duration-700 group-hover:scale-105" />
          
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/herocoffee.svg"
            alt={PRODUCT.name}
            className="relative z-10 w-full h-auto object-contain transform scale-[2.5] lg:scale-[3.6] transition-transform duration-700 group-hover:scale-[2.6] lg:group-hover:scale-[3.8]"
          />
        </div>

        {/* Right Feature Cards */}
        <div className="flex flex-col gap-12 lg:gap-20 order-3 lg:order-3 lg:pl-10">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start group">
            <span className="font-display text-4xl md:text-5xl text-caramel/20 mb-2 group-hover:text-caramel/40 transition-colors duration-500">03</span>
            <h3 className="font-display text-2xl text-cream mb-3">Tanpa Pengawet</h3>
            <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs">Murni dari alam tanpa campuran esens atau bahan kimia tambahan apapun untuk kesehatan Anda.</p>
          </div>
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start group">
            <span className="font-display text-4xl md:text-5xl text-caramel/20 mb-2 group-hover:text-caramel/40 transition-colors duration-500">04</span>
            <h3 className="font-display text-2xl text-cream mb-3">Aroma Terjaga</h3>
            <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs">Dikemas secara higienis dan rapat untuk mengunci kesegaran serta aroma kopi yang membangkitkan semangat.</p>
          </div>
        </div>

      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-16 lg:mt-24 relative z-10">
        <Button variant="primary" href="/produk/" className="px-10 py-4 text-sm cursor-pointer shadow-2xl hover:-translate-y-1 transition-transform">
          Lihat Produk Lengkap
        </Button>
      </div>
      
    </SectionWrapper>
  );
}
