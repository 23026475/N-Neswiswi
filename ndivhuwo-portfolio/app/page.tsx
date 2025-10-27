import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="container mx-auto p-4">
        <Navbar/>
        <Hero/>
      </main>
    </div>
  );
}
