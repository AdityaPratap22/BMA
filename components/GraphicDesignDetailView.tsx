'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  Clock, 
  FileText, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  ChevronRight,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { 
  GraphicDesignItem, 
  GraphicDesignCategory, 
  getRelatedGraphicDesignItems 
} from '@/lib/data/graphicDesignItemsData';

interface GraphicDesignDetailViewProps {
  item?: GraphicDesignItem;
  category?: GraphicDesignCategory;
}

const FAQS = [
  {
    q: 'How fast will I receive my completed design?',
    a: 'Most standard creatives (posters, flyers, social posts) are delivered within 24–48 hours. Multi-page slide decks, branding manuals, and commercial packaging take 3–5 business days.',
  },
  {
    q: 'Do you provide editable source files?',
    a: 'Yes! We deliver print-ready PDFs (CMYK 300 DPI) as well as fully layered editable source files (Adobe Photoshop PSD, Adobe Illustrator AI, or Figma) depending on the format.',
  },
  {
    q: 'How many revisions do I get?',
    a: 'All our design services include up to 3 revision cycles to ensure colors, typography, sizing, and details match your expectations perfectly.',
  },
  {
    q: 'Can I order a custom package or monthly retainer?',
    a: 'Absolutely! If you need daily creatives, monthly marketing packages, or multiple branding collateral, reach out via WhatsApp for a tailored monthly retainer with dedicated designer support.',
  },
];

