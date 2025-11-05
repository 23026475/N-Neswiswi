"use client";

import HeroSection from "@/components/Hero";
import SkillsPreview from "@/components/SkillsPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import TimelinePreview from "@/components/TimelinePreview";
import WorkPhilosophyPreview from "@/components/WorkPhilosophyPreview";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Frontend Engineer",
    company: "TechCorp",
    quote: "Working with Ndivhuwo was a pleasure — super professional and detail-oriented!",
    avatar: "/media/avatars/alice.jpg",
  },
  {
    name: "Bob Smith",
    role: "Product Manager",
    company: "Innova",
    quote: "Delivered high-quality work on tight deadlines. Highly recommend!",
  },
  {
    name: "Carla Ruiz",
    role: "Designer",
    quote: "Creative, reliable, and a great team player. Loved collaborating!",
  },
];

export default function HomePage() {
  return (
    <main className="relative bg-background">
      {/* Hero Section: Full width, no padding */}
      <HeroSection />

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-24">
        {/* Skills / What I Build */}
        <SkillsPreview />

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Timeline / Experience Snapshot */}
        <TimelinePreview />

        {/* Work Philosophy / Vision Intro */}
        <WorkPhilosophyPreview />

        {/* Testimonials / Client Feedback */}
        <TestimonialsSlider testimonials={testimonials} />
      </div>
  
    </main>
  );
}
