"use client";

import HeroSection from "@/components/Hero";
import SkillsPreview from "@/components/SkillsPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import MiniStats from "@/components/MiniStats";


export default function HomePage() {
  return (
    <main className="relative bg-background">
      {/* Hero Section: Full width, no padding */}
      <HeroSection />

      {/* Main content container */}
      <div className="mx-auto">
        {/* Skills / What I Build */}
        <SkillsPreview />

        {/* Featured Projects */}
        <FeaturedProjects />
      </div>
  
    </main>
  );
}
