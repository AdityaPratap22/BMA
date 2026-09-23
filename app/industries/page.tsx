import type { Metadata } from 'next';
import { IndustriesListClient } from '@/components/IndustriesListClient';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: '89+ Specialized Industry Marketing Blueprints | BMA — Best Marketing Agency',
  description: 'Explore tailored performance marketing architectures, unit economics, customer acquisition funnels, and verified market benchmarks across 89+ industries in India and globally.',
  alternates: {
    canonical: 'https://bestmarketingagency.online/industries',
  },
  openGraph: {
    title: '89+ Specialized Industry Marketing Blueprints | BMA — Best Marketing Agency',
    description: 'Explore tailored performance marketing architectures, unit economics, customer acquisition funnels, and verified market benchmarks across 89+ industries.',
    url: 'https://bestmarketingagency.online/industries',
    siteName: 'BMA — Best Marketing Agency',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Sector Specializations
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            89+ Industry Digital Growth Blueprints
          </h1>

          <p className="text-stone-600 text-lg leading-relaxed">
            Every sector requires custom customer acquisition economics. Explore our dedicated marketing architectures, verified market data, and growth models tailored specifically for your industry.
          </p>
        </div>

        {/* Client interactive search & filter list */}
        <IndustriesListClient />

        <CtaBanner />
      </div>
    </div>
  );
}
