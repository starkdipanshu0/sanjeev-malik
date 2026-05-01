import { VloziClient } from "@vlozi/blog";

export const vloziServerClient = new VloziClient({
    apiKey: process.env.NEXT_PUBLIC_VLOZI_API_KEY!,
    baseUrl: process.env.NEXT_PUBLIC_VLOZI_GATEWAY_URL!,
});
