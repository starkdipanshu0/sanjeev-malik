"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export const HistoricVictory = () => {
    return (
        <section className="py-24 bg-[#050505] text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/5">
                            {/* Placeholder for Victory Image - Replace with real image */}
                            <Image
                                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
                                alt="Historic Victory Moment"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                            {/* Overlay frame */}
                            <div className="absolute inset-0 border border-white/10 m-4 rounded-sm pointer-events-none" />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Right Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                                A Moment of <span className="text-primary italic">Historic Victory</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent" />
                        </div>

                        <div className="relative pl-8 border-l-2 border-primary/30">
                            <Quote className="absolute top-0 left-0 -ml-3 -mt-3 w-6 h-6 text-primary fill-primary/20 bg-[#050505]" />
                            <p className="text-lg md:text-xl text-white/80 font-serif italic leading-relaxed">
                                "This victory wasn't just for me. It was a testament to the years of rigorous training, the sacrifices made, and the unyielding spirit of our armed forces."
                            </p>
                        </div>

                        <div className="prose prose-invert text-white/60 font-sans leading-relaxed">
                            <p>
                                In an event defined by intense competition and global stakes, Lt. Col. Sanjeev Malik stood out not just for his skill, but for his unwavering composure under pressure. Securing this title marked a pivotal moment in sports history for the armed forces.
                            </p>
                            <p>
                                Against odds and facing world-class adversaries, the strategy was clear: focus, execute, and adapt. This triumph has since inspired a new generation of athletes within the services to aim for the highest pedestals of international recognition.
                            </p>
                        </div>

                        <div className="pt-6 grid grid-cols-2 gap-8 border-t border-white/10">
                            <div>
                                <h4 className="text-3xl font-serif text-white">5+</h4>
                                <p className="text-sm text-white/40 uppercase tracking-widest mt-1">Gold Medals</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-white">1st</h4>
                                <p className="text-sm text-white/40 uppercase tracking-widest mt-1">Indian Army Officer</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
