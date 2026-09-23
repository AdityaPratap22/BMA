'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';
import { BlogPost } from '@/lib/data/blogData';

interface BlogListingClientProps {
  blogs: BlogPost[];
  categories: string[];
}

const POSTS_PER_PAGE = 12;

export default function BlogListingClient({ blogs, categories }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const selCat = selectedCategory.toLowerCase();

    return blogs.filter((blog) => {
      const cat = (blog.category || '').toLowerCase();
      const tags = Array.isArray(blog.tags) ? blog.tags : [];

      const matchesCategory =
        selectedCategory === 'All' ||
        cat === selCat ||
        tags.some((t) => (t || '').toLowerCase() === selCat);

      const title = (blog.title || '').toLowerCase();
      const excerpt = (blog.excerpt || '').toLowerCase();
      const keyword = (blog.keyword || '').toLowerCase();

      const matchesSearch =
        !q ||
        title.includes(q) ||
        excerpt.includes(q) ||
        keyword.includes(q) ||
        tags.some((t) => (t || '').toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE) || 1;
  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  // Generate pagination items
  const paginationRange = useMemo(() => {
    const delta = 2;
    const range: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }
    return range;
  }, [totalPages, currentPage]);

  return (
    <div className="space-y-12">
      {/* Search and Filters Section */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="w-5 h-5 text-[#9A481B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by topic, industry, keyword or question..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-[#F7F3ED] border border-[#E7E0D6] focus:border-[#9A481B] focus:ring-2 focus:ring-[#9A481B]/20 rounded-2xl pl-12 pr-4 py-4 text-stone-900 placeholder:text-stone-400 text-sm sm:text-base outline-none shadow-sm transition"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700 bg-stone-200 hover:bg-stone-300 px-2 py-1 rounded-md transition"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#9A481B]" />
            <span>Category:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#9A481B] text-white shadow-md'
                    : 'bg-[#F7F3ED] text-stone-600 hover:bg-[#EBE4D8] hover:text-stone-900 border border-[#E7E0D6]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium px-1">
          <div>
            Showing <span className="font-bold text-stone-800">{filteredBlogs.length}</span> growth playbooks & articles
            {selectedCategory !== 'All' && <span> in <strong className="text-[#9A481B]">{selectedCategory}</strong></span>}
            {searchQuery && <span> matching &ldquo;<strong className="text-stone-800">{searchQuery}</strong>&rdquo;</span>}
          </div>
          <div>
            Page <span className="font-bold text-stone-800">{currentPage}</span> of <span className="font-bold text-stone-800">{totalPages}</span>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      {currentBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-[#F7F3ED] rounded-3xl overflow-hidden border border-[#E7E0D6] shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden bg-[#EBE4D8]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {post.featured && (
                  <span className="absolute top-3 left-3 bg-[#9A481B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                )}
              </div>

              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-500 flex-wrap">
                    <span className="text-[#9A481B] font-semibold">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-serif font-bold text-stone-900 group-hover:text-[#9A481B] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-semibold text-[#9A481B] group-hover:translate-x-1 transition-transform">
                  <span>Read Playbook</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#F7F3ED] rounded-3xl border border-[#E7E0D6] space-y-4">
          <BookOpen className="w-12 h-12 mx-auto text-stone-400" />
          <h3 className="text-xl font-serif font-bold text-stone-900">No articles found</h3>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            We couldn&apos;t find any articles matching your search criteria. Try using different keywords or selecting &ldquo;All&rdquo;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setCurrentPage(1);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#9A481B] text-white rounded-full text-xs font-bold hover:bg-[#7E3713] transition shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl border border-[#E7E0D6] bg-[#F7F3ED] text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EBE4D8] transition"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1">
            {paginationRange.map((page, idx) => {
              if (page === '...') {
                return (
                  <span key={`dots-${idx}`} className="px-2 text-stone-400 text-xs">
                    ...
                  </span>
                );
              }
              const pNum = Number(page);
              const isActive = currentPage === pNum;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(pNum)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#9A481B] text-white shadow-sm'
                      : 'border border-[#E7E0D6] bg-[#F7F3ED] text-stone-700 hover:bg-[#EBE4D8]'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl border border-[#E7E0D6] bg-[#F7F3ED] text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EBE4D8] transition"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
