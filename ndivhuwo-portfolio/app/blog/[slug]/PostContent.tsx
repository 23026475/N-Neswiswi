"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  title: string;
  mainImage: { asset: { url: string }; alt: string };
  author: string;
  publishedAt: string;
  body: any;
  categories: string[];
};

export default function PostContent({ title, mainImage, author, publishedAt, body, categories }: Props) {
  return (
    <article className="flex flex-col gap-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold"
      >
        {title}
      </motion.h1>

      <p className="text-sm text-muted-foreground">
        By {author} | {new Date(publishedAt).toLocaleDateString()}
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-64 w-full rounded-lg overflow-hidden"
      >
        <Image
          src={mainImage.asset.url}
          alt={mainImage.alt || title}
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="prose max-w-none">
        <PortableText value={body} />
      </div>
    </article>
  );
}
