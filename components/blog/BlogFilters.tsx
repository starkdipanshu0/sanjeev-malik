"use client";

import { Search } from "lucide-react";
import { useCategories, useTags } from "@vlozi/blog/react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface BlogFiltersProps {
    search: string;
    onSearchChange: (value: string) => void;
    activeCategory?: string;
    onCategoryChange: (slug?: string) => void;
    activeTag?: string;
    onTagChange: (slug?: string) => void;
}

export const BlogFilters = ({
    search,
    onSearchChange,
    activeCategory,
    onCategoryChange,
    activeTag,
    onTagChange,
}: BlogFiltersProps) => {
    const { data: categories, loading: categoriesLoading } = useCategories();
    const { data: tags, loading: tagsLoading } = useTags();

    return (
        <aside className="space-y-12">
            {/* Search */}
            <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold">Search</h3>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                        type="search"
                        placeholder="Search articles..."
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-9"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="space-y-4 pt-4 border-t border-border/40">
                <h3 className="font-serif text-lg font-bold">Categories</h3>
                {categoriesLoading ? (
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-3/4" />
                        <Skeleton className="h-7 w-2/3" />
                        <Skeleton className="h-7 w-1/2" />
                    </div>
                ) : categories && categories.length > 0 ? (
                    <ul className="space-y-2">
                        <li>
                            <button
                                type="button"
                                onClick={() => onCategoryChange(undefined)}
                                className={cn(
                                    "flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary",
                                    !activeCategory ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                <span
                                    className={cn(
                                        "w-1.5 h-1.5 rounded-full transition-colors",
                                        !activeCategory ? "bg-primary" : "bg-border"
                                    )}
                                />
                                All Posts
                            </button>
                        </li>
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.slug;
                            return (
                                <li key={cat.slug}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onCategoryChange(isActive ? undefined : cat.slug)
                                        }
                                        className={cn(
                                            "flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary",
                                            isActive ? "text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                "w-1.5 h-1.5 rounded-full transition-colors",
                                                isActive ? "bg-primary" : "bg-border"
                                            )}
                                        />
                                        <span>{cat.name}</span>
                                        {typeof cat.postCount === "number" && (
                                            <span className="text-xs text-muted-foreground/70">
                                                ({cat.postCount})
                                            </span>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="text-sm text-muted-foreground">No categories yet.</p>
                )}
            </div>

            {/* Tags */}
            <div className="space-y-4 pt-4 border-t border-border/40">
                <h3 className="font-serif text-lg font-bold">Tags</h3>
                {tagsLoading ? (
                    <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-14" />
                        <Skeleton className="h-6 w-24" />
                    </div>
                ) : tags && tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => {
                            const isActive = activeTag === tag.slug;
                            return (
                                <Badge
                                    key={tag.slug}
                                    variant={isActive ? "default" : "outline"}
                                    asChild
                                    className="cursor-pointer transition-colors"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onTagChange(isActive ? undefined : tag.slug)
                                        }
                                    >
                                        #{tag.name}
                                    </button>
                                </Badge>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground">No tags yet.</p>
                )}
            </div>
        </aside>
    );
};
