'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const badges = [
  { id: 1, src: '/assets/badge/nb.png', title: 'Networking Basics', color: 'bg-[#00ffd1]/10', glow: 'group-hover:shadow-[0_30px_100px_rgba(0,255,209,0.3)]', border: 'group-hover:border-[#00ffd1]/50', text: 'group-hover:text-[#00ffd1]' },
  { id: 2, src: '/assets/badge/ict.png', title: 'Intro to Cybersecurity', color: 'bg-[#ff5c7a]/10', glow: 'group-hover:shadow-[0_30px_100px_rgba(255,92,122,0.3)]', border: 'group-hover:border-[#ff5c7a]/50', text: 'group-hover:text-[#ff5c7a]' },
  { id: 3, src: '/assets/badge/js.png', title: 'Junior Cyber Analyst', color: 'bg-[#8a5cff]/10', glow: 'group-hover:shadow-[0_30px_100px_rgba(138,92,255,0.3)]', border: 'group-hover:border-[#8a5cff]/50', text: 'group-hover:text-[#8a5cff]' }
];

const ecosystem = [
  { name: "Node.js", src: "/assets/sertifikasi/nodejs.png", glow: "hover:shadow-[0_25px_70px_rgba(138,92,255,0.25)]", border: "hover:border-[#8a5cff]/50" },
  { name: "Golang", src: "/assets/sertifikasi/go.png", glow: "hover:shadow-[0_25px_70px_rgba(0,255,209,0.25)]", border: "hover:border-[#00ffd1]/50" },
  { name: "Git", src: "/assets/sertifikasi/git.png", glow: "hover:shadow-[0_25px_70px_rgba(255,255,255,0.15)]", border: "hover:border-white/40" },
  { name: "Cisco", src: "/assets/sertifikasi/comline.png", glow: "hover:shadow-[0_25px_70px_rgba(0,255,209,0.25)]", border: "hover:border-[#00ffd1]/50" },
  { name: "Dicoding", src: "/assets/sertifikasi/dicoding.png", glow: "hover:shadow-[0_25px_70px_rgba(255,92,122,0.25)]", border: "hover:border-[#ff5c7a]/50" },
  { name: "Korean Int", src: "/assets/sertifikasi/koreanint.jpeg", glow: "hover:shadow-[0_25px_70px_rgba(138,92,255,0.25)]", border: "hover:border-[#8a5cff]/50" },
];

export default function Certifications() {
  return (
    <section id="skills" className="py-48 md:py-64 relative overflow-hidden bg-[#020202]">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <h2 className="text-6xl md:text-[9rem] font-extralight tracking-tighter text-white mb-40 text-center leading-none">
            Verified <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1]">Skills.</span>
        </h2>

        {/* CISCO BADGES - ULTRA LARGE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-64">
          {badges.map((badge, i) => (
            <motion.div 
              key={badge.id} 
              initial={{ opacity: 0, y: 60 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              whileHover={{ y: -30, scale: 1.02 }}
              className={`group relative bg-white/[0.03] backdrop-blur-3xl p-16 md:p-24 rounded-[5rem] border border-white/10 transition-all duration-700 ease-out ${badge.glow} ${badge.border}`}
            >
              <div className={`relative aspect-square w-full mb-16 rounded-[4rem] flex items-center justify-center ${badge.color} border border-white/5 shadow-2xl overflow-hidden`}>
                <Image src={badge.src} alt={badge.title} width={500} height={500} priority={i < 3} className="object-contain group-hover:scale-110 transition-transform duration-1000 p-8" />
              </div>
              <h3 className={`font-serif italic text-4xl md:text-6xl text-center text-white/90 transition-colors duration-500 ${badge.text}`}>{badge.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* TECH ECOSYSTEM - LARGE GALLERY STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {ecosystem.map((tech, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -25, scale: 1.05 }}
              className={`group p-20 bg-white/[0.02] backdrop-blur-2xl rounded-[5rem] border border-white/5 flex flex-col items-center justify-center transition-all duration-700 shadow-2xl ${tech.glow} ${tech.border}`}
            >
              <div className="w-full aspect-square relative flex items-center justify-center mb-16 bg-black/40 rounded-[3.5rem] border border-white/5 overflow-hidden shadow-inner">
                <img 
                  src={tech.src} 
                  alt={tech.name} 
                  className="max-h-[65%] max-w-[65%] object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                />
              </div>
              <span className="text-xl text-white/30 uppercase tracking-[0.8em] font-bold text-center group-hover:text-white transition-all duration-500">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}