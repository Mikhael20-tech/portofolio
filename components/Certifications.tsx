'use client';
import React from 'react';
import Image from 'next/image';

const badges = [
  {
    id: 1,
    src: '/assets/badge/nb.png',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    color: 'bg-blue-900/10' // Diubah jadi gelap transparan
  },
  {
    id: 2,
    src: '/assets/badge/ict.png',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    color: 'bg-green-900/10'
  },
  {
    id: 3,
    src: '/assets/badge/js.png',
    title: 'Junior Cybersecurity Analyst',
    issuer: 'Cisco Networking Academy',
    color: 'bg-cyan-900/10'
  }
];

export default function Certifications() {
  return (
    // bg-[#050505] agar sama dengan bg Hero kamu
    <section id="badges" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic tracking-tighter text-white">
              Verified Skills<span className="text-[#c4a484]">.</span>
            </h2>
            <p className="text-gray-500 uppercase text-[10px] tracking-[0.3em] mt-2">
              Professional Certifications & Badges
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-white/5 mx-8 hidden md:block mb-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <div 
              key={badge.id}
              className="group relative bg-[#0a0a0a]/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 shadow-sm hover:border-[#c4a484]/30 transition-all duration-500 ease-out"
            >
              {/* Container Image */}
              <div className={`relative aspect-square w-full mb-6 rounded-3xl overflow-hidden flex items-center justify-center ${badge.color} group-hover:scale-95 transition-transform duration-500`}>
                <Image 
                  src={badge.src}
                  alt={badge.title}
                  width={180}
                  height={180}
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:rotate-3 transition-transform duration-500"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h3 className="font-serif italic text-xl text-white leading-tight group-hover:text-[#c4a484] transition-colors">
                  {badge.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  {badge.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}