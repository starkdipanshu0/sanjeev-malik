"use client";

import { motion } from "framer-motion";

const BookSynopsis = () => {
    return (
        <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03]">
                <h2 className="text-[20vw] font-serif font-black text-foreground whitespace-nowrap">
                    GRAPHENE
                </h2>
            </div>

            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
                            In the Age of Distraction, Build <span className="text-primary">Focus</span> and Mental Strength to Fulfil Your Dreams
                        </h2>
                        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-8" />

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                            &ldquo;Notifications never stop. Attention is scattered over too many things. Passion dilutes, purpose fades—and dreams are quietly sabotaged.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
                    >
                        <p>
                            In a world overwhelmed by distractions, <strong className="text-foreground font-medium">Lt Col Sanjeev Malik</strong>—a Special Forces doctor and a renowned endurance athlete—introduces <strong className="text-foreground font-medium">The Graphene Mentality</strong>. More than a book, it is a practical guide for building unbreakable focus and mental strength. He believes that most people fail to pursue their passions not because they lack talent, but because they lack a strong purpose and a disciplined mindset. The Graphene Mentality bridges that gap.
                        </p>
                        <p>
                            Through simple, actionable strategies and real-world insights, you will learn how to:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        {[
                            "Cut through constant distractions",
                            "Develop laser-sharp focus",
                            "Build discipline anchored in a higher purpose",
                            "Stay resilient and committed to your goals—even when motivation fades"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start space-x-4 p-4 md:p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                            >
                                <div className="h-2 w-2 mt-2.5 bg-primary rounded-full shrink-0 shadow-[0_0_10px_var(--primary)]" />
                                <span className="text-foreground font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8 text-lg text-muted-foreground leading-relaxed text-center pt-8"
                    >
                        <p>
                            This is not a book of theories. It is a practical roadmap for anyone who wants to take control of their mind, strengthen willpower, and move steadily toward meaningful goals.
                        </p>
                        <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="font-medium text-foreground text-xl mb-6">
                                If you’re tired of starting and stopping, feeling overwhelmed, or losing direction, this book will help you build the mindset required to stay focused, consistent, and committed.
                            </p>
                            <p className="font-serif text-2xl md:text-3xl text-primary text-balance">
                                Your dreams deserve your full attention. It’s time to reclaim it.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookSynopsis;
