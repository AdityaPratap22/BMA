import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-terracotta-200 border-t-terracotta-600 rounded-full animate-spin" />
      <span className="font-serif font-semibold text-stone-600 text-sm animate-pulse">
        Loading BMA...
      </span>
    </div>
  );
}
