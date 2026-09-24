'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import {
  TOP_FOOTER_DOMESTIC_LOCATIONS,
  TOP_FOOTER_INTERNATIONAL_LOCATIONS
} from '@/lib/data/locationsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF6F0] border-t border-[#E7E0D6] pt-16 pb-8 text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Large Digital Marketing Hub Feature Banner */}
        <div className="bg-stone-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-terracotta-400 uppercase tracking-widest">
              <span>✦</span> Full-Spectrum Growth Engineering
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Explore Our Complete Digital Marketing Architecture
            </h3>
            <p className="text-xs text-stone-400 max-w-xl">
              Performance marketing, generative AI search (GEO), custom web development, and WhatsApp automation funnels.
            </p>
          </div>

          <Link
            href="/digital-marketing"
            className="inline-flex items-center justify-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-warm-sm hover:scale-105 shrink-0 w-full sm:w-auto"
          >
            <span>Explore Digital Marketing</span>
            <span>→</span>
          </Link>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group py-1">
              <Image
                src="/logo.png"
                alt="BMA – Best Marketing Agency"
                width={240}
                height={80}
                className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              We help ambitious brands build category leadership with creative storytelling, generative AI, data-driven performance ads, and high-converting technology.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="p-2 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#8B4513] hover:border-[#8B4513] transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#8B4513] hover:border-[#8B4513] transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.linkedin.com/in/harsh-chaudhary-b370b2337/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#8B4513] hover:border-[#8B4513] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-[#8B4513] hover:border-[#8B4513] transition-colors" aria-label="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-xs tracking-wide uppercase">Company</h4>
            <ul className="space-y-2.5 text-[12px] font-medium">
              <li><Link href="/about" className="hover:text-[#8B4513] transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#8B4513] transition-colors">Our Work &amp; Portfolio</Link></li>
              <li><Link href="/industries" className="hover:text-[#8B4513] transition-colors">89+ Industries</Link></li>
              <li><Link href="/smm" className="hover:text-[#8B4513] transition-colors">SMM &amp; Reels Hub</Link></li>
              <li><Link href="/digital-marketing" className="hover:text-[#8B4513] font-semibold text-[#8B4513] transition-colors">Digital Marketing Hub</Link></li>
              <li><Link href="/contact" className="hover:text-[#8B4513] transition-colors">Contact Strategy Team</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-xs tracking-wide uppercase">Growth Solutions</h4>
            <ul className="space-y-2.5 text-[12px] font-medium">
              <li><Link href="/digital-marketing" className="hover:text-[#8B4513] font-bold text-[#8B4513] transition-colors">Full-Suite Digital Marketing Architecture ★</Link></li>
              <li><Link href="/services/performance-marketing" className="hover:text-[#8B4513] transition-colors">Performance Marketing (Google &amp; Meta Ads)</Link></li>
              <li><Link href="/services/smm" className="hover:text-[#8B4513] transition-colors">Social Media Marketing &amp; UGC Video</Link></li>
              <li><Link href="/services/seo-growth" className="hover:text-[#8B4513] transition-colors">Search Engine &amp; AI Optimization (SEO / GEO)</Link></li>
              <li><Link href="/services/content-marketing" className="hover:text-[#8B4513] transition-colors">Content Marketing &amp; Thought Leadership</Link></li>
              <li><Link href="/services/graphic-design" className="hover:text-[#8B4513] transition-colors">Graphic Design &amp; Brand Systems (From ₹200)</Link></li>
              <li><Link href="/services/web-development" className="hover:text-[#8B4513] transition-colors">Sub-Second Next.js Web Development</Link></li>
            </ul>
          </div>

        </div>

        {/* ── LOCATIONS SECTION (SEAMLESS IN FOOTER) ───────────── */}
        <div className="pt-8 border-t border-[#E7E0D6] space-y-8">
          {/* Domestic Locations */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-terracotta-600" />
              <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900">
                Our Services Are Available In Domestic Locations
              </h4>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {TOP_FOOTER_DOMESTIC_LOCATIONS.map((loc) => (
                <Link
                  key={loc}
                  href={`/digital-marketing/${loc.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3.5 sm:px-4 py-1.5 bg-white hover:bg-terracotta-600 text-stone-700 hover:text-white rounded-full text-xs font-semibold border border-[#E7E0D6] hover:border-terracotta-600 shadow-sm transition-all duration-150 hover:scale-105"
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>

          {/* International Locations */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-terracotta-600" />
              <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900">
                Our Services Are Available In International Locations
              </h4>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {TOP_FOOTER_INTERNATIONAL_LOCATIONS.map((loc) => (
                <Link
                  key={loc}
                  href={`/digital-marketing/${loc.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-1.5 bg-white hover:bg-terracotta-600 text-stone-700 hover:text-white rounded-full text-xs font-semibold border border-[#E7E0D6] hover:border-terracotta-600 shadow-sm transition-all duration-150 hover:scale-105 flex items-center gap-1.5"
                >
                  <span>🌐</span>
                  <span>{loc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* View All Locations Button */}
          <div className="text-center pt-2">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF4ED] hover:bg-terracotta-600 text-terracotta-700 hover:text-white border border-terracotta-300 hover:border-terracotta-600 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-warm-sm hover:scale-105 text-center"
            >
              <span>View All Locations</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()}{' '}
            <a
              href="https://businessvolunteers.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-stone-700 hover:text-terracotta-600 hover:underline transition-colors"
            >
              Business Volunteers
            </a>
            . All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-stone-800 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-stone-800 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
