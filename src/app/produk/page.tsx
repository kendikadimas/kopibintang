import React from 'react';
import { Metadata } from 'next';
import ProdukClient from './ProdukClient';

export const metadata: Metadata = {
  title: 'Kopi Bubuk Bintang Pringsewu — Robusta Lampung Premium',
  description: 'Beli Kopi Bubuk Bintang Pringsewu, kopi bubuk robusta Lampung pilihan petani lokal. Diproses secara higienis, rasa klasik tebal, aroma cokelat manis.',
  keywords: [
    'kopi bubuk lampung',
    'kopi bubuk',
    'kopi bubuk bintang pringsewu',
    'kopi bintang',
    'kopi robusta premium',
    'kopi bubuk murni',
    'kopi robusta pringsewu'
  ],
};

export default function Produk() {
  return <ProdukClient />;
}
