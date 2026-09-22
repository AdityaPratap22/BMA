import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingUp,
  Target,
  Eye,
  Handshake,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Sparkles,
  BarChart3,
  Award,
  Layers
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Harsh Chaudhary — Founder & CEO | BMA',
  description:
    'Meet Harsh Chaudhary, Founder & CEO of BMA. Growth strategist and performance marketing architect scaling brands across India and global markets.',
};

export default function HarshChaudharyPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg min-h-screen space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Breadcrumb */}
        <div className="text-sm text-stone-500">
          <Link href="/" className="font-semibold text-stone-900 hover:text-terracotta-600">Home</Link>
          {' / '}
          <Link href="/about" className="font-semibold text-stone-900 hover:text-terracotta-600">About</Link>
          {' / '}
          <span className="text-terracotta-600 font-bold">Harsh Chaudhary</span>
        </div>

        {/* ── TOP HERO LAYOUT ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Photo, Quote & Stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Photo & Quote Card */}
            <div className="bg-white rounded-4xl p-8 border border-stone-200 shadow-warm-sm text-center space-y-5 relative overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta-600 to-amber-500" />
              
              <Image
                src="/harsh_chaudhary.jpg"
                alt="Harsh Chaudhary"
                width={180}
                height={180}
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-warm-md"
                priority
              />

              <div className="space-y-2">
                <p className="italic text-stone-700 text-sm sm:text-base leading-relaxed font-serif">
                  &ldquo;I believe great brands are built with clarity, strategy, and consistent performance engineering — not luck.&rdquo;
                </p>
                <div className="text-xs font-bold text-terracotta-600 uppercase tracking-wider">
                  — Harsh Chaudhary
                </div>
              </div>
            </div>

            {/* Stats Banner */}
            <div className="bg-stone-900 rounded-3xl p-6 text-white space-y-4 shadow-xl">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="border-r border-stone-800 pr-2">
                  <div className="text-2xl font-serif font-bold text-terracotta-400">150+</div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold mt-0.5">Brands Scaled</div>
                </div>
                <div className="border-r border-stone-800 pr-2">
                  <div className="text-2xl font-serif font-bold text-terracotta-400">₹50Cr+</div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold mt-0.5">Ad Spend</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-terracotta-400">4.8x</div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold mt-0.5">Avg ROAS</div>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 text-center leading-relaxed border-t border-stone-800 pt-3">
                Trusted by high-growth startups, SMEs &amp; enterprise brands across healthcare, real estate, education &amp; D2C.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-warm-sm space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Target className="w-4 h-4 text-terracotta-600" />
                  <span>My Mission</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To empower businesses with smart algorithmic strategies, strong positioning, and performance-driven marketing that creates long-term enterprise value.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-warm-sm space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Eye className="w-4 h-4 text-terracotta-600" />
                  <span>My Vision</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To build a premier global digital growth agency recognized for absolute transparency, engineering precision, and measurable client revenue.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-warm-sm space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Handshake className="w-4 h-4 text-terracotta-600" />
                  <span>Core Values</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Integrity, Extreme Accountability, Live Dashboard Transparency, and a relentless focus on tangible business outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Expertise & Journey */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Bio */}
            <div className="bg-white rounded-4xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-terracotta-100 text-terracotta-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  Founder &amp; CEO
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 pt-2">
                  Harsh Chaudhary
                </h1>
                <p className="text-terracotta-600 font-bold text-sm">
                  Growth Strategist &amp; Performance Marketing Architect
                </p>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Harsh Chaudhary is the Founder &amp; CEO of BMA (Best Marketing Agency). He leads growth architecture, performance ad scaling (Meta &amp; Google Ads), revenue modeling, and full-funnel customer acquisition systems for client brands across India and global markets.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/harsh-chaudhary-b370b2337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#084e96] transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/918586989832?text=Hi%20Harsh%2C%20I%20would%20like%20to%20discuss%20a%20marketing%20strategy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Harsh</span>
                </a>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="bg-white rounded-4xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-6">
              <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-terracotta-600" />
                <span>Areas of Strategic Expertise</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">🎯 Performance Marketing &amp; ROAS</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">High-intent Google Ads, Meta Ads bidding funnels, and programmatic retargeting.</p>
                </div>

                <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">📊 Unit Economics &amp; CAC Optimization</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">Lowering customer acquisition costs and maximizing customer lifetime value (LTV).</p>
                </div>

                <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">🤖 AI Search Optimization (GEO/AEO)</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">Positioning brands for top citations in ChatGPT, Claude, Perplexity &amp; Google AI.</p>
                </div>

                <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">👑 Founder-Led Account Governance</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">Direct strategic stewardship ensuring every client receives senior-level attention.</p>
                </div>
              </div>
            </div>

            {/* Journey Story */}
            <div className="bg-white rounded-4xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-4">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                My Journey &amp; Philosophy
              </h2>
              <div className="text-sm text-stone-600 space-y-3 leading-relaxed">
                <p>
                  My journey started with a simple belief — digital marketing must create real revenue, not just vanity impressions. Over the years, I&apos;ve worked with hundreds of brands across diverse industries, helping them scale from zero to multi-crore revenue runs through disciplined strategy, data modeling, and relentless creative execution.
                </p>
                <p>
                  BMA is not just an agency — it is our commitment to eliminate agency fluff, kill lock-in retainers, and give founders the high-touch execution they deserve.
                </p>
              </div>
            </div>

          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
