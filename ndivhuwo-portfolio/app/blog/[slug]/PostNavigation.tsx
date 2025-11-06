"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

type NavigationProps = {
  prevSlug?: string;
  nextSlug?: string;
};

export default function PostNavigation({ prevSlug, nextSlug }: NavigationProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 mt-12 mb-20 flex flex-col md:flex-row justify-between items-center gap-4">
      
      {/* Back to Blog */}
      <Link
        href="/blog"
        className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
      >
        <ChevronLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <div className="flex gap-4">
        {/* Previous Post */}
        {prevSlug && (
          <Link
            href={`/blog/${prevSlug}`}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </Link>
        )}

        {/* Next Post */}
        {nextSlug && (
          <Link
            href={`/blog/${nextSlug}`}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
