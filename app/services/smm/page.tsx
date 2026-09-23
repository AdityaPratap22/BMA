import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Share2, Video, Sparkles, Flame } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Social Media Marketing (SMM) & Viral Reels Strategy | BMA — Best Marketing Agency',
  description: 'Full-funnel organic and paid social media management for Instagram, LinkedIn, YouTube, and Facebook designed to build brand authority and generate leads.',
  alternates: {
    canonical: 'https://bestmarketingagency.online/services/smm',
  },
};

export default function SmmPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section */}
        <div className="bg-brand-card rounded-4xl p-8 sm:p-14 border border-brand-border shadow-warm-md text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-terracotta-600 animate-bounce" />
            Viral Social Media Engine
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Turn Casual Scrollers Into High-Value Brand Advocates
          </h1>

          <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We produce high-impact Instagram Reels, YouTube Shorts, LinkedIn Thought Leadership content, and algorithmic ad creatives that command attention and convert.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-terracotta-700 transition-all shadow-warm-md"
            >
              <span>Get Free Social Media Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-warm-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cream-200 flex items-center justify-center text-terracotta-600">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">Short-Form Video First</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Scripting, filming guidance, professional editing, and algorithmic tagging for Instagram Reels & YouTube Shorts.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-warm-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cream-200 flex items-center justify-center text-terracotta-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">LinkedIn Executive Authority</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Position founders and executives as industry leaders with high-converting carousels and deep commentary.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-warm-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cream-200 flex items-center justify-center text-terracotta-600">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">DM & Lead Automation</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Automated comment keyword responses and direct message sales funnels that turn engagement into pipeline revenue.
            </p>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
