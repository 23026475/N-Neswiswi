import { ScrollArea } from "@/components/ui/scroll-area";

const techFilters = ["All", "Web APIs", "Fullstack", "C#", "Next.js", "React", "Tailwind"];

export default function ProjectFilters({ selected, setSelected }) {
  return (
    <ScrollArea className="py-2">
      <div className="flex gap-2">
        {techFilters.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelected(tech)}
            className={`px-3 py-1 rounded-full text-sm font-medium border ${
              selected === tech ? "bg-primary text-background" : "border-muted hover:bg-muted/10"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
