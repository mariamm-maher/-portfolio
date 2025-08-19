"use client";

import { motion } from "framer-motion";

export default function HeroHeader() {
  // Stagger animations for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="text-center mb-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {" "}
      <motion.h1
        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent mb-4 tracking-tight"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        I'm Mariam Maher.
      </motion.h1>{" "}
      <motion.p className="text-xl text-gray-500 mb-6" variants={itemVariants}>
        Crafting digital experiences with code
      </motion.p>
      {/* Animated Floating Code Snippets with Developer Humor */}
      <motion.div
        className="absolute -top-10 -left-20 text-gray-600/40 font-mono text-sm opacity-40"
        variants={floatingVariants}
        animate="animate"
      >
        const coffee = "required";
      </motion.div>
      <motion.div
        className="absolute top-20 -right-32 text-gray-600/40 font-mono text-sm opacity-40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        {"// TODO: Sleep more"}
      </motion.div>
      <motion.div
        className="absolute -bottom-10 left-32 text-gray-700/35 font-mono text-xs opacity-30"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        while(!succeed) try();
      </motion.div>
      <motion.div
        className="absolute bottom-5 -right-20 text-gray-600/40 font-mono text-xs opacity-35"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        console.log("Hello World!");
      </motion.div>
      <motion.div
        className="absolute top-40 left-8 text-gray-700/35 font-mono text-xs opacity-25"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 3 }}
      >
        {"if(bug) { blame: 'frontend' }"}
      </motion.div>
      <motion.div
        className="absolute -top-5 right-16 text-gray-600/40 font-mono text-xs opacity-30"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        npm run life --debug
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-4 text-gray-700/35 font-mono text-xs opacity-25"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      >
        {"/* Works on my machine */"}
      </motion.div>
      {/* Animated Tech Icons with Developer Personality */}
      <motion.div
        className="absolute top-32 left-16 text-gray-600/50"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity },
        }}
      >
        {/* React Logo */}
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 1c-6.338 0-12 2.65-12 6.5v9c0 3.85 5.662 6.5 12 6.5s12-2.65 12-6.5v-9c0-3.85-5.662-6.5-12-6.5zm7.5 15.5c0 1.93-3.358 4.5-7.5 4.5s-7.5-2.57-7.5-4.5v-9c0-1.93 3.358-4.5 7.5-4.5s7.5 2.57 7.5 4.5v9z" />
        </svg>
      </motion.div>{" "}
      <motion.div
        className="absolute bottom-20 right-24 text-gray-600/50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {/* Coffee Cup */}
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3h.5c.83 0 1.5-.67 1.5-1.5S17.33 5 16.5 5H16z" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-60 right-8 text-gray-700/45"
        animate={{
          rotateY: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        {/* Terminal/Code */}
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 19V7h16v12H4z" />
          <path d="M6.5 10l2.5 2-2.5 2 1 1 3.5-3-3.5-3-1 1zm7 4h4v-1h-4v1z" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-gray-600/45"
        animate={{
          bounce: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        {/* Bug/Debug */}
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.42.17L8.41 3 7 4.41l1.63 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z" />
        </svg>
      </motion.div>{" "}
      <motion.div
        className="absolute top-16 right-32 text-white/30"
        animate={{
          pulse: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {/* Git Branch */}
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 3a3 3 0 0 0-3 3v1a3 3 0 0 0 2 2.83V16a3 3 0 0 0 3 3h1a3 3 0 0 0 2.83-2H18a3 3 0 0 0 3-3v-1a3 3 0 0 0-2-2.83V9.17A3 3 0 0 0 21 6V5a3 3 0 0 0-3-3s-1 0-3 0a3 3 0 0 0-3 3v1a3 3 0 0 0 2 2.83v1.34A3 3 0 0 0 12 11H9a3 3 0 0 0-2.83 2H5a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3z" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
