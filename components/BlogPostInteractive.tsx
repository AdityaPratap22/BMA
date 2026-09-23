'use client';

import React, { useState, useEffect } from 'react';
import {
  Share2,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  Bookmark,
  List,
  Sparkles,
  HelpCircle,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface TocItem {
  id: string;
  text: string;
}

interface BlogPostInteractiveProps {
  title: string;
  url: string;
  tocItems: TocItem[];
  faqs: FaqItem[];
  category: string;
}

export default function BlogPostInteractive({
  title,
  url,
  tocItems,
  faqs,
  category,
}: BlogPostInteractiveProps) {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First open by default
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(url || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const shareText = encodeURIComponent(`${title} — Read this growth playbook by BMA: ${url}`);
    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const handleShareTwitter = () => {
    const tweetText = encodeURIComponent(`${title} via @BMA_Agency`);
    window.open(
      `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#9A481B] to-[#D97706] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Interactive Sticky Share & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#F7F3ED] border border-[#E7E0D6] shadow-sm my-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600">
          <Share2 className="w-4 h-4 text-[#9A481B]" />
          <span>Share Strategy:</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleShareWhatsApp}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 border border-[#E7E0D6] hover:border-emerald-300 text-xs font-semibold transition"
          >
            <span>WhatsApp</span>
          </button>

          <button
            onClick={handleShareLinkedIn}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-[#E7E0D6] hover:border-blue-300 text-xs font-semibold transition"
          >
            <span>LinkedIn</span>
          </button>

          <button
            onClick={handleShareTwitter}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-[#E7E0D6] text-xs font-semibold transition"
          >
            <span>X (Twitter)</span>
          </button>

          <button
            onClick={handleCopyLink}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-[#E7E0D6]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Table of Contents Box (if 2+ headings) */}
      {tocItems.length > 1 && (
        <div className="my-8 p-6 sm:p-8 rounded-3xl bg-[#F7F3ED] border border-[#E7E0D6] shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7E0D6]">
            <div className="flex items-center gap-2 text-sm font-bold text-stone-900 uppercase tracking-wider">
              <List className="w-4 h-4 text-[#9A481B]" />
              <span>Table of Contents</span>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              {tocItems.length} Strategic Sections
            </span>
          </div>

          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
            {tocItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className="text-left text-xs sm:text-sm font-medium text-stone-700 hover:text-[#9A481B] hover:translate-x-1 transition-all flex items-start gap-2.5 py-1"
              >
                <span className="w-5 h-5 rounded-full bg-[#EBE4D8] text-[#9A481B] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="line-clamp-2 leading-snug">{item.text}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Interactive FAQ Section */}
      {faqs.length > 0 && (
        <div className="my-12 p-6 sm:p-10 rounded-3xl bg-white border border-[#E7E0D6] shadow-warm-sm space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9A481B]">
              <HelpCircle className="w-4 h-4" />
              <span>Expert FAQ &amp; Strategy Breakdown</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Frequently Asked Questions About This Playbook
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Clear, data-backed answers addressing technical implementation, expected ROI, and timeline expectations.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E7E0D6] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 bg-[#F7F3ED] hover:bg-[#EBE4D8] flex items-center justify-between gap-4 transition"
                  >
                    <span className="text-sm font-serif font-bold text-stone-900 leading-snug">
                      {faq.question}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white border border-[#E7E0D6] flex items-center justify-center shrink-0 text-stone-600">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#9A481B]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-[#E7E0D6] space-y-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
