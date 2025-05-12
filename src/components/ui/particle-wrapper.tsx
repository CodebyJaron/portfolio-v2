"use client";

import { ParticleBackground } from "./particle-bg";

export function ParticleWrapper() {
    return (
        <div className="fixed inset-0 pointer-events-none">
            <ParticleBackground />
        </div>
    );
}
