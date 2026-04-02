import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll"; // 1. Import komponen Lenis
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "myeap-portofolio",
  description: "A blend of poetic code and elegant design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      /* 2. Hapus scroll-smooth dari sini agar tidak bentrok dengan Lenis */
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] selection:bg-[#c4a484] selection:text-white">
        
        {/* 3. Bungkus seluruh isi web dengan SmoothScroll */}
        <SmoothScroll>
          {children}
        </SmoothScroll>

      </body>
    </html>
  );
}