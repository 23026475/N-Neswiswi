"use client";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      <section>
        <AboutMe/>
      </section>
      {/* Placeholder for future sections */}
      {/* <section id="projects"><Projects /></section> */}
      {/* <section id="contact"><Contact /></section> */}
    </main>
  );
}
