"use client";

import { motion } from "framer-motion";

const themes = [
    { title: "Military Precision", icon: "⚔️" },
    { title: "Corporate Agility", icon: "🏢" },
    { title: "Mental Toughness", icon: "🧠" },
    { title: "Stoic Philosophy", icon: "🏛️" },
    { title: "Adaptability", icon: "🌊" },
    { title: "Leadership", icon: "🦁" },
];

const KeyThemes = () => {
    return (
        <section className="py-20 border-t border-border bg-gradient-to-b from-transparent to-secondary/30">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-16"
                >
                    Key <span className="text-primary">Themes</span>
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {themes.map((theme, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, backgroundColor: "rgba(var(--primary), 0.05)" }}
                            className="flex flex-col items-center justify-center p-6 border border-border rounded-xl bg-background shadow-sm hover:shadow-md transition-all cursor-default group"
                        >
                            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 block">{theme.icon}</span>
                            <span className="font-medium text-foreground text-sm tracking-wide">{theme.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyThemes;
