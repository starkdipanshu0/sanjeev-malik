"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutAuthorSection = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-secondary/30 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Column: Image (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center md:justify-start"
                    >
                        <div className="relative group">
                            {/* Offset Border Frame */}
                            <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl z-0 transition-all duration-500 group-hover:inset-[-1.5rem] group-hover:border-primary/40" />

                            {/* Background Pattern/Block */}
                            <div className="absolute top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                            {/* Main Image Container */}
                            <div className="relative aspect-[3.5/4.5] w-64 md:w-80 lg:w-96 overflow-hidden rounded-xl shadow-2xl bg-muted">
                                <Image
                                    src="/images/homeauther.jpeg"
                                    alt="Lt. Col. Dr. Sanjeev Malik"
                                    fill
                                    className="object-cover object-[45%_50%] transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={false}
                                />

                                {/* Professional Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                {/* Inner Border */}
                                <div className="absolute inset-0 border border-border/60 rounded-xl z-20" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col space-y-4 md:space-y-8 text-center md:text-left mt-[-1rem] md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
                                Hi, I am <span className="text-primary">Lt Col Sanjeev Malik</span>
                            </h2>
                            <p className="text-base md:text-xl font-medium text-foreground mb-4">
                                I am an Indian Army Doctor and have served with elite special forces.
                            </p>

                            {/* Reading continues on /about from the paragraph after these. */}
                            <div className="space-y-3 md:space-y-5 text-sm md:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    I’m the author of <span className="font-semibold text-foreground">The Graphene Mentality</span>.
                                </p>
                                <p>
                                    I’m also an endurance athlete and won <span className="font-semibold text-foreground">5 Gold medals</span> in athletics for India at <span className="font-semibold text-foreground">42nd World Medical and Health Games</span>, widely regarded as Olympics for Healthcare Professionals worldwide.
                                </p>
                            </div>

                            <div className="pt-8">
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/about#continue-reading">
                                        Continue Reading
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutAuthorSection;
