'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenStrategy?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStrategy }) => {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] pt-12 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-terracotta-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-terracotta-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Sub-tagline */}
            <div className="text-xs font-bold uppercase tracking-widest text-[#9A481B]">
              SMART STRATEGIES. REAL GROWTH.
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15]">
              Make Your Brand Heard. Get{' '}
              <span className="text-[#9A481B]">Real Results.</span>
            </h1>

            {/* Sub-headline / Paragraph */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl font-normal leading-relaxed">
              Data-driven marketing strategies and creative campaigns that drive engagement, generate leads and scale your business.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/918586989832?text=Hi%2C%20I%20would%20like%20to%20start%20a%20project%20with%20BMA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-warm-md hover:shadow-warm-lg hover:-translate-y-1 active:translate-y-0 group"
              >
                <svg
                  className="w-5 h-5 fill-white transition-transform duration-300 group-hover:scale-115 group-hover:-rotate-12"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-base text-stone-800 bg-[#F5EFE6] hover:bg-[#EBE4D8] border border-stone-300/40 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Hero Column: Seamless 3D Illustration Blended into Background */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/3] mix-blend-multiply hover:scale-[1.01] transition-transform duration-500">
              <Image
                src="/hero-illustration.png"
                alt="BMA Campaign Performance & Lead Generation Illustration"
                fill
                priority
                className="object-contain mix-blend-multiply"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
