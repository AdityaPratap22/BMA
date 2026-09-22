'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, MessageCircle } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

const smmPackages = [
  {
    name: 'Starter',
    price: '5,999',
    tagline: 'Perfect for building consistent brand presence.',
    features: [
      '2 Social Platforms',
      '12 Posts/Month',
      '3 Reels Edited',
      '1 Festival Poster',
      'Monthly Report',
    ],
    badge: '',
    popular: false,
  },
  {
    name: 'Growth',
    price: '7,999',
    tagline: 'For growing businesses looking to generate leads.',
    features: [
      '3 Social Platforms',
      '20 Posts/Month',
      '8 Reels Edited',
      '3 Festival Posters',
      'Meta Ads Setup',
      'Monthly Strategy Call',
    ],
    badge: 'MOST POPULAR',
    popular: true,
  },
  {
    name: 'Pro',
    price: '11,999',
    tagline: 'Maximum market dominance across all channels.',
    features: [
      '4 Social Platforms',
      '30 Posts/Month',
      '12 Reels Edited',
      '6 Festival Posters',
      'Full Meta Ads Management',
      'Google My Business',
      'Weekly Report',
    ],
    badge: 'BEST ROI',
    popular: false,
  },
];

const partnershipTiers = [
  { tier: '3–4 Accounts', discount: '10% OFF', desc: 'Perfect for boutique agencies', tag: '' },
  { tier: '5–9 Accounts', discount: '15% OFF', desc: 'Mid-size agencies & resellers', tag: 'MOST POPULAR' },
  { tier: '10–49 Accounts', discount: '20% OFF', desc: 'Large agency portfolios', tag: 'BEST VALUE' },
  { tier: '50+ Accounts', discount: 'Custom', desc: 'Enterprise + dedicated manager', tag: 'ENTERPRISE' },
];

const faqs = [
  {
    q: 'What makes BMA different from other agencies?',
    a: 'We focus on pure results with no long-term lock-in retainer traps, and we provide transparent pay-per-performance execution led directly by founders.',
  },
  {
    q: 'How long before I see SMM results?',
    a: 'Our SMM campaigns deliver high-quality engagement, viral reels, and targeted lead generation within 24–72 hours of ad campaigns going live.',
  },
  {
    q: 'Is there a lock-in contract?',
    a: 'Absolutely not. All our social media marketing packages are billed month-to-month. You are free to scale up, scale down, or cancel at any time — no penalties.',
  },
  {
    q: 'Is post-pay available?',
    a: 'Yes, we offer pay-after-results or pay-per-outcome setups for qualified brands after aligning on upfront lead definitions and targets.',
  },
  {
    q: 'Do you offer B2B or agency discounts?',
    a: 'Yes! Our B2B & Agency Tiers provide up to 20% off for partners managing multiple client accounts under white-label execution.',
  },
  {
    q: 'Which package should I choose?',
    a: 'Starter is great for brand consistency. Growth is perfect for active lead generation. Pro is designed for maximum market dominance across all platforms.',
  },
];

