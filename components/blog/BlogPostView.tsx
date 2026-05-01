"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    Facebook,
    Linkedin,
    Share2,
    Twitter,
} from "lucide-react";
import { usePost, useRelatedPosts, useNeighbors } from "@vlozi/blog/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface BlogPostViewProps {
    slug: string;
}

function formatDate(iso: string) {
    try {
        return new Date(iso).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    } catch {
        return iso;
    }
}

export function BlogPostView({ slug }: BlogPostViewProps) {
    const { data: post, loading, error } = usePost(slug);

    if (loading) {
        return <BlogPostSkeleton />;
    }

    if (error) {
        return (
            <main className="min-h-screen bg-background pt-12 pb-20">
                <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center py-20">
                    <h1 className="font-serif text-3xl font-bold mb-4">
                        Couldn&apos;t load this article
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        {error instanceof Error ? error.message : "Please try again later."}
                    </p>
                    <Button asChild variant="outline">
                        <Link href="/blog">
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>
                    </Button>
                </div>
            </main>
        );
    }

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background pt-12 pb-20 relative">
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>

                {post.category?.name && (
                    <span className="inline-block text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
                        {post.category.name}
                    </span>
                )}

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-8 max-w-4xl">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground border-b border-border/40 pb-8">
                    {post.author?.name && (
                        <div className="flex items-center gap-3">
                            {post.author.avatarUrl ? (
                                <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden relative">
                                    <Image
                                        src={post.author.avatarUrl}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                    {post.author.name.charAt(0)}
                                </div>
                            )}
                            <span className="font-medium text-foreground">{post.author.name}</span>
                        </div>
                    )}
                    {post.author?.name && <span className="w-px h-4 bg-border" />}
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {formatDate(post.publishedAt)}
                    </span>
                    {post.readingTime ? (
                        <>
                            <span className="w-px h-4 bg-border" />
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" /> {post.readingTime} min read
                            </span>
                        </>
                    ) : null}
                </div>
            </div>

            {/* Main Grid */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Content */}
                    <div className="lg:col-span-8">
                        {post.featuredImageUrl && (
                            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                                <Image
                                    src={post.featuredImageUrl}
                                    alt={post.title}
                                    fill
                                    sizes="(min-width: 1024px) 66vw, 100vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {post.excerpt && (
                            <p className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed mb-10 max-w-3xl">
                                {post.excerpt}
                            </p>
                        )}

                        {/* SDK styles handle code/quote/table styling via vlozi-blog-content */}
                        {post.content && (
                            <div
                                className="vlozi-blog-content prose prose-lg prose-zinc max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        )}

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-border/40">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                    Tagged
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <Badge key={tag.slug} variant="outline" asChild>
                                            <Link href={`/blog?tag=${encodeURIComponent(tag.slug)}`}>
                                                #{tag.name}
                                            </Link>
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Share */}
                        <div className="mt-10 pt-8 border-t border-border/40 flex items-center justify-between">
                            <span className="font-serif font-bold text-lg">Share this article</span>
                            <div className="flex gap-3">
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Linkedin className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Twitter className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Facebook className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Prev / Next */}
                        <PrevNext slug={slug} />
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 relative hidden lg:block">
                        <div className="sticky top-32 space-y-8">
                            {post.author?.bio && (
                                <div className="bg-card/60 backdrop-blur rounded-xl p-6 border border-border/50">
                                    <h3 className="font-serif text-lg font-bold mb-3">
                                        About the Author
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {post.author.bio}
                                    </p>
                                </div>
                            )}

                            <RelatedPanel slug={slug} />
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}

function PrevNext({ slug }: { slug: string }) {
    const { data, loading } = useNeighbors(slug);
    if (loading || !data) return null;
    const { previous, next } = data;
    if (!previous && !next) return null;

    return (
        <nav className="mt-12 pt-8 border-t border-border/40 grid grid-cols-1 md:grid-cols-2 gap-6">
            {previous ? (
                <Link
                    href={`/blog/${previous.slug}`}
                    className="group flex flex-col gap-2 p-5 border border-border/50 rounded-xl hover:border-primary/40 hover:bg-card transition-colors"
                >
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <ArrowLeft className="w-3 h-3" /> Previous
                    </span>
                    <span className="font-serif text-lg font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {previous.title}
                    </span>
                </Link>
            ) : (
                <span />
            )}
            {next ? (
                <Link
                    href={`/blog/${next.slug}`}
                    className={cn(
                        "group flex flex-col gap-2 p-5 border border-border/50 rounded-xl hover:border-primary/40 hover:bg-card transition-colors",
                        "md:text-right md:items-end"
                    )}
                >
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Next <ArrowRight className="w-3 h-3" />
                    </span>
                    <span className="font-serif text-lg font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {next.title}
                    </span>
                </Link>
            ) : null}
        </nav>
    );
}

function RelatedPanel({ slug }: { slug: string }) {
    const { data, loading } = useRelatedPosts(slug, { limit: 3 });

    if (loading) {
        return (
            <div className="bg-secondary/5 rounded-xl p-8 border border-border/50 space-y-6">
                <Skeleton className="h-6 w-2/3" />
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="aspect-[3/2] w-full rounded-lg" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-3 w-1/3" />
                    </div>
                ))}
            </div>
        );
    }

    if (!data || data.length === 0) return null;

    return (
        <div className="bg-secondary/5 rounded-xl p-8 border border-border/50">
            <h3 className="font-serif text-xl font-bold mb-6">Related Reading</h3>
            <div className="space-y-6">
                {data.map((other) => (
                    <Link
                        key={other.slug}
                        href={`/blog/${other.slug}`}
                        className="group block space-y-2"
                    >
                        {other.featuredImageUrl && (
                            <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-3">
                                <Image
                                    src={other.featuredImageUrl}
                                    alt={other.title}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, 50vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        )}
                        <h4 className="font-medium group-hover:text-primary transition-colors leading-snug">
                            {other.title}
                        </h4>
                        {other.readingTime ? (
                            <p className="text-xs text-muted-foreground">
                                {other.readingTime} min read
                            </p>
                        ) : null}
                    </Link>
                ))}
            </div>
        </div>
    );
}

function BlogPostSkeleton() {
    return (
        <main className="min-h-screen bg-background pt-12 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                <Skeleton className="h-4 w-32 mb-8" />
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-14 w-5/6 mb-4" />
                <Skeleton className="h-14 w-3/4 mb-8" />
                <div className="flex gap-6 mb-12">
                    <Skeleton className="h-10 w-40" />
                    <Skeleton className="h-10 w-32" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-6">
                        <Skeleton className="aspect-[21/9] w-full rounded-2xl" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-5/6" />
                        <Skeleton className="h-5 w-4/5" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-3/4" />
                    </div>
                    <div className="lg:col-span-4 hidden lg:block">
                        <Skeleton className="h-64 w-full rounded-xl" />
                    </div>
                </div>
            </div>
        </main>
    );
}
