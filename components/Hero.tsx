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
              <button
                onClick={onOpenStrategy}
                className="inline-flex items-center gap-2 bg-[#8B4513] text-white px-7 py-3.5 rounded-xl font-medium text-base hover:bg-[#72360C] transition-all shadow-warm-md hover:shadow-warm-lg"
              >
                <span>Start a Project</span>
              </button>

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
