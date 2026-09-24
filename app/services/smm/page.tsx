import React from 'react';
import { SmmServiceView } from '@/components/SmmServiceView';

export const metadata = {
  title: 'Social Media Marketing (SMM) Packages & Pricing | BMA — Best Marketing Agency',
  description: 'Full-funnel organic and paid social media management for Instagram, LinkedIn, YouTube, and Facebook with packages from ₹5,999/mo.',
  alternates: {
    canonical: 'https://bestmarketingagency.online/services/smm',
  },
};

export default function SmmPage() {
  return <SmmServiceView />;
}
