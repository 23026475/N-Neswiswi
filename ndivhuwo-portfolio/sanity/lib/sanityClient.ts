import { createClient } from "next-sanity";

const client = createClient({
  projectId: "rwizuy4v",      // your Sanity project ID
  dataset: "growthblog",      // your dataset
  apiVersion: "2025-10-28",   // use current date or version
  useCdn: true,               // `false` if you want fresh data always
});

export async function fetchSanityData(query: string) {
  try {
    const data = await client.fetch(query);
    console.log("✅ Sanity raw data:", data);
    return data;
  } catch (err) {
    console.error("Error fetching Sanity data:", err);
    return null;
  }
}
