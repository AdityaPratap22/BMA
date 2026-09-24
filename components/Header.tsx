'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, User, Sparkles, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenSearch?: () => void;
  onOpenStrategy?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenStrategy }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About', hasDropdown: true },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Our Work' },
    { href: '/smm', label: 'SMM' },
    { href: '/industries', label: 'Industries' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E7E0D6] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center group py-1">
          <Image
            src="/logo.png"
            alt="BMA – Best Marketing Agency"
            width={240}
            height={80}
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.href}
                  className="relative py-2"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#8B4513] ${
                      isActive(link.href)
                        ? 'text-[#8B4513] font-semibold border-b-2 border-[#8B4513] pb-0.5'
                        : 'text-stone-800'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180 text-[#8B4513]' : 'text-stone-400'}`} />
                  </Link>

                  {/* Dropdown Menu Card (Matching Digital Digix) */}
                  {isAboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-[#E7E0D6] p-2 space-y-1 z-50 animate-fade-in">
                      <Link
                        href="/about"
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className="block p-3 rounded-xl hover:bg-[#FAF4ED] transition-colors group"
                      >
                        <div className="text-xs font-bold text-stone-900 group-hover:text-[#8B4513] flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#8B4513]" />
                          <span>About BMA</span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          Our engineering philosophy &amp; mission
                        </div>
                      </Link>

                      <Link
                        href="/about/harsh-chaudhary"
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className="block p-3 rounded-xl hover:bg-[#FAF4ED] transition-colors group"
                      >
                        <div className="text-xs font-bold text-stone-900 group-hover:text-[#8B4513] flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-[#8B4513]" />
                          <span>Founder — Harsh Chaudhary</span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          CEO &amp; Performance Marketing Lead
                        </div>
                      </Link>

                      <Link
                        href="/about/khwahish-sahai"
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className="block p-3 rounded-xl hover:bg-[#FAF4ED] transition-colors group"
                      >
                        <div className="text-xs font-bold text-stone-900 group-hover:text-[#8B4513] flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-[#8B4513]" />
                          <span>Co-Founder — Khwahish Sahai</span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          Creative Director &amp; Visual Lead
                        </div>
                      </Link>

                      <Link
                        href="/about/why-us"
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className="block p-3 rounded-xl hover:bg-[#FAF4ED] transition-colors group"
                      >
                        <div className="text-xs font-bold text-stone-900 group-hover:text-[#8B4513] flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#8B4513]" />
                          <span>Why BMA &amp; Core Pillars</span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          Zero lock-in, post-pay &amp; live dashboards
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#8B4513] ${
                  isActive(link.href)
                    ? 'text-[#8B4513] font-semibold border-b-2 border-[#8B4513] py-1'
                    : 'text-stone-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-800 hover:bg-[#F5EFE6]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF6F0] border-b border-[#E7E0D6] px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive(link.href)
                    ? 'bg-[#8B4513] text-white'
                    : 'text-stone-800 hover:bg-[#F5EFE6]'
                }`}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 py-1 space-y-1">
                  <Link
                    href="/about/harsh-chaudhary"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-stone-600 hover:text-[#8B4513] py-1"
                  >
                    ↳ Harsh Chaudhary (Founder &amp; CEO)
                  </Link>
                  <Link
                    href="/about/khwahish-sahai"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-stone-600 hover:text-[#8B4513] py-1"
                  >
                    ↳ Khwahish Sahai (Creative Director)
                  </Link>
                  <Link
                    href="/about/why-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-stone-600 hover:text-[#8B4513] py-1"
                  >
                    ↳ Why BMA &amp; Core Pillars
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
