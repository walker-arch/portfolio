"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Award, GraduationCap } from "lucide-react";
import { experience, education, certifications, achievements } from "@/lib/data";

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section
            id="experience"
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
                        Journey
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Experience &{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white mb-8"
                        >
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                            </div>
                            Work Experience
                        </motion.h3>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

                            {experience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="relative pl-16 pb-12 last:pb-0"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 top-1 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-gray-50 dark:border-gray-800" />

                                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                                {exp.title}
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {exp.company}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {exp.duration}
                                            </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                                                >
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certifications Column */}
                    <div>
                        {/* Education */}
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white mb-8"
                        >
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                <GraduationCap className="text-purple-600 dark:text-purple-400" size={24} />
                            </div>
                            Education
                        </motion.h3>

                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg mb-6"
                            >
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                    {edu.degree}
                                </h4>
                                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                    {edu.field}
                                </p>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    <span>{edu.institution}</span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {edu.duration}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Grade: {edu.grade}
                                </p>
                            </motion.div>
                        ))}

                        {/* Certifications */}
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white mb-6 mt-10"
                        >
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                <Award className="text-green-600 dark:text-green-400" size={24} />
                            </div>
                            Certifications
                        </motion.h3>

                        <div className="grid gap-4">
                            {certifications.map((cert, index) => (
                                <motion.a
                                    key={cert.id}
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="block bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
                                >
                                    <h4 className="font-semibold text-gray-900 dark:text-white">
                                        {cert.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {cert.issuer} • {cert.date}
                                    </p>
                                </motion.a>
                            ))}
                        </div>

                        {/* Achievements */}
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white mb-6 mt-10"
                        >
                            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                <Award className="text-yellow-600 dark:text-yellow-400" size={24} />
                            </div>
                            Achievements
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7 }}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6"
                        >
                            <ul className="space-y-3">
                                {achievements.map((achievement, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-gray-700 dark:text-gray-200"
                                    >
                                        <span className="mt-1 text-yellow-500">★</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
