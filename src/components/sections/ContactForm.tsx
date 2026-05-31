'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

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
    
    // TODO: integrasi form handler
    
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
    <div className="bg-white border border-fog/60 p-8 md:p-10 text-left rounded-2xl shadow-sm">
      <h3 className="font-display text-2xl font-semibold text-ink mb-6">Kirim Pesan</h3>
      
      {submitted && (
        <div className="mb-6 p-4 bg-parchment text-bark text-xs font-body font-medium border border-bark/20 rounded-xl">
          Terima kasih. Pesan Anda telah diterima dan tim kami akan segera merespons.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-body font-medium text-[10px] uppercase tracking-wider text-muted font-medium">
            Nama Lengkap <span className="text-bark">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap Anda"
            className="w-full bg-cream border border-fog/60 px-4 py-3 text-xs md:text-sm text-ink placeholder-muted/60 focus:outline-none focus:border-bark transition-colors rounded-xl"
            required
          />
        </div>

        {/* Email or WhatsApp */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact" className="font-body font-medium text-[10px] uppercase tracking-wider text-muted font-medium">
            Email atau No. WhatsApp <span className="text-bark">*</span>
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="E.g. email@domain.com atau 0812xxxxxx"
            className="w-full bg-cream border border-fog/60 px-4 py-3 text-xs md:text-sm text-ink placeholder-muted/60 focus:outline-none focus:border-bark transition-colors rounded-xl"
            required
          />
        </div>

        {/* Purpose */}
        <div className="flex flex-col gap-2">
          <label htmlFor="purpose" className="font-body font-medium text-[10px] uppercase tracking-wider text-muted font-medium">
            Keperluan Pesan
          </label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full bg-cream border border-fog/60 px-4 py-3 text-xs md:text-sm text-ink focus:outline-none focus:border-bark transition-colors rounded-xl cursor-pointer"
          >
            <option value="Produk">Informasi Produk Kopi</option>
            <option value="Kemitraan">Kemitraan & Distribusi</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-body font-medium text-[10px] uppercase tracking-wider text-muted font-medium">
            Isi Pesan <span className="text-bark">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tuliskan detail pertanyaan atau keperluan Anda..."
            className="w-full bg-cream border border-fog/60 px-4 py-3 text-xs md:text-sm text-ink placeholder-muted/60 focus:outline-none focus:border-bark transition-colors resize-none rounded-xl"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="mt-2">
          <Button type="submit" variant="primary" className="w-full py-4">
            Kirim Pesan
          </Button>
        </div>
      </form>
    </div>
  );
}
