import React from 'react';
import { Metadata } from 'next';
import TentangKamiClient from './TentangKamiClient';

export const metadata: Metadata = {
  title: 'Tentang Kami — Sejarah & Visi Misi Produsen Kopi',
  description: 'Mengenal sejarah Kopi Bintang Pringsewu, CV. Harapan Buah Hati Mandiri Tunggal di Lampung. Nilai-nilai perusahaan, legalitas resmi, visi dan misi kami.',
  keywords: [
    'kopi bubuk lampung',
    'kopi bubuk',
    'kopi bubuk bintang pringsewu',
    'kopi bintang',
    'sejarah kopi pringsewu',
    'profil cv harapan buah hati mandiri tunggal'
  ],
};

export default function TentangKami() {
  return <TentangKamiClient />;
}
