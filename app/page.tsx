import HeroSection from "@/components/HeroSection";
import AboutAuthorSection from "@/components/AboutAuthorSection";
import BookBenefitsSection from "@/components/BookBenefitsSection";
import BlogCarouselSection from "@/components/BlogCarouselSection";
import NewsletterSection from "@/components/NewsletterSection";
import ConnectSection from "@/components/ConnectSection";
import BookCTASection from "@/components/BookCTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutAuthorSection />
      <BookBenefitsSection />
      <BlogCarouselSection />
      {/* <NewsletterSection /> */}
      <BookCTASection />
      <ConnectSection />
    </div>
  );
}
