'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CONTACT, SITE_META, ABOUT_COMPANY } from '@/lib/constants';
import Button from '@/components/ui/Button';

type TabKey = 'visi' | 'misi';

const DELIVERY_IMAGES = [
  { src: '/images/delivery.webp', alt: 'Pengiriman Kopi Bintang Pringsewu', caption: 'Armada Pengiriman Kopi' },
  { src: '/images/delivery2.webp', alt: 'Distribusi Produk Kopi Lampung', caption: 'Pemuatan Kopi Retail' },
  { src: '/images/delivery3.webp', alt: 'Pengiriman Kemitraan Kopi Lampung', caption: 'Grosir Pengiriman B2B' },
  { src: '/images/delivery4.webp', alt: 'Armada Pengiriman Kopi Bintang', caption: 'Wilayah Lampung Selatan' },
  { src: '/images/delivery5.webp', alt: 'Stok Kopi Bubuk Retail', caption: 'Logistik Terjadwal' },
  { src: '/images/delivery6.webp', alt: 'Distribusi Kopi Pringsewu Lampung', caption: 'Pengiriman Wilayah Barat' },
  { src: '/images/delivery7.webp', alt: 'Pengiriman Kopi Grosir', caption: 'Pasokan Retail Pringsewu' },
  { src: '/images/delivery8.webp', alt: 'Distribusi Agen Kopi Lampung', caption: 'Muatan Truk Logistik' },
  { src: '/images/delivery9.webp', alt: 'Armada Kemitraan Kopi Bintang Pringsewu', caption: 'Jaringan Mitra Lampung' },
];

export default function TentangKamiClient() {
  const [activeTab, setActiveTab] = useState<TabKey>('visi');

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

              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso leading-snug">
                Kisah di Balik Kopi Bintang Pringsewu
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
                  {/* <div className="w-8 h-0.5 bg-caramel/40 my-6" /> */}
                  {/* <p className="font-body text-xs sm:text-sm text-cream/60 max-w-xl leading-relaxed">
                    Kami berkomitmen untuk melebarkan pasar kopi Lampung tanpa melupakan kelestarian ekosistem kopi lokal dan kesejahteraan para petani yang mendukung kami.
                  </p> */}
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
          SECTION 4 — JARINGAN & GALERI DISTRIBUSI (PARTNERS & SHIPPINGS)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-cream py-20 md:py-28 lg:py-32 border-t border-fog/30 relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-14">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-8 border-b border-fog/20">
            {/* Title block */}
            <div className="lg:col-span-6 flex flex-col items-start gap-3.5 text-left">
              <div className="flex items-center gap-3 text-caramel">
                <span className="w-6 h-px bg-current" />
                <span className="font-body text-[10px] tracking-[0.3em] uppercase font-bold">Bukti Kerja</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-espresso tracking-wide leading-[1.1] font-medium">
                Jaringan & Galeri <em className="not-italic text-caramel font-serif">Distribusi</em>
              </h2>
            </div>

            {/* Description block */}
            <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-5 text-left lg:text-right w-full">
              <p className="font-body text-xs sm:text-sm text-espresso/80 leading-[1.75] max-w-md lg:text-right">
                Kami berkomitmen menjaga kelancaran pasokan kopi untuk mitra toko, warung, dan distributor resmi di seluruh penjuru Lampung dan sekitarnya.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center bg-gradient-to-br from-roast via-espresso to-[#150D06] text-cream p-8 rounded-3xl border border-white/5 shadow-md relative overflow-hidden grain">
            <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-caramel/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full bg-bark/10 blur-xl pointer-events-none" />
            
            {/* Stat 1 */}
            <div className="flex flex-col gap-1.5 relative z-10 py-4 sm:py-0">
              <span className="font-display text-3xl sm:text-4xl font-bold text-caramel tracking-wide uppercase">Robusta</span>
              <span className="font-body text-[10px] sm:text-xs text-cream/80 font-medium uppercase tracking-wider">100% Kopi Lampung Asli</span>
            </div>
            
            {/* Divider (Mobile: Horizontal, Desktop: Vertical) */}
            <div className="hidden sm:block w-px h-12 bg-white/10 self-center" />
            <div className="block sm:hidden h-px w-full bg-white/10" />

            {/* Stat 2 */}
            <div className="flex flex-col gap-1.5 relative z-10 py-4 sm:py-0">
              <span className="font-display text-3xl sm:text-4xl font-bold text-caramel tracking-wide uppercase">Higienis</span>
              <span className="font-body text-[10px] sm:text-xs text-cream/80 font-medium uppercase tracking-wider">Proses Mutu Terjamin</span>
            </div>

            {/* Divider (Mobile: Horizontal, Desktop: Vertical) */}
            <div className="hidden sm:block w-px h-12 bg-white/10 self-center" />
            <div className="block sm:hidden h-px w-full bg-white/10" />

            {/* Stat 3 */}
            <div className="flex flex-col gap-1.5 relative z-10 py-4 sm:py-0">
              <span className="font-display text-3xl sm:text-4xl font-bold text-caramel tracking-wide uppercase">Adiluwih</span>
              <span className="font-body text-[10px] sm:text-xs text-cream/80 font-medium uppercase tracking-wider">Sentra Produksi Pringsewu</span>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELIVERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-[4/3] bg-fog/20 overflow-hidden border border-fog/40 rounded-2xl shadow-sm card-hover hover:border-caramel/30 hover:shadow-lg transition-all duration-500"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
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
                Bergabunglah bersama jaringan keagenan dan distribusi Kopi Bintang Pringsewu. Dapatkan manfaat eksklusivitas wilayah pemasaran, harga khusus, serta jaminan ketersediaan stok produk kopi Robusta Lampung yang konsisten.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
                <Button
                  variant="primary"
                  href="/kemitraan/"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm !bg-caramel !border-caramel !text-espresso hover:!bg-cream hover:!border-cream hover:!text-espresso shadow-lg hover:shadow-caramel/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Pelajari Peluang Kemitraan
                </Button>
                <Button
                  variant="outline"
                  href="/kontak/"
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
