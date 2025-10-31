import { NextResponse } from "next/server";
import { fetchSanityData } from "@/sanity/lib/sanityClient";

export async function GET() {
  try {
    const query = `*[_type == "project"] | order(_createdAt desc){
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
    }`;

    const data = await fetchSanityData(query);

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("Error fetching projects from Sanity:", error);
    return NextResponse.json([], { status: 500 });
  }
}
