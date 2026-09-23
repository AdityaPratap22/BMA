'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, Layers, FileText, MapPin, Briefcase } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import { BLOG_DATA } from '@/lib/data/blogData';
import { FEATURED_DOMESTIC_LOCATIONS } from '@/lib/data/locationsData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal trigger handled by parent state
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = SERVICES_DATA.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogs = BLOG_DATA.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  const filteredLocations = FEATURED_DOMESTIC_LOCATIONS.filter((l) =>
    l.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Header */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-terracotta-600 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, blog guides, locations, or case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base focus:outline-none text-stone-900 placeholder:text-stone-400 font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-stone-400 hover:text-stone-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 bg-stone-100 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-200"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-4 overflow-y-auto space-y-6">
          
          {/* Services Results */}
          {filteredServices.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5 px-2">
                <Layers className="w-3.5 h-3.5" /> Services
              </div>
              <div className="space-y-1">
                {filteredServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-cream-200 group transition-colors"
                  >
                    <div>
                      <div className="font-serif font-bold text-sm text-stone-900 group-hover:text-terracotta-600">
                        {service.title}
                      </div>
                      <div className="text-xs text-stone-500 line-clamp-1">{service.shortDesc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-terracotta-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Blogs Results */}
          {filteredBlogs.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5 px-2">
                <FileText className="w-3.5 h-3.5" /> Blog Articles
              </div>
              <div className="space-y-1">
                {filteredBlogs.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-cream-200 group transition-colors"
                  >
                    <div>
                      <div className="font-serif font-bold text-sm text-stone-900 group-hover:text-terracotta-600">
                        {post.title}
                      </div>
                      <div className="text-xs text-stone-500">{post.category} • {post.readTime}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-terracotta-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Locations Results */}
          {filteredLocations.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5 px-2">
                <MapPin className="w-3.5 h-3.5" /> Locations
              </div>
              <div className="flex flex-wrap gap-2 px-2">
                {filteredLocations.map((city) => (
                  <Link
                    key={city}
                    href={`/location/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={onClose}
                    className="px-3 py-1.5 bg-cream-200 hover:bg-terracotta-600 hover:text-white rounded-full text-xs font-medium text-stone-800 transition-colors"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredServices.length === 0 && filteredBlogs.length === 0 && filteredLocations.length === 0 && (
            <div className="text-center py-8 text-stone-500 text-sm">
              No results found for "<span className="font-medium text-stone-800">{query}</span>". Try searching for "SEO", "SMM", "E-commerce", or a city.
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
