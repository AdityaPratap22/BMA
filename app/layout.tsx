import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import React from 'react';
import AppClientProviders from './AppClientProviders';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BMA — Best Marketing Agency | Performance Marketing, SEO & Web Applications',
  description: 'BMA (Best Marketing Agency) is a leading digital growth agency specializing in Performance Marketing, Generative Engine Optimization (GEO/AEO), high-converting Next.js applications, and B2B growth funnels.',
  keywords: ['BMA', 'Best Marketing Agency', 'Performance Marketing', 'SEO Agency', 'GEO Optimization', 'Next.js Development', 'Social Media Marketing', 'Digital Growth'],
  authors: [{ name: 'BMA - Best Marketing Agency' }],
  openGraph: {
    title: 'BMA — Best Marketing Agency | Performance Marketing & Digital Growth',
    description: 'Scale your brand revenue with data-driven marketing, AI search optimization, and modern web applications.',
    url: 'https://bestmarketingagency.online',
    siteName: 'BMA - Best Marketing Agency',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-[#FDFBF7] text-stone-900 min-h-screen flex flex-col antialiased">
        <AppClientProviders>
          {children}
        </AppClientProviders>
      </body>
    </html>
  );
}
