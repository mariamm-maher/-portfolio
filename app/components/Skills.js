"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Code2,
  Database,
  Wrench,
  Palette,
  Server,
  Settings,
  Globe,
  GitBranch,
  Shield,
  Zap,
  Smartphone,
  Cloud,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [floatingPositions, setFloatingPositions] = useState([]);
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "cyan",
      description: "Building beautiful, responsive user interfaces",
      skills: [
        { name: "React", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "JavaScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Palette },
        { name: "HTML/CSS", icon: Code2 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "purple",
      description: "Scalable server-side solutions and APIs",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Server },
        { name: "MongoDB", icon: Database },
        {
          name: "PostgreSQL",

          icon: Database,
        },
        { name: "RESTful APIs", icon: Globe },
        { name: "GraphQL", icon: Globe },
      ],
    },
  ];
  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        primary: "text-cyan-400",
        secondary: "text-cyan-300",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20",
        hover: "hover:border-cyan-400/40",
        gradient: "from-cyan-400/20 to-cyan-600/20",
      },
      purple: {
        primary: "text-purple-400",
        secondary: "text-purple-300",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
        hover: "hover:border-purple-400/40",
        gradient: "from-purple-400/20 to-purple-600/20",
      },
      blue: {
        primary: "text-blue-400",
        secondary: "text-blue-300",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
        hover: "hover:border-blue-400/40",
        gradient: "from-blue-400/20 to-blue-600/20",
      },
    };
    return colors[color];
  };

  const getLevelBadge = (level) => {
    const levels = {
      Expert: {
        color: "bg-green-500/20 text-green-400 border-green-500/30",
        dots: 3,
      },
      Advanced: {
        color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        dots: 2,
      },
      Intermediate: {
        color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        dots: 1,
      },
    };
    return levels[level] || levels["Intermediate"];
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
        {" "}
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <motion.h3
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 30px rgba(34, 211, 238, 0.4))",
            }}
          >
            Skills & Expertise
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Professional expertise across modern web development technologies
          </motion.p>
        </motion.div>{" "}        {/* Main Skills Categories */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const IconComponent = category.icon;

            return (
              <motion.div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300`}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                    <IconComponent
                      className={`w-6 h-6 ${colorClasses.primary}`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text-xl font-semibold ${colorClasses.primary}`}
                    >
                      {category.title}
                    </h4>
                    <p className="text-gray-400 text-base">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/80 transition-colors duration-200"
                        variants={skillVariants}
                        whileHover={{ x: 3 }}
                      >
                        <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
                          <SkillIcon className={`w-5 h-5 ${colorClasses.primary}`} />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-200 font-medium text-base">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>{" "}        {/* Additional Technologies */}
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-10 border border-gray-700/50"
          variants={cardVariants}
        >
          <div className="text-center mb-10">
            <h4 className="text-3xl font-semibold text-white mb-3 flex items-center justify-center gap-3">
              <Wrench className="w-7 h-7 text-cyan-400" />
              Additional Technologies
            </h4>
            <p className="text-gray-400 text-lg">
              Libraries, frameworks, and tools I work with regularly
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {[
              { name: "Socket.io", category: "Real-time" },
              { name: "Redux", category: "State Management" },
              { name: "Zustand", category: "State Management" },
              { name: "Mongoose", category: "MongoDB ODM" },
              { name: "JWT", category: "Authentication" },
              { name: "Bcrypt", category: "Security" },
              { name: "Cloudinary", category: "Media Management" },
              { name: "Chart.js", category: "Data Visualization" },
              { name: "Framer Motion", category: "Animation" },
              { name: "Material-UI", category: "UI Framework" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="group p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 hover:bg-gray-800/80 transition-all duration-200 cursor-pointer"
                variants={skillVariants}
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center">
                  <div className="text-gray-200 font-medium text-base mb-2 group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-gray-500 text-sm">{tech.category}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
