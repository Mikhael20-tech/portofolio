"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Lanyard from "@/components/Lanyard";
import ColorBends from "@/components/ColorBends";
import Certifications from "@/components/Certifications";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const archiveItems = [
    { 
      type: "Spiritual & Leadership", 
      title: "Pelatihan Kebenaran Alkitab & Zona 235 Cikole", 
      desc: "Integrasi mendalam antara nilai spiritualitas Kristiani dan ketangkasan kepemimpinan lapangan.",
      status: "Certified — 2023 - 2025", 
      glow: "hover:border-[#ff5c7a]/60 hover:shadow-[0_20px_80px_rgba(255,92,122,0.25)]" 
    },
    { 
      type: "Intellectual Property", 
      title: "Web Penjualan Sport Wear", 
      desc: "Sistem distribusi perlengkapan olahraga modern dengan fokus pada skalabilitas dan keamanan data.",
      status: "Registered HKI 2024", 
      glow: "hover:border-[#8a5cff]/60 hover:shadow-[0_20px_80px_rgba(138,92,255,0.25)]" 
    },
    { 
      type: "Scientific Journal", 
      title: "Framework Siticone Dalam Aplikasi Kuis", 
      desc: "Analisis efisiensi antarmuka pengguna pada sistem evaluasi pendidikan berbasis desktop.",
      status: "Published 2024", 
      glow: "hover:border-[#00ffd1]/60 hover:shadow-[0_20px_80px_rgba(0,255,209,0.25)]" 
    },
    { 
      type: "Official Publication", 
      title: "Buku Media Pembelajaran Interaktif", 
      desc: "Karya literasi mengenai metodologi pengembangan ekosistem digital untuk edukasi masa kini.",
      status: "Published 2024", 
      glow: "hover:border-white/40 hover:shadow-[0_20px_80px_rgba(255,255,255,0.1)]" 
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/mikhaelyuli", icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> ) },
    { name: "GitHub", url: "https://github.com/Mikhael20-tech", icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> ) },
    { name: "Instagram", url: "https://instagram.com/myeap29", icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> ) }
  ];

  return (
    <main className="relative bg-[#050505] min-h-screen selection:bg-[#8a5cff] selection:text-white overflow-x-hidden">
      <Navbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1] z-[100] origin-left shadow-[0_0_20px_rgba(138,92,255,0.5)]" style={{ scaleX }} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ColorBends colors={["#ff5c7a", "#8a5cff", "#00ffd1"]} speed={0.5} scale={2.6} transparent={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505]"></div>
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section id="hero" className="min-h-screen flex items-center px-6 md:px-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className="col-span-1 md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
              <span className="text-white/50 font-serif italic mb-8 block tracking-[0.6em] text-[11px] uppercase font-bold">Curator — Developer — Author</span>
              <h1 className="text-6xl sm:text-7xl md:text-[6.5rem] font-extralight tracking-tighter leading-[1.0] mb-12 text-white drop-shadow-2xl">
                Mikhael Yuli <br /> Ananda <span className="font-serif italic font-medium bg-gradient-to-r from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1] text-transparent bg-clip-text">Elvan Permana.</span>
              </h1>
              <p className="text-white/70 max-w-md mx-auto md:mx-0 text-lg md:text-xl italic font-light tracking-widest leading-relaxed">"Harmonisasi antara kompleksitas logika dan kemurnian estetika visual."</p>
            </motion.div>
            <div className="col-span-1 md:col-span-5 h-[450px] md:h-[850px] flex items-center justify-center order-1 md:order-2 transform scale-90 md:scale-110 origin-center">
               <Lanyard position={[0, 0, 15]} gravity={[0, -50, 0]} />
            </div>
          </div>
        </section>

        <Certifications />

        {/* ABOUT ME SECTION - RINCI & MEWAH */}
        <section id="about" className="py-48 md:py-64 px-6 md:px-20 container mx-auto border-t border-white/5 relative bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="lg:col-span-7">
                <h2 className="text-[#8a5cff] font-serif italic text-sm uppercase tracking-[0.8em] mb-10 font-bold">The Persona</h2>
                <p className="text-5xl md:text-[5.5rem] font-extralight text-white tracking-tighter leading-tight mb-12">
                  Building digital <span className="italic font-serif opacity-60">realms</span> with logic and <span className="text-[#00ffd1]">artistry.</span>
                </p>
                <div className="space-y-8 text-xl text-white/60 font-light leading-relaxed italic">
                  <p>Saya adalah mahasiswa Pendidikan Teknologi Informasi di <strong>Universitas Negeri Surabaya (UNESA)</strong> yang mendalami pengembangan ekosistem digital modern.</p>
                  <p>Fokus utama saya mencakup Full-stack Web Development, Network Architecture, dan Cybersecurity—memastikan setiap karya memiliki visual yang memukau dan fondasi yang tak tergoyahkan.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5 p-16 bg-white/[0.02] backdrop-blur-3xl rounded-[5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                <h4 className="text-white font-serif italic text-3xl mb-12">Jejak Pendidikan</h4>
                <div className="space-y-12 relative z-10">
                  {[
                    { yr: "2024 — Present", sch: "Universitas Negeri Surabaya", maj: "S1 Pend. TI", cl: "text-[#00ffd1]" },
                    { yr: "2020 — 2023", sch: "SMAN 1 Magetan", maj: "MIPA", cl: "text-[#8a5cff]" },
                    { yr: "2017 — 2020", sch: "SMPN 4 Magetan", maj: "General Studies", cl: "text-[#ff5c7a]" },
                    { yr: "2011 — 2017", sch: "SDK Santa Maria Magetan", maj: "Elementary", cl: "text-white/40" }
                  ].map((edu, i) => (
                    <div key={i} className="group/item border-l border-white/10 pl-6 py-2 transition-all hover:border-white/40">
                      <span className={`text-[11px] uppercase tracking-[0.4em] font-bold ${edu.cl} mb-2 block`}>{edu.yr}</span>
                      <p className="text-white text-2xl font-medium mb-1">{edu.sch}</p>
                      <p className="text-white/40 text-sm italic font-serif">{edu.maj}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* THE ARCHIVE SECTION */}
        <section id="work" className="py-48 md:py-64 px-6 md:px-20 container mx-auto border-t border-white/5 bg-black/40 backdrop-blur-2xl">
          <div className="max-w-5xl mx-auto text-center mb-36">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a5cff] to-[#00ffd1] font-serif italic text-sm uppercase tracking-[0.8em] mb-8 font-bold">The Archive</h2>
            <p className="text-5xl md:text-8xl font-extralight text-white tracking-tighter leading-none text-center">Intelektualitas & <br/><span className="italic font-serif opacity-70">Karya Terpilih.</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {archiveItems.map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -25, scale: 1.02 }} 
                className={`p-20 bg-white/[0.02] backdrop-blur-2xl border border-white/10 relative group transition-all duration-700 ease-out rounded-[5.5rem] overflow-hidden shadow-2xl ${item.glow}`}
              >
                <span className="text-[11px] tracking-[0.4em] uppercase text-white/40 font-bold block mb-12">{item.type}</span>
                <h4 className="text-4xl font-normal text-white mb-10 leading-snug">{item.title}</h4>
                <p className="text-lg text-white/60 font-light leading-relaxed mb-12 italic">"{item.desc}"</p>
                <div className="flex items-center gap-6 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-12 h-[1px] bg-white"></div>
                  <span className="text-[11px] tracking-[0.4em] uppercase text-white font-bold">{item.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION - MEGAH & JELAS */}
        <section id="contact" className="py-64 md:py-96 text-center relative z-30 bg-[#050505] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#8a5cff]/15 blur-[200px] pointer-events-none -z-10"></div>
          
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-white/30 font-serif italic mb-20 tracking-[1.2em] uppercase text-xs font-bold">Collaborate</motion.h2>
          
          <div className="relative inline-block group z-40">
            <a href="mailto:mikhaelyuli13@gmail.com" className="block px-4">
              <span className="text-6xl sm:text-8xl md:text-[13rem] font-light text-white tracking-tighter italic block lowercase leading-none transition-all duration-1000 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff5c7a] group-hover:via-[#8a5cff] group-hover:to-[#00ffd1] drop-shadow-2xl">
                Get in touch.
              </span>
            </a>
            <div className="mt-10 w-24 h-[1px] bg-white/20 mx-auto transition-all duration-700 group-hover:w-full group-hover:bg-white/40"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mt-48 px-6">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-5 transition-transform hover:-translate-y-3">
                <div className="p-8 border border-white/10 rounded-full bg-white/[0.03] text-white/60 group-hover:text-white group-hover:bg-[#8a5cff]/20 group-hover:border-[#8a5cff]/50 transition-all duration-500">
                  {social.icon}
                </div>
                <span className="text-white/40 text-[11px] font-bold tracking-[0.4em] uppercase block group-hover:text-white transition-colors duration-500">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="py-24 text-[10px] tracking-[1.2em] uppercase text-center font-bold text-white/20 border-t border-white/5 bg-black">
          © 2026 — Mikhael Yuli Ananda Elvan Permana.
        </footer>
      </div>
    </main>
  );
}