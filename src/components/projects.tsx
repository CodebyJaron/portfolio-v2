"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "E-commerce Platform",
        description:
            "Een volledig functioneel e-commerce platform met betalingsintegratie, gebruikersbeheer en productcatalogus.",
        image: "/ecommerce.png",
        tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "AI Dashboard",
        description:
            "Een dashboard voor het visualiseren en analyseren van AI-modellen en hun prestaties.",
        image: "/ai-dashboard.png",
        tags: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Social Media App",
        description:
            "Een sociale media applicatie met realtime chat, posts en gebruikersprofielen.",
        image: "/social-media.png",
        tags: ["React Native", "Firebase", "Redux", "Node.js", "Socket.io"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "Een modern portfolio website met 3D-elementen en interactieve animaties.",
        image: "/portfolio.png",
        tags: [
            "Next.js",
            "Three.js",
            "Framer Motion",
            "Tailwind CSS",
            "Spline",
        ],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export default function Projects() {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    return (
        <section id="projects" className="py-20 ">
            <div className="w-full px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Mijn Projecten
                    </h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Een selectie van mijn recente werk en persoonlijke
                        projecten
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-blue-950/20 border border-blue-900/50 rounded-xl overflow-hidden hover:border-blue-600 transition-all duration-300"
                            onMouseEnter={() => setActiveProject(index)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500"
                                    style={{
                                        transform:
                                            activeProject === index
                                                ? "scale(1.05)"
                                                : "scale(1)",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <Badge
                                                key={tag}
                                                className="bg-blue-600 hover:bg-blue-700"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <Badge className="bg-blue-900 hover:bg-blue-800">
                                                +{project.tags.length - 3}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex gap-4">
                                    <Button
                                        variant="outline"
                                        className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
                                        asChild
                                    >
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
                                        asChild
                                    >
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="h-4 w-4 mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
