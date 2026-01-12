"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Globe, Brain, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

const categories = [
    { key: "programmingLanguages", label: "Languages", icon: Code },
    { key: "webTechnologies", label: "Web Tech", icon: Globe },
    { key: "aiMl", label: "AI / ML", icon: Brain },
    { key: "tools", label: "Tools", icon: Wrench },
] as const;

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeCategory, setActiveCategory] = useState<keyof typeof skills>("programmingLanguages");

    return (
        <section
            id="skills"
            ref={ref}
            className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                        Skills & Technologies
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My Technical{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Arsenal
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A comprehensive toolkit of technologies I&apos;ve mastered to build modern,
                        scalable applications
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.key}
                            onClick={() => setActiveCategory(category.key)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.key
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                                    : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <category.icon size={18} />
                            {category.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {skills[activeCategory].map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {skill.name}
                                </h3>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 bg-gray-100 dark:bg-gray-600 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                    transition={{ delay: 0.5 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* All Skills Tags (Mobile View Alternative) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16"
                >
                    <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                        All Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {Object.values(skills)
                            .flat()
                            .map((skill, index) => (
                                <motion.span
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.7 + index * 0.02 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all cursor-default"
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
