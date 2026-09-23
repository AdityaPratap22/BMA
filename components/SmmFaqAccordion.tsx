'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface SmmFaqAccordionProps {
  faqs: FaqItem[];
}

export function SmmFaqAccordion({ faqs }: SmmFaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-warm-sm">
            <button
              onClick={() => setOpenFaq(isOpen ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-stone-900 hover:text-terracotta-600 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-sm">{faq.q}</span>
              <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 text-stone-400 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
