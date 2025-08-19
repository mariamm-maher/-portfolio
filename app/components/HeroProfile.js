"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroProfile() {
  return (
    <motion.div
      className="flex-shrink-0"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative group">
        {" "}
        <motion.div
          className="w-56 h-80 rounded-xl bg-gradient-to-br from-gray-900 to-black p-1 shadow-2xl border border-gray-800 transform transition-all duration-300 group-hover:shadow-gray-500/25 group-hover:shadow-2xl"
          whileHover={{
            boxShadow: "0 30px 60px -12px rgba(156, 163, 175, 0.3)",
            y: -5,
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/mariam maher.jpeg"
                alt="Mariam Maher - Full-Stack Developer"
                width={224}
                height={320}
                className="w-full h-full object-cover filter brightness-110 contrast-110"
                priority
              />
            </motion.div>{" "}
            {/* Overlay gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-800/10 via-transparent to-gray-600/10 rounded-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>{" "}
        {/* Enhanced animated border effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 -z-10 blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.4 }}
          animate={{
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            opacity: { duration: 0.3 },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        {/* Floating particles around image */}
        <motion.div
          className="absolute -top-2 -right-2 w-2 h-2 bg-gray-400 rounded-full opacity-60"
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-70"
          animate={{
            y: [0, 8, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-3 w-1 h-1 bg-gray-600 rounded-full opacity-50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {/* Professional badge */}
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="text-gray-400 text-xs font-semibold flex items-center">
            <motion.span
              className="w-2 h-2 bg-gray-500 rounded-full mr-2"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
