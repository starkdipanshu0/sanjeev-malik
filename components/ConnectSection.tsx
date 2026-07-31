"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

/* Raised plate - matches the machined language established in
   BookBenefitsSection. Warm-tinted cast shadow; neutral black reads as
   grey grime against the sand background. */
const PLATE =
    "relative rounded-xl md:rounded-2xl " +
    "bg-gradient-to-b from-[hsl(36_52%_97%)] to-[hsl(30_34%_92%)] " +
    "border border-t-[color:hsl(42_70%_99%)] border-l-[color:hsl(38_55%_97%)] border-r-[color:hsl(28_26%_80%)] border-b-[color:hsl(26_24%_74%)] " +
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),inset_0_-1px_0_0_rgba(120,80,40,0.10),0_1px_2px_-1px_rgba(74,45,20,0.10),0_4px_8px_-3px_rgba(74,45,20,0.14),0_14px_28px_-12px_rgba(74,45,20,0.22)]";

/* Debossed well - milled into the plate. Used for the icon chips and,
   semantically correct, for every form input. */
const WELL_INSET =
    "shadow-[inset_0_0_0_1px_rgba(74,45,20,0.12),inset_0_2px_4px_0_rgba(74,45,20,0.20),inset_0_-1px_0_0_rgba(255,255,255,0.85),0_1px_0_0_rgba(255,255,255,0.9)]";

const FIELD =
    "w-full rounded-lg bg-[hsl(30_26%_88%)] text-[hsl(24_16%_15%)] " +
    WELL_INSET + " " +
    "border-0 outline-none transition-[box-shadow,background-color] duration-300 " +
    "placeholder:text-[hsl(24_12%_45%)] " +
    "focus:bg-[hsl(32_30%_91%)] " +
    "focus-visible:shadow-[inset_0_0_0_1px_hsl(24_80%_44%),inset_0_2px_4px_0_rgba(74,45,20,0.18),0_0_0_3px_rgba(234,88,12,0.20)] " +
    "motion-reduce:transition-none";

const LABEL =
    "block text-[11px] font-bold uppercase tracking-[0.12em] text-[hsl(24_16%_28%)] mb-2 ml-0.5";

