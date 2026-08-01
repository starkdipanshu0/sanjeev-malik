import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug, getOtherArticles, getAllArticles } from "@/lib/articles";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { ReadingProgressBar } from "@/components/articles/ReadingProgressBar";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { ShareRow } from "@/components/articles/ShareRow";
import { ArticleRail } from "@/components/articles/ArticleRail";
import { Button } from "@/components/ui/button";
import { AMAZON_PAPERBACK_URL } from "@/lib/constants";

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
        return { title: "Post Not Found" };
    }

    // Bare title only - the root layout's template appends the site suffix.
    return {
        title: article.title,
        description: article.excerpt,
        alternates: { canonical: `/blogs/${article.slug}` },
        openGraph: {
            type: "article",
            title: article.title,
            description: article.excerpt,
            url: `/blogs/${article.slug}`,
            publishedTime: article.date,
            authors: [article.author],
            images: [{ url: article.image, alt: article.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    // The three posts are a deliberate sequence, so offer real prev/next.
    // "Read Next" previously fed every other article, uncapped, into a
    // 3-column grid - 2 cards leaving a permanent hole, growing to 9 later.
    const all = getAllArticles();
    const position = all.findIndex((a) => a.id === article.id);
    const previous = position > 0 ? all[position - 1] : null;
    const next = position < all.length - 1 ? all[position + 1] : null;
    const otherArticles = getOtherArticles(article.id).slice(0, 3);
    // Glue short connector words (The, a, to, of, ...) to the following word so they
    // don't strand at the end of a title line. Non-breaking space keeps phrases intact.
    const displayTitle = article.title.replace(/(\s)(\S{1,3})\s/g, '$1$2 ');

    return (
        <article className="min-h-screen bg-background pt-12 pb-20 relative">
            <ReadingProgressBar />

            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

                {/* Hero */}
                <header className="max-w-3xl mx-auto text-center">
                    <Link href="/blogs" className="flex w-fit items-center gap-2 text-sm text-ink-soft hover:text-emphasis mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blogs
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

                {/* Cover Image - full container width. At max-w-3xl it was only
                    768px on a wide screen, which is most of why the page read narrow. */}
                <div className="w-full">
                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden my-12 md:my-16 shadow-(--shadow-plate-featured)">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Body - max-w-3xl is ~77 characters at 20px Lora. Leaves 208px
                    of margin each side inside the 1184px content box, which is
                    exactly what ArticleRail is sized to occupy. */}
                <div className="relative max-w-3xl mx-auto">

                    <ArticleRail blocks={article.content} title={article.title} slug={article.slug} />

                    {/* Mobile / tablet contents. The TOC was xl-only, so every phone
                        reader got no in-article navigation. TableOfContents returns
                        null below 2 headings, so this collapses away on short posts. */}
                    <details className="xl:hidden plate group mb-8 rounded-2xl px-5 py-4 [&:not(:has(nav))]:hidden">
                        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold uppercase tracking-[0.15em] text-ink-soft outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded">
                            On this page
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-open:rotate-90 motion-reduce:transition-none" />
                        </summary>
                        <div className="pt-4">
                            <TableOfContents blocks={article.content} />
                        </div>
                    </details>

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
                                        // -mx-8 at lg+ breaks the quote past the measure so it reads
                                        // as punctuation. Kept to 32px: the sticky rail occupies
                                        // -208px to -48px, so this clears it by 16px.
                                        <blockquote key={index} className="relative my-12 pl-8 border-l-2 border-primary lg:-mx-8 lg:pr-8">
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
                                        <ol key={index} className="list-decimal pl-6 space-y-2 marker:text-emphasis text-lg md:text-xl leading-[1.85] text-foreground/85 my-6">
                                            {block.items.map((it, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                                            ))}
                                        </ol>
                                    ) : (
                                        <ul key={index} className="list-disc pl-6 space-y-2 marker:text-emphasis text-lg md:text-xl leading-[1.85] text-foreground/85 my-6">
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

                    {/* End-of-article CTA. A reader who finishes a post previously
                        got only the bio; this is the point of highest intent. */}
                    <aside className="plate mt-16 flex flex-col items-center gap-6 rounded-2xl p-6 text-center sm:flex-row sm:p-8 sm:text-left">
                        <div className="relative h-32 w-[86px] shrink-0 overflow-hidden rounded-r-lg shadow-(--shadow-plate)">
                            <Image
                                src="/images/book_cover_flat.jpg"
                                alt=""
                                fill
                                sizes="86px"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emphasis">
                                From the book
                            </p>
                            <h2 className="mt-1 font-serif text-xl font-bold text-foreground text-balance md:text-2xl">
                                The Graphene Mentality
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty">
                                Practical strategies to build focus, discipline, and mental resilience &mdash; in the age of distraction.
                            </p>
                        </div>
                        <Button asChild className="shrink-0">
                            <a href={AMAZON_PAPERBACK_URL} target="_blank" rel="noopener noreferrer">
                                Grab Your Copy
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </aside>

                    <ShareRow title={article.title} slug={article.slug} />

                    {/* Series navigation */}
                    {(previous || next) && (
                        <nav aria-label="Series navigation" className="mt-10 grid gap-4 sm:grid-cols-2">
                            {previous ? (
                                <Link href={`/blogs/${previous.slug}`} className="plate group rounded-2xl p-5 transition-[box-shadow] duration-300 hover:shadow-(--shadow-plate-pressed) outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                                    <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-ink-faint">
                                        <ArrowLeft className="w-3.5 h-3.5" /> Previous
                                    </span>
                                    <span className="mt-2 block font-serif font-bold text-foreground leading-snug text-balance group-hover:text-emphasis transition-colors">
                                        {previous.title}
                                    </span>
                                </Link>
                            ) : <span className="hidden sm:block" />}
                            {next && (
                                <Link href={`/blogs/${next.slug}`} className="plate group rounded-2xl p-5 text-right transition-[box-shadow] duration-300 hover:shadow-(--shadow-plate-pressed) outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:col-start-2">
                                    <span className="flex items-center justify-end gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-ink-faint">
                                        Next <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                    <span className="mt-2 block font-serif font-bold text-foreground leading-snug text-balance group-hover:text-emphasis transition-colors">
                                        {next.title}
                                    </span>
                                </Link>
                            )}
                        </nav>
                    )}

                    {/* Author Bio */}
                    <div className="mt-12">
                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start p-6 md:p-8 rounded-2xl bg-secondary border border-border/50">
                            <div className="w-16 h-16 rounded-full overflow-hidden relative shrink-0">
                                <Image src="/images/author.jpg" alt={article.author} fill className="object-cover" />
                            </div>
                            <div>
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-emphasis mb-1">Written by</p>
                                <h3 className="font-serif text-xl font-bold text-foreground mb-2 text-balance">{article.author}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    Indian Army doctor, Special Forces veteran, and record-setting endurance athlete. Author of <span className="text-foreground font-medium">The Graphene Mentality</span> — a practical guide to building focus, discipline, and resilience.
                                </p>
                                <Link href="/book" className="inline-flex items-center gap-2 text-sm font-bold text-emphasis hover:gap-3 transition-all">
                                    Explore the Book <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Read Next */}
                {otherArticles.length > 0 && (
                    <section className="max-w-5xl mx-auto mt-20 pt-12 border-t border-border/40">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center text-balance">Read Next</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherArticles.map((other) => (
                                <Link key={other.id} href={`/blogs/${other.slug}`} className="group block">
                                    <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-4">
                                        <Image src={other.image} alt={other.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <h3 className="font-serif font-bold text-lg group-hover:text-emphasis transition-colors leading-snug mb-1 text-balance">
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
