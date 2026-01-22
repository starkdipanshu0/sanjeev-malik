"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { NewsletterBanner } from "@/components/articles/NewsletterBanner";

export const TopLayout = () => {
    const pathname = usePathname();
    const showBanner = pathname.startsWith("/articles");

    const isSticky = pathname.startsWith("/articles") || pathname.startsWith("/blogs");

    return (
        <div className={`w-full flex flex-col z-50 ${isSticky ? "sticky top-0 bg-background" : "fixed top-0 left-0 right-0"}`}>
            {showBanner && <NewsletterBanner />}
            <Header />
        </div>
    );
};
