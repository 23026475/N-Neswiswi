import AboutHero from "@/components/AboutHero";
import AboutSkills from "@/components/AboutSkills";
import Timeline from "@/components/Timeline";
import WorkPhilosophy from "@/components/WorkPhilosophy";

export default function AboutPage() {
  return (
    <main className="relative bg-gray-50 dark:bg-gray-900 before:absolute before:inset-0 before:bg-[url('/pattern.svg')] before:opacity-5 before:-z-10">
      
      {/* Hero Full Width */}
      <AboutHero />

      {/* Sections Wrapper */}
      <div className="flex flex-col gap-20 md:gap-24 max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="w-full bg-background/80 dark:bg-gray-900/70 rounded-3xl shadow-lg dark:shadow-md p-8 md:p-12">
          <AboutSkills />
        </div>

        <div className="w-full bg-background/80 dark:bg-gray-900/70 rounded-3xl shadow-lg dark:shadow-md p-8 md:p-12">
          <Timeline />
        </div>

        <div className="w-full bg-background/80 dark:bg-gray-900/70 rounded-3xl shadow-lg dark:shadow-md p-8 md:p-12">
          <WorkPhilosophy />
        </div>

      </div>
    </main>
  );
}
