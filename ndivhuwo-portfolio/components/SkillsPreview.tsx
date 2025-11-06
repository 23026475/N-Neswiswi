"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import MiniStats from "@/components/MiniStats";

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
import { FaJava, FaVuejs, FaScrewdriverWrench, FaPeopleGroup } from "react-icons/fa6"; // Using FaPeopleGroup for Soft Skills
import { VscAzure } from "react-icons/vsc";

import d365Icon from "@/public/media/icons/d365.jpg";
import powerAppsIcon from "@/public/media/icons/powerappsIcon.jpg";
import powerAutoIcon from "@/public/media/icons/powerautoIcon.jpg";
import powerBIIcon from "@/public/media/icons/PowerbiIcon.jpg";


// ================= TYPESCRIPT INTERFACE =================
interface HardSkillBlockProps {
    title: string;
    description: string;
    items: string[];
    icon: React.ReactNode;
    color: {
        iconBg: string;
        iconText: string;
        dotBg: string;
    };
}
// ==========================================================

// ================= TECH STACK =================
const techStack = [
    { name: "C#", icon: <TbBrandCSharp className="text-violet-500 text-3xl" /> },
    { name: ".NET", icon: <TbBrandCSharp className="text-violet-500 text-3xl" /> },
    { name: "Java", icon: <FaJava className="text-orange-500 text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
    { name: "React", icon: <SiReact className="text-cyan-400 text-3xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-700 text-3xl dark:text-white" /> },
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
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-3xl" /> },
    { name: "Framer", icon: <SiFramer className="text-purple-500 text-3xl" /> },
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

// Reusable Hard Skill Block Component (Type-checked)
const HardSkillBlock: React.FC<HardSkillBlockProps> = ({ title, description, items, icon, color }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className=" md:p-6 rounded-xl bg-white dark:bg-gray-900/90 shadow-lg border border-primary/10 transition-all hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-700"
    >
        <div className="flex items-start gap-2 mb-4">
            <div className={`text-3xl p-2 rounded-lg ${color.iconBg} ${color.iconText}`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{description}</p>
        
        <ul className="text-sm grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300 pt-3 border-t border-border/50">
            {items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${color.dotBg}`}></span>
                    {item} 
                </li>
            ))}
        </ul>
    </motion.div>
);

export default function SkillsPreview() {
  return (
    <section className="relative px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-1">
          Skills & Specializations
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
          A concise overview of my backend, frontend, cloud, and Power Platform experience, built on a foundation of strong soft skills.
        </p>
      </motion.div>

      {/* 2-COLUMN STRUCTURE (3:1 layout using md:grid-cols-4) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10">
        
        {/* LEFT COLUMN (Hard Skills - 3/4 width) */}
        <div className="md:col-span-3 flex flex-col gap-10">

          {/* BACKEND & CLOUD (Updated Icon) */}
          <HardSkillBlock
            title="Backend & Cloud"
            description="I specialize in building scalable APIs, working with relational and NoSQL databases, and using Azure cloud services to deploy and maintain enterprise-grade systems."
            items={[
                "{ } C-Style APIs", 
                "Entity Framework", 
                "SQL & NoSQL Databases", 
                "Azure Services"
            ]}
            // UPDATED ICON: Using text to represent curly braces
            icon={<span className="text-3xl font-mono font-bold">{"{ }"}</span>} 
            color={{ iconBg: "bg-violet-100 dark:bg-violet-900/30", iconText: "text-violet-600", dotBg: "bg-violet-500" }}
          />

          {/* FRONTEND */}
          <HardSkillBlock
            title="Frontend & Web"
            description="I build responsive, modern web applications using React, Next.js, and clean UI/UX design principles."
            items={["React", "Next.js", "Tailwind CSS", "Vue (basic)"]}
            icon={<SiReact />}
            color={{ iconBg: "bg-cyan-100 dark:bg-cyan-900/30", iconText: "text-cyan-600", dotBg: "bg-cyan-500" }}
          />

          {/* POWER PLATFORM */}
          <HardSkillBlock
            title="Power Platform"
            description="I create business-focused solutions using Power Apps, Power Automate, and Dataverse."
            items={["Canvas Apps", "Model-Driven Apps", "Dataverse", "Power Automate"]}
            icon={<Image src={powerAppsIcon} alt="PA" width={30} height={30} />}
            color={{ iconBg: "bg-emerald-100 dark:bg-emerald-900/30", iconText: "text-emerald-600", dotBg: "bg-emerald-500" }}
          />
        </div>

        {/* RIGHT COLUMN — SOFT SKILLS (Changed Icon for distinctiveness) */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-1"
        >
          <Card className="p-6 h-full bg-gray-50 dark:bg-gray-800/80 border border-purple-200 dark:border-purple-900 shadow-xl transition-all hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4 flex items-center gap-2">
                <FaPeopleGroup className="text-purple-500" /> Soft Skills {/* Changed from FaScrewdriverWrench */}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Skills that shape how I work, collaborate, and approach problem-solving.
            </p>

            <div className="grid grid-cols-1 gap-2">
                {softSkills.map((skill, i) => (
                    <div
                        key={i}
                        className="p-3 rounded-lg bg-white dark:bg-gray-900/50 border border-purple-100 dark:border-purple-900 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm transition hover:bg-purple-50 dark:hover:bg-purple-900/30"
                    >
                        {skill}
                    </div>
                ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* TECH STACK SLIDER */}
      <div className="mt-8 relative overflow-hidden mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-10 text-center">My Technology Toolkit</h3>
        
        {/* FADE OVERLAYS */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-gray-950/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-gray-950/90 to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-scroll gap-8 whitespace-nowrap items-center">
          {techStack.concat(techStack).map((tech, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(139, 92, 246, 0.4)" }}
                className="flex flex-col items-center px-5 py-3 rounded-xl border border-primary/20 bg-white dark:bg-gray-800/70 backdrop-blur-sm transition duration-300 cursor-pointer shadow-md min-w-[100px]"
            >
              <div className="text-3xl">{tech.icon}</div>
              <p className="text-xs mt-1 font-medium text-gray-700 dark:text-gray-300">{tech.name}</p>
            </motion.div>
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

      {/* Mini Stats */}
        <MiniStats />
    </section>
  );
}