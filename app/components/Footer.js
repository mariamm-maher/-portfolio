"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/mariamm-maher",
      icon: Github,
      color: "text-gray-400 hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mariam-maher-a75135343/",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      name: "Email",
      url: "mailto:mahermariam367@gmail.com",
      icon: Mail,
      color: "text-cyan-400 hover:text-cyan-300",
    },
    {
      name: "Portfolio",
      url: "#",
      icon: Globe,
      color: "text-purple-400 hover:text-purple-300",
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-gray-800/50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center md:justify-start mb-3">
              <span className="text-2xl font-black text-white tracking-tighter font-serif">
                M
              </span>
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tighter font-serif -ml-0.5">
                M
              </span>
              <span className="text-xs font-bold text-gray-500 ml-1 mt-1 font-mono">
                dev
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Building digital experiences with passion and precision.
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/skills", label: "Skills" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>{" "}
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition-all duration-300 hover:scale-110`}
                    whileHover={{ y: -2 }}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {" "}
            <p className="text-gray-500 text-sm">
              © {currentYear} Mariam Maher. Built with passion using Next.js &
              Tailwind CSS
            </p>
            <div className="text-gray-500 text-xs font-mono">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                // Always coding, always learning
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
}
