'use client';

import React from 'react';
import Link from 'next/link';
import { Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const topSectors = [
  { name: '🏥 Healthcare & Clinics', growth: '4.9x ROAS', stat: '280+ Blueprints' },
  { name: '💎 Fine Jewellery & Luxury', growth: '15.8x ROAS', stat: '₹14Cr+ Revenue' },
  { name: '🏢 Real Estate & Developers', growth: '320+ Leads/mo', stat: 'High-Ticket' },
  { name: '🛍️ D2C Fashion & Apparel', growth: '12.8x ROAS', stat: 'Meta Catalog' },
  { name: '🥗 FMCG & Gourmet Food', growth: '210% Inbound', stat: 'Swiggy & Zomato' },
  { name: '🎓 EdTech & Academies', growth: '3.4x Enrolment', stat: 'Seminars & Leads' },
  { name: '🛋️ Interior Design & Architecture', growth: '190% Consults', stat: 'High-Ticket' },
  { name: '💻 B2B SaaS & Tech', growth: '4.2x Pipeline', stat: 'Founder Leads' },
];

export const IndustriesPreviewBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#E7E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              89+ INDUSTRY BLUEPRINTS &bull; TAILORED PLAYBOOKS
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Specialized Growth Playbooks <br className="hidden sm:block" />
            For Your Exact Industry
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We don&apos;t use generic templates. Every industry has distinct bottlenecks, customer psychology, and algorithmic conversion funnels.
          </p>
        </div>

        {/* 8 Sector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topSectors.map((sector, idx) => (
            <Link
              key={idx}
              href="/industries"
              className="bg-white rounded-2xl p-5 border border-[#E7E0D6] shadow-warm-sm hover:border-terracotta-400 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group block"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {sector.growth}
                </span>
                <span className="text-[10px] font-semibold text-stone-400">
                  {sector.stat}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-terracotta-700 transition-colors">
                {sector.name}
              </h3>

              <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-stone-500 group-hover:text-terracotta-700">
                <span>View blueprint</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-2">
          <Link
            href="/industries"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-terracotta-600 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-warm-sm hover:scale-105"
          >
            <span>Explore Complete 89 Industry Blueprints Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
