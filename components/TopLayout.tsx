"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { NewsletterBanner } from "@/components/articles/NewsletterBanner";

export const TopLayout = () => {
    const pathname = usePathname();
    const showBanner = pathname.startsWith("/articles");

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
            {showBanner && <NewsletterBanner />}
            <Header />
        </div>
    );
};
