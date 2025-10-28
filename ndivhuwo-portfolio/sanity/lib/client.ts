// client.ts
const projectId = "rwizuy4v";
const dataset = "growthblog";
const apiVersion = "v2025-10-28";

/**
 * Reusable function to fetch data from Sanity
 * @param groqQuery - The GROQ query string
 */
export async function fetchSanityData<T = any>(groqQuery: string): Promise<T | null> {
  try {
    const encodedQuery = encodeURIComponent(groqQuery);
    const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Sanity fetch error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching Sanity data:", error);
    return null;
  }
}