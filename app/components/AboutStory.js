"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 mb-12 border border-gray-700/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full" />

      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <span className="text-green-400 mr-3">{">"}</span>
        My Developer Journey
        <span className="text-cyan-400 ml-2 animate-pulse">_</span>
      </h2>

      <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
        <p>
          🌱 Started my coding journey in 2021, falling in love with the logical
          beauty of programming
        </p>
        <p>
          🚀 Specialized in MERN stack development, creating seamless full-stack
          applications
        </p>
        <p>
          💡 Passionate about clean code, user experience, and solving
          real-world problems
        </p>
        <p>
          🎯 Currently focused on building scalable web applications and
          exploring new technologies
        </p>
      </div>

      {/* Developer Easter Egg */}
      <motion.div
        className="absolute bottom-4 right-4 text-xs font-mono text-cyan-400/50"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        // TODO: Take over the world
      </motion.div>
    </motion.div>
  );
}
