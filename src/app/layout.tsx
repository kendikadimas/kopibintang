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
  title: {
    default: `${SITE_META.name} — ${SITE_META.tagline}`,
    template: `%s | ${SITE_META.name}`,
  },
  description: SITE_META.description,
  keywords: [
    "kopi bubuk lampung",
    "kopi bubuk",
    "kopi bubuk bintang pringsewu",
    "kopi bintang",
    "kopi robusta lampung",
    "pringsewu",
    "cv harapan buah hati mandiri tunggal",
    "kemitraan kopi",
    "distributor kopi"
  ],
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
