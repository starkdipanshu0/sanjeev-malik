import "@vlozi/blog/styles.css";
import type { ReactNode } from "react";
import { BlogProvider } from "@/components/blog/BlogProvider";

export default function BlogLayout({ children }: { children: ReactNode }) {
    return <BlogProvider>{children}</BlogProvider>;
}
