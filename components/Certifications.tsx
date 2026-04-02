'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 1. Data Badge Cisco
const badges = [
  {
    id: 1,
    src: '/assets/badge/nb.png',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    color: 'bg-[#00ffd1]/5', 
    neonColor: '#00ffd1',
    hoverBorder: 'group-hover:border-[#00ffd1]/50 group-hover:shadow-[0_10px_40px_rgba(0,255,209,0.2)]',
    hoverText: 'group-hover:text-[#00ffd1]'
  },
  {
    id: 2,
    src: '/assets/badge/ict.png',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    color: 'bg-[#ff5c7a]/5',
    neonColor: '#ff5c7a',
    hoverBorder: 'group-hover:border-[#ff5c7a]/50 group-hover:shadow-[0_10px_40px_rgba(255,92,122,0.2)]',
    hoverText: 'group-hover:text-[#ff5c7a]'
  },
  {
    id: 3,
    src: '/assets/badge/js.png',
    title: 'Junior Cybersecurity Analyst',
    issuer: 'Cisco Networking Academy',
    color: 'bg-[#8a5cff]/5',
    neonColor: '#8a5cff',
    hoverBorder: 'group-hover:border-[#8a5cff]/50 group-hover:shadow-[0_10px_40px_rgba(138,92,255,0.2)]',
    hoverText: 'group-hover:text-[#8a5cff]'
  }
];

// 2. Data Logo Sertifikasi Lainnya
const certificates = [
  { name: "Command Line", src: "/assets/sertifikasi/comline.png" },
  { name: "Dicoding", src: "/assets/sertifikasi/dicoding.png" },
  { name: "Git", src: "/assets/sertifikasi/git.png" },
  { name: "Golang", src: "/assets/sertifikasi/go.png" },
  { name: "Node.js", src: "/assets/sertifikasi/nodejs.png" },
  { name: "Korean Intermediate", src: "/assets/sertifikasi/koreanint.jpeg" },
];

// Helper function untuk memberikan warna tema neon secara berurutan
const getThemeColors = (index: number) => {
  const themes = [
    { neon: '#ff5c7a', borderHover: 'group-hover:border-[#ff5c7a]/60', shadowHover: 'group-hover:shadow-[0_10px_40px_rgba(255,92,122,0.2)]', bg: 'bg-[#ff5c7a]/5' }, // Pink
    { neon: '#8a5cff', borderHover: 'group-hover:border-[#8a5cff]/60', shadowHover: 'group-hover:shadow-[0_10px_40px_rgba(138,92,255,0.2)]', bg: 'bg-[#8a5cff]/5' }, // Purple
    { neon: '#00ffd1', borderHover: 'group-hover:border-[#00ffd1]/60', shadowHover: 'group-hover:shadow-[0_10px_40px_rgba(0,255,209,0.2)]', bg: 'bg-[#00ffd1]/5' }, // Cyan
  ];
  return themes[index % themes.length];
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 md:py-48 relative overflow-hidden bg-[#020202]">
      
      {/* ==================================================== */}
      {/* EFEK LATAR BELAKANG                                  */}
      {/* ==================================================== */}
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8a5cff]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00ffd1]/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ==================================================== */}
        {/* BAGIAN 1: VERIFIED SKILLS (CISCO BADGES)             */}
        {/* ==================================================== */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#00ffd1] animate-pulse shadow-[0_0_10px_#00ffd1]"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-bold">Milestones & Validation</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extralight tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Verified <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1]">Skills.</span>
            </h2>
          </motion.div>
          
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8 hidden lg:block mb-6"></div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 uppercase text-[11px] tracking-[0.3em] font-bold md:mb-6 md:text-right max-w-xs leading-relaxed"
          >
            Cisco Networking Academy <br/> Certifications
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-40">
          {badges.map((badge, index) => (
            <motion.div 
              key={badge.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group relative bg-[#0a0a0a]/80 backdrop-blur-2xl p-8 md:p-10 rounded-[3rem] border border-white/5 transition-all duration-700 ease-out cursor-pointer hover:-translate-y-3 ${badge.hoverBorder}`}
            >
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${badge.neonColor}, transparent 70%)` }}></div>

              <div className={`relative aspect-square w-full mb-8 rounded-[2rem] overflow-hidden flex items-center justify-center ${badge.color} group-hover:bg-white/[0.05] transition-all duration-500`}>
                <Image 
                  src={badge.src}
                  alt={badge.title}
                  width={250}
                  height={250}
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-700 ease-out"
                />
              </div>

              <div className="space-y-4 text-center relative z-10">
                <h3 className={`font-serif italic text-3xl text-white/90 leading-tight transition-colors duration-500 ${badge.hoverText}`}>
                  {badge.title}
                </h3>
                <div className="inline-block px-5 py-2 rounded-full bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
                    {badge.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================================================== */}
        {/* BAGIAN 2: OTHER CREDENTIALS (SANGAT BESAR)           */}
        {/* ==================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 text-center"
        >
           <div className="h-[1px] w-16 md:w-40 bg-gradient-to-r from-transparent to-[#8a5cff]"></div>
           <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Ecosystem <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a5cff] to-[#00ffd1]">Mastery</span>
           </h2>
           <div className="h-[1px] w-16 md:w-40 bg-gradient-to-l from-transparent to-[#00ffd1]"></div>
        </motion.div>

        {/* MENGGUNAKAN 2 KOLOM AGAR KARTU SANGAT RAKSASA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {certificates.map((cert, index) => {
            const theme = getThemeColors(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                {/* Kotak Card Raksasa */}
                <div className={`h-full relative bg-[#0a0a0a]/80 backdrop-blur-2xl p-10 md:p-14 rounded-[3.5rem] border border-white/5 transition-all duration-700 ease-out cursor-pointer hover:-translate-y-4 ${theme.borderHover} ${theme.shadowHover}`}>
                  
                  {/* Efek Garis Kaca Atas */}
                  <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 rounded-[3.5rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${theme.neon}, transparent 70%)` }}></div>

                  {/* Container Image Raksasa */}
                  <div className={`relative aspect-square w-full mb-10 rounded-[2.5rem] overflow-hidden flex items-center justify-center bg-white/[0.02] border border-white/5 ${theme.bg} group-hover:border-white/20 transition-all duration-500 shadow-inner`}>
                    <img
                      src={cert.src}
                      alt={cert.name}
                      // Porsi gambar diperbesar maksimal (85%)
                      className="max-w-[85%] max-h-[85%] object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.15] transition-all duration-700 ease-in-out drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* Text Nama Sertifikat Raksasa */}
                  <div className="text-center w-full relative z-10">
                    <p className="text-lg md:text-2xl text-white/70 uppercase tracking-[0.3em] group-hover:text-white transition-colors font-bold">
                      {cert.name}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}