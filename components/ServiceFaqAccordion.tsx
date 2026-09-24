'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface ServiceFaqAccordionProps {
  serviceTitle: string;
  faqs?: FaqItem[];
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    q: 'How quickly can we get started?',
    a: 'Most services can kick off within 24 to 48 hours following a brief onboarding chat and access setup on WhatsApp.',
  },
  {
    q: 'Are there any lock-in contracts or long-term commitments?',
    a: 'No. All our marketing packages and services operate on transparent, month-to-month or per-project terms with zero cancellation penalties.',
  },
  {
    q: 'How do you report progress and performance?',
    a: 'You receive weekly WhatsApp progress updates, monthly PDF analytics reports, and a dedicated account lead you can reach at any time.',
  },
  {
    q: 'What if I need custom deliverables outside the standard scope?',
    a: 'We routinely tailor scopes to meet exact brand requirements. Simply ping our team on WhatsApp and we will structure a custom proposal.',
  },
];

export function ServiceFaqAccordion({ serviceTitle, faqs }: ServiceFaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const items = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS;

  return (
    <section aria-labelledby="faq-heading" className="space-y-6 pt-4">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta-600">
          <HelpCircle className="w-4 h-4" />
          <span>Got Questions?</span>
        </div>
        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-stone-500">
          Everything you need to know about our {serviceTitle} service, turnaround, and deliverables.
        </p>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-warm-sm transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-stone-900 hover:text-terracotta-700 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 group-hover:text-terracotta-600 transition-transform shrink-0 ${
                    isOpen ? 'rotate-180 text-terracotta-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-100">
                  <p className="pt-3">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
