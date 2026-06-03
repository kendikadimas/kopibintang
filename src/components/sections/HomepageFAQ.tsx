'use client';

import React, { useState, useEffect } from 'react';

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

const RETAIL_FAQS: FAQItem[] = [
  {
    q: '1. Apa yang membuat kopi kami berbeda?',
    a: 'Kopi kami dibuat dari biji kopi pilihan yang diproses dengan standar kualitas yang ketat untuk menghasilkan aroma yang khas, rasa yang konsisten, dan kualitas yang terjaga di setiap kemasan.'
  },
  {
    q: '2. Jenis kopi apa yang digunakan?',
    a: 'Kami menggunakan biji kopi pilihan dari berbagai daerah penghasil kopi di Indonesia yang disesuaikan dengan karakter rasa produk kami.'
  },
  {
    q: '3. Apakah kopi ini 100% kopi murni?',
    a: 'Tidak, produk kami tidak menggunakan 100% biji kopi, tetapi juga campuran seperti biji jagung yang berkualitas. Semua diproses secara organik.'
  },
  {
    q: '4. Berapa lama masa simpan produk?',
    a: 'Masa simpan produk mengikuti tanggal kedaluwarsa yang tertera pada kemasan. Untuk menjaga kualitas, simpan di tempat yang kering, sejuk, dan tertutup rapat setelah dibuka.'
  },
  {
    q: '5. Apakah produk sudah memiliki izin edar?',
    a: 'Ya, produk kami telah diproduksi sesuai standar yang berlaku dan dilengkapi dengan perizinan yang dipersyaratkan. Detail izin dapat dilihat pada kemasan produk.'
  },
  {
    q: '6. Apakah tersedia dalam beberapa ukuran kemasan?',
    a: 'Ya, kami menyediakan beberapa pilihan ukuran kemasan untuk memenuhi kebutuhan konsumen rumah tangga maupun usaha.'
  },
  {
    q: '7. Apakah produk tersedia untuk pembelian grosir?',
    a: 'Ya. Kami melayani pembelian grosir untuk toko, distributor, reseller, kafe, dan pelaku usaha lainnya.'
  },
  {
    q: '8. Bagaimana cara menjadi reseller atau distributor?',
    a: 'Anda dapat menghubungi tim kami melalui halaman kontak atau formulir kemitraan yang tersedia di website. Tim kami akan membantu proses pendaftaran dan kerja sama.'
  },
  {
    q: '9. Apakah ada minimum pemesanan untuk reseller atau distributor?',
    a: 'Minimum pemesanan dapat berbeda sesuai wilayah dan jenis kerja sama. Silakan hubungi tim penjualan kami untuk informasi lebih lanjut.'
  },
  {
    q: '10. Ke mana saja produk dapat dikirim?',
    a: 'Kami melayani pengiriman ke berbagai wilayah di Indonesia melalui jasa logistik terpercaya.'
  },
  {
    q: '11. Bagaimana jika produk yang diterima rusak?',
    a: 'Jika produk diterima dalam kondisi rusak atau tidak sesuai pesanan, segera hubungi layanan pelanggan kami disertai foto dan video produk dan bukti pembelian untuk proses penanganan.'
  },
  {
    q: '14. Apakah tersedia sampel produk untuk calon mitra?',
    a: 'Untuk calon distributor atau mitra strategis, kami dapat menyediakan sampel produk sesuai kebijakan perusahaan.'
  },
  {
    q: '15. Bagaimana cara menghubungi layanan pelanggan?',
    a: (
      <div className="flex flex-col gap-1">
        <p>Anda dapat menghubungi kami melalui:</p>
        <ul className="list-none pl-0 mt-1 space-y-1">
          <li>• WhatsApp: 0823 7799 8183</li>
          <li>• Email: harapan.mandiritunggal.cv@gmail.com</li>
          <li>• Formulir Kontak di Website</li>
          <li>• Media Sosial Resmi Perusahaan</li>
        </ul>
      </div>
    )
  }
];

