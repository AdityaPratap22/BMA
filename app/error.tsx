'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4 px-4">
      <h2 className="text-3xl font-serif font-bold text-stone-900">Something went wrong</h2>
      <p className="text-stone-600 text-sm max-w-md">
        We encountered an error loading this page. Please try resetting or return to the homepage.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-terracotta-600 text-white rounded-full text-sm font-semibold hover:bg-terracotta-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
