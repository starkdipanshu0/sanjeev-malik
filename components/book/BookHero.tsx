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
            className="relative min-h-[90vh] w-full overflow-hidden bg-background flex items-center justify-center py-24 perspective-1000"
        >
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('/images/noise.png')" }}></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                        International Bestseller
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
                        The <span className="text-primary">Graphene</span> Mentality
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Unlock the secret to becoming unbreakable. Like graphene, be the strongest yet most flexible version of yourself.
                        <span className="block mt-4 text-base font-medium text-primary">
                            By Author Lt. Col. Sanjeev Malik
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:-translate-y-1 transition-all duration-300">
                            Buy Now
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg font-medium border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                            onClick={() => {
                                document.getElementById("free-chapter")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Read Free Chapter
                        </Button>
                    </div>
                </motion.div>

                {/* 3D Book Visual */}
                <div className="flex items-center justify-center perspective-1000">
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                        className="relative w-[300px] h-[460px] md:w-[400px] md:h-[600px] shadow-2xl rounded-r-2xl"
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
                                className="object-cover rounded-r-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.3)]"
                                priority
                            />
                            {/* Spine Effect (Simple visual trick) */}
                            <div className="absolute top-0 bottom-0 left-0 w-[15px] bg-gradient-to-r from-white/20 to-transparent z-10 pointer-events-none" />
                            {/* Sheen */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-20 pointer-events-none rounded-r-2xl"
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