const DISTRIBUTOR_FAQS: FAQItem[] = [
  {
    q: '1. Apa keuntungan menjadi distributor resmi?',
    a: 'Distributor mendapatkan harga khusus, dukungan promosi, ketersediaan stok yang terjamin, serta peluang pengembangan wilayah pemasaran.'
  },
  {
    q: '2. Apakah tersedia dukungan materi promosi?',
    a: 'Ya. Kami menyediakan materi promosi digital maupun cetak untuk membantu aktivitas penjualan.'
  },
  {
    q: '3. Bagaimana sistem pemesanan ulang (reorder)?',
    a: 'Distributor dapat melakukan pemesanan ulang melalui tim penjualan sesuai kebutuhan stok dan target distribusi wilayah masing-masing.'
  },
  {
    q: '4. Apakah ada wilayah eksklusif untuk distributor?',
    a: 'Kebijakan wilayah eksklusif dapat diberikan berdasarkan kesepakatan kerja sama dan pencapaian target penjualan tertentu'
  }
];

function HighlightText({ text, search }: { text: string; search: string }) {
  if (!search.trim()) return <>{text}</>;
  
  const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedSearch})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <mark key={i} className="bg-caramel/25 text-white font-semibold rounded px-0.5 animate-pulse">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

function FAQCard({ 
  faq, 
  isOpen, 
  onToggle, 
  searchQuery 
}: { 
  faq: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void; 
  searchQuery: string;
}) {
  const parts = faq.q.split('. ');
  const qNumber = parts[0];
  const qText = parts.slice(1).join('. ');

  const renderAnswer = () => {
    if (typeof faq.a === 'string') {
      return <HighlightText text={faq.a} search={searchQuery} />;
    }
    return faq.a;
  };

  return (
    <div className={`bg-gradient-to-br from-roast via-espresso to-[#150D06] border rounded-2xl overflow-hidden transition-all duration-300 self-start w-full group ${
      isOpen 
        ? 'border-caramel/50 shadow-[0_12px_30px_-6px_rgba(200,137,90,0.12)]' 
        : 'border-white/5 hover:border-caramel/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-lg hover:-translate-y-0.5'
    }`}>
      <button
        onClick={onToggle}
        className={`w-full px-5 py-4.5 flex items-center justify-between text-left font-body text-sm sm:text-base font-medium transition-colors duration-300 gap-4 cursor-pointer ${
          isOpen ? 'text-caramel' : 'text-cream hover:text-caramel'
        }`}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <span className="font-mono text-[9px] text-caramel font-bold bg-caramel/10 border border-caramel/20 px-2 py-1 rounded-md shrink-0 select-none uppercase tracking-wider">
            {qNumber.padStart(2, '0')}
          </span>
          <span className="pr-2 leading-snug break-words">
            <HighlightText text={qText} search={searchQuery} />
          </span>
        </div>
        
        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-caramel shrink-0 transition-all duration-300 border ${
          isOpen 
            ? 'rotate-180 bg-caramel text-espresso border-caramel' 
            : 'bg-white/5 border-white/10 group-hover:bg-caramel group-hover:text-espresso group-hover:border-caramel'
        }`}>
          <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-white/10' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 py-5 font-body text-xs sm:text-sm text-cream/80 leading-relaxed font-light bg-white/5">
            {renderAnswer()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFAQ() {
  const [activeTab, setActiveTab] = useState<'retail' | 'distributor'>('retail');
  const [searchQuery, setSearchQuery] = useState('');
  const [openOriginalIndexes, setOpenOriginalIndexes] = useState<number[]>([0]);
  const [showAll, setShowAll] = useState(false);

  const currentFaqs = activeTab === 'retail' ? RETAIL_FAQS : DISTRIBUTOR_FAQS;

  // Sync open indexes when search query or active tab changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matched = currentFaqs
        .map((faq, index) => ({ faq, index }))
        .filter(({ faq }) => {
          const qText = faq.q.toLowerCase();
          const aText = typeof faq.a === 'string' ? faq.a.toLowerCase() : '';
          return qText.includes(query) || aText.includes(query);
        })
        .map(({ index }) => index);
      setOpenOriginalIndexes(matched);
    } else {
      setOpenOriginalIndexes([0]);
    }
  }, [searchQuery, activeTab]);

  const toggleAccordion = (originalIndex: number) => {
    setOpenOriginalIndexes((prev) =>
      prev.includes(originalIndex)
        ? prev.filter((idx) => idx !== originalIndex)
        : [...prev, originalIndex]
    );
  };

  // Filter FAQ list based on search query
  const filteredFaqs = currentFaqs
    .map((faq, index) => ({ faq, originalIndex: index }))
    .filter(({ faq }) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const qText = faq.q.toLowerCase();
      const aText = typeof faq.a === 'string' ? faq.a.toLowerCase() : '';
      return qText.includes(query) || aText.includes(query);
    });

  // Limit display list if not searching and not showing all
  const isSearching = searchQuery.trim() !== '';
  const displayedFaqs = (isSearching || showAll)
    ? filteredFaqs
    : filteredFaqs.slice(0, 6);

  const isAllOpen = displayedFaqs.length > 0 && displayedFaqs.every((item) => openOriginalIndexes.includes(item.originalIndex));

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenOriginalIndexes([]);
    } else {
      const allOriginalIndexes = displayedFaqs.map((item) => item.originalIndex);
      setOpenOriginalIndexes(allOriginalIndexes);
    }
  };

  // Split displayed FAQs for 2-column masonry grid on desktop
  const leftColFaqs = displayedFaqs.filter((_, idx) => idx % 2 === 0);
  const rightColFaqs = displayedFaqs.filter((_, idx) => idx % 2 !== 0);

  return (
    <section className="w-full bg-parchment py-20 md:py-28 lg:py-32 border-t border-fog/30 relative overflow-hidden grain">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-caramel/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-bark/5 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col gap-10 sm:gap-12">
        
        {/* Horizontal Header Grid (Title on left, Description & Tabs on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-8 border-b border-fog/20">
          {/* Title block */}
          <div className="lg:col-span-6 flex flex-col items-start gap-3.5 text-left">
            <div className="flex items-center gap-3 text-caramel">
              <span className="w-6 h-px bg-current" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase font-bold">Tanya Jawab</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-espresso tracking-wide leading-[1.1] font-medium">
              Pertanyaan <em className="not-italic text-caramel font-serif">Populer</em>
            </h2>
          </div>

          {/* Description block */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-5 text-left lg:text-right w-full">
            <p className="font-body text-xs sm:text-sm text-espresso/60 leading-[1.75] font-light max-w-md lg:text-right">
              Temukan jawaban cepat mengenai kualitas produk kopi bubuk retail kami, sertifikasi legalitas, hingga prosedur kemitraan reseller dan distributor resmi.
            </p>
          </div>
        </div>

        {/* Controls Layout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-fog/20">
          {/* Tabs switchers (Pill style Segmented Control) */}
          <div className="bg-fog/15 p-1 rounded-full border border-fog/10 inline-flex gap-1 self-start">
            <button
              onClick={() => {
                setActiveTab('retail');
                setOpenOriginalIndexes([0]);
                setSearchQuery('');
                setShowAll(false);
              }}
              className={`font-body text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'retail'
                  ? 'bg-espresso text-cream shadow-sm'
                  : 'text-espresso/60 hover:text-espresso'
              }`}
            >
              <span>Produk Retail</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold transition-all duration-300 ${
                activeTab === 'retail'
                  ? 'bg-cream text-espresso'
                  : 'bg-fog/30 text-espresso/60'
              }`}>
                {RETAIL_FAQS.length}
              </span>
            </button>
            <button
              onClick={() => {
                setActiveTab('distributor');
                setOpenOriginalIndexes([0]);
                setSearchQuery('');
                setShowAll(false);
              }}
              className={`font-body text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'distributor'
                  ? 'bg-espresso text-cream shadow-sm'
                  : 'text-espresso/60 hover:text-espresso'
              }`}
            >
              <span>Kemitraan Distributor</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold transition-all duration-300 ${
                activeTab === 'distributor'
                  ? 'bg-cream text-espresso'
                  : 'bg-fog/30 text-espresso/60'
              }`}>
                {DISTRIBUTOR_FAQS.length}
              </span>
            </button>
          </div>

          {/* Right actions: Search Bar + Expand Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:flex-initial group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pertanyaan..."
                className="w-full sm:w-64 pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-full bg-fog/10 border border-fog/40 text-espresso placeholder:text-espresso/45 focus:outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/10 transition-all duration-300 font-body font-light"
              />
              <svg className="w-4 h-4 text-espresso/40 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-caramel" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-espresso/40 hover:text-espresso transition-colors duration-250 cursor-pointer"
                  aria-label="Hapus pencarian"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Expand/Collapse All Button */}
            {filteredFaqs.length > 0 && (
              <button
                onClick={toggleAll}
                className="flex items-center justify-center gap-2 font-body font-semibold text-xs tracking-wider uppercase text-caramel hover:text-espresso transition-colors duration-300 select-none py-2.5 px-4 rounded-full border border-fog/20 hover:border-caramel/30 bg-white/50 hover:bg-white text-center cursor-pointer"
              >
                {isAllOpen ? (
                  <>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5m-15-6 7.5-7.5 7.5 7.5" />
                    </svg>
                    Tutup Semua
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                    Buka Semua
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Search Matches Counter */}
        {isSearching && filteredFaqs.length > 0 && (
          <div className="font-body text-xs text-espresso/50">
            Menampilkan <span className="font-semibold text-caramel">{filteredFaqs.length}</span> hasil pencarian untuk "{searchQuery}"
          </div>
        )}

        {/* Full-width Grid of Accordions */}
        {filteredFaqs.length > 0 && (
          <div className="w-full">
            {/* Mobile View: Single Column (Sequential order) */}
            <div className="flex flex-col gap-4 md:hidden animate-fade-up">
              {displayedFaqs.map(({ faq, originalIndex }) => (
                <FAQCard
                  key={originalIndex}
                  faq={faq}
                  isOpen={openOriginalIndexes.includes(originalIndex)}
                  onToggle={() => toggleAccordion(originalIndex)}
                  searchQuery={searchQuery}
                />
              ))}
            </div>

            {/* Tablet/Desktop View: Two Columns (Masonry Grid) */}
            <div className="hidden md:grid grid-cols-2 gap-4 items-start animate-fade-up">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                {leftColFaqs.map(({ faq, originalIndex }) => (
                  <FAQCard
                    key={originalIndex}
                    faq={faq}
                    isOpen={openOriginalIndexes.includes(originalIndex)}
                    onToggle={() => toggleAccordion(originalIndex)}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4">
                {rightColFaqs.map(({ faq, originalIndex }) => (
                  <FAQCard
                    key={originalIndex}
                    faq={faq}
                    isOpen={openOriginalIndexes.includes(originalIndex)}
                    onToggle={() => toggleAccordion(originalIndex)}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No Results Card */}
        {filteredFaqs.length === 0 && (
          <div className="w-full bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-dashed border-white/10 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-5 my-4">
            <div className="w-16 h-16 rounded-full bg-caramel/10 border border-caramel/20 flex items-center justify-center text-caramel">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 max-w-md">
              <h3 className="font-display text-lg sm:text-xl text-white font-semibold">Pencarian Tidak Ditemukan</h3>
              <p className="font-body text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                Kami tidak menemukan hasil untuk kata kunci <span className="font-semibold text-caramel">"{searchQuery}"</span>. Silakan coba cari dengan kata kunci lain atau hubungi tim kami untuk bantuan langsung.
              </p>
            </div>
            <a
              href="https://wa.me/6282377998183"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-body font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full shadow-lg shadow-green-500/10 hover:shadow-green-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48.002 9.936-4.454 9.94-9.934.002-2.654-1.03-5.15-2.902-7.025C16.44 1.77 13.943.73 11.285.73c-5.485 0-9.94 4.454-9.944 9.934-.002 1.83.483 3.62 1.4 5.202l-.998 3.64 3.734-.977zm11.376-7.25c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Hubungi via WhatsApp
            </a>
          </div>
        )}

        {/* Load More Button */}
        {!isSearching && filteredFaqs.length > 6 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 font-body font-semibold text-xs tracking-wider uppercase text-caramel border border-caramel/30 hover:border-caramel bg-transparent hover:bg-caramel hover:text-white transition-all duration-300 py-3 px-6 rounded-full cursor-pointer select-none shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {showAll ? (
                <>
                  <span>Tampilkan Lebih Sedikit</span>
                  <svg className="w-3.5 h-3.5 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Tampilkan Semua Pertanyaan (+{filteredFaqs.length - 6})</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        {/* Small Bottom CTA anchor linking to the full Kontak page for more questions */}
        {/* <div className="flex justify-center mt-8">
          <a 
            href="/kontak/" 
            className="group inline-flex items-center gap-2.5 font-body font-semibold text-xs tracking-widest uppercase text-espresso/70 hover:text-caramel transition-colors duration-300"
          >
            Lihat Semua FAQ & Kontak Detail
            <span className="transform transition-transform duration-300 group-hover:translate-x-1 font-sans">→</span>
          </a>
        </div> */}

      </div>
    </section>
  );
}
