import React from 'react';
import { BLOG_DATA, BLOG_CATEGORIES } from '@/lib/data/blogData';
import { CtaBanner } from '@/components/CtaBanner';
import BlogListingClient from '@/components/BlogListingClient';

export const metadata = {
  title: 'Digital Marketing, SEO & Growth Playbooks | BMA — Best Marketing Agency',
  description: 'Explore 550+ comprehensive growth playbooks, performance marketing blueprints, search engine optimization strategies, and acquisition frameworks from BMA (Best Marketing Agency).',
};

export default function BlogIndexPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#FDFBF7] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9A481B]">
            BMA Growth Intelligence & Playbooks
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Marketing, SEO & Growth Playbooks
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            Explore 550+ actionable playbooks and acquisition frameworks across 89 industries. Learn how to rank on AI search engines, build scalable B2B funnels, and maximize ROAS.
          </p>
        </div>

        {/* Interactive Listing (Search, Category Filter, Pagination) */}
        <BlogListingClient blogs={BLOG_DATA} categories={BLOG_CATEGORIES} />

        <CtaBanner />
      </div>
    </div>
  );
}
