import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug, getOtherArticles, getAllArticles } from "@/lib/articles";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
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
    // Glue short connector words (The, a, to, of, ...) to the following word so they
    // don't strand at the end of a title line. Non-breaking space keeps phrases intact.
    const displayTitle = article.title.replace(/(\s)(\S{1,3})\s/g, '$1$2 ');

    return (
        <article className="min-h-screen bg-background pt-12 pb-20 relative">
            <ReadingProgressBar />

            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

                {/* Hero */}
                <header className="max-w-3xl mx-auto text-center">
                    <Link href="/articles" className="flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Articles
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-[1.1] tracking-tight text-balance mb-5">
                        {displayTitle}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground font-reading leading-relaxed text-balance mb-8">
                        {article.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
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
                </header>

                {/* Cover Image */}
                <div className="max-w-3xl mx-auto">
                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden my-12 md:my-16 shadow-2xl">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Body - max-w-2xl keeps the measure near 66 characters per line
                    at 20px Lora. The hero and cover above stay wider on purpose. */}
                <div className="relative max-w-2xl mx-auto">

                    {/* Floating Table of Contents (left margin, large screens only) */}
                    <aside className="hidden xl:block absolute right-full top-0 h-full mr-8 w-48">
                        <div className="sticky top-28">
                            <TableOfContents blocks={article.content} />
                        </div>
                    </aside>

                    <div className="article-body font-reading">
                        {article.content.map((block, index) => {
                            switch (block.type) {
                                case 'paragraph':
                                    return (
                                        <p
                                            key={index}
                                            dangerouslySetInnerHTML={{ __html: block.content }}
                                            className="text-lg md:text-xl leading-[1.85] text-foreground/85 mb-6 md:mb-7"
                                        />
                                    );
                                case 'heading': {
                                    const HeadingTag = `h${block.level}` as 'h2' | 'h3';
                                    const id = block.content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                    const headingClass = block.level === 2
                                        ? "font-serif font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4 scroll-mt-28"
                                        : "font-serif font-bold text-xl md:text-2xl text-foreground mt-10 mb-3 scroll-mt-28";
                                    return (
                                        <HeadingTag key={index} id={id} className={headingClass}>
                                            {block.content}
                                        </HeadingTag>
                                    );
                                }
                                case 'quote':
                                    return (
                                        <blockquote key={index} className="relative my-12 pl-8 border-l-2 border-primary">
                                            <span aria-hidden className="absolute -top-6 left-4 text-7xl font-serif text-primary/15 leading-none select-none pointer-events-none">&ldquo;</span>
                                            <p className="relative text-xl md:text-2xl font-serif font-medium text-foreground/90 leading-snug">
                                                {block.content}
                                            </p>
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
                                                <figcaption className="text-center text-sm text-muted-foreground mt-3 font-sans">
                                                    {block.caption}
                                                </figcaption>
                                            )}
                                        </figure>
                                    );
                                case 'list':
                                    return block.style === 'ordered' ? (
                                        <ol key={index} className="list-decimal pl-6 space-y-2 marker:text-primary text-lg md:text-xl leading-[1.85] text-foreground/85 my-6">
                                            {block.items.map((it, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                                            ))}
                                        </ol>
                                    ) : (
                                        <ul key={index} className="list-disc pl-6 space-y-2 marker:text-primary text-lg md:text-xl leading-[1.85] text-foreground/85 my-6">
                                            {block.items.map((it, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                                            ))}
                                        </ul>
                                    );
                                case 'divider':
                                    return (
                                        <div key={index} className="flex items-center justify-center gap-2.5 my-14 text-primary/50" aria-hidden>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                        </div>
                                    );
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

                    {/* Author Bio */}
                    <div className="mt-12">
                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start p-6 md:p-8 rounded-2xl bg-secondary border border-border/50">
                            <div className="w-16 h-16 rounded-full overflow-hidden relative shrink-0">
                                <Image src="/images/author.jpg" alt={article.author} fill className="object-cover" />
                            </div>
                            <div>
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-1">Written by</p>
                                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{article.author}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    Indian Army doctor, Special Forces veteran, and record-setting endurance athlete. Author of <span className="text-foreground font-medium">The Graphene Mentality</span> — a practical guide to building focus, discipline, and resilience.
                                </p>
                                <Link href="/book" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
                                    Explore the Book <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Read Next */}
                {otherArticles.length > 0 && (
                    <section className="max-w-5xl mx-auto mt-20 pt-12 border-t border-border/40">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">Read Next</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherArticles.map((other) => (
                                <Link key={other.id} href={`/articles/${other.slug}`} className="group block">
                                    <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-4">
                                        <Image src={other.image} alt={other.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <h3 className="font-serif font-bold text-lg group-hover:text-primary transition-colors leading-snug mb-1">
                                        {other.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">{other.readTime}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </article>
    );
}
