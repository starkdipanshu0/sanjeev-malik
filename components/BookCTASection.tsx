"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AMAZON_URL = "https://www.amazon.in/Graphene-Mentality-Distraction-Strength-Deliver/dp/8198845410/ref=sr_1_3?sr=8-3";

const BookCTASection = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state for parallax
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
            className="w-full py-20 px-6 bg-foreground text-background relative overflow-hidden perspective-[1000px]"
        >
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 opacity-30" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6 text-center md:text-left"
                    >
                        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm w-fit mx-auto md:mx-0">
                            <BookOpen size={16} className="text-primary" />
                            <span className="text-sm font-medium tracking-wide text-background/80">BESTSELLER</span>
                        </div> */}

                        <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
                            Ready to Build Your <br />
                            <span className="text-primary">Graphene Mentality?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-background/70 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Discover the secrets to build laser sharp focus, discipline, and mental resilience. Practical insights on building a strong mindset.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                            <Button size="xl" className="group" asChild>
                                <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                                    <span>Grab Your Copy</span>
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Book Card Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full max-w-sm"
                    >
                        {/* Card Container */}
                        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 group">

                            {/* 3D Book Container */}
                            <motion.div
                                style={{
                                    rotateX,
                                    rotateY,
                                    transformStyle: "preserve-3d"
                                }}
                                className="relative w-[140px] h-[210px] md:w-[180px] md:h-[270px] mb-8"
                            >
                                {/* Glow Behind Book */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/30 blur-3xl rounded-full" />

                                {/* Floating Animation Wrapper */}
                                <motion.div
                                    animate={{ y: [-8, 8, -8] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full h-full relative shadow-2xl rounded-r-md"
                                >
                                    <Image
                                        src="/images/book_cover_flat.jpg"
                                        alt="The Graphene Mentality Book Cover"
                                        fill
                                        className="object-cover rounded-r-md shadow-black/50"
                                        priority
                                    />
                                    {/* Sheen */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent z-30 pointer-events-none rounded-r-md"
                                        style={{
                                            x: useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]),
                                            opacity: 0.4
                                        }}
                                    />
                                    {/* Spine Shadow */}
                                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 to-transparent z-20 pointer-events-none" />
                                    {/* Spine Edge */}
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-gray-700 to-gray-600 -translate-x-full rounded-l-sm" />
                                </motion.div>
                            </motion.div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/10 mb-6" />

                            {/* Logos / Available Now */}
                            <div className="space-y-3 w-full">
                                <p className="text-xs font-semibold tracking-widest text-primary uppercase">Available Now On</p>
                                <div className="flex items-center justify-center gap-4">
                                    <Button variant="onDark" size="sm" asChild>
                                        <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                                            <ShoppingCart className="w-4 h-4" />
                                            <span>Amazon</span>
                                        </a>
                                    </Button>
                                    {/* Add more logos here if needed */}
                                </div>
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl -z-10 animate-pulse-slow" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookCTASection;
