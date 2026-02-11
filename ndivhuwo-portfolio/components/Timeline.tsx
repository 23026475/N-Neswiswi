"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// ✅ Local image imports
import schoolImg from "@/public/media/journey/school.jpg";
import universityImg from "@/public/media/journey/university.jpg";
import girlcodeImg from "@/public/media/journey/girlcode.jpg";
import mintgroupImg from "@/public/media/journey/mintgroup.jpg";
import futureImg from "@/public/media/journey/future.jpg";

// Badges / mini cards
import ai900 from "@/public/media/certs/ai900.png";
import sasol from "@/public/media/certs/sasol.webp";
import az900 from "@/public/media/certs/az900.png";
import dp900 from "@/public/media/certs/dp900.png";
import expo from "@/public/media/certs/Expo.jpg";
import imbewu from "@/public/media/certs/imbewu.webp";
import pl200 from "@/public/media/certs/PL-200.webp";
import pl900 from "@/public/media/certs/pl900.png";
import sc900 from "@/public/media/certs/sc900.png";
import adaptit from "@/public/media/certs/adaptit.png";
import girlcodeHack from "@/public/media/certs/girlcode_hack.png";
import retrorabbit from "@/public/media/certs/retrorabit.png";
import pl600 from "@/public/media/certs/pl600.png";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  img: StaticImageData;
  badges?: { img: StaticImageData; label: string }[];
}

const timeline: TimelineItem[] = [
  {
    year: "2016–2018",
    title: "🎖 Lekoa Shandu Secondary School",
    desc: "Represented South Africa at the Eskom Expo for Young Scientists, earning regional and international medals for projects focused on environmental sustainability and marine pollution.",
    img: schoolImg,
    badges: [
      { img: expo, label: "Eskom Expo Bronze/Silver/Gold" },
      { img: imbewu, label: "Imbewu Regional / International" },
      { img: sasol, label: "SASOL Science & Engineering" },
    ],
  },
  {
    year: "2019–2022",
    title: "🎓 University of the Witwatersrand",
    desc: "Developed a love for logic and technology while studying Computer Science and Mathematics. Learned the foundations of programming, algorithms, and computational problem-solving — the spark that led to a career in development.",
    img: universityImg,
    badges: [
      { img: adaptit, label: "ADAPT-IT Hackathon" },
      { img: retrorabbit, label: "Retrorabbit Hackathon" },
    ],
  },
  {
    year: "2024–2025",
    title: "👩‍💻 GirlCode Learnership",
    desc: "Joined a vibrant tech community through the GirlCode System Development Learnership. Gained hands-on experience with C#, .NET, SQL, React, and Power Platform.",
    img: girlcodeImg,
    badges: [
      { img: girlcodeHack, label: "GirlCode Hackathon" },
      { img: az900, label: "AZ-900" },
      { img: ai900, label: "AI-900" },
      
    ],
  },
  {
    year: "2025 Jan – May",
    title: "💼 Mint Group Internship",
    desc: "Worked on internal software solutions within Microsoft environments, building Power Platform applications and automation workflows while collaborating in Agile teams.",
    img: mintgroupImg,
    badges: [
      { img: sc900, label: "SC-900" },
      
    ],
  },
  {
    year: "2025 June–Present",
    title: "💼 Mint Group Junior Software Developer",
    desc: "Contributing to client-facing digital transformation projects, building Power Platform solutions and supporting backend integrations while working closely with stakeholders.",
    img: mintgroupImg,
    badges: [
      { img: dp900, label: "DP-900" },
      { img: pl900, label: "PL-900" },
      { img: pl200, label: "PL-200" },
      { img: dp900, label: "DP-900" },
      { img: pl600, label: "PL-600" }
      
    ],
  },
  {
    year: "Future",
    title: "🚀 Vision Ahead",
    desc: "Committed to mastering scalable backend systems, cloud architecture, and building meaningful software that solves real-world problems."
,    img: futureImg,
  },
];

export default function Timeline() {
  return (
    <section className="relative py-20 max-w-5xl mx-auto px-4 md:px-0 text-center">
      <h2 className="text-3xl font-semibold text-primary tracking-tight">
        My journey into Software & Cloud Development
      </h2>

      {/* Separator */}
      <div className="border-t border-primary/20 my-12" />

      {/* Timeline */}
      <div className="relative z-10">
        {/* vertical line */}
        <div
          className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 bg-primary/30 rounded-full"
          style={{ top: 0, bottom: 0 }}
        />

        {timeline.map((item, i) => (
          <div key={i} className="relative mb-12 last:mb-0">
            {/* Timeline Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-md"></div>

              {/* Card */}
              <div
                className={`md:w-[46%] ${
                  i % 2 === 0 ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-card border border-primary/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-52 w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover opacity-90"
                      priority={i === 0}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-primary mb-1 tracking-tight">
                      {item.year}
                    </h3>
                    <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Badge Row */}
            {item.badges && item.badges.length > 0 && (
              <div className="relative mt-4">
                <div className="overflow-x-auto px-2 sm:px-6 py-4 flex gap-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/60 scrollbar-track-transparent">
                  {item.badges.map((badge, j) => (
                    <div
                      key={j}
                      className="flex-shrink-0 w-28 sm:w-32 md:w-36 bg-white dark:bg-card rounded-lg shadow-md p-2 flex flex-col items-center gap-2 snap-center transition-transform duration-300 hover:scale-105 cursor-default"
                    >
                      <div className="relative h-14 w-14 sm:h-16 sm:w-16">
                        <Image
                          src={badge.img}
                          alt={badge.label}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center">
                        {badge.label}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Optional swipe hint on mobile */}
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground md:hidden">
                  swipe →
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
