"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";

const perks = [
    "One practical mindset idea, every week",
    "Five-minute read, no filler",
    "Unsubscribe in one click",
];

/* bg-secondary/30 keeps the homepage alternating. This section and
   ConnectSection below it were both bg-background, so the two ran together
   with no visible seam. */
const NewsletterSection = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-secondary/30 border-t border-border/40">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Heading & Copy */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3"
                        >
                            <span className="well flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                                <Mail className="w-5 h-5" strokeWidth={2} />
                            </span>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emphasis">
                                Newsletter
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance"
                        >
                            Subscribe to my <span className="text-primary">weekly Newsletter</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-muted-foreground text-lg max-w-md leading-relaxed text-pretty"
                        >
                            Get powerful mindset-building tips delivered straight to your inbox.
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-3 pt-2"
                        >
                            {perks.map((perk) => (
                                <li key={perk} className="flex items-center gap-3 text-foreground/80">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                                        <Check className="w-3 h-3 text-emphasis" strokeWidth={3} />
                                    </span>
                                    <span className="text-base">{perk}</span>
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="plate rounded-2xl p-8 md:p-10"
                    >
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label
                                    htmlFor="newsletter-email"
                                    className="block text-xs font-bold uppercase tracking-[0.15em] text-foreground/70"
                                >
                                    Email Address
                                </label>
                                {/* Recessed field, matching the milled wells elsewhere */}
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="name@example.com"
                                    className="w-full h-12 rounded-lg px-4 text-base text-foreground bg-well placeholder:text-muted-foreground/70 shadow-(--shadow-well) border-0 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/60"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Subscribe Now
                            </Button>

                            <p className="text-xs text-muted-foreground text-center">
                                Join <strong className="text-foreground font-semibold">5,000+ leaders</strong>. Unsubscribe anytime.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
