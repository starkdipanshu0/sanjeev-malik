"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const achievements = [
    {
        id: 1,
        title: "President's Medal of Honor",
        description: "Awarded for distinguished service and exemplary leadership in challenging environments.",
        image: "https://images.unsplash.com/photo-1579963287313-27e7f6063b4b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "International Medical Conference",
        description: "Keynote speaker on 'Resilience in Crisis', sharing insights with global medical leaders.",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "National Sports Championship",
        description: "Gold medalist in shooting, representing the spirit of the Indian Army.",
        image: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Community Outreach Program",
        description: "Leading medical camps in remote border areas, serving over 5000 civilians.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Author of The Year",
        description: "Recognized for 'The Graphene Mentality' contribution to psychological literature.",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop"
    }
];

export const AchievementsCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-16 md:py-24 bg-[#0a0a0a] text-white border-t border-white/5">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 mb-12 flex items-end justify-between">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Milestones of Excellence</h2>
                    <p className="text-white/60 max-w-xl">
                        A continuous journey of breaking barriers and setting new benchmarks across multiple disciplines.
                    </p>
                </div>
                <div className="hidden md:flex gap-2 text-primary text-sm font-bold tracking-widest items-center">
                    SCROLL <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {achievements.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex-none w-[85vw] md:w-[400px] snap-center group relative overflow-hidden rounded-xl bg-white/5 border border-white/10"
                    >
                        <div className="relative aspect-[3/2] w-full overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
                {/* Spacer for end padding */}
                <div className="w-12 flex-none" />
            </div>
        </section>
    );
};
