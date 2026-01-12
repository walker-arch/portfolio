"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-gray-900 dark:bg-gray-950 text-gray-300 pt-16 pb-8">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand Section */}
                    <div>
                        <motion.h3
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            {personalInfo.name}
                        </motion.h3>
                        <p className="text-gray-400 mb-4">{personalInfo.title}</p>
                        <p className="text-gray-500 text-sm">
                            Building the future, one line of code at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex space-x-4 mb-4">
                            <motion.a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={20} />
                            </motion.a>
                            <motion.a
                                href={`mailto:${personalInfo.email}`}
                                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Mail size={20} />
                            </motion.a>
                        </div>
                        <p className="text-gray-500 text-sm">{personalInfo.location}</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        © {new Date().getFullYear()} {personalInfo.name}. Made with{" "}
                        <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js
                    </p>

                    {/* Scroll to top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="mt-4 md:mt-0 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp
                            size={20}
                            className="group-hover:text-blue-400 transition-colors"
                        />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
