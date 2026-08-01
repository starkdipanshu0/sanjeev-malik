"use client";

import { useEffect, useState } from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

/* Shared by ShareRow (footer) and ArticleRail (sticky margin) so the URL
 * building lives in one place rather than being duplicated per call site. */
export const useShareTargets = (title: string, slug: string) => {
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

    return { targets, copyLink, copied };
};
