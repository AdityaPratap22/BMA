import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_DATA } from '@/lib/data/blogData';
import { ArrowRight, Clock } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Digital Marketing & AI Growth Blog | ApexGrowth',
  description: 'Expert articles on performance marketing, Generative Engine Optimization (GEO/AEO), paid acquisition scaling, and digital business strategy.',
};

export default function BlogIndexPage() {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta-600">
            Growth Insights & Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Marketing, SEO & Generative AI Blog
          </h1>
          <p className="text-stone-600 text-lg">
            Actionable strategies from our growth practitioners. Learn how to optimize for AI answer engines, scale paid media, and engineer high-converting sales funnels.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_DATA.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-brand-card rounded-3xl overflow-hidden border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-cream-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-medium text-stone-500">
                    <span className="text-terracotta-600 font-semibold">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-serif font-bold text-stone-900 group-hover:text-terracotta-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-semibold text-terracotta-600 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
