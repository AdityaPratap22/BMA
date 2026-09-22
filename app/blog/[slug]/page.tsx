import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_DATA } from '@/lib/data/blogData';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export async function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_DATA.find((b) => b.slug === params.slug);
  if (!post) return { title: 'Article Not Found | ApexGrowth' };
  return {
    title: `${post.title} | ApexGrowth Insights`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: { params: { slug: string } }) {
  const post = BLOG_DATA.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 sm:py-24 bg-brand-bg space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-terracotta-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog Index</span>
        </Link>

        {/* Post Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-medium text-stone-500">
            <span className="px-3 py-1 bg-terracotta-100 text-terracotta-700 rounded-full font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-stone-600 leading-relaxed italic">
            {post.excerpt}
          </p>

          {/* Author info */}
          <div className="flex items-center gap-3 pt-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-stone-300">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900">{post.author.name}</div>
              <div className="text-[11px] text-stone-500">{post.author.role}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-warm-md border border-stone-200">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        {/* Content Body */}
        <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed">
          <p className="text-lg">{post.content}</p>
          
          <h2 className="font-serif font-bold text-2xl text-stone-900 pt-4">Understanding the Shift</h2>
          <p>
            Traditional search traffic is being augmented by AI answer engines like ChatGPT, Perplexity, and Google Gemini. Brands that do not optimize their semantic entity authority risk losing visibility in the modern recommendation economy.
          </p>

          <h2 className="font-serif font-bold text-2xl text-stone-900 pt-4">Actionable Implementation Checklist</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Structure core content using Schema.org JSON-LD structured data.</li>
            <li>Maintain clear entity relationships across Wikipedia, Crunchbase, and top industry press.</li>
            <li>Combine first-party conversion data with server-side attribution tracking.</li>
            <li>Refresh short-form video creatives on a bi-weekly cadence to maintain high ROAS.</li>
          </ul>
        </div>

        <CtaBanner />
      </div>
    </article>
  );
}
