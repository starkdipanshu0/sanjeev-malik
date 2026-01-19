"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { Article } from "@/lib/articles";

interface ArticleCardProps {
    article: Article;
    index: number;
}

export const ArticleCard = ({ article, index }: ArticleCardProps) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col md:flex-row gap-8 items-start border-b border-border/40 pb-12 last:border-0"
        >
            {/* Image Thumbnail */}
            <div className="w-full md:w-1/3 aspect-[4/3] relative overflow-hidden rounded-lg bg-secondary/10">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <span className="text-primary">{article.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    <Link href={`/articles/${article.slug}`}>
                        {article.title}
                    </Link>
                </h2>

                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                </p>

                <div className="pt-2">
                    <Link href={`/articles/${article.slug}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4 text-primary" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};
