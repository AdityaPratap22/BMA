import React from 'react';
import type { Metadata } from 'next';
import { SmmServiceView } from '@/components/SmmServiceView';

export const metadata: Metadata = {
  title: 'Social Media Marketing (SMM) Packages & Pricing | BMA — Best Marketing Agency',
  description: 'Scalable social media marketing packages, viral reels production, creator management, and transparent month-to-month pricing with zero retainer lock-in.',
  alternates: {
    canonical: 'https://bestmarketingagency.online/smm',
  },
  openGraph: {
    title: 'Social Media Marketing (SMM) Packages & Pricing | BMA — Best Marketing Agency',
    description: 'Scalable social media marketing packages, viral reels production, creator management, and transparent month-to-month pricing with zero retainer lock-in.',
    url: 'https://bestmarketingagency.online/smm',
    siteName: 'BMA — Best Marketing Agency',
    type: 'website',
  },
};

export default function SmmPage() {
  return <SmmServiceView />;
}
