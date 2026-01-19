"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NewsletterBanner = () => {
    const [isVisible, setIsVisible] = useState(false); // Default to false to avoid hydration mismatch, check in useEffect

    useEffect(() => {
        const dismissed = localStorage.getItem("newsletter-banner-dismissed");
        if (!dismissed) {
            setIsVisible(true);
        }
    }, []);

    const dismiss = () => {
        setIsVisible(false);
        localStorage.setItem("newsletter-banner-dismissed", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="w-full bg-[#F5E5BE] text-black py-4 px-4 border-b border-black/10 relative z-40">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">

                <p className="text-sm md:text-base font-serif font-medium max-w-xl leading-snug">
                    Weekly wisdom you can read in 5 minutes.
                    <span className="hidden md:inline"> Add the free <span className="font-bold underline decoration-black/30 decoration-2 underline-offset-2">3-2-1 Newsletter</span> to your inbox.</span>
                </p>

                <div className="flex w-full md:w-auto items-center gap-2">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="h-10 px-3 py-2 bg-white border border-black/10 rounded-md focus:outline-none focus:border-black/40 text-sm min-w-[200px] flex-1 md:flex-none placeholder:text-black/40 font-sans"
                    />
                    <Button className="h-10 bg-black text-white hover:bg-black/80 font-bold tracking-wide rounded-md px-6 shrink-0 transition-transform active:scale-95">
                        I&apos;M IN!
                    </Button>
                </div>

                <button
                    onClick={dismiss}
                    className="absolute right-2 top-1/2 -translate-y-1/2 md:relative md:top-auto md:right-auto md:translate-y-0 text-black/40 hover:text-black transition-colors p-2"
                    aria-label="Dismiss banner"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
