import { fetchSanityData } from "@/sanity/lib/client";
import BlogContent from "./BlogContent";
import { Post } from "@/types";
import SubtleBackground from "@/components/SubtleBackground";

export default async function BlogPage() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    mainImage,
    author->{name},
    categories[]->{title},
    publishedAt
  }`;

  const posts: Post[] | null = await fetchSanityData<Post[]>(query);

  if (!posts || posts.length === 0) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <SubtleBackground />
        <p className="relative z-10 text-gray-700 dark:text-gray-300 text-center text-lg">
          No blog posts found.
        </p>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen px-6 md:px-12 py-12 flex flex-col gap-12">
      {/* Subtle animated background */}
      <SubtleBackground />

      {/* Intro Text */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to My Blog
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Explore my latest insights, tutorials, and updates on web development, design, and technology.
        </p>
      </div>

      {/* Blog posts */}
      <div className="relative z-10">
        <BlogContent posts={posts} />
      </div>
    </section>
  );
}
