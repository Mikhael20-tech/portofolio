"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Lanyard from "@/components/Lanyard";
import ColorBends from "@/components/ColorBends";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const certifications = [
    { title: "Web Development (Node.js)", issuer: "Progate", src: "/assets/sertifikasi/nodejs.png" },
    { title: "Intermediate Korean Language", issuer: "Sungkyunkwan University", src: "/assets/sertifikasi/koreanint.jpeg" },
    { title: "Dasar Pemrograman JavaScript", issuer: "Dicoding", src: "/assets/sertifikasi/dicoding.png" },
    { title: "Command Line Fundamental", issuer: "Progate", src: "/assets/sertifikasi/comline.png" },
    { title: "Git Fundamental", issuer: "Progate", src: "/assets/sertifikasi/git.png" },
    { title: "Go Programming Language", issuer: "Progate", src: "/assets/sertifikasi/go.png" },
  ];

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
      label: "Professional",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    { 
      name: "GitHub", 
      url: "https://github.com/Mikhael20-tech", 
      label: "Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      )
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/myeap29", 
      label: "Curated Visuals",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    }
  ];

  return (
    <main className="relative bg-[#050505] min-h-screen selection:bg-[#c4a484] selection:text-black">
      <Navbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#c4a484] z-[100] origin-left" style={{ scaleX }} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ColorBends colors={["#0a0a0a", "#121212", "#050505"]} speed={0.01} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050505]/60 to-[#050505]"></div>
      </div>

      <div className="relative z-10">
        
        {/* HERO */}
        <section id="hero" className="min-h-screen flex items-center pt-24 md:pt-0">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 px-6 md:px-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="col-span-1 md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-center md:text-left"
            >
              <span className="text-[#c4a484] font-serif italic mb-6 block tracking-[0.5em] text-[10px] uppercase font-bold">
                Curator — Developer — Author
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-extralight tracking-tighter leading-[1.1] mb-10 text-white">
                Mikhael Yuli <br />
                Ananda <span className="font-serif italic text-[#c4a484]">Elvan Permana.</span>
              </h1>
              <p className="text-gray-500 max-w-sm mx-auto md:mx-0 text-sm md:text-lg italic font-light tracking-widest leading-relaxed">
                "Harmonisasi antara kompleksitas logika dan kemurnian estetika."
              </p>
            </motion.div>
            
            <div className="col-span-1 md:col-span-5 h-[450px] md:h-[750px] flex items-center justify-center order-1 md:order-2 cursor-grab active:cursor-grabbing">
               <Lanyard position={[0, 0, 15]} gravity={[0, -45, 0]} />
            </div>
          </div>
        </section>

        {/* ARCHIVE */}
        <section id="work" className="py-32 md:py-56 px-6 md:px-20 container mx-auto border-t border-white/5 bg-[#070707]/20">
          <div className="max-w-4xl mx-auto text-center mb-28">
            <h2 className="text-[#c4a484] font-serif italic text-xs uppercase tracking-[0.6em] mb-6 font-bold">The Archive</h2>
            <p className="text-4xl md:text-7xl font-extralight text-white tracking-tighter leading-none text-center">
               Intelektualitas & <span className="italic font-serif opacity-60">Karya Terpilih.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {intellectualProperty.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -15 }} className="p-12 bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 relative group transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c4a484] scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#c4a484] font-bold block mb-10">{item.type}</span>
                <h4 className="text-2xl font-extralight text-white leading-snug mb-8">{item.title}</h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-10 italic">"{item.desc}"</p>
                <div className="flex items-center gap-4 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-[1px] bg-[#c4a484]"></div>
                  <span className="text-[8px] tracking-widest uppercase">{item.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-32 md:py-56 px-6 md:px-20 container mx-auto border-t border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-24">
             <div className="md:col-span-7">
                <h4 className="text-white font-serif italic text-4xl mb-16">Jejak Pendidikan</h4>
                <div className="space-y-12">
                  {[
                    { level: "Pendidikan Tinggi", name: "Universitas Negeri Surabaya", info: "Angkatan 2024" },
                    { level: "Menengah Atas", name: "SMAN 1 Magetan", info: "Lulus 2023" },
                    { level: "Menengah Pertama", name: "SMPN 4 Magetan", info: "Lulus 2020" },
                    { level: "Dasar", name: "SDK Santa Maria Magetan", info: "Lulus 2017" }
                  ].map((edu, i) => (
                    <div key={i} className="group flex justify-between items-end border-b border-white/5 pb-6">
                      <div>
                        <span className="text-[#c4a484] text-[9px] uppercase tracking-[0.4em] font-bold block mb-2">{edu.level}</span>
                        <p className="text-white text-2xl font-extralight italic font-serif group-hover:text-[#c4a484] transition-colors duration-500">{edu.name}</p>
                      </div>
                      <span className="text-[9px] text-gray-600 tracking-widest uppercase mb-1">{edu.info}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="md:col-span-5 flex flex-col justify-center">
                <div className="p-12 border border-white/5 bg-[#080808]/40 backdrop-blur-xl relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-[#c4a484]/30 pointer-events-none"></div>
                  <h4 className="text-white font-serif italic text-2xl mb-12">Fase Eksplorasi (2023)</h4>
                  <div className="space-y-10">
                     <motion.div whileHover={{ x: 10 }}>
                        <span className="text-[#c4a484] text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">Self Development</span>
                        <p className="text-white text-xl font-extralight italic font-serif leading-tight">Zona 235 Cikole</p>
                        <p className="text-[10px] text-gray-600 mt-2 uppercase tracking-widest italic">Completed — 2023</p>
                     </motion.div>
                     <motion.div whileHover={{ x: 10 }}>
                        <span className="text-[#c4a484] text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">Spiritual Identity</span>
                        <p className="text-white text-xl font-extralight italic font-serif leading-snug">Pelatihan Kebenaran Alkitab — Lawang</p>
                        <p className="text-[10px] text-gray-600 mt-2 uppercase tracking-widest italic">Completed — 2023</p>
                     </motion.div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-32 md:py-56 px-6 md:px-20 container mx-auto border-t border-white/5">
          <div className="flex flex-col mb-28 items-center text-center">
            <h2 className="text-[10px] font-serif italic text-[#c4a484] mb-4 tracking-[0.6em] uppercase font-bold">Verified</h2>
            <p className="text-4xl md:text-6xl font-extralight text-white tracking-tighter">Certifications</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div key={index} whileHover={{ y: -12 }} className="group bg-[#0a0a0a] border border-white/5 overflow-hidden">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img src={cert.src} alt={cert.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100" />
                </div>
                <div className="p-10 bg-[#0a0a0a]">
                  <span className="text-[#c4a484] font-serif italic text-[10px] mb-3 block tracking-[0.2em] uppercase font-bold">{cert.issuer}</span>
                  <h5 className="text-white text-lg font-extralight tracking-tight group-hover:text-[#c4a484] transition-colors duration-500">{cert.title}</h5>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT & SOCIAL */}
        <section id="contact" className="py-48 md:py-80 px-6 md:px-20 container mx-auto border-t border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c4a484]/5 blur-[120px] rounded-full pointer-events-none"></div>

          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#c4a484] font-serif italic mb-16 tracking-[0.8em] uppercase text-[10px] font-bold">Collaborate</motion.h2>

          <div className="relative z-10">
            <motion.a 
              href="mailto:24050974086@mhs.unesa.ac.id" 
              className="group flex flex-col items-center mb-32"
            >
              <div className="flex items-center gap-4 text-white/40 group-hover:text-[#c4a484] transition-colors mb-4 uppercase tracking-[0.4em] text-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>Send a Message</span>
              </div>
              <span className="text-4xl sm:text-7xl md:text-[8rem] font-extralight text-white hover:text-[#c4a484] transition-all duration-1000 tracking-tighter italic block lowercase leading-none">
                Get in touch.
              </span>
            </motion.a>

            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 max-w-4xl mx-auto">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col items-center gap-4"
                >
                  <div className="p-5 border border-white/5 rounded-full bg-[#080808] text-white/50 group-hover:text-[#c4a484] group-hover:border-[#c4a484]/30 group-hover:scale-110 transition-all duration-500">
                    {social.icon}
                  </div>
                  <div className="text-center">
                    <span className="text-white text-xs font-light tracking-[0.2em] uppercase block">{social.name}</span>
                    <span className="text-[7px] text-gray-600 tracking-[0.3em] uppercase mt-1 block group-hover:text-gray-400 transition-colors">{social.label}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <p className="mt-32 text-gray-500 font-light tracking-[0.3em] uppercase text-[9px] italic">
            Surabaya, Indonesia — 2026 Edition
          </p>
        </section>

        <footer className="py-20 opacity-20 text-[8px] tracking-[0.6em] uppercase text-center font-light border-t border-white/5">
          © 2026 — Mikhael Yuli Ananda Elvan Permana.
        </footer>
      </div>
    </main>
  );
}