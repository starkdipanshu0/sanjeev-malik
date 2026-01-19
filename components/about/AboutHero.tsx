"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/images/author.jpg" // Using existing image path
                        alt="Lt. Col. Sanjeev Malik"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>

                {/* Right Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-foreground">
                        Hi, I&apos;m <br />
                        <span className="text-primary italic">Sanjeev Malik</span>
                    </h1>

                    <blockquote className="border-l-4 border-primary pl-4 italic text-xl text-muted-foreground">
                        &quot;The strongest battles are not fought on the field, but in the mind.&quot;
                    </blockquote>

                    <ul className="space-y-4 pt-4">
                        {[
                            "Lieutenant Colonel (Retd), Indian Army",
                            "Author of \"The Graphene Mentality\"",
                            "Corporate Strategist & Leadership Mentor",
                            "Transformational Keynote Speaker"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-lg font-medium text-foreground/90">
                                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Links */}
                    <div className="pt-8 flex items-center gap-6">
                        <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Connect</span>
                        <div className="flex gap-4">
                            {[
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "#" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default AboutHero;
