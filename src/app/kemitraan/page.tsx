import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { CONTACT, PARTNERSHIP_BENEFITS, PARTNERSHIP_STEPS } from '@/lib/constants';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Peluang Kemitraan & Keagenan Distributor Kopi — Kopi Bintang Pringsewu',
  description: 'Program kemitraan CV. Harapan Buah Hati Mandiri Tunggal untuk distribusi Kopi Bintang Pringsewu Lampung. Keuntungan menarik, pasokan stabil, wilayah eksklusif.',
  keywords: [
    'kopi bubuk lampung',
    'kopi bubuk',
    'kopi bubuk bintang pringsewu',
    'kopi bintang',
    'kemitraan distributor kopi',
    'agen kopi robusta',
    'grosir kopi pringsewu'
  ],
};

/* ── Icon SVGs ───────────────────────────────────────────────── */
const BENEFIT_ICONS = [
  /* Demand / Growth */
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  /* Production / Factory */
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  /* Territory / Map */
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 20l-5.447-2.724A2 2 0 013 15.492V7.147a2 2 0 011.196-1.818L9 3m0 17l6-3m-6 3V10m6 7l5.447-2.724A2 2 0 0021 12.508V4.153a2 2 0 00-1.196-1.818L15 1m0 16V7m0 0L9 4m6 3l-6 3" />
  </svg>,
  /* Support / Team */
  <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
];

