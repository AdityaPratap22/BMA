import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Palette,
  Target,
  Eye,
  Handshake,
  Linkedin,
  MessageCircle,
  Sparkles,
  Layout,
  Video,
  Feather
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Khwahish Sahai — Co-Founder & Creative Director | BMA',
  description:
    'Meet Khwahish Sahai, Co-Founder & Creative Director of BMA. Visual storyteller, UI/UX architect, and viral content strategist.',
};

export default function KhwahishSahaiPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg min-h-screen space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Breadcrumb */}
        <div className="text-sm text-stone-500">
          <Link href="/" className="font-semibold text-stone-900 hover:text-terracotta-600">Home</Link>
          {' / '}
          <Link href="/about" className="font-semibold text-stone-900 hover:text-terracotta-600">About</Link>
          {' / '}
          <span className="text-terracotta-600 font-bold">Khwahish Sahai</span>
        </div>

        {/* ── TOP HERO LAYOUT ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Photo, Quote & Values */}
          <div className="lg:col-span-5 space-y-6">
            {/* Photo & Quote Card */}
            <div className="bg-white rounded-4xl p-8 border border-stone-200 shadow-warm-sm text-center space-y-5 relative overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-500" />
              
              <Image
                src="/khwahish_sahai.jpg"
                alt="Khwahish Sahai"
                width={180}
                height={180}
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-warm-md"
                priority
              />

              <div className="space-y-2">
                <p className="italic text-stone-700 text-sm sm:text-base leading-relaxed font-serif">
                  &ldquo;I believe premium design and visual storytelling are the ultimate hooks that turn casual scrollers into loyal brand advocates.&rdquo;
                </p>
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  — Khwahish Sahai
                </div>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-warm-sm space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>Creative Mission</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To design scroll-stopping visual identities and conversion assets that help ambitious businesses stand out and command undisputed market authority.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-warm-sm space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Eye className="w-4 h-4 text-emerald-600" />
                  <span>Creative Vision</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To build a world-class studio where fine art design and direct-response performance engineering merge seamlessly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-warm-sm space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Handshake className="w-4 h-4 text-emerald-600" />
                  <span>Core Values</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Aesthetic Originality, Obsessive Attention to Detail, Commercial Alignment, and Creative Excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Expertise & Journey */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Bio */}
            <div className="bg-white rounded-4xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
                  Co-Founder &amp; Creative Director
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 pt-2">
                  Khwahish Sahai
                </h1>
                <p className="text-emerald-700 font-bold text-sm">
                  Brand Storytelling &amp; Visual UX Director
                </p>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Khwahish Sahai is the Co-Founder &amp; Creative Director of BMA. She directs brand identity, visual UI/UX aesthetics, video storytelling, and creative direction across all client campaigns. Khwahish ensures every creative asset captures attention instantly with direct-response optimization.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/918586989832?text=Hi%20Khwahish%2C%20I%20would%20like%20to%20discuss%20creative%20branding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Khwahish</span>
                </a>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="bg-white rounded-4xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-6">
              <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>Areas of Creative Expertise</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">🎨 Brand Design &amp; Positioning</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">Designing cohesive vector logos, typography systems, and comprehensive brand books.</p>
                </div>

                <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">📱 UI/UX &amp; Web Aesthetics</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">Crafting high-converting, mobile-first responsive web design systems.</p>
                </div>

                <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">🎥 Viral Video Direction &amp; Hooks</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">Directing high-retention video ad frames, UGC scripts, and Reels editing formulas.</p>
                </div>

                <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">✍️ Direct-Response Copywriting</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">Writing compelling hooks and storytelling copy designed for high sales conversion.</p>
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
                  My journey in creative direction began with a fundamental conviction — design shouldn&apos;t just look pretty; it must achieve a commercial purpose. Over the years, I&apos;ve designed identities for startup brands and large enterprises, combining visual elegance with measurable conversion triggers.
                </p>
                <p>
                  At BMA, I oversee our creative team to guarantee that every logo, ad frame, and web application communicates unmistakable authority and commands category leadership.
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
