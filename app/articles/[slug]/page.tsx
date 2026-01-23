import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug, getOtherArticles, getAllArticles } from "@/lib/articles";
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReadingProgressBar } from "@/components/articles/ReadingProgressBar";
import { TableOfContents } from "@/components/articles/TableOfContents";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all articles (good for SEO/Performance)
export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        }
    }

    return {
        title: `${article.title} | Sanjeev Malik`,
        description: article.excerpt,
    }
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const otherArticles = getOtherArticles(article.id);

    return (
        <article className="min-h-screen bg-background pt-12 pb-20 relative">
            <ReadingProgressBar />

            {/* Header / Hero */}
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Articles
                </Link>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-8 max-w-4xl">
                    {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border/40 pb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden relative">
                            <Image src="/images/author.jpg" alt={article.author} fill className="object-cover" />
                        </div>
                        <span className="font-medium text-foreground">{article.author}</span>
                    </div>
                    <span className="w-px h-4 bg-border" />
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
                    <span className="w-px h-4 bg-border" />
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</span>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Content (Span 8) */}
                    <div className="lg:col-span-8">
                        {/* Cover Image */}
                        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Article Body */}
                        <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                            {article.content.map((block, index) => {
                                switch (block.type) {
                                    case 'paragraph':
                                        return (
                                            <p
                                                key={index}
                                                dangerouslySetInnerHTML={{ __html: block.content }}
                                                className="leading-relaxed opacity-90"
                                            />
                                        );
                                    case 'heading':
                                        // Cast to specific string literals allowed in JSX
                                        const HeadingTag = `h${block.level}` as 'h2' | 'h3';
                                        const id = block.content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                        return (
                                            <HeadingTag key={index} id={id} className="font-serif font-bold text-foreground mt-8 mb-4 scroll-mt-24">
                                                {block.content}
                                            </HeadingTag>
                                        );
                                    case 'quote':
                                        return (
                                            <blockquote key={index} className="border-l-4 border-primary bg-secondary/10 p-6 rounded-r-lg italic my-8">
                                                "{block.content}"
                                            </blockquote>
                                        );
                                    case 'image':
                                        return (
                                            <figure key={index} className="my-10">
                                                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                                                    <Image
                                                        src={block.src}
                                                        alt={block.alt}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                {block.caption && (
                                                    <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                                                        {block.caption}
                                                    </figcaption>
                                                )}
                                            </figure>
                                        );
                                    case 'list':
                                        return block.style === 'ordered' ? (
                                            <ol key={index} className="list-decimal pl-6 space-y-2 marker:text-primary font-medium my-6">
                                                {block.items.map((it, i) => (
                                                    <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                                                ))}
                                            </ol>
                                        ) : (
                                            <ul key={index} className="list-disc pl-6 space-y-2 marker:text-primary font-medium my-6">
                                                {block.items.map((it, i) => (
                                                    <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                                                ))}
                                            </ul>
                                        );
                                    case 'divider':
                                        return <hr key={index} className="my-12 border-border/40" />;
                                    default:
                                        return null;
                                }
                            })}
                        </div>

                        {/* Share Footer */}
                        <div className="mt-16 pt-8 border-t border-border/40 flex items-center justify-between">
                            <span className="font-serif font-bold text-lg">Share this article</span>
                            <div className="flex gap-3">
                                <Button variant="outline" size="icon" className="rounded-full"><Linkedin className="w-4 h-4" /></Button>
                                <Button variant="outline" size="icon" className="rounded-full"><Twitter className="w-4 h-4" /></Button>
                                <Button variant="outline" size="icon" className="rounded-full"><Facebook className="w-4 h-4" /></Button>
                                <Button variant="outline" size="icon" className="rounded-full"><Share2 className="w-4 h-4" /></Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar (Span 4) */}
                    <aside className="lg:col-span-4 relative hidden lg:block">
                        <div className="sticky top-32 space-y-8">

                            {/* Table of Contents */}
                            <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                                <TableOfContents blocks={article.content} />
                            </div>

                            {/* More Perspectives */}
                            <div className="bg-secondary/5 rounded-xl p-8 border border-border/50">
                                {/* <h3 className="font-serif text-xl font-bold mb-6">More Perspectives</h3> */}
                                <h3 className="font-serif text-xl font-bold mb-6">More Blogs</h3>
                                <div className="space-y-6">
                                    {otherArticles.map((other) => (
                                        <Link key={other.id} href={`/articles/${other.slug}`} className="group block space-y-2">
                                            <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-3">
                                                <Image src={other.image} alt={other.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                            </div>
                                            <h4 className="font-medium group-hover:text-primary transition-colors leading-snug">
                                                {other.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground">{other.readTime}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </article>
    );
}
