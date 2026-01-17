"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutAuthorSection = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-secondary/30">
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
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-2xl">
                            {/* Author Image */}
                            <Image
                                src="/images/author.jpg"
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
                    <div className="flex flex-col space-y-8">
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

                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                                I am <br />
                                <span className="text-primary italic">Sanjeev Malik</span>
                            </h2>

                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    As a Lieutenant Colonel in the Indian Army, I learned that the strongest battles are not fought on the field, but in the mind.
                                    My journey from leading troops in high-stakes environments to mentoring corporate leaders has taught me one universal truth:
                                    <strong>Resilience is a skill, not a gift.</strong>
                                </p>
                                <p>
                                    I wrote <em>The Graphene Mentality</em> to decode the structure of an unbreakable mind.
                                    Like Graphene, we must be incredibly strong yet flexible enough to adapt.
                                    My mission is to help you dream bigger, dare greater, and deliver beyond your perceived limits.
                                </p>
                            </div>

                            <div className="pt-8">
                                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                                    <Link href="/about">
                                        Read Full Story
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
