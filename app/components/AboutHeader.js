"use client";

import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 mt-16"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-black mb-6"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          background:
            "linear-gradient(45deg, #22d3ee, #a855f7, #06b6d4, #8b5cf6)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 0.5, duration: 1 }}
        className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"
      />{" "}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        I&apos;m a Software Engineering student at the Faculty of Computer
        Science, Helwan University.
      </motion.p>
      {/* Floating Code Snippet */}
      <motion.div
        className="absolute top-20 right-20 text-sm font-mono text-cyan-400/30 pointer-events-none select-none hidden lg:block"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {"// const developer = { passion: 'unlimited' }"}
      </motion.div>
    </motion.div>
  );
}
