'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Sparkles,
  TrendingUp,
  Share2,
  X,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { socialMediaProjects, SocialMediaProject } from '@/lib/data/portfolioData';
import { CtaBanner } from '@/components/CtaBanner';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSocialProject, setSelectedSocialProject] = useState<SocialMediaProject | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    socialMediaProjects.forEach((p) => {
      const parts = p.niche.split('&').map((s) => s.trim());
      parts.forEach((part) => set.add(part));
    });
    return Array.from(set).slice(0, 10);
  }, []);

  // Filtered list
  const filteredSocialProjects = useMemo(() => {
    return socialMediaProjects.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.niche.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || p.niche.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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

        {/* ── SEARCH & FILTER CONTROLS ────────────────────────────── */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs w-full sm:w-auto">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-2xl font-bold whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-stone-900 text-white shadow-warm-sm'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                All Campaigns ({socialMediaProjects.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-2xl font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-terracotta-600 text-white shadow-warm-sm'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full sm:w-80 shrink-0">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by brand, niche or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-2xl border border-stone-200 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 shadow-warm-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ── SOCIAL MEDIA CAMPAIGNS GRID ─────────────────────────── */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-terracotta-600" />
              <h2 className="font-serif font-bold text-2xl text-stone-900">
                Campaign Showcase &amp; Deliverables
              </h2>
            </div>
            <span className="text-xs font-bold text-stone-500">
              {filteredSocialProjects.length} Verified Showcases
            </span>
          </div>

          {filteredSocialProjects.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-3">
              <div className="text-4xl">🔍</div>
              <div className="font-serif font-bold text-xl text-stone-900">No campaigns found</div>
              <p className="text-xs text-stone-500">Try adjusting your search keywords or filter category.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredSocialProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedSocialProject(project)}
                  className="bg-white rounded-3xl p-4 border border-stone-200 shadow-warm-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden"
                >
                  <div className="space-y-3">
                    {/* Top Brand & Niche */}
                    <div className="text-center pt-2 px-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-2.5 py-0.5 rounded-full border border-terracotta-200">
                        {project.niche}
                      </span>
                      <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-terracotta-700 transition-colors mt-2 mb-0.5">
                        {project.name}
                      </h3>
                    </div>

                    {/* Mockup Card Frame with Warm Studio Backdrop */}
                    <div className="relative rounded-2xl overflow-hidden bg-[#FAF6F0] p-1.5 aspect-[9/14] w-full border border-[#E7E0D6] group-hover:border-terracotta-400 group-hover:bg-[#FFFDF9] transition-all duration-300 flex items-center justify-center shadow-inner">
                      <img
                        src={project.cardImage}
                        alt={project.name}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500 shadow-sm"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── IMAGE LIGHTBOX MODAL ─────────────────────────────────── */}
        {selectedSocialProject && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedSocialProject(null)}
          >
            <div
              className="relative max-h-[92vh] max-w-[90vw] sm:max-w-[460px] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedSocialProject(null)}
                className="absolute -top-12 right-0 sm:-right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-stone-900 flex items-center justify-center font-bold transition-all shadow-lg"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Pure High-Resolution Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black max-h-[85vh] flex items-center justify-center">
                <img
                  src={selectedSocialProject.cardImage}
                  alt={selectedSocialProject.name}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
        )}

        <CtaBanner />
      </div>
    </div>
  );
}
