"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const AchievementHero = () => {
    return (
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* Background Texture/Effect */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/50 to-[#050505]" />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Badge variant="outline" className="mb-6 text-primary border-primary/20 backdrop-blur-md px-4 py-1 tracking-[0.2em] uppercase">
                        Milestones & Honors
                    </Badge>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                        Lt. Col. Sanjeev Malik <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-200">Creates History</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
                        A story of determination, discipline, and national pride. From the battlefield to the global stage, leaving a legacy of excellence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
