import { AchievementHero } from "@/components/achievements/AchievementHero";
import AchievementGallery from "@/components/achievements/AchievementGallery";
import HistoricVictory from "@/components/achievements/HistoricVictory";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Achievements | Lt. Col. Sanjeev Malik",
    description: "A showcase of historic victories, medals, and contributions to the nation by Lt. Col. Sanjeev Malik.",
};

export default function AchievementsPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <AchievementHero />
            <HistoricVictory />
            <AchievementGallery />

            {/* Footer Call to Action */}
            <section className="py-16 md:py-24 bg-secondary text-foreground text-center">
                <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-balance">Inspired by the Journey?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-sans">
                        Discover the mindset behind these achievements in the book &ldquo;The Graphene Mentality&rdquo;.
                    </p>
                    <Button size="xl" variant="contrast" asChild>
                        <a href="https://www.amazon.in/Graphene-Mentality-Distraction-Strength-Deliver/dp/8198845410/ref=sr_1_3?sr=8-3" target="_blank" rel="noopener noreferrer">
                            GET THE BOOK
                        </a>
                    </Button>
                </div>
            </section>
        </main>
    );
}
