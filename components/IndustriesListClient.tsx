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
  X,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function IndustriesListClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  return (
    <div className="space-y-12">
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
              aria-label="Clear search"
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
          <Link
            key={industry.id}
            href={`/industries/${industry.id}`}
            className="group bg-white rounded-3xl border border-stone-200 shadow-warm-sm p-7 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl hover:border-terracotta-500 transition-all duration-300 relative overflow-hidden text-left"
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
                <h2 className="text-xl font-serif font-bold text-stone-900 group-hover:text-terracotta-700 transition-colors">
                  {industry.name}
                </h2>
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
          </Link>
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
    </div>
  );
}