const WA_ICON = (
  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.097.129 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

const PARTNERSHIP_REASONS = [
  {
    title: 'Kopi Retail Berkualitas',
    description: 'Kami menawarkan produk kopi retail berkualitas dengan cita rasa Lampung murni yang konsisten di setiap kemasan.',
  },
  {
    title: 'Permintaan Pasar Tinggi',
    description: 'Permintaan pasar (demand) yang terus berkembang pesat untuk kopi bubuk robusta di segmen retail.',
  },
  {
    title: 'Margin yang Kompetitif',
    description: 'Menawarkan margin keuntungan yang menarik dan sangat kompetitif bagi mitra distributor.',
  },
  {
    title: 'Repeat Order Tinggi',
    description: 'Tingkat pembelian ulang (Repeat Order) yang tinggi dari konsumen akhir berkat rasa yang konsisten.',
  },
  {
    title: 'Pasokan yang Stabil',
    description: 'Jaminan kontinuitas pasokan produk yang stabil dan aman langsung dari pabrik utama kami.',
  },
  {
    title: 'Dukungan Pemasaran Penuh',
    description: 'Marketing support penuh dan berkelanjutan, baik media promosi cetak maupun aset digital terpadu.',
  },
];

const REASON_ICONS = [
  /* 1. Kopi Retail Berkualitas */
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 3v18m0-18c-2.5 0-5 2-5 5.5S9.5 14 12 14m0-11c2.5 0 5 2 5 5.5S14.5 14 12 14m0 0c-2.5 0-5 2.5-5 7m5-7c2.5 0 5 2.5 5 7" />
  </svg>,
  /* 2. Permintaan Pasar Tinggi */
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  /* 3. Margin yang Kompetitif */
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-1.97-.659-1.17-.879-1.17-2.302 0-3.182 1.122-.841 2.937-.878 4.148-.058l.19.13M12 3v3m0 12v3" />
  </svg>,
  /* 4. Repeat Order Tinggi */
  <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>,
  /* 5. Pasokan yang Stabil */
  <svg key="5" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>,
  /* 6. Dukungan Pemasaran Penuh */
  <svg key="6" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
  </svg>,
];

const COLLABORATION_STEPS = [
  {
    number: '01',
    title: 'Daftar & isi formulir',
    description: 'Lengkapi formulir pendaftaran kemitraan yang tersedia di website atau hubungi tim kami untuk mendapatkan berkas pendaftaran.',
  },
  {
    number: '02',
    title: 'Konsultasi & kesepakatan',
    description: 'Diskusikan wilayah distribusi, target penjualan, dan kesepakatan harga grosir khusus distributor bersama tim sales kami.',
    showWhatsAppButton: true,
  },
  {
    number: '03',
    title: 'Penandatanganan MoU',
    description: 'Perjanjian kerjasama resmi (MoU) ditandatangani untuk menjamin hak eksklusivitas wilayah dan komitmen harga.',
  },
  {
    number: '04',
    title: 'Pengiriman & Siap Berbisnis',
    description: 'Pesanan perdana diproses, sampel disiapkan, dan produk siap dikirim ke gudang Anda untuk dipasarkan.',
  },
];

/* ── Page ─────────────────────────────────────────────────────── */
export default function Kemitraan() {
  return (
    <div className="flex flex-col w-full bg-cream text-espresso">

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[100dvh] flex items-end bg-espresso overflow-hidden pb-20 md:pb-28">
        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/partnership_retail_display.png"
            alt="Kopi Bintang Pringsewu — Kemitraan"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          {/* Dual gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/50" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[400px] rounded-full bg-caramel/15 blur-[130px] pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-4">
          <div className="max-w-2xl flex flex-col gap-4">



            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] tracking-wide">
              Bangun Bisnis Kopi<br />
              <em className="not-italic text-caramel">Bersama Kami</em>
            </h1>

            {/* Sub */}
            <p className="font-body text-sm md:text-base text-cream/65 leading-[1.85] max-w-lg font-light">
              CV. Harapan Buah Hati Mandiri Tunggal membuka peluang kemitraan distribusi
              dengan pasokan berkelanjutan, mutu produk terjamin, dan perlindungan
              teritori eksklusif per wilayah.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#cta-kemitraan"
                className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-widest uppercase bg-caramel text-cream border border-caramel px-7 py-3.5 rounded-full shadow-lg hover:bg-cream hover:text-bark hover:-translate-y-0.5 transition-all duration-300 min-h-[48px]"
              >
                Mulai Kerjasama
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-widest uppercase bg-transparent text-cream border border-white/30 px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 min-h-[48px]"
              >
                Lihat Alur
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — KEUNGGULAN BERMITRA (Benefits)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-14">

          {/* Header */}
          <div className="flex flex-col gap-4 max-w-3xl text-left">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso tracking-wide leading-tight">
              Alasan Bermitra dengan<br />CV Harapan Buah Hati Mandiri Tunggal
            </h2>
            <p className="font-body text-sm sm:text-base text-espresso/80 leading-relaxed">
              Sebagai produsen terpercaya, kami menawarkan berbagai keunggulan produk dan skema kerjasama demi kemudahan dan profitabilitas usaha distributor kami:
            </p>
          </div>

          {/* Reasons grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNERSHIP_REASONS.map((reason, i) => (
              <div
                key={i}
                className="group flex flex-col gap-5 bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-white/5 rounded-3xl p-7 md:p-8 relative overflow-hidden shadow-md hover:border-caramel/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-left"
              >
                {/* Subtle background glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-caramel/5 blur-xl group-hover:bg-caramel/10 transition-all duration-500 pointer-events-none z-0" />

                {/* Icon box */}
                <div className="w-10 h-10 shrink-0 rounded-xl bg-caramel/10 border border-caramel/20 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-espresso transition-all duration-300 relative z-10">
                  {REASON_ICONS[i]}
                </div>

                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-white tracking-wide leading-tight group-hover:text-caramel transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-cream/90 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tumbuh bersama statement under the grid */}
          <div className="mt-6 text-center max-w-3xl mx-auto border-t border-fog/30 pt-8 w-full">
            <p className="font-body text-sm sm:text-base text-espresso/70 italic leading-relaxed font-light">
              &ldquo;Melalui kemitraan ini, kami berkomitmen untuk tumbuh bersama distributor dalam memperluas jangkauan pasar dan meningkatkan penjualan secara berkelanjutan.&rdquo;
            </p>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — ALUR KEMITRAAN (Steps, dark bg)
      ══════════════════════════════════════════════════════════ */}
      <section id="cara-kerja" className="w-full bg-roast text-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">

            {/* Left: section label + headline */}
            <div className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-28 text-left">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream tracking-wide leading-tight">
                Alur Kolaborasi
              </h2>
              <p className="font-body text-sm text-cream/85 leading-[1.8]">
                Alur kolaborasi terstruktur dan transparan agar kerjasama kemitraan dapat terjalin dengan sehat, teratur, dan produktif.
              </p>

              {/* Compact contact nudge */}
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-6">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-caramel font-bold">
                  Ada Pertanyaan?
                </span>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-widest uppercase text-cream hover:text-caramel transition-colors duration-200"
                >
                  {WA_ICON}
                  Chat langsung via WhatsApp
                </a>
              </div>
            </div>

            {/* Right: step cards */}
            <div className="lg:col-span-8 flex flex-col gap-0 text-left">
              {COLLABORATION_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="group flex gap-5 sm:gap-7 items-start pb-8 last:pb-0 relative"
                >
                  {/* Vertical connecting line */}
                  {i < COLLABORATION_STEPS.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-px bg-caramel/20" />
                  )}

                  {/* Step badge */}
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-caramel/15 border border-caramel/40 flex items-center justify-center font-body font-bold text-xs text-caramel z-10 group-hover:bg-caramel group-hover:text-cream transition-all duration-300">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-espresso border border-white/8 rounded-2xl p-6 md:p-7 group-hover:border-caramel/25 transition-colors duration-300 flex flex-col items-start">
                    <h3 className="font-display text-xl md:text-2xl text-cream tracking-wide mb-2 group-hover:text-caramel transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-cream/90 leading-[1.75]">
                      {step.description}
                    </p>

                    {/* CS WhatsApp Discussion Button for Step 2 */}
                    {step.showWhatsAppButton && (
                      <a
                        href={CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 font-body font-semibold text-[11px] tracking-wider uppercase bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5"
                      >
                        {WA_ICON}
                        Tanya-tanya dulu via WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Syarat Utama Card */}
              <div className="mt-12 bg-espresso border border-caramel/25 rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-caramel/40 transition-colors duration-300">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-caramel/5 blur-xl pointer-events-none group-hover:bg-caramel/10 transition-colors duration-500" />
                
                <div className="flex items-center gap-2.5 text-caramel">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Syarat Kemitraan</span>
                </div>

                <div className="flex flex-col gap-5 text-left">
                  <div>
                    <h3 className="font-body text-base sm:text-lg font-semibold text-cream tracking-wide">Syarat Utama</h3>
                    <p className="font-body text-xs text-cream/40 mt-1 uppercase tracking-wider">Ketentuan Utama untuk Menjadi Mitra Distributor Resmi</p>
                  </div>
                  
                  {/* Grid of 3 mini-cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Sub-card 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-caramel/20 transition-colors duration-300 text-left">
                      <div className="w-8 h-8 rounded-lg bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel">
                        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h2.25A2.25 2.25 0 0 0 22 18.75V16.5M13.5 21V13.5m0 7.5h-4.5m4.5 0H15m-1.5-7.5L12 3m0 0L4.5 13.5m7.5-10.5L19.5 13.5M9 21V13.5m0 7.5H2.25A2.25 2.25 0 0 1 0 18.75V16.5" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-body text-[11px] sm:text-xs font-semibold text-caramel uppercase tracking-wider">Jaringan Retail</h4>
                        <p className="font-body text-[11px] text-cream/95 leading-relaxed font-medium uppercase">MEMILIKI JARINGAN RETAIL/TOKO DI WILAYAH TUJUAN</p>
                      </div>
                    </div>

                    {/* Sub-card 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-caramel/20 transition-colors duration-300 text-left">
                      <div className="w-8 h-8 rounded-lg bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel">
                        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-body text-[11px] sm:text-xs font-semibold text-caramel uppercase tracking-wider">Gudang Layak</h4>
                        <p className="font-body text-[11px] text-cream/95 leading-relaxed font-medium uppercase">MEMILIKI GUDANG & PENYIMPANAN YANG LAYAK</p>
                      </div>
                    </div>

                    {/* Sub-card 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-caramel/20 transition-colors duration-300 text-left">
                      <div className="w-8 h-8 rounded-lg bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel">
                        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-1.97-.659-1.17-.879-1.17-2.302 0-3.182 1.122-.841 2.937-.878 4.148-.058l.19.13M12 3v3m0 12v3" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-body text-[11px] sm:text-xs font-semibold text-caramel uppercase tracking-wider">Harga Pasar</h4>
                        <p className="font-body text-[11px] text-cream/95 leading-relaxed font-medium uppercase">BERKOMITMEN MENJAGA STABILITAS HARGA PASAR</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — SOCIAL PROOF / PULL QUOTE DIVIDER
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-parchment py-16 md:py-20 border-t border-fog/40 border-b border-fog/40">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center gap-5">
          <div className="w-8 h-px bg-caramel/50" />
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso leading-snug tracking-wide">
            &ldquo;Kami tidak sekadar menjual produk —
            kami membangun jaringan distribusi yang
            <em className="not-italic text-caramel"> tumbuh bersama&nbsp;Anda.</em>&rdquo;
          </blockquote>
          <p className="font-body text-xs text-muted tracking-widest uppercase font-semibold">
            {/* attribution */}
            Kopi Bintang Pringsewu &nbsp;·&nbsp; {new Date().getFullYear()}
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — CTA FINAL
      ══════════════════════════════════════════════════════════ */}
      <section id="cta-kemitraan" className="w-full bg-espresso grain text-cream py-20 md:py-28 lg:py-32 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-caramel/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: headline block */}
            <div className="lg:col-span-7 flex flex-col gap-5">

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream tracking-wide leading-[1.05]">
                Siap Bertumbuh<br />
                <em className="not-italic text-caramel">Bersama Kami?</em>
              </h2>
              <p className="font-body text-sm text-cream/85 leading-[1.85] max-w-lg">
                Hubungi kami sekarang dan tim kami akan merespons dalam 1×24 jam.
                Diskusikan rencana wilayah distribusi dan potensi keagenan Anda
                bersama tim eksekutif kami.
              </p>

              {/* Contact detail row */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2 font-body text-sm text-cream/60">
                  <span className="w-4 h-px bg-caramel/50 shrink-0" />
                  <span>{CONTACT.phone}</span>
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-cream/60">
                  <span className="w-4 h-px bg-caramel/50 shrink-0" />
                  <span>{CONTACT.email}</span>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-6 backdrop-blur-sm">
                <p className="font-body text-xs text-cream/50 leading-relaxed uppercase tracking-widest font-semibold">
                  Pilih cara yang paling mudah untuk Anda
                </p>

                {/* Primary CTA — WhatsApp */}
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-body font-semibold text-xs tracking-widest uppercase bg-caramel text-cream border border-caramel px-7 py-4 rounded-full shadow-lg hover:bg-cream hover:text-bark hover:-translate-y-0.5 transition-all duration-300 min-h-[52px]"
                >
                  {WA_ICON}
                  Hubungi via WhatsApp
                </a>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="font-body text-[10px] uppercase tracking-widest text-cream/30">atau</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Secondary CTA — Email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center justify-center gap-2 font-body font-semibold text-xs tracking-widest uppercase bg-transparent text-cream border border-white/25 px-7 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 min-h-[52px]"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  Kirim Email Resmi
                </a>

                <p className="font-body text-[10px] text-cream/30 text-center leading-relaxed">
                  Respons dalam 1×24 jam pada hari kerja
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
