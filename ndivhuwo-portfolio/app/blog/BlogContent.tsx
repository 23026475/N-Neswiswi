"use client";

import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types";

type Props = {
  posts: Post[];
};

export default function BlogContent({ posts }: Props) {
  return (
    <section className="px-4 sm:px-8 py-16 max-w-5xl mx-auto flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Read my latest posts, tutorials, and project updates.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).height(300).url()}
                alt={post.mainImage.alt || post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-muted-foreground">
                By {post.author?.name || "Unknown"} |{" "}
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.categories?.map((cat) => (
                  <span
                    key={cat.title}
                    className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
              <a
                href={`/blog/${post.slug.current}`}
                className="mt-2 text-sm text-primary font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
