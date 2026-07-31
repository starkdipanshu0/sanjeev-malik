"use client";

import { motion } from "framer-motion";

/* Single centred reading column.
 *
 * This was a 7/5 grid with the pull quote sticky in the right column, but
 * `items-start` meant that column was only as tall as the card, so the quote
 * had almost no sticky travel and the right half of the section sat empty for
 * most of the scroll. The quote now breaks the text flow inline instead, which
 * is the standard editorial treatment and removes the void entirely.
 *
 * Measure is max-w-2xl at 20px, matching the article pages (~67 characters).
 */
const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
});

const AboutDescription = () => {
    return (
        <section className="relative py-20 md:py-32 bg-secondary/5 overflow-hidden">
            {/* Watermark Background */}
            <div className="absolute top-20 right-0 pointer-events-none opacity-[0.03] select-none">
                <span className="text-[20vw] font-serif font-black leading-none text-foreground">
                    JOURNEY
                </span>
            </div>

            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 relative z-10">

                <motion.div
                    id="continue-reading"
                    {...reveal(0)}
                    className="max-w-5xl mx-auto mb-14 md:mb-16 text-center scroll-mt-28 md:scroll-mt-32"
                >
                    {/* max-w-5xl and lg:whitespace-nowrap keep this on one line from
                        lg up; it needs ~830px at 48px and still wraps below that. */}
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 lg:whitespace-nowrap">
                        From the <span className="text-primary">Frontlines</span> to the <span className="text-primary">Boardroom</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">

                    {/* Lead paragraph. A drop cap was used here, but the opening
                        paragraphs are single lines, so the float bled into the one
                        below it. A weighted lead is robust at any length. */}
                    <motion.p
                        {...reveal(0.15)}
                        className="text-xl md:text-2xl text-foreground font-medium leading-snug"
                    >
                        I am an Indian Army Doctor and have served with <span className="text-emphasis">elite special forces</span>.
                    </motion.p>

                    <motion.p {...reveal(0.2)}>
                        I&rsquo;m the author of <strong className="text-foreground font-semibold">The Graphene Mentality</strong>.
                    </motion.p>

                    <motion.p {...reveal(0.25)}>
                        I&rsquo;m also an endurance athlete and won <strong className="text-foreground font-semibold">5 Gold medals</strong> in athletics for India at <strong className="text-foreground font-semibold">42nd World Medical and Health Games</strong>, widely regarded as Olympics for Healthcare Professionals worldwide.
                    </motion.p>

                    {/* Continuation point - the homepage bio ends just above this. */}
                    <motion.p {...reveal(0.3)}>
                        Across every battlefield and challenge I have faced, I discovered one powerful truth:
                        <span className="block mt-2 text-foreground font-medium">
                            The human mind is far stronger and more adaptable than we think.
                        </span>
                    </motion.p>

                    <motion.p {...reveal(0.35)}>
                        My journey taught me that real success doesn&rsquo;t come from talent, genetics, or intelligence alone &mdash; it comes from the <strong className="text-foreground font-semibold">right mindset</strong>.
                    </motion.p>

                    <motion.div
                        {...reveal(0.45)}
                        className="space-y-3 border-l-2 border-primary/40 pl-6 text-left"
                    >
                        <p>A mindset that makes you fearless enough to pursue bold decisions.</p>
                        <p>A mindset that keeps you focused and disciplined to do the hard but necessary work every day.</p>
                        <p>A mindset that helps you grow consistently.</p>
                        <p>And a mindset that makes you resilient enough to rise stronger after every failure.</p>
                    </motion.div>

                    <motion.p {...reveal(0.5)}>
                        This realisation inspired me to write my book, <span className="text-foreground font-serif font-semibold">The Graphene Mentality: In the Age of Distraction</span>.
                    </motion.p>

                    <motion.p {...reveal(0.55)}>
                        Just like graphene &mdash; the world&rsquo;s strongest yet most flexible material &mdash; I believe our minds too can become unbreakable, yet adaptable enough to thrive and succeed in any situation.
                    </motion.p>

                    <motion.p {...reveal(0.6)}>
                        Through my work, I share practical strategies to build <strong className="text-foreground font-semibold">focus, discipline, and mental resilience</strong>&mdash;the qualities needed to perform and succeed in every field-from academics and entrepreneurship to sports and artistic world.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default AboutDescription;
