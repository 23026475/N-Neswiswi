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
    <section className="relative py-20 max-w-5xl mx-auto px-4 md:px-0 text-center">
      <h2 className="text-3xl font-semibold text-primary tracking-tight">
          My journey to becoming a Fullstack Developer
        </h2>
        {/* Separator */}
      <div className="border-t border-primary/20 my-12" />
      {/* Timeline */}
      <div className="relative z-10">
        {/* vertical line container */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 bg-primary/30 rounded-full"
             style={{ top: 0, bottom: 0 }} />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative flex flex-col md:flex-row items-center md:items-start gap-6 mb-20 last:mb-0"
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
        ))}
      </div>

      {/* Inspirational Vision Section at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-primary/10 border border-primary/30 rounded-3xl p-10 text-center max-w-3xl mx-auto shadow-lg"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">
          🌟 Keep the Vision Alive
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Every journey has challenges — stick to your dreams, embrace failures as lessons, and rise stronger each time. Every setback is a setup for growth and success.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          My story reflects this: curiosity, perseverance, learning from mistakes, and turning ideas into real-world impact. Keep learning, keep building, and never stop chasing your vision.
        </p>
      </motion.div>
    </section>
  );
}
