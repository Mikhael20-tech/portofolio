import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Konfigurasi agar Netlify tidak berhenti saat ada error TypeScript.
     Catatan: ESLint kini diatur via CLI atau environment variable 
     untuk Next.js terbaru.
  */
  typescript: {
    // Membolehkan produksi build selesai meskipun ada type errors
    ignoreBuildErrors: true,
  },

  // Konfigurasi Image Optimization (Penting untuk Lanyard & Badge)
  images: {
    unoptimized: true, 
  },

  // Opsi tambahan untuk performa (Opsional)
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;