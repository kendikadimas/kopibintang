import React from 'react';
import Image from 'next/image';
import { SITE_META, CONTACT, PILLARS, PRODUCT } from '@/lib/constants';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import BenefitItem from '@/components/ui/BenefitItem';
import GalleryGrid from '@/components/ui/GalleryGrid';
import DeliveryCarousel from '@/components/ui/DeliveryCarousel';

const PILLAR_ICONS = [
  // Leaf / Biji Kopi
  <svg key="leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>,
  // Flame / Roasting
  <svg key="flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>,
  // Truck / Distribusi
  <svg key="truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect width="15" height="13" x="1" y="5.5" rx="1" ry="1"/>
    <path d="M16 8.5h3.5l3 4v4h-6.5"/>
    <circle cx="5.5" cy="16.5" r="2.5"/>
    <circle cx="18.5" cy="16.5" r="2.5"/>
  </svg>,
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* ─── SECTION 1: HERO ───────────────────────────────────────────── */}
      <section className="relative flex items-center min-h-[100dvh] lg:h-[100dvh] overflow-hidden bg-espresso text-cream">

        {/* Ambient light glow blobs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] rounded-full bg-caramel/15 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-12 left-12 w-[300px] h-[300px] rounded-full bg-bark/10 blur-[90px] pointer-events-none z-0" />

        {/* Hero content: two-column layout placed 50% from the top on desktop, photo-first and flows naturally on mobile */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full relative lg:absolute lg:top-[56%] lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 z-10 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-8 pt-28 pb-8 lg:py-0">

          {/* LEFT: Text column */}
          <div className="flex flex-col items-start justify-center text-left gap-3.5 sm:gap-4 w-full lg:w-[55%] shrink-0">



            <h1 className="font-display text-[1.75rem] min-[375px]:text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.2rem] tracking-wide text-cream leading-[1.15] sm:leading-[1.1] lg:leading-[1.05]">
              Dari Tanah Lampung,<br />
              untuk Secangkir <em className="not-italic text-caramel">Tak Terlupakan</em>
            </h1>

            {/* Body copy */}
            <p className="font-body text-xs sm:text-sm md:text-base text-cream/70 max-w-sm leading-[1.7] mt-1 font-light">
              {SITE_META.description}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button 
                variant="primary" 
                href="/produk" 
                className="px-6 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm !bg-caramel !border-caramel hover:!bg-cream hover:!border-cream hover:!text-bark"
              >
                Lihat Produk Kami
              </Button>
              <Button 
                variant="outline" 
                href="/kontak" 
                className="px-6 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm !border-white/30 !text-cream hover:!bg-white/10 hover:!border-white/50"
              >
                Hubungi Kami
              </Button>
            </div>

          </div>

          {/* RIGHT: Editorial Image Showcase (Fully Responsive) */}
          <div className="flex-1 flex items-center justify-center relative w-full max-w-[300px] min-[375px]:max-w-xs sm:max-w-sm lg:max-w-[420px] xl:max-w-[460px] lg:my-0 my-8 group">
            {/* Decorative back offset border card for depth */}
            <div className="absolute inset-4 -right-2 -bottom-4 border-2 border-caramel/30 rounded-3xl z-0 transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            
            {/* Main image card container */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-parchment/10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-10 transition-transform duration-500 hover:-translate-y-1 hover:border-caramel/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/fotoprodukhero.webp"
                alt="Produk Kopi Bintang Pringsewu"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120B05]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-10" />
      </section>

      {/* ─── SECTION 2: TIGA PILAR ─────────────────────────────────────── */}

      <SectionWrapper background="cream" paddingY="lg">
        <div className="flex flex-col gap-12">
          <SectionHeading
            title="Kualitas yang Berbicara Sendiri"
            align="left"
          />

          {/* Cards — 8pt spacing rhythm, GPU-only hover lift via card-hover class */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((pillar, i) => (
              <BenefitItem
                key={i}
                icon={PILLAR_ICONS[i]}
                title={pillar.title}
                description={pillar.description}
                variant="card"
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
      {/* ─── SECTION 3: PRODUK UNGGULAN ────────────────────────────────── */}
      <SectionWrapper background="dark" className="!bg-bark" paddingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Product Image Card */}
          <div className="relative aspect-[3/4] w-full max-w-sm lg:max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/images/produkkopi.webp"
              alt={PRODUCT.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120B05]/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Simple Text Section */}
          <div className="flex flex-col items-start gap-5">


            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight tracking-wide">
              {PRODUCT.name}
            </h2>

            <p className="font-body text-sm text-cream/70 italic leading-relaxed border-l-2 border-caramel pl-4">
              &ldquo;{PRODUCT.tagline}&rdquo;
            </p>

            <p className="font-body text-sm text-cream/70 leading-[1.8] font-light max-w-md">
              Diproses secara higienis oleh {SITE_META.company} di fasilitas kami di {CONTACT.addressShort}. Setiap
              batch dijaga kualitasnya demi konsistensi rasa kopi Lampung murni klasik yang
              tebal dan memanjakan indra.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button 
                variant="primary" 
                href="/kontak" 
                className="!bg-caramel !border-caramel !text-cream hover:!bg-cream hover:!border-cream hover:!text-bark min-h-[44px] px-8 cursor-pointer shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Beli Sekarang
              </Button>
              <Button 
                variant="outline" 
                href="/produk" 
                className="!border-cream !text-cream hover:!bg-cream hover:!text-bark min-h-[44px] px-8 cursor-pointer transition-colors"
              >
                Lihat Detail Produk
              </Button>
            </div>
          </div>
          
        </div>
      </SectionWrapper>

      {/* ─── SECTION 4: KEMITRAAN ─────────────────────────────────────── */}
      <SectionWrapper background="dark" paddingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Main copy */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">


            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight tracking-wide">
              Kembangkan Bisnis Anda<br />
              Bersama Kopi Bintang Pringsewu
            </h2>

            <p className="font-body text-sm text-cream/65 leading-[1.8] font-light max-w-xl">
              Jika Anda mencari produk kopi dengan demand tinggi dan dukungan rantai pasok yang stabil, Kopi Bintang Pringsewu kini membuka peluang distribusi eksklusif untuk wilayah Anda. Dengan kapasitas produksi yang progresif, kami siap mendukung stok retail Anda tanpa kendala.
            </p>

            <Button variant="primary" href="/kemitraan" className="mt-2 min-h-[44px] cursor-pointer">
              Pelajari Kemitraan
            </Button>
          </div>

          {/* Pull quote / highlight */}
          <div className="lg:col-span-5 lg:pl-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 flex flex-col gap-4">

            {/* Large editorial quotemark */}
            <blockquote className="font-display text-2xl md:text-3xl text-cream/90 leading-snug tracking-wide">
              &ldquo;Bertumbuh bersama dalam jaringan distribusi kami.&rdquo;
            </blockquote>
            <p className="font-body text-xs text-cream/45 leading-relaxed font-light">
              Mari bicara tentang potensi kolaborasi kita untuk menghadirkan pengalaman kopi autentik ke pasar yang lebih luas.
            </p>
          </div>

        </div>

        {/* Carousel Delivery */}
        {/* Carousel Delivery */}
        <div className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-white/10 w-full overflow-hidden">
          <DeliveryCarousel />
        </div>
      </SectionWrapper>

      {/* ─── SECTION 5: CTA (Premium Card Layout) ────────────────────── */}
      <SectionWrapper background="cream" paddingY="lg" className="text-center">
        <div className="bg-gradient-to-br from-roast via-espresso to-[#120B05] text-cream rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl max-w-4xl mx-auto relative overflow-hidden border border-caramel/15 group hover:border-caramel/25 transition-all duration-500 grain">
          
          {/* Subtle background decorative shapes for premium look */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-caramel/10 blur-[80px] pointer-events-none z-0" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-bark/20 blur-[80px] pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-caramel/5 blur-[120px] pointer-events-none z-0" />

          {/* Premium dashed blending rings SVG background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
            <svg className="w-full h-full scale-[1.3] sm:scale-[1.1]" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="200" r="150" stroke="#C8895A" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="400" cy="200" r="240" stroke="#C8895A" strokeWidth="0.5" />
              <circle cx="400" cy="200" r="320" stroke="#C8895A" strokeWidth="0.5" strokeDasharray="12 6" />
            </svg>
          </div>
          
          <div className="flex flex-col items-center gap-5 max-w-2xl mx-auto relative z-10">


            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.2] tracking-wide">
              Siap Menjadi Bagian dari <em className="not-italic text-caramel font-serif">Perjalanan Kami</em>?
            </h2>
            
            <p className="font-body text-xs sm:text-sm text-cream/70 leading-[1.8] max-w-xl mx-auto font-light">
              Hubungi kami sekarang untuk mendiskusikan peluang distribusi, ketersediaan stok retail, atau potensi kemitraan strategis dengan Kopi Bintang Pringsewu.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 w-full sm:w-auto">
              <Button 
                variant="primary" 
                href="/kontak" 
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm !bg-caramel !border-caramel !text-espresso hover:!bg-cream hover:!border-cream hover:!text-espresso shadow-lg hover:shadow-caramel/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Hubungi Kami Sekarang
              </Button>
              <Button 
                variant="outline" 
                href="/kemitraan" 
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm !border-white/15 !text-cream hover:!bg-white/5 hover:!border-white/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Pelajari Kemitraan
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}
