import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BLOG_DATA } from '@/lib/data/blogData';
import BlogPostInteractive from '@/components/BlogPostInteractive';
import {
  ArrowLeft,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Tag,
  CheckCircle2,
  BookOpen,
  TrendingUp,
  MessageCircle,
  Zap,
  BarChart3,
  Layers,
  ShieldCheck,
  Award,
  Check,
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

interface BlogPostDetailPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  // Pre-render top 100 slugs for fast builds, allow dynamicParams for all others
  return BLOG_DATA.slice(0, 100).map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = true;

function findPost(slug: string) {
  const clean = slug.toLowerCase();
  return BLOG_DATA.find(
    (b) =>
      b.slug.toLowerCase() === clean ||
      b.slug.replace(/^blog_/, '').toLowerCase() === clean ||
      b.slug.replace(/-/g, '_').toLowerCase() === clean ||
      `blog_${b.slug.replace(/-/g, '_')}`.toLowerCase() === clean ||
      b.id.toLowerCase() === clean
  );
}

export async function generateMetadata({ params }: BlogPostDetailPageProps) {
  const post = findPost(params.slug);
  if (!post) {
    return {
      title: 'Article Not Found | BMA — Best Marketing Agency',
      description: 'The requested growth playbook could not be found.',
    };
  }

  const pageTitle = `${post.title} | BMA — Best Marketing Agency`;
  const canonicalUrl = `https://bestmarketingagency.online/blog/${post.slug}`;

  return {
    title: pageTitle,
    description: post.excerpt,
    keywords: [
      post.keyword || '',
      post.category,
      'BMA',
      'Best Marketing Agency',
      'Performance Marketing',
      'SEO Strategy',
      'Digital Growth Playbook',
      ...(post.tags || []),
    ].filter(Boolean),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: 'BMA — Best Marketing Agency',
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostDetailPage({ params }: BlogPostDetailPageProps) {
  const post = findPost(params.slug);

  if (!post) {
    notFound();
  }

  // Attempt to read markdown file from public/blogs/
  let markdownContent = '';
  const possiblePaths = [
    path.join(process.cwd(), 'public/blogs', `${post.slug}.md`),
    path.join(process.cwd(), 'public/blogs', `blog_${post.slug}.md`),
    path.join(process.cwd(), 'public/blogs', `${post.slug.replace(/^blog_/, '')}.md`),
    path.join(process.cwd(), 'public/blogs', `${post.slug.replace(/-/g, '_')}.md`),
    path.join(process.cwd(), 'public/blogs', `blog_${post.slug.replace(/-/g, '_')}.md`),
    path.join(process.cwd(), 'public/blogs', `${params.slug}.md`),
    path.join(process.cwd(), 'public/blogs', `blog_${params.slug}.md`),
    path.join(process.cwd(), 'public/blogs', `${params.slug.replace(/-/g, '_')}.md`),
    path.join(process.cwd(), 'public/blogs', `blog_${params.slug.replace(/-/g, '_')}.md`),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      markdownContent = fs.readFileSync(p, 'utf8');
      break;
    }
  }

  // Fallback if markdown file not found on disk
  if (!markdownContent) {
    markdownContent = post.content || `
# ${post.title}

${post.excerpt}

In 2026, **${post.keyword || post.title}** has become a cornerstone of sustainable business scaling, customer acquisition velocity, and enterprise market authority. As algorithms, AI search engines (GEO, Perplexity, Gemini, ChatGPT), and consumer attention economics evolve, modern growth teams must deploy a structured acquisition framework.

---

## 1. Why ${post.keyword || post.title} Is Essential in 2026

Modern decision-makers evaluate domain credibility, social proof, and algorithmic visibility before entering any sales conversation:

- **High-Intent Search Dominance**: Over 78% of modern B2B and consumer decisions originate through organic search and verified digital authority.
- **Conversion-First Architecture**: Connecting organic storytelling with automated paid acquisition funnels lowers customer acquisition cost (CAC) by 35-50%.
- **Generative Engine Optimization (GEO)**: Structuring company knowledge bases and schema ensures your brand is recommended by AI search engines.

---

## 2. Core Implementation Playbook

### A. High-Converting Landing Infrastructure
Build frictionless digital destinations designed specifically for conversion. Eliminate cognitive resistance with transparent value propositions and clear call-to-actions.

### B. Scalable Traffic Engines
Combine compounding organic search rankings with high-intent paid performance funnels to capture immediate demand.

### C. Automated Nurturing & Lifetime Retention
Implement conversational workflows on WhatsApp and email to convert inquiries into high-value repeat clients.

---

## Ready to Accelerate Your Brand Growth?

At **BMA (Best Marketing Agency)**, we engineer predictable, data-driven acquisition engines tailored to your exact industry. Schedule a strategic consultation with our growth directors today.
    `.trim();
  }

  // Strip duplicate H1 if it matches post.title
  const cleanMarkdown = markdownContent.replace(/^#\s+[^\n]+\n+/, '');

  // Extract Table of Contents items (all H2s)
  const tocMatches = Array.from(cleanMarkdown.matchAll(/^##\s+([^\n]+)/gm));
  const tocItems = tocMatches.map((m) => {
    const rawText = m[1].replace(/[*_#]/g, '').trim();
    const id = rawText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return { id, text: rawText };
  });

  // Extract FAQs from markdown if available
  const parsedFaqMatches = Array.from(
    cleanMarkdown.matchAll(/###\s+([^?\n]+\?)\s*\n+([\s\S]*?)(?=\n###|\n##|\n---|\Z)/g)
  );
  let extractedFaqs = parsedFaqMatches.slice(0, 5).map((m) => ({
    question: m[1].trim(),
    answer: m[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_#]/g, '').trim(),
  }));

  // If no FAQs in markdown, supply high-value default FAQs
  if (extractedFaqs.length === 0) {
    extractedFaqs = [
      {
        question: `How quickly can we expect measurable ROI from implementing this ${post.category} strategy?`,
        answer: `Paid acquisition channels (Google Ads, Meta Funnels) typically begin generating verified leads within 7 to 14 days of launch. Organic search rankings and Generative Engine Optimization (GEO) compound over 60 to 90 days, delivering permanently reduced customer acquisition costs.`,
      },
      {
        question: `Why is Generative Engine Optimization (GEO) critical for ${post.keyword || post.title}?`,
        answer: `Over 58% of commercial buying decisions in 2026 involve AI answer engines (ChatGPT, Google Gemini, Perplexity). GEO ensures your entity data, schema, and industry authority are structured so AI models cite your business as the default recommendation.`,
      },
      {
        question: `How does BMA track attribution and prevent ad spend waste?`,
        answer: `We implement Server-Side Conversions API (CAPI) paired with blended Marketing Efficiency Ratio (MER) monitoring. This bypasses browser cookie decay, providing 100% accurate multi-touch visibility into customer journeys.`,
      },
      {
        question: `What makes BMA's approach different from traditional agencies?`,
        answer: `Unlike agencies focused on vanity metrics (impressions, follower counts), BMA is strictly revenue-focused. We build end-to-end acquisition architectures: sub-2 second Next.js landing pages, high-converting ad creative testing pods, and 60-second speed-to-lead CRM integrations.`,
      },
    ];
  }

  // Related articles in same category
  const relatedArticles = BLOG_DATA.filter(
    (b) => b.slug !== post.slug && (b.category === post.category || b.sector === post.sector)
  ).slice(0, 4);

  // Schema.org JSON-LD (Article + FAQPage)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://bestmarketingagency.online/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: '2026-05-01',
        dateModified: '2026-08-25',
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: 'BMA — Best Marketing Agency',
          url: 'https://bestmarketingagency.online',
          logo: {
            '@type': 'ImageObject',
            url: 'https://bestmarketingagency.online/logo.png',
          },
        },
        mainEntityOfPage: `https://bestmarketingagency.online/blog/${post.slug}`,
      },
      {
        '@type': 'FAQPage',
        '@id': `https://bestmarketingagency.online/blog/${post.slug}#faq`,
        mainEntity: extractedFaqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  };

  const currentUrl = `https://bestmarketingagency.online/blog/${post.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-12 sm:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Top Breadcrumb Nav */}
          <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-200/80">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-[#9A481B] hover:text-[#72360C] transition group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to all 1,100+ playbooks & articles</span>
            </Link>

            <span className="text-xs bg-[#F7EFE6] text-[#9A481B] border border-[#E7D6C6] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Article Hero Banner Header */}
          <div className="bg-[#F7F3ED] border border-[#E7E0D6] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-warm-sm space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-stone-500">
              <span className="bg-[#9A481B] text-white px-3 py-1 rounded-full uppercase tracking-wider text-[11px]">
                {post.sector || post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-stone-600">
                <Calendar className="w-3.5 h-3.5 text-[#9A481B]" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-stone-600">
                <Clock className="w-3.5 h-3.5 text-[#9A481B]" />
                {post.readTime}
              </span>
              {post.wordCount && (
                <>
                  <span>•</span>
                  <span className="text-stone-600">{post.wordCount}</span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-sans border-l-4 border-[#9A481B] pl-4">
              {post.excerpt}
            </p>

            {/* Author info & Verified Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-stone-200/80 gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-stone-300 shadow-sm shrink-0">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">{post.author.name}</div>
                  <div className="text-xs text-stone-500">{post.author.role} • BMA Growth Team</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 bg-white border border-[#E7E0D6] px-4 py-2 rounded-full shadow-sm w-fit">
                <CheckCircle2 className="w-4 h-4 text-[#9A481B]" />
                <span>Verified BMA Strategy (2026 Edition)</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-warm-md border border-[#E7E0D6] bg-stone-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* Executive Key Takeaways Card (TL;DR) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F7F3ED] to-[#EBE4D8] border border-[#E7E0D6] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9A481B]">
              <Sparkles className="w-4 h-4" />
              <span>Executive Briefing &amp; Key Takeaways</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Strategic Summary for High-Growth Leaders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E7E0D6] space-y-1">
                <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#9A481B]" /> 1. Compounding Acquisition
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Bridge organic authority with high-intent performance funnels to permanently lower customer acquisition cost (CAC).
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E7E0D6] space-y-1">
                <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#9A481B]" /> 2. AI Search Dominance (GEO)
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Structure domain knowledge bases and Schema.org markup so ChatGPT, Perplexity, and Gemini cite your brand first.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E7E0D6] space-y-1">
                <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#9A481B]" /> 3. First-Party Tracking (CAPI)
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Deploy server-side conversion tracking and blended MER to eliminate blind spots caused by browser cookie decay.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E7E0D6] space-y-1">
                <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9A481B]" /> 4. Speed-to-Lead Automation
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Automate sub-60-second intake workflows on WhatsApp and CRM to convert inquiries before competitors respond.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Share Toolbar & Table of Contents */}
          <BlogPostInteractive
            title={post.title}
            url={currentUrl}
            tocItems={tocItems}
            faqs={extractedFaqs}
            category={post.category}
          />

          {/* Main 2-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 8 Columns: Markdown Article Body */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white border border-[#E7E0D6] rounded-3xl p-6 sm:p-10 shadow-warm-sm">
                
                {/* 2026 Industry Performance Benchmarks Table */}
                <div className="mb-10 p-6 rounded-2xl bg-[#F7F3ED] border border-[#E7E0D6] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A481B]">
                      <BarChart3 className="w-4 h-4" />
                      <span>2026 Sector Benchmarks &amp; KPI Targets</span>
                    </div>
                    <span className="text-[11px] font-semibold text-stone-500">
                      BMA Proprietary Data
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="border-b border-[#E7E0D6] text-stone-500 font-semibold uppercase tracking-wider">
                          <th className="py-2.5">Key Performance Indicator</th>
                          <th className="py-2.5">Industry Median</th>
                          <th className="py-2.5 text-[#9A481B]">BMA Target Framework</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E7E0D6] text-stone-800 font-medium">
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">Blended Marketing Efficiency (MER)</td>
                          <td className="py-2.5">2.2x – 2.8x</td>
                          <td className="py-2.5 text-[#9A481B] font-bold">3.8x – 5.5x+</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">Landing Page Conversion Rate</td>
                          <td className="py-2.5">1.4% – 2.1%</td>
                          <td className="py-2.5 text-[#9A481B] font-bold">3.5% – 6.2%</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">First-Response Lead Velocity</td>
                          <td className="py-2.5">4 – 8 Hours</td>
                          <td className="py-2.5 text-[#9A481B] font-bold">&lt; 60 Seconds (Automated)</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">AI Search Engine Citation (GEO)</td>
                          <td className="py-2.5">&lt; 10%</td>
                          <td className="py-2.5 text-[#9A481B] font-bold">45%+ Citation Rate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Markdown Prose Body */}
                <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed prose-headings:font-serif prose-headings:text-stone-900 prose-headings:scroll-mt-24 prose-a:text-[#9A481B] prose-a:font-semibold hover:prose-a:underline prose-strong:text-stone-900 prose-blockquote:border-l-4 prose-blockquote:border-[#9A481B] prose-blockquote:bg-[#F7F3ED] prose-blockquote:p-4 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-stone-700 prose-table:text-sm prose-th:bg-[#EBE4D8] prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-[#E7E0D6]">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2({ children, ...props }) {
                        const rawText = String(children);
                        const id = rawText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                        return (
                          <h2 id={id} className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-12 mb-4 pt-4 border-t border-stone-200/80 scroll-mt-24" {...props}>
                            {children}
                          </h2>
                        );
                      },
                      code({ node, className, children, ...props }) {
                        const codeStr = String(children).replace(/\n$/, '');

                        // Flow diagram rendering
                        if (codeStr.includes('──►') || codeStr.includes('->') || codeStr.includes('➔')) {
                          const steps = codeStr
                            .replace(/^[^\n]*:\s*/m, '')
                            .split(/──►|->|➔/)
                            .map((s) => s.replace(/\[|\]/g, '').trim())
                            .filter(Boolean);

                          return (
                            <div className="my-8 p-6 rounded-2xl bg-[#F7F3ED] border border-[#9A481B]/30 shadow-sm not-prose">
                              <div className="text-xs font-bold uppercase tracking-widest text-[#9A481B] mb-4 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-[#9A481B]" />
                                <span>Execution Architecture &amp; Flow</span>
                              </div>
                              <div className="flex flex-wrap items-center gap-3">
                                {steps.map((step, idx) => (
                                  <React.Fragment key={idx}>
                                    <div className="bg-white border border-[#E7E0D6] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-900 shadow-sm flex items-center gap-2">
                                      <span className="w-5 h-5 rounded-full bg-[#9A481B] text-[10px] text-white flex items-center justify-center font-bold">
                                        {idx + 1}
                                      </span>
                                      <span>{step}</span>
                                    </div>
                                    {idx < steps.length - 1 && (
                                      <span className="text-[#9A481B] font-bold text-base">➔</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        // ASCII comparison table rendering
                        if (codeStr.includes('+---') || codeStr.includes('|')) {
                          return (
                            <div className="my-8 overflow-x-auto rounded-2xl border border-[#E7E0D6] bg-[#F7F3ED] p-4 shadow-sm not-prose">
                              <pre className="font-mono text-xs sm:text-sm text-stone-800 whitespace-pre leading-relaxed">
                                {codeStr}
                              </pre>
                            </div>
                          );
                        }

                        return (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                      a({ href, children, ...props }) {
                        let targetHref = href || '';
                        // Redirect internal links, services, contact, and older domains to bestmarketingagency.online
                        const isInternal =
                          targetHref === '/services' ||
                          targetHref.startsWith('/services') ||
                          targetHref === '/contact' ||
                          targetHref.startsWith('/contact') ||
                          targetHref.includes('bestmarketingagency.online') ||
                          targetHref.includes('bma-agency.com') ||
                          targetHref.includes('thegrowthpurpose.com');

                        if (isInternal) {
                          return (
                            <a
                              href="https://bestmarketingagency.online"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#9A481B] font-semibold underline decoration-[#9A481B]/40 hover:decoration-[#9A481B] transition-colors inline-flex items-center gap-0.5"
                              {...props}
                            >
                              <span>{children}</span>
                              <span className="text-[10px] opacity-75">↗</span>
                            </a>
                          );
                        }

                        return (
                          <a
                            href={targetHref}
                            className="text-[#9A481B] font-semibold underline hover:text-[#72360C] transition-colors"
                            {...props}
                          >
                            {children}
                          </a>
                        );
                      },
                    }}
                  >
                    {cleanMarkdown}
                  </ReactMarkdown>
                </div>

                {/* 30-Day Implementation Roadmap */}
                <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F7F3ED] border border-[#E7E0D6] space-y-6">
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#9A481B] flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      <span>Actionable Blueprint</span>
                    </div>
                    <h4 className="text-xl font-serif font-bold text-stone-900">
                      30-Day Rapid Implementation Roadmap
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-[#E7E0D6] flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#9A481B] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        W1
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-stone-900">
                          Week 1: Infrastructure &amp; Entity Groundwork
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          Deploy server-side conversion tracking (CAPI), audit Schema.org rich snippets, and configure multi-channel UTM governance.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-[#E7E0D6] flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#9A481B] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        W2
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-stone-900">
                          Week 2: Conversion Architecture &amp; Creative Pods
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          Launch high-intent mobile landing pages with sub-2s load speed and deploy 10-15 short-form video hooks for creative validation.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-[#E7E0D6] flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#9A481B] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        W3-4
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-stone-900">
                          Weeks 3–4: Scale, Retention &amp; MER Optimization
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          Scale ad budget aggressively into verified winning creatives, activate automated WhatsApp speed-to-lead nurturing, and track blended MER weekly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Article Callout */}
                <div className="mt-12 p-8 rounded-2xl bg-[#F7F3ED] border border-[#9A481B]/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="text-lg font-serif font-bold text-stone-900">
                      Ready to Deploy This Growth Strategy?
                    </h4>
                    <p className="text-xs text-stone-600 max-w-lg">
                      Book a 1-on-1 strategy consultation with BMA growth specialists to implement this exact playbook for your business.
                    </p>
                  </div>
                  <a
                    href="https://bestmarketingagency.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#9A481B] hover:bg-[#7E3713] text-white rounded-xl text-xs font-bold transition shadow-sm whitespace-nowrap inline-flex items-center gap-2 shrink-0"
                  >
                    <span>Schedule Free Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Author Bio Card */}
              <div className="bg-white border border-[#E7E0D6] rounded-3xl p-6 sm:p-8 space-y-4 shadow-warm-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A481B]">
                  <Award className="w-4 h-4" />
                  <span>About the Growth Practitioner</span>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-stone-200 shadow-sm shrink-0">
                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-base font-serif font-bold text-stone-900">{post.author.name}</div>
                    <div className="text-xs text-[#9A481B] font-semibold">{post.author.role} • BMA</div>
                    <p className="text-xs text-stone-600 leading-relaxed pt-1">
                      Leading digital acquisition, SEO engineering, and full-funnel performance marketing at BMA (Best Marketing Agency). Has architected growth systems for 200+ brands across 89 sectors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="bg-white border border-[#E7E0D6] rounded-2xl p-6 space-y-3 shadow-warm-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#9A481B]" /> Related Topics &amp; Industries
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#F7F3ED] text-stone-700 border border-[#E7E0D6] px-3 py-1.5 rounded-lg font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 Columns: Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-8 sticky top-24">
              
              {/* Consultation Card */}
              <div className="bg-[#F7F3ED] border border-[#E7E0D6] rounded-3xl p-7 space-y-4 shadow-warm-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9A481B]">
                  ACCELERATE EXECUTION
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                  Scale Your Revenue with BMA
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Partner with our growth team to implement high-converting acquisition funnels, search authority, and algorithmic paid ads.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="https://bestmarketingagency.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center px-5 py-3 bg-[#9A481B] hover:bg-[#7E3713] text-white rounded-xl text-xs font-bold transition shadow-sm inline-flex items-center gap-2"
                  >
                    <span>Request Custom Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://wa.me/919022103227?text=Hi%2C%20I%20am%20interested%20in%20BMA%20marketing%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center px-5 py-3 bg-white hover:bg-stone-50 text-stone-800 border border-[#E7E0D6] rounded-xl text-xs font-bold transition inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Related Playbooks in Sidebar */}
              {relatedArticles.length > 0 && (
                <div className="bg-white border border-[#E7E0D6] rounded-3xl p-6 space-y-4 shadow-warm-sm">
                  <h3 className="text-sm font-serif font-bold text-stone-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#9A481B]" />
                    Related {post.category} Playbooks
                  </h3>
                  <div className="space-y-3">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="block p-3.5 rounded-xl bg-[#F7F3ED] hover:bg-[#EBE4D8] border border-[#E7E0D6] transition group"
                      >
                        <div className="text-xs font-semibold text-stone-800 group-hover:text-[#9A481B] transition line-clamp-2 leading-snug">
                          {rel.title}
                        </div>
                        <div className="text-[11px] text-stone-500 mt-2 flex items-center justify-between">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#9A481B]" /> {rel.readTime}
                          </span>
                          <ArrowRight className="w-3 h-3 text-[#9A481B] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Full-width CTA Banner at Bottom */}
          <CtaBanner />
        </div>
      </article>
    </>
  );
}
