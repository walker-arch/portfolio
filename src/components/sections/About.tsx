"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code with best practices",
    },
    {
        icon: Lightbulb,
        title: "Problem Solver",
        description: "Turning complex challenges into elegant solutions",
    },
    {
        icon: Rocket,
        title: "Fast Learner",
        description: "Quickly adapting to new technologies and frameworks",
    },
    {
        icon: Users,
        title: "Team Player",
        description: "Collaborating effectively in diverse teams",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section
            id="about"
            ref={ref}
            className="py-20 lg:py-32 bg-white dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3" />
                        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-12">
                            {/* Profile Photo */}
                            <div className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-500/20">
                                <Image
                                    src="/profile.jpg"
                                    alt={personalInfo.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl"
                            >
                                <div className="text-3xl font-bold text-blue-600">10+</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl"
                            >
                                <div className="text-3xl font-bold text-purple-600">1+</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Years Exp</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Section Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4"
                        >
                            About Me
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Crafting Digital Experiences with{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Passion & Precision
                            </span>
                        </motion.h2>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8"
                        >
                            {personalInfo.bio}
                        </motion.p>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
