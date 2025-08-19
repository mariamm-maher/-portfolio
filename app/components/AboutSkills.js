"use client";

import { motion } from "framer-motion";

export default function AboutSkills() {
  const skills = [
    "Problem Solving",
    "Full-Stack Development",
    "UI/UX Design",
    "Database Management",
    "API Development",
    "Version Control",
    "Agile Methodology",
    "Code Optimization",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50"
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="text-purple-400 mr-3">⚡</span>
        Core Competencies
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 + index * 0.1 }}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors group"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:scale-125 transition-transform" />
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
