"use client";

import { PostListItem } from "@/types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

type Props = {
  posts: PostListItem[];
};

export default function BlogContent({ posts }: Props) {
  return (
    <section className="px-4 sm:px-8 py-24 bg-white dark:bg-gray-950">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Developer Insights & Articles
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-3">
          My thoughts on technology, development, and career growth.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {posts.map((post) => (
          <Link 
            key={post._id} 
            href={`/blog/${post.slug}`}
            className="block group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-violet-500/30 dark:hover:shadow-violet-700/50"
          >
            {/* Image */}
            {post.mainImage && (
              <div className="w-full h-56 md:h-64 lg:h-52 overflow-hidden">
                <img
                  src={urlFor(post.mainImage).width(600).height(300).url()}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {post.title}
              </h2>

              {/* Metadata */}
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-violet-500"/> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-violet-500"/> {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mt-4">
                {post.categories.map((cat: string) => (
                  <span 
                    key={cat}
                    className="px-3 py-1 bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300 rounded-full text-xs font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                <span className="flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 font-semibold transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"/>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
