import { fetchSanityData } from "@/sanity/lib/client";
import BlogContent from "./BlogContent";
import { Post } from "@/types";

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

  if (!posts) {
    return <div className="text-center py-20 text-muted-foreground">No posts found</div>;
  }

  return <BlogContent posts={posts} />;
}
