"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state for parallax
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the rotation
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Map mouse position to rotation degrees
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

    // Sheen Effect Movement
    const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
    const sheenOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.5]);

    // Background Parallax
    const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["5%", "-5%"]);
    const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["5%", "-5%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Relative to center
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
            className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-background flex items-center justify-center py-12 md:py-20 perspective-1000"
        >
            {/* 1. Volumetric Light / Ambient Glow using Semantic Colors */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 max-w-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* 2. Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" style={{ backgroundImage: "url('/images/noise.png')" }}></div>

            {/* 3. Massive Background Typography (Parallax) using Foreground/Primary */}
            <motion.div
                style={{ x: bgX, y: bgY }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
            >
                <h1 className="text-[15vw] md:text-[18vw] font-serif font-black text-primary/5 whitespace-nowrap tracking-tighter select-none leading-none blur-sm">
                    GRAPHENE
                </h1>
            </motion.div>

            {/* 4. Interactive Cursor Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-30 z-0 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [mouseXSpring, mouseYSpring],
                        ([latestX, latestY]: any[]) => {
                            return `radial-gradient(1000px circle at ${(latestX + 0.5) * 100}% ${(latestY + 0.5) * 100}%, rgba(var(--primary), 0.1), transparent 60%)`;
                        }
                    )
                }}
            />

            {/* 5. Floating Dust Motes */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/20 rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: Math.random() * 0.5
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [null, 0, null]
                    }}
                    transition={{
                        duration: Math.random() * 20 + 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}

            <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center space-y-8 text-center lg:text-left relative z-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase shadow-sm backdrop-blur-sm">
                                    Bestselling author Lt. Col. Dr. Sanjeev Malik
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="font-serif text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none text-foreground drop-shadow-sm relative"
                            >
                                The Graphene <br />
                                <span className="relative inline-block text-primary pb-2">
                                    Mentality
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                                className="flex flex-col gap-2"
                            >
                                <h2 className="text-xl md:text-2xl font-medium text-foreground">
                                    Get a <span className="text-primary italic font-serif">Free Chapter</span> now
                                </h2>
                                <p className="text-muted-foreground text-sm max-w-[400px] mx-auto lg:mx-0">
                                    Join <strong>10,000+ readers</strong> building an unbreakable mind.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="w-full max-w-md mx-auto lg:mx-0 pt-2"
                        >
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-12 text-base bg-background/50 border-primary/20 focus-visible:ring-primary placeholder:text-muted-foreground/50"
                                />
                                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 h-12 px-8 text-base font-bold shadow-lg shrink-0">
                                    Get Free Chapter
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 italic">
                                Start your journey to resilience today.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: 3D Parallax Book */}
                    <div className="flex items-center justify-center perspective-1000 relative z-20">
                        {/* 6. Cinematic Backlight / Rim Light */}
                        <motion.div
                            style={{ scale: useTransform(mouseYSpring, [-0.5, 0.5], [0.9, 1.1]) }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] bg-primary/10 blur-[90px] rounded-full z-0 opacity-60 mix-blend-multiply"
                        />

                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            initial={{ opacity: 0, scale: 0.6, rotateY: 90 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="relative w-[320px] h-[480px] md:w-[450px] md:h-[650px] cursor-grab active:cursor-grabbing z-10 group"
                        >
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                animate={{ y: [-15, 10, -15] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Realistic Contact Shadow */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-black/20 blur-[30px] rounded-[50%] transition-transform duration-300 group-hover:scale-95 opacity-60" />

                                {/* The Book Image Container */}
                                <div
                                    className="relative w-full h-full rounded-r-[12px] shadow-2xl"
                                    style={{
                                        transform: "translateZ(50px)",
                                        boxShadow: "rgba(0, 0, 0, 0.15) -25px 25px 80px -15px"
                                    }}
                                >
                                    <Image
                                        src="/images/book_cover_flat.jpg"
                                        alt="The Graphene Mentality Book Cover"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />

                                    {/* 7. Dynamic Specular Highlight (The "Sheen") */}
                                    <motion.div
                                        style={{
                                            background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.1) 50%, transparent 55%)",
                                            x: sheenX,
                                            opacity: sheenOpacity
                                        }}
                                        className="absolute inset-0 z-30 pointer-events-none mix-blend-plus-lighter rounded-lg"
                                    />

                                    {/* Edge Highlight */}
                                    <div className="absolute inset-0 border border-white/20 rounded-lg z-20 pointer-events-none" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
