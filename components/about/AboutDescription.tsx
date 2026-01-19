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
                        From the <span className="text-primary italic">Frontlines</span> to the <span className="text-primary italic">Boardroom</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Main Story Text */}
                    <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="float-left text-7xl font-serif font-bold text-primary leading-[0.8] mr-3 mt-1">S</span>
                            anjeev Malik's story is one of transformation and grit. Starting his journey in the Indian Army,
                            he served in some of the most challenging terrains and high-pressure situations imaginable.
                            These experiences were not just about combat; they were <strong className="text-foreground">masterclasses in leadership</strong>,
                            decision-making under fire, and the sheer power of the human spirit.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Transitioning from the military to the corporate world, Sanjeev realized that the principles of warfare—strategy,
                            discipline, and adaptability—were directly applicable to modern business challenges. He didn't just adapt;
                            he thrived, bringing a unique <span className="text-foreground font-medium italic">"soldier-scholar"</span> perspective to organizational leadership.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Today, as a sought-after speaker and mentor, he dedicates his life to decoding success.
                            He believes that true strength isn't about being rigid; it's about being structured yet flexible—like <strong className="text-primary">Graphene</strong>.
                            His philosophy helps leaders and individuals build resilience that doesn't just withstand pressure but gains strength from it.
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
                                <blockquote className="relative z-10 text-2xl font-serif italic text-foreground leading-normal">
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
