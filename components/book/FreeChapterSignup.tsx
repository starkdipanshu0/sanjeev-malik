"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const FreeChapterSignup = () => {
    return (
        <section id="free-chapter" className="py-24 relative overflow-hidden bg-primary/5 border-y border-primary/10">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
                <Mail size={400} />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-6 text-center lg:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        Not sure yet? <br />
                        Read the <span className="text-primary italic">First Chapter</span> on us.
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        Dive into the "Atomic Structure of Resilience" and see if the Graphene Mentality resonates with you. No spam, just the raw manuscript delivered to your inbox.
                    </p>

                    <ul className="space-y-3 pt-4 inline-block text-left">
                        {[
                            "Instant PDF Download",
                            "Exclusive 'Resilience Checklist'",
                            "Weekly mental toughness tips"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Interactve Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 w-full max-w-md bg-background border border-border p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative"
                >
                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-md">
                        FREE ACCESS
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="h-12 bg-secondary/50 border-input focus-visible:ring-primary"
                            />
                        </div>
                        <Button size="lg" className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 shadow-lg group">
                            Send Me Chapter 1
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <p className="text-xs text-muted-foreground text-center pt-2">
                            Join 10,000+ readers. Unsubscribe at any time.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FreeChapterSignup;
