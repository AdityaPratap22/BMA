'use client';

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

export default function HomePage() {
  const [isStrategyModalOpen, setIsStrategyModalOpen] = React.useState(false);

  return (
    <>
      <Hero onOpenStrategy={() => setIsStrategyModalOpen(true)} />
      <BrandMarquee />
      <FoundersSpotlight />
      <WhyChooseUsSection />
      <ServicesGrid />
      <HomePortfolioPreview />
      <IndustriesPreviewBanner />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaBanner onOpenStrategy={() => setIsStrategyModalOpen(true)} />
    </>
  );
}
