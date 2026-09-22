import React from 'react';
import Link from 'next/link';
import { LOCATION_GROUPS } from '@/lib/data/locationsData';
import { MapPin, Globe, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Global Locations & Regional Marketing Centers — BMA | Best Marketing Agency',
  description: 'Explore BMA domestic and international marketing hubs serving clients across India, North America, UK, UAE, Australia, and beyond.',
};

export default function LocationsDirectoryPage() {
  const allCityCount = LOCATION_GROUPS.reduce((acc, g) => acc + g.cities.length, 0);

  return (
    <div className="py-16 sm:py-24 bg-brand-bg min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Global Reach • Local Precision
            </span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Our Regional &amp; International Growth Hubs
          </h1>

          <p className="text-stone-600 text-lg leading-relaxed">
            Delivering localized search dominance, data-driven paid advertising, and high-performance digital marketing across <span className="font-bold text-stone-900">{allCityCount}+ global cities</span> and metropolitan markets.
          </p>
        </div>

        {/* Location Groups */}
        <div className="space-y-12">
          {LOCATION_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="bg-brand-card rounded-4xl p-6 sm:p-10 border border-brand-border shadow-warm-sm space-y-6"
            >
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
                <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2.5">
                  <Globe className="w-6 h-6 text-terracotta-600" />
                  <span>{group.region}</span>
                </h2>
                <span className="text-xs font-bold px-3.5 py-1 bg-terracotta-100 text-terracotta-700 rounded-full">
                  {group.cities.length} Markets
                </span>
              </div>

              {/* Large Sized Location Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {group.cities.map((city) => (
                  <Link
                    key={city}
                    href={`/digital-marketing/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white hover:bg-terracotta-600 hover:text-white rounded-2xl text-sm sm:text-base font-bold text-stone-800 border border-stone-200 shadow-warm-sm transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center gap-2 group"
                  >
                    <MapPin className="w-4 h-4 text-terracotta-500 group-hover:text-white transition-colors" />
                    <span>{city}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-white" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
