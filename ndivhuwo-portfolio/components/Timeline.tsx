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
  img: any; // imported static image
}

const timeline: TimelineItem[] = [
  {
    year: "2016–2018",
    title: "🎖 Lekwa Shandu Secondary School",
    desc: "Represented South Africa in the Eskom Expo for Young Scientists, earning regional and international medals for environmental innovation.",
    img: schoolImg,
  },
  {
    year: "2019–2022",
    title: "🎓 University of the Witwatersrand",
    desc: "Studied Computer Science & Mathematics, focusing on programming, algorithms, and problem-solving foundations.",
    img: universityImg,
  },
  {
    year: "2024–2025",
    title: "👩‍💻 GirlCode Learnership",
    desc: "Completed an NQF Level 5 System Development Learnership focused on C#, .NET, SQL, and Microsoft Power Platform development.",
    img: girlcodeImg,
  },
  {
    year: "2025–Present",
    title: "💼 Mint Group Internship",
    desc: "Working as a System Developer Intern on Power Apps, Power Automate, and Azure projects within agile teams, contributing to enterprise solutions.",
    img: mintgroupImg,
  },
  {
    year: "Future",
    title: "🚀 Vision Ahead",
    desc: "Aspiring to become a full-fledged Software Developer creating meaningful, scalable, cloud-powered applications that make a difference.",
    img: futureImg,
  },
];

export default function Timeline() {
  return (
    <section className="relative py-20 max-w-4xl mx-auto">
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
            {/* Line Dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-md"></div>

            {/* Content Card */}
            <div
              className={`md:w-[46%] ${
                i % 2 === 0 ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-primary/20 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80"
                    priority={i === 0} // preload first image
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg text-primary mb-1">
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
    </section>
  );
}
