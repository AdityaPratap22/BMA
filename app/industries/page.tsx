'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  all89IndustriesList,
  industryCategories,
  IndustryItem
} from '@/lib/data/industriesData';
import {
  Search,
  Building2,
  TrendingUp,
  X,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export default function IndustriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalIndustry, setActiveModalIndustry] = useState<IndustryItem | null>(null);

  // Filtered industries
  const filteredIndustries = useMemo(() => {
    return all89IndustriesList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (activeModalIndustry) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalIndustry]);

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

        {/* Search & Category Filter Controls */}
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search across 89+ industries (e.g. Hospitals, Real Estate, EdTech)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white border border-stone-200 shadow-warm-sm text-sm text-stone-900 focus:outline-none focus:border-terracotta-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
            {industryCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-terracotta-600 text-white shadow-warm-sm scale-105'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Count Badge */}
          <div className="text-center text-xs text-stone-500 font-medium">
            Showing <span className="font-bold text-stone-900">{filteredIndustries.length}</span> of {all89IndustriesList.length} industry playbooks
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((industry) => (
            <div
              key={industry.id}
              onClick={() => setActiveModalIndustry(industry)}
              className="group bg-white rounded-3xl border border-stone-200 shadow-warm-sm p-7 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 hover:shadow-xl hover:border-terracotta-500 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta-600 via-amber-500 to-terracotta-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl p-2.5 rounded-2xl bg-cream-100 border border-cream-200">
                    {industry.icon}
                  </span>
                  <span className="text-[11px] font-bold px-3 py-1 bg-cream-200 text-terracotta-800 rounded-full">
                    {industry.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-terracotta-700 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-1 mt-1">
                    {industry.subtitle}
                  </p>
                </div>

                {/* Highlight Metric Callout */}
                <div className="bg-brand-card p-3 rounded-2xl border border-brand-border text-xs text-stone-700 font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-terracotta-600 shrink-0" />
                  <span className="line-clamp-2">{industry.highlightMetric}</span>
                </div>

                {/* Market Snapshot Stats */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">India Market</span>
                    <span className="font-bold text-stone-800">{industry.indiaMarket}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Projected CAGR</span>
                    <span className="font-bold text-emerald-600">{industry.cagr}</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-4 flex items-center justify-between text-xs font-bold text-terracotta-600 group-hover:translate-x-1 transition-transform">
                <span>View Full Growth Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredIndustries.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-4 max-w-md mx-auto">
            <Building2 className="w-12 h-12 text-stone-300 mx-auto" />
            <h3 className="text-lg font-serif font-bold text-stone-900">No industries match your search</h3>
            <p className="text-xs text-stone-500">
              Try searching for a different keyword or browse all 89 industries by clearing the search filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-terracotta-600 text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-terracotta-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        <CtaBanner />
      </div>

      {/* ── DETAILED INDUSTRY MODAL ─────────────────────────────────────── */}
      {activeModalIndustry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalIndustry(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 flex flex-col max-h-[85vh] overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Fixed Header */}
            <div className="p-6 sm:p-8 pb-4 border-b border-stone-100 flex items-start justify-between gap-4 shrink-0 bg-white">
              <div className="flex items-center gap-3.5">
                <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-cream-100 border border-cream-200 shrink-0">
                  {activeModalIndustry.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 bg-terracotta-100 text-terracotta-700 rounded-full">
                      {activeModalIndustry.category}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                      Verified Blueprint
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                    {activeModalIndustry.name} Growth Blueprint
                  </h2>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveModalIndustry(null)}
                className="p-2 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body with Clean Thin Scrollbar */}
            <div className="p-6 sm:p-8 space-y-7 overflow-y-auto modal-scroll flex-1">
              {/* Overview */}
              <p className="text-sm text-stone-600 leading-relaxed">
                {activeModalIndustry.overview}
              </p>

              {/* Key Market Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-brand-card p-4 rounded-2xl border border-brand-border text-center">
                  <div className="text-[11px] text-stone-500 font-medium">India Market Size</div>
                  <div className="text-base sm:text-lg font-serif font-bold text-stone-900 mt-1">{activeModalIndustry.indiaMarket}</div>
                </div>
                <div className="bg-brand-card p-4 rounded-2xl border border-brand-border text-center">
                  <div className="text-[11px] text-stone-500 font-medium">Annual Growth Rate</div>
                  <div className="text-base sm:text-lg font-serif font-bold text-emerald-600 mt-1">{activeModalIndustry.cagr}</div>
                </div>
                <div className="bg-brand-card p-4 rounded-2xl border border-brand-border text-center col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-stone-500 font-medium">Global Market Size</div>
                  <div className="text-base sm:text-lg font-serif font-bold text-stone-900 mt-1">{activeModalIndustry.globalMarket}</div>
                </div>
              </div>

              {/* Did You Know & Market Insights */}
              {activeModalIndustry.didYouKnow && activeModalIndustry.didYouKnow.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-terracotta-600" />
                    Key Market Dynamics
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalIndustry.didYouKnow.map((insight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 bg-cream-100 rounded-2xl border border-cream-200 text-xs text-stone-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                        <span>{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Growth Challenges & Tailored Solutions */}
              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Industry Bottlenecks Solved
                </h3>
                <div className="space-y-2">
                  {activeModalIndustry.challenges.map((ch, idx) => (
                    <div key={idx} className="p-3.5 bg-white rounded-2xl border border-stone-200 shadow-warm-sm space-y-1">
                      <div className="text-xs font-bold text-stone-900">{ch.title}</div>
                      <div className="text-xs text-stone-600 leading-relaxed">{ch.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Growth Playbook Services */}
              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-terracotta-600" />
                  Recommended Growth Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {activeModalIndustry.services.map((srv, idx) => (
                    <div key={idx} className="p-3.5 bg-cream-100 rounded-2xl border border-cream-200 space-y-1">
                      <div className="text-xs font-bold text-terracotta-800">{srv.name}</div>
                      <div className="text-[11px] text-stone-600 leading-relaxed">{srv.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry FAQs */}
              {activeModalIndustry.faqs && activeModalIndustry.faqs.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-stone-600" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-2">
                    {activeModalIndustry.faqs.map((faq, idx) => (
                      <div key={idx} className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                        <div className="text-xs font-bold text-stone-900">{faq.question}</div>
                        <div className="text-xs text-stone-600 leading-relaxed">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Bottom Actions Footer */}
            <div className="bg-stone-900 p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-center sm:text-left">
                <div className="font-serif font-bold text-sm">Scale Your {activeModalIndustry.name} Brand</div>
                <div className="text-[11px] text-stone-400">Founder-led execution. Zero lock-in contracts.</div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20marketing%20strategy%20for%20${encodeURIComponent(activeModalIndustry.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-emerald-600 text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-terracotta-600 text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-terracotta-700 transition-colors"
                >
                  Book Call →
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
