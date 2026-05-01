"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { Post } from "@vlozi/blog";

interface BlogPostRowProps {
    post: Post;
    index: number;
}

function formatDate(iso: string) {
    try {
        return new Date(iso).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    } catch {
        return iso;
    }
}

export const BlogPostRow = ({ post, index }: BlogPostRowProps) => {
    const href = `/blog/${post.slug}`;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col md:flex-row gap-8 items-start border-b border-border/40 pb-12 last:border-0"
        >
            {/* Image Thumbnail */}
            <div className="w-full md:w-1/3 aspect-[4/3] relative overflow-hidden rounded-lg bg-secondary/10">
                {post.featuredImageUrl ? (
                    <Image
                        src={post.featuredImageUrl}
                        alt={post.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-muted" />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {post.category?.name && (
                        <>
                            <span className="text-primary">{post.category.name}</span>
                            <span>•</span>
                        </>
                    )}
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {formatDate(post.publishedAt)}
                    </span>
                    {post.readingTime ? (
                        <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {post.readingTime} min read
                            </span>
                        </>
                    ) : null}
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    <Link href={href}>{post.title}</Link>
                </h2>

                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="pt-2">
                    <Link
                        href={href}
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all"
                    >
                        Read Article <ArrowRight className="w-4 h-4 text-primary" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};
