"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-2xl">
      <div className="bg-black/20 backdrop-blur-xl border border-white/5 px-6 md:px-10 py-3 md:py-4 rounded-full flex items-center justify-between shadow-2xl">
        
        {/* Logo */}
        <a href="#" className="text-white font-serif italic text-lg md:text-xl tracking-tighter cursor-pointer">
          myeap<span className="text-[#c4a484]">.</span>
        </a>

        {/* Links: Ukuran font menyesuaikan device */}
        <ul className="flex items-center gap-4 md:gap-10">
          <li>
            <a href="#work" className="font-serif italic text-[12px] md:text-sm lowercase tracking-wide text-gray-400 hover:text-[#c4a484] transition-all">
              archive
            </a>
          </li>
          <li>
            <a href="#about" className="font-serif italic text-[12px] md:text-sm lowercase tracking-wide text-gray-400 hover:text-[#c4a484] transition-all">
              about
            </a>
          </li>
          <li>
            <a href="#contact" className="font-serif italic text-[12px] md:text-sm lowercase tracking-wide text-white hover:text-[#c4a484] transition-all">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;