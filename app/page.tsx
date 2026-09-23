import React from 'react';
import { Hero } from '@/components/Hero';
import { BrandMarquee } from '@/components/BrandMarquee';
import { FoundersSpotlight } from '@/components/FoundersSpotlight';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { HomePortfolioPreview } from '@/components/HomePortfolioPreview';
import { IndustriesPreviewBanner } from '@/components/IndustriesPreviewBanner';
import { ProcessSection } from '@/components/ProcessSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogSection } from '@/components/BlogSection';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'BMA — Best Marketing Agency | Performance Marketing & Digital Growth',
  description: 'BMA is an elite performance marketing and digital growth agency specializing in paid acquisition, AI search optimization (GEO), and high-converting Next.js applications.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <FoundersSpotlight />
      <WhyChooseUsSection />
      <ServicesGrid />
      <HomePortfolioPreview />
      <IndustriesPreviewBanner />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaBanner />
    </>
  );
}
