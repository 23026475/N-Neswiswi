import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function ProjectCard({ title, description, image, tech, demoLink, githubLink }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <img src={image} alt={title} className="h-48 w-full object-cover rounded-t-lg" />
          <CardContent className="p-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex flex-col gap-2">
          <p className="text-sm">{description}</p>
          <div className="flex flex-wrap gap-1">
            {tech.map((t) => (
              <span key={t} className="text-xs bg-muted rounded-full px-2 py-1">{t}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            {demoLink && <a href={demoLink} target="_blank" className="text-primary hover:underline">Demo</a>}
            {githubLink && <a href={githubLink} target="_blank" className="text-primary hover:underline">GitHub</a>}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
