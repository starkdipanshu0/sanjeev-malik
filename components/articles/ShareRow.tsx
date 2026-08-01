"use client";

import { Button } from "@/components/ui/button";
import { Check, Link2 } from "lucide-react";
import { useShareTargets } from "./useShareTargets";

/* These four buttons previously had no handlers and no hrefs - tapping any of
 * them did nothing at all. */
export const ShareRow = ({ title, slug }: { title: string; slug: string }) => {
    const { targets, copyLink, copied } = useShareTargets(title, slug);

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
