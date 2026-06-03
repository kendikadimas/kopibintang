'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    purpose: 'Produk',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format nomor WA
    const waNumber = CONTACT.whatsapp.replace(/\D/g, '');
    const finalWaNumber = waNumber.startsWith('0') ? '62' + waNumber.slice(1) : waNumber;

    // Buat template pesan
    const text = `Halo Kopi Bintang Pringsewu, saya ingin menghubungi Anda.

*Nama:* ${formData.name}
*Kontak Balasan:* ${formData.contact}
*Keperluan:* ${formData.purpose}

*Pesan:*
${formData.message}`;

    const waUrl = `https://wa.me/${finalWaNumber}?text=${encodeURIComponent(text)}`;
    
    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');
    
    setSubmitted(true);
    setFormData({
      name: '',
      contact: '',
      purpose: 'Produk',
      message: '',
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gradient-to-br from-roast via-espresso to-[#150D06] border border-white/5 p-8 md:p-10 text-left rounded-2xl shadow-xl relative overflow-hidden grain">
      {/* Subtle background glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-caramel/5 blur-xl pointer-events-none" />
      
      <h3 className="font-display text-2xl font-semibold text-white mb-6 relative z-10">Kirim Pesan</h3>
      
      {submitted && (
        <div className="mb-6 p-4 bg-caramel/10 text-caramel text-xs font-body font-semibold border border-caramel/20 rounded-xl relative z-10">
          Terima kasih. Pesan Anda telah diterima dan tim kami akan segera merespons.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-body text-[10px] uppercase tracking-wider text-caramel font-semibold">
            Nama Lengkap <span className="text-white">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap Anda"
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs md:text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/20 transition-all rounded-xl"
            required
          />
        </div>

        {/* Email or WhatsApp */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact" className="font-body text-[10px] uppercase tracking-wider text-caramel font-semibold">
            Email atau No. WhatsApp <span className="text-white">*</span>
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="E.g. email@domain.com atau 0812xxxxxx"
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs md:text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/20 transition-all rounded-xl"
            required
          />
        </div>

        {/* Purpose */}
        <div className="flex flex-col gap-2">
          <label htmlFor="purpose" className="font-body text-[10px] uppercase tracking-wider text-caramel font-semibold">
            Keperluan Pesan
          </label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs md:text-sm text-cream focus:outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/20 transition-all rounded-xl cursor-pointer"
          >
            <option value="Produk" className="bg-[#150D06] text-cream">Informasi Produk Kopi</option>
            <option value="Kemitraan" className="bg-[#150D06] text-cream">Kemitraan & Distribusi</option>
            <option value="Lainnya" className="bg-[#150D06] text-cream">Lainnya</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-body text-[10px] uppercase tracking-wider text-caramel font-semibold">
            Isi Pesan <span className="text-white">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tuliskan detail pertanyaan atau keperluan Anda..."
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs md:text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/20 transition-all resize-none rounded-xl"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="mt-2">
          <Button type="submit" variant="primary" className="w-full py-4 !bg-caramel !border-caramel hover:!bg-cream hover:!border-cream hover:!text-espresso">
            Kirim Pesan
          </Button>
        </div>
      </form>
    </div>
  );
}
