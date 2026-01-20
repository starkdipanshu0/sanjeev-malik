"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Users, TrendingUp, Plus, Minus } from "lucide-react";
import { useState } from "react";

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
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-12 md:py-20 bg-background">
            <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
                        Unlock Your Potential with <span className="text-primary italic">The Graphene Mentality</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden border transition-colors duration-300 ${openIndex === index
                                ? "bg-secondary/30 border-primary/20"
                                : "bg-background border-transparent hover:bg-secondary/20"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-full transition-colors duration-300 ${openIndex === index ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                                        }`}>
                                        <benefit.icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? "text-primary" : "text-foreground"
                                        }`}>
                                        {benefit.title}
                                    </span>
                                </div>
                                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-muted-foreground" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                                            <p className="text-muted-foreground leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookBenefitsSection;
