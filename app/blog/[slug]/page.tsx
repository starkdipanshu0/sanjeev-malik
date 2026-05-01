import type { Metadata } from "next";
import { vloziServerClient } from "@/lib/vlozi";
import { BlogPostView } from "@/components/blog/BlogPostView";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = await vloziServerClient.blog.get(slug);
        const title = post.seoTitle ?? post.title;
        const description = post.seoDescription ?? post.excerpt;
        return {
            title: `${title} | Sanjeev Malik`,
            description,
            openGraph: {
                title,
                description,
                images: post.featuredImageUrl ? [{ url: post.featuredImageUrl }] : undefined,
                type: "article",
                publishedTime: post.publishedAt,
            },
        };
    } catch {
        return { title: "Article Not Found" };
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    return <BlogPostView slug={slug} />;
}
