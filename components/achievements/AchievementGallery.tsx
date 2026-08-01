"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, FileImage, ChevronLeft, ChevronRight, Layers, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type MediaType = "image" | "video";

interface MediaItem {
    type: MediaType;
    src: string;
    thumbnail?: string; // For videos
    isYoutube?: boolean;
}

interface AchievementEntry {
    media: MediaItem[];
    title: string;
    description: string;
    date?: string;
}

const galleryItems: AchievementEntry[] = [
    {
        media: [
            { type: "image", src: "/achievements/IMG_7069.JPEG" },
            { type: "image", src: "/achievements/IMG_7070.JPEG" }
        ],
        title: "New Delhi World Book Fair 2026",
        description: "Honored and appreciated by the Chief Army Officer at the New Delhi World Book Fair 2026. A moment of pride sharing 'The Graphene Mentality' with the armed forces leadership.",
        date: "2026"
    },
    {
        media: [
            { type: "image", src: "/achievements/WhatsApp Image 2026-01-20 at 11.03.47 AM.jpeg" }
        ],
        title: "National Recognition",
        description: "Felicitated by COAS Gen Upender Dwivedi, PVSM, AVSM. A profound honor receiving recognition from the highest leadership of the Indian Army.",
        date: "2025"
    },
    {
        media: [
            {
                type: "video",
                src: "/achievements/IMG_5471.MP4",
                thumbnail: "" // No thumbnail available, will show generic play icon
            }
        ],
        title: "Featured in Kaun Banega Crorepati",
        description: "A proud moment of recognition where Lt. Col. Sanjeev Malik was featured as a subject of a question on India's biggest quiz show, Kaun Banega Crorepati (KBC), highlighting his historic achievements to the entire nation.",
        date: "National TV"
    },
];

const AchievementGallery = () => {
    return (
        <section className="py-16 md:py-24 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="grain absolute inset-0 opacity-[0.05] pointer-events-none" />

            <div className="mx-auto w-full max-w-5xl px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-balance">
                        Journey of <span className="text-primary">Excellence</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Each milestone holds a story of perseverance.
                    </p>
                </motion.div>

                {/* Single Column Vertical Stack */}
                <div className="space-y-16 md:space-y-24">
                    {galleryItems.map((item, index) => (
                        <AchievementSection key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AchievementSection = ({ item, index }: { item: AchievementEntry; index: number }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const hasMultiple = item.media.length > 1;

    const nextSlide = () => {
        setIsPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % item.media.length);
    };
    const prevSlide = () => {
        setIsPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + item.media.length) % item.media.length);
    };

    const currentMedia = item.media[currentSlide];
    const isVideo = currentMedia.type === "video";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 md:gap-10"
        >
            {/* Header / Title Section */}
            <div className="border-l-4 border-primary pl-6 py-2">
                <div className="flex items-center gap-3 mb-2 text-primary text-sm font-bold tracking-widest uppercase">
                    {item.date && <span>{item.date}</span>}
                    {item.date && <span className="w-1 h-1 rounded-full bg-primary" />}
                    <span>{isVideo ? "Video Highlight" : "Gallery"}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 text-balance">
                    {item.title}
                </h3>
            </div>

            {/* Media Viewer */}
            <div className="relative w-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl aspect-video">
                {/* Media Content */}
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full h-full"
                        >
                            {isVideo ? (
                                <div className="relative w-full h-full group">
                                    {!isPlaying ? (
                                        // Video Thumbnail with Play Button
                                        <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                                            {currentMedia.thumbnail ? (
                                                <Image
                                                    src={currentMedia.thumbnail}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                />
                                            ) : (
                                                // Fallback for local video without thumb
                                                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                                                    <Play className="w-16 h-16 text-zinc-500" />
                                                    <span className="absolute mt-24 text-sm text-zinc-400 font-medium">Click to Play Video</span>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/40 group-hover:scale-110 transition-transform">
                                                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // Active Player
                                        <div className="w-full h-full bg-black">
                                            {currentMedia.isYoutube ? (
                                                <iframe
                                                    src={currentMedia.src}
                                                    title={item.title}
                                                    className="w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <video
                                                    src={currentMedia.src}
                                                    controls
                                                    autoPlay
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 overflow-hidden">
                                        <Image
                                            src={currentMedia.src}
                                            alt="background"
                                            fill
                                            className="object-cover blur-3xl opacity-30 scale-110"
                                        />
                                    </div>
                                    <Image
                                        src={currentMedia.src}
                                        alt={item.title}
                                        fill
                                        className="object-contain relative z-10"
                                    />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                {hasMultiple && (
                    <>
                        <button
                            onClick={prevSlide}
                            aria-label="Previous image"
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-10 inline-flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full text-white transition-colors hover:bg-primary hover:text-on-primary-strong focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Next image"
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-10 inline-flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full text-white transition-colors hover:bg-primary hover:text-on-primary-strong focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        >
                            <ChevronRight size={24} />
                        </button>
                        <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full flex items-center gap-2 text-sm font-medium border border-white/10">
                            <Layers size={14} className="text-primary" />
                            <span>{currentSlide + 1} / {item.media.length}</span>
                        </div>
                    </>
                )}
            </div>

            {/* Description Text */}
            <div className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl">
                <p>{item.description}</p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
    );
};

export default AchievementGallery;
