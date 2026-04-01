"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Lanyard from "@/components/Lanyard";
import ColorBends from "@/components/ColorBends";
import Certifications from "@/components/Certifications";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const intellectualProperty = [
    {
      type: "Hak Kekayaan Intelektual",
      title: "Web Penjualan Sport Wear",
      desc: "Sistem e-commerce terintegrasi untuk distribusi perlengkapan olahraga modern.",
      status: "Registered — 2024"
    },
    {
      type: "Jurnal Ilmiah",
      title: "Penggunaan Framework Siticone Dalam Pengembangan Aplikasi Kuis",
      desc: "Eksplorasi efisiensi antarmuka pengguna pada sistem evaluasi pendidikan berbasis desktop.",
      status: "Published Journal"
    },
    {
      type: "Publikasi Buku",
      title: "Strategi Inovatif dalam Pengembangan Media Pembelajaran Interaktif",
      desc: "Karya literasi mengenai metodologi pengembangan ekosistem digital untuk edukasi.",
      status: "Official Publication"
    }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/mikhaelyuli", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    { 
      name: "GitHub", 
      url: "https://github.com/Mikhael20-tech", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      )
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/myeap29", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    }
  ];

  return (
    <main className="relative bg-[#050505] min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[100] origin-left shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
        style={{ scaleX }} 
      />

      {/* BACKGROUND EFFECTS (Z-0) - WARNA WARNI MURNI */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]} 
          rotation={174}
          speed={0.63}
          scale={2.4}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={2}
          noise={0.1}
          transparent={true}
          autoRotate={5}
        />
        {/* Overlay tipis agar konten tetap readable tanpa mematikan warna shader */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#050505]"></div>
      </div>

      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-screen flex items-center pt-24 md:pt-0">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 px-6 md:px-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="col-span-1 md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-center md:text-left"
            >
              <span className="text-white/70 font-serif italic mb-6 block tracking-[0.5em] text-[10px] uppercase font-bold drop-shadow-sm">
                Curator — Developer — Author
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extralight tracking-tighter leading-[1.1] mb-10 text-white drop-shadow-2xl">
                Mikhael Yuli <br />
                Ananda <span className="font-serif italic opacity-80">Elvan Permana.</span>
              </h1>
              <p className="text-white/60 max-w-sm mx-auto md:mx-0 text-sm md:text-lg italic font-light tracking-widest leading-relaxed">
                "Harmonisasi antara kompleksitas logika dan kemurnian estetika visual."
              </p>
            </motion.div>
            
            <div className="col-span-1 md:col-span-5 h-[450px] md:h-[750px] flex items-center justify-center order-1 md:order-2 cursor-grab active:cursor-grabbing drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
               <Lanyard position={[0, 0, 15]} gravity={[0, -45, 0]} />
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS (BADGES) */}
        <Certifications />

        {/* WORK ARCHIVE */}
        <section id="work" className="py-32 md:py-56 px-6 md:px-20 container mx-auto border-t border-white/5 bg-black/20 backdrop-blur-[2px]">
          <div className="max-w-4xl mx-auto text-center mb-28">
            <h2 className="text-white/40 font-serif italic text-xs uppercase tracking-[0.6em] mb-6 font-bold">The Archive</h2>
            <p className="text-4xl md:text-7xl font-extralight text-white tracking-tighter leading-none text-center">
                Intelektualitas & <br/><span className="italic font-serif opacity-40">Karya Terpilih.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {intellectualProperty.map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -15 }} 
                className="p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 relative group transition-all duration-500 rounded-[2rem] overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 font-bold block mb-10">{item.type}</span>
                <h4 className="text-2xl font-extralight text-white leading-snug mb-8">{item.title}</h4>
                <p className="text-[13px] text-white/40 font-light leading-relaxed mb-10 italic">"{item.desc}"</p>
                <div className="flex items-center gap-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-[1px] bg-white"></div>
                  <span className="text-[8px] tracking-widest uppercase text-white">{item.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT / EDUCATION */}
        <section id="about" className="py-32 md:py-56 px-6 md:px-20 container mx-auto border-t border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-24">
             <div className="md:col-span-7">
                <h4 className="text-white font-serif italic text-4xl mb-16 opacity-90">Jejak Pendidikan</h4>
                <div className="space-y-12">
                  {[
                    { level: "Pendidikan Tinggi", name: "Universitas Negeri Surabaya", info: "Angkatan 2024" },
                    { level: "Menengah Atas", name: "SMAN 1 Magetan", info: "Lulus 2023" },
                    { level: "Menengah Pertama", name: "SMPN 4 Magetan", info: "Lulus 2020" },
                    { level: "Dasar", name: "SDK Santa Maria Magetan", info: "Lulus 2017" }
                  ].map((edu, i) => (
                    <div key={i} className="group flex justify-between items-end border-b border-white/5 pb-6">
                      <div>
                        <span className="text-white/30 text-[9px] uppercase tracking-[0.4em] font-bold block mb-2">{edu.level}</span>
                        <p className="text-white text-2xl font-extralight italic font-serif group-hover:opacity-60 transition-all duration-500">{edu.name}</p>
                      </div>
                      <span className="text-[9px] text-white/20 tracking-widest uppercase mb-1">{edu.info}</span>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="md:col-span-5 flex flex-col justify-center">
                <div className="p-12 border border-white/5 bg-white/[0.02] backdrop-blur-2xl relative rounded-[2.5rem]">
                  <div className="absolute top-0 right-0 p-8">
                    <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse"></div>
                  </div>
                  <h4 className="text-white font-serif italic text-2xl mb-12 opacity-80">Fase Eksplorasi</h4>
                  <div className="space-y-10">
                     <motion.div whileHover={{ x: 10 }} className="cursor-default">
                        <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">Self Development</span>
                        <p className="text-white text-xl font-extralight italic font-serif leading-tight">Zona 235 Cikole</p>
                        <p className="text-[10px] text-white/20 mt-2 uppercase tracking-widest italic">Completed — 2023</p>
                     </motion.div>
                     <motion.div whileHover={{ x: 10 }} className="cursor-default">
                        <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">Spiritual Identity</span>
                        <p className="text-white text-xl font-extralight italic font-serif leading-snug">Pelatihan Kebenaran Alkitab — Lawang</p>
                        <p className="text-[10px] text-white/20 mt-2 uppercase tracking-widest italic">Completed — 2023</p>
                     </motion.div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-48 md:py-80 px-6 md:px-20 container mx-auto border-t border-white/5 text-center relative overflow-hidden">
          {/* Subtle Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#8a5cff]/5 blur-[150px] pointer-events-none"></div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/30 font-serif italic mb-16 tracking-[0.8em] uppercase text-[10px] font-bold"
          >
            Collaborate
          </motion.h2>
          
          <div className="relative z-10">
            <a href="mailto:24050974086@mhs.unesa.ac.id" className="group inline-block mb-32">
              <span className="text-5xl sm:text-7xl md:text-[9rem] font-extralight text-white hover:opacity-50 transition-all duration-1000 tracking-tighter italic block lowercase leading-none drop-shadow-2xl">
                Get in touch.
              </span>
            </a>

            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 max-w-4xl mx-auto">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" className="group flex flex-col items-center gap-4">
                  <div className="p-6 border border-white/10 rounded-full bg-white/[0.03] text-white/40 group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-500">
                    {social.icon}
                  </div>
                  <span className="text-white/40 text-[9px] font-light tracking-[0.3em] uppercase block group-hover:text-white/80 transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-20 opacity-20 text-[8px] tracking-[1em] uppercase text-center font-light border-t border-white/5">
          © 2026 — Mikhael Yuli Ananda Elvan Permana.
        </footer>
      </div>
    </main>
  );
}