import React from 'react';
import { Metadata } from 'next';
import TentangKamiClient from './TentangKamiClient';

export const metadata: Metadata = {
  title: 'Tentang Kopi Bintang Pringsewu — Produsen Kopi Lampung',
  description: 'Kenali perjalanan Kopi Bintang Pringsewu, UMKM kopi robusta Lampung yang dikelola CV. Harapan Buah Hati Mandiri Tunggal di Adiluwih. Menjaga kualitas sejak dari kebun.',
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
