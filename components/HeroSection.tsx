"use client";

import Image from "next/image";
import { motion, useTransform, useSpring, useMotionValue, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
    const shouldReduceMotion = useReducedMotion();

    // Mouse position state for parallax
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
    const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]);

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
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-dvh w-full overflow-hidden bg-background flex flex-col items-center justify-center pt-24 pb-6 md:pt-24 md:pb-4 perspective-[1000px]"
        >
            {/* 1. Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Large Background Typography (Static/Subtle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.02]">
                <h1 className="text-[25vw] font-serif font-black leading-none text-foreground blur-sm">
                    GRAPHENE
                </h1>
            </div>


            <div className="container relative z-10 mx-auto px-4 md:px-12 flex flex-col items-center text-center max-w-5xl gap-[clamp(1.25rem,2.6vh,1.75rem)]">

                {/* 2. Top Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative"
                >
                    <div className="flex flex-col items-center gap-[clamp(0.5rem,1.2vh,1rem)]">
                        <span className="w-12 h-1 bg-primary rounded-full" />
                        <blockquote className="font-serif text-foreground max-w-3xl leading-normal md:leading-snug text-[clamp(1rem,2.2vh,1.375rem)] md:text-[clamp(1.25rem,3.1vh,1.875rem)]">
                            <span className="text-primary font-bold mr-1">“</span>
                            In the Age of Distraction,<br className="hidden md:block" />{" "}
                            Build <span className="text-primary font-medium">Focus</span> and <span className="text-primary font-medium">Mental Strength</span> to Fulfill your <span className="text-primary font-medium">Dreams</span>
                            <span className="text-primary font-bold ml-1">”</span>
                        </blockquote>
                    </div>
                </motion.div>


                {/* 3. Center Book Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                    className="relative z-20"
                >
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        className="relative aspect-[646/1000] h-[clamp(170px,28vh,300px)] max-md:[@media(min-height:760px)]:h-[clamp(170px,34vh,340px)] md:h-[clamp(220px,46vh,520px)] md:[@media(min-height:820px)]:h-[clamp(220px,50vh,540px)] rounded-r-xl"
                    >
                        {/* Glow Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full" />

                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={shouldReduceMotion ? undefined : { y: [-6, 6, -6] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full relative shadow-2xl rounded-r-xl"
                        >
                            <Image
                                src="/images/book_cover_flat.jpg"
                                alt="The Graphene Mentality Book Cover"
                                fill
                                sizes="(max-width: 768px) 220px, 340px"
                                className="object-cover rounded-r-xl shadow-black/40"
                                priority
                            />
                            {/* Sheen */}
                            {!shouldReduceMotion && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent z-30 pointer-events-none rounded-r-xl"
                                    style={{
                                        x: sheenX,
                                        opacity: 0.3
                                    }}
                                />
                            )}
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
                    className="flex flex-col items-center gap-[clamp(1rem,2.2vh,1.5rem)] w-full"
                >
                    <div className="space-y-[clamp(0.625rem,1.4vh,1rem)]">
                        <h2 className="font-serif font-bold tracking-tight text-foreground leading-[1.15] text-[clamp(1.5rem,3.4vh,2rem)] md:text-[clamp(2rem,5vh,3.5rem)]">
                            The <span className="text-primary">Graphene</span> Mentality
                        </h2>
                        <p className="text-foreground/70 md:text-muted-foreground text-base max-w-2xl mx-auto leading-normal md:leading-snug">
                            Inspired from the element Graphene that is 200 times stronger than steel and yet highly flexible,
                            this book will make you strong and adaptable to deal with all challenges in pursuit of your dreams.
                        </p>
                    </div>

                    <form className="flex flex-row gap-2 sm:gap-3 w-full justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 min-w-0 h-11 md:h-12 bg-background/80 backdrop-blur-sm border-primary/20 focus:ring-primary/50 text-sm md:text-base rounded-full px-4 md:px-6"
                        />
                        <Button size="lg" type="submit" className="shrink-0 h-11 md:h-12 px-4 md:px-8 text-sm md:text-base font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full hover:scale-105 transition-all whitespace-nowrap">
                            Get Free Chapter
                        </Button>
                    </form>

                </motion.div>

            </div>

            {/* 5. Scroll Cue */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none"
            >
                <span className="w-px h-4 bg-gradient-to-b from-transparent to-primary/40" />
                <motion.span
                    animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4 text-primary/50" />
                </motion.span>
            </motion.div>
        </section>
    );
};

export default HeroSection;
