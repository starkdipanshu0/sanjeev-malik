"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
    article: Article;
    index: number;
    /** Series position, 1-based. Rendered as the engraved 01/02/03 numeral. */
    seriesNumber?: number;
    featured?: boolean;
}

/* Whole card is one link. Previously only the title and the "Read Article"
 * text were clickable, so the image and excerpt were dead zones and the card
 * had two focus stops instead of one.
 *
 * Surfaces reuse the site's machined utilities (plate / well) rather than the
 * borderless divider this used to be - the blog was the only area not using
 * the design system. Hover presses down, matching every other card on the site.
 */
export const ArticleCard = ({ article, index, seriesNumber, featured = false }: ArticleCardProps) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            whileHover={shouldReduceMotion ? undefined : { y: 2, transition: { duration: 0.2, ease: "easeOut" } }}
            className={cn(
                "plate group relative overflow-hidden rounded-2xl transition-[box-shadow,border-color] duration-300 ease-out",
                "hover:shadow-(--shadow-plate-pressed) focus-within:ring-2 focus-within:ring-primary/60 motion-reduce:transition-none",
                featured && "plate-featured"
            )}
        >
            {featured && (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
            )}

            <Link
                href={`/blogs/${article.slug}`}
                className={cn(
                    "flex h-full flex-col gap-5 p-5 md:p-6 outline-none",
                    // Only the featured card goes side-by-side. The rest sit in a
                    // 2-up grid where each column is ~310px - far too narrow to
                    // split into image + text.
                    featured && "md:flex-row md:items-center md:gap-8"
                )}
            >
                {/* Image */}
                <div
                    className={cn(
                        "relative w-full shrink-0 overflow-hidden rounded-xl bg-well",
                        featured ? "md:w-1/2 aspect-[16/10]" : "aspect-[16/9]"
                    )}
                >
                    <Image
                        src={article.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 420px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center gap-3">
                    {/* Meta chips */}
                    <div className="flex flex-wrap items-center gap-2">
                        {seriesNumber !== undefined && (
                            <span className="font-serif text-xs font-bold tracking-widest text-ink-faint">
                                {String(seriesNumber).padStart(2, "0")}
                            </span>
                        )}
                        <span className="well inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em]">
                            {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft">
                            <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                            {article.readTime}
                        </span>
                    </div>

                    <h2
                        className={cn(
                            "font-serif font-bold leading-tight text-foreground text-balance transition-colors group-hover:text-emphasis",
                            featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
                        )}
                    >
                        {article.title}
                    </h2>

                    <p className={cn("leading-relaxed text-ink-soft text-pretty", featured ? "line-clamp-3 md:text-lg" : "line-clamp-2")}>
                        {article.excerpt}
                    </p>

                    {/* Byline - the author never appeared on the listing, and on an
                        author-brand site that is the main trust signal. */}
                    <div className="mt-1 flex items-center gap-3 border-t border-border/50 pt-4">
                        <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-well">
                            <Image
                                src="/images/homeauther.jpeg"
                                alt=""
                                fill
                                sizes="32px"
                                className="object-cover object-[45%_50%]"
                            />
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-foreground">{article.author}</p>
                            <p className="text-xs text-ink-faint">{article.date}</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emphasis transition-all group-hover:gap-2.5">
                            Read
                            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};
