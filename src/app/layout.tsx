import type { Metadata } from "next";
import { Calistoga, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE_META } from "@/lib/constants";

const calistoga = Calistoga({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kopibintangpringsewu-official.com"),
  title: {
    default: `${SITE_META.name} — ${SITE_META.tagline}`,
    template: `%s | ${SITE_META.name}`,
  },
  description: SITE_META.description,
  keywords: [
    "kopi bubuk",
    "kopi lampung",
    "kopi bintang pringsewu",
    "kopi bintang",
    "website kopi",
    "umkm kopi",
    "kopi bubuk lampung",
    "kopi robusta lampung",
    "pringsewu",
    "cv harapan buah hati mandiri tunggal",
    "kemitraan kopi",
    "distributor kopi"
  ],
  authors: [{ name: "Kopi Bintang Pringsewu" }, { name: "Kalana Labs", url: "https://kalanalabs.com" }],
  creator: "Kopi Bintang Pringsewu",
  publisher: "CV. Harapan Buah Hati Mandiri Tunggal",
  openGraph: {
    title: SITE_META.name,
    description: SITE_META.description,
    url: "https://kopibintangpringsewu-official.com",
    siteName: SITE_META.name,
    images: [
      {
        url: "/images/product.webp",
        width: 800,
        height: 600,
        alt: "Kopi Bubuk Bintang Pringsewu",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.name,
    description: SITE_META.description,
    images: ["/images/product.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="id"
        className={`${calistoga.variable} ${outfit.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
