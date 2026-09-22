'use client';

import React from 'react';
import { Award, Users, DollarSign, Star, Calendar } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '150+',
      label: 'Projects Completed',
      icon: <Award className="w-5 h-5 text-[#8B4513]" />,
    },
    {
      value: '120+',
      label: 'Happy Clients',
      icon: <Users className="w-5 h-5 text-[#8B4513]" />,
    },
    {
      value: '₹250Cr+',
      label: 'Ad Spend Managed',
      icon: <DollarSign className="w-5 h-5 text-[#8B4513]" />,
    },
    {
      value: '4.9/5',
      label: 'Client Rating',
      icon: <Star className="w-5 h-5 text-[#8B4513]" />,
    },
    {
      value: '5+',
      label: 'Years Experience',
      icon: <Calendar className="w-5 h-5 text-[#8B4513]" />,
    },
  ];

  return (
    <section className="py-10 bg-[#F7F3ED] border-y border-[#E7E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3.5 p-2">
              <div className="w-11 h-11 rounded-xl bg-[#FFFDF9] flex items-center justify-center border border-stone-200/60 shadow-warm-sm shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="font-serif font-bold text-2xl text-stone-900 leading-none">{stat.value}</div>
                <div className="text-[11px] font-medium text-stone-600 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
