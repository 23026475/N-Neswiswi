"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "C#",
    "Firebase",
    "REST APIs",
  ];

  const experiences = [
    {
      title: "Personal Portfolio Project",
      description:
        "Built a fully responsive portfolio using Next.js, Tailwind, and Framer Motion animations.",
      link: "/projects",
    },
    {
      title: "Mini CRM App",
      description:
        "Created a CRUD web app using React and Firebase, practicing real-time database and auth.",
      link: "/projects",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-16 max-w-5xl mx-auto flex flex-col gap-16">
      
      {/* Hero / Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">About Me</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hi, I’m Ndivhuwo, a junior software developer passionate about building web apps, learning modern tech, and constantly improving my craft.
        </p>
      </motion.div>

      <Separator />

      {/* Background / Story */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold">My Journey</h2>
        <p className="text-muted-foreground">
          I started coding because I love solving problems and creating things that people can interact with. I’ve been learning web development, focusing on front-end technologies and gradually moving to full-stack projects. I enjoy experimenting with modern frameworks and building projects that challenge me.
        </p>
      </motion.div>

      <Separator />

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold">Skills & Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <Separator />

      {/* Experience / Projects Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <h2 className="text-2xl font-semibold">Projects & Experience</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((exp) => (
            <Card key={exp.title} className="p-4 hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
                <Button variant="link" className="mt-2 p-0" asChild>
                  <a href={exp.link}>View Project →</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <Separator />

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Want to Connect?</h2>
        <p className="text-muted-foreground mb-4">
          If you’d like to collaborate, chat, or discuss opportunities, feel free to reach out!
        </p>
        <Button asChild>
          <a href="/contact">Contact Me</a>
        </Button>
      </motion.div>
    </section>
  );
}
