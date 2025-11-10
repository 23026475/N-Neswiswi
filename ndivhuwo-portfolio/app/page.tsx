import HeroSection from "@/components/Hero";
import SkillsPreview from "@/components/SkillsPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import SectionWrapper from "@/components/SectionWrapper";
import SectionSeparator from "@/components/SectionSeparator"; 
import { fetchFeaturedProjects } from "@/sanity/lib/sanityClient";

export default async function HomePage() {
  const projects = await fetchFeaturedProjects();

  return (
    <main className="relative bg-background text-gray-900 dark:text-white">

      {/* 1. Hero Section */}
      <section id="hero" className="scroll-mt-16">
        <HeroSection /> 
      </section>

      <SectionSeparator /> 

      {/* 2. Skills Section */}
      <section id="skills" className="mx-auto max-w-7xl px-4 py-8 scroll-mt-16">
        <SkillsPreview />
      </section>

      <SectionSeparator /> 

      {/* 3. Projects Section */}
      <section id="projects" className="pt-8 scroll-mt-16">
        <SectionWrapper
          title="Featured Projects"
          subtitle="Here are some projects I'm currently working on or proud of"
        >
          <FeaturedProjects projects={projects} />
        </SectionWrapper>
      </section>

    </main>
  );
}
