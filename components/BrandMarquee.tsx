'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle2, Star, Globe2, ArrowUpRight, TrendingUp } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({
  target,
  suffix = '',
  decimals = 0,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // smooth easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * target);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [target, duration]);

  const formatted = count.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
};

export const BrandMarquee: React.FC = () => {
  return (
    <section className="py-8 sm:py-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Bento Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* CARD 1: Happy Clients (Terracotta Theme) */}
          <Link
            href="/industries"
            className="group relative bg-[#FAF5EE] hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#EBE1D5] hover:border-terracotta-300 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-terracotta-200/20 to-transparent rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-terracotta-100 text-terracotta-800 rounded-full text-[11px] font-bold tracking-wide">
                <Sparkles className="w-3 h-3 text-terracotta-600" />
                <span>89 Industries</span>
              </span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-400 group-hover:text-terracotta-600 group-hover:bg-terracotta-50 transition-all border border-stone-200/60 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#FF4E27] tabular-nums leading-none">
                <AnimatedNumber target={2600} suffix="+" />
              </div>
              <div className="font-serif font-bold text-base text-stone-900 pt-1">
                Happy Clients Scaled
              </div>
              <p className="text-xs text-stone-500 leading-relaxed pt-0.5">
                From high-growth D2C to healthcare, real estate &amp; B2B tech.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-semibold text-stone-500 group-hover:text-terracotta-700">
              <span>Explore blueprints</span>
              <span className="font-bold">→</span>
            </div>
          </Link>

          {/* CARD 2: Delivered Projects (Emerald Growth Theme) */}
          <Link
            href="/services"
            className="group relative bg-[#F4FAF6] hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#D5EADB] hover:border-emerald-300 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-bold tracking-wide">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>100% Execution</span>
              </span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-all border border-stone-200/60 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#10B981] tabular-nums leading-none">
                <AnimatedNumber target={481} suffix="+" />
              </div>
              <div className="font-serif font-bold text-base text-stone-900 pt-1">
                Delivered Projects
              </div>
              <p className="text-xs text-stone-500 leading-relaxed pt-0.5">
                Zero lock-in milestone delivery with verified ROI checkpoints.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-semibold text-stone-500 group-hover:text-emerald-700">
              <span>View all 17 services</span>
              <span className="font-bold">→</span>
            </div>
          </Link>

          {/* CARD 3: Client Rating (Sapphire Trust Theme) */}
          <Link
            href="/about/why-us"
            className="group relative bg-[#F4F7FC] hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#D5E1F4] hover:border-blue-300 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-[11px] font-bold tracking-wide">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>Google &amp; Clutch</span>
              </span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all border border-stone-200/60 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#3B82F6] tabular-nums leading-none">
                <AnimatedNumber target={4.9} suffix="★" decimals={1} />
              </div>
              <div className="font-serif font-bold text-base text-stone-900 pt-1">
                Verified Client Rating
              </div>
              <p className="text-xs text-stone-500 leading-relaxed pt-0.5">
                98% client retention rate driven by founder-led campaign governance.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-semibold text-stone-500 group-hover:text-blue-700">
              <span>Why clients choose us</span>
              <span className="font-bold">→</span>
            </div>
          </Link>

          {/* CARD 4: Cities & Global (Amethyst Global Theme) */}
          <Link
            href="/locations"
            className="group relative bg-[#F8F5FC] hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DBF4] hover:border-purple-300 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-[11px] font-bold tracking-wide">
                <Globe2 className="w-3 h-3 text-purple-600" />
                <span>Tier-1 to Global</span>
              </span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-400 group-hover:text-purple-600 group-hover:bg-purple-50 transition-all border border-stone-200/60 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#8B5CF6] tabular-nums leading-none">
                <AnimatedNumber target={50} suffix="+" />
              </div>
              <div className="font-serif font-bold text-base text-stone-900 pt-1">
                Cities &amp; International
              </div>
              <p className="text-xs text-stone-500 leading-relaxed pt-0.5">
                Active performance campaigns across India, USA, UK, UAE &amp; Canada.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-semibold text-stone-500 group-hover:text-purple-700">
              <span>View 500+ locations directory</span>
              <span className="font-bold">→</span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};
