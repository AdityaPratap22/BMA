'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, Unlock, CreditCard, BarChart2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: <Crown className="w-6 h-6 text-terracotta-600" />,
    number: '01',
    title: 'Founder-Led Accounts',
    tag: 'SENIOR STEWARDSHIP',
    desc: 'No junior interns. Senior founders Harsh Chaudhary (CEO) and Khwahish Sahai (Creative Director) directly lead campaign architecture and execution.',
  },
  {
    icon: <Unlock className="w-6 h-6 text-emerald-600" />,
    number: '02',
    title: 'Zero Lock-In Contracts',
    tag: 'MONTH-TO-MONTH FREEDOM',
    desc: 'We reject standard 6-12 month lock-in traps. Our flexible month-to-month model gives you total freedom to scale based on real business conditions.',
  },
  {
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    number: '03',
    title: 'Post-Pay Milestone Model',
    tag: 'ALIGNED INCENTIVES',
    desc: 'Our financial incentives align directly with your growth. Qualified brands enjoy milestone-based post-pay execution checkpoints tied to delivery.',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-purple-600" />,
    number: '04',
    title: 'Data Science Meets Design',
    tag: 'LIVE DASHBOARDS',
    desc: 'We combine conversion-focused visual psychology with live, real-time KPI and revenue dashboards — 100% transparent visibility into your ROAS.',
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#E7E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              SEEN. HEARD. CHOSEN. &bull; WHY BMA
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Built For Growth. <br className="hidden sm:block" />
            Backed By Data Science.
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Four foundational pillars that separate us from standard digital agencies — built for founders who demand measurable ROI over vanity impressions.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-[#E7E0D6] shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-cream-100 border border-cream-200 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <span className="font-mono font-black text-stone-300 text-sm">{p.number}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-wider text-terracotta-700 uppercase">
                    {p.tag}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-terracotta-700 transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center gap-1 text-[11px] font-bold text-stone-700 group-hover:text-terracotta-700">
                <span>Direct accountability</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <Link
            href="/about/why-us"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-terracotta-600 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-warm-sm hover:scale-105"
          >
            <span>Read Why BMA &amp; Compare with Other Agencies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
