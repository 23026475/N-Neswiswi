import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <SideNav />
      <section id="hero"><Hero /></section>
      {/* Later we’ll add <Projects /> and <Contact /> */}
    </main>
  );
}
