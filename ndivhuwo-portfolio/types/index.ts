export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { _ref?: string; url?: string }; alt?: string };
  author?: { name: string };
  categories?: { title: string }[];
  publishedAt: string;
};
