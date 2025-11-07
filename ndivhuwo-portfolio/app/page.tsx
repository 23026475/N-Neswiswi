// app/page.tsx (server component)

import HeroSection from "@/components/Hero";
import SkillsPreview from "@/components/SkillsPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import SectionWrapper from "@/components/SectionWrapper";
// 💡 NEW: Import the separator component
import SectionSeparator from "@/components/SectionSeparator"; 
import { fetchFeaturedProjects } from "@/sanity/lib/sanityClient";

export default async function HomePage() {
  const projects = await fetchFeaturedProjects();

  return (
    // 💡 IMPROVEMENT: Set a text color and ensure the background is solid for a clean base
    <main className="relative bg-background text-gray-900  dark:text-white">
      
      {/* 1. Hero Section */}
      <HeroSection /> 

      {/* --- Second Separator --- */}
      <SectionSeparator /> 
  
      {/* 2. Skills / What I Build */}
      <div className="mx-auto max-w-7xl px-4 py-8"> 
        <SkillsPreview />
      </div>

      {/* --- Second Separator --- */}
      <SectionSeparator /> 
      <div> 
        <SectionWrapper
          title="Featured Projects"
          subtitle="Here are some projects I'm currently working on or proud of"
        >
          {/* Note: The FeaturedProjects component likely has its own max-width */}
          <FeaturedProjects projects={projects} />
        </SectionWrapper>
      </div>
      {/* --- Second Separator --- */}
      <SectionSeparator /> 
      
    </main>
  );
}