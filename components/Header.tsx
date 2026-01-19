"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "The Book", href: "/book" },
        { name: "Articles", href: "/articles" },
        { name: "Speaking", href: "/speaking" },
        { name: "About", href: "/about" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-3"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="relative z-50 group">
                            <Image
                                src="/images/sam_malik_signature.png"
                                alt="Lt. Col. Sanjeev Malik"
                                width={160}
                                height={45}
                                className={cn(
                                    "object-contain transition-all duration-500",
                                    isScrolled ? "h-8 w-auto opacity-100" : "h-10 w-auto opacity-90 group-hover:opacity-100"
                                )}
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative group py-2"
                                >
                                    <span className={cn(
                                        "text-sm font-medium tracking-wide transition-colors duration-300",
                                        isScrolled ? "text-zinc-600 group-hover:text-black" : "text-zinc-800 group-hover:text-black"
                                    )}>
                                        {link.name}
                                    </span>
                                    {/* Animated Underline */}
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}

                            <Link href="/book#purchase-options">
                                <Button
                                    size="sm"
                                    className={cn(
                                        "ml-4 font-serif italic tracking-wide transition-all duration-300",
                                        isScrolled
                                            ? "bg-black text-white hover:bg-zinc-800"
                                            : "bg-black/90 text-white hover:bg-black hover:scale-105 shadow-lg"
                                    )}
                                >
                                    Get the Book
                                </Button>
                            </Link>
                        </nav>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden relative z-50 p-2 -mr-2 text-zinc-800"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-24 px-6"
                    >
                        <nav className="flex flex-col gap-8 items-center justify-center h-[60vh]">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-serif text-zinc-900 hover:text-primary transition-colors block text-center"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link href="/book#purchase-options" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button
                                        size="lg"
                                        className="mt-8 bg-black text-white rounded-full px-8"
                                    >
                                        Get the Book
                                    </Button>
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
