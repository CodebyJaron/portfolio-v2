import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ParticleWrapper } from "@/components/ui/particle-wrapper";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Developer Portfolio",
    description:
        "Een modern portfolio voor een developer met 3D elementen en interactieve animaties",
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
                    <main className="relative">
                        <ParticleWrapper />
                        {children}
                    </main>
                </ThemeProvider>
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
