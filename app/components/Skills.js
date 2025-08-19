"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [floatingPositions, setFloatingPositions] = useState([]);
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "cyan",
      icon: "🎨",
      funFact: "// Making pixels dance since 2021",
      skills: [
        { name: "React", level: 90, comment: "// Hook, line, and sinker" },
        {
          name: "Next.js",
          level: 85,
          comment: "// The React framework that gets it",
        },
        {
          name: "JavaScript",
          level: 95,
          comment: "// My first programming love ❤️",
        },
        { name: "TypeScript", level: 80, comment: "// Because types matter" },
        {
          name: "HTML/CSS",
          level: 95,
          comment: "// The building blocks of the web",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          comment: "// Utility-first is the way",
        },
      ],
    },
    {
      title: "Backend Development",
      color: "purple",
      icon: "⚙️",
      funFact: "// Where the magic happens behind the scenes",
      skills: [
        { name: "Node.js", level: 90, comment: "// JavaScript everywhere!" },
        {
          name: "Express.js",
          level: 85,
          comment: "// Fast, unopinionated, minimalist",
        },
        { name: "MongoDB", level: 85, comment: "// NoSQL for the win" },
        {
          name: "PostgreSQL",
          level: 75,
          comment: "// When you need ACID compliance",
        },
        {
          name: "RESTful APIs",
          level: 90,
          comment: "// REST in peace, bad APIs",
        },
        { name: "GraphQL", level: 70, comment: "// Query what you need" },
      ],
    },
    {
      title: "Tools & Technologies",
      color: "blue",
      icon: "🛠️",
      funFact: "// A developer is only as good as their tools",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          comment: "// Version control is life",
        },
        {
          name: "Docker",
          level: 70,
          comment: "// Containerize all the things!",
        },
        {
          name: "AWS",
          level: 65,
          comment: "// The cloud is someone else's computer",
        },
        { name: "Firebase", level: 80, comment: "// Google's backend magic" },
        { name: "Vercel", level: 85, comment: "// Deploy with a git push" },
        { name: "Postman", level: 90, comment: "// API testing made easy" },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: "border-cyan-400/50",
        bg: "bg-cyan-500/20",
        text: "text-cyan-400",
        progress: "bg-cyan-400",
      },
      purple: {
        border: "border-purple-400/50",
        bg: "bg-purple-500/20",
        text: "text-purple-400",
        progress: "bg-purple-400",
      },
      blue: {
        border: "border-blue-400/50",
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        progress: "bg-blue-400",
      },
    };
    return colors[color];
  };
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const floatingElements = [
    { text: "console.log('Skills loading...');", delay: 0 },
    { text: "npm install awesome-skills", delay: 2 },
    { text: "git commit -m 'Added new skill'", delay: 4 },
    { text: "/* TODO: Learn everything */", delay: 6 },
  ];

  useEffect(() => {
    // Generate random positions only on client side to avoid hydration mismatch
    if (typeof window !== "undefined") {
      setFloatingPositions(
        floatingElements.map(() => ({
          x: Math.random() * 1000,
          y: Math.random() * 800,
          xMovement: Math.random() * 100 - 50,
        }))
      );
    }
  }, []);

  return (
    <main className="container mx-auto px-8 py-16 relative overflow-hidden">
      {" "}
      {/* Floating Code Snippets */}
      {floatingPositions.length > 0 &&
        floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-cyan-400/20 pointer-events-none hidden lg:block"
            initial={{
              x: floatingPositions[index]?.x || 0,
              y: floatingPositions[index]?.y || 0,
              opacity: 0,
            }}
            animate={{
              y: [null, -30, 30, -15],
              opacity: [0, 0.4, 0.1, 0.4],
              x: [null, floatingPositions[index]?.xMovement || 0],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            {element.text}
          </motion.div>
        ))}
      <motion.section
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <motion.h3
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 30px rgba(34, 211, 238, 0.4))",
            }}
          >
            Skills & Expertise
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-400 font-mono text-sm mt-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            // Leveling up one line of code at a time 🚀
          </motion.p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {" "}
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border ${colorClasses.border} hover:bg-gray-800/60 transition-all duration-500 group relative overflow-hidden`}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredSkill(`category-${index}`)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                {/* Background Animation */}
                <motion.div
                  className="absolute inset-0 opacity-5 text-xs font-mono text-gray-400"
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {Array(8)
                    .fill(
                      `${category.title.toLowerCase().replace(/\s+/g, "")}(); `
                    )
                    .join("")}
                </motion.div>

                <motion.h4
                  className={`text-xl font-bold ${colorClasses.text} mb-2 flex items-center gap-2 relative z-10`}
                  animate={
                    hoveredSkill === `category-${index}` ? { scale: 1.05 } : {}
                  }
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {category.icon}
                  </motion.span>
                  {category.title}
                </motion.h4>
                <motion.p
                  className="text-gray-500 font-mono text-xs mb-6 relative z-10"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {category.funFact}
                </motion.p>
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="space-y-2 group/skill"
                      variants={skillVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <motion.span
                          className="text-gray-400 text-xs"
                          animate={
                            hoveredSkill === `skill-${index}-${skillIndex}`
                              ? { scale: 1.2 }
                              : {}
                          }
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`${colorClasses.progress} h-2 rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.5,
                            delay: 0.5 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          whileHover={{
                            boxShadow: `0 0 20px ${
                              colorClasses.progress.includes("cyan")
                                ? "#22d3ee"
                                : colorClasses.progress.includes("purple")
                                ? "#a855f7"
                                : "#3b82f6"
                            }40`,
                          }}
                          onHoverStart={() =>
                            setHoveredSkill(`skill-${index}-${skillIndex}`)
                          }
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                      {/* Hover Comment */}
                      <motion.div
                        className="text-xs font-mono text-gray-500 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                        initial={{ y: 5 }}
                        animate={
                          hoveredSkill === `skill-${index}-${skillIndex}`
                            ? { y: 0 }
                            : {}
                        }
                      >
                        {skill.comment}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>{" "}
        {/* Enhanced Additional Skills Section */}
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ scale: 1.01, y: -2 }}
        >
          {" "}
          {/* Background Code Rain Effect */}
          <motion.div
            className="absolute inset-0 opacity-5 text-xs font-mono text-green-400"
            animate={{ y: [-100, 800] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {Array(20)
              .fill("01")
              .map((bit, i) => (
                <div
                  key={i}
                  style={{ left: `${i * 5}%`, position: "absolute" }}
                >
                  {Array(30).fill(bit).join(" ")}
                </div>
              ))}
          </motion.div>
          <motion.h4
            className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2 relative z-10"
            whileHover={{ scale: 1.05 }}
          >
            Additional Technologies
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              🔧
            </motion.span>
          </motion.h4>
          <motion.p
            className="text-center text-gray-400 font-mono text-sm mb-6 relative z-10"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            // The extended universe of my tech stack 🌌
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 relative z-10"
            variants={containerVariants}
          >
            {[
              { name: "Socket.io", emoji: "🔌" },
              { name: "Redux", emoji: "🏪" },
              { name: "Zustand", emoji: "🐻" },
              { name: "Prisma", emoji: "💎" },
              { name: "Mongoose", emoji: "🦫" },
              { name: "JWT", emoji: "🎫" },
              { name: "Bcrypt", emoji: "🔒" },
              { name: "Cloudinary", emoji: "☁️" },
              { name: "Stripe", emoji: "💳" },
              { name: "PayPal", emoji: "💰" },
              { name: "Chart.js", emoji: "📊" },
              { name: "Framer Motion", emoji: "🎬" },
              { name: "Material-UI", emoji: "🎨" },
              { name: "Chakra UI", emoji: "⚡" },
              { name: "Jest", emoji: "🃏" },
              { name: "Cypress", emoji: "🌲" },
              { name: "ESLint", emoji: "🔍" },
              { name: "Prettier", emoji: "💅" },
              { name: "Webpack", emoji: "📦" },
              { name: "Vite", emoji: "⚡" },
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium hover:scale-105 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-200 cursor-pointer group flex items-center gap-2"
                variants={skillVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:animate-bounce">{tech.emoji}</span>
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>{" "}
        {/* Enhanced Learning Section */}
        <motion.div className="mt-12 text-center" variants={cardVariants}>
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322d3ee' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "40px 40px",
              }}
            />

            <motion.h4
              className="text-2xl font-bold text-cyan-400 mb-4 flex items-center justify-center gap-2 relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Currently Learning
              <motion.span
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🧠
              </motion.span>
            </motion.h4>
            <motion.p
              className="text-gray-300 text-lg mb-6 relative z-10"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              I'm always expanding my skillset and staying current with the
              latest technologies
            </motion.p>
            <motion.p
              className="text-cyan-400/80 font-mono text-sm mb-6 relative z-10"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              // Never stop learning, never stop growing 📚
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 relative z-10"
              variants={containerVariants}
            >
              {[
                { name: "Machine Learning", icon: "🤖", status: "In Progress" },
                { name: "Python", icon: "🐍", status: "Learning" },
                { name: "Kubernetes", icon: "☸️", status: "Exploring" },
                { name: "Microservices", icon: "🏗️", status: "Studying" },
                { name: "Three.js", icon: "🎮", status: "Experimenting" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.span
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 relative z-10"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(34, 211, 238, 0.3)",
                        "0 0 20px rgba(34, 211, 238, 0.5)",
                        "0 0 0px rgba(34, 211, 238, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {tech.icon}
                    </motion.span>
                    {tech.name}
                  </motion.span>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-cyan-400 text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-cyan-400/30"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    Status: {tech.status}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Learning Progress Indicator */}
            <motion.div
              className="mt-8 flex justify-center items-center gap-4 text-sm font-mono text-gray-400 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Learning Mode: ON
              </motion.div>
              <span>|</span>
              <motion.div
                className="flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Brain: Overloaded with knowledge
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
