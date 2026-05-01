"use client";

import { useMemo, type ReactNode } from "react";
import { VloziClient } from "@vlozi/blog";
import { VloziProvider } from "@vlozi/blog/react";

export function BlogProvider({ children }: { children: ReactNode }) {
    const client = useMemo(
        () =>
            new VloziClient({
                apiKey: process.env.NEXT_PUBLIC_VLOZI_API_KEY!,
                baseUrl: process.env.NEXT_PUBLIC_VLOZI_GATEWAY_URL!,
            }),
        []
    );

    return <VloziProvider client={client}>{children}</VloziProvider>;
}
