import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"; // Tambahkan Playfair_Display
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
      /* Tambahkan playfair.variable di sini */
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] selection:bg-[#c4a484] selection:text-white">
        {children}
      </body>
    </html>
  );
}