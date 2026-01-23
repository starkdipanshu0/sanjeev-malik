"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Mic, Users, Target, Star, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
    {
        icon: Award,
        title: "5 Gold Medals",
        description: "42nd World Medicine and Health Games, Columbia (2023)",
        className: "bg-gradient-to-br from-primary/10 to-transparent border-primary/20",
        iconClass: "w-12 h-12"
    },
    {
        icon: Star,
        title: "National Recognition",
        description: "Felicitated by COAS Gen Upender Dwivedi & Shri Bhupinder Singh Hooda",
        className: "",
        iconClass: "w-8 h-8"
    },
    {
        icon: Globe,
        title: "Global Representation",
        description: "Represented India on international platforms since 2010",
        className: "",
        iconClass: "w-8 h-8"
    }
];

const KeyAchievements = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background noise texture */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-soft-light" style={{ backgroundImage: "url('/images/noise.png')" }} />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
                    >
                        Milestones of <span className="text-primary italic">Excellence</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden p-8 rounded-3xl border border-border/40 bg-card hover:bg-secondary/10 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]",
                                item.className
                            )}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <item.icon className="w-24 h-24 text-primary rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className={cn("text-primary mb-4 p-3 bg-primary/5 rounded-2xl w-fit", item.iconClass ? "" : "")}>
                                    <item.icon className={cn("text-primary", item.iconClass || "w-8 h-8")} />
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground/80 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyAchievements;
