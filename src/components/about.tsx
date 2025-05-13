"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const skills = [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            aria-label="Over mij"
            className="py-20 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black z-0"></div>
            <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Over Mij
                    </h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Leer meer over mijn achtergrond, vaardigheden en passies
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-blue-900/50 shadow-xl shadow-blue-900/20">
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent z-10"></div>
                            <Image
                                src="/logo.png"
                                alt="Jaron de Klein"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                <div className="flex flex-wrap gap-2">
                                    {["Full-Stack", "Web3", "UI/UX", "3D"].map(
                                        (tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-blue-900/50 backdrop-blur-sm rounded-md text-blue-300 text-sm border border-blue-800/50"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-blue-600/20 rounded-full blur-xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-4"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-blue-950/30 border border-blue-900 rounded-xl p-4"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-blue-300">
                                Wie ben ik?
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Ik ben Jaron, een gepassioneerde Full-Stack
                                Developer met een voorliefde voor het bouwen van
                                interactieve web applicaties. Met een
                                achtergrond in zowel front-end als back-end
                                ontwikkeling, creëer ik naadloze digitale
                                ervaringen die niet alleen functioneel zijn,
                                maar ook visueel aantrekkelijk.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-blue-950/30 border border-blue-900 rounded-xl p-4"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-blue-300">
                                Mijn Reis
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="p-1.5 bg-blue-900/50 rounded-lg text-blue-400 mr-3 mt-1">
                                        <Briefcase className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-medium text-blue-200">
                                            Senior Developer @ TechCorp
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            2020 - Heden
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-1.5 bg-blue-900/50 rounded-lg text-blue-400 mr-3 mt-1">
                                        <GraduationCap className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-medium text-blue-200">
                                            MSc Computer Science
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            Universiteit van Amsterdam, 2018
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-blue-950/30 border border-blue-900 rounded-xl p-4"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-blue-300">
                                Vaardigheden
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-2 py-1.5 bg-blue-900/40 rounded-lg text-blue-300 text-xs border border-blue-800/50 flex items-center"
                                    >
                                        <Code className="h-3 w-3 mr-1.5" />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
