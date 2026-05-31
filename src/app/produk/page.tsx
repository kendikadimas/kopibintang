'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { CONTACT, PRODUCT, SITE_META } from '@/lib/constants';
import Button from '@/components/ui/Button';

/* ─────────────────────────── DATA ─────────────────────────── */
type TabKey = 'proses' | 'spesifikasi' | 'penyajian';

const SPECIFICATIONS = [
  { label: 'Kategori Produk',    value: 'Kopi Bubuk Retail & Grosir' },
  { label: 'Jenis Kopi',         value: '100% Robusta Lampung' },
  { label: 'Asal Biji Kopi',     value: 'Kec. Adiluwih, Pringsewu, Lampung' },
  { label: 'Metode Pasca Panen', value: 'Natural Process' },
  { label: 'Roasting Profile',   value: 'Medium-Dark Roast' },
  { label: 'Tingkat Gilingan',   value: 'Halus — Optimal untuk Tubruk' },
  { label: 'Pilihan Kemasan',    value: 'Pouch Aluminium Foil (100g · 250g · 500g)' },
  { label: 'Sertifikasi Mutu',   value: 'Higienis · Standar P-IRT / Halal' },
  { label: 'Legalitas',          value: 'CV. Harapan Buah Hati Mandiri Tunggal' },
];

const FLAVOR_PROFILE = [
  { label: 'Body',      desc: 'Tebal & Mantap',       pct: 100, delay: '0ms'  },
  { label: 'Aroma',     desc: 'Harum Cokelat Klasik', pct: 80,  delay: '80ms' },
  { label: 'Keasaman',  desc: 'Sangat Rendah',        pct: 20,  delay: '160ms'},
  { label: 'Kemanisan', desc: 'Petunjuk Karamel',     pct: 40,  delay: '240ms'},
];

// const HIGHLIGHTS = [
//   { label: '100% Robusta Lampung' },
//   { label: 'Medium-Dark Roast'   },
//   { label: 'Aluminium Foil Pouch' },
//   { label: 'Higienis & Halal'    },
// ];

const BREW_STEPS = [
  { n: '01', title: 'Takar Bubuk Kopi',          body: 'Masukkan 10–12 gram kopi bubuk Bintang Pringsewu ke dalam cangkir saji.' },
  { n: '02', title: 'Persiapkan Air Panas',       body: 'Panaskan air hingga mendidih, diamkan 30 detik agar suhu turun ke 90–95 °C.' },
  { n: '03', title: 'Penyeduhan Awal (Blooming)', body: 'Tuangkan ±150 ml air panas secara merata. Biarkan 30 detik tanpa diaduk.' },
  { n: '04', title: 'Aduk & Endapkan',            body: 'Aduk merata, diamkan 3 menit agar ampas mengendap sempurna.' },
  { n: '05', title: 'Nikmati Hangat',             body: 'Sajikan. Tambahkan gula atau susu sesuai selera tradisional Anda.' },
];

const TABS: { key: TabKey; label: string }[] = [
  { key: 'proses',       label: 'Proses & Filosofi'      },
  { key: 'spesifikasi',  label: 'Spesifikasi Teknis'     },
  { key: 'penyajian',    label: 'Panduan Penyajian'      },
];

const IMAGES = [
  { src: '/images/product_fine_robusta.png', label: 'Kemasan Utama'    },
  { src: '/images/product.png',              label: 'Tampilan Produk'   },
  { src: '/images/production_gallery_1.png', label: 'Proses Roasting'   },
  { src: '/images/production_gallery_2.png', label: 'Proses Pengemasan' },
];

