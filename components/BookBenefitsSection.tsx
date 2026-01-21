"use client";

import { motion } from "framer-motion";
import { ZapOff, Crosshair, Anchor, Mountain } from "lucide-react";

const benefits = [
    {
        icon: ZapOff,
        text: "Cut through constant distractions",
        highlight: "distractions"
    },
    {
        icon: Crosshair,
        text: "Develop laser sharp focus",
        highlight: "laser sharp focus"
    },
    {
        icon: Anchor,
        text: "Build discipline anchored in a higher purpose",
        highlight: "discipline"
    },
    {
        icon: Mountain,
        text: "Stay resilient and committed to your goals even when motivation fades",
        highlight: "resilient"
    }
];

const BookBenefitsSection = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Header Section */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-[1.1]">
                                How the <br />
                                <span className="text-primary italic">Graphene Mentality</span> <br />
                                will benefit you
                            </h2>
                            <div className="h-1.5 w-24 bg-primary/20 mt-6 rounded-full mx-auto lg:mx-0 overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0"
                        >
                            Through simple and practical strategies, this book will help you forge an unbreakable mind.
                        </motion.p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="group relative p-5 md:p-8 rounded-3xl bg-secondary/10 hover:bg-secondary/20 border border-white/5 hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                                <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(var(--primary-rgb),0.3)]">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                                    </div>

                                    <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed">
                                        {benefit.text.split(benefit.highlight).map((part, i, arr) => (
                                            <span key={i}>
                                                {part}
                                                {i < arr.length - 1 && (
                                                    <span className="text-primary font-semibold">{benefit.highlight}</span>
                                                )}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookBenefitsSection;
