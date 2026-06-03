import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { CONTACT, SITE_META } from '@/lib/constants';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/sections/ContactForm';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: 'Hubungi Kopi Bintang Pringsewu — Kontak & Pemesanan',
  description: 'Hubungi Kopi Bintang Pringsewu untuk pemesanan retail & grosir kopi robusta Lampung asli. Lokasi kami di Adiluwih, Pringsewu. Respon cepat via WhatsApp.',
  keywords: [
    'kopi bubuk lampung',
    'kopi bubuk',
    'kopi bubuk bintang pringsewu',
    'kopi bintang',
    'kontak kopi bintang pringsewu',
    'alamat kopi bintang'
  ],
};

export default function Kontak() {
  // SVG Icons for Contact Items (Aligned with site-wide stroke thickness & coffee branding)
  const iconWhatsApp = (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.097.129 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  );

  const iconPhone = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.28-5.716-4.172-7-7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );

  const iconEmail = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );

  const iconLocation = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
    </svg>
  );

  return (
    <div className="flex flex-col w-full bg-cream text-espresso overflow-x-hidden">
      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO (Aligned with other pages)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[100dvh] flex items-end bg-espresso overflow-hidden pb-20 md:pb-28">
        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/productonretail.webp"
            alt="Produk Kopi Bintang Pringsewu di Retail"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          {/* Dual gradient overlays */}
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
              Kami Senang<br />
              <em className="not-italic text-caramel">Mendengar</em> dari Anda
            </h1>
            
            {/* Sub */}
            <p className="font-body text-sm md:text-base text-cream/65 leading-[1.85] max-w-lg font-light">
              Tim kami siap merespons setiap pertanyaan, pengajuan kerjasama, maupun pesanan retail Anda dalam waktu 1x24 jam.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: INFO KONTAK (Premium Grid Cards) ──────────────── */}
      <section className="w-full bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: WhatsApp */}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 text-left relative overflow-hidden grain"
            >
              {/* Corner accent glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-caramel/5 blur-xl group-hover:bg-caramel/10 transition-all duration-500 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel group-hover:scale-110 group-hover:bg-caramel group-hover:text-espresso transition-all duration-500 shadow-inner mb-6">
                {iconWhatsApp}
              </div>
              <div className="flex flex-col gap-1.5 min-w-0 w-full pr-4 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-caramel font-bold block">WhatsApp Fast Response</span>
                <span className="font-body text-base sm:text-lg font-semibold text-white group-hover:text-caramel transition-colors duration-300 break-words tracking-wide">
                  {CONTACT.whatsapp}
                </span>
                <span className="font-body text-[11px] text-cream/80 leading-relaxed font-normal mt-1.5">
                  Respon kilat untuk pemesanan cepat, nego harga, atau info stok.
                </span>
              </div>
              
              <span className="absolute bottom-6 right-6 text-caramel opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-sans text-lg">→</span>
            </a>

            {/* Card 2: Phone */}
            <a
              href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
              className="group flex flex-col items-start bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 text-left relative overflow-hidden grain"
            >
              {/* Corner accent glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-caramel/5 blur-xl group-hover:bg-caramel/10 transition-all duration-500 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel group-hover:scale-110 group-hover:bg-caramel group-hover:text-espresso transition-all duration-500 shadow-inner mb-6">
                {iconPhone}
              </div>
              <div className="flex flex-col gap-1.5 min-w-0 w-full pr-4 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-caramel font-bold block">Panggilan Telepon</span>
                <span className="font-body text-base sm:text-lg font-semibold text-white group-hover:text-caramel transition-colors duration-300 break-words tracking-wide">
                  {CONTACT.phone}
                </span>
                <span className="font-body text-[11px] text-cream/80 leading-relaxed font-normal mt-1.5">
                  Hubungi staf layanan kami langsung pada jam operasional kantor.
                </span>
              </div>
              
              <span className="absolute bottom-6 right-6 text-caramel opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-sans text-lg">→</span>
            </a>

            {/* Card 3: Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex flex-col items-start bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 text-left relative overflow-hidden grain"
            >
              {/* Corner accent glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-caramel/5 blur-xl group-hover:bg-caramel/10 transition-all duration-500 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel group-hover:scale-110 group-hover:bg-caramel group-hover:text-espresso transition-all duration-500 shadow-inner mb-6">
                {iconEmail}
              </div>
              <div className="flex flex-col gap-1.5 min-w-0 w-full pr-4 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-caramel font-bold block">Email Korespondensi</span>
                <span className="font-body text-base sm:text-lg font-semibold text-white group-hover:text-caramel transition-colors duration-300 break-words">
                  {CONTACT.email}
                </span>
                <span className="font-body text-[11px] text-cream/80 leading-relaxed font-normal mt-1.5">
                  Kirimkan penawaran kerja sama B2B resmi atau proposal usaha.
                </span>
              </div>
              
              <span className="absolute bottom-6 right-6 text-caramel opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-sans text-lg">→</span>
            </a>

            {/* Card 4: Location */}
            <a
              href="#map"
              className="group flex flex-col items-start bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 text-left relative overflow-hidden grain"
            >
              {/* Corner accent glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-caramel/5 blur-xl group-hover:bg-caramel/10 transition-all duration-500 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel group-hover:scale-110 group-hover:bg-caramel group-hover:text-espresso transition-all duration-500 shadow-inner mb-6">
                {iconLocation}
              </div>
              <div className="flex flex-col gap-1.5 min-w-0 w-full pr-4 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-caramel font-bold block">Lokasi Workshop</span>
                <span className="font-body text-base sm:text-lg font-semibold text-white group-hover:text-caramel transition-colors duration-300 break-words leading-snug">
                  {CONTACT.addressShort}
                </span>
                <span className="font-body text-[11px] text-cream/80 leading-relaxed font-normal mt-1.5">
                  Kunjungi fasilitas roasting & kemasan kami di Lampung.
                </span>
              </div>
              
              <span className="absolute bottom-6 right-6 text-caramel opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-sans text-lg">→</span>
            </a>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — FORM & OPERASIONAL (Parchment, Two-Column)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-parchment py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Column (Left) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Info Column (Right) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start gap-6 text-left">
              <div className="bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-white/5 p-8 rounded-3xl shadow-xl flex flex-col gap-6 w-full text-left relative overflow-hidden grain">
                {/* Subtle background glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-caramel/5 blur-xl pointer-events-none" />
                
                <span className="font-mono text-[9px] uppercase tracking-widest text-caramel font-bold block relative z-10">Detail Operasional</span>
                <h3 className="font-display text-2xl font-semibold text-white relative z-10">Kantor & Workshop</h3>
                
                <div className="flex flex-col gap-5 mt-2 divide-y divide-white/10 relative z-10">
                  {/* Item 1 */}
                  <div className="flex flex-col gap-1.5 pt-4 first:pt-0">
                    <strong className="font-display text-sm text-white font-medium">Alamat Workshop Utama</strong>
                    <p className="font-body text-xs text-cream/80 leading-relaxed font-normal">
                      {CONTACT.address}
                    </p>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex flex-col gap-1.5 pt-4">
                    <strong className="font-display text-sm text-white font-medium">Jam Operasional</strong>
                    <p className="font-body text-xs text-cream/80 leading-relaxed font-normal">
                      Senin – Sabtu: 08:00 – 17:00 WIB<br />
                      Minggu & Hari Libur Nasional: Tutup
                    </p>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="flex flex-col gap-1.5 pt-4">
                    <strong className="font-display text-sm text-white font-medium">Komitmen Pelayanan</strong>
                    <p className="font-body text-xs text-cream/80 leading-relaxed font-normal">
                      Sebagai produsen terpercaya, CV. Harapan Buah Hati Mandiri Tunggal berkomitmen melayani pesanan retail dan pengiriman sampel untuk calon distributor secara profesional dan higienis.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-2 flex flex-col gap-1 relative z-10">
                  <span className="font-mono text-[9px] text-caramel font-bold uppercase tracking-wider">
                    {SITE_META.company}
                  </span>
                  <span className="text-xs text-cream/70 leading-relaxed font-normal">
                    Sertifikasi resmi dan Halal terdaftar.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: FAQ SECTION ─────────────────────────────────── */}
      <FAQSection />

      {/* ─── SECTION 4: PETA LOKASI ────────────────────────────────────── */}
      <section id="map" className="w-full bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-2 max-w-xl">

              <h2 className="font-display text-3xl sm:text-4xl text-espresso tracking-wide">
                Koordinat Workshop Produksi
              </h2>
              <p className="font-body text-sm text-espresso/60 leading-relaxed font-light mt-1">
                {CONTACT.address}
              </p>
            </div>

            {/* Map wrapper */}
            <div className="w-full aspect-[16/9] sm:aspect-[16/7] border-2 border-fog/40 rounded-3xl overflow-hidden relative bg-fog/20 shadow-md group card-hover">
              <iframe
                src={CONTACT.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kopi Bintang Pringsewu Location Map"
                className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-95"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
