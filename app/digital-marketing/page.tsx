import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Search,
  Share2,
  Palette,
  Code2,
  MessageCircle,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Crown,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Digital Marketing & Growth Architecture — BMA | Best Marketing Agency',
  description:
    'Comprehensive digital marketing services: Performance Marketing, SEO & GEO, Social Media Management, Graphic Design, Web Development, and WhatsApp Automation. Zero lock-in contracts.',
};

const marketingServices = [
  {
    icon: <TrendingUp className="w-6 h-6 text-terracotta-600" />,
    title: 'Performance Marketing (Google & Meta Ads)',
    pricing: '15% - 18% of Ad Spend',
    badge: 'High ROAS',
    desc: 'High-intent search ads, Meta lookalike campaigns, and conversion-optimized retargeting engineered to maximize Return on Ad Spend (ROAS).',
    deliverables: [
      'Google Search, PMax & Shopping Campaigns',
      'Meta (Facebook & Instagram) Direct Response Funnels',
      'Server-Side Conversion API & Pixel Setup',
      'Weekly Creative Iteration & ROAS Optimization',
    ],
    approach: 'Intent-driven bidding optimization paired with weekly creative velocity to prevent ad fatigue.',
    result: 'Average 3.8x – 4.8x ROAS across active client campaigns.',
  },
  {
    icon: <Search className="w-6 h-6 text-terracotta-600" />,
    title: 'Search Engine & AI Optimization (SEO / GEO)',
    pricing: '₹4,000 – ₹12,000 / mo',
    badge: 'Rank #1',
    desc: 'Dominate traditional Google search rankings while optimizing for next-generation AI engines (ChatGPT, Perplexity, Claude, Gemini).',
    deliverables: [
      'Generative Engine Optimization (GEO/AEO)',
      'High-Intent Commercial Keyword Mapping',
      'Technical Core Web Vitals Optimization',
      'High-Authority Backlink Outreach & PR',
    ],
    approach: 'Semantic entity authority building combined with sub-500ms technical speed performance.',
    result: 'Predictable organic search traffic with 60%+ target keywords on Page 1 within 90 days.',
  },
  {
    icon: <Share2 className="w-6 h-6 text-terracotta-600" />,
    title: 'Social Media Marketing & UGC Reels',
    pricing: '₹5,999 – ₹11,999 / mo',
    badge: 'Viral Reach',
    desc: 'End-to-end social media management, short-form Reels/Shorts production, and creator marketing to build loyal communities and inbound pipeline.',
    deliverables: [
      '30-Post Monthly Aesthetic Visual Grid',
      'Scripted, Edited & Tagged Viral Reels/Shorts',
      'LinkedIn Executive & B2B Authority Content',
      'Automated DM Sales & Comment Lead Funnels',
    ],
    approach: 'Retention-first storytelling with trending audio integration and psychology-backed hooks.',
    result: '40%+ organic follower growth and 2.5x increase in social DM-to-lead conversions.',
  },
  {
    icon: <Palette className="w-6 h-6 text-terracotta-600" />,
    title: 'Graphic Design & Brand Identity',
    pricing: 'From ₹150 per creative',
    badge: 'Per-Design Pricing',
    desc: 'From social media posts and festival creatives to investor pitch decks, packaging, and complete brand design systems.',
    deliverables: [
      'Social Graphics & Festival Posters (₹150)',
      'Visiting Cards & Structured Layouts (₹280)',
      'Presentations & Pitch Decks (₹130/slide)',
      'Vector Logos & Full Brand Guideline Systems',
    ],
    approach: 'Transparent per-design pricing with zero retainer bloat — fast 24–48 hour turnaround.',
    result: 'Consistent, conversion-focused design assets at a fraction of traditional agency costs.',
  },
  {
    icon: <Code2 className="w-6 h-6 text-terracotta-600" />,
    title: 'Modern Next.js Web Development',
    pricing: '₹6,500 – ₹18,000',
    badge: 'Sub-Second Speed',
    desc: 'Custom-coded, lightning-fast web applications built on Next.js 14 and React designed to convert cold traffic into qualified sales.',
    deliverables: [
      'Mobile-First Responsive Next.js App Router Site',
      'Instant WhatsApp Chat Integration & CRM Hooks',
      '95+ Google Lighthouse Core Web Vitals Score',
      '1-Year Post-Launch Maintenance & Support',
    ],
    approach: 'Design for conversion first: frictionless user flows, trust signals, and sub-3-second load speeds.',
    result: 'Clients average 2–3x higher lead inquiry rates compared to standard CMS templates.',
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-terracotta-600" />,
    title: 'WhatsApp API & Lead Automation',
    pricing: '₹2,500 – ₹6,000 / mo',
    badge: '90%+ Open Rate',
    desc: 'Capitalize on India’s highest-converting channel with official WhatsApp Business API integration, broadcast campaigns, and automated follow-ups.',
    deliverables: [
      'Official Meta Green Tick Verification Setup',
      'Automated 5-Second Inbound Lead Response',
      'Interactive Product Catalog & Ordering Bots',
      'Abandoned Cart & Payment Recovery Sequences',
    ],
    approach: 'Permission-based lifecycle flows with personalized broadcast tags and zero spam flags.',
    result: '95% message open rates and up to 15% recovery on lost leads without manual effort.',
  },
];

