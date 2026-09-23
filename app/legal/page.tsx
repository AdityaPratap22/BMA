import React from 'react';
import Link from 'next/link';
import { Scale, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Legal Marketing & CA/CS Digital Growth Solutions | BMA — Best Marketing Agency',
  description: 'Specialized ethical marketing, client acquisition funnels, and personal branding tailored for Law Firms, Advocates, and Corporate Financial Advisory professionals.',
  alternates: {
    canonical: 'https://bestmarketingagency.online/legal',
  },
};

export default function LegalPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-brand-card rounded-4xl p-8 sm:p-14 border border-brand-border shadow-warm-md text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-terracotta-100 text-terracotta-700 rounded-full text-xs font-semibold">
            <Scale className="w-4 h-4 text-terracotta-600" />
            Niche Growth — Legal & Corporate Compliance
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Ethical Client Acquisition & Thought Leadership for Advocates & Law Firms
          </h1>

          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Build authority and attract high-retainer corporate clients while adhering strictly to Bar Council guidelines and professional marketing standards.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-terracotta-700 transition-all shadow-warm-md"
            >
              <span>Schedule Legal Growth Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Legal Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-warm-sm space-y-4">
            <Shield className="w-8 h-8 text-terracotta-600" />
            <h3 className="text-xl font-serif font-bold text-stone-900">Compliant Authority Content</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Educational legal guides, case summaries, and LinkedIn commentary designed to establish expertise ethically.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-warm-sm space-y-4">
            <Scale className="w-8 h-8 text-terracotta-600" />
            <h3 className="text-xl font-serif font-bold text-stone-900">High-Value Client Funnels</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Target corporate entities, startups, and high-net-worth individuals seeking ongoing advisory services.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-warm-sm space-y-4">
            <CheckCircle2 className="w-8 h-8 text-terracotta-600" />
            <h3 className="text-xl font-serif font-bold text-stone-900">CA & CS Retainer Acceleration</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Automated client intake, GST/tax consulting lead systems, and compliance marketing automation.
            </p>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
