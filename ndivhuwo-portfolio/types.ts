// src/types.ts

export type SanityImage = {
  asset: {
    url: string;
  };
  alt?: string;
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;           // ✅ string only
  mainImage: SanityImage;
  author: string;         // ✅ "author": author->name
  categories: string[];   // ✅ strings only
  publishedAt: string;
};

export type PostFull = {
  title: string;
  mainImage: SanityImage;
  author: string;
  publishedAt: string;
  body: any;
  categories: string[];
};