export default function SmmPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="py-16 sm:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Breadcrumb */}
        <div className="text-sm text-stone-500">
          <Link href="/" className="font-semibold text-stone-900 hover:text-terracotta-600">Home</Link>
          {' / '}
          <span className="text-terracotta-600 font-bold">Social Media Marketing</span>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">SMM Hub & Creator Network</span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Social Media Marketing &amp; Viral Reach Engine
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            Scale your brand&apos;s organic and paid presence across Instagram, Facebook, LinkedIn, YouTube,
            and UGC creator networks to convert followers into paying customers.
          </p>
        </div>

        {/* ── PACKAGES SECTION ─────────────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <p className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">— Transparent Value —</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">Packages &amp; Pay-As-You-Go</h2>
            <p className="text-stone-500 text-base">Flexible plans, no retainer traps. Only pay for outcomes that matter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {smmPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.popular
                    ? 'bg-stone-900 border-amber-500 shadow-2xl scale-105 text-white'
                    : 'bg-white border-stone-200 shadow-warm-sm text-stone-900'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-extrabold px-4 py-1.5 rounded-full tracking-wider shadow">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6 space-y-1">
                  <span className={`text-xs font-extrabold uppercase tracking-widest ${pkg.popular ? 'text-amber-400' : 'text-amber-600'}`}>
                    {pkg.name}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold font-serif ${pkg.popular ? 'text-white' : 'text-stone-900'}`}>
                      ₹{pkg.price}
                    </span>
                    <span className={`text-sm ${pkg.popular ? 'text-stone-400' : 'text-stone-500'}`}>/mo</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${pkg.popular ? 'text-stone-400' : 'text-stone-500'}`}>{pkg.tagline}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.popular ? 'text-amber-400' : 'text-terracotta-600'}`} />
                      <span className={pkg.popular ? 'text-stone-300' : 'text-stone-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20SMM%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-amber-500 text-stone-900 hover:bg-amber-400'
                      : 'bg-stone-900 text-white hover:bg-terracotta-700'
                  }`}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>

          {/* Pay-As-You-Go Callout */}
          <div className="bg-brand-card border border-dashed border-terracotta-300 rounded-3xl p-8 space-y-3">
            <p className="text-xs font-extrabold text-terracotta-600 uppercase tracking-widest">— Pay-As-You-Go —</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront.
              Single deliverables start tiny: <strong>posters from ₹149</strong>, <strong>reels from ₹380</strong>, <strong>dashboards from ₹2,000</strong>.{' '}
              <a href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="text-terracotta-600 font-bold underline">
                Request a quote
              </a>{' '}
              and we&apos;ll build a plan around your numbers.
            </p>
          </div>
        </div>

        {/* ── B2B PARTNERSHIP TIERS ─────────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <p className="text-xs font-extrabold text-terracotta-600 uppercase tracking-widest">— Partnerships —</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">B2B &amp; Agency Tiers</h2>
            <p className="text-stone-500 text-base">White-label execution and volume pricing for agencies, resellers &amp; enterprise teams.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {partnershipTiers.map((tier, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-7 text-center border border-stone-200 shadow-warm-sm hover:-translate-y-1 transition-transform duration-300"
              >
                {tier.tag && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-extrabold px-3 py-1 rounded-full ${
                    tier.tag === 'MOST POPULAR' ? 'bg-terracotta-600' : tier.tag === 'BEST VALUE' ? 'bg-violet-700' : 'bg-amber-600'
                  }`}>
                    {tier.tag}
                  </span>
                )}
                <div className="font-bold text-stone-900 text-sm mb-1">{tier.tier}</div>
                <div className="text-3xl font-extrabold font-serif text-terracotta-600 my-3">{tier.discount}</div>
                <div className="text-xs text-stone-500 font-medium">{tier.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ACCORDION ─────────────────────────────────────── */}
        <div className="space-y-10 max-w-3xl mx-auto w-full">
          <div className="text-center space-y-2">
            <p className="text-xs font-extrabold text-stone-400 uppercase tracking-widest">— Common Questions —</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">Pricing &amp; Process FAQs</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-warm-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-stone-900 hover:text-terracotta-600 transition-colors"
                  >
                    <span className="text-sm">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 text-stone-400 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Request Quote CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20SMM%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-terracotta-700 transition-colors shadow-warm-sm"
            >
              <MessageCircle className="w-4 h-4" /> Request a Quote →
            </a>
          </div>
        </div>

        {/* ── BOTTOM CTA BANNER ─────────────────────────────────── */}
        <div className="bg-stone-900 rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-3 max-w-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-400">Viral Growth Engine</span>
            <h2 className="text-3xl font-serif font-bold">Ready to Dominate Social Media?</h2>
            <p className="text-stone-400 text-base leading-relaxed">
              Get a custom content calendar and UGC creator growth strategy tailored for your brand within 2 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20SMM%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-terracotta-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-terracotta-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Discuss SMM on WhatsApp
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Book Strategy Call →
            </Link>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
