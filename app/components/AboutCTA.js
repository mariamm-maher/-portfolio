"use client";

import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="text-center mt-12"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">Let's Build Something Amazing</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </motion.button>

      <motion.p
        className="text-gray-400 mt-4 text-sm font-mono"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        // Ready to collaborate and create
      </motion.p>
    </motion.div>
  );
}
