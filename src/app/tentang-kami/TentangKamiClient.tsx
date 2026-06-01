'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CONTACT, SITE_META, ABOUT_COMPANY, COMPANY_VALUES } from '@/lib/constants';
import Button from '@/components/ui/Button';

type TabKey = 'visi' | 'misi';

export default function TentangKamiClient() {
  const [activeTab, setActiveTab] = useState<TabKey>('visi');

  // SVG Icons for values (Principles)
  const valueIcons = [
    // Keaslian
    <svg key="original" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>,
    // Konsistensi
    <svg key="consistency" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>,
    // Kemitraan
    <svg key="partnership" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ];

  return (
    <div className="flex flex-col w-full bg-cream text-espresso overflow-x-hidden">
      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[100dvh] flex items-end bg-espresso overflow-hidden pb-20 md:pb-28">
        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/about_farmers.png"
            alt="Petani Kopi Mitra Kopi Bintang Pringsewu"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          {/* Dual gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/50" />
        </div>

        {/* Ambient light glow */}
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[400px] rounded-full bg-caramel/15 blur-[130px] pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-4 animate-slide-left">
          <div className="max-w-2xl flex flex-col gap-4">

            
            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] tracking-wide">
              Secangkir Kopi,<br />
              <em className="not-italic text-caramel">Kisah Dedikasi</em> dari Lampung
            </h1>
            
            {/* Sub */}
            <p className="font-body text-sm md:text-base text-cream/65 leading-[1.85] max-w-lg font-light">
              Menelusuri jejak dedikasi dari kebun subur Lampung hingga ke cangkir seduh Anda, kami menjaga setiap butir kopi dengan integritas tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — CERITA PERUSAHAAN (EDITORIAL STORY)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-cream py-20 md:py-28 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7 flex flex-col gap-5 items-start text-left animate-slide-left">

              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso tracking-wide leading-tight">
                Kisah di Balik<br />Kopi Bintang Pringsewu
              </h2>

              {/* Bold Accent Blockquote */}
              <div className="border-l-4 border-caramel pl-5 py-1 my-2">
                <p className="font-display text-lg sm:text-xl italic text-bark/90 leading-relaxed font-medium">
                  &ldquo;Dari komitmen sederhana di Adiluwih, kami merawat setiap biji kopi dengan penuh hormat demi menjaga warisan cita rasa Lampung tetap hidup.&rdquo;
                </p>
              </div>

              <div className="font-body text-sm text-espresso/60 leading-[1.8] font-light space-y-4 max-w-xl">
                {ABOUT_COMPANY.story.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="indent-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Offset Media Frame */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 animate-slide-right">
              {/* Decorative back-panel offset border card */}
              <div className="absolute inset-4 -right-2 -bottom-4 border-2 border-caramel/30 rounded-3xl z-0" />
              
              {/* Main image container */}
              <div className="relative aspect-[4/5] bg-fog/20 overflow-hidden border border-fog/40 rounded-3xl shadow-xl z-10 group card-hover shimmer-on-hover">
                <Image
                  src="/images/production_gallery_1.png"
                  alt="Proses Sangrai Biji Kopi Bintang"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual shade overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-80" />
                
                {/* Floating glassmorphic tag */}
                {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-cream flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-caramel font-semibold block mb-0.5">Produksi Lokal</span>
                    <span className="font-display text-base font-semibold">Mutu Terjamin</span>
                  </div> */}
                  {/* <span className="font-mono text-xs text-cream/70 bg-white/15 px-3 py-1.5 rounded-lg border border-white/10">
                    Sejak {SITE_META.establishedYear}
                  </span> */}
                {/* </div> */}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — VISI & MISI (DARK IMMERSIVE TABS)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-roast text-cream py-20 md:py-28 lg:py-32 relative overflow-hidden">
        {/* Glow effect in background */}
        <div className="absolute -bottom-24 right-10 w-[350px] h-[350px] rounded-full bg-caramel/10 blur-[100px] pointer-events-none" />
        <div className="absolute -top-24 left-10 w-[300px] h-[300px] rounded-full bg-bark/5 blur-[80px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          {/* Centered Heading */}
          <div className="flex flex-col gap-2 mb-10">

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-cream tracking-wide">
              Masa Depan yang Kami Tuju
            </h2>
          </div>

          {/* Tab Bar */}
          <div className="border-b border-white/10 mb-10">
            <div className="flex gap-2 overflow-x-auto hide-scroll -mb-px">
              <button
                onClick={() => setActiveTab('visi')}
                className={`tab-underline ${activeTab === 'visi' ? 'active' : ''} font-body text-xs sm:text-sm font-semibold tracking-wide px-5 py-4 whitespace-nowrap transition-colors duration-200 border-b-2 ${
                  activeTab === 'visi'
                    ? 'text-caramel border-caramel'
                    : 'text-cream/40 border-transparent hover:text-cream/70'
                }`}
              >
                Visi Perusahaan
              </button>
              <button
                onClick={() => setActiveTab('misi')}
                className={`tab-underline ${activeTab === 'misi' ? 'active' : ''} font-body text-xs sm:text-sm font-semibold tracking-wide px-5 py-4 whitespace-nowrap transition-colors duration-200 border-b-2 ${
                  activeTab === 'misi'
                    ? 'text-caramel border-caramel'
                    : 'text-cream/40 border-transparent hover:text-cream/70'
                }`}
              >
                Misi Operasional
              </button>
            </div>
          </div>

          {/* Interactive Content Container */}
          <div className="relative min-h-[280px] w-full flex items-center">
            
            {/* Tab: Visi */}
            {activeTab === 'visi' && (
              <div className="w-full bg-espresso border border-white/10 p-8 sm:p-12 rounded-2xl shadow-md animate-fade-up relative overflow-hidden grain">
                {/* Decorative Large Quote Marks in Background */}
                <span className="absolute top-2 left-6 text-[150px] font-display text-white/5 select-none pointer-events-none leading-none">
                  &ldquo;
                </span>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <span className="font-mono text-[9px] tracking-widest text-caramel uppercase font-bold mb-4">Visi Utama</span>
                  <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-cream leading-relaxed max-w-3xl font-light">
                    &ldquo;{ABOUT_COMPANY.vision}&rdquo;
                  </p>
                  <div className="w-8 h-0.5 bg-caramel/40 my-6" />
                  <p className="font-body text-xs sm:text-sm text-cream/60 max-w-xl leading-relaxed">
                    Kami berkomitmen untuk melebarkan pasar kopi Lampung tanpa melupakan kelestarian ekosistem kopi lokal dan kesejahteraan para petani yang mendukung kami.
                  </p>
                </div>

                <span className="absolute bottom-2 right-6 text-[150px] font-display text-white/5 select-none pointer-events-none leading-none">
                  &rdquo;
                </span>
              </div>
            )}

            {/* Tab: Misi */}
            {activeTab === 'misi' && (
              <div className="w-full animate-fade-up grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {ABOUT_COMPANY.missions.map((mission, index) => (
                  <div 
                    key={index} 
                    className="bg-espresso border border-white/10 p-8 rounded-2xl shadow-md flex flex-col justify-between gap-6 card-hover group"
                  >
                    <div className="flex flex-col gap-4">
                      {/* Icon box */}
                      <div className="w-10 h-10 rounded-lg bg-caramel/10 border border-caramel/20 flex items-center justify-center font-mono text-xs text-caramel font-bold group-hover:bg-caramel group-hover:text-cream transition-colors duration-300">
                        0{index + 1}
                      </div>
                      <p className="font-body text-xs sm:text-sm text-cream/75 leading-relaxed font-light">
                        {mission}
                      </p>
                    </div>
                    
                    {/* Visual bottom indicator bar */}
                    <div className="w-8 h-0.5 bg-white/10 group-hover:w-full group-hover:bg-caramel transition-all duration-500" />
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — PRINSIP KERJA (EDITORIAL TIMELINE SHOWCASE)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-cream py-20 md:py-28 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left sticky column */}
            <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-28 text-left animate-slide-left">

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso tracking-wide leading-tight">
                Nilai Utama yang<br />Kami Pegang
              </h2>
              <p className="font-body text-sm text-espresso/60 leading-[1.8] font-light max-w-md">
                Dalam setiap keputusan bisnis, proses pemanggangan, dan relasi mitra, ketiga pilar utama ini menjadi jangkar komitmen kami.
              </p>
              
              {/* Graphic Star Element decoration */}
              <div className="hidden lg:block mt-8 w-24 h-24 text-caramel/25 animate-pulse">
                <svg className="w-full h-full stroke-current fill-none" strokeWidth={1} viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
                </svg>
              </div>
            </div>

            {/* Right stacked timeline column */}
            <div className="lg:col-span-7 relative flex flex-col gap-8 text-left animate-slide-right">
              {/* Vertical timeline connector line */}
              <div className="absolute left-[34px] top-8 bottom-8 w-0.5 bg-fog/60 z-0" />

              {COMPANY_VALUES.map((value, i) => (
                <div 
                  key={i} 
                  className="relative z-10 flex gap-6 sm:gap-8 items-start bg-white border border-fog/50 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Decorative index bubble acting as timeline node */}
                  <div className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] shrink-0 rounded-2xl bg-cream border border-fog flex items-center justify-center font-display text-base sm:text-lg font-bold text-bark group-hover:bg-caramel group-hover:text-cream group-hover:border-caramel transition-all duration-300 z-10 shadow-sm">
                    {i === 0 ? 'I' : i === 1 ? 'II' : 'III'}
                  </div>

                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-fog/30 pb-3">
                      <h3 className="font-display text-xl sm:text-2xl text-espresso tracking-wide leading-none group-hover:text-bark transition-colors duration-300">
                        {value.title}
                      </h3>
                      {/* Mini visual icon tag */}
                      <span className="w-8 h-8 rounded-lg bg-caramel/5 border border-caramel/10 flex items-center justify-center text-caramel">
                        {valueIcons[i]}
                      </span>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-espresso/60 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — AJAKAN UNTUK BERMITRA (B2B CTA SECTION)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-parchment relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          
          <div className="bg-gradient-to-br from-roast via-espresso to-[#120B05] text-cream rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden border border-caramel/15 group hover:border-caramel/25 transition-all duration-500 grain">
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
              <div className="flex items-center gap-3 text-caramel">
                <span className="w-6 h-px bg-current" />
                <span className="font-body text-[10px] tracking-[0.3em] uppercase font-bold">Kolaborasi Bisnis</span>
                <span className="w-6 h-px bg-current" />
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.2] tracking-wide">
                Kembangkan Usaha Anda <br className="hidden sm:inline" />
                Sebagai <em className="not-italic text-caramel font-serif">Mitra Resmi</em> Kami
              </h2>

              <p className="font-body text-xs sm:text-sm text-cream/70 leading-[1.8] max-w-xl mx-auto font-light">
                Bergabunglah bersama jaringan keagenan dan distribusi Kopi Bintang Pringsewu. Dapatkan manfaat eksklusivitas wilayah pemasaran, harga khusus grosir, serta jaminan ketersediaan stok produk kopi Robusta Lampung yang konsisten.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
                <Button
                  variant="primary"
                  href="/kemitraan"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm !bg-caramel !border-caramel !text-espresso hover:!bg-cream hover:!border-cream hover:!text-espresso shadow-lg hover:shadow-caramel/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Pelajari Peluang Kemitraan
                </Button>
                <Button
                  variant="outline"
                  href="/kontak"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm !border-white/15 !text-cream hover:!bg-white/5 hover:!border-white/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Hubungi Kontak Kami
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
