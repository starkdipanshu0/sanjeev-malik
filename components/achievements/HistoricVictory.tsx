"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HistoricVictory = () => {
    return (
        <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/author.jpg"
                                alt="Lt Col Sanjeev Malik with 5 Gold Medals"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white/90 font-serif text-lg leading-snug">
                                    “The only athlete in 2023 to achieve this feat.”
                                </p>
                            </div>
                        </div>
                        {/* Decorative Gold Elements */}
                        <div className="hidden md:block absolute -z-10 -top-6 -left-6 w-full h-full border border-primary/20 rounded-2xl" />
                        <div className="hidden md:block absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6 space-y-8"
                    >
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-4 border border-primary/30">
                                Historic Victory
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                5 <span className="text-primary">Gold Medals</span> <br />
                                <span className="text-white/60 text-3xl md:text-4xl">for India</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                            <p>
                                On <strong className="text-white">11 Nov 2023</strong>, while representing India, Lt Col Sanjeev Malik made history by winning <strong className="text-white">Five Gold medals</strong> in the <strong className="text-white">42nd World Medicine and Health Games</strong> held in Columbia.
                            </p>
                            <p>
                                Competing against top athletes from around the globe, he demonstrated unparalleled endurance, discipline, and mental fortitude. This victory was not just a personal milestone but a testament to the <span className="text-white font-semibold">Graphene Mentality</span>—proving that with the right mindset, age and circumstances are merely numbers.
                            </p>
                        </div>

                        <div className="pt-4 grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                <p className="text-3xl font-bold text-primary mb-1">5</p>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest">Golds</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                <p className="text-3xl font-bold text-primary mb-1">42nd</p>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest">World Games</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HistoricVictory;
