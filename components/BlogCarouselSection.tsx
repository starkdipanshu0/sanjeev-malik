"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, Clock } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

const BlogCarouselSection = () => {
    const carousel = useRef<HTMLDivElement>(null);

    const slide = (direction: "left" | "right") => {
        const el = carousel.current;
        if (!el) return;
        // Scroll by roughly one card width (falls back to ~85% of the viewport)
        const firstCard = el.firstElementChild as HTMLElement | null;
        const amount = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth * 0.85;
        el.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full py-12 md:py-20 bg-secondary/30 text-foreground overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 relative">
                    <div className="space-y-4">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold">
                            My Blogs
                        </h2>
                    </div>

                    {/* Controls & Desktop View All */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Navigation Arrows */}
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="hover:bg-primary hover:text-on-primary-strong hover:border-primary"
                                onClick={() => slide("left")}
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="hover:bg-primary hover:text-on-primary-strong hover:border-primary"
                                onClick={() => slide("right")}
                            >
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="w-px h-8 bg-border/50" />

                        <Button variant="link" className="group" asChild>
                            <Link href="/articles" className="flex items-center gap-2">
                                View All Blogs
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Carousel - native smooth scroll + snap */}
                <div
                    ref={carousel}
                    className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {ARTICLES.map((article) => (
                        <div
                            key={article.id}
                            className="snap-start shrink-0 w-[300px] md:w-[400px] bg-background rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
                        >
                            <Link href={`/articles/${article.slug}`} className="flex flex-col h-full">
                                {/* Card Content */}
                                <div className="p-6 md:p-8 flex flex-col h-full">
                                    <h3 className="text-xl md:text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="pt-6 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground mt-auto">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> {article.readTime}
                                            </span>
                                        </div>

                                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button (Visible only on Mobile) */}
                <div className="mt-8 md:hidden flex justify-center gap-4">
                    <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-on-primary-strong hover:border-primary"
                        onClick={() => slide("left")}
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-on-primary-strong hover:border-primary"
                        onClick={() => slide("right")}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
                <div className="mt-6 md:hidden flex justify-center">
                    <Button variant="outline" className="w-full max-w-xs" asChild>
                        <Link href="/articles">
                            View All Blogs
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default BlogCarouselSection;
