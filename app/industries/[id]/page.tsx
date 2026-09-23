import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  all89IndustriesList,
  IndustryItem
} from '@/lib/data/industriesData';
import {
  TrendingUp,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Target,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return all89IndustriesList.map((ind) => ({
    id: ind.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const industry = all89IndustriesList.find((ind) => ind.id === params.id);

  if (!industry) {
    return {
      title: 'Industry Blueprint Not Found | BMA — Best Marketing Agency',
    };
  }

  const title = `${industry.name} Digital Marketing Strategy & Blueprint | BMA — Best Marketing Agency`;
  const description = `${industry.name} customer acquisition & performance marketing blueprint. India market: ${industry.indiaMarket}, CAGR: ${industry.cagr}. Proven playbooks to scale ${industry.name} brands.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://bestmarketingagency.online/industries/${industry.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://bestmarketingagency.online/industries/${industry.id}`,
      siteName: 'BMA — Best Marketing Agency',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function IndustryDetailPage({ params }: PageProps) {
  const industry = all89IndustriesList.find((ind) => ind.id === params.id);

  if (!industry) {
    notFound();
  }

  // Find related industries in the same category or adjacent
  const relatedIndustries = all89IndustriesList
    .filter((ind) => ind.id !== industry.id && ind.category === industry.category)
    .slice(0, 3);

  // If fewer than 3 in same category, grab from all
  if (relatedIndustries.length < 3) {
    const additional = all89IndustriesList
      .filter((ind) => ind.id !== industry.id && !relatedIndustries.some((r) => r.id === ind.id))
      .slice(0, 3 - relatedIndustries.length);
    relatedIndustries.push(...additional);
  }

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <article className="min-h-screen bg-brand-bg py-12 sm:py-16">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-stone-500">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/industries" className="hover:text-stone-900 transition-colors">
            Industries
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-semibold text-terracotta-700 truncate max-w-[200px] sm:max-w-none">
            {industry.name}
          </span>
        </nav>

        {/* Hero Section */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold px-3 py-1 bg-terracotta-100 text-terracotta-800 rounded-full">
              {industry.category}
            </span>
            <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Performance Architecture
            </span>
            <span className="text-xs font-semibold text-stone-500">
              Updated for 2025–2026
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="text-4xl sm:text-5xl p-3 sm:p-4 rounded-3xl bg-cream-100 border border-cream-200 shrink-0">
                  {industry.icon}
                </span>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                    {industry.name} Growth Blueprint
                  </h1>
                  <p className="text-stone-600 text-base sm:text-lg mt-1 font-medium">
                    {industry.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-row sm:flex-col gap-3 shrink-0">
              <a
                href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20scaling%20our%20${encodeURIComponent(industry.name)}%20business`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-warm-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-warm-sm transition-all"
              >
                <span>Book Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Highlight Metric Callout Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-warm-sm flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-xl bg-terracotta-50 text-terracotta-600 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-sm text-stone-800 font-medium">
              <strong className="text-stone-900 font-bold">Key Sector Finding: </strong>
              {industry.highlightMetric}
            </div>
          </div>
        </header>

        {/* Market Economics Stats Grid */}
        <section aria-labelledby="market-stats" className="space-y-4">
          <h2 id="market-stats" className="text-xs font-bold uppercase tracking-widest text-stone-400">
            Market Intelligence & Benchmark Data
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-warm-sm text-center">
              <div className="text-xs text-stone-500 font-medium">India Market Size</div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                {industry.indiaMarket}
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-warm-sm text-center">
              <div className="text-xs text-stone-500 font-medium">Projected Annual CAGR</div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-600 mt-1">
                {industry.cagr}
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-warm-sm text-center">
              <div className="text-xs text-stone-500 font-medium">Global Market Valuation</div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                {industry.globalMarket}
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-warm-sm text-center">
              <div className="text-xs text-stone-500 font-medium">Dominant Strategy</div>
              <div className="text-base sm:text-lg font-serif font-bold text-terracotta-700 mt-1">
                Full-Funnel Growth
              </div>
            </div>
          </div>
        </section>

        {/* Sector KPIs / Benchmark Metrics Grid */}
        {industry.metrics && industry.metrics.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-warm-sm space-y-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-terracotta-600" />
              <h2 className="text-xl font-serif font-bold text-stone-900">
                {industry.name} Operational & Acquisition Benchmarks
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {industry.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-center">
                  <div className="text-lg sm:text-xl font-serif font-bold text-stone-900">{m.value}</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Industry Overview & Dynamics */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Narrative */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-warm-sm space-y-4">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Market Dynamics & Landscape Overview
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                {industry.overview}
              </p>
              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-terracotta-700">
                <Target className="w-4 h-4" />
                <span>Engineered for both high-growth startups and established industry leaders.</span>
              </div>
            </div>

            {/* Growth Bottlenecks & Solutions */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-warm-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Critical Growth Bottlenecks Solved
                </h2>
              </div>
              <div className="space-y-4">
                {industry.challenges.map((ch, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-sm font-bold text-stone-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      {ch.title}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-4">
                      {ch.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Insights */}
          <div className="space-y-6">
            {/* Key Market Realities */}
            {industry.didYouKnow && industry.didYouKnow.length > 0 && (
              <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-warm-sm space-y-4">
                <h3 className="text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-terracotta-600" />
                  Key Market Insights
                </h3>
                <div className="space-y-3">
                  {industry.didYouKnow.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Founder Advisory Box */}
            <div className="bg-stone-900 text-white p-6 rounded-3xl space-y-4">
              <h3 className="text-lg font-serif font-bold">Why BMA for {industry.name}?</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                We combine industry-specialized creative frameworks, programmatic search visibility, and algorithmic paid acquisition to generate predictable revenue rather than vanity metrics.
              </p>
              <div className="pt-2">
                <a
                  href="https://bestmarketingagency.online/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Growth Architecture / Services */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                Strategic Growth Stack
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Recommended Marketing Architecture for {industry.name}
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl">
              Our end-to-end execution system aligns brand positioning, search intent capture, and paid media acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200 shadow-warm-sm space-y-3 flex flex-col justify-between hover:border-terracotta-500 transition-colors"
              >
                <div className="space-y-2">
                  <div className="text-xs font-bold text-terracotta-700 tracking-wide uppercase">
                    Stage {idx + 1}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    {srv.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100">
                  <Link
                    href="/services"
                    className="text-xs font-bold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1.5"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry FAQs (Accessible, Accordion Style with native HTML details) */}
        {industry.faqs && industry.faqs.length > 0 && (
          <section className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-warm-sm space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-terracotta-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                  Sector Questions Answered
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Frequently Asked Questions about {industry.name} Growth
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {industry.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-stone-50 rounded-2xl border border-stone-200 p-5 transition-all duration-200 open:bg-cream-50 open:border-terracotta-300"
                >
                  <summary className="font-serif font-bold text-stone-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between select-none">
                    <span>{faq.question}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Industry Playbooks */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Explore Related Industry Playbooks
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                More dedicated digital growth architectures in {industry.category} and related sectors.
              </p>
            </div>
            <Link
              href="/industries"
              className="text-xs font-bold text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1 shrink-0"
            >
              <span>View All 89</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedIndustries.map((rel) => (
              <Link
                key={rel.id}
                href={`/industries/${rel.id}`}
                className="group bg-white p-6 rounded-3xl border border-stone-200 shadow-warm-sm hover:-translate-y-1 hover:shadow-md hover:border-terracotta-500 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl p-2 rounded-xl bg-cream-100 border border-cream-200">
                      {rel.icon}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 bg-stone-100 text-stone-700 rounded-full">
                      {rel.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-terracotta-700 transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 mt-1">
                      {rel.subtitle}
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-terracotta-600">
                  <span>Open Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Back Link & CTA Banner */}
        <div className="pt-4 flex items-center justify-between border-t border-stone-200">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 89 Industries</span>
          </Link>
          <a
            href="https://bestmarketingagency.online"
            className="text-xs font-semibold text-terracotta-600 hover:underline"
          >
            bestmarketingagency.online
          </a>
        </div>

        <CtaBanner />
      </div>
    </article>
  );
}
