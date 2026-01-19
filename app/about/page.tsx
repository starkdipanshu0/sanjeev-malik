import AboutHero from "@/components/about/AboutHero";
import AboutDescription from "@/components/about/AboutDescription";
import KeyAchievements from "@/components/about/KeyAchievements";
import Visions from "@/components/about/Visions";
import NewsletterSection from "@/components/NewsletterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Sanjeev Malik | The Graphene Mentality",
    description: "Learn about Lt. Col. Sanjeev Malik, a soldier, corporate strategist, and author of The Graphene Mentality.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <AboutHero />
            <AboutDescription />
            <KeyAchievements />
            <Visions />
            <NewsletterSection />
        </main>
    );
}
