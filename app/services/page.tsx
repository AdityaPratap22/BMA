import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicesListClient } from '@/components/ServicesListClient';
import { CtaBanner } from '@/components/CtaBanner';
import { ServiceFaqAccordion } from '@/components/ServiceFaqAccordion';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing & Growth Services | BMA — Best Marketing Agency',
  description: 'Explore high-ROI performance marketing, Google & Meta ads, SEO, social media management, website development, and CRM automation with transparent pricing.',
  alternates: {
    canonical: 'https://bestmarketingagency.online/services',
  },
  openGraph: {
    title: 'Digital Marketing & Growth Services | BMA — Best Marketing Agency',
    description: 'Explore high-ROI performance marketing, Google & Meta ads, SEO, social media management, website development, and CRM automation with transparent pricing.',
    url: 'https://bestmarketingagency.online/services',
    siteName: 'BMA — Best Marketing Agency',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Transparent Capabilities &amp; Pricing
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Our Services &amp; Fixed-Price Solutions
          </h1>

          <p className="text-stone-600 text-lg leading-relaxed">
            Zero lock-in contracts. Clear scope deliverables. Click any capability for comprehensive breakdowns, strategy approaches, and turnaround timelines.
          </p>
        </div>

        {/* ── TRUST BADGES BAR ────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { label: '⚡ 2-Hour Response Time', color: 'bg-cream-100 text-stone-800' },
            { label: '🔓 Zero Lock-In Retainers', color: 'bg-cream-100 text-stone-800' },
            { label: '💳 Post-Pay Flexibility', color: 'bg-cream-100 text-stone-800' },
            { label: '🏆 4.9★ Client Rating', color: 'bg-cream-100 text-stone-800' },
            { label: '✦ 89+ Industry Frameworks', color: 'bg-cream-100 text-stone-800' },
          ].map((badge, idx) => (
            <span
              key={idx}
              className="bg-white border border-stone-200/90 rounded-full px-4 py-2 text-xs font-bold text-stone-800 shadow-warm-sm flex items-center gap-1.5"
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* ── INTERACTIVE SERVICES CLIENT ─────────────────────────── */}
        <ServicesListClient />

        {/* ── BOTTOM CUSTOM NOTE ──────────────────────────────────── */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center space-y-3 max-w-2xl mx-auto shadow-warm-sm">
          <Sparkles className="w-6 h-6 text-terracotta-600 mx-auto" />
          <h3 className="font-serif font-bold text-lg text-stone-900">Need a Multi-Channel Custom Package?</h3>
          <p className="text-xs text-stone-500 leading-relaxed max-w-lg mx-auto">
            Combine social media, performance ads, web development, and SEO into a unified monthly growth architecture tailored to your unit economics.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-terracotta-600 text-white px-8 py-3 rounded-2xl font-bold text-xs hover:bg-terracotta-700 transition-colors shadow-warm-sm"
            >
              Get Bespoke Proposal →
            </Link>
          </div>
        </div>

        {/* ── SERVICES FAQS ────────────────────────────────────────── */}
        <ServiceFaqAccordion
          serviceTitle="Digital Marketing & Growth"
          faqs={[
            {
              q: "How does your pricing and billing model work?",
              a: "We believe in 100% pricing transparency. We offer fixed-price projects (like Website Development & Dashboards), pay-per-creative pricing for Graphic Design (from ₹200), and monthly growth packages with zero lock-in contracts."
            },
            {
              q: "Can I combine multiple services into a single monthly package?",
              a: "Yes! Many clients combine Social Media Marketing, Meta/Google Ads, and Graphic Design into an integrated growth retainer. We provide bundled discounts for multi-service retainers."
            },
            {
              q: "How fast can we launch our campaigns?",
              a: "Fast onboarding is our priority. Most performance ad campaigns, social media calendars, and creative projects kick off within 48 to 72 hours of your initial WhatsApp consultation."
            },
            {
              q: "Do I have direct access to the team working on my account?",
              a: "Yes, you get a dedicated WhatsApp group with your account strategist, designer, and media buyer for daily communication and instant updates."
            }
          ]}
        />

        <CtaBanner />
      </div>
    </div>
  );
}
