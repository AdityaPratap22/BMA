'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_DATA } from '@/lib/data/blogData';
import { ArrowRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A481B]">
              FROM OUR BLOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Insights, tips & trends
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B4513] hover:text-[#72360C] transition-colors group"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_DATA.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-[#F7F3ED] rounded-2xl overflow-hidden border border-[#E7E0D6] shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#EBE4D8]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-stone-500">
                    {post.date}
                  </div>

                  <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#8B4513] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-stone-200/80 flex items-center gap-1.5 text-xs font-semibold text-[#8B4513] group-hover:translate-x-1 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
