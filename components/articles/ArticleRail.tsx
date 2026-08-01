"use client";

import { Check, Link2, ArrowUp } from "lucide-react";
import type { ContentBlock } from "@/lib/articles";
import { TableOfContents } from "./TableOfContents";
import { useShareTargets } from "./useShareTargets";

interface ArticleRailProps {
    blocks: ContentBlock[];
    title: string;
    slug: string;
}

/* Sticky rail for the left margin at xl and up.
 *
 * The margin previously held only the table of contents, which self-hides
 * below 2 headings - and these posts have about one each, so the space sat
 * empty and the page read as narrow. Share and back-to-top always render, so
 * the rail is never blank.
 *
 * Geometry: body is max-w-3xl (768px) in a 1184px content box, leaving 208px
 * of margin. w-40 (160) + mr-12 (48) = 208 exactly. Do not widen either
 * without re-checking - the previous w-48 + mr-8 came to 224 and overflowed.
 */
export const ArticleRail = ({ blocks, title, slug }: ArticleRailProps) => {
    const { targets, copyLink, copied } = useShareTargets(title, slug);

    const iconButton =
        "flex h-9 w-9 items-center justify-center rounded-lg well transition-[background-color,box-shadow,color] duration-300 hover:well-lit outline-none focus-visible:ring-2 focus-visible:ring-primary/60 motion-reduce:transition-none";

    return (
        <aside className="hidden xl:block absolute right-full top-0 h-full mr-12 w-40">
            <div className="sticky top-28 space-y-8">
                <TableOfContents blocks={blocks} />

                <div className="space-y-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink-faint">
                        Share
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {targets.map(({ name, href, Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Share on ${name} (opens in a new tab)`}
                                className={iconButton}
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={copyLink}
                            aria-label={copied ? "Link copied" : "Copy link to this article"}
                            className={iconButton}
                        >
                            {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                        </button>
                    </div>
                    <span aria-live="polite" className="sr-only">
                        {copied ? "Link copied to clipboard" : ""}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-ink-faint transition-colors hover:text-emphasis outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
                >
                    <ArrowUp className="h-3.5 w-3.5" />
                    Top
                </button>
            </div>
        </aside>
    );
};
