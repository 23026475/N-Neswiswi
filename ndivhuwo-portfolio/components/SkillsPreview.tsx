"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card"; // Card used for Soft Skills container
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
import { FaJava, FaVuejs, FaPeopleGroup } from "react-icons/fa6"; 
import { VscAzure } from "react-icons/vsc";

import d365Icon from "@/public/media/icons/d365.jpg"; // Assuming these paths are correct
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

// ================= DATA =================
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
    "Problem Solving",
    "Collaboration",
    "Communication",
    "Adaptability",
    "Attention to Detail",
    "Time Management",
    "Team Leadership",
    "Continuous Learning",
];

// ================= REFACTORED HARD SKILL BLOCK COMPONENT =================
const HardSkillBlock: React.FC<HardSkillBlockProps> = ({ title, description, items, icon, color }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        // IMPROVED: Distinct card look with shadow, padding, and rounded-2xl
        className=" md:p-6 rounded-2xl bg-background shadow-xl border border-border transition-all duration-300 hover:shadow-2xl hover:border-primary/50 transform hover:scale-[1.005]"
    >
        <div className="flex items-center gap-4 mb-4">
            {/* IMPROVED: Larger, rounded icon wrapper */}
            <div className={`text-4xl p-3 rounded-xl ${color.iconBg} ${color.iconText}`}>
                {icon}
            </div>
            {/* Reduced heading size slightly to maintain component hierarchy */}
            <h3 className="text-xl font-bold text-primary ">{title}</h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">{description}</p>
        
        {/* IMPROVED: Increased vertical gap, distinct border */}
        <ul className="text-base grid grid-cols-2 gap-y-3 gap-x-4 text-gray-700 dark:text-gray-300 pt-6 border-t border-violet-200/50 dark:border-violet-800/50">
            {items.map((item, i) => (
                <li 
                    key={i} 
                    className="flex items-center gap-2 font-medium text-sm md:text-base"
                >
                    {/* IMPROVED: Larger dot */}
                    <span className={`w-2.5 h-2.5 rounded-full ${color.dotBg} flex-shrink-0`}></span>
                    {item} 
                </li>
            ))}
        </ul>
    </motion.div>
);