const ConnectSection = () => {
    const shouldReduceMotion = useReducedMotion();

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
    };

    return (
        <section className="w-full py-16 md:py-28 bg-background relative overflow-hidden border-t border-border/40" id="connect">
            {/* Ambient wash */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[0%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] opacity-40" />
            </div>

            {/* Hairline grid texture, inlined - matches the benefits section */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(120,90,60,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,90,60,0.10)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                        whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 lg:sticky lg:top-32"
                    >
                        <div className="space-y-5">
                            <div className="flex items-center gap-3 text-[hsl(18_70%_30%)]">
                                <Phone className="w-4 h-4" strokeWidth={2.5} />
                                <span className="text-xs font-bold tracking-[0.2em] uppercase">Live Mentoring</span>
                            </div>

                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                                Let&apos;s <span className="text-[hsl(18_70%_30%)]">Connect</span>
                            </h2>

                            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                                Every Sunday, from <span className="text-foreground font-semibold">5:00 PM to 6:00 PM</span>, I host a live mentoring session where I share my journey, lessons, and practical insights on building focus, discipline, and success.
                            </p>
                            <p className="text-foreground text-lg font-medium leading-relaxed max-w-lg">
                                Fill in the details below to reserve your spot.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                            <a
                                href="tel:+919626633688"
                                className={`${PLATE} group flex items-center gap-5 p-4 md:p-5 flex-1 transition-[box-shadow,border-color] duration-300 hover:shadow-[inset_0_2px_5px_-1px_rgba(74,45,20,0.22),inset_0_-1px_0_0_rgba(255,255,255,0.9),0_1px_0_0_rgba(255,255,255,0.65)] motion-reduce:transition-none`}
                            >
                                <div className={`w-12 h-12 rounded-lg shrink-0 flex items-center justify-center bg-[hsl(30_26%_87%)] text-[hsl(20_85%_38%)] ${WELL_INSET} transition-[background-color,color,box-shadow] duration-300 group-hover:bg-[hsl(24_95%_53%)] group-hover:text-[hsl(22_50%_10%)] motion-reduce:transition-none`}>
                                    <Phone className="w-5 h-5" strokeWidth={2} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-[hsl(24_16%_35%)] font-bold uppercase tracking-widest leading-none mb-1.5">Direct Line</p>
                                    <p className="text-lg font-serif font-bold text-[hsl(24_16%_15%)] leading-tight">+91 96266 33688</p>
                                </div>
                            </a>

                            <a
                                href="mailto:sanjeevmalik470@gmail.com"
                                className={`${PLATE} group flex items-center gap-5 p-4 md:p-5 flex-1 transition-[box-shadow,border-color] duration-300 hover:shadow-[inset_0_2px_5px_-1px_rgba(74,45,20,0.22),inset_0_-1px_0_0_rgba(255,255,255,0.9),0_1px_0_0_rgba(255,255,255,0.65)] motion-reduce:transition-none`}
                            >
                                <div className={`w-12 h-12 rounded-lg shrink-0 flex items-center justify-center bg-[hsl(30_26%_87%)] text-[hsl(20_85%_38%)] ${WELL_INSET} transition-[background-color,color,box-shadow] duration-300 group-hover:bg-[hsl(24_95%_53%)] group-hover:text-[hsl(22_50%_10%)] motion-reduce:transition-none`}>
                                    <Mail className="w-5 h-5" strokeWidth={2} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-[hsl(24_16%_35%)] font-bold uppercase tracking-widest leading-none mb-1.5">Email Inquiry</p>
                                    <p className="text-lg font-serif font-bold text-[hsl(24_16%_15%)] leading-tight break-all">sanjeevmalik470@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form - chassis plate with debossed field wells */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`${PLATE} p-6 md:p-8 lg:p-10`}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="firstName" className={LABEL}>First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formState.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        autoComplete="given-name"
                                        className={`${FIELD} h-12 px-4 text-sm`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className={LABEL}>Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formState.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        autoComplete="family-name"
                                        className={`${FIELD} h-12 px-4 text-sm`}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className={LABEL}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        autoComplete="email"
                                        className={`${FIELD} h-12 px-4 text-sm`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className={LABEL}>Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        placeholder="+91..."
                                        autoComplete="tel"
                                        className={`${FIELD} h-12 px-4 text-sm`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className={LABEL}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you today?"
                                    rows={4}
                                    className={`${FIELD} p-4 text-sm resize-none`}
                                    required
                                />
                            </div>

                            {/* Raised key - the one element that sits proud of the plate */}
                            <button
                                type="submit"
                                className="w-full h-14 rounded-lg bg-[hsl(24_95%_53%)] text-[hsl(22_50%_10%)] font-bold text-base tracking-wide flex items-center justify-center gap-2 group cursor-pointer shadow-[inset_0_1px_0_0_rgba(255,240,220,0.75),inset_0_-2px_3px_0_rgba(120,45,0,0.32),0_2px_3px_0_rgba(120,60,15,0.28),0_8px_16px_-6px_rgba(120,60,15,0.42)] transition-[box-shadow,transform,background-color] duration-200 hover:bg-[hsl(24_95%_56%)] active:translate-y-px active:shadow-[inset_0_2px_5px_0_rgba(120,45,0,0.35),inset_0_-1px_0_0_rgba(255,240,220,0.35)] focus-visible:outline-none focus-visible:shadow-[inset_0_1px_0_0_rgba(255,240,220,0.75),0_0_0_3px_rgba(74,45,20,0.45)] motion-reduce:transition-none motion-reduce:active:translate-y-0"
                            >
                                <span>Send Message</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" strokeWidth={2.5} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
