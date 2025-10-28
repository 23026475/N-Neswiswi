import { groq } from "next-sanity";
import { fetchSanityData } from "@/sanity/lib/client";
import PostContent from "./PostContent";

type PostProps = {
  params: { slug: string };
};

type Post = {
  title: string;
  mainImage: { asset: { url: string }; alt: string };
  author: string;
  publishedAt: string;
  body: any;
  categories: string[];
};

const query = groq`
*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage{ asset->{url}, alt },
  "author": author->name,
  publishedAt,
  body,
  categories[]->title
}
`;

export default async function PostPage({ params }: PostProps) {
  const post: Post | null = await fetchSanityData<Post>(query.replace("$slug", `"${params.slug}"`));

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <section className="px-4 sm:px-8 py-16 max-w-3xl mx-auto">
      <PostContent
        title={post.title}
        mainImage={post.mainImage}
        author={post.author}
        publishedAt={post.publishedAt}
        body={post.body}
        categories={post.categories}
      />
    </section>
  );
}
