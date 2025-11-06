import { groq } from "next-sanity";
import { fetchSanityData } from "@/sanity/lib/client";
import BlogContent from "./BlogContent";
import { PostListItem } from "@/types";

export default async function BlogPage() {
  const query = groq`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      mainImage{ asset->{url}, alt },
      "author": author->name,
      "categories": categories[]->title,
      publishedAt
    }
  `;

  const posts = await fetchSanityData<PostListItem[]>(query);

  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <section>
      <BlogContent posts={posts} />
    </section>
  );
}
