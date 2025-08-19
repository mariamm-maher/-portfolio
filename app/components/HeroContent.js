"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      className="flex-1 text-white w-full max-w-2xl px-4 sm:px-0"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {" "}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="block">MERN Stack Developer</span>
        <motion.span
          className="text-gray-400 inline-block mx-2"
          animate={{
            textShadow: [
              "0 0 0px #9ca3af",
              "0 0 20px #9ca3af",
              "0 0 0px #9ca3af",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          &
        </motion.span>
        <span className="inline sm:block">Software Engineer</span>
      </motion.h2>{" "}
      <motion.div
        className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.p
          className="border-l-4 border-gray-500 pl-4 sm:pl-6"
          whileHover={{
            borderColor: "#6b7280",
            paddingLeft: "2rem",
            transition: { duration: 0.2 },
          }}
        >
          I specialize in full-stack web development using
          <motion.span
            className="text-gray-300 font-semibold"
            whileHover={{ color: "#d1d5db" }}
          >
            {" "}
            MongoDB, Express.js, React, and Node.js
          </motion.span>{" "}
          . I&apos;m passionate about creating scalable web applications and
          bringing ideas to life through clean, efficient code.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
