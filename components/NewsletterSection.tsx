"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-background border-t border-border/40">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">

                    {/* Left Column: Heading & Copy */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 text-primary"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase">Newsletter</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight"
                        >
                            Subscribe to my <br />
                            <span className="text-primary">weekly Newsletter</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-muted-foreground text-lg max-w-md leading-relaxed"
                        >
                            Get powerful mindset-building tips delivered straight to your inbox.
                        </motion.p>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-secondary/30 p-8 md:p-10 rounded-2xl border border-primary/10 lg:mb-2"
                    >
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="h-12 bg-background border-border focus-visible:ring-primary"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                Subscribe Now
                            </Button>
                            <p className="text-xs text-muted-foreground text-center pt-2">
                                Join <strong>5,000+ leaders</strong>. Unsubscribe anytime.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
