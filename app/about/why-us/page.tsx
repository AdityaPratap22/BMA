import React from 'react';
import Link from 'next/link';
import {
  Crown,
  Unlock,
  CreditCard,
  BarChart2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Why Choose BMA & Core Pillars — Best Marketing Agency',
  description:
    'Discover why 150+ brands choose BMA: Founder-led accounts, zero lock-in contracts, post-pay flexibility, and live real-time KPI dashboards.',
};

const pillars = [
  {
    icon: <Crown className="w-8 h-8 text-terracotta-600" />,
    title: '1. Founder-Led Accounts',
    tag: 'SENIOR STEWARDSHIP',
    desc: 'Unlike typical agencies that hand your brand over to junior interns, BMA guarantees that senior founders Harsh Chaudhary (CEO) and Khwahish Sahai (Creative Director) directly drive strategy, review ad creatives, audit campaigns, and lead weekly performance calls for peak execution standards.',
  },
  {
    icon: <Unlock className="w-8 h-8 text-emerald-600" />,
    title: '2. Zero Lock-In Retainer Traps',
    tag: 'FLEXIBILITY',
    desc: 'We reject standard lock-in contracts that force you to commit to 6 or 12 months before seeing results. Our model operates on a flexible, month-to-month structure, giving you the freedom to scale up or down as market conditions dictate. We earn your business every month.',
  },
  {
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    title: '3. Post-Pay Flexibility',
    tag: 'ALIGNED INCENTIVES',
    desc: 'To align our financial incentives directly with your growth, we offer flexible post-pay payment structures and milestone checkpoints for qualified brands. Rather than demanding massive upfront retainers, payments are tied directly to execution and delivery verification.',
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-purple-600" />,
    title: '4. Data Science Meets Design',
    tag: 'TRANSPARENCY',
    desc: 'A beautiful ad is useless if it does not convert, and a data-driven campaign fails if the creative design is weak. We bridge this gap by uniting conversion-first design psychology with real-time KPI and revenue dashboards, giving you 100% transparent visibility into your ROAS, CPA, and blended profits.',
  },
];

const scalabilityStages = [
  {
    step: '01',
    title: 'Audience Intelligence',
    icon: '🎯',
    desc: 'We perform deep competitor analysis, customer avatar profiling, and keyword intent mapping to identify high-value buyers before launching campaigns.',
  },
  {
    step: '02',
    title: 'Creative Amplification',
    icon: '⚡',
    desc: 'We design conversion-first visual creatives, produce native user-generated content (UGC), and write direct-response copy that captures attention in under 3 seconds.',
  },
  {
    step: '03',
    title: 'Conversion Engineering',
    icon: '📈',
    desc: 'We build lightning-fast web pages, implement custom WhatsApp chatbot lead routing, and configure automated CRM flows to convert clicks into sales-ready leads.',
  },
];

const comparisonData = [
  {
    aspect: 'Cost Efficiency',
    bma: '✓ Scalable modular plans (from ₹150 / ₹5,999)',
    freelancers: '✓ Low hourly rates',
    bigAgencies: '✕ High retainer & lock-in',
    inHouse: '⚠ Heavy salary overhead',
  },
  {
    aspect: 'Expertise Breadth',
    bma: '✓ Full team (SEO, Next.js, design, ads, AI)',
    freelancers: '✕ Single skill set',
    bigAgencies: '✓ Full service',
    inHouse: '⚠ Limited bandwidth',
  },
  {
    aspect: 'Results Accountability',
    bma: '✓ Live revenue dashboards, verified ROAS',
    freelancers: '✕ Varies widely',
    bigAgencies: '✕ Fluff & vanity metrics',
    inHouse: '⚠ Less specialized depth',
  },
  {
    aspect: 'Communication',
    bma: '✓ Direct access to senior founders',
    freelancers: '✕ Often unreliable',
    bigAgencies: '✕ Account manager layers',
    inHouse: '⚠ Internal friction',
  },
  {
    aspect: 'Personalization',
    bma: '✓ Bespoke playbook tailored to sector',
    freelancers: '✓ Highly flexible',
    bigAgencies: '✕ Cookie-cutter templates',
    inHouse: '⚠ Risk of groupthink',
  },
];

export default function WhyUsPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg min-h-screen space-y-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Breadcrumb */}
        <div className="text-sm text-stone-500">
          <Link href="/" className="font-semibold text-stone-900 hover:text-terracotta-600">Home</Link>
          {' / '}
          <Link href="/about" className="font-semibold text-stone-900 hover:text-terracotta-600">About</Link>
          {' / '}
          <span className="text-terracotta-600 font-bold">Why BMA</span>
        </div>

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              SEEN. HEARD. CHOSEN.
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Why Choose BMA?
          </h1>

          <p className="text-stone-600 text-lg leading-relaxed">
            Four foundational pillars that separate us from standard digital agencies — built for founders who demand tangible revenue over vanity metrics.
          </p>
        </div>

        {/* ── 4 CORE PILLARS GRID ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-4xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-200">
                  {p.icon}
                </div>
                <span className="text-[10px] font-bold px-3 py-1 bg-cream-200 text-stone-700 rounded-full tracking-wider">
                  {p.tag}
                </span>
              </div>

              <h2 className="font-serif font-bold text-2xl text-stone-900">
                {p.title}
              </h2>

              <p className="text-stone-600 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── 3-STAGE SCALABILITY ENGINE ──────────────────────────── */}
        <div className="bg-brand-card rounded-4xl p-8 sm:p-12 border border-brand-border space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Execution Architecture
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Our 3-Stage Scalability Engine
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scalabilityStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-stone-200 shadow-warm-sm space-y-3 relative"
              >
                <div className="text-3xl font-serif font-black text-terracotta-600 font-mono">
                  {stage.step}
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  {stage.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── HONEST COMPARISON MATRIX ────────────────────────────── */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
              HONEST COMPARISON
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              BMA vs Freelancers vs Big Agencies vs In-House
            </h2>
            <p className="text-stone-500 text-sm">
              How the four paths stack up — judge for yourself.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-stone-200 shadow-warm-sm bg-white">
            <table className="w-full text-left text-xs border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Aspect</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-terracotta-400">BMA</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-stone-400">Freelancers</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-stone-400">Big Agencies</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-stone-400">In-House Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonData.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-stone-900">{row.aspect}</td>
                    <td className="p-4 sm:p-5 font-bold text-terracotta-700 bg-[#FAF4ED]/50">{row.bma}</td>
                    <td className="p-4 sm:p-5 text-stone-600">{row.freelancers}</td>
                    <td className="p-4 sm:p-5 text-rose-600">{row.bigAgencies}</td>
                    <td className="p-4 sm:p-5 text-amber-700">{row.inHouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
