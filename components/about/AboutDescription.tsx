"use client";

import { motion } from "framer-motion";

const AboutDescription = () => {
    return (
        <section className="relative py-24 md:py-32 bg-secondary/5 overflow-hidden">
            {/* Watermark Background */}
            <div className="absolute top-20 right-0 pointer-events-none opacity-[0.03] select-none">
                <span className="text-[20vw] font-serif font-black leading-none text-foreground">
                    JOURNEY
                </span>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        From the <span className="text-primary">Frontlines</span> to the <span className="text-primary">Boardroom</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Main Story Text */}
                    <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed text-justify hyphens-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="float-left text-7xl font-serif font-bold text-primary leading-[0.8] mr-3 mt-1">L</span>
                            ife has given me many uniforms to wear, from serving with the <strong className="text-foreground">Special Forces</strong> and the <strong className="text-foreground">President’s Bodyguard</strong> to representing India at the <strong className="text-foreground">World Medical and Health Games</strong> where I was blessed to win 5 Gold medals in Athletics.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            While serving these roles, I've learnt one of the most important lessons of my life! The human mind is far stranger and more adaptable than we think. My journey taught me that real success doesn't come from talent, genetics, or intelligence—it comes from the <strong className="text-foreground">Right Mindset</strong>.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            A mindset that makes you fearless to pursue your bold decisions. A mindset that makes you focused and disciplined to do the boring but necessary work everyday. A mindset that makes you resilient to rise stronger after every failure.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            This realization inspired me to write my book, <span className="text-foreground font-serif font-semibold">The Graphene Mentality</span>. Just like Graphene—the world’s strongest yet most flexible material—I believe our minds too can become unbreakable yet adaptable enough to thrive and succeed in any situation.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Through my work, I share practical strategies to build focus, discipline and mental resilience needed to thrive, perform, and succeed in any field especially in an age of constant distraction.
                        </motion.p>
                    </div>

                    {/* Pull Quote Column */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="sticky top-32"
                        >
                            <div className="relative p-8 bg-background rounded-2xl border border-primary/10 shadow-xl">
                                <div className="absolute -top-6 -left-4 text-8xl text-primary/10 font-serif leading-none">“</div>
                                <blockquote className="relative z-10 text-2xl font-serif text-foreground leading-normal">
                                    The strongest battles are not fought on the field, but in the mind.
                                    <span className="block mt-4 text-primary font-bold not-italic text-lg tracking-wide uppercase">
                                        — Conquer Yourself
                                    </span>
                                </blockquote>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutDescription;
