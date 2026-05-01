"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePosts } from "@vlozi/blog/react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPostRow } from "@/components/blog/BlogPostRow";
import { BlogFilters } from "@/components/blog/BlogFilters";

const PAGE_SIZE = 8;

function useDebouncedValue<T>(value: T, delay = 300): T {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const id = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(id);
    }, [value, delay]);
    return debounced;
}

export default function BlogPage() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<string | undefined>();
    const [tag, setTag] = useState<string | undefined>();

    const debouncedSearch = useDebouncedValue(search, 300);

    // Filter changes must reset pagination — wrap setters so the page
    // index never desyncs from the active filters.
    const handleSearchChange = (value: string) => {
        setSearch(value);
        setPage(1);
    };
    const handleCategoryChange = (slug?: string) => {
        setCategory(slug);
        setPage(1);
    };
    const handleTagChange = (slug?: string) => {
        setTag(slug);
        setPage(1);
    };
    const clearAll = () => {
        setSearch("");
        setCategory(undefined);
        setTag(undefined);
        setPage(1);
    };

    const { data, loading, error, totalPages, hasNextPage, hasPrevPage } = usePosts({
        page,
        limit: PAGE_SIZE,
        category,
        tag,
        search: debouncedSearch.trim() || undefined,
        sort: "publishedAt",
        order: "desc",
    });

    const posts = data?.data ?? [];
    const total = data?.meta.total ?? 0;

    return (
        <main className="min-h-screen bg-background pt-12 pb-20">
            {/* Page Header */}
            <div className="container mx-auto px-6 md:px-12 mb-20 text-center">
                <span className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
                    The Journal
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
                    My <span className="italic text-muted-foreground">Blog</span>
                </h1>
                <p className="max-w-xl mx-auto text-muted-foreground text-lg">
                    Exploring the intersection of military discipline, corporate strategy, and human potential.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Posts (Span 8) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Active filter chips */}
                        {(category || tag || debouncedSearch) && (
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">
                                    {loading ? "Searching..." : `${total} ${total === 1 ? "result" : "results"}`}
                                </span>
                                {debouncedSearch && (
                                    <span>
                                        for <span className="text-foreground">&ldquo;{debouncedSearch}&rdquo;</span>
                                    </span>
                                )}
                                <button
                                    type="button"
                                    onClick={clearAll}
                                    className="ml-auto text-primary hover:underline text-xs uppercase tracking-widest font-bold"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}

                        {error ? (
                            <div className="border border-destructive/30 bg-destructive/5 text-destructive rounded-lg p-6">
                                <p className="font-medium">Failed to load posts.</p>
                                <p className="text-sm mt-1 opacity-80">
                                    {error instanceof Error ? error.message : "Please try again later."}
                                </p>
                            </div>
                        ) : loading && posts.length === 0 ? (
                            <BlogListSkeleton />
                        ) : posts.length === 0 ? (
                            <div className="text-center py-20 border border-border/40 rounded-lg bg-card/40">
                                <p className="font-serif text-2xl font-bold mb-2">No posts found</p>
                                <p className="text-muted-foreground">
                                    Try adjusting your search or filters.
                                </p>
                            </div>
                        ) : (
                            <>
                                {posts.map((post, index) => (
                                    <BlogPostRow
                                        key={post.slug}
                                        post={post}
                                        index={index}
                                    />
                                ))}

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-between pt-8">
                                        <Button
                                            variant="outline"
                                            disabled={!hasPrevPage || loading}
                                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                                        >
                                            <ArrowLeft className="w-4 h-4" /> Previous
                                        </Button>
                                        <span className="text-sm text-muted-foreground font-medium">
                                            Page <span className="text-foreground">{page}</span> of {totalPages}
                                        </span>
                                        <Button
                                            variant="outline"
                                            disabled={!hasNextPage || loading}
                                            onClick={() => setPage((p) => p + 1)}
                                        >
                                            Next <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Right Column: Sticky Sidebar (Span 4) */}
                    <aside className="lg:col-span-4 relative">
                        <div className="sticky top-32">
                            <BlogFilters
                                search={search}
                                onSearchChange={handleSearchChange}
                                activeCategory={category}
                                onCategoryChange={handleCategoryChange}
                                activeTag={tag}
                                onTagChange={handleTagChange}
                            />
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

function BlogListSkeleton() {
    return (
        <div className="space-y-12">
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                    key={i}
                    className="flex flex-col md:flex-row gap-8 items-start border-b border-border/40 pb-12"
                >
                    <Skeleton className="w-full md:w-1/3 aspect-[4/3] rounded-lg" />
                    <div className="flex-1 space-y-4">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-8 w-5/6" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                </div>
            ))}
        </div>
    );
}
