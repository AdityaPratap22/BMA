'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  BarChart3, 
  MessageCircle,
  Award
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

const SMM_PACKAGES = [
  {
    name: 'Starter SMM',
    price: '5,999',
    popular: false,
    badge: '',
    tagline: 'Essential organic presence for emerging brands.',
    features: [
      '12 Social Media Creatives / mo',
      'Basic Reels (2 Templates / mo)',
      'Single Channel Management',
      'Basic Custom Caption Writing',
      'Hashtag Research & Strategy',
      'Monthly PDF Analytics Report',
      'Standard 3-Day Delivery Turnaround',
    ],
    whatsappText: 'Hi, I am interested in the Starter SMM Package (₹5,999/mo)',
  },
  {
    name: 'Growth Booster',
    price: '7,999',
    popular: true,
    badge: 'MOST POPULAR',
    tagline: 'High-velocity creative engine designed to generate inbound leads.',
    features: [
      '20 High-Converting Creatives / mo',
      '6 Viral Reels & Video Hooks / mo',
      'Dual-Channel Strategy (Insta + FB)',
      'SEO Caption Writing + CTA Strategy',
      'Competitor Monitoring & Auditing',
      'Growth Strategy Consultation Call',
      'Priority 48-Hour Execution Support',
    ],
    whatsappText: 'Hi, I am interested in the Growth Booster SMM Package (₹7,999/mo)',
  },
  {
    name: 'Pro Domination',
    price: '11,999',
    popular: false,
    badge: 'BEST VALUE',
    tagline: 'Full-spectrum social dominance across multiple major networks.',
    features: [
      '30 Bespoke Custom Creatives / mo',
      '12 High-Impact Reels & UGC Style',
      'Tri-Channel Domination (Insta, FB, LI)',
      'Bespoke Graphic Design & Illustration',
      'Active Community DM / Comment Management',
      'Weekly Ad Campaign Strategy Auditing',
      'Dedicated Social Account Manager',
    ],
    whatsappText: 'Hi, I am interested in the Pro Domination SMM Package (₹11,999/mo)',
  },
];

const B2B_TIERS = [
  { tier: 'TIER 1 RESELLER', discount: '10% OFF', desc: 'Starting 3+ Active Clients', tag: '' },
  { tier: 'TIER 2 PARTNER', discount: '20% OFF', desc: 'Starting 8+ Active Clients', tag: 'BEST VALUE' },
  { tier: 'TIER 3 STRATEGIC', discount: '30% OFF', desc: 'Starting 15+ Active Clients', tag: 'MOST POPULAR' },
  { tier: 'ENTERPRISE EXEC', discount: '40% OFF', desc: 'Starting 25+ Active Clients', tag: 'MAX SCALE' },
];

const WHAT_WE_DO = [
  '360° Social Brand Strategy & Monthly Content Planning',
  'High-Engagement Graphic & Reel Content Production',
  'Community Engagement, Comment Moderation & Direct Message Leads',
  'Targeted Hashtag Research, Audience Profiling & Strategic Posting',
  'Monthly Data Analytics & Performance Optimization Audits',
  'Influencer Outreach, Brand Collaboration Setup & UGC Curation',
];

const DELIVERABLES = [
  '12–30 Custom Social Posts / Month',
  '4–12 Reels & Vertical Video Shorts',
  'Hashtag & Profile Optimization System',
  'Monthly Inbound Lead Tracking Decks',
  'Bi-Weekly Strategy Calibration Reviews',
];

const SMM_FAQS = [
  {
    q: 'Is there a minimum contract commitment?',
    a: 'No lock-ins. All our retainers and service packages operate on a rolling month-to-month commitment. You can cancel, downgrade or scale up at any time with 7 days notice.',
  },
  {
    q: 'Who designs the social posts and writes the copies?',
    a: 'All creatives, hooks and copy scripts are produced by our in-house copywriters and design specialists under senior marketing management guidance. Nothing is outsourced.',
  },
  {
    q: 'What is pay-as-you-go performance marketing?',
    a: 'If you prefer outcomes, we set up performance models where you pay per qualified lead generated, or purchase graphic assets individually (posters from ₹200, reels from ₹380, dashboards from ₹2,000).',
  },
  {
    q: 'How long does onboarding take?',
    a: 'We can onboard your social channels and launch your first week content calendar within 48 hours of completing the strategy checklist and signing off on templates.',
  },
];

