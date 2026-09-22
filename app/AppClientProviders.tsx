'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import { StrategyModal } from '@/components/StrategyModal';

export default function AppClientProviders({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);

  return (
    <>
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStrategy={() => setIsStrategyOpen(true)}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />

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
