'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import { StrategyModal } from '@/components/StrategyModal';
import { FloatingSocialButtons } from '@/components/FloatingSocialButtons';

export default function AppClientProviders({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);

  return (
    <>
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStrategy={() => window.open('https://wa.me/918586989832?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20marketing%20strategy', '_blank')}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />

      {/* Floating Bottom-Left Action Buttons */}
      <FloatingSocialButtons />

      {/* Global Modals */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <StrategyModal
        isOpen={isStrategyOpen}
        onClose={() => setIsStrategyOpen(false)}
      />
    </>
  );
}
