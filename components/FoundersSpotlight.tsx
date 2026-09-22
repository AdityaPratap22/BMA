'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, ArrowRight, Sparkles, Award, ShieldCheck } from 'lucide-react';

export const FoundersSpotlight: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#E7E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              EXECUTIVE LEADERSHIP &bull; ZERO JUNIOR HAND-OFFS
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Direct Founder Stewardship <br className="hidden sm:block" />
            On Every Client Account
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Unlike traditional agencies that pass your brand to junior interns, our senior founders directly architect your media buying strategy, review every creative asset, and lead weekly performance calls.
          </p>
        </div>

        {/* Dual Founder Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* CARD 1: Harsh Chaudhary */}
          <div className="bg-[#FAF6F0] rounded-4xl p-8 sm:p-10 border border-[#E7E0D6] shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-terracotta-300/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Photo & Meta */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <Link href="/about/harsh-chaudhary" className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/harsh_chaudhary.jpg"
                    alt="Harsh Chaudhary — Founder & CEO"
                    width={120}
                    height={120}
                    className="w-28 h-28 rounded-3xl object-cover border-4 border-white shadow-warm-sm"
                  />
                </Link>

                <div className="space-y-1.5 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-terracotta-100 text-terracotta-800 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    Founder &amp; CEO
                  </div>
                  <Link href="/about/harsh-chaudhary" className="hover:text-terracotta-700 transition-colors block">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      Harsh Chaudhary
                    </h3>
                  </Link>
                  <p className="text-xs font-bold text-terracotta-600">
                    Growth Strategist &amp; Performance Marketing Architect
                  </p>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="p-4 sm:p-5 bg-white/80 rounded-2xl border border-[#E7E0D6] relative">
                <p className="italic text-stone-700 text-xs sm:text-sm leading-relaxed font-serif">
                  &ldquo;I believe great brands are built with clarity, strategy, and consistent performance engineering — not luck. Every rupee spent must create verifiable enterprise value.&rdquo;
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-white rounded-2xl border border-stone-200/80">
                  <div className="text-xl font-serif font-black text-terracotta-700">150+</div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase mt-0.5">Brands Scaled</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-stone-200/80">
                  <div className="text-xl font-serif font-black text-terracotta-700">₹50Cr+</div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase mt-0.5">Ad Spend</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-stone-200/80">
                  <div className="text-xl font-serif font-black text-terracotta-700">4.8x</div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase mt-0.5">Avg ROAS</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E7E0D6] flex items-center justify-between gap-4 flex-wrap">
              <Link
                href="/about/harsh-chaudhary"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta-700 hover:text-terracotta-900 group-hover:underline"
              >
                <span>Read Executive Story &amp; Strategy</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://www.linkedin.com/in/harsh-chaudhary-b370b2337/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 text-white text-xs font-bold hover:bg-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </div>

          {/* CARD 2: Khwahish Sahai */}
          <div className="bg-[#FAF6F0] rounded-4xl p-8 sm:p-10 border border-[#E7E0D6] shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-300/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Photo & Meta */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <Link href="/about/khwahish-sahai" className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/khwahish_sahai.jpg"
                    alt="Khwahish Sahai — Co-Founder & Creative Director"
                    width={120}
                    height={120}
                    className="w-28 h-28 rounded-3xl object-cover border-4 border-white shadow-warm-sm"
                  />
                </Link>

                <div className="space-y-1.5 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    Co-Founder &amp; Creative Director
                  </div>
                  <Link href="/about/khwahish-sahai" className="hover:text-emerald-700 transition-colors block">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      Khwahish Sahai
                    </h3>
                  </Link>
                  <p className="text-xs font-bold text-emerald-700">
                    Brand Storytelling &amp; Visual UX Director
                  </p>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="p-4 sm:p-5 bg-white/80 rounded-2xl border border-[#E7E0D6] relative">
                <p className="italic text-stone-700 text-xs sm:text-sm leading-relaxed font-serif">
                  &ldquo;I believe premium design and visual storytelling are the ultimate hooks that turn casual scrollers into loyal brand advocates. Aesthetics must drive sales conversion.&rdquo;
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-white rounded-2xl border border-stone-200/80">
                  <div className="text-xl font-serif font-black text-emerald-700">100%</div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase mt-0.5">Original UX</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-stone-200/80">
                  <div className="text-xl font-serif font-black text-emerald-700">1,200+</div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase mt-0.5">Ad Creatives</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-stone-200/80">
                  <div className="text-xl font-serif font-black text-emerald-700">3 Sec</div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase mt-0.5">Hook Capture</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E7E0D6] flex items-center justify-between gap-4 flex-wrap">
              <Link
                href="/about/khwahish-sahai"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group-hover:underline"
              >
                <span>Read Creative Story &amp; Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://www.linkedin.com/in/khwahish-sahai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 text-white text-xs font-bold hover:bg-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
