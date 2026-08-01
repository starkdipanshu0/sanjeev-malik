"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Link2, Linkedin, Twitter, Facebook } from "lucide-react";

/* These four buttons previously had no handlers and no hrefs - tapping any of
 * them did nothing at all. */
export const ShareRow = ({ title, slug }: { title: string; slug: string }) => {
    const [url, setUrl] = useState("");
    const [copied, setCopied] = useState(false);

    // Built client-side so it works on any host without a configured base URL.
    useEffect(() => {
        setUrl(`${window.location.origin}/blogs/${slug}`);
    }, [slug]);

    useEffect(() => {
        if (!copied) return;
        const t = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(t);
    }, [copied]);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const targets = [
        {
            name: "LinkedIn",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            Icon: Linkedin,
        },
        {
            name: "X",
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            Icon: Twitter,
        },
        {
            name: "Facebook",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            Icon: Facebook,
        },
    ];

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
        } catch {
            // Clipboard can be blocked by permissions or a non-secure origin.
            window.prompt("Copy this link:", url);
        }
    };

    return (
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
            <span className="font-serif font-bold text-lg">Share this article</span>
            <div className="flex items-center gap-3">
                {targets.map(({ name, href, Icon }) => (
                    <Button key={name} variant="outline" size="icon" className="rounded-full" asChild>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Share on ${name} (opens in a new tab)`}
                        >
                            <Icon className="w-4 h-4" />
                        </a>
                    </Button>
                ))}
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={copyLink}
                    aria-label={copied ? "Link copied" : "Copy link to this article"}
                >
                    {copied ? <Check className="w-4 h-4 text-emphasis" /> : <Link2 className="w-4 h-4" />}
                </Button>
                <span aria-live="polite" className="sr-only">
                    {copied ? "Link copied to clipboard" : ""}
                </span>
            </div>
        </div>
    );
};
