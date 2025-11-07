import { fetchSanityData } from "@/sanity/lib/client";

export interface Project {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  shortDescription?: string;
  tech?: string[];
  type?: string;
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
}

export async function fetchProjects(): Promise<Project[]> {
  const query = `
    *[_type == "project"] | order(_createdAt desc){
      _id,
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      shortDescription,
      tech,
      type,
      demoLink,
      githubLink,
      featured
    }
  `;

  // Tell TS that fetchSanityData will return Project[]
  const data = await fetchSanityData<Project[]>(query);

  return data ?? [];
}
