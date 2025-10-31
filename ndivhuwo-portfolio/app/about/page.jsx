"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import SubtleBackground from "@/components/SubtleBackground";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Cloud,
  AppWindow,
  Globe,
  FileCode2,
  Server,
  Atom,
  Layers,
  Cpu,
  Workflow,
  ShieldCheck,
  ChartPie,
  GitBranch 
} from "lucide-react";
import meCir from "@/public/media/murals/me.jpeg";
import Timeline from "@/components/Timeline";

// Certification Images
import az900Img from "@/public/media/certs/az900.png";
import ai900Img from "@/public/media/certs/ai900.png";
import pl900Img from "@/public/media/certs/pl900.png";
import sc900Img from "@/public/media/certs/sc900.png";

export default function AboutPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", icon: <Code2 className="text-violet-500" /> },
        { name: "JavaScript", icon: <FileCode2 className="text-yellow-400" /> },
        { name: "Java", icon: <Cpu className="text-orange-500" /> },
        { name: "SQL", icon: <Database className="text-blue-500" /> },
        { name: "NoSQL", icon: <Database className="text-green-500" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: ".NET Framework", icon: <Layers className="text-blue-600" /> },
        { name: "React", icon: <Atom className="text-cyan-400" /> },
        { name: "Vue", icon: <Atom className="text-green-400" /> },
        { name: "Next.js", icon: <Globe className="text-gray-500" /> },
        { name: "Tailwind CSS", icon: <Globe className="text-sky-400" /> },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "SQL Server", icon: <Database className="text-red-500" /> },
        { name: "MariaDB", icon: <Database className="text-blue-400" /> },
        { name: "Cosmos DB", icon: <Database className="text-purple-500" /> },
        { name: "Azure Cloud", icon: <Cloud className="text-sky-500" /> },
        { name: "GitHub", icon: <GitBranch className="text-gray-700" /> },
      ],
    },
    {
      title: "Microsoft Power Platform",
      skills: [
        { name: "Power Apps", icon: <AppWindow className="text-purple-600" /> },
        { name: "Power Automate", icon: <Workflow className="text-blue-400" /> },
        { name: "Power BI (Fundamentals)", icon: <ChartPie className="text-yellow-500" /> },
        { name: "MS 365 Integration", icon: <Globe className="text-blue-500" /> },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Web APIs", icon: <Server className="text-cyan-600" /> },
        { name: "Agile & Scrum", icon: <Layers className="text-emerald-500" /> },
        { name: "UI/UX Principles", icon: <AppWindow className="text-pink-500" /> },
        { name: "Data Modeling", icon: <Database className="text-indigo-500" /> },
        { name: "Security & Compliance", icon: <ShieldCheck className="text-rose-500" /> },
      ],
    },
  ];

  const certifications = [
    { name: "AZ-900 Azure Fundamentals", img: az900Img },
    { name: "AI-900 AI Fundamentals", img: ai900Img },
    { name: "PL-900 Power Platform Fundamentals", img: pl900Img },
    { name: "SC-900 Security, Compliance & Identity Fundamentals", img: sc900Img },
  ];

  return (
    <main className="px-6 md:px-10 py-24 max-w-6xl mx-auto space-y-24">
      {/* ================= HERO SECTION ================= */}
      <section className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src={meCir}
                alt="Ndivhuwo Neswiswi"
                width={160}
                height={160}
                className="rounded-full shadow-2xl ring-4 ring-primary/20"
              />
            </motion.div>
          </div>

        {/* Subtle Background */}
        <SubtleBackground />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-6">
            Hi, I’m <span className="text-primary">Ndivhuwo Neswiswi</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate <strong>System Developer</strong> on a journey to become a
            full-fledged <strong>Software Developer</strong> — crafting digital
            solutions that are practical, scalable, and human-centered.
          </p>

          <p className="text-base italic text-muted-foreground">
            “Every line of code tells a story — mine is one of growth, creativity, and impact.”
          </p>
        </motion.div>
      </section>

      <Separator className="my-10" />

      {/* ================= JOURNEY / TIMELINE ================= */}
      <section className="space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center tracking-tight"
        >
          My Journey So Far
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed"
        >
          From high school science fairs to building intelligent systems — my
          journey reflects a consistent drive to learn, create, and grow. Here’s
          a glimpse of where I’ve been and where I’m going:
        </motion.p>

        <Timeline />
      </section>

      <Separator className="my-10" />

      {/* ================= SKILLS ================= */}
      <section className="space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center tracking-tight"
        >
          My Skills & Tools
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-primary text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, j) => (
                  <Card
                    key={j}
                    className="border-primary/20 hover:shadow-md transition rounded-xl"
                  >
                    <CardContent className="p-5 flex flex-col items-center gap-2">
                      <div className="text-2xl">{skill.icon}</div>
                      <p className="text-sm font-medium">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* ================= CERTIFICATIONS ================= */}
      <section className="text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold tracking-tight"
        >
          Certifications 🎓
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Certified across multiple Microsoft Fundamentals, showcasing my
          commitment to mastering the cloud and Power Platform ecosystems.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-primary/20 hover:shadow-lg transition rounded-xl">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Image
                    src={cert.img}
                    alt={cert.name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <p className="text-sm font-medium text-center leading-snug">
                    {cert.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* ================= FUTURE ================= */}
      <section className="text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold tracking-tight"
        >
          Looking Ahead 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          My mission is to grow into a Software Developer who builds technology
          that simplifies life, empowers communities, and creates opportunities.
          I’m driven by curiosity, collaboration, and the belief that
          technology’s purpose is to make people’s lives better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6"
        >
          <a
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition"
          >
            Let’s Connect
          </a>
        </motion.div>
      </section>
    </main>
  );
}
