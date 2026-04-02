"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, // Semakin kecil nilainya, semakin "licin" dan panjang momentumnya (default 0.1)
        duration: 1.5, // Durasi scroll
        smoothWheel: true, // Mengaktifkan smooth scroll untuk mouse wheel
      }}
    >
      {children}
    </ReactLenis>
  );
}