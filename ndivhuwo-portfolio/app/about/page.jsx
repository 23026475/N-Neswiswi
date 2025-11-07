import AboutHero from "@/components/AboutHero";
import AboutSkills from "@/components/AboutSkills";
import Timeline from "@/components/Timeline";
import WorkPhilosophy from "@/components/WorkPhilosophy";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
    return (
        <main className="relative bg-background overflow-hidden">

            {/* --- 1. Hero Section (Full Width) --- */}
            <AboutHero />

            {/* --- 2. Main Content Wrapper (Fixed Width, Clean, Responsive) --- */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-20">

                {/* --- 2.1 Skills Section --- */}
                <div
                    className="
                        p-8 md:p-12 lg:p-16 rounded-3xl 
                        bg-background 
                        border border-primary/20 
                        shadow-xl 
                        transition-all
                    "
                >
                    <AboutSkills />
                </div>

                {/* --- SEPARATOR 1 --- */}
                <div className="flex justify-center">
                    <Separator className="w-1/2 md:w-1/3 bg-primary/30 h-0.5" />
                </div>

                {/* --- 2.2 Timeline Section --- */}
                <div
                    className="
                        p-8 md:p-12 lg:p-16 rounded-3xl 
                        bg-background 
                        border border-primary/20 
                        shadow-xl 
                        transition-all
                    "
                >
                    <Timeline />
                </div>

                {/* --- SEPARATOR 2 --- */}
                <div className="flex justify-center">
                    <Separator className="w-1/2 md:w-1/3 bg-primary/30 h-0.5" />
                </div>

                {/* --- 2.3 Work Philosophy Section --- */}
                <div
                    className="
                        p-8 md:p-12 lg:p-16 rounded-3xl 
                        bg-background 
                        border border-primary/20 
                        shadow-xl 
                        transition-all
                    "
                >
                    <WorkPhilosophy />
                </div>
            </div>
        </main>
    );
}