export function GraphicDesignDetailView({ item, category }: GraphicDesignDetailViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // If viewing a category subpage
  if (category && !item) {
    return (
      <div className="py-12 sm:py-20 bg-brand-bg min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 font-medium">
            <Link href="/" className="text-terracotta-600 hover:underline">Home</Link>
            <span className="mx-2 text-stone-400">/</span>
            <Link href="/services" className="text-terracotta-600 hover:underline">Services</Link>
            <span className="mx-2 text-stone-400">/</span>
            <Link href="/graphic-design" className="text-terracotta-600 hover:underline">Graphic Design</Link>
            <span className="mx-2 text-stone-400">/</span>
            <span className="text-stone-900 font-bold">{category.title}</span>
          </nav>

          {/* Back button */}
          <div>
            <Link
              href="/graphic-design"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-200 px-5 py-2.5 rounded-full shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-terracotta-600" /> Back to Graphic Design Catalog
            </Link>
          </div>

          {/* Category Hero */}
          <div className="bg-white rounded-3xl border-t-4 border-t-terracotta-600 border border-stone-200 shadow-warm-sm p-8 sm:p-12 text-center relative overflow-hidden">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-terracotta-700 bg-terracotta-50 px-3.5 py-1.5 rounded-full mb-4">
              Starting from {category.basePrice}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-900 leading-tight">
              {category.title}
            </h1>
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              {category.description}
            </p>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in ordering designs from: ${category.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3 rounded-full font-bold text-sm shadow-warm-sm hover:shadow-warm-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp 💬</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-7 py-3 rounded-full font-bold text-sm shadow-sm transition-all"
              >
                <span>Request Custom Proposal →</span>
              </Link>
            </div>
          </div>

          {/* Category Items Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Services Available in {category.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((catItem) => (
                <div
                  key={catItem.slug}
                  className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md hover:border-terracotta-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                        {catItem.turnaround}
                      </span>
                      <span className="text-sm font-extrabold text-terracotta-700 bg-[#FAF4ED] px-2.5 py-1 rounded-full">
                        {catItem.price}
                      </span>
                    </div>
                    <Link
                      href={`/graphic-design/${catItem.slug}`}
                      className="text-lg font-serif font-bold text-stone-900 hover:text-terracotta-600 transition-colors block"
                    >
                      {catItem.name}
                    </Link>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {catItem.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/graphic-design/${catItem.slug}`}
                      className="text-xs font-bold text-stone-800 hover:text-terracotta-600 flex items-center gap-1 group"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <a
                      href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in ${catItem.name} (${catItem.price})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#25D366] hover:text-[#20ba5a] flex items-center gap-1"
                      title="Quick Order on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FREQUENTLY ASKED QUESTIONS ── */}
          <section className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-warm-sm space-y-6">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                Clear Answers
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                {category.title.split('—')[0].trim()} FAQs
              </h3>
            </div>

            <div className="divide-y divide-stone-100 max-w-3xl mx-auto">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-serif font-bold text-stone-900 text-sm sm:text-base group"
                    >
                      <span className="group-hover:text-terracotta-600 transition-colors">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 group-hover:text-terracotta-600 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // If item is not found
  if (!item) {
    return (
      <div className="py-24 text-center bg-brand-bg min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-serif font-bold text-stone-900 mb-3">Service Not Found</h1>
        <p className="text-stone-600 mb-6 max-w-md">
          The requested graphic design service details could not be found or has been relocated.
        </p>
        <Link
          href="/graphic-design"
          className="inline-flex items-center gap-2 bg-terracotta-600 text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-terracotta-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Graphic Design Catalog
        </Link>
      </div>
    );
  }

  const related = getRelatedGraphicDesignItems(item.slug, 3);

  return (
    <div className="py-12 sm:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 font-medium">
          <Link href="/" className="text-terracotta-600 hover:underline">Home</Link>
          <span className="mx-2 text-stone-400">/</span>
          <Link href="/services" className="text-terracotta-600 hover:underline">Services</Link>
          <span className="mx-2 text-stone-400">/</span>
          <Link href="/graphic-design" className="text-terracotta-600 hover:underline">Graphic Design</Link>
          <span className="mx-2 text-stone-400">/</span>
          <span className="text-stone-900 font-bold">{item.name}</span>
        </nav>

        {/* Back Button */}
        <div>
          <Link
            href="/graphic-design"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-200 px-5 py-2.5 rounded-full shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-terracotta-600" /> Back to Graphic Design Catalog
          </Link>
        </div>

        {/* ── HERO CARD ── */}
        <header className="bg-white rounded-3xl border-t-4 border-t-terracotta-600 border border-stone-200 shadow-warm-sm p-8 sm:p-12 space-y-8 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-widest text-terracotta-700 bg-terracotta-50 px-4 py-1.5 rounded-full">
              {item.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-900 leading-tight">
              {item.name} Services
            </h1>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed pt-1">
              {item.desc}
            </p>
          </div>

          {/* 3-Column Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-stone-50 border border-stone-200 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <div className="space-y-1">
              <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider block">
                Turnaround Time
              </span>
              <span className="text-lg sm:text-xl font-bold text-stone-900 block font-serif">
                {item.turnaround}
              </span>
            </div>

            <div className="space-y-1 border-y md:border-y-0 md:border-x border-stone-200 py-3 md:py-0 px-2">
              <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider block">
                Deliverable Formats
              </span>
              <span className="text-xs sm:text-sm font-semibold text-stone-800 block leading-snug">
                {item.formats}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider block">
                Fixed Starting Price
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-terracotta-700 block">
                {item.price}
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in ordering ${item.name} (${item.price})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-warm-md hover:shadow-warm-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Order on WhatsApp 💬</span>
            </a>

            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in a custom quote for ${item.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-sm transition-all"
            >
              <span>Discuss Custom Quote →</span>
            </a>
          </div>
        </header>

        {/* ── 2-COLUMN DELIVERABLES & REQUIREMENTS INFO ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Deliverables */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-warm-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
                <span>📦</span> What is Included / Deliverables
              </h2>
            </div>
            <ul className="space-y-3.5">
              {item.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-terracotta-50 text-terracotta-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Requirements */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-warm-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
                <span>📋</span> What We Need From You
              </h2>
            </div>
            <ul className="space-y-3.5">
              {item.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ➜
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── MONTHLY DESIGN RETAINER BANNER ── */}
        <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-terracotta-400 bg-stone-800/80 px-3.5 py-1 rounded-full border border-terracotta-500/30">
              TRANSPARENT CREATIVE ENGINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Interested in a Monthly Design Retainer?
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Unlock flat-rate agency graphic assets, logo branding, packaging setups, and custom templates with unlimited revisions. Tailored for high-growth businesses and scalable teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20a%20Monthly%20Design%20Retainer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3 rounded-full font-bold text-sm shadow-warm-md hover:shadow-warm-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp 💬</span>
            </a>
            <a
              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in a strategy call for ${item.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-7 py-3 rounded-full font-bold text-sm transition-all"
            >
              <span>Book Strategy Call ➔</span>
            </a>
          </div>
        </section>

        {/* ── RELATED GRAPHIC DESIGN SERVICES ── */}
        {related.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Related {item.category.split('—')[0].trim()} Formats
              </h3>
              <Link
                href="/graphic-design"
                className="text-xs font-bold text-terracotta-600 hover:underline flex items-center gap-1"
              >
                <span>View All Formats</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((relItem) => (
                <div
                  key={relItem.slug}
                  className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm hover:shadow-md hover:border-terracotta-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-stone-400">
                        {relItem.turnaround}
                      </span>
                      <span className="text-xs font-extrabold text-terracotta-700 bg-[#FAF4ED] px-2 py-0.5 rounded-full">
                        {relItem.price}
                      </span>
                    </div>
                    <Link
                      href={`/graphic-design/${relItem.slug}`}
                      className="text-base font-serif font-bold text-stone-900 hover:text-terracotta-600 transition-colors block"
                    >
                      {relItem.name}
                    </Link>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {relItem.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold">
                    <Link
                      href={`/graphic-design/${relItem.slug}`}
                      className="text-stone-800 hover:text-terracotta-600"
                    >
                      Details →
                    </Link>
                    <a
                      href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in ${relItem.name} (${relItem.price})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:text-[#20ba5a]"
                    >
                      Order 💬
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── FREQUENTLY ASKED QUESTIONS ── */}
        <section className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-warm-sm space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Clear Answers
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Graphic Design FAQs
            </h3>
          </div>

          <div className="divide-y divide-stone-100">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-serif font-bold text-stone-900 text-sm sm:text-base group"
                  >
                    <span className="group-hover:text-terracotta-600 transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 group-hover:text-terracotta-600 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
