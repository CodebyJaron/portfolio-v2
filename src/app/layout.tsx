import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ParticleWrapper } from "@/components/ui/particle-wrapper";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jaron de Klein | Full-Stack Developer Portfolio",
    description:
        "Het moderne portfolio van Jaron de Klein, Full-Stack Developer. Interactieve 3D, animaties, projecten en contact. Gespecialiseerd in Next.js, React, Web3 en UI/UX.",
    openGraph: {
        title: "Jaron de Klein | Full-Stack Developer Portfolio",
        description:
            "Het moderne portfolio van Jaron de Klein, Full-Stack Developer. Interactieve 3D, animaties, projecten en contact. Gespecialiseerd in Next.js, React, Web3 en UI/UX.",
        url: "https://portfolio-v2.codebyjaron.nl/",
        siteName: "Jaron de Klein Portfolio",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Jaron de Klein Portfolio Logo",
            },
        ],
        locale: "nl_NL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jaron de Klein | Full-Stack Developer Portfolio",
        description:
            "Het moderne portfolio van Jaron de Klein, Full-Stack Developer. Interactieve 3D, animaties, projecten en contact. Gespecialiseerd in Next.js, React, Web3 en UI/UX.",
        images: ["/logo.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="nl" suppressHydrationWarning>
            <body
                className={`${inter.className} min-h-screen bg-black text-white`}
            >
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <Header />
                    <main className="relative" aria-label="Hoofdinhoud">
                        <ParticleWrapper />
                        {children}
                    </main>
                </ThemeProvider>
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
