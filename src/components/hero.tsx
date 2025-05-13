"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("./SplineClientOnly"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    ),
});

export default function Hero() {
    const [loading, setLoading] = useState(true);
    const [mousePosition, setMousePosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(heroRef);
    const controls = useAnimation();

    const words = [
        {
            text: "Hallo,",
            className: "text-white",
        },
        {
            text: "ik",
            className: "text-white",
        },
        {
            text: "ben",
            className: "text-white",
        },
        {
            text: "Jaron",
            className: "text-blue-500",
        },
    ];

    const onLoad = () => {
        setLoading(false);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const { clientX, clientY } = e;
                const { width, height, left, top } =
                    heroRef.current.getBoundingClientRect();
                const x = (clientX - left) / width;
                const y = (clientY - top) / height;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const scrollToProjects = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={heroRef}
            aria-label="Introductie en welkom"
            className="relative h-screen container mx-auto overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-black to-black z-0"></div>

            <div className="relative z-20 h-full w-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-center pt-20 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-2 px-4 py-1 border border-blue-500 rounded-full bg-blue-500/10"
                    >
                        <span className="text-blue-400 font-medium text-sm md:text-base">
                            Full-Stack Developer
                        </span>
                    </motion.div>

                    <div className="flex flex-col items-center md:items-start">
                        <TypewriterEffectSmooth words={words} />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
                    >
                        Ik creëer innovatieve weboplossingen die mensen
                        verbinden en inspireren, met een passie voor moderne
                        technologieën en een diepe focus op gebruikerservaring.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        <div className="relative justify-center">
                            <InteractiveHoverButton
                                className="w-[250px]"
                                text="Download CV"
                                onClick={() => window.open("/CV.pdf", "_blank")}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        {["React", "Next.js", "TypeScript", "Tailwind"].map(
                            (tech, index) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 1 + index * 0.1,
                                    }}
                                    className="px-3 py-1 bg-blue-900/30 rounded-md text-blue-300 text-sm border border-blue-800/50"
                                >
                                    {tech}
                                </motion.div>
                            )
                        )}
                    </motion.div>
                </motion.div>

                <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                        style={{
                            transform: `perspective(1000px) rotateY(${
                                mousePosition.x * 5 - 2.5
                            }deg) rotateX(${-mousePosition.y * 5 + 2.5}deg)`,
                        }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-blue-500/20 blur-3xl"></div>

                        <div className="absolute inset-0 scale-[0.85] md:scale-[0.9] transform-gpu">
                            <Spline
                                scene="https://prod.spline.design/RZCwPUC1Wqs4bEiw/scene.splinecode"
                                onLoad={onLoad}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    opacity: loading ? 0 : 1,
                                    transition: "opacity 0.5s ease-in-out",
                                }}
                            />
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-xl"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-xl"></div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    repeatDelay: 0.2,
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={scrollToProjects}
                >
                    <span className="text-blue-400 text-sm mb-2">
                        Scroll naar beneden
                    </span>
                    <ArrowDown className="h-6 w-6 text-blue-400" />
                </div>
            </motion.div>
        </section>
    );
}
