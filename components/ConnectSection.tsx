"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, ArrowRight } from "lucide-react";
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
        <section className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-60 animate-pulse-slow" />
                <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-60 animate-pulse-slow delay-1000" />
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10 lg:sticky lg:top-32"
                    >
                        <div className="space-y-6">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
                                Get in Touch
                            </span>
                            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-[1.1]">
                                Reserve a Spot <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic">
                                    With the Author
                                </span>
                            </h2>
                            <p className="text-muted-foreground text-xl leading-relaxed max-w-md">
                                Whether you have a question about the book, want to book a speaking engagement, or just want to say hello.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a
                                href="tel:+919626633688"
                                className="flex items-center gap-6 group p-6 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-primary/20 backdrop-blur-sm"
                            >
                                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Call Me</p>
                                    <p className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">+91 9626633688</p>
                                </div>
                            </a>

                            <a
                                href="mailto:sanjeevmalik470@gmail.com"
                                className="flex items-center gap-6 group p-6 rounded-3xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 border border-transparent hover:border-primary/20 backdrop-blur-sm"
                            >
                                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Email Me</p>
                                    <p className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">sanjeevmalik470@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card/30 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl dark:shadow-none dark:border-white/5 relative overflow-hidden"
                    >
                        {/* Subtle Form Decoration */}
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Send size={120} />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label htmlFor="firstName" className="text-sm font-semibold text-foreground/80 ml-1 group-focus-within:text-primary transition-colors">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formState.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        className="w-full px-5 py-4 rounded-xl bg-background/50 border-2 border-transparent focus:border-primary/20 focus:bg-background outline-none transition-all duration-300 placeholder:text-muted-foreground/30 font-medium"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="lastName" className="text-sm font-semibold text-foreground/80 ml-1 group-focus-within:text-primary transition-colors">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formState.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="w-full px-5 py-4 rounded-xl bg-background/50 border-2 border-transparent focus:border-primary/20 focus:bg-background outline-none transition-all duration-300 placeholder:text-muted-foreground/30 font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground/80 ml-1 group-focus-within:text-primary transition-colors">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        className="w-full px-5 py-4 rounded-xl bg-background/50 border-2 border-transparent focus:border-primary/20 focus:bg-background outline-none transition-all duration-300 placeholder:text-muted-foreground/30 font-medium"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="phone" className="text-sm font-semibold text-foreground/80 ml-1 group-focus-within:text-primary transition-colors">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        placeholder="+91 90000 00000"
                                        className="w-full px-5 py-4 rounded-xl bg-background/50 border-2 border-transparent focus:border-primary/20 focus:bg-background outline-none transition-all duration-300 placeholder:text-muted-foreground/30 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="message" className="text-sm font-semibold text-foreground/80 ml-1 group-focus-within:text-primary transition-colors">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you today?"
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-xl bg-background/50 border-2 border-transparent focus:border-primary/20 focus:bg-background outline-none transition-all duration-300 placeholder:text-muted-foreground/30 font-medium resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 px-8 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-3 group"
                            >
                                <span>Send Message</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
