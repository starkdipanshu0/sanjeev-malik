import { AdminEditor } from "@/components/admin/AdminEditor";

export const metadata = {
    title: "Admin Editor | Sanjeev Malik",
    description: "Secure content editor.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <div className="flex items-center gap-4 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Restricted Area</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                    Content <span className="italic text-primary">Forge</span>
                </h1>
                <p className="text-muted-foreground mt-2">Create and structure your insights before deployment.</p>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <AdminEditor />
            </div>
        </main>
    );
}
