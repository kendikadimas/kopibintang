'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { Coffee } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 z-50">
      <header
        className={`
          rounded-full px-6 md:px-8 flex items-center justify-between
          transition-all duration-300 ease-out border
          ${isScrolled
            ? 'bg-bark/95 backdrop-blur-lg py-3.5 shadow-[0_12px_40px_-6px_rgba(26,16,8,0.45)] border-white/10'
            : 'bg-bark/85 backdrop-blur-md py-5 shadow-[0_6px_24px_-4px_rgba(26,16,8,0.25)] border-white/5'}
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 text-white"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Kopi Bintang Pringsewu — Beranda"
        >
          {/* Coffee bean mark */}
          <Coffee className="w-5.5 h-5.5 text-white shrink-0" strokeWidth={1.8} />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] tracking-widest text-white">
              Bintang
            </span>
            <span className="font-body text-[8px] text-white/60 tracking-[0.25em] uppercase mt-0.5">
              Pringsewu
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => {
            const label = link.label.toLowerCase() === 'home' ? 'Beranda' : link.label;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative font-body text-[13px] font-medium tracking-wide py-0.5
                  transition-colors duration-200
                  ${isActive ? 'text-white' : 'text-white/65 hover:text-white/90'}
                `}
              >
                {label}
                {/* Active underline dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-caramel" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/kontak"
            className="
              bg-white text-bark px-5 py-2 rounded-full
              font-body text-[13px] font-semibold tracking-wide
              hover:bg-parchment transition-colors duration-200
              min-h-[36px] flex items-center
            "
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile hamburger — min 44×44px touch target */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel cursor-pointer"
          aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMobileOpen}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isMobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </header>

      {/* Mobile drawer — max-h animation (no layout shift, GPU-friendly) */}
      <div
        className={`
          md:hidden mt-2 overflow-hidden rounded-2xl bg-bark border border-white/8
          transition-all duration-300 ease-out
          ${isMobileOpen ? 'max-h-[400px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col px-6 py-5 gap-1" aria-label="Navigasi mobile">
          {NAV_LINKS.map((link) => {
            const label = link.label.toLowerCase() === 'home' ? 'Beranda' : link.label;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  font-body text-sm font-medium py-3.5 border-b border-white/8 block
                  min-h-[44px] flex items-center
                  ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}
                  transition-colors duration-150
                `}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/kontak"
            onClick={() => setIsMobileOpen(false)}
            className="
              bg-white text-bark text-center px-6 py-3 mt-4 mb-1 rounded-full
              font-body text-sm font-semibold min-h-[44px] flex items-center justify-center
            "
          >
            Hubungi Kami
          </Link>
        </nav>
      </div>
    </div>
  );
}
