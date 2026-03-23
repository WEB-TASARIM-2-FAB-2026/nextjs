"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const socialLinks = [
  {
    icon: <FiGithub size={18} />,
    href: "https://github.com/bedirhangiden",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin size={18} />,
    href: "https://linkedin.com/in/bedirhangiden",
    label: "LinkedIn",
  },
  {
    icon: <FiMail size={18} />,
    href: "mailto:bedirhangiden.info@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-orange-500/10 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-500 text-sm flex items-center gap-1"
        >
          © 2025 Bedirhan Giden. Made with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiHeart className="text-orange-500 inline" size={14} />
          </motion.span>
        </motion.p>

        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10 transition-colors border border-zinc-800 hover:border-orange-500/30"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
