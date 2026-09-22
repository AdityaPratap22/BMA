'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import { CtaBanner } from '@/components/CtaBanner';
import { CheckCircle2, ArrowRight, MessageCircle, Sparkles, Zap, ShieldCheck } from 'lucide-react';

const serviceFilters = [
  'All Solutions',
  'Paid Advertising',
  'Organic Search & SEO',
  'Content & Video',
  'Design & Branding',
  'Tech & Web Dev',
];

// Helper to categorize services for quick filter
function matchesFilter(serviceId: string, filter: string): boolean {
  if (filter === 'All Solutions') return true;
  if (filter === 'Paid Advertising') {
    return ['google-ads', 'meta-ads', 'lead-generation', 'ecommerce-marketing'].includes(serviceId);
  }
  if (filter === 'Organic Search & SEO') {
    return ['seo-services', 'local-seo', 'content-marketing'].includes(serviceId);
  }
  if (filter === 'Content & Video') {
    return ['social-media-marketing', 'reels-video-production', 'ugc-creator-marketing', 'whatsapp-marketing'].includes(serviceId);
  }
  if (filter === 'Design & Branding') {
    return ['graphic-design', 'poster-design', 'logo-branding'].includes(serviceId);
  }
  if (filter === 'Tech & Web Dev') {
    return ['website-development', 'dashboard-kpi', 'crm-automation'].includes(serviceId);
  }
  return true;
}

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('All Solutions');

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => matchesFilter(s.id, activeFilter));
  }, [activeFilter]);

  return (
    <div className="py-16 sm:py-24 bg-brand-bg min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Transparent Capabilities &amp; Pricing
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Our Services &amp; Fixed-Price Solutions
          </h1>

          <p className="text-stone-600 text-lg leading-relaxed">
            Zero lock-in contracts. Clear scope deliverables. Click any capability for comprehensive breakdowns, strategy approaches, and turnaround timelines.
          </p>
        </div>

        {/* ── TRUST BADGES BAR ────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { label: '⚡ 2-Hour Response Time', color: 'bg-cream-100 text-stone-800' },
            { label: '🔓 Zero Lock-In Retainers', color: 'bg-cream-100 text-stone-800' },
            { label: '💳 Post-Pay Flexibility', color: 'bg-cream-100 text-stone-800' },
            { label: '🏆 4.9★ Client Rating', color: 'bg-cream-100 text-stone-800' },
            { label: '✦ 89+ Industry Frameworks', color: 'bg-cream-100 text-stone-800' },
          ].map((badge, idx) => (
            <span
              key={idx}
              className="bg-white border border-stone-200/90 rounded-full px-4 py-2 text-xs font-bold text-stone-800 shadow-warm-sm flex items-center gap-1.5"
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* ── CATEGORY FILTER TABS ────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {serviceFilters.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-terracotta-600 text-white shadow-warm-sm scale-105'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* ── REDESIGNED SERVICES GRID ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl border border-stone-200/90 shadow-warm-sm p-7 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:border-terracotta-400 transition-all duration-300 overflow-hidden"
            >
              {/* Top Gradient Edge */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta-700 via-amber-500 to-terracotta-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-5">
                {/* Header Row: Icon Tile + Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-cream-100 border border-cream-200 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:bg-cream-200 transition-transform">
                    {service.emoji}
                  </div>

                  {service.badgeText ? (
                    <span className="bg-terracotta-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {service.badgeText}
                    </span>
                  ) : (
                    <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Verified
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <div>
                  <h2 className="font-serif font-bold text-xl text-stone-900 group-hover:text-terracotta-700 transition-colors leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-stone-500 text-xs leading-relaxed mt-2 line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Deliverables Snippet (3 items) */}
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DD] space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-700 font-medium leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Actions Bottom Shelf */}
              <div className="pt-5 mt-5 border-t border-stone-100 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block leading-none">Starting At</span>
                    <span className="font-serif font-extrabold text-lg text-terracotta-700 mt-1 block">
                      {service.price}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-cream-100 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                    title="Quick Quote on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>

                {/* Main Link Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 group-hover:bg-terracotta-600 text-white py-3 rounded-2xl text-xs font-bold transition-colors shadow-warm-sm"
                >
                  <span>Explore Scope &amp; Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CUSTOM NOTE ──────────────────────────────────── */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center space-y-3 max-w-2xl mx-auto shadow-warm-sm">
          <Sparkles className="w-6 h-6 text-terracotta-600 mx-auto" />
          <h3 className="font-serif font-bold text-lg text-stone-900">Need a Multi-Channel Custom Package?</h3>
          <p className="text-xs text-stone-500 leading-relaxed max-w-lg mx-auto">
            Combine social media, performance ads, web development, and SEO into a unified monthly growth architecture tailored to your unit economics.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-terracotta-600 text-white px-8 py-3 rounded-2xl font-bold text-xs hover:bg-terracotta-700 transition-colors shadow-warm-sm"
            >
              Get Bespoke Proposal →
            </Link>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
