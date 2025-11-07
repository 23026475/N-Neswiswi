import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "rwizuy4v",
  dataset: "growthblog",
  apiVersion: "2025-10-28",
  useCdn: true,
});
export async function fetchFeaturedProjects() {
  const query = `
    *[_type == "project" && featured == true]{
      _id,
      title,
      shortDescription,
      "thumbnail": thumbnail.asset->url,
      demoUrl,
      githubUrl
    }
  `;
  try {
    return await client.fetch(query);
  } catch (err) {
    console.error("Sanity fetch error:", err);
    return [];
  }
}

export async function fetchSanityData<T>(
  query: string,
  params: Record<string, any> = {}
): Promise<T | null> {
  try {
    const data = await client.fetch<T>(query, params);
    return data;
  } catch (err) {
    console.error("Sanity fetch error:", err);
    return null;
  }
}
