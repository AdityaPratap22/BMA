'use client';

import React from 'react';
import { Send } from 'lucide-react';

interface CtaBannerProps {
  onOpenStrategy?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenStrategy }) => {
  return (
    <section className="py-14 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5EFE6] rounded-2xl p-8 sm:p-12 border border-[#E7DFD5] shadow-warm-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#8B4513] flex items-center justify-center text-white shadow-warm-md shrink-0">
              <Send className="w-6 h-6 transform -rotate-12" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Ready to grow your business?
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-0.5 font-normal">
                Let's build something amazing together.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenStrategy}
            className="bg-[#8B4513] text-white px-7 py-3.5 rounded-xl font-medium text-base hover:bg-[#72360C] transition-all shadow-warm-md shrink-0"
          >
            Get a Free Strategy Call
          </button>

        </div>
      </div>
    </section>
  );
};
