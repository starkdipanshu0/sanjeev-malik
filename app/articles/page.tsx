import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Sidebar } from "@/components/articles/Sidebar";

export const metadata = {
    title: "Articles | Sanjeev Malik",
    description: "Insights on leadership, strategy, and the graphene mentality from Lt. Col. Sanjeev Malik.",
};

export default function ArticlesPage() {
    const articles = getAllArticles();

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            {/* Page Header */}
            <div className="container mx-auto px-6 md:px-12 mb-20 text-center">
                <span className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
                    The Journal
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
                    Insights & <span className="italic text-muted-foreground">Perspectives</span>
                </h1>
                <p className="max-w-xl mx-auto text-muted-foreground text-lg">
                    Exploring the intersection of military discipline, corporate strategy, and human potential.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Articles List (Span 8) */}
                    <div className="lg:col-span-8 space-y-12">
                        {articles.map((article, index) => (
                            <ArticleCard key={article.id} article={article} index={index} />
                        ))}
                    </div>

                    {/* Right Column: Sticky Sidebar (Span 4) */}
                    <aside className="lg:col-span-4 relative">
                        <div className="sticky top-32">
                            <Sidebar />
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
}
