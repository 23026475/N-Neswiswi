"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// Icons
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiFigma,
  SiFramer,
  SiSupabase,
  SiJira,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaVuejs } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";

import d365Icon from "@/public/media/icons/d365.jpg";
import powerAppsIcon from "@/public/media/icons/powerappsIcon.jpg";
import powerAutoIcon from "@/public/media/icons/powerautoIcon.jpg";
import powerBIIcon from "@/public/media/icons/PowerbiIcon.jpg";

// ================= TECH STACK =================
const techStack = [
  { name: "C#", icon: <TbBrandCSharp className="text-violet-500 text-3xl" /> },
  { name: ".NET", icon: <TbBrandCSharp className="text-violet-500 text-3xl" /> },
  { name: "Java", icon: <FaJava className="text-orange-500 text-3xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-700 text-3xl" /> },
  { name: "Vue", icon: <FaVuejs className="text-green-500 text-3xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-3xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
  { name: "Supabase", icon: <SiSupabase className="text-emerald-500 text-3xl" /> },
  { name: "Power Apps", icon: <Image src={powerAppsIcon} alt="PA" width={30} height={30} /> },
  { name: "Power Automate", icon: <Image src={powerAutoIcon} alt="PAuto" width={30} height={30} /> },
  { name: "Power BI", icon: <Image src={powerBIIcon} alt="PBI" width={30} height={30} /> },
  { name: "Dynamics 365", icon: <Image src={d365Icon} alt="D365" width={30} height={30} /> },
  { name: "Azure", icon: <VscAzure className="text-sky-500 text-3xl" /> },
  { name: "Jira", icon: <SiJira className="text-blue-500 text-3xl" /> },
];

// ================= SOFT SKILLS =================
const softSkills = [
  "Problem Solving",
  "Collaboration",
  "Communication",
  "Adaptability",
  "Attention to Detail",
  "Time Management",
  "Team Leadership",
  "Continuous Learning",
];

export default function SkillsPreview() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-primary tracking-tight">
          Skills & Capabilities
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
          A concise overview of my backend, frontend, cloud, and Power Platform experience — along with the soft skills that shape how I work.
        </p>
      </motion.div>

      {/* 2-COLUMN STRUCTURE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="md:col-span-2 flex flex-col gap-12">

          {/* BACKEND & CLOUD */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Backend & Cloud</h3>
            <p className="text-muted-foreground mb-3">
              I specialize in building scalable APIs, working with relational and NoSQL databases,
              and using Azure cloud services to deploy and maintain enterprise-grade systems.
            </p>
            <ul className="text-sm text-primary/80 grid grid-cols-2 gap-1">
              <li>• C# / .NET</li>
              <li>• Entity Framework</li>
              <li>• SQL & NoSQL Databases</li>
              <li>• Azure Services</li>
            </ul>
          </div>

          <hr className="border-border/40" />

          {/* FRONTEND */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Frontend & Web</h3>
            <p className="text-muted-foreground mb-3">
              I build responsive, modern web applications using React, Next.js, and clean UI/UX design principles.
            </p>
            <ul className="text-sm text-primary/80 grid grid-cols-2 gap-1">
              <li>• React</li>
              <li>• Next.js</li>
              <li>• Tailwind CSS</li>
              <li>• Vue (basic)</li>
            </ul>
          </div>

          <hr className="border-border/40" />

          {/* POWER PLATFORM */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Power Platform</h3>
            <p className="text-muted-foreground mb-3">
              I create business-focused solutions using Power Apps, Power Automate, and Dataverse.
            </p>
            <ul className="text-sm text-primary/80 grid grid-cols-2 gap-1">
              <li>• Canvas Apps</li>
              <li>• Model-Driven Apps</li>
              <li>• Dataverse</li>
              <li>• Power Automate</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN — SOFT SKILLS */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-3">Soft Skills</h3>
          <p className="text-muted-foreground mb-4">
            Skills that shape how I work, collaborate, and approach problem-solving.
          </p>

          <div className="grid grid-cols-1 gap-3">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-card/70 dark:bg-card/30 border border-border/30 text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECH STACK SLIDER */}
      <div className="mt-20 relative overflow-hidden">
        <div className="flex animate-scroll gap-8 whitespace-nowrap items-center">
          {techStack.concat(techStack).map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-5 py-3 rounded-xl bg-card/70 dark:bg-card/40 border border-border/30 backdrop-blur-md transition hover:scale-105"
            >
              <div>{tech.icon}</div>
              <p className="text-xs mt-1 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 28s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
