import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { CONTACT, PARTNERSHIP_BENEFITS, PARTNERSHIP_STEPS } from '@/lib/constants';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Peluang Kemitraan & Keagenan Distributor Kopi — Kopi Bintang Pringsewu',
  description: 'Program kemitraan CV. Harapan Buah Hati Mandiri Tunggal untuk distribusi Kopi Bintang Pringsewu Lampung. Keuntungan menarik, pasokan stabil, wilayah eksklusif.',
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
            src="/images/production_gallery_3.png"
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
          <div className="flex flex-col gap-3 max-w-xl">

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso tracking-wide leading-tight">
              Mengapa Bermitra<br />dengan Kami
            </h2>
            <p className="font-body text-sm text-espresso/60 leading-[1.8] font-light">
              Empat alasan kuat yang membuat kemitraan bersama Kopi Bintang Pringsewu
              menjadi pilihan bisnis yang tepat dan berkelanjutan.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PARTNERSHIP_BENEFITS.map((b, i) => (
              <div
                key={i}
                className="group flex gap-6 items-start bg-white border border-fog/60 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Icon box */}
                <div className="w-11 h-11 shrink-0 rounded-xl bg-caramel/10 border border-caramel/20 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-cream transition-all duration-300">
                  {BENEFIT_ICONS[i]}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl md:text-2xl text-espresso tracking-wide leading-tight group-hover:text-caramel transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="font-body text-sm text-espresso/60 leading-[1.75] font-light">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
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
            <div className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-28">

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream tracking-wide leading-tight">
                Bagaimana Cara Kerjanya
              </h2>
              <p className="font-body text-sm text-cream/60 leading-[1.8] font-light">
                Alur pendaftaran terstruktur dan transparan agar kolaborasi bisnis dapat
                terjalin dengan sehat dan lancar dari hari pertama.
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
            <div className="lg:col-span-8 flex flex-col gap-0">
              {PARTNERSHIP_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="group flex gap-5 sm:gap-7 items-start pb-8 last:pb-0 relative"
                >
                  {/* Vertical connecting line */}
                  {i < PARTNERSHIP_STEPS.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-px bg-caramel/20" />
                  )}

                  {/* Step badge */}
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-caramel/15 border border-caramel/40 flex items-center justify-center font-body font-bold text-xs text-caramel z-10 group-hover:bg-caramel group-hover:text-cream transition-all duration-300">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-espresso border border-white/8 rounded-2xl p-6 md:p-7 group-hover:border-caramel/25 transition-colors duration-300">
                    <h3 className="font-display text-xl md:text-2xl text-cream tracking-wide mb-2 group-hover:text-caramel transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-cream/60 leading-[1.75] font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
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
              <p className="font-body text-sm text-cream/65 leading-[1.85] max-w-lg font-light">
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
