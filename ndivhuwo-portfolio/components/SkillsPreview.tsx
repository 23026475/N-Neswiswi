"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import MiniStats from "@/components/MiniStats";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiMysql, SiMongodb,
  SiFirebase, SiBootstrap, SiFigma, SiFramer, SiSupabase, SiJira
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaVuejs, FaPeopleGroup } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";

import d365Icon from "@/public/media/icons/d365.jpg";
import powerAppsIcon from "@/public/media/icons/powerappsIcon.jpg";
import powerAutoIcon from "@/public/media/icons/powerautoIcon.jpg";
import powerBIIcon from "@/public/media/icons/PowerbiIcon.jpg";

// ========== INTERFACE ==========
interface HardSkillBlockProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  color: { iconBg: string; iconText: string; dotBg: string };
}

// ========== DATA ==========
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

const softSkills = [
  "Problem Solving", "Collaboration", "Communication", "Adaptability",
  "Attention to Detail", "Time Management", "Team Leadership", "Continuous Learning"
];

// ========== HARD SKILL BLOCK ==========
const HardSkillBlock: React.FC<HardSkillBlockProps> = ({ title, description, items, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    className="p-5 md:p-6 rounded-2xl bg-background shadow-xl border border-border hover:shadow-2xl hover:border-primary/50 transform hover:scale-[1.01] transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className={`text-3xl md:text-4xl p-3 rounded-xl ${color.iconBg} ${color.iconText}`}>
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-primary">{title}</h3>
    </div>

    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
      {description}
    </p>

    <ul className="grid grid-cols-2 gap-y-2 md:gap-y-3 gap-x-4 text-gray-700 dark:text-gray-300 pt-4 md:pt-6 border-t border-violet-200/50 dark:border-violet-800/50">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-sm md:text-base font-medium">
          <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${color.dotBg}`}></span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

// ========== MAIN COMPONENT ==========
export default function SkillsPreview() {
  return (
    <section className="relative w-full">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto pt-8 pb-4">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Skills & Specializations
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            A concise overview of my <strong>Backend</strong>, <strong>Frontend</strong>, <strong>Cloud</strong>,
            and <strong>Power Platform</strong> experience, built on strong soft skills.
          </p>
        </motion.div>

        {/* Skills layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Hard Skills */}
          <div className="lg:col-span-3 flex flex-col gap-6 md:gap-8 p-4 sm:p-6 md:p-8 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <HardSkillBlock
                title="Backend & Cloud"
                description="I specialize in building scalable APIs, working with relational and NoSQL databases, and using Azure services to deploy and maintain systems."
                items={["{ } C-Style APIs", "Entity Framework", "SQL & NoSQL", "Azure Services"]}
                icon={<span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold leading-none">{"{}"}</span>}
                color={{ iconBg: "bg-violet-100 dark:bg-violet-900/40", iconText: "text-violet-600 dark:text-violet-400", dotBg: "bg-violet-500" }}
            />
            <HardSkillBlock
              title="Frontend & Web"
              description="I build responsive, modern web apps using React, Next.js, and clean UI/UX principles."
              items={["React", "Next.js", "Tailwind CSS", "Vue (basic)"]}
              icon={<SiReact className="text-3xl md:text-4xl" />}
              color={{ iconBg: "bg-cyan-100 dark:bg-cyan-900/40", iconText: "text-cyan-600 dark:text-cyan-400", dotBg: "bg-cyan-500" }}
            />
            <HardSkillBlock
              title="Power Platform"
              description="I create business solutions using Power Apps, Power Automate, and Dataverse."
              items={["Canvas Apps", "Model-Driven Apps", "Dataverse", "Power Automate"]}
              icon={<Image src={powerAppsIcon} alt="PA" width={40} height={40} className="w-10 h-10" />}
              color={{ iconBg: "bg-emerald-100 dark:bg-emerald-900/40", iconText: "text-emerald-600 dark:text-emerald-400", dotBg: "bg-emerald-500" }}
            />
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="p-5 sm:p-6 lg:sticky lg:top-20 h-fit rounded-xl bg-violet-50/70 dark:bg-gray-800 border border-violet-200 dark:border-violet-700 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4 flex items-center gap-2">
                <FaPeopleGroup className="text-violet-500 text-2xl sm:text-3xl" /> Soft Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base">
                Skills that shape how I work, collaborate, and solve problems.
              </p>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {softSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-gray-900/70 border border-violet-100 dark:border-violet-700/50 text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:bg-violet-100 dark:hover:bg-violet-900/50 transform hover:scale-[1.02] transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Carousel */}
      <div className="w-full relative py-8 mt-8">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/80 border-y-2 border-violet-300 dark:border-violet-600">
          <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-gradient-to-br from-violet-500 to-purple-500" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl font-extrabold text-center mb-10 text-white text-shadow-black">
            My Technology Toolkit
          </h3>
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-gray-100 dark:from-gray-800/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-gray-100 dark:from-gray-800/80 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-scroll gap-6 sm:gap-10 whitespace-nowrap items-center py-6">
              {techStack.concat(techStack).map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.15, translateY: -5,
                    boxShadow: "0 15px 35px rgba(99, 102, 241, 0.6)"
                  }}
                  className="flex flex-col items-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-violet-400/30 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-xl hover:shadow-2xl min-w-[90px] sm:min-w-[110px] md:min-w-[120px]"
                >
                  <div className="text-3xl sm:text-4xl text-violet-600 dark:text-violet-400">{tech.icon}</div>
                  <p className="text-xs sm:text-sm mt-2 font-semibold text-gray-700 dark:text-gray-200">{tech.name}</p>
                </motion.div>
              ))}
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); } /* scroll entire duplicated set */
                }

                /* Default speed for large screens */
                .animate-scroll {
                    display: inline-flex;
                    animation: scroll 55s linear infinite;
                }

                /* Medium screens — faster */
                @media (max-width: 1024px) {
                    .animate-scroll {
                    animation-duration: 25s;
                    }
                }

                /* Small screens — fastest */
                @media (max-width: 640px) {
                    .animate-scroll {
                    animation-duration: 30s;
                    }
                }
                `}</style>
          </div>
        </div>
      </div>

      {/* Mini Stats */}
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto pt-10 pb-20">
        <MiniStats />
      </div>
    </section>
  );
}
