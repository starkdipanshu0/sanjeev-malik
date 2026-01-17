"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

// Mock Data for Blog Posts
const articles = [
    {
        id: 1,
        title: "The Art of War in Corporate Boardrooms",
        excerpt: "How ancient military strategies translate to modern business decisions. Learn to outmaneuver competition with precision.",
        date: "Jan 12, 2026",
        readTime: "5 min read",
        category: "Leadership"
    },
    {
        id: 2,
        title: "Graphene Minds: Resilience in the Digital Age",
        excerpt: "Why flexibility is stronger than rigidity. Building mental models that adapt to chaos without breaking.",
        date: "Jan 08, 2026",
        readTime: "4 min read",
        category: "Mindset"
    },
    {
        id: 3,
        title: "From Battlefield to Breakthrough",
        excerpt: "Real-life lessons on decision making under extreme pressure. What executives can learn from special ops.",
        date: "Dec 28, 2025",
        readTime: "6 min read",
        category: "Strategy"
    },
    {
        id: 4,
        title: "Silence as a Strategy",
        excerpt: "The power of pause. How tactical silence can win negotiations and command respect in any room.",
        date: "Dec 15, 2025",
        readTime: "3 min read",
        category: "Communication"
    }
];

const BlogCarouselSection = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <section className="w-full py-12 md:py-20 bg-secondary/30 text-foreground overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Latest Insights</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold">
                            Thoughts & <span className="text-primary italic">Perspectives</span>
                        </h2>
                    </div>

                    {/* Desktop View All Button (Hidden on Mobile) */}
                    <div className="hidden md:block">
                        <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 group" asChild>
                            <Link href="/articles">
                                View All Articles
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Carousel */}
                <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6 md:gap-8 pb-4" // pb-4 for shadow clearance
                    >
                        {articles.map((article) => (
                            <motion.div
                                key={article.id}
                                className="min-w-[300px] md:min-w-[350px] bg-background rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
                            >
                                {/* Card Content */}
                                <div className="p-6 md:p-8 flex flex-col h-full">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                                            {article.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
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
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Mobile View All Button (Visible only on Mobile) */}
                <div className="mt-8 md:hidden flex justify-center">
                    <Button variant="outline" className="w-full max-w-xs border-primary/20" asChild>
                        <Link href="/articles">
                            View All Articles
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default BlogCarouselSection;
