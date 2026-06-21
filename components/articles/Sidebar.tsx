import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
    return (
        <aside className="space-y-12">

            {/* Quote Card */}
            <div className="bg-primary/5 p-8 border-l-4 border-primary relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.896 14.789 15.548 15.696 14.787C16.34 14.248 17.526 13.916 18.232 13.845L18.428 13.824V11.895C16.928 11.966 15.568 12.38 14.356 13.064C12.923 13.87 12 15.352 12 17.152L12 21H14.017ZM8 21L8 18C8 16.896 8.772 15.548 9.679 14.787C10.323 14.248 11.509 13.916 12.215 13.845L12.411 13.824V11.895C10.911 11.966 9.551 12.38 8.339 13.064C6.906 13.87 5.983 15.352 5.983 17.152L5.983 21H8Z" />
                    </svg>
                </div>
                <blockquote className="font-serif text-lg text-foreground/80 leading-relaxed">
                    "The mind is the ultimate weapon. Sharpen it daily."
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                    <div className="h-0.5 w-8 bg-primary/50" />
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">Sanjeev Malik</span>
                </div>
            </div>

            {/* Newsletter - Minimalist */}
            <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold">Subscribe to my weekly Newsletter</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Get powerful mindset-building tips delivered straight to your inbox.
                </p>
                <form className="flex flex-col gap-3">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <Button className="w-full bg-black text-white hover:bg-zinc-800">
                        Subscribe <Mail className="ml-2 w-4 h-4" />
                    </Button>
                </form>
            </div>

            {/* Key Qualities */}
            <div className="space-y-4 pt-4 border-t border-border/40">
                <h3 className="font-serif text-lg font-bold">Core Pillars</h3>
                <ul className="space-y-3">
                    {["Resilience", "Strategic Thinking", "Discipline", "Integrity"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Get The Book CTA */}
            <Link href="/book" className="block relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10" />
                {/* Placeholder for book bg if needed, using dark preset */}
                <div className="h-48 bg-zinc-900 flex items-center justify-center relative">
                    {/* <Image ... /> if we had one here */}
                    <div className="relative z-20 text-center p-6 text-white transform group-hover:-translate-y-1 transition-transform">
                        <p className="font-serif text-xl mb-2">The Graphene Mentality</p>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                            Get the Book <ArrowRight className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            </Link>

        </aside>
    );
};
