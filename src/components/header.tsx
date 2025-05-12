"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/app/hooks/use-mobile";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useMobile();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    <Image src="/logo.png" alt="Logo" width={60} height={60} />
                </Link>

                {!isMobile && (
                    <div className="flex items-center gap-8">
                        <Button
                            onClick={() => window.open("/CV.pdf", "_blank")}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Download CV
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
}
