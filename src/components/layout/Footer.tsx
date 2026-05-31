import React from 'react';
import Link from 'next/link';
import { CONTACT, SITE_META, NAV_LINKS } from '@/lib/constants';
import { Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24">

        {/* Main grid — 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-white/8">

          {/* Brand col */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* Logo wordmark */}
            <div className="flex items-center gap-2">
              <Coffee className="w-5.5 h-5.5 text-white shrink-0" strokeWidth={1.8} />
              <span className="font-display text-2xl tracking-widest text-cream">
                Kopi Bintang Pringsewu<span className="text-caramel">.</span>
              </span>
            </div>

            <p className="font-body text-sm text-cream/60 leading-[1.8] max-w-xs font-light">
              {SITE_META.description}
            </p>

            <span className="font-body text-[9px] tracking-[0.2em] uppercase text-cream/30">
              Est. {SITE_META.establishedYear} &nbsp;·&nbsp; {SITE_META.company}
            </span>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-caramel">
              Navigasi
            </span>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/55 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-caramel">
              Kontak &amp; Alamat
            </span>
            <ul className="flex flex-col gap-5 font-body text-sm text-cream/55 font-light" role="list">
              <li className="leading-[1.7]">
                <span className="block text-[9px] uppercase tracking-[0.2em] text-cream/30 mb-1.5">
                  Alamat Produksi
                </span>
                {CONTACT.address}
              </li>
              <li>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-cream/30 mb-1.5">
                  WhatsApp
                </span>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors duration-200 underline-offset-2 hover:underline"
                >
                  {CONTACT.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-cream/30 mb-1.5">
                  E-mail
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-cream transition-colors duration-200 underline-offset-2 hover:underline"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-body text-[10px] tracking-widest uppercase text-cream/25">
            &copy; {currentYear} {SITE_META.name}. Hak Cipta Dilindungi.
          </span>
          <span className="font-body text-[10px] tracking-widest uppercase text-cream/25">
            {CONTACT.addressShort}
          </span>
        </div>

      </div>
    </footer>
  );
}
