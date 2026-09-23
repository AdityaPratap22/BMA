import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CtaBanner } from '@/components/CtaBanner';
import { LocationFaqAccordion } from '@/components/LocationFaqAccordion';

// Helper to get formatted location name
function formatCity(param: string): string {
  const specialMap: Record<string, string> = {
    usa: 'USA',
    uk: 'UK',
    uae: 'UAE',
    noida: 'Noida',
    gurgaon: 'Gurgaon',
    'delhi-ncr': 'Delhi NCR',
    delhi: 'Delhi NCR',
    mumbai: 'Mumbai',
    bangalore: 'Bangalore',
    hyderabad: 'Hyderabad',
    chennai: 'Chennai',
    kolkata: 'Kolkata',
    pune: 'Pune',
    dubai: 'Dubai',
    canada: 'Canada',
    australia: 'Australia',
    singapore: 'Singapore',
    malaysia: 'Malaysia',
  };

  const lower = param.toLowerCase();
  if (specialMap[lower]) return specialMap[lower];

  return param
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityName = formatCity(params.city);
  return {
    title: `Digital Marketing Agency in ${cityName} — BMA | Best Marketing Agency`,
    description: `Leading digital marketing agency in ${cityName}. We offer SEO, Google Ads, Meta Ads, social media marketing, and custom web development with proven ROI.`,
    alternates: {
      canonical: `https://bestmarketingagency.online/location/${params.city}`,
    },
    openGraph: {
      title: `Digital Marketing Agency in ${cityName} — BMA | Best Marketing Agency`,
      description: `Leading digital marketing agency in ${cityName}. We offer SEO, Google Ads, Meta Ads, social media marketing, and custom web development with proven ROI.`,
      url: `https://bestmarketingagency.online/location/${params.city}`,
      siteName: 'BMA — Best Marketing Agency',
      type: 'website',
    },
  };
}

