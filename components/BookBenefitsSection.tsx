"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, TrendingUp } from "lucide-react";

const benefits = [
    {
        icon: Shield,
        title: "Unbreakable Resilience",
        description:
            "Forge a mind that thrives under pressure. Learn to transmute stress into strength and turn every obstacle into a stepping stone for success.",
    },
    {
        icon: Target,
        title: "Laser Focus",
        description:
            "Cut through the noise of the digital age. Master the art of deep concentration to achieve your most ambitious goals without distraction.",
    },
    {
        icon: Users,
        title: "Strategic Leadership",
        description:
            "Apply battle-tested strategies from the army to the corporate world. Lead your team with clarity, decisiveness, and unwavering empathy.",
    },
    {
        icon: TrendingUp,
        title: "Sustainable Growth",
        description:
            "Move beyond fleeting motivation. Build robust mental systems and habits that ensure continuous personal and professional evolution.",
    },
];

const BookBenefitsSection = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-background">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
                        How This Book Will <span className="text-primary italic">Help You</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-secondary/50 transition-colors duration-300 border border-transparent hover:border-primary/10"
                        >
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookBenefitsSection;
