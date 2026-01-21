"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutAuthorSection = () => {
    return (
        <section className="w-full py-6 md:py-20 bg-secondary/30 min-h-[50vh] md:min-h-auto flex items-center">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Column: Image (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] w-48 md:w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-2xl border-4 border-background/50">
                            {/* Author Image */}
                            <Image
                                src="/images/homeauther.jpeg"
                                alt="Lt. Col. Dr. Sanjeev Malik"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={false}
                            />
                            {/* Overlay Gradient for cinematic feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-zinc-200 rounded-full blur-3xl -z-10 dark:bg-zinc-800" />
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col space-y-4 md:space-y-8 text-center md:text-left mt-[-1rem] md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px w-12 bg-primary" />
                                <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                    The Author
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
                                Hi, I’m <span className="text-primary italic">Lt Col Sanjeev Malik</span>
                            </h2>
                            <p className="text-base md:text-xl font-medium text-foreground mb-4">
                                I’m an Indian Army doctor and have served with elite special forces.
                            </p>

                            <div className="space-y-2 md:space-y-6 text-sm md:text-lg text-muted-foreground leading-relaxed hidden md:block">
                                <p>
                                    I’m the author of <em>The Graphene Mentality</em>.
                                </p>
                                <p>
                                    Life has given me many uniforms to wear—from serving with the Special Forces and the President's Bodyguard to representing India at the World Medical and Health Games, where I was blessed to win five gold medals in athletics.
                                </p>
                            </div>

                            {/* Mobile only simplified bio */}
                            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed md:hidden">
                                <p>
                                    <span className="font-semibold text-primary">Author of The Graphene Mentality.</span><br />
                                    From Special Forces to winning 5 gold medals for India, I help you build an unbreakable mind.
                                </p>
                            </div>

                            <div className="pt-8">
                                <Button asChild size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 hover:text-primary transition-all">
                                    <Link href="/about">
                                        Read More
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
