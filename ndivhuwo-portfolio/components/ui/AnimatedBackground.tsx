"use client";

import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes"; // if using next-themes
import { useEffect } from "react";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const controls = useAnimation();

  useEffect(() => {
    if (theme === "dark") {
      controls.start({
        background: [
          "linear-gradient(135deg, #1f2937, #4b5563)",
          "linear-gradient(135deg, #374151, #6b7280)",
        ],
        transition: { duration: 8, repeat: Infinity, repeatType: "mirror" },
      });
    } else {
      controls.start({
        background: [
          "linear-gradient(135deg, #fef3c7, #fde68a)",
          "linear-gradient(135deg, #fef08a, #fde68a)",
        ],
        transition: { duration: 8, repeat: Infinity, repeatType: "mirror" },
      });
    }
  }, [theme, controls]);

  return (
    <motion.div
      animate={controls}
      className="fixed inset-0 -z-10 w-full h-full"
    />
  );
}
