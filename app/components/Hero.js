"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroHeader from "./HeroHeader";
import HeroProfile from "./HeroProfile";
import HeroContent from "./HeroContent";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  return (
    <motion.main
      ref={ref}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen flex flex-col justify-center"
      style={{ y, opacity }}
    >
      {/* Hero Header Section */}
      <HeroHeader /> {/* Profile Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Profile Image */}
        <HeroProfile />

        {/* Content */}
        <HeroContent />
      </motion.div>
    </motion.main>
  );
}
