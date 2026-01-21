"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/achievements/IMG_7069.JPEG", alt: "Historic Achievement 1", position: "object-center" },
    { src: "/achievements/IMG_7070.JPEG", alt: "Historic Achievement 2", position: "object-center" },
    { src: "/achievements/WhatsApp Image 2026-01-20 at 11.03.45 AM.jpeg", alt: "Special Forces Moment 1", position: "object-top" },
    { src: "/achievements/WhatsApp Image 2026-01-20 at 11.03.47 AM.jpeg", alt: "Special Forces Moment 2", position: "object-center" },
];

const AchievementGallery = () => {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                        Moments of <span className="text-primary italic">Glory</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Capturing the journey from the battlefield to the podium.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-video rounded-2xl overflow-hidden group"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${img.position}`}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementGallery;
