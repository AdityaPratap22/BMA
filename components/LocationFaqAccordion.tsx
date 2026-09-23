'use client';

import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

interface LocationFaqAccordionProps {
  faqs: FaqItem[];
}

export function LocationFaqAccordion({ faqs }: LocationFaqAccordionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openFaqIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-warm-sm"
          >
            <button
              onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left font-serif font-bold text-stone-900 hover:text-terracotta-600 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base">{faq.q}</span>
              <span className="text-xl text-stone-400 font-normal shrink-0 ml-4">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
