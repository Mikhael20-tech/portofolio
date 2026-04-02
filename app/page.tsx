"use client";

import React, { useEffect } from "react";
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

  // Efek untuk memastikan semua link anchor (#) berjalan smooth lewat Lenis
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const intellectualProperty = [
    {
      type: "Hak Kekayaan Intelektual",
      title: "Web Penjualan Sport Wear",
      desc: "Sistem e-commerce terintegrasi untuk distribusi perlengkapan olahraga modern.",
      status: "Registered — 2024",
      hoverColor: "group-hover:border-[#ff5c7a]/60 hover:shadow-[0_10px_40px_rgba(255,92,122,0.2)]",
      lineColor: "from-transparent via-[#ff5c7a] to-transparent"
    },
    {
      type: "Jurnal Ilmiah",
      title: "Penggunaan Framework Siticone Dalam Pengembangan Aplikasi Kuis",
      desc: "Eksplorasi efisiensi antarmuka pengguna pada sistem evaluasi pendidikan berbasis desktop.",
      status: "Published Journal",
      hoverColor: "group-hover:border-[#8a5cff]/60 hover:shadow-[0_10px_40px_rgba(138,92,255,0.2)]",
      lineColor: "from-transparent via-[#8a5cff] to-transparent"
    },
    {
      type: "Publikasi Buku",
      title: "Strategi Inovatif dalam Pengembangan Media Pembelajaran Interaktif",
      desc: "Karya literasi mengenai metodologi pengembangan ekosistem digital untuk edukasi.",
      status: "Official Publication",
      hoverColor: "group-hover:border-[#00ffd1]/60 hover:shadow-[0_10px_40px_rgba(0,255,209,0.2)]",
      lineColor: "from-transparent via-[#00ffd1] to-transparent"
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
    <main className="relative bg-[#050505] min-h-screen selection:bg-[#8a5cff] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1] z-[100] origin-left shadow-[0_0_15px_rgba(138,92,255,0.8)]" 
        style={{ scaleX }} 
      />

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#050505]"></div>
      </div>

      <div className="relative z-10">
        
        <section id="hero" className="min-h-screen flex items-center pt-24 md:pt-0">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 px-6 md:px-20 relative">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full md:w-[60%] h-[80%] bg-black/40 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="col-span-1 md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-center md:text-left"
            >
              <span className="text-white/80 font-serif italic mb-6 block tracking-[0.5em] text-[10px] uppercase font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Curator — Developer — Author
              </span>
              
              <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extralight tracking-tighter leading-[1.1] mb-10 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
                Mikhael Yuli <br />
                Ananda <span className="font-serif italic font-medium bg-gradient-to-r from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1] text-transparent bg-clip-text">Elvan Permana.</span>
              </h1>
              
              <p className="text-white/80 max-w-sm mx-auto md:mx-0 text-sm md:text-lg italic font-light tracking-widest leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                "Harmonisasi antara kompleksitas logika dan kemurnian estetika visual."
              </p>
            </motion.div>
            
            <div className="col-span-1 md:col-span-5 h-[250px] sm:h-[350px] md:h-[750px] flex items-center justify-center order-1 md:order-2 cursor-grab active:cursor-grabbing drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transform scale-75 sm:scale-90 md:scale-100 origin-center mb-8 md:mb-0">
               <Lanyard position={[0, 0, 15]} gravity={[0, -45, 0]} />
            </div>
          </div>
        </section>

        <Certifications />

        <section id="work" className="py-32 md:py-56 px-6 md:px-20 container mx-auto border-t border-white/5 bg-black/40 backdrop-blur-md">
          <div className="max-w-4xl mx-auto text-center mb-28">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a5cff] to-[#00ffd1] font-serif italic text-xs uppercase tracking-[0.6em] mb-6 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">The Archive</h2>
            <p className="text-4xl md:text-7xl font-extralight text-white tracking-tighter leading-none text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                Intelektualitas & <br/><span className="italic font-serif opacity-70">Karya Terpilih.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {intellectualProperty.map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -15 }} 
                className={`p-10 md:p-14 bg-[#101010]/60 backdrop-blur-2xl border border-white/5 relative group transition-all duration-700 ease-out rounded-[3.5rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] ${item.hoverColor}`}
              >
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${item.lineColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white/90 transition-colors font-bold block mb-10">{item.type}</span>
                <h4 className="text-2xl md:text-3xl font-normal text-white leading-snug mb-8">{item.title}</h4>
                <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-10 italic">"{item.desc}"</p>
                <div className="flex items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-[1px] bg-white"></div>
                  <span className="text-[10px] tracking-widest uppercase text-white font-semibold">{item.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="py-32 md:py-56 px-6 md:px-20 container mx-auto border-t border-white/5 relative bg-gradient-to-b from-transparent to-black/50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
             <div className="md:col-span-6 lg:col-span-6 p-10 md:p-12 border border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-serif italic text-3xl md:text-4xl mb-16 opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Jejak Pendidikan</h4>
                <div className="space-y-12">
                  {[
                    { level: "Pendidikan Tinggi", name: "Universitas Negeri Surabaya", info: "Angkatan 2024", color: "group-hover:text-[#ff5c7a]" },
                    { level: "Menengah Atas", name: "SMAN 1 Magetan", info: "Lulus 2023", color: "group-hover:text-[#8a5cff]" },
                    { level: "Menengah Pertama", name: "SMPN 4 Magetan", info: "Lulus 2020", color: "group-hover:text-[#00ffd1]" },
                    { level: "Dasar", name: "SDK Santa Maria Magetan", info: "Lulus 2017", color: "group-hover:text-white" }
                  ].map((edu, i) => (
                    <div key={i} className="group flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/10 pb-6 gap-2 cursor-default">
                      <div>
                        <span className="text-white/50 text-[9px] uppercase tracking-[0.4em] font-bold block mb-2">{edu.level}</span>
                        <p className={`text-white text-xl md:text-2xl font-light italic font-serif transition-colors duration-500 ${edu.color}`}>{edu.name}</p>
                      </div>
                      <span className="text-[9px] text-white/40 tracking-widest uppercase sm:mb-1 font-semibold">{edu.info}</span>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center">
                <div className="p-10 md:p-12 border border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.5)] h-full relative">
                  <div className="absolute top-0 right-0 p-8">
                    <div className="w-2 h-2 rounded-full bg-[#00ffd1] animate-pulse shadow-[0_0_10px_#00ffd1]"></div>
                  </div>
                  <h4 className="text-white font-serif italic text-3xl md:text-4xl mb-12 opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Dimensi Ketertarikan</h4>
                  
                  <div className="space-y-8">
                     <motion.div whileHover={{ x: 10 }} className="cursor-default border-l-2 border-[#ff5c7a] pl-5 group">
                        <span className="text-[#ff5c7a] text-[9px] uppercase tracking-[0.3em] font-bold block mb-2 group-hover:text-white transition-colors">Engineering & Aesthetic</span>
                        <p className="text-white text-xl font-light italic font-serif leading-tight">Web Development</p>
                        <p className="text-[12px] text-white/60 mt-2 font-light leading-relaxed">Eksplorasi ekosistem modern seperti React dan Next.js, dipadukan dengan interaktivitas visual dan animasi 3D melalui GSAP serta Three.js.</p>
                     </motion.div>

                     <motion.div whileHover={{ x: 10 }} className="cursor-default border-l-2 border-[#8a5cff] pl-5 group">
                        <span className="text-[#8a5cff] text-[9px] uppercase tracking-[0.3em] font-bold block mb-2 group-hover:text-white transition-colors">Infrastructure</span>
                        <p className="text-white text-xl font-light italic font-serif leading-snug">Networking & Cybersecurity</p>
                        <p className="text-[12px] text-white/60 mt-2 font-light leading-relaxed">Mendalami fundamental arsitektur jaringan dan analisis keamanan siber untuk memastikan ketangguhan sebuah ekosistem digital.</p>
                     </motion.div>

                     <motion.div whileHover={{ x: 10 }} className="cursor-default border-l-2 border-[#00ffd1] pl-5 group">
                        <span className="text-[#00ffd1] text-[9px] uppercase tracking-[0.3em] font-bold block mb-2 group-hover:text-white transition-colors">Linguistics</span>
                        <p className="text-white text-xl font-light italic font-serif leading-snug">Studi Bahasa Asing</p>
                        <p className="text-[12px] text-white/60 mt-2 font-light leading-relaxed">Pembelajaran struktur bahasa secara ekstensif, termasuk pendalaman pemahaman tata bahasa Korea pada tingkat menengah.</p>
                     </motion.div>

                     <motion.div whileHover={{ x: 10 }} className="cursor-default border-l-2 border-white pl-5 group">
                        <span className="text-white/70 text-[9px] uppercase tracking-[0.3em] font-bold block mb-2 group-hover:text-white transition-colors">Arts & Sound</span>
                        <p className="text-white text-xl font-light italic font-serif leading-snug">Aransemen Musik</p>
                        <p className="text-[12px] text-white/60 mt-2 font-light leading-relaxed">Eksplorasi dalam menciptakan komposisi dan harmonisasi nada, dengan kecenderungan pada progresi bernuansa Gospel dan Jazz.</p>
                     </motion.div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        <section id="contact" className="py-48 md:py-80 px-6 md:px-20 container mx-auto border-t border-white/5 text-center relative overflow-hidden bg-[#050505]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#8a5cff]/10 blur-[150px] pointer-events-none"></div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/50 font-serif italic mb-16 tracking-[0.8em] uppercase text-[10px] font-bold"
          >
            Collaborate
          </motion.h2>
          
          <div className="relative z-10">
            <a href="mailto:24050974086@mhs.unesa.ac.id" className="group inline-block mb-32 relative">
              <span className="text-5xl sm:text-7xl md:text-[9rem] font-light text-white tracking-tighter italic block lowercase leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,1)] transition-all duration-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff5c7a] group-hover:via-[#8a5cff] group-hover:to-[#00ffd1]">
                Get in touch.
              </span>
            </a>

            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 max-w-4xl mx-auto">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-4">
                  <div className="p-6 border border-white/20 rounded-full bg-white/[0.05] text-white/70 group-hover:text-white group-hover:bg-[#8a5cff]/30 group-hover:border-[#8a5cff]/50 group-hover:shadow-[0_0_20px_rgba(138,92,255,0.4)] transition-all duration-500">
                    {social.icon}
                  </div>
                  <span className="text-white/60 text-[10px] font-semibold tracking-[0.3em] uppercase block group-hover:text-[#00ffd1] transition-colors duration-500">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-20 text-[9px] tracking-[1em] uppercase text-center font-bold text-white/30 border-t border-white/5 bg-[#050505]">
          © 2026 — Mikhael Yuli Ananda Elvan Permana.
        </footer>
      </div>
    </main>
  );
}