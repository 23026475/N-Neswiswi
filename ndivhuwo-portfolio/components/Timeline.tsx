"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Local image imports
import schoolImg from "@/public/media/journey/school.jpg";
import universityImg from "@/public/media/journey/university.jpg";
import girlcodeImg from "@/public/media/journey/girlcode.jpg";
import mintgroupImg from "@/public/media/journey/mintgroup.jpg";
import futureImg from "@/public/media/journey/future.jpg";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  img: any;
}

const timeline: TimelineItem[] = [
  {
    year: "2016–2018",
    title: "🎖 Lekwa Shandu Secondary School",
    desc: "Where curiosity met innovation. Represented South Africa at the Eskom Expo for Young Scientists, earning regional and international medals for projects focused on environmental sustainability and marine pollution.",
    img: schoolImg,
  },
  {
    year: "2019–2022",
    title: "🎓 University of the Witwatersrand",
    desc: "Developed a love for logic and technology while studying Computer Science and Mathematics. Learned the foundations of programming, algorithms, and computational problem-solving — the spark that led to a career in development.",
    img: universityImg,
  },
  {
    year: "2024–2025",
    title: "👩‍💻 GirlCode Learnership",
    desc: "Joined a vibrant tech community through the GirlCode System Development Learnership. Gained hands-on experience with C#, .NET, SQL, React, and Power Platform — and learned how collaboration, creativity, and innovation shape great software.",
    img: girlcodeImg,
  },
  {
    year: "2025–Present",
    title: "💼 Mint Group Internship",
    desc: "Now contributing to real-world projects as a System Developer Intern. Building Power Apps, Power Automate workflows, and cloud-based solutions within agile teams — growing into a well-rounded developer who builds with purpose.",
    img: mintgroupImg,
  },
  {
    year: "Future",
    title: "🚀 Vision Ahead",
    desc: "Continuing to learn, explore, and innovate. Aspiring to become a full-fledged Software Developer who builds scalable, meaningful, cloud-powered applications that empower people and create impact.",
    img: futureImg,
  },
];

export default function Timeline() {
  return (
    <section className="relative py-20 max-w-4xl mx-auto">
      {/* vertical line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 bg-primary/30 h-full rounded-full"></div>

      <div className="space-y-16 relative z-10">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
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
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-primary/20 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover opacity-85"
                    priority={i === 0}
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg text-primary mb-1 tracking-tight">
                    {item.year}
                  </h3>
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* closing message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center max-w-2xl mx-auto text-muted-foreground"
      >
        <p>
          Every milestone represents a step forward — from early curiosity and
          academic exploration to hands-on development and real-world impact.
          My journey is built on learning, collaboration, and a deep passion for
          turning ideas into functional, scalable solutions.
        </p>
      </motion.div>
    </section>
  );
}
