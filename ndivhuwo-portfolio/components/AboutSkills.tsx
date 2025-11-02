"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SubtleBackground from "@/components/SubtleBackground";
import Image from "next/image";
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiFramer,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiXampp,
  SiJira,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

// Custom Icons
import d365Icon from "@/public/media/icons/d365.jpg";
import powerAppsIcon from "@/public/media/icons/powerappsIcon.jpg";
import powerAutoIcon from "@/public/media/icons/powerautoIcon.jpg";
import powerBIIcon from "@/public/media/icons/PowerbiIcon.jpg";

// ================= SKILLS OVERVIEW =================
const skillsOverview = [
  {
    category: "Backend & Cloud",
    description:
      "Building APIs, managing SQL & NoSQL databases, deploying cloud solutions on Azure, and handling DevOps pipelines.",
    projects: ["User Management API", "Inventory System", "Cloud Automation"],
    icon: <VscAzure className="text-sky-500" />,
  },
  {
    category: "Frontend & Web",
    description:
      "Developing responsive web applications with React, Next.js, Vue, Tailwind CSS, and Bootstrap, integrating UI/UX principles.",
    projects: ["Admin Dashboard", "Portfolio Website", "E-commerce App"],
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    category: "Power Platform",
    description:
      "Creating apps, workflows, and dashboards using Power Apps, Power Automate, Power BI, and Microsoft 365 to streamline business processes.",
    projects: ["Expense Tracker App", "Approval Workflows", "Sales Dashboard"],
    icon: <Image src={powerAppsIcon} alt="Power Apps" width={30} height={30} />,
  },
  {
    category: "Soft Skills",
    description:
      "Collaborating in Agile teams, mentoring juniors, problem-solving, and ensuring code quality across projects.",
    projects: ["Scrum Teams", "Code Reviews", "Pair Programming"],
    icon: <SiJira className="text-blue-500" />,
  },
];

// ================= TECH STACK =================
const techStack = [
  { name: "C#", icon: <TbBrandCSharp className="text-violet-500" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" /> },
  { name: "Vue", icon: <FaVuejs className="text-green-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Framer", icon: <SiFramer className="text-purple-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Firestore", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Azure App Services", icon: <VscAzure className="text-sky-500" /> },
  { name: "Supabase", icon: <SiSupabase className="text-purple-500" /> },
  { name: "XAMPP", icon: <SiXampp className="text-orange-500" /> },
  { name: "Jira", icon: <SiJira className="text-blue-500" /> },
  { name: "Power Apps", icon: <Image src={powerAppsIcon} alt="Power Apps" width={30} height={30} /> },
  { name: "Power Automate", icon: <Image src={powerAutoIcon} alt="Power Automate" width={30} height={30} /> },
  { name: "Power BI", icon: <Image src={powerBIIcon} alt="Power BI" width={30} height={30} /> },
  { name: "Microsoft 365 / D365", icon: <Image src={d365Icon} alt="Microsoft 365 / D365" width={30} height={30} /> },
];

// ================= STATS =================
const stats = [
  { label: "Repositories", value: 17 },
  { label: "Deployments", value: 2 },
  { label: "Projects", value: 12 },
  { label: "Collaborations", value: 5 },
];

// ================= STORYTELLING =================
const aboutMeText = [
  "I build scalable, efficient, and maintainable applications that solve real-world problems. My expertise spans C#, Java, SQL & NoSQL databases, Azure cloud services, and DevOps pipelines, while I also have experience with frontend frameworks like React, Next.js, and Vue to deliver complete solutions.",
  "I thrive on learning, problem-solving, and turning complex requirements into working systems. Collaboration is key to my process — I actively contribute to teams, mentor peers, and ensure every project aligns with best practices.",
  "Technology is my toolkit, curiosity is my driver, and impact is my goal.",
];

export default function AboutSkills() {
  return (
    <section className="relative py-24 px-6 md:px-10 max-w-6xl mx-auto rounded-3xl shadow-lg bg-background/80 overflow-hidden">
      {/* Subtle Background */}
      <SubtleBackground />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary tracking-tight">
          My Skills & What I Build
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Building scalable software solutions across backend, frontend, cloud, and the Power Platform.
        </p>
      </motion.div>

      {/* Storytelling / About Me Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-muted-foreground mb-12 space-y-4"
      >
        <h3 className="text-2xl font-semibold text-primary">About Me</h3>
        {aboutMeText.map((paragraph, i) => (
          <p key={i} className="text-base md:text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Separator */}
      <div className="border-t border-primary/20 my-12" />

      {/* Skills Overview with hover animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsOverview.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/20 rounded-xl transition hover:shadow-lg">
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-primary">{skill.category}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
                <div className="text-sm text-muted-foreground">
                  <strong>Projects:</strong> {skill.projects.join(", ")}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Horizontal Scroll (CSS animation for infinite scroll) */}
      <div className="mt-12 relative overflow-hidden py-4">
        <div className="flex animate-scroll gap-6 items-center whitespace-nowrap">
          {techStack.concat(techStack).map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-3 py-2 rounded-xl bg-card transition transform hover:scale-105"
            >
              <div className="text-2xl">{tech.icon}</div>
              <p className="text-xs md:text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-sm text-muted-foreground italic">
          Tools & technologies I actively work with
        </p>
      </div>

      {/* Stats / Mini Portfolio */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-primary/20 rounded-xl hover:shadow-lg transition">
              <CardContent className="flex flex-col items-center gap-2 p-4">
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}+</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CSS for scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
