"use client";
import React from 'react';

const Navbar = () => {
  // Fungsi untuk smooth scroll yang terintegrasi dengan Lenis
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-[90%] max-w-2xl">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 md:px-10 py-3 md:py-4 rounded-full flex items-center justify-between shadow-2xl">
        
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleScroll(e, 'hero')}
          className="text-white font-serif italic text-lg md:text-xl tracking-tighter cursor-pointer"
        >
          myeap<span className="text-[#8a5cff]">.</span>
        </a>

        {/* Links */}
        <ul className="flex items-center gap-6 md:gap-10">
          <li>
            <a 
              href="#work" 
              onClick={(e) => handleScroll(e, 'work')}
              className="font-serif italic text-[12px] md:text-sm lowercase tracking-wide text-gray-400 hover:text-[#ff5c7a] transition-all cursor-pointer"
            >
              archive
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="font-serif italic text-[12px] md:text-sm lowercase tracking-wide text-gray-400 hover:text-[#00ffd1] transition-all cursor-pointer"
            >
              about
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="font-serif italic text-[12px] md:text-sm lowercase tracking-wide text-white hover:text-[#8a5cff] transition-all cursor-pointer"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;