export default function DynamicLocationPage({ params }: { params: { city: string } }) {
  const cityName = formatCity(params.city);
  const isInternational = ['USA', 'Australia', 'UK', 'Canada', 'Dubai', 'Singapore', 'Malaysia', 'Abu Dhabi', 'Qatar', 'Saudi Arabia'].includes(cityName);
  const regionTag = isInternational ? 'INTERNATIONAL · DIGITAL MARKETING' : 'INDIA · REGIONAL GROWTH HUB';

  const faqs = [
    {
      q: `Do you offer digital marketing services in ${cityName}?`,
      a: `Yes! BMA provides full-spectrum performance marketing, SEO & Generative Engine Optimization (GEO), Meta ads, Google ads, social media management, and custom web design directly for businesses operating in ${cityName}.`,
    },
    {
      q: `How much does digital marketing cost in ${cityName}?`,
      a: `Our services start from ₹150 for individual graphic designs up to transparent monthly performance retainers tailored to your specific budget and revenue goals in ${cityName}. Zero lock-in contracts.`,
    },
    {
      q: `Which industries do you work with in ${cityName}?`,
      a: `We support 89+ sectors in ${cityName} including e-commerce, real estate, healthcare, education, local clinics, B2B SaaS, and hospitality.`,
    },
    {
      q: `How soon can we launch campaigns in ${cityName}?`,
      a: `We can launch your ${cityName} ad campaigns and tracking infrastructure within 24–48 hours following our initial onboarding strategy session.`,
    },
  ];

  const servicesList = [
    {
      emoji: '🔍',
      title: 'Search Engine Optimisation (SEO / GEO)',
      desc: `Rank your ${cityName} business at the top of Google and capture high-intent local and AI answer engine searches.`,
    },
    {
      emoji: '🎯',
      title: 'Google Ads (PPC & PMax)',
      desc: `High-intent Search, Display & YouTube campaigns engineered for maximum ROAS in the ${cityName} market.`,
    },
    {
      emoji: '📱',
      title: 'Meta Ads (Facebook & Instagram)',
      desc: `Targeted social campaigns that turn ${cityName} scrollers into qualified, paying customers.`,
    },
    {
      emoji: '📣',
      title: 'Social Media Marketing & UGC',
      desc: `Content calendars, viral video reels, and community management that build true brand authority in ${cityName}.`,
    },
    {
      emoji: '💻',
      title: 'Website Design & Next.js Development',
      desc: `Lightning-fast, SEO-ready, mobile-first websites built to convert ${cityName} visitors into booked calls.`,
    },
    {
      emoji: '🎨',
      title: 'Graphic Design & Branding',
      desc: `Posters, logos, presentation pitch decks, and brand identity systems — from ₹150 per design.`,
    },
  ];

  const whyChooseCards = [
    {
      title: 'Local Insight, National Strength',
      desc: `We tailor every campaign to ${cityName}'s local search behavior, competition density, and customer purchasing intent.`,
    },
    {
      title: 'Transparent Pricing',
      desc: 'Clear, scope-based pricing with zero hidden fees — from single design deliverables at ₹150 to full multi-channel retainers.',
    },
    {
      title: 'Founder-Led Delivery',
      desc: 'A hands-on, founder-led team where senior strategists directly drive your campaigns. No junior account handoffs.',
    },
    {
      title: 'Measurable ROI & Live Dashboards',
      desc: 'Data-driven execution with live real-time KPI dashboards — every single rupee or dollar mapped to tangible pipeline revenue.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ── 1. BREADCRUMB ────────────────────────────────────────── */}
        <div className="text-sm text-stone-500">
          <Link href="/" className="font-semibold text-stone-900 hover:text-terracotta-600">Home</Link>
          {' / '}
          <Link href="/locations" className="font-semibold text-stone-900 hover:text-terracotta-600">Locations</Link>
          {' / '}
          <span className="text-terracotta-600 font-bold">Digital Marketing in {cityName}</span>
        </div>

        {/* ── 2. TOP SUMMARY NOTIFICATION BOX ──────────────────────── */}
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-warm-sm space-y-2">
          <h2 className="text-lg font-serif font-bold text-stone-900">
            Digital Marketing Services in {cityName} | BMA
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Looking for a results-driven digital marketing agency in {cityName}? BMA offers SEO, social media, Google &amp; Meta ads, Next.js web applications, and graphic design for businesses operating in {cityName}. Get a custom proposal on WhatsApp.
          </p>
        </div>

        {/* ── 3. MAIN HERO BANNER ───────────────────────────────────── */}
        <div className="relative bg-white border border-stone-200 rounded-4xl p-8 sm:p-14 shadow-warm-md space-y-6 overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta-600 via-amber-500 to-terracotta-400" />

          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              {regionTag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight">
            Digital Marketing Services in {cityName}
          </h1>

          <p className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-4xl">
            BMA is a founder-led digital marketing agency helping businesses in {cityName} scale online with SEO, Google &amp; Meta ads, viral social media, custom Next.js websites, and brand design. We combine local market intelligence with proven data-driven execution — so your brand in {cityName} gets found, gets leads, and dominates its category.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20digital%20marketing%20services%20in%20${encodeURIComponent(cityName)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-terracotta-700 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-warm-sm"
            >
              <span>Get a Free {cityName} Quote →</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 border border-stone-300 hover:border-terracotta-600 hover:text-terracotta-600 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-colors"
            >
              <span>Book Strategy Session</span>
            </Link>
          </div>
        </div>

        {/* ── 4. "WHAT WE OFFER" SECTION ───────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                WHAT WE OFFER
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Our Digital Marketing Services in {cityName}
            </h2>
            <p className="text-stone-500 text-base">
              Full-service growth architecture for {cityName} brands — every channel, one accountable team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-7 border border-stone-200 shadow-warm-sm space-y-3 overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              >
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta-600 to-amber-500" />
                <div className="text-3xl mb-1">{service.emoji}</div>
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  {service.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. "WHY BUSINESSES CHOOSE US" SECTION ────────────────── */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                WHY BMA
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Why {cityName} Businesses Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-cream-100 rounded-3xl p-7 border border-cream-200 space-y-2.5 hover:shadow-warm-sm transition-shadow"
              >
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  {card.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. LOCATION FAQS SECTION ─────────────────────────────── */}
        <div className="space-y-10 max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
              QUESTIONS &amp; CLARITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Digital Marketing in {cityName} — FAQs
            </h2>
          </div>

          <LocationFaqAccordion faqs={faqs} />
        </div>

        {/* ── 7. BOTTOM BLACK CTA BOX ──────────────────────────────── */}
        <div className="bg-stone-900 rounded-4xl p-10 sm:p-14 text-center text-white space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Grow your business in {cityName}
          </h2>
          <p className="text-stone-400 text-base max-w-lg mx-auto">
            Free audit and growth strategy session — our senior strategists respond within 2 hours.
          </p>

          <a
            href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20digital%20marketing%20for%20${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white px-10 py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-warm-sm"
          >
            <span>Start on WhatsApp →</span>
          </a>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
