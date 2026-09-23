import type { Metadata } from 'next';
import { PortfolioClient } from '@/components/PortfolioClient';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Client Portfolio & Performance Marketing Case Studies | BMA — Best Marketing Agency',
  description: 'Explore verified client campaigns, social media creatives, high-converting ad designs, and proven ROAS results delivered by Best Marketing Agency.',
  alternates: {
    canonical: 'https://bestmarketingagency.online/portfolio',
  },
  openGraph: {
    title: 'Client Portfolio & Performance Marketing Case Studies | BMA — Best Marketing Agency',
    description: 'Explore verified client campaigns, social media creatives, high-converting ad designs, and proven ROAS results delivered by Best Marketing Agency.',
    url: 'https://bestmarketingagency.online/portfolio',
    siteName: 'BMA — Best Marketing Agency',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <div className="py-14 sm:py-20 bg-brand-bg min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              PROVEN RESULTS &bull; CAMPAIGN SHOWCASE
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Our Work &amp; Portfolio
          </h1>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Real social media campaigns, scroll-stopping visual hooks, and verified ROAS built for ambitious brands across India and global markets.
          </p>
        </div>

        {/* ── INTERACTIVE PORTFOLIO SHOWCASE ──────────────────────── */}
        <PortfolioClient />

        <CtaBanner />
      </div>
    </div>
  );
}
