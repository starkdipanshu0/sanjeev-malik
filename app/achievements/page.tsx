import { AchievementHero } from "@/components/achievements/AchievementHero";
import GrapheneIntro from "@/components/achievements/GrapheneIntro";
import AchievementGallery from "@/components/achievements/AchievementGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Achievements | Lt. Col. Sanjeev Malik",
    description: "A showcase of historic victories, medals, and contributions to the nation by Lt. Col. Sanjeev Malik.",
};

export default function AchievementsPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <AchievementHero />
            <GrapheneIntro />
            <AchievementGallery />

            {/* Footer Call to Action */}
            <section className="py-24 bg-white text-black text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">Inspired by the Journey?</h2>
                    <p className="text-xl text-black/60 max-w-2xl mx-auto mb-8 font-sans">
                        Discover the mindset behind these achievements in the book "The Graphene Mentality".
                    </p>
                    <a href="https://www.amazon.in/Graphene-Mentality-Distraction-Strength-Deliver/dp/8198845410/ref=sr_1_3?sr=8-3" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold tracking-wider hover:scale-105 transition-transform">
                        GET THE BOOK
                    </a>
                </div>
            </section>
        </main>
    );
}