export function SmmServiceView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ── Breadcrumb & Back Link ────────────────────────────── */}
        <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-semibold">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-stone-500">
            <Link href="/" className="hover:text-terracotta-700">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-terracotta-700">Services</Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">Social Media Marketing</span>
          </nav>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-400 shadow-sm transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Browse All Services</span>
          </Link>
        </div>

        {/* ── Hero Service Card ─────────────────────────────────── */}
        <header className="bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-12 border border-[#E7E0D6] shadow-warm-md relative overflow-hidden space-y-6">
          <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta-700 via-amber-500 to-terracotta-500" />
          
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              SOCIAL GROWTH
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cream-100 border border-cream-200 flex items-center justify-center text-4xl sm:text-5xl shadow-inner shrink-0">
                📱
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
                  Social Media Marketing
                </h1>
                <p className="text-xs font-bold text-stone-400 mt-1 uppercase tracking-wider">
                  Instagram • Facebook • LinkedIn • YouTube Shorts
                </p>
              </div>
            </div>

            <div className="bg-[#FAF4ED] p-4 sm:p-5 rounded-2xl border border-terracotta-200 text-left md:text-right shrink-0">
              <span className="text-[11px] uppercase font-bold text-stone-500 block">Transparent Price Range</span>
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-terracotta-700 mt-0.5 block">
                ₹5,999–₹11,999/mo
              </span>
              <span className="text-[10px] text-stone-400 font-semibold block mt-1">Zero Lock-In • Month-to-Month</span>
            </div>
          </div>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            Supercharge your brand presence on Instagram, Facebook, and LinkedIn. We build custom monthly content calendars, write high-converting captions, design scroll-stopping graphics, produce viral reels hooks, and provide comprehensive monthly analytics reports to drive inbound customer leads and sales.
          </p>

          <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20Social%20Media%20Marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-warm-md hover:shadow-warm-lg group"
            >
              <svg
                className="w-5 h-5 fill-white transition-transform group-hover:scale-110"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <span>Chat on WhatsApp 💬</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-sm"
            >
              <span>Request Custom Proposal →</span>
            </Link>
          </div>
        </header>

        {/* ── 3 MONTHLY PRICING CARDS SECTION ─────────────────── */}
        <section aria-labelledby="pricing-heading" className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                TRANSPARENT VALUE
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Packages &amp; Pay-As-You-Go
            </h2>
            <p className="text-stone-500 text-sm sm:text-base">
              Flexible plans, no retainer traps. Only pay for outcomes that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            {SMM_PACKAGES.map((pkg) => {
              const isPopular = pkg.popular;
              return (
                <div
                  key={pkg.name}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? 'bg-[#1A1311] text-white shadow-2xl scale-[1.03] border-2 border-amber-500'
                      : 'bg-white text-stone-900 shadow-warm-sm hover:shadow-xl border border-stone-200'
                  }`}
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-md ${
                      isPopular
                        ? 'bg-amber-500 text-stone-950 font-black'
                        : 'bg-terracotta-600 text-white'
                    }`}>
                      {pkg.badge}
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-widest block ${
                        isPopular ? 'text-amber-400' : 'text-terracotta-600'
                      }`}>
                        {pkg.name}
                      </span>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-4xl sm:text-5xl font-serif font-black">
                          ₹{pkg.price}
                        </span>
                        <span className={`text-xs font-bold ${
                          isPopular ? 'text-stone-400' : 'text-stone-500'
                        }`}>
                          /month
                        </span>
                      </div>
                      <p className={`text-xs mt-2.5 leading-relaxed ${
                        isPopular ? 'text-stone-300' : 'text-stone-600'
                      }`}>
                        {pkg.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-200/20">
                      <div className={`text-[10px] uppercase font-bold tracking-wider mb-3 ${
                        isPopular ? 'text-stone-400' : 'text-stone-400'
                      }`}>
                        What&apos;s Included:
                      </div>
                      <ul className="space-y-3">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs font-medium leading-snug">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPopular ? 'text-amber-400' : 'text-emerald-600'
                            }`} />
                            <span className={isPopular ? 'text-stone-200' : 'text-stone-700'}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-stone-200/20">
                    <a
                      href={`https://wa.me/918586989832?text=${encodeURIComponent(pkg.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-warm-sm ${
                        isPopular
                          ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 font-black'
                          : 'bg-stone-900 hover:bg-terracotta-600 text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Get Started on WhatsApp →</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pay-As-You-Go Box */}
          <div className="bg-gradient-to-br from-[#FAF4ED] to-[#F5EFE6] border border-dashed border-terracotta-300 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-sm">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-[11px] font-bold text-terracotta-700 uppercase tracking-widest">
                — PAY-AS-YOU-GO FLEXIBILITY —
              </span>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-2xl">
                Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. Single deliverables start tiny: <strong>posters from ₹200</strong>, <strong>reels from ₹380</strong>, <strong>dashboards from ₹2,000</strong>.
              </p>
            </div>

            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20Pay-As-You-Go%20SMM%20deliverables"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full text-xs font-bold whitespace-nowrap shadow-sm transition-all shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Pay-As-You-Go Quote</span>
            </a>
          </div>
        </section>

        {/* ── B2B & AGENCY PARTNERSHIP TIERS ──────────────────── */}
        <section aria-labelledby="b2b-heading" className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                PARTNERSHIPS
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 id="b2b-heading" className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              B2B &amp; Agency Tiers
            </h2>
            <p className="text-stone-500 text-sm sm:text-base">
              White-label execution and volume pricing for agencies, resellers and enterprise teams.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {B2B_TIERS.map((tier) => (
              <div
                key={tier.tier}
                className="bg-white rounded-3xl p-6 border border-stone-200 shadow-warm-sm text-center relative flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                {tier.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-terracotta-600 text-white shadow-sm whitespace-nowrap">
                    {tier.tag}
                  </span>
                )}
                <div>
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    {tier.tier}
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-terracotta-700 mt-2 mb-1">
                    {tier.discount}
                  </div>
                  <div className="text-xs text-stone-600 font-medium">
                    {tier.desc}
                  </div>
                </div>

                <a
                  href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(tier.tier)}%20for%20Agencies`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-[11px] font-bold text-terracotta-600 hover:text-terracotta-800 hover:underline inline-flex items-center justify-center gap-1"
                >
                  <span>Apply on WhatsApp</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES CARD: WHAT WE DO & DELIVERABLES BREAKDOWN ── */}
        <section aria-labelledby="services-card-heading" className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                EXECUTION ARCHITECTURE
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 id="services-card-heading" className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Everything Included in Our SMM Engine
            </h2>
            <p className="text-stone-500 text-sm sm:text-base">
              A comprehensive system built for organic discovery, retention, and inbound lead generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What We Do Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta-100 flex items-center justify-center text-terracotta-700">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Core Strategy &amp; Execution</h3>
                  <p className="text-xs text-stone-500">What our in-house strategists manage every week</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {WHAT_WE_DO.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-snug">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Tangible Monthly Deliverables</h3>
                  <p className="text-xs text-stone-500">Documented assets published to your accounts</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {DELIVERABLES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-snug">
                    <Check className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="text-xs font-bold text-stone-900">Strategic Approach:</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Content-first brand storytelling: we build custom visual grids, write direct-response copy, and schedule at peak-hour traffic slots for algorithmic leverage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING & PROCESS FAQS ACCORDION ────────────────── */}
        <section aria-labelledby="faqs-heading" className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                COMMON QUESTIONS
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 id="faqs-heading" className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Pricing &amp; Process FAQs
            </h2>
            <p className="text-stone-500 text-sm">
              Everything you need to know about our social media retainers, billing, and onboarding.
            </p>
          </div>

          <div className="space-y-3.5">
            {SMM_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-warm-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-stone-900 hover:text-terracotta-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`text-xl font-mono transition-transform duration-200 shrink-0 text-stone-400 ${
                      isOpen ? 'rotate-45 text-terracotta-600' : ''
                    }`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-0 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── READY TO DOMINATE SMM CTA BAR ────────────────────── */}
        <div className="bg-stone-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
            Get a custom content calendar and viral UGC creator growth strategy tailored for your brand within 2 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-warm-md hover:shadow-warm-lg group"
            >
              <svg
                className="w-5 h-5 fill-white transition-transform group-hover:scale-110"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <span>Discuss SMM on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 hover:bg-stone-100 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-sm"
            >
              <span>Contact Our Team →</span>
            </Link>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
