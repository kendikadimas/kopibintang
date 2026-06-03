'use client';

import React, { useState } from 'react';

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

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<'retail' | 'distributor'>('retail');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first item by default

  const currentFaqs = activeTab === 'retail' ? RETAIL_FAQS : DISTRIBUTOR_FAQS;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-parchment py-20 md:py-28 border-t border-fog/40">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <div className="flex items-center gap-3 text-caramel">
            <span className="w-6 h-px bg-current" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase font-bold">Tanya Jawab</span>
            <span className="w-6 h-px bg-current" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-espresso tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center border-b border-fog/30 mb-8">
          <div className="flex gap-4">
            <button
              onClick={() => {
                setActiveTab('retail');
                setOpenIndex(0);
              }}
              className={`font-body text-sm font-semibold pb-4 transition-all duration-300 border-b-2 px-4 cursor-pointer ${
                activeTab === 'retail'
                  ? 'text-caramel border-caramel'
                  : 'text-espresso/60 border-transparent hover:text-espresso'
              }`}
            >
              FAQ Produk Kopi Bubuk Retail
            </button>
            <button
              onClick={() => {
                setActiveTab('distributor');
                setOpenIndex(0);
              }}
              className={`font-body text-sm font-semibold pb-4 transition-all duration-300 border-b-2 px-4 cursor-pointer ${
                activeTab === 'distributor'
                  ? 'text-caramel border-caramel'
                  : 'text-espresso/60 border-transparent hover:text-espresso'
              }`}
            >
              FAQ Khusus Distributor
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {currentFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br from-roast via-espresso to-[#150D06] border rounded-2xl overflow-hidden transition-all duration-300 group w-full ${
                  isOpen 
                    ? 'border-caramel/50 shadow-[0_12px_30px_-6px_rgba(200,137,90,0.12)]' 
                    : 'border-white/5 hover:border-caramel/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className={`w-full px-6 py-5 flex items-center justify-between text-left font-body text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer ${
                    isOpen ? 'text-caramel' : 'text-cream hover:text-caramel'
                  }`}
                >
                  <span className="pr-2 leading-snug break-words">{faq.q}</span>
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

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-white/10' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-5 font-body text-xs sm:text-sm text-cream/80 leading-relaxed font-normal bg-white/5">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
