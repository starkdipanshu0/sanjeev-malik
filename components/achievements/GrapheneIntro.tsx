"use client";

import { motion } from "framer-motion";

const GrapheneIntro = () => {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4">
                        The Philosophy
                    </span>

                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                        In the Age of Distraction, Build <br />
                        <span className="text-primary">Focus and Mental Strength</span> to Fulfil Your Dreams
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Notifications never stop. Attention is scattered over too many things. Passion dilutes, purpose fades—and dreams are quietly sabotaged.
                        </p>
                        <p>
                            In a world overwhelmed by distractions, <strong className="text-foreground">Lt Col Sanjeev Malik</strong>—a Special Forces doctor and a renowned endurance athlete—introduces <span className="text-foreground font-semibold">The Graphene Mentality</span>. More than a book, it is a practical guide for building unbreakable focus and mental strength. He believes that most people fail to pursue their passions not because they lack talent, but because they lack a strong purpose and a disciplined mindset. The Graphene Mentality bridges that gap.
                        </p>
                    </div>

                    <div className="bg-secondary/20 p-8 rounded-2xl border border-primary/10 mt-12">
                        <h3 className="text-xl font-bold text-foreground mb-6">
                            Through simple, actionable strategies, you will learn how to:
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-4 text-left">
                            {[
                                "Cut through constant distractions",
                                "Develop laser-sharp focus",
                                "Build discipline anchored in a higher purpose",
                                "Stay resilient and committed even when motivation fades"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-foreground/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-6 py-2 text-balance">
                        "Your dreams deserve your full attention. It’s time to reclaim it."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default GrapheneIntro;
