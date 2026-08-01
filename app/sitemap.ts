import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanjeev-malik.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        { path: "", priority: 1, changeFrequency: "monthly" as const },
        { path: "/book", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/blogs", priority: 0.8, changeFrequency: "weekly" as const },
        { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
        { path: "/achievements", priority: 0.6, changeFrequency: "yearly" as const },
    ].map((route) => ({
        url: `${siteUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    const articleRoutes = getAllArticles().map((article) => ({
        url: `${siteUrl}/blogs/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "yearly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...articleRoutes];
}
