"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const ConnectSection = () => {
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
        <section className="w-full py-16 md:py-32 bg-background relative overflow-hidden" id="connect">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[0%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
                <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] opacity-40 animate-pulse-slow delay-700" />
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10 lg:sticky lg:top-32"
                    >
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase border border-primary/20">
                                <Sparkles className="w-3 h-3" /> Connect with me
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                                Reserve a Spot <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                                    With me
                                </span>
                            </h2>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg">
                                Whether you have a question about the book, want to book a speaking engagement, or just want to explore a collaboration.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                            <a
                                href="tel:+919626633688"
                                className="flex items-center gap-5 group p-5 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 border border-white/5 hover:border-primary/20 backdrop-blur-md"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-none mb-1.5">Direct Line</p>
                                    <p className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-tight">+91 96266 33688</p>
                                </div>
                            </a>

                            <a
                                href="mailto:sanjeevmalik470@gmail.com"
                                className="flex items-center gap-5 group p-5 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 border border-white/5 hover:border-primary/20 backdrop-blur-md"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-none mb-1.5">Email Inquiry</p>
                                    <p className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-tight break-all">sanjeevmalik470@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card/20 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
                    >
                        {/* Interactive Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-xs font-bold text-foreground/70 uppercase tracking-wider ml-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formState.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        className="w-full h-12 px-4 rounded-xl bg-background/40 border border-white/10 focus:border-primary/50 focus:bg-background/60 outline-none transition-all duration-300 placeholder:text-muted-foreground/30 text-sm"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-xs font-bold text-foreground/70 uppercase tracking-wider ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formState.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="w-full h-12 px-4 rounded-xl bg-background/40 border border-white/10 focus:border-primary/50 focus:bg-background/60 outline-none transition-all duration-300 placeholder:text-muted-foreground/30 text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-foreground/70 uppercase tracking-wider ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        className="w-full h-12 px-4 rounded-xl bg-background/40 border border-white/10 focus:border-primary/50 focus:bg-background/60 outline-none transition-all duration-300 placeholder:text-muted-foreground/30 text-sm"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold text-foreground/70 uppercase tracking-wider ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        placeholder="+91..."
                                        className="w-full h-12 px-4 rounded-xl bg-background/40 border border-white/10 focus:border-primary/50 focus:bg-background/60 outline-none transition-all duration-300 placeholder:text-muted-foreground/30 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-foreground/70 uppercase tracking-wider ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you today?"
                                    rows={4}
                                    className="w-full p-4 rounded-xl bg-background/40 border border-white/10 focus:border-primary/50 focus:bg-background/60 outline-none transition-all duration-300 placeholder:text-muted-foreground/30 text-sm resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group mt-2"
                            >
                                <span>Send Message</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
