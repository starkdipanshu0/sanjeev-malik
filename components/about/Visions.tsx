"use client";

import { motion } from "framer-motion";

const Visions = () => {
    return (
        <section className="relative py-32 bg-zinc-950 text-white overflow-hidden flex items-center justify-center min-h-[60vh]">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('/images/noise.png')" }} />

            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block py-1 px-4 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-widest uppercase mb-8 text-white/60">
                        Vision &amp; Mission
                    </span>

                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold leading-tight mb-8">
                        To empower a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-gradient">Billion Minds</span> with the Graphene Mentality
                    </h2>

                    <p className="text-lg md:text-xl font-light text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-12">
                        To help students, professionals, leaders and athletes develop <strong className="text-white">focus</strong>, <strong className="text-white">resilience</strong>, and <strong className="text-white">discipline</strong> for peak performance by teaching the principles of the Graphene Mentality.
                    </p>

                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Decorative Signature Placeholder */}
                            <span className="font-serif text-3xl md:text-4xl text-white/80 transform -rotate-6">
                                Sanjeev Malik
                            </span>
                            <div className="absolute -bottom-2 w-full h-0.5 bg-primary/50 opacity-50 transform -rotate-1" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Visions;
