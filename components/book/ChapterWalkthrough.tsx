"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Data Structure reflecting the Table of Contents
interface Chapter {
    id: number;
    title: string;
    description: string;
    highlight: string;
    step?: string;
    topic?: string;
}

interface Part {
    partTitle: string;
    chapters: Chapter[];
}

const tableOfContents: Part[] = [
    {
        partTitle: "I. DECODING THE GRAPHENE MENTALITY",
        chapters: [
            {
                id: 1,
                title: "What is the Graphene Mentality?",
                description: "Defining the core concept and its significance in modern life.",
                highlight: "The strongest materials are not just hard; they are structured."
            },
            {
                id: 2,
                title: "Why Do You Need the Graphene Mentality?",
                description: "Understanding the necessity of resilience in a chaotic world.",
                highlight: "Survival is not enough; you must thrive."
            }
        ]
    },
    {
        partTitle: "II. LEVERAGING THE GRAPHENE MENTALITY",
        chapters: [
            {
                id: 3,
                step: "STEP 1: PLAN",
                title: "Choose Your Goals through P2P",
                description: "A strategic approach to goal setting and planning.",
                highlight: "Planning without purpose is just a wish."
            },
            {
                id: 4,
                step: "STEP 2: EMBARK",
                title: "Firmness: 'The First Atom'",
                description: "Establishing the core strength required to begin the journey.",
                highlight: "Firmness provides the foundation for all growth."
            },
            {
                id: 5,
                step: "STEP 3: ENDURE",
                title: "Flexibility: 'The Second Atom'",
                description: "Learning to bend without breaking under pressure.",
                highlight: "Rigidity is the enemy of endurance."
            },
            {
                id: 6,
                step: "STEP 3: ENDURE",
                title: "Resilience: 'The Third Atom'",
                description: "The synthesis of firmness and flexibility.",
                highlight: "True resilience is dynamic, not static."
            },
            {
                id: 7,
                step: "STEP 4: COOPERATE",
                title: "Team Spirit: 'The Fourth Atom'",
                description: "Harnessing the power of collaboration and collective strength.",
                highlight: "No atom stands alone in a lattice."
            }
        ]
    },
    {
        partTitle: "III. IGNITE AND RECHARGE",
        chapters: [
            {
                id: 8,
                topic: "IGNITE",
                title: "Communication Skills",
                description: "Igniting the Graphene Mentality through effective connection.",
                highlight: "Words can forge or fracture the strongest bonds."
            },
            {
                id: 9,
                topic: "RECHARGE",
                title: "Fitness, Diet and Sleep",
                description: "Recharging the physical vessel to sustain mental toughness.",
                highlight: "A strong mind requires a powered body."
            }
        ]
    },
    {
        partTitle: "IV. POWER AND PROTECT",
        chapters: [
            {
                id: 10,
                topic: "POWER",
                title: "Powering the Graphene Mentality",
                description: "Sustaining momentum and long-term energy.",
                highlight: "Power is not possessed; it is generated."
            },
            {
                id: 11,
                topic: "PROTECT",
                title: "Protecting the Graphene Mentality",
                description: "Safeguarding your mindset against erosion and external threats.",
                highlight: "Your mentality is your most valuable asset."
            },
            {
                id: 12,
                title: "Conclusion",
                description: "Summarizing the journey and looking forward.",
                highlight: "The end is just the beginning of your new structure."
            }
        ]
    }
];

const ChapterWalkthrough = () => {
    const [activeChapter, setActiveChapter] = useState<number | null>(null);

    return (
        <section className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Inside the <span className="text-primary">Pages</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">A comprehensive breakdown of the journey.</p>
                </div>

                <div className="space-y-12">
                    {tableOfContents.map((part, partIndex) => (
                        <div key={partIndex} className="relative">
                            {/* Part Header */}
                            <div className="sticky top-20 z-20 bg-background/95 backdrop-blur-sm py-4 mb-6 border-b border-border">
                                <h3 className="text-sm font-bold tracking-widest text-primary uppercase">
                                    {part.partTitle}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {part.chapters.map((chapter, index) => (
                                    <motion.div
                                        key={chapter.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: index * 0.05 }}
                                        className={cn(
                                            "group border border-border rounded-lg overflow-hidden transition-all duration-300",
                                            activeChapter === chapter.id
                                                ? "border-primary bg-primary/5 shadow-md"
                                                : "hover:border-primary/30"
                                        )}
                                        onClick={() => setActiveChapter(activeChapter === chapter.id ? null : chapter.id)}
                                    >
                                        <div className="p-6 cursor-pointer">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex-1">
                                                    {/* Step / Topic Tag */}
                                                    {(chapter.step || chapter.topic) && (
                                                        <span className="inline-block text-[10px] font-bold tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded-sm mb-2 uppercase">
                                                            {chapter.step || chapter.topic}
                                                        </span>
                                                    )}

                                                    <div className="flex items-baseline gap-3">
                                                        <span className={cn(
                                                            "text-sm font-mono font-bold",
                                                            activeChapter === chapter.id ? "text-primary" : "text-muted-foreground/50"
                                                        )}>
                                                            {chapter.id.toString().padStart(2, '0')}.
                                                        </span>
                                                        <h4 className="text-lg md:text-xl font-serif font-medium text-foreground">
                                                            {chapter.title}
                                                        </h4>
                                                    </div>
                                                </div>

                                                <div className={cn(
                                                    "w-8 h-8 flex items-center justify-center rounded-full border border-border transition-all duration-300",
                                                    activeChapter === chapter.id ? "bg-primary text-primary-foreground border-primary rotate-180" : "text-muted-foreground group-hover:border-primary/50"
                                                )}>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform">
                                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: activeChapter === chapter.id ? "auto" : 0,
                                                    opacity: activeChapter === chapter.id ? 1 : 0,
                                                    marginTop: activeChapter === chapter.id ? 16 : 0
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-2 border-t border-primary/10">
                                                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                                        {chapter.description}
                                                    </p>
                                                    <div className="p-3 bg-background rounded border border-border flex gap-3 items-start">
                                                        <span className="text-primary text-xl leading-none font-serif">“</span>
                                                        <p className="text-sm font-medium text-foreground italic">
                                                            {chapter.highlight}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChapterWalkthrough;