const methodologySteps = [
  {
    step: '01',
    title: 'Growth Audit & Unit Economics',
    desc: 'We analyze your current customer acquisition costs, funnel bottlenecks, competitor rankings, and market positioning across search and social.',
  },
  {
    step: '02',
    title: 'Bespoke Campaign Architecture',
    desc: 'Our founders design a custom growth roadmap: high-converting ad copy, landing pages, keyword clusters, and automation triggers tailored to your sector.',
  },
  {
    step: '03',
    title: 'High-Velocity Execution',
    desc: 'Campaigns go live within 48–72 hours with real-time conversion tracking, live KPI dashboard deployment, and immediate response funnels.',
  },
  {
    step: '04',
    title: 'Algorithmic Optimization & Scale',
    desc: 'We continually refine bid models, rotate high-performing creative variations, and scale ad budgets profitably to maximize customer lifetime value.',
  },
];

const faqs = [
  {
    q: 'How does BMA differ from traditional digital marketing agencies?',
    a: 'We operate on founder-led execution, transparent pay-per-outcome models, zero lock-in contracts, and custom live revenue dashboards. You work directly with senior strategists—not junior trainees.',
  },
  {
    q: 'What is Generative Engine Optimization (GEO/AEO)?',
    a: 'GEO (Generative Engine Optimization) is next-generation SEO. While traditional SEO optimizes for Google search results, GEO optimizes your brand’s semantic authority so you are cited and recommended by AI engines like ChatGPT, Claude, and Perplexity.',
  },
  {
    q: 'How soon will I see results from my digital marketing campaigns?',
    a: 'Performance ad campaigns and WhatsApp funnels begin generating qualified leads within 24 to 72 hours of launch. SEO and brand authority initiatives build compounded organic volume starting at 60 to 90 days.',
  },
  {
    q: 'Can I choose individual services instead of a full package?',
    a: 'Yes! We offer completely flexible modular pricing. You can order single graphic design assets from ₹150, standalone web applications, or a full omnichannel growth retainer.',
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg min-h-screen space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── HERO BANNER ────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Full-Funnel Growth Engineering
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight">
            Digital Marketing That Builds Category Leaders
          </h1>

          <p className="text-stone-600 text-lg sm:text-xl leading-relaxed">
            Data-driven performance marketing, generative AI search dominance, high-velocity creative production, and custom conversion web apps designed to scale revenue.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20a%20full-suite%20digital%20marketing%20strategy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-terracotta-700 transition-all shadow-warm-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Strategy on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 border border-stone-300 px-8 py-4 rounded-2xl font-bold text-sm hover:border-terracotta-600 hover:text-terracotta-600 transition-colors"
            >
              <span>Book Growth Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── VALUE PILLARS STRIP ───────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-warm-sm space-y-2 text-center">
            <Crown className="w-8 h-8 text-terracotta-600 mx-auto" />
            <div className="font-serif font-bold text-stone-900 text-base">Founder-Led</div>
            <div className="text-xs text-stone-500">Direct senior strategist oversight on every account</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-warm-sm space-y-2 text-center">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
            <div className="font-serif font-bold text-stone-900 text-base">Zero Lock-In</div>
            <div className="text-xs text-stone-500">Flexible month-to-month terms with no trap contracts</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-warm-sm space-y-2 text-center">
            <BarChart3 className="w-8 h-8 text-blue-600 mx-auto" />
            <div className="font-serif font-bold text-stone-900 text-base">Live Dashboards</div>
            <div className="text-xs text-stone-500">100% transparency into true ad spend, leads &amp; ROAS</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-warm-sm space-y-2 text-center">
            <Zap className="w-8 h-8 text-amber-600 mx-auto" />
            <div className="font-serif font-bold text-stone-900 text-base">Post-Pay Available</div>
            <div className="text-xs text-stone-500">Milestone &amp; performance structures for qualified brands</div>
          </div>
        </div>

        {/* ── CORE SERVICES SUITE ───────────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              End-to-End Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Full-Spectrum Digital Growth Engine
            </h2>
            <p className="text-stone-500 text-base">
              Transparent per-service pricing. Pick modular solutions or deploy a unified multi-channel funnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-stone-200 shadow-warm-sm flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl hover:border-terracotta-400 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta-600 via-amber-500 to-terracotta-400" />

                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-2xl bg-cream-100 border border-cream-200 shrink-0">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 bg-cream-200 text-terracotta-800 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                      {service.title}
                    </h3>
                    <div className="text-sm font-extrabold text-terracotta-600 mt-1">
                      {service.pricing}
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Included Deliverables:</div>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results box */}
                  <div className="p-3 rounded-xl bg-cream-100 border border-cream-200 text-xs text-stone-700 space-y-1">
                    <div className="font-bold text-terracotta-800 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Typical Outcomes:</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-stone-600">{service.result}</p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-stone-900 hover:text-terracotta-600 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Get Custom Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    WhatsApp 💬
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── METHODOLOGY STEPS ─────────────────────────────────── */}
        <div className="bg-brand-card rounded-4xl p-8 sm:p-14 border border-brand-border space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              The BMA Growth Playbook
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              4-Phase Scalable Growth Methodology
            </h2>
            <p className="text-stone-600 text-base">
              A systematic engineering framework built to eliminate marketing guesswork and deliver reliable client acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-white rounded-3xl p-6 border border-stone-200 shadow-warm-sm space-y-3 relative"
              >
                <div className="text-3xl font-serif font-black text-terracotta-600 opacity-80 font-mono">
                  {step.step}
                </div>
                <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FREQUENTLY ASKED QUESTIONS ───────────────────────── */}
        <div className="space-y-10 max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Clarity &amp; Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Digital Marketing FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-white rounded-2xl border border-stone-200 shadow-warm-sm p-6 space-y-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                  <h3 className="font-serif font-bold text-base text-stone-900 leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
