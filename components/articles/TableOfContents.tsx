"use client";

import { ContentBlock } from "@/lib/articles";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
    blocks: ContentBlock[];
}

export const TableOfContents = ({ blocks }: TableOfContentsProps) => {
    const [activeId, setActiveId] = useState<string>("");

    const headings = blocks.filter((block): block is Extract<ContentBlock, { type: 'heading' }> => block.type === 'heading');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" }
        );

        headings.forEach((heading) => {
            const id = heading.content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="space-y-2">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">On this page</h4>
            <ul className="space-y-1">
                {headings.map((heading, index) => {
                    const id = heading.content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return (
                        <li key={index} className={cn("text-sm transition-colors border-l-2 pl-4",
                            heading.level === 3 && "ml-2",
                            activeId === id ? "border-primary text-foreground font-medium" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                        )}>
                            <a
                                href={`#${id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="block py-1"
                            >
                                {heading.content}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
