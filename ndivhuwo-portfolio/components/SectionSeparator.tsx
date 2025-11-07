// components/SectionSeparator.tsx (Alternative Version)

import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline'; // Requires @heroicons/react

export default function SectionSeparator() {
  return (
    <div className="bg-background relative flex justify-center w-full max-w-7xl mx-auto my-8">
      {/* Subtle Gradient Line */}
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent dark:via-violet-700" />
      </div>
      
      {/* Central Icon Accent */}
      <div className="relative flex justify-center">
        <span className=" px-3 text-violet-500 rounded-full border border-violet-200 dark:border-violet-700">
          <SparklesIcon className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}