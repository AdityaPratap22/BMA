import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-4 px-4">
      <div className="font-serif text-6xl font-bold text-terracotta-600">404</div>
      <h1 className="text-3xl font-serif font-bold text-stone-900">Page Not Found</h1>
      <p className="text-stone-600 text-sm max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-terracotta-600 text-white rounded-full text-sm font-semibold hover:bg-terracotta-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
