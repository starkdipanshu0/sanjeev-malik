"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArticleCard } from "@/components/articles/ArticleCard";
import type { Article } from "@/lib/articles";
import { cn } from "@/lib/utils";

/* Client boundary exists purely so the listing page can keep its server-side
 * `export const metadata` while the filter holds state. */
export const BlogList = ({ articles }: { articles: Article[] }) => {
    const [active, setActive] = useState<string>("All");

    const categories = useMemo(
        () => ["All", ...Array.from(new Set(articles.map((a) => a.category)))],
        [articles]
    );

    const visible = useMemo(
        () => (active === "All" ? articles : articles.filter((a) => a.category === active)),
        [articles, active]
    );

    // Series position is fixed to the full list, so numbering stays stable
    // when a filter is applied.
    const seriesIndex = useMemo(
        () => new Map(articles.map((a, i) => [a.id, i + 1])),
        [articles]
    );

    const [lead, ...rest] = visible;

    return (
        <div className="space-y-8">
            {/* Category filter */}
            {categories.length > 2 && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center gap-2"
                    role="group"
                    aria-label="Filter posts by category"
                >
                    {categories.map((cat) => {
                        const isActive = cat === active;
                        return (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActive(cat)}
                                aria-pressed={isActive}
                                className={cn(
                                    "rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-[background-color,box-shadow,color] duration-300",
                                    "outline-none focus-visible:ring-2 focus-visible:ring-primary/60 motion-reduce:transition-none",
                                    isActive ? "well-lit" : "well hover:text-emphasis"
                                )}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </motion.div>
            )}

            {visible.length === 0 ? (
                <p className="plate rounded-2xl p-10 text-center text-ink-soft">
                    No posts in this category yet.
                </p>
            ) : (
                <div className="space-y-6">
                    {/* Featured lead - nothing previously told a reader where to start */}
                    <ArticleCard
                        key={lead.id}
                        article={lead}
                        index={0}
                        seriesNumber={seriesIndex.get(lead.id)}
                        featured
                    />

                    {rest.length > 0 && (
                        <div className="grid gap-6 md:grid-cols-2">
                            {rest.map((article, i) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    index={i + 1}
                                    seriesNumber={seriesIndex.get(article.id)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
