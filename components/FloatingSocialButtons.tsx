'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

export const FloatingSocialButtons: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact links"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 print:hidden"
    >
      {/* Instagram Floating Button */}
      <div className="relative group animate-float-delayed hover:[animation-play-state:paused]">
        {/* Glowing ripple aura (bursts outwards on hover) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-60 animate-ripple-pulse-delayed group-hover:scale-140 group-hover:opacity-90 transition-all duration-500 ease-out"
        />

        <a
          href="https://www.instagram.com/thebusinessvolunteers/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Business Volunteers on Instagram"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xl hover:shadow-[0_16px_36px_rgba(220,39,67,0.65)] hover:scale-115 hover:-translate-y-2 active:scale-95 active:translate-y-0 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#dc2743] focus:ring-offset-2"
        >
          {/* Subtle gloss/shine sweep that flashes across on hover */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine-sweep group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </span>

          <Instagram className="w-7 h-7 transition-all duration-300 ease-out animate-icon-wiggle-delayed group-hover:rotate-12 group-hover:scale-125" />

          {/* Hover Tooltip (Extends to the left with smooth spring pop-in) */}
          <span className="pointer-events-none absolute right-full mr-3.5 px-3.5 py-1.5 rounded-xl bg-stone-900/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 translate-x-3 scale-90 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out shadow-2xl backdrop-blur-md border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#f09433] to-[#bc1888] animate-pulse" />
            @thebusinessvolunteers
            {/* Tooltip triangle arrow */}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-stone-900/95" />
          </span>
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="relative group animate-float-slow hover:[animation-play-state:paused]">
        {/* Glowing ripple auras (burst outwards on hover) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ripple-pulse group-hover:scale-140 group-hover:opacity-85 transition-all duration-500 ease-out"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ripple-pulse-delayed group-hover:scale-125 group-hover:opacity-60 transition-all duration-500 ease-out"
        />

        <a
          href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-[0_16px_36px_rgba(37,211,102,0.65)] hover:scale-115 hover:-translate-y-2 active:scale-95 active:translate-y-0 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
          {/* Subtle gloss/shine sweep that flashes across on hover */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine-sweep group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </span>

          {/* WhatsApp Official SVG Icon */}
          <svg
            className="w-7 h-7 fill-white transition-all duration-300 ease-out animate-icon-wiggle group-hover:-rotate-12 group-hover:scale-125"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>

          {/* Hover Tooltip (Extends to the left with smooth spring pop-in) */}
          <span className="pointer-events-none absolute right-full mr-3.5 px-3.5 py-1.5 rounded-xl bg-stone-900/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 translate-x-3 scale-90 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out shadow-2xl backdrop-blur-md border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Chat on WhatsApp
            {/* Tooltip triangle arrow */}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-stone-900/95" />
          </span>
        </a>
      </div>
    </aside>
  );
};
