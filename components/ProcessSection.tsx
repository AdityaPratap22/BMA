'use client';

import React from 'react';
import { Target, Compass, Rocket, BarChart3 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      desc: 'We learn about your business, audience and goals.',
      icon: <Target className="w-5 h-5 text-[#8B4513]" />,
    },
    {
      number: '02',
      title: 'Strategize',
      desc: 'We create a data-backed strategy tailored to your needs.',
      icon: <Compass className="w-5 h-5 text-[#8B4513]" />,
    },
    {
      number: '03',
      title: 'Execute',
      desc: 'We launch campaigns that drive engagement and growth.',
      icon: <Rocket className="w-5 h-5 text-[#8B4513]" />,
    },
    {
      number: '04',
      title: 'Optimize',
      desc: 'We analyze and optimize for maximum impact and ROI.',
      icon: <BarChart3 className="w-5 h-5 text-[#8B4513]" />,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9A481B]">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            A clear process. Powerful results.
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F7F3ED] rounded-2xl p-6 border border-[#E7E0D6] shadow-warm-sm space-y-4 relative"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FFFDF9] flex items-center justify-center border border-stone-200/60 shadow-warm-sm">
                  {step.icon}
                </div>
                <span className="font-serif text-xl font-bold text-[#8B4513]">
                  {step.number}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
