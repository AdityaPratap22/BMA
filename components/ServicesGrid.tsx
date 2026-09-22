import React from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/data/servicesData';

export function ServicesGrid() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">Our Craft</span>
            <span className="w-8 h-px bg-terracotta-600" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-stone-900">
            Services &amp; Transparent Pricing
          </h2>
          <p className="text-stone-500 text-base leading-relaxed">
            No lock-in contracts. No hidden fees. Click any service for the full breakdown.
          </p>
        </div>

        {/* Services Grid — top 6 on homepage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block bg-white rounded-2xl border border-stone-200 shadow-warm-sm p-6 flex flex-col relative overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Top colour bar */}
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-terracotta-700 via-amber-500 to-terracotta-500 rounded-t-2xl" />

              {service.badgeText && (
                <span className="absolute top-4 right-4 bg-terracotta-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {service.badgeText}
                </span>
              )}

              <div className="text-3xl mb-3">{service.emoji}</div>
              <h3 className="font-serif font-bold text-[15px] text-stone-900 mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed mb-4 flex-1">
                {service.shortDesc}
              </p>
              <div className="mt-auto space-y-2">
                <div className="font-extrabold text-sm bg-gradient-to-r from-terracotta-700 via-amber-600 to-terracotta-500 bg-clip-text text-transparent">
                  {service.price}
                </div>
                <div className="text-[11px] font-bold text-terracotta-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-200">
                  Full Details →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-block bg-terracotta-600 text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-terracotta-700 transition-colors duration-200 shadow-warm-sm"
          >
            View All 17 Services →
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-white text-stone-900 border border-stone-300 px-10 py-4 rounded-2xl font-bold text-sm hover:border-terracotta-600 hover:text-terracotta-600 transition-colors duration-200"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
