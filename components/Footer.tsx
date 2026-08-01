"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, ArrowRight, ShieldCheck, Activity } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] text-white border-t border-white/10 flex flex-col font-sans overflow-hidden">

            {/* Main Content - Compact High-Density Grid */}
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">

                    {/* Brand Section (Span 5) */}
                    <div className="md:col-span-5 p-10 flex flex-col justify-between gap-8 relative group">
                        <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="space-y-6">
                            <Link href="/" className="inline-block relative w-40 h-16">
                                <Image
                                    src="/images/sam_malik_signature.png"
                                    alt="Sanjeev Malik Signature"
                                    fill
                                    className="object-contain invert brightness-0 filter opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </Link>
                            <div className="space-y-2">
                                <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm">
                                    Forging unbreakable minds for the battlefield of life.
                                </p>
                                <p className="text-primary/60 text-xs font-mono uppercase tracking-widest">
                                    Lucknow, Uttar Pradesh, India
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/in/lt-col-dr-sanjeev-malik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 border border-white/5"
                            >
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link
                                href="https://x.com/LtColDrMalik?s=20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 border border-white/5"
                            >
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/thesanjeevmalik?igsh=MThhNG9qZ2VwZjRtdQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 border border-white/5"
                            >
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Section (Span 3) */}
                    <div className="md:col-span-3 p-10 flex flex-col justify-center border-t md:border-t-0 border-white/10">
                        <h4 className="font-serif text-lg text-white mb-6">Explore</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Book', href: '/book' },
                                { label: 'Latest Blogs', href: '/blogs' },
                                { label: 'Achievements', href: '/achievements' },
                                { label: 'About the Author', href: '/about' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-white/50 hover:text-primary transition-colors flex items-center gap-3 group/link">
                                        <span className="w-1.5 h-px bg-white/20 group-hover/link:bg-primary transition-colors" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section (Span 4) */}
                    <div className="md:col-span-4 p-10 bg-white/[0.02] relative overflow-hidden group hover:bg-white/[0.04] transition-colors duration-500 border-t md:border-t-0 border-white/10">
                        <div className="relative z-10 h-full flex flex-col justify-center gap-6">
                            <div>
                                <h3 className="text-xl font-serif text-white/90 text-balance">Subscribe to my weekly Newsletter</h3>
                                <p className="text-xs text-white/40 mt-2 leading-relaxed">
                                    Get powerful mindset-building tips delivered straight to your inbox.
                                </p>
                            </div>

                            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative group/input">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary transition-colors p-2">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* PROFESSIONAL TICKER */}
            <div className="relative border-t border-white/10 bg-[#020202] py-4 overflow-hidden select-none">
                <div className="flex w-full">
                    <motion.div
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap gap-16 pr-16 items-center"
                    >
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
                                <span className="text-lg font-serif tracking-widest text-white uppercase">
                                    Lt. Col. Sanjeev Malik
                                </span>
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                <span className="text-sm font-sans font-bold tracking-[0.2em] text-white/60 uppercase">
                                    Author of The Graphene Mentality
                                </span>
                                <span className="w-1 h-1 rounded-full bg-primary" />
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap gap-16 pr-16 items-center"
                    >
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
                                <span className="text-lg font-serif tracking-widest text-white uppercase">
                                    Lt. Col. Sanjeev Malik
                                </span>
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                <span className="text-sm font-sans font-bold tracking-[0.2em] text-white/60 uppercase">
                                    Author of The Graphene Mentality
                                </span>
                                <span className="w-1 h-1 rounded-full bg-primary" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 py-3 border-t border-white/5 flex justify-between items-center text-[10px] text-white/20 font-mono tracking-widest uppercase">
                <p>© 2026 Sanjeev Malik</p>
                <div className="flex gap-6">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
