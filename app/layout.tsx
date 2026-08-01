import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import { TopLayout } from "@/components/TopLayout";
import Footer from "@/components/Footer";

// ... existing code ...

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

// Set NEXT_PUBLIC_SITE_URL in the deploy environment. metadataBase is what
// lets Next resolve the relative OG image path to an absolute URL, which
// social platforms require.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanjeev-malik.vercel.app";

const description =
  "Lt Col Sanjeev Malik - Indian Army doctor, Special Forces veteran and five-time gold medallist. Author of The Graphene Mentality, a practical guide to building focus, discipline and mental resilience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Graphene Mentality | Lt Col Sanjeev Malik",
    template: "%s | Lt Col Sanjeev Malik",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "The Graphene Mentality",
    title: "The Graphene Mentality | Lt Col Sanjeev Malik",
    description,
    url: siteUrl,
    images: [{ url: "/images/book_cover_flat.jpg", width: 646, height: 1000, alt: "The Graphene Mentality book cover" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Graphene Mentality | Lt Col Sanjeev Malik",
    description,
    images: ["/images/book_cover_flat.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${sourceSans.variable} ${lora.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <TopLayout />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
