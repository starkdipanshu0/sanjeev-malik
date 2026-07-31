"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";

const BookHero = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state for parallax (simplified from HeroSection)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
            className="relative min-h-[100dvh] w-full overflow-hidden bg-background flex items-center justify-center pt-32 pb-12 md:py-24 lg:pt-40 perspective-[1000px]"
        >
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('/images/noise.png')" }}></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                {/* 3D Book Visual - Mobile: Show First (smaller) / Desktop: Show Second (right column behavior) 
                    Re-ordering for mobile to show image first or keeping text first? 
                    Usually Hero text is first. Key is size.
                */}

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4 md:space-y-8 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start"
                >
                    {/* <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-4">
                        International Bestseller
                    </div> */}

                    <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
                        The <span className="text-primary">Graphene</span> Mentality
                    </h1>

                    <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Unlock the secret to becoming unbreakable. Be the strongest yet most flexible version of yourself.
                        <span className="block mt-2 md:mt-4 text-sm md:text-base font-medium text-emphasis">
                            By Author Lt. Col. Sanjeev Malik
                        </span>
                    </p>

                    <div className="flex flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2 md:pt-4 w-full md:w-auto px-2 md:px-0">
                        <a href="https://www.amazon.in/Graphene-Mentality-Distraction-Strength-Deliver/dp/8198845410/ref=sr_1_3?sr=8-3" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
                            <Button size="lg" className="w-full">
                                Buy Now
                            </Button>
                        </a>
                        <Button
                            size="lg"
                            variant="outline"
                            className="flex-1 md:flex-none"
                            onClick={() => {
                                document.getElementById("free-chapter")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Read Sample
                        </Button>
                    </div>
                </motion.div>

                {/* 3D Book Visual */}
                <div className="flex items-center justify-center perspective-[1000px] order-1 lg:order-2 mb-4 lg:mb-0">
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                        className="relative w-[180px] h-[280px] sm:w-[240px] sm:h-[360px] md:w-[330px] md:h-[495px] shadow-2xl rounded-r-xl md:rounded-r-2xl"
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="/images/book_cover_flat.jpg"
                                alt="The Graphene Mentality Book Cover"
                                fill
                                className="object-cover rounded-r-xl md:rounded-r-2xl shadow-[10px_10px_30px_rgba(0,0,0,0.3)] md:shadow-[20px_20px_60px_rgba(0,0,0,0.3)]"
                                priority
                            />
                            {/* Spine Effect */}
                            <div className="absolute top-0 bottom-0 left-0 w-[8px] md:w-[15px] bg-gradient-to-r from-white/20 to-transparent z-10 pointer-events-none" />
                            {/* Sheen */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-20 pointer-events-none rounded-r-xl md:rounded-r-2xl"
                                style={{
                                    x: useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]),
                                    opacity: useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.4])
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookHero;
