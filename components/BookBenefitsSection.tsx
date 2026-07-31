"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, Anchor, Mountain, Route } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
    {
        icon: Crosshair,
        text: "Sharpen focus that cuts through the distraction",
        highlight: "focus",
        featured: true
    },
    {
        icon: Anchor,
        text: "Build discipline that holds when motivation fades",
        highlight: "discipline"
    },
    {
        icon: Mountain,
        text: "Forge resilience that outlasts every setback",
        highlight: "resilience"
    },
    {
        icon: Route,
        text: "Train adaptability that bends without breaking",
        highlight: "adaptability"
    }
];

/* Surface recipes live in globals.css as the `plate` / `well` utilities so
   this section and ConnectSection share one definition instead of two copies. */
const PLATE_BASE =
    "plate group relative flex h-full overflow-hidden rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 " +
    "transition-[box-shadow,border-color] duration-300 ease-out " +
    "hover:shadow-plate-pressed motion-reduce:transition-none";

const PLATE_FEATURED = "plate-featured";

/* Well: milled INTO the plate - the optical opposite of the plate itself.
   Two opposing depth signals on one surface is what sells dimensionality. */
const WELL_BASE =
    "relative shrink-0 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-lg " +
    "transition-[background-color,box-shadow,color,transform] duration-300 ease-out " +
    "group-hover:-translate-y-px group-hover:bg-primary group-hover:text-on-primary-strong " +
    "group-hover:shadow-well-hover " +
    "motion-reduce:transition-none motion-reduce:group-hover:translate-y-0";

/* Lit well on the focal plate - orange fill with near-black glyph (6.1:1).
   White on orange is 2.73:1 and is never used anywhere in this section. */
const WELL_LIT = "well-lit";

const WELL_DORMANT = "well";

const BookBenefitsSection = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="w-full py-10 md:py-32 bg-background relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-muted/40 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

            {/* Hairline grid texture. Inlined as a CSS gradient - the previous
                /grid-pattern.svg does not exist in public/ and rendered nothing. */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(120,90,60,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,90,60,0.10)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-16 lg:gap-24 items-center">

                    {/* Header Section */}
                    <div className="space-y-4 md:space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-serif text-3xl md:text-6xl font-bold text-foreground leading-[1.1]">
                                How the <span className="text-primary">Graphene Mentality</span> <br />
                                will benefit you
                            </h2>
                            <div className="h-1.5 w-24 bg-primary/20 mt-4 md:mt-6 rounded-full mx-auto lg:mx-0 overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-muted-foreground text-base md:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0"
                        >
                            Through simple and practical strategies, this book will help you build an unbreakable mind.
                        </motion.p>
                    </div>

                    {/* Benefits Grid - chassis tray recessed into the page (desktop only) */}
                    <div className="relative rounded-2xl p-0 md:p-3 bg-transparent md:bg-chassis shadow-none md:shadow-chassis">
                        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-3 md:gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                    whileHover={shouldReduceMotion ? undefined : { y: 2, transition: { duration: 0.2, ease: "easeOut" } }}
                                    className={cn(PLATE_BASE, benefit.featured && PLATE_FEATURED)}
                                >
                                    {/* Illuminated power-rail on the focal plate */}
                                    {benefit.featured && (
                                        <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
                                    )}

                                    {/* Engraved part number - letterpress deboss */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none select-none hidden md:block absolute top-4 right-4 font-serif font-bold text-xs leading-none text-ink-soft/70 [text-shadow:0_1px_0_var(--bevel-light)]"
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="relative z-10 h-full w-full flex flex-row md:flex-col items-center md:items-start md:justify-between gap-4 md:gap-5">
                                        <div className="flex flex-col md:w-full">
                                            <div
                                                className={cn(
                                                    WELL_BASE,
                                                    benefit.featured ? WELL_LIT : WELL_DORMANT
                                                )}
                                            >
                                                <benefit.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                                            </div>

                                            {/* Milled groove - 1px dark line over a 1px light line */}
                                            <div
                                                aria-hidden="true"
                                                className="hidden md:block mt-4 h-px w-10 bg-groove shadow-[0_1px_0_0_var(--bevel-light)]"
                                            />
                                        </div>

                                        <p className="w-full text-[0.9375rem] md:text-[17px] text-ink font-medium leading-snug md:leading-[1.45] text-balance md:mt-auto">
                                            {benefit.text.split(benefit.highlight).map((part, i, arr) => (
                                                <span key={i}>
                                                    {part}
                                                    {i < arr.length - 1 && (
                                                        <span className="font-semibold text-emphasis underline decoration-2 decoration-primary underline-offset-[3px]">
                                                            {benefit.highlight}
                                                        </span>
                                                    )}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookBenefitsSection;
