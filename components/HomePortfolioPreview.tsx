'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { socialMediaProjects, SocialMediaProject } from '@/lib/data/portfolioData';

export const HomePortfolioPreview: React.FC = () => {
  const featured = socialMediaProjects.slice(0, 4);
  const [selectedProject, setSelectedProject] = useState<SocialMediaProject | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E7E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-terracotta-600 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>THE WORK &bull; CAMPAIGN SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Selected Client Work &amp; Creative Assets
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              High-converting social campaigns, scroll-stopping video hooks, and measurable performance results.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-terracotta-600 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 self-start md:self-auto shadow-warm-sm hover:scale-105"
          >
            <span>View All 35+ Projects in Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="bg-[#FAF6F0] rounded-3xl p-4 border border-[#E7E0D6] shadow-warm-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-3">
                <div className="text-center pt-2 px-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta-700 bg-white px-2.5 py-0.5 rounded-full border border-stone-200">
                    {p.niche}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-terracotta-700 transition-colors mt-2 mb-0.5">
                    {p.name}
                  </h3>
                </div>

                {/* Mockup Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-white p-1.5 aspect-[9/14] w-full border border-[#E7E0D6] group-hover:border-terracotta-400 transition-all shadow-inner">
                  <img
                    src={p.cardImage}
                    alt={p.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500 shadow-sm"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="pt-3 text-center">
                <span className="text-[11px] font-bold text-terracotta-700 group-hover:underline inline-flex items-center gap-1">
                  <span>View Case Preview</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-[90vw] sm:max-w-[460px] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 sm:-right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-stone-900 flex items-center justify-center font-bold transition-all shadow-lg"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black max-h-[85vh] flex items-center justify-center">
              <img
                src={selectedProject.cardImage}
                alt={selectedProject.name}
                className="w-full h-auto max-h-[85vh] object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
