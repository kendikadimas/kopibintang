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
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-cream flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-caramel font-semibold block mb-0.5">Produksi Lokal</span>
                    <span className="font-display text-base font-semibold">Mutu Terjamin</span>
                  </div>
                  <span className="font-mono text-xs text-cream/70 bg-white/15 px-3 py-1.5 rounded-lg border border-white/10">
                    Sejak {SITE_META.establishedYear}
                  </span>
                </div>
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
          SECTION 5 — PROFIL PERUSAHAAN & LEGALITAS (COFFEE-TONED CREDENTIALS DASHBOARD)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-parchment relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col gap-3 max-w-xl text-left mb-12 lg:mb-16">

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso tracking-wide leading-tight">
              Legalitas & Lokasi Operasional
            </h2>
            <p className="font-body text-sm text-espresso/60 leading-[1.8] font-light">
              Sebagai produsen terpercaya, kami beroperasi dengan izin hukum resmi untuk menjamin keamanan transaksi B2B dan konsumsi produk.
            </p>
          </div>

          {/* Interactive B2B Dashboard Layout (Strictly Coffee Tones) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Credentials Dashboard */}
            <div className="lg:col-span-8 flex flex-col gap-6 animate-slide-left">
              <div className="bg-white border border-fog/50 rounded-3xl p-6 sm:p-8 shadow-md h-full flex flex-col gap-6 justify-between">
                
                {/* Dashboard top bar - styled in muted/caramel coffee tones */}
                <div className="flex items-center justify-between border-b border-fog/30 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-caramel animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-bold">Status Hub: Aktif & Terdaftar</span>
                  </div>
                  <span className="font-mono text-[9px] text-bark bg-parchment border border-fog px-2 py-0.5 rounded font-bold">
                    CV. HBM TUNGGAL
                  </span>
                </div>

                {/* Dashboard grid cards - styled in warm parchment/fog/caramel tones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: Nama CV */}
                  <div className="bg-cream/40 border border-fog/40 p-5 rounded-2xl flex flex-col justify-between gap-4 hover:border-caramel/30 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-muted font-bold">Badan Usaha</span>
                      <span className="w-6 h-6 rounded-lg bg-caramel/10 flex items-center justify-center text-bark">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-espresso leading-snug">
                        {SITE_META.company}
                      </h4>
                      <span className="inline-block mt-2 font-mono text-[8px] text-bark bg-parchment border border-fog px-2.5 py-0.5 rounded-full font-semibold">
                        Terverifikasi Kemenkumham
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Merek */}
                  <div className="bg-cream/40 border border-fog/40 p-5 rounded-2xl flex flex-col justify-between gap-4 hover:border-caramel/30 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-muted font-bold">Merek Dagang</span>
                      <span className="w-6 h-6 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-espresso leading-snug">
                        {SITE_META.name}
                      </h4>
                      <span className="inline-block mt-2 font-mono text-[8px] text-caramel bg-cream border border-fog/60 px-2.5 py-0.5 rounded-full font-semibold">
                        Terdaftar Dirjen KI
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Tahun & Bidang */}
                  <div className="bg-cream/40 border border-fog/40 p-5 rounded-2xl flex flex-col justify-between gap-4 hover:border-caramel/30 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-muted font-bold">Mulai Beroperasi</span>
                      <span className="w-6 h-6 rounded-lg bg-caramel/10 flex items-center justify-center text-bark">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-espresso leading-snug">
                        Tahun {SITE_META.establishedYear}
                      </h4>
                      <span className="inline-block mt-2 font-mono text-[8px] text-bark bg-parchment border border-fog px-2.5 py-0.5 rounded-full font-semibold">
                        Konsistensi Produksi
                      </span>
                    </div>
                  </div>

                  {/* Card 4: Kategori Bisnis */}
                  <div className="bg-cream/40 border border-fog/40 p-5 rounded-2xl flex flex-col justify-between gap-4 hover:border-caramel/30 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-muted font-bold">Kategori Sektor</span>
                      <span className="w-6 h-6 rounded-lg bg-caramel/10 flex items-center justify-center text-caramel">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-espresso leading-snug">
                        Manufaktur Kopi & Maklon
                      </h4>
                      <span className="inline-block mt-2 font-mono text-[8px] text-caramel bg-cream border border-fog/60 px-2.5 py-0.5 rounded-full font-semibold">
                        B2B & B2C Ready
                      </span>
                    </div>
                  </div>

                </div>

                {/* Dashboard bottom bar info */}
                <div className="text-left font-body text-[10px] text-muted leading-relaxed pt-2 border-t border-fog/30 flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-caramel shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    Seluruh berkas legalitas seperti P-IRT, Sertifikat Halal, dan Akta Notaris Pendirian CV dapat ditunjukkan atas permintaan resmi untuk keperluan kerjasama distribusi (MoU).
                  </span>
                </div>

              </div>
            </div>

            {/* Right Column: Address Card */}
            <div className="lg:col-span-4 flex flex-col animate-slide-right">
              <div className="bg-white border border-fog/50 p-8 rounded-3xl shadow-md flex flex-col justify-between items-start gap-8 text-left h-full group hover:border-caramel/40 transition-colors duration-300">
                
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-caramel/10 border border-caramel/20 flex items-center justify-center text-caramel">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted font-bold block mb-0.5">Operasional & Workshop</span>
                      <h3 className="font-display text-xl text-espresso font-semibold">Lokasi Produksi</h3>
                    </div>
                  </div>

                  <div className="w-full h-px bg-fog/30" />
                  
                  <div className="flex flex-col gap-4">
                    <div>
                      <strong className="block text-ink font-semibold uppercase tracking-wider text-[9px] font-mono mb-1.5">Pabrik & Gudang Utama:</strong>
                      <p className="font-body text-xs sm:text-sm text-muted leading-relaxed font-light">
                        {CONTACT.address}
                      </p>
                    </div>

                    <div>
                      <strong className="block text-ink font-semibold uppercase tracking-wider text-[9px] font-mono mb-1.5">Jam Kerja:</strong>
                      <p className="font-body text-xs text-muted leading-relaxed font-light">
                        Senin — Sabtu: 08:00 – 17:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full pt-6 border-t border-fog/30">
                  <Button 
                    variant="outline" 
                    href="/kontak" 
                    className="w-full shrink-0"
                  >
                    Lihat Peta & Kontak
                  </Button>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
