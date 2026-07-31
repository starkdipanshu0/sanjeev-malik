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
                    id="continue-reading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16 text-center scroll-mt-28 md:scroll-mt-32"
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
                            <span className="float-left text-7xl font-serif font-bold text-primary leading-[0.8] mr-3 mt-1">I</span> am an Indian Army Doctor and have served with <strong className="text-foreground">elite special forces</strong>.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            I’m the author of <strong className="text-foreground">The Graphene Mentality</strong>.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            I’m also an endurance athlete and won <strong className="text-foreground">5 Gold medals</strong> in athletics for India at <strong className="text-foreground">42nd World Medical and Health Games</strong>, widely regarded as Olympics for Healthcare Professionals worldwide.
                        </motion.p>

                        {/* Continuation point - the homepage bio ends just above this. */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                        >
                            Across every battlefield and challenge I have faced, I discovered one powerful truth:
                            <span className="block mt-2 text-foreground font-medium">
                                The human mind is far stronger and more adaptable than we think.
                            </span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            My journey taught me that real success doesn’t come from talent, genetics, or intelligence alone — it comes from the <strong className="text-foreground">right mindset</strong>.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="space-y-2 border-l-2 border-primary/30 pl-5 text-left"
                        >
                            <p>A mindset that makes you fearless enough to pursue bold decisions.</p>
                            <p>A mindset that keeps you focused and disciplined to do the hard but necessary work every day.</p>
                            <p>A mindset that helps you grow consistently.</p>
                            <p>And a mindset that makes you resilient enough to rise stronger after every failure.</p>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            This realisation inspired me to write my book, <span className="text-foreground font-serif font-semibold">The Graphene Mentality: In the Age of Distraction</span>.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.55 }}
                        >
                            Just like graphene — the world’s strongest yet most flexible material — I believe our minds too can become unbreakable, yet adaptable enough to thrive and succeed in any situation.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Through my work, I share practical strategies to build <strong className="text-foreground">focus, discipline, and mental resilience</strong>—the qualities needed to perform and succeed in every field-from academics and entrepreneurship to sports and artistic world.
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
