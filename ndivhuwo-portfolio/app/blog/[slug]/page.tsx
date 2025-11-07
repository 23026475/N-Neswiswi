// @/app/blog/[slug]/page.tsx

import { groq } from "next-sanity";
import { fetchSanityData } from "@/sanity/lib/client";
import PostContent from "./PostContent";
import PostNavigation from "./PostNavigation";
import { PostFull } from "@/types";
import Image from "next/image";
import { format } from "date-fns"; 
import { Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

// GROQ query with prevSlug & nextSlug
const query = groq`
*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage{ asset->{url}, alt },
  "author": author->name,
  publishedAt,
  body,
  "categories": categories[]->title,
  "prevSlug": *[_type=="post" && publishedAt < ^.publishedAt] | order(publishedAt desc)[0].slug.current,
  "nextSlug": *[_type=="post" && publishedAt > ^.publishedAt] | order(publishedAt asc)[0].slug.current
}
`;

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const post = await fetchSanityData<PostFull>(query, { slug });

  if (!post) {
    return (
      <div className="text-center py-20 text-xl text-primary">
        Post not found
        {/* Back to Blog */}
      <Link
        href="/blog"
        className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ChevronLeft className="w-4 h-4 border-primary border-4xl bg-background" /> Back to Blog
      </Link>
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-900 min-h-screen">

      {/* --- HERO / INTRO SECTION --- */}
      <section className="relative w-full overflow-hidden pt-24 pb-12 dark:bg-gray-950">

        {/* Background Image / Blur */}
        {post.mainImage?.asset?.url && (
          <div className="absolute inset-0 opacity-10 blur-xl scale-110 pointer-events-none">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary mb-6">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            {post.author && (
              <span className="flex items-center gap-2 font-medium">
                <User className="w-4 h-4 text-violet-500" /> By {post.author}
              </span>
            )}
            {post.publishedAt && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-violet-500" /> 
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </span>
            )}
          </div>

          {/* Categories */}
          {post.categories?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {post.categories.map((cat, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300"
                >
                  <Tag className="w-3 h-3" /> {cat}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage?.asset?.url && (
        <div className="max-w-4xl mx-auto px-4 sm:px-8 mt-[-3rem] mb-12 relative z-10">
          <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        </div>
      )}

      {/* --- POST CONTENT --- */}
      <section className="px-4 sm:px-8 max-w-3xl mx-auto pb-8">
        <PostContent {...post} />
      </section>

      {/* --- NAVIGATION BUTTONS --- */}
      <PostNavigation prevSlug={post.prevSlug} nextSlug={post.nextSlug} />

    </div>
  );
}
