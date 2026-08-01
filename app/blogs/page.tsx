import { getAllArticles } from "@/lib/articles";
import { BlogList } from "@/components/articles/BlogList";
import { Sidebar } from "@/components/articles/Sidebar";

export const metadata = {
    title: "Blogs | Sanjeev Malik",
    description: "Insights on leadership, strategy, and the graphene mentality from Lt. Col. Sanjeev Malik.",
};

export default function BlogsPage() {
    const articles = getAllArticles();

    return (
        <main className="min-h-screen bg-background pt-12 pb-20">
            {/* Page Header. H1 was md:text-7xl - larger than the articles' own
                H1 at md:text-5xl, so the index shouted louder than the content. */}
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 mb-12 md:mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
                    My <span className="text-emphasis">Blogs</span>
                </h1>
                <p className="max-w-xl mx-auto text-ink-soft text-lg text-pretty">
                    Exploring the intersection of military discipline, corporate strategy, and human potential.
                </p>
            </div>

            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

                    {/* Posts - recessed chassis tray, matching the benefits grid */}
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <div className="rounded-3xl bg-transparent p-0 md:bg-chassis md:p-4 md:shadow-(--shadow-chassis)">
                            <BlogList articles={articles} />
                        </div>
                    </div>

                    {/* Sidebar. order-1 on mobile puts the newsletter and book CTA
                        above the posts - it previously collapsed to the very bottom,
                        below three full-height cards where the reader had gone. */}
                    <aside className="lg:col-span-4 relative order-1 lg:order-2">
                        <div className="lg:sticky lg:top-32">
                            <Sidebar />
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
}
