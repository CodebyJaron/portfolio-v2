"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            toast.success("Bericht verzonden!", {
                description:
                    "Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch {
            toast.error("Oeps! Er is iets misgegaan", {
                description:
                    "Je bericht kon niet worden verzonden. Probeer het later opnieuw.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" aria-label="Contact" className="py-20 bg-black">
            <div className="w-full px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Neem contact op
                    </h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Heb je een vraag of wil je samenwerken? Stuur me een
                        bericht!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-blue-950/30 border border-blue-900 rounded-xl p-6">
                            <h3 className="text-2xl font-bold mb-6 text-blue-300">
                                Contactgegevens
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="p-3 bg-blue-900/50 rounded-lg text-blue-400 mr-4">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-blue-200">
                                            Email
                                        </h4>
                                        <a
                                            href="mailto:me@codebyjaron.nl"
                                            className="text-gray-400 hover:text-blue-400 transition-colors"
                                        >
                                            me@codebyjaron.nl
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 bg-blue-900/50 rounded-lg text-blue-400 mr-4">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-blue-200">
                                            Telefoon
                                        </h4>
                                        <a
                                            href="tel:+31628626023"
                                            className="text-gray-400 hover:text-blue-400 transition-colors"
                                        >
                                            +31 6 28626023
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 bg-blue-900/50 rounded-lg text-blue-400 mr-4">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-blue-200">
                                            Locatie
                                        </h4>
                                        <p className="text-gray-400">
                                            Groningen, Nederland
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-950/30 border border-blue-900 rounded-xl p-6">
                            <h3 className="text-2xl font-bold mb-6 text-blue-300">
                                Sociale Media
                            </h3>

                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/codebyjaron"
                                    className="p-3 bg-blue-900/50 rounded-lg text-blue-400 hover:bg-blue-800 transition-colors"
                                    aria-label="Github"
                                >
                                    <Github className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jaron-de-klein-b4b37932a/"
                                    className="p-3 bg-blue-900/50 rounded-lg text-blue-400 hover:bg-blue-800 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            aria-label="Contactformulier"
                            className="bg-blue-950/30 border border-blue-900 rounded-xl p-8 space-y-6"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-blue-300">
                                Stuur een Bericht
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-blue-200 mb-1"
                                    >
                                        Naam
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Jouw naam"
                                        required
                                        className="bg-blue-950/50 border-blue-800 focus:border-blue-500 text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-blue-200 mb-1"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="jouw@email.com"
                                        required
                                        className="bg-blue-950/50 border-blue-800 focus:border-blue-500 text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-blue-200 mb-1"
                                    >
                                        Bericht
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={(e) =>
                                            handleChange(
                                                e as unknown as React.ChangeEvent<HTMLInputElement>
                                            )
                                        }
                                        placeholder="Jouw bericht..."
                                        required
                                        className="min-h-[150px] bg-blue-950/50 border-blue-800 focus:border-blue-500 text-white"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                aria-label="Verstuur bericht"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Verzenden...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4 mr-2" />
                                        Verstuur bericht
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
