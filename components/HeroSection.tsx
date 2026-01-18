"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state for parallax
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Additional parallax for text
    const textX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center py-24 md:py-32 perspective-1000"
        >
            {/* 1. Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" style={{ backgroundImage: "url('/images/noise.png')" }}></div>

            {/* Large Background Typography (Static/Subtle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.02]">
                <h1 className="text-[25vw] font-serif font-black leading-none text-foreground blur-sm">
                    GRAPHENE
                </h1>
            </div>


            <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center max-w-5xl">

                {/* 2. Top Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-12 md:mb-16 relative"
                >
                    <div className="flex flex-col items-center gap-4">
                        <span className="w-12 h-1 bg-primary rounded-full mb-2" />
                        <blockquote className="text-xl md:text-3xl font-serif italic text-foreground max-w-3xl leading-relaxed">
                            <span className="text-primary font-bold mr-1">“</span>
                            The strongest materials are not just hard;<br className="hidden md:block" />
                            they are <span className="text-primary font-medium">structured</span>.
                            <span className="text-primary font-bold ml-1">”</span>
                        </blockquote>
                        <cite className="text-sm font-bold tracking-widest text-muted-foreground uppercase not-italic">
                            — Lt. Col. Dr. Sanjeev Malik
                        </cite>
                    </div>
                </motion.div>


                {/* 3. Center Book Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                    className="relative z-20 mb-12"
                >
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        className="relative w-[280px] h-[420px] md:w-[350px] md:h-[530px] rounded-r-xl"
                    >
                        {/* Glow Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full" />

                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full relative shadow-2xl rounded-r-xl"
                        >
                            <Image
                                src="/images/book_cover_flat.jpg"
                                alt="The Graphene Mentality Book Cover"
                                fill
                                className="object-cover rounded-r-xl shadow-black/40"
                                priority
                            />
                            {/* Sheen */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent z-30 pointer-events-none rounded-r-xl"
                                style={{
                                    x: useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]),
                                    opacity: 0.3
                                }}
                            />
                            {/* Spine Shadow */}
                            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent z-20 pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </motion.div>


                {/* 4. Bottom Content Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground">
                            The <span className="text-primary">Graphene</span> Mentality
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            A soldier’s guide to building a mind that is harder than steel and lighter than air.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full hover:scale-105 transition-all">
                            Get Your Copy
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-medium border-primary/20 hover:bg-secondary/50 rounded-full hover:scale-105 transition-all">
                            Read Excerpt <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground opacity-80 mt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-background" />
                            ))}
                        </div>
                        <span>Join <strong className="text-foreground">10,000+</strong> others</span>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
