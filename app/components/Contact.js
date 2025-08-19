"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [floatingPositions, setFloatingPositions] = useState([]);

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

  const floatingElements = [
    "console.log('Let\\\\'s connect!');",
    "const collaboration = await new Promise();",
    "// Ready to build something amazing?",
    "git clone <your-amazing-idea>",
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mahermariam367@gmail.com",
      subtitle: "Response time: Usually within 24 hours",
      color: "cyan",
      href: "mailto:mahermariam367@gmail.com",
      bgAnimation: "email.send();",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+20 121 089 4204",
      subtitle: "Available for calls",
      color: "green",
      href: "tel:+201210894204",
      bgAnimation: "phone.ring();",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cairo, Egypt",
      subtitle: "Available for remote work worldwide",
      color: "purple",
      href: null,
      bgAnimation: "location.ping();",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/mariamm-maher",
      icon: Github,
      color: "gray",
      description: "Code repository",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mariam-maher-a75135343/",
      icon: Linkedin,
      color: "blue",
      description: "Professional network",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFloatingPositions(
        floatingElements.map(() => ({
          x: Math.random() * 1000,
          y: Math.random() * 600,
          xMovement: Math.random() * 80 - 40,
        }))
      );
    }
  }, []);

  return (
    <main className="container mx-auto px-8 py-16 relative overflow-hidden">
      {floatingPositions.length > 0 &&
        floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-purple-400/20 pointer-events-none hidden lg:block"
            initial={{
              x: floatingPositions[index]?.x || 0,
              y: floatingPositions[index]?.y || 0,
              opacity: 0,
            }}
            animate={{
              y: [null, -25, 25, -12],
              opacity: [0, 0.4, 0.1, 0.4],
              x: [null, floatingPositions[index]?.xMovement || 0],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut",
            }}
          >
            {element}
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
            }}
          >
            Get In Touch
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-400 mt-6 text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            I'm always open to discussing new opportunities and interesting
            projects
          </motion.p>
          <motion.p
            className="text-cyan-400/80 font-mono text-sm mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            // Let's build something amazing together!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const colorClasses = {
              cyan: {
                bg: "bg-cyan-500/20",
                text: "text-cyan-400",
                border: "hover:border-cyan-400/50",
                hover: "group-hover:text-cyan-300",
              },
              green: {
                bg: "bg-green-500/20",
                text: "text-green-400",
                border: "hover:border-green-400/50",
                hover: "group-hover:text-green-300",
              },
              purple: {
                bg: "bg-purple-500/20",
                text: "text-purple-400",
                border: "hover:border-purple-400/50",
                hover: "group-hover:text-purple-300",
              },
            };

            const colors = colorClasses[info.color];
            return (
              <motion.div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 ${colors.border} transition-all duration-300 group relative overflow-hidden`}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.div
                  className={`absolute inset-0 opacity-5 text-xs font-mono ${colors.text}`}
                  animate={{ x: [-100, 100] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {Array(6).fill(`${info.bgAnimation} `).join("")}
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </motion.div>

                  <h4 className="text-white font-semibold mb-2">
                    {info.title}
                  </h4>

                  {info.href ? (
                    <motion.a
                      href={info.href}
                      className={`text-gray-400 font-mono ${colors.hover} transition-colors hover:underline block mb-2`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {info.value}
                    </motion.a>
                  ) : (
                    <motion.p
                      className={`text-gray-400 font-mono ${colors.hover} transition-colors mb-2`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {info.value}
                    </motion.p>
                  )}

                  <motion.p
                    className={`text-xs ${colors.text}/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity`}
                    initial={{ y: 5 }}
                    animate={{ y: 0 }}
                  >
                    // {info.subtitle}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="text-center" variants={cardVariants}>
          <motion.h4
            className="text-xl font-bold text-white mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Connect With Me
          </motion.h4>
          <motion.p
            className="text-gray-400 font-mono text-sm mb-8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            // Find me on these platforms
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={containerVariants}
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              const colorClasses = {
                gray: "hover:border-gray-400 hover:bg-gray-500/20 hover:text-gray-400",
                blue: "hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-400",
              };
              return (
                <motion.div
                  key={social.name}
                  className="relative group"
                  variants={cardVariants}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-gray-800/50 border border-gray-600 rounded-lg flex items-center justify-center ${
                      colorClasses[social.color]
                    } transition-all duration-200 group relative overflow-hidden`}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-7 h-7 text-gray-400 group-hover:scale-110 transition-transform" />
                    <ExternalLink className="w-3 h-3 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  <motion.div
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-700"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <div className="font-semibold">{social.name}</div>
                    <div className="text-gray-400 font-mono text-xs">
                      // {social.description}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-mono text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Status: Available for freelance
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
