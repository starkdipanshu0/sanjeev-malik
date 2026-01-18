"use client";

import { motion } from "framer-motion";

const BookSynopsis = () => {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03]">
                <h2 className="text-[20vw] font-serif font-black text-foreground whitespace-nowrap">
                    RESILIENCE
                </h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                            Why <span className="text-primary italic">Graphene?</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-8" />

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                            Graphene is the strongest material known to mankind—200 times stronger than steel, yet lighter than paper and more flexible than rubber.
                            <br /><br />
                            <strong className="text-foreground font-medium">The Graphene Mentality</strong> parses this scientific marvel into a psychological blueprint.
                            It is not just about being tough; it is about being adaptable. It explores how we can structure our minds to withstand immense pressure
                            without breaking, turning adversity into a catalyst for growth.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                        {[
                            { title: "Hardness", desc: "Unwavering core values." },
                            { title: "Flexibility", desc: "Adaptability in chaos." },
                            { title: "Conductivity", desc: "Channeling energy efficiently." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-serif font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookSynopsis;
