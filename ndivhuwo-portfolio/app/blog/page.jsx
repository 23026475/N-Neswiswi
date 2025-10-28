"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const posts = [
    {
      title: "Getting Started with Next.js",
      excerpt: "A beginner-friendly guide to building modern web apps with Next.js.",
      date: "2025-10-28",
      link: "/blog/nextjs-intro",
    },
    {
      title: "How I Built My Portfolio",
      excerpt: "Step by step process of designing and developing my personal portfolio.",
      date: "2025-10-15",
      link: "/blog/portfolio-story",
    },
    {
      title: "Understanding Framer Motion",
      excerpt: "Learn how to animate your React apps with Framer Motion.",
      date: "2025-10-10",
      link: "/blog/framer-motion-guide",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-16 max-w-5xl mx-auto flex flex-col gap-16">
      
      {/* Hero / Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">My Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I write about web development, coding tips, and projects I build along the way.
        </p>
      </motion.div>

      <Separator />

      {/* Blog posts */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Card
              key={post.title}
              className="p-4 hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <Button variant="link" className="mt-2 p-0" asChild>
                  <a href={post.link}>Read More →</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <Separator />

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Enjoyed my posts?</h2>
        <p className="text-muted-foreground mb-4">
          Connect with me or subscribe for updates on new posts.
        </p>
        <Button asChild>
          <a href="/contact">Contact Me</a>
        </Button>
      </motion.div>
    </section>
  );
}
