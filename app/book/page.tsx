import { Metadata } from 'next';
import BookHero from '@/components/book/BookHero';
import BookSynopsis from '@/components/book/BookSynopsis';
import FreeChapterSignup from '@/components/book/FreeChapterSignup';
import ChapterWalkthrough from '@/components/book/ChapterWalkthrough';
import KeyThemes from '@/components/book/KeyThemes';
import PurchaseOptions from '@/components/book/PurchaseOptions';

export const metadata: Metadata = {
    title: 'The Graphene Mentality | Book',
    description: 'A detailed walkthrough of The Graphene Mentality by Lt. Col. Dr. Sanjeev Malik. Discover the structure of resilience.',
};

export default function BookPage() {
    return (
        <main className="min-h-screen">
            <BookHero />
            <BookSynopsis />
            <FreeChapterSignup />
            <KeyThemes />
            <ChapterWalkthrough />
            <PurchaseOptions />
        </main>
    );
}