// ================= SKILLS PREVIEW COMPONENT =================
export default function SkillsPreview() {
    return (
        <section className="relative w-full"> 
            {/* Container for the main grid. Tighter vertical padding. */}
            <div className="px-4 md:px-8 max-w-7xl mx-auto pt-8 pb-2">

                {/* --- 1. PRIMARY TITLE SECTION (Uses text-primary) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16" 
                >
                    {/* FIX: Applied text-primary to the main heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-1 text-primary">
                        Skills & Specializations
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mt-4">
                      A concise overview of my <strong className="font-semibold text-gray-700 dark:text-gray-200">Backend</strong>, <strong className="font-semibold text-gray-700 dark:text-gray-200">Frontend</strong>, <strong className="font-semibold text-gray-700 dark:text-gray-200">Cloud</strong>, and <strong className="font-semibold text-gray-700 dark:text-gray-200">Power Platform</strong> experience, built on a foundation of strong soft skills.
                  </p>
                </motion.div>

                {/* --- 2. 2-COLUMN STRUCTURE (3:1 layout with subtle separation) --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
                    
                    {/* LEFT COLUMN (Hard Skills - 3/4 width, visually distinct block) */}
                    <div className="md:col-span-3 flex flex-col gap-8 p-6 md:p-8 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"> 

                        {/* BACKEND & CLOUD (NOW USES REFACTORED COMPONENT STYLING) */}
                        <HardSkillBlock
                            title="Backend & Cloud"
                            description="I specialize in building scalable APIs, working with relational and NoSQL databases, and using Azure cloud services to deploy and maintain enterprise-grade systems."
                            items={["{ } C-Style APIs", "Entity Framework", "SQL & NoSQL Databases", "Azure Services"]}
                            icon={<span className="text-4xl font-mono font-bold">{"{ }"}</span>}
                            color={{ iconBg: "bg-violet-100 dark:bg-violet-900/40", iconText: "text-violet-600 dark:text-violet-400", dotBg: "bg-violet-500" }}
                        />

                        {/* FRONTEND */}
                        <HardSkillBlock
                            title="Frontend & Web"
                            description="I build responsive, modern web applications using React, Next.js, and clean UI/UX design principles."
                            items={["React", "Next.js", "Tailwind CSS", "Vue (basic)"]}
                            icon={<SiReact className="text-4xl" />}
                            color={{ iconBg: "bg-cyan-100 dark:bg-cyan-900/40", iconText: "text-cyan-600 dark:text-cyan-400", dotBg: "bg-cyan-500" }}
                        />

                        {/* POWER PLATFORM */}
                        <HardSkillBlock
                            title="Power Platform"
                            description="I create business-focused solutions using Power Apps, Power Automate, and Dataverse."
                            items={["Canvas Apps", "Model-Driven Apps", "Dataverse", "Power Automate"]}
                            icon={<Image src={powerAppsIcon} alt="PA" width={40} height={40} className="w-10 h-10" />}
                            color={{ iconBg: "bg-emerald-100 dark:bg-emerald-900/40", iconText: "text-emerald-600 dark:text-emerald-400", dotBg: "bg-emerald-500" }}
                        />
                    </div>

                    {/* RIGHT COLUMN — SOFT SKILLS (1/4 width - Sticky and Rounded Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="md:col-span-1"
                    >
                        <Card className="p-6 md:sticky md:top-20 h-fit rounded-xl bg-violet-50/70 dark:bg-gray-800 border border-violet-200 dark:border-violet-700 shadow-xl">
                            <h3 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4 flex items-center gap-2">
                                <FaPeopleGroup className="text-violet-500 text-3xl" /> Soft Skills 
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 text-base">
                                Skills that shape how I work, collaborate, and approach problem-solving.
                            </p>

                            <div className="grid grid-cols-1 gap-3">
                                {softSkills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="p-3 rounded-xl bg-white dark:bg-gray-900/70 border border-violet-100 dark:border-violet-700/50 text-base font-medium text-gray-800 dark:text-gray-200 shadow-sm transition hover:bg-violet-100 dark:hover:bg-violet-900/50 transform hover:scale-[1.02]"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </div>

            </div>

            {/* ------------------------------------------------------------------ */}
            {/* --- 3. TECH STACK SLIDER SECTION (Distinct & Separated) --- */}
            {/* ------------------------------------------------------------------ */}
            
            <div className="w-full relative py-8 mt-8"> 
                
                {/* DISTINCT BACKGROUND LAYER: Uses a stronger border-y for separation */}
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/80 border-y-2 border-violet-300 dark:border-violet-600">
                    <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-gradient-to-br from-violet-500 to-purple-500"></div> 
                </div>

                <div className="relative z-10 w-full"> 
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        
                        <h3 className="text-2xl font-extrabold text-center mb-12 tracking-tight text-white text-shadow-black">
                            My Technology Toolkit
                        </h3>

                        <div className="relative overflow-hidden">
                            
                            {/* FADE OVERLAYS - Matched to the new gray-100/gray-800 background */}
                            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 dark:from-gray-800/80 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 dark:from-gray-800/80 to-transparent z-10 pointer-events-none"></div>

                            <div className="flex animate-scroll gap-10 whitespace-nowrap items-center py-6"> 
                                {techStack.concat(techStack).map((tech, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ translateY: 0 }}
                                        whileHover={{ 
                                            scale: 1.15, 
                                            translateY: -5,
                                            rotateZ: 0.5, 
                                            boxShadow: "0 15px 35px rgba(99, 102, 241, 0.6), 0 0 10px rgba(99, 102, 241, 0.3)",
                                            transition: { duration: 0.3 } 
                                        }}
                                        className="flex flex-col items-center px-6 py-4 rounded-2xl border border-violet-400/30 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg transition duration-300 cursor-pointer shadow-xl hover:shadow-2xl min-w-[120px]"
                                        style={{ transform: 'translateZ(0)' }} 
                                    >
                                        <div className="text-4xl text-violet-600 dark:text-violet-400">{tech.icon}</div>
                                        <p className="text-sm mt-2 font-semibold text-gray-700 dark:text-gray-200">
                                            {tech.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* STYLES FOR ANIMATION */}
                            <style jsx>{`
                                @keyframes scroll {
                                    0% { transform: translateX(0); }
                                    100% { transform: translateX(-50%); }
                                }
                                .animate-scroll {
                                    --scroll-duration: 35s; 
                                    animation: scroll var(--scroll-duration) linear infinite;
                                    transform-style: preserve-3d;
                                }
                            `}</style>

                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* --- 4. MINI STATS SECTION (Cleanly separated) --- */}
            {/* ------------------------------------------------------------- */}
            <div className="px-4 md:px-8 max-w-7xl mx-auto pt-12 pb-24">
                <MiniStats />
            </div>

        </section>
    );
}