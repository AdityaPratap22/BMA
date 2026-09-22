'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "BMA transformed our digital presence and helped us achieve results we never thought possible. Their team is proactive, creative and result-driven.",
      author: "Rohit Sharma",
      role: "Founder",
      company: "UrbanFit",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Our organic traffic scaled from 40k to over 450k visitors/month with their Generative Engine Optimization strategy. Phenomenal ROI!",
      author: "Ananya Deshmukh",
      role: "CEO",
      company: "Botanica Organics",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The lead quality from their performance marketing campaigns is unmatched. We hit 5.8x ROAS within our first 90 days of onboarding.",
      author: "Vikram Malhotra",
      role: "Growth Director",
      company: "UrbanStyle",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section className="py-16 bg-[#FDFBF7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3ED] rounded-3xl p-8 sm:p-12 border border-[#E7E0D6] shadow-warm-sm relative">
          
          <div className="flex items-center justify-between gap-6">
            
            {/* Left Nav Button */}
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#8B4513] hover:border-[#8B4513] transition-colors shadow-warm-sm shrink-0"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonial Grid Content */}
            <div className="flex-1 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Quote */}
              <div className="md:col-span-8 flex items-start gap-4">
                <span className="font-serif text-6xl leading-none text-[#9A481B]/40 select-none">
                  “
                </span>
                <p className="text-base sm:text-xl font-serif text-stone-800 leading-relaxed font-normal">
                  {active.quote}
                </p>
              </div>

              {/* Right Author Badge */}
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-2 border-t md:border-t-0 md:border-l border-stone-300/60 pt-4 md:pt-0 md:pl-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#8B4513] shadow-md">
                  <Image
                    src={active.avatar}
                    alt={active.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-stone-900">{active.author}</h4>
                  <p className="text-xs text-stone-500 font-medium">{active.role}, {active.company}</p>
                </div>

                {/* Golden Stars */}
                <div className="flex items-center gap-1 text-amber-600 pt-0.5">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                  ))}
                </div>
              </div>

            </div>

            {/* Right Nav Button */}
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#8B4513] hover:border-[#8B4513] transition-colors shadow-warm-sm shrink-0"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
