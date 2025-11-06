"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PostFull } from "@/types";

export default function PostContent({
  title,
  mainImage,
  author,
  publishedAt,
  body,
  categories,
}: PostFull) {
  return (
    <article className="flex flex-col gap-12 max-w-4xl mx-auto px-4 sm:px-8">

      

      {/* Portable Text / Body */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 mt-8
                   prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-10 prose-h2:text-violet-600 dark:prose-h2:text-violet-400
                   prose-p:leading-relaxed prose-li:marker:text-violet-500"
      >
        <PortableText value={body} />
      </div>
    </article>
  );
}