/* ─────────────────────────── COMPONENT ─────────────────────── */
export default function ProdukDetail() {
  const [activeImg, setActiveImg]   = useState(0);
  const [activeTab, setActiveTab]   = useState<TabKey>('proses');
  const galleryRef                  = useRef<HTMLDivElement>(null);

  const waRetailUrl = () => {
    const msg = `Halo Kopi Bintang Pringsewu, saya tertarik untuk membeli Kopi Bubuk Bintang Pringsewu (retail/konsumsi pribadi). Mohon informasi harga terbaru dan cara pemesanan. Terima kasih!`;
    return `https://wa.me/6282377998183?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="flex flex-col w-full bg-cream text-espresso min-h-screen">

      <section className="relative w-full min-h-[100dvh] bg-espresso overflow-hidden flex items-end pb-20 md:pb-28">

        {/* Background product image — right half */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none select-none">
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/60 z-10" />
          <Image
            src="/images/product_fine_robusta.png"
            alt="Kopi Bubuk Bintang Pringsewu"
            fill
            priority
            className="object-cover object-center opacity-60"
          />
        </div>

        {/* Ambient glow blob */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-caramel/20 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-bark/10 blur-[80px] pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 ">
          <div className="max-w-xl animate-slide-left">

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] tracking-wide mb-6">
              Kopi Bubuk<br />
              <em className="not-italic text-caramel">Bintang</em>{' '}
              Pringsewu
            </h1>

            {/* Sub */}
            <p className="font-body text-sm md:text-base text-cream/65 leading-[1.8] mb-8 max-w-sm">
              100% Robusta Lampung murni. Medium-dark roast dengan karakter earthy,
              dark chocolate, dan acidity rendah yang khas.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href={waRetailUrl()} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primary"
                  className="!bg-caramel !border-caramel hover:!bg-cream hover:!border-cream hover:!text-bark min-h-[50px] px-8 shadow-xl hover:-translate-y-0.5 transition-all duration-300 gap-2 flex items-center"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.097.129 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  Hubungi WhatsApp
                </Button>
              </a>
              <Button
                variant="outline"
                href="#detail"
                className="!border-white/30 !text-cream hover:!bg-white/10 hover:!border-white/50 min-h-[50px] px-8 backdrop-blur-sm transition-all duration-300"
              >
                Lihat Detail
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — MAIN PRODUCT DETAIL (sticky gallery + info)
      ══════════════════════════════════════════════════════════ */}
      <section id="detail" className="w-full bg-cream py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT: Sticky Gallery ── */}
            <div ref={galleryRef} className="lg:sticky lg:top-28 flex flex-col gap-4 animate-slide-left">

              {/* Main image frame */}
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gradient-to-br from-white to-parchment/30 border border-bark/10 shadow-xl group shimmer-on-hover transition-colors duration-500 hover:border-caramel/30">
                {/* Decorative bg blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-parchment/80 pointer-events-none transition-transform duration-700 group-hover:scale-110" />

                <Image
                  key={activeImg}
                  src={IMAGES[activeImg].src}
                  alt={IMAGES[activeImg].label}
                  fill
                  priority={activeImg === 0}
                  className={`object-contain p-6 md:p-10 transition-all duration-500 ease-out group-hover:scale-[1.04] animate-enter ${
                    activeImg === 1 ? '-translate-x-[10%]' : ''
                  }`}
                />

                {/* Label chip */}
                <div className="absolute top-4 left-4 z-20 bg-espresso/80 backdrop-blur-sm text-cream font-body text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg">
                  {IMAGES[activeImg].label}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="grid grid-cols-4 gap-2.5">
                {IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    aria-label={img.label}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 group/thumb ${
                      i === activeImg
                        ? 'border-caramel ring-2 ring-caramel/20'
                        : 'border-fog hover:border-caramel/50 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover p-1 group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Product Info ── */}
            <div className="flex flex-col gap-8 animate-slide-right">

              {/* Brand eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-caramel" />
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-caramel font-bold">
                  Kopi Bubuk Robusta Lampung Asli
                </span>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso tracking-wide leading-tight">
                  Kopi Bubuk Bintang Pringsewu
                </h2>
                <p className="font-body text-xs text-muted font-semibold uppercase tracking-widest">
                  {SITE_META.company}
                </p>
              </div>

              {/* Description */}
              <p className="font-body text-sm sm:text-base text-espresso/70 leading-[1.85] font-light border-l-2 border-caramel/40 pl-4">
                Terbuat dari 100% biji kopi Robusta Lampung pilihan petani lokal,
                diproses secara modern di Desa Tunggul Pawenang. Setiap batch dijaga
                konsistensinya untuk menghadirkan karakter earthy, dark chocolate,
                dan pahit klasik Lampung yang tak terlupakan.
              </p>

              {/* ── Flavor Profile Visual Bars ── */}
              <div className="flex flex-col gap-5 bg-gradient-to-br from-white to-parchment/30 border border-bark/10 rounded-3xl p-6 md:p-8 shadow-sm transition-all duration-500 hover:border-caramel/30 hover:shadow-md relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-caramel/5 blur-lg pointer-events-none" />
                
                <span className="font-body font-bold text-[10px] uppercase tracking-[0.2em] text-espresso relative z-10">
                  Profil Cita Rasa
                </span>
                <div className="flex flex-col gap-4 relative z-10">
                  {FLAVOR_PROFILE.map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-baseline">
                        <span className="font-body text-xs font-bold text-espresso">{f.label}</span>
                        <span className="font-body text-[10px] text-muted">{f.desc}</span>
                      </div>
                      {/* Bar track */}
                      <div className="w-full h-1.5 rounded-full bg-fog overflow-hidden">
                        <div
                          className="h-full rounded-full bg-caramel bar-fill"
                          style={{
                            '--bar-width': `${f.pct}%`,
                            '--bar-delay': f.delay,
                          } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Packaging sizes ── */}
              <div className="flex flex-col gap-3">
                <span className="font-body font-bold text-[10px] uppercase tracking-[0.2em] text-espresso">
                  Ketersediaan Kemasan Pouch
                </span>
                <div className="flex gap-3">
                  {['100g', '250g', '500g'].map((size) => (
                    <div
                      key={size}
                      className="flex-1 bg-parchment border border-fog rounded-xl py-3 text-center font-body font-bold text-sm text-espresso tracking-wide hover:border-caramel hover:bg-caramel/8 transition-colors duration-200 cursor-default"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── CTA buttons ── */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={waRetailUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="primary"
                    className="w-full !bg-caramel !border-caramel hover:!bg-espresso hover:!border-espresso min-h-[50px] shadow-md gap-2 flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.097.129 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    Pesan via WhatsApp
                  </Button>
                </a>
                <a href="/kemitraan" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full !border-espresso !text-espresso hover:!bg-espresso hover:!text-cream min-h-[50px] transition-all duration-300"
                  >
                    Info Kemitraan
                  </Button>
                </a>
              </div>

              {/* Trust note */}
              <p className="font-body text-[11px] text-muted text-center leading-relaxed">
                Pengiriman ke seluruh Indonesia &nbsp;·&nbsp; Higienis &amp; Halal &nbsp;·&nbsp; Melayani grosir &amp; retail
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — TABBED KNOWLEDGE (dark, immersive)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-roast text-cream py-16 md:py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-10">

          {/* Section header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-caramel">
              <span className="w-6 h-px bg-current" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase font-bold">Lebih Dalam</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-cream tracking-wide">
              Kenali Produk Kami Lebih Lanjut
            </h2>
          </div>

          {/* ── Tab Bar ── */}
          <div className="border-b border-white/10">
            <div className="flex gap-0 overflow-x-auto hide-scroll -mb-px">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`tab-underline ${activeTab === tab.key ? 'active' : ''} font-body text-xs sm:text-sm font-semibold tracking-wide px-5 py-4 whitespace-nowrap transition-colors duration-200 border-b-2 ${
                    activeTab === tab.key
                      ? 'text-caramel border-caramel'
                      : 'text-cream/40 border-transparent hover:text-cream/70'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Tab Content ── */}
          <div className="min-h-[300px]">

            {/* PROSES */}
            {activeTab === 'proses' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-fade-up">
                <div className="md:col-span-7 flex flex-col gap-5">
                  <h3 className="font-display text-xl sm:text-2xl text-cream leading-snug">
                    Dari Kebun Petani Lampung Hingga Cangkir Anda
                  </h3>
                  <div className="font-body text-sm md:text-base text-cream/70 leading-[1.85] font-light space-y-4">
                    <p>
                      Cita rasa murni robusta Lampung berakar pada dedikasi petani lokal yang mengelola
                      kebun kopi di tanah Lampung. Kami bermitra erat dengan rantai pasok lokal untuk
                      mendapatkan buah merah kopi (coffee cherry) terbaik di masa panen raya.
                    </p>
                    <p>
                      Di bawah pengawasan {SITE_META.company}, biji kopi menjalani penjemuran natural
                      alami, kemudian pemisahan kulit tanduk kopi dengan cermat. Proses roasting
                      bertemperatur terkontrol presisi menjaga kematangan medium-dark roast agar
                      karakter earthy, dark chocolate, dan low acidity terdorong keluar secara maksimal.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col gap-4">
                  {/* Pull quote */}
                  <div className="bg-espresso border border-white/10 rounded-2xl p-6 flex flex-col gap-3 relative overflow-hidden grain">
                    <span className="font-body text-[9px] uppercase tracking-widest text-caramel font-bold">Filosofi Produksi</span>
                    <blockquote className="font-display text-lg text-cream/90 leading-snug italic">
                      &ldquo;Small-batch roasting — setiap batch kecil untuk menjaga kesegaran aroma yang maksimal.&rdquo;
                    </blockquote>
                  </div>
                  {/* Process milestones */}
                  <div className="flex flex-col divide-y divide-white/8">
                    {[
                      { step: 'Panen',      desc: 'Seleksi buah merah terbaik' },
                      { step: 'Natural',    desc: 'Penjemuran alami di bawah sinar matahari' },
                      { step: 'Hulling',    desc: 'Pemisahan kulit tanduk secara cermat' },
                      { step: 'Roasting',   desc: 'Medium-dark, suhu terkontrol presisi' },
                      { step: 'Grinding',   desc: 'Halus — optimal untuk tubruk' },
                      { step: 'Packaging',  desc: 'Dikemas higienis dalam pouch foil kedap udara' },
                    ].map((m) => (
                      <div key={m.step} className="flex items-center gap-4 py-3">
                        <span className="font-body text-[10px] font-bold uppercase tracking-wider text-caramel w-20 shrink-0">{m.step}</span>
                        <span className="font-body text-xs text-cream/60">{m.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SPESIFIKASI */}
            {activeTab === 'spesifikasi' && (
              <div className="animate-fade-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10">
                  {SPECIFICATIONS.map((spec, i) => (
                    <div
                      key={i}
                      className="bg-roast hover:bg-espresso transition-colors duration-200 p-5 flex flex-col gap-2"
                    >
                      <span className="font-body text-[9px] uppercase tracking-[0.2em] text-caramel font-bold">
                        {spec.label}
                      </span>
                      <span className="font-body text-sm text-cream font-semibold leading-snug">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PENYAJIAN */}
            {activeTab === 'penyajian' && (
              <div className="animate-fade-up flex flex-col gap-6 max-w-3xl">
                <h3 className="font-display text-xl sm:text-2xl text-cream leading-snug">
                  Panduan Menyeduh Kopi Tubruk Lampung Klasik
                </h3>
                <div className="flex flex-col gap-0">
                  {BREW_STEPS.map((s, i) => (
                    <div
                      key={i}
                      className="flex gap-5 items-start pb-6 last:pb-0 relative"
                    >
                      {/* Timeline line */}
                      {i < BREW_STEPS.length - 1 && (
                        <div className="absolute left-[19px] top-10 bottom-0 w-px bg-caramel/20" />
                      )}
                      {/* Step badge — square */}
                      <div className="w-10 h-10 rounded-lg bg-caramel/15 border border-caramel/40 flex items-center justify-center font-body font-bold text-xs text-caramel shrink-0 z-10">
                        {s.n}
                      </div>
                      <div className="flex flex-col gap-1 pt-1">
                        <span className="font-body font-bold text-sm text-cream">{s.title}</span>
                        <span className="font-body text-sm text-cream/65 leading-relaxed">{s.body}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — DUAL CTA CARDS (premium, harmonised)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-cream py-16 md:py-24 lg:py-28 border-t border-fog/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-10">

          {/* Section label */}
          <div className="text-center flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 text-caramel">
              <span className="w-6 h-px bg-current" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase font-bold">Mulai Sekarang</span>
              <span className="w-6 h-px bg-current" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso tracking-wide">
              Untuk Siapa Kopi Ini?
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* Card 1 — Retail */}
            <div className="group relative bg-gradient-to-br from-white to-parchment/40 border border-bark/10 hover:border-caramel/40 rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-8 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500">
              {/* Corner accent glow */}
              <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full bg-caramel/5 blur-xl group-hover:bg-caramel/10 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Icon area — retail */}
                <div className="w-11 h-11 rounded-xl bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel group-hover:scale-110 group-hover:bg-caramel group-hover:text-cream transition-all duration-500 shadow-inner shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-caramel font-bold">
                    Pesanan Retail
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-espresso leading-tight">
                    Pesan untuk Konsumsi Pribadi
                  </h3>
                </div>
                <p className="font-body text-sm text-espresso/65 leading-relaxed font-light">
                  Nikmati rasa autentik robusta Lampung murni di rumah Anda.
                  Pengiriman langsung ke seluruh wilayah Indonesia via logistik terpercaya.
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2 mt-1">
                  {['Pilihan kemasan 100g · 250g · 500g', 'Pengiriman ke seluruh Indonesia', 'Respon cepat via WhatsApp'].map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-xs text-espresso/70">
                      <span className="w-3 h-px bg-caramel shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={waRetailUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10"
              >
                <Button
                  variant="primary"
                  className="w-full !bg-caramel !border-caramel hover:!bg-espresso hover:!border-espresso shadow-md transition-all duration-300 gap-2 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.097.129 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  Hubungi WhatsApp
                </Button>
              </a>
            </div>

            {/* Card 2 — B2B / Kemitraan */}
            <div className="group relative bg-gradient-to-br from-white to-parchment/40 border border-bark/10 hover:border-caramel/40 rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-8 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500">
              {/* Corner accent glow */}
              <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full bg-bark/5 blur-xl group-hover:bg-bark/10 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Icon area — partnership */}
                <div className="w-11 h-11 rounded-xl bg-espresso/8 border border-espresso/20 flex items-center justify-center text-bark group-hover:scale-110 group-hover:bg-espresso group-hover:text-cream transition-all duration-500 shadow-inner shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-caramel font-bold">
                    Kemitraan Keagenan
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-espresso leading-tight">
                    Katalog Grosir &amp; Keagenan
                  </h3>
                </div>
                <p className="font-body text-sm text-espresso/65 leading-relaxed font-light">
                  Dapatkan katalog harga khusus agen dan distributor resmi, sampel
                  produk, serta dukungan rantai pasok berkapasitas besar yang aman.
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2 mt-1">
                  {['Harga khusus agen & distributor', 'Eksklusivitas wilayah distribusi', 'Dukungan materi promosi & logistik'].map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-xs text-espresso/70">
                      <span className="w-3 h-px bg-bark shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="outline"
                href="/kemitraan"
                className="relative z-10 w-full !border-espresso !text-espresso hover:!bg-espresso hover:!text-cream transition-all duration-300"
              >
                Pelajari Kemitraan
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
