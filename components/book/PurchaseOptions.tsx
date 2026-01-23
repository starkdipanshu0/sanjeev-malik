"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PurchaseOptions = () => {
    return (
        <section id="purchase-options" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-top-left scale-110 z-0"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
                >
                    Start Your <span className="text-primary italic">Transformation</span>
                </motion.h2>
                <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                    Choose the format that fits your lifestyle. Available worldwide.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* eBook */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="bg-background border border-border rounded-2xl p-8 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-lg"
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-bold mb-2">Kindle / eBook</h3>
                            <p className="text-muted-foreground text-sm mb-6">Read instantly on any device.</p>
                            <div className="text-4xl font-bold text-foreground mb-2">₹273.60</div>
                        </div>
                        <a href="https://www.amazon.in/Graphene-Mentality-Distraction-Strength-Deliver-ebook/dp/B0FJ1GFZZX/ref=tmm_kin_swatch_0?_encoding=UTF8&sr=8-3" target="_blank" rel="noopener noreferrer" className="w-full mt-8">
                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                                Buy on Amazon
                            </Button>
                        </a>
                    </motion.div>

                    {/* Paperback - Featured */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-background border-2 border-primary rounded-2xl p-8 flex flex-col justify-between shadow-xl relative scale-105 z-10"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                            Most Popular
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif font-bold mb-2">Paperback</h3>
                            <p className="text-muted-foreground text-sm mb-6">The classic reading experience.</p>
                            <div className="text-4xl font-bold text-foreground mb-2">₹288.00</div>

                        </div>
                        <a href="https://www.amazon.in/Graphene-Mentality-Distraction-Strength-Deliver/dp/8198845410/ref=sr_1_3?sr=8-3" target="_blank" rel="noopener noreferrer" className="w-full mt-8">
                            <Button className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-6 shadow-lg hover:shadow-primary/25">
                                Order Paperback
                            </Button>
                        </a>
                    </motion.div>
                </div>

                <div className="mt-16 text-muted-foreground text-sm">
                    <p>Also available at bookstores nationwide.</p>
                </div>
            </div>
        </section>
    );
};

export default PurchaseOptions;
