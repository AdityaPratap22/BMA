import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StatsBar } from '@/components/StatsBar';
import { CtaBanner } from '@/components/CtaBanner';
import { Crown, Unlock, CreditCard, BarChart2, Linkedin } from 'lucide-react';

export const metadata = {
  title: 'About BMA – Best Marketing Agency | Founder-Led Performance Marketing',
  description:
    'BMA is a founder-led digital marketing agency based in Delhi NCR. Zero lock-in contracts, premium creative execution, and transparent live dashboards for every client.',
};

const pillars = [
  {
    icon: <Crown className="w-6 h-6" />,
    title: 'Founder-Led Accounts',
    desc: 'Senior founders directly manage and oversee your campaigns — not junior account managers. Every client gets senior strategic attention.',
  },
  {
    icon: <Unlock className="w-6 h-6" />,
    title: 'Zero Lock-In Contracts',
    desc: 'High accountability with flexible terms and no restrictive long-term commitments. We earn your business every single month.',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Post-Pay Flexibility',
    desc: 'Milestone-based payment structures aligned directly with campaign execution and performance deliverables. Pay for results.',
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Data Science Meets Design',
    desc: 'Custom real-time KPI and revenue dashboards giving you 100% transparency into ad spend, leads, ROAS, and every metric that matters.',
  },
];

const founders = [
  {
    name: 'Harsh Chaudhary',
    role: 'Founder & CEO',
    profileUrl: '/about/harsh-chaudhary',
    linkedin: 'https://www.linkedin.com/in/harsh-chaudhary-b370b2337/',
    bio: 'Performance marketing architecture, brand positioning, and B2B growth strategy — scaling brands across India and beyond.',
    image: '/harsh_chaudhary.jpg',
  },
  {
    name: 'Khwahish Sahai',
    role: 'Co-Founder & Creative Director',
    profileUrl: '/about/khwahish-sahai',
    linkedin: 'https://www.linkedin.com/in/khwahish-sahai/',
    bio: 'Creative direction, brand identity, visual storytelling, and UGC content strategy for high-converting social campaigns.',
    image: '/khwahish_sahai.jpg',
  },
];

const achievements = [
  { stat: '150+', label: 'Brands Scaled' },
  { stat: '₹50Cr+', label: 'Ad Revenue Managed' },
  { stat: '4.8x', label: 'Average ROAS Delivered' },
  { stat: '98%', label: 'Client Retention Rate' },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta-600">
            Seen. Heard. Chosen. — About BMA
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            We Don&apos;t Just Run Ads. <br className="hidden sm:block" />
            We Build Market Leaders.
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Premium creative, data-driven performance, transparent pricing, and custom live growth dashboards.
            Founded on accountability, zero lock-in contracts, and founder-led execution — from Delhi NCR to brands across India.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((a, idx) => (
            <div key={idx} className="bg-brand-card rounded-3xl p-6 border border-brand-border text-center space-y-1">
              <div className="text-3xl font-serif font-extrabold text-terracotta-600">{a.stat}</div>
              <div className="text-sm text-stone-600 font-medium">{a.label}</div>
            </div>
          ))}
        </div>

        {/* Core Value Pillars */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta-600">
              Our Differentiators
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Core Value Pillars That Drive Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-brand-card rounded-3xl p-7 border border-brand-border space-y-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-terracotta-600 shadow-warm-sm">
                  {p.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900">{p.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <StatsBar />

        {/* Founders Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta-600">
              Executive Leadership
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Meet the Founders Behind BMA
            </h2>
            <p className="text-stone-500 text-base">Direct founder oversight on every client strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((f, idx) => (
              <div
                key={idx}
                className="bg-white rounded-4xl p-7 sm:p-8 border border-stone-200 shadow-warm-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Photo Avatar */}
                <Link href={f.profileUrl} className="shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src={f.image}
                    alt={f.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover border-4 border-cream-200 shadow-warm-sm"
                  />
                </Link>

                <div className="space-y-2 flex-1 text-center sm:text-left">
                  <Link href={f.profileUrl} className="hover:text-terracotta-600 transition-colors">
                    <h3 className="font-serif font-bold text-2xl text-stone-900">{f.name}</h3>
                  </Link>

                  <div className="flex items-center justify-center sm:justify-between gap-2 flex-wrap">
                    <div className="text-xs font-bold text-terracotta-600 uppercase tracking-wide">{f.role}</div>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-stone-900 text-white text-xs font-bold px-3 py-1 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="w-3 h-3" /> LinkedIn ↗
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{f.bio}</p>

                  <div className="pt-2">
                    <Link
                      href={f.profileUrl}
                      className="text-xs font-bold text-terracotta-700 hover:underline inline-flex items-center gap-1"
                    >
                      <span>View Full Profile &amp; Bio</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-terracotta-600 rounded-3xl p-10 sm:p-14 text-center space-y-4 text-white">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">Our Mission</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
            To make world-class performance marketing accessible to every ambitious Indian brand — with the transparency, accountability, and senior expertise that large enterprises take for granted.
          </p>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
