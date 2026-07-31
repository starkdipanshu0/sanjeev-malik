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
        <div className="w-full bg-card text-foreground py-4 md:py-3 px-4 border-b border-border relative z-40">
            <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center md:text-left relative">

                <p className="text-sm md:text-base font-serif font-medium max-w-xl leading-snug md:pr-0 px-4 md:px-0">
                    Weekly wisdom you can read in 5 minutes.
                    <span className="hidden md:inline"> Add the free <span className="font-bold underline decoration-black/30 decoration-2 underline-offset-2">3-2-1 Newsletter</span> to your inbox.</span>
                </p>

                <div className="flex w-full md:w-auto items-center gap-2 max-w-sm">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="h-10 px-4 bg-background border border-border rounded-full focus:outline-none focus:border-primary/50 text-sm min-w-0 flex-1 placeholder:text-muted-foreground font-sans"
                    />
                    <Button variant="contrast" size="sm" className="shrink-0">
                        I&apos;M IN!
                    </Button>
                </div>

                <button
                    onClick={dismiss}
                    className="absolute right-0 top-0 md:relative md:top-auto md:right-auto text-muted-foreground hover:text-foreground transition-colors p-1 md:p-2 rounded-full focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    aria-label="Dismiss banner"
                >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
            </div>
        </div>
    );
};
