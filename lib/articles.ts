export type ContentBlock =
    | { type: 'paragraph'; content: string }
    | { type: 'heading'; level: 2 | 3; content: string }
    | { type: 'quote'; content: string }
    | { type: 'image'; src: string; alt: string; caption?: string }
    | { type: 'list'; items: string[]; style: 'unordered' | 'ordered' }
    | { type: 'divider' };

export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: ContentBlock[];
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

export const ARTICLES: Article[] = [
    {
        id: "1",
        slug: "how-i-discovered-the-graphene-mentality",
        title: "How I discovered The Graphene Mentality?",
        excerpt: "It was a bright Sunday morning in Bengaluru. I woke up to the roaring sound of bikers racing past my residence, which abutted the National Highway on the outskirts of this sprawling metropolis.",
        content: [
            { type: 'paragraph', content: "It was a bright Sunday morning in Bengaluru. I woke up to the roaring sound of bikers racing past my residence, which abutted the National Highway on the outskirts of this sprawling metropolis. Sunday mornings are the only time these bikers have plenty of space and time to ride their majestic bikes to fetch barrels of euphoria." },
            { type: 'paragraph', content: "As usual, the moment I woke up, I reached for my journal and the graphite pencil kept on my bedside table. This is a morning ritual I’ve been following ever since I instilled the habit of jotting down wonderful thoughts and ideas that spring to my mind as soon as I wake up." },
            { type: 'paragraph', content: "But this time, instead of writing in my notebook, I kept staring at my pencil, examining it for hours. Days passed and months elapsed as I tried to decode the worth of this innocuous-looking object that I’ve been using to scribble bizarre words and figures since I was a toddler." },
            { type: 'paragraph', content: "Meanwhile, the COVID- 19 pandemic started wreaking havoc on an unprecedented scale. The entire country was put under lockdown. It seemed that all Homo sapiens had vanished and a new species would replace them as they had replaced the Neanderthals about 60000 years ago. The situation perfectly resembled the harrowing scene from Avengers : Endgame- as if Thanos had incarnated as Covid- 19 to unleash hell on Earth." },
            { type: 'paragraph', content: "To combat stress, people started exploring various skills and exhibited their unique talents on social media. This period saw the emergence of a new genre of social media artists- painters, singers, dancers, scholars, chefs and fitness experts. All tried desperately to flush out the cortisol accumulated because of the prolonged confinement at home." },
            { type: 'paragraph', content: "But I remained in my usual contemplative mode, diligently seeking answers to the questions that kept troubling me. These questions that constantly assailed me (and I presume you too) were:" },
            {
                type: 'list',
                style: 'unordered',
                items: [
                    "What is the purpose of our life?",
                    "What are our aspirations?",
                    "Why do we fervently pursue transient pleasures such as wealth, status, power, and fame?",
                    "Why are most of us not leaving a meaningful and productive life? Why do we spend more time on social media and less on work?",
                    "Are we classic epitomes of inefficiency, and self-saboteurs of the highest degree?",
                    "Why do we suffer from indecisiveness when we pick up our smartphones to order food from Zomato?",
                    "Why do we always find ourselves with the dilemma of choosing between Covishield and Covaxin even though we know that both vaccines have equal efficacy?",
                    "Why are we so capricious by nature and seasonally change our decisions?",
                    "With the advent of spring, we pledge to do something remarkable, and by the time autumn arrives, we lose commitment, energy, and the drive to persist with what we’ve begun.",
                    "Why do we lack firmness and tenacity to follow through?",
                    "Why do we get terrified after failures? And abandon our dreams so easily?",
                    "Why can’t we show resilience to fight back? Or display flexibility to review and revamp our strategy?"
                ]
            },
            { type: 'paragraph', content: "Strangely, the answers to all these questions were hidden in the graphite pencil that had captured my investigative mind since that Sunday morning. I knew already that under the veneer of its simple appearance, the pencil possessed a priceless element, graphene. But I never imagined that this element could be the source of such a wonderful concept- The Graphene Mentality. It was this revolutionary mindset I had been searching for through my questions." },
            { type: 'paragraph', content: "Just as the element graphene was discovered unexpectedly, The Graphene Mentality was also a revelation to me. When Professors Andre Geim and Kostya Novoselov first examined flakes from bulk graphite under a microscope in 2004, they were fascinated by what they found. Similarly, I was exhilarated when I unearthed this unique mindset-a mindset with the potential to redefine the very model of success." },
            { type: 'paragraph', content: "It was a true Eureka! moment for me, just as it had been for Archimedes." },
            { type: 'paragraph', content: "This is how I discovered The Graphene Mentality." }
        ],
        author: "Lt. Col. Sanjeev Malik",
        date: "November 03, 2025",
        readTime: "6 min read",
        category: "Mindset",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
    },
    {
        id: "2",
        slug: "what-is-the-graphene-mentality",
        title: "What Is the Graphene Mentality?",
        excerpt: "A lot of people often ask me this fundamental question: “Hey dude, what is this Graphene Mentality?” The answer starts with science.",
        content: [
            { type: 'paragraph', content: "A lot of people often ask me this fundamental question:" },
            { type: 'quote', content: "“Hey dude, what is this Graphene Mentality?”" },
            { type: 'paragraph', content: "Every time, before I can explain what it is, I need to tell them where it comes from. And that story starts with science." },
            { type: 'paragraph', content: "The fact is that the Graphene Mentality is inspired by the wonder material graphene- a single layer of carbon atoms with special properties." },
            { type: 'heading', level: 3, content: "So, what makes graphene so special?" },
            { type: 'paragraph', content: "Second, it is incredibly resilient- able to endure tremendous stress and strain without breaking." },
            { type: 'paragraph', content: "Third, its power lies in its peculiar structure. Each atom is intimately bonded to three others, forming a perfectly organized lattice. This structure reflects team spirit at an atomic level- every atom supports the other, creating extraordinary strength and resilience." },
            { type: 'paragraph', content: "Take a look at the structure of graphene and you’ll instantly see what I mean." },
            { type: 'image', src: "/blogs/2.1.jpg", alt: "Structure of Graphene", caption: "The hexagonal lattice structure of graphene." },
            { type: 'paragraph', content: "Because of these extraordinary properties, graphene has found applications in a wide array of industries:" },
            {
                type: 'list',
                style: 'unordered',
                items: [
                    "Electronics – ultra-fast charging batteries, bendable smartphones, flexible touchscreens",
                    "Aerospace – lighter and stronger aircraft",
                    "Safety & Sports – durable helmets, sturdy sports gear like tennis rackets, golf clubs, shoes, and clothing"
                ]
            },
            { type: 'paragraph', content: "The list goes on. Graphene is considered one of the most versatile substances known to science." },
            { type: 'paragraph', content: "The four fundamental properties that make graphene exceptional-firmness, flexibility, resilience, and team spirit-form the core values of The Graphene Mentality." },
            { type: 'paragraph', content: "Now what if these values gets strongly embedded in the 86 billion neurons of your brain? Wouldn’t that make your mindset a powerhouse?" },
            { type: 'image', src: "/blogs/2.2.jpg", alt: "Graphene Mentality Concept", caption: "Embedding resilience in your mindset." },
            { type: 'paragraph', content: "That’s exactly what The Graphene Mentality is all about. It takes the extraordinary characteristics of graphene from the tangible world of materials and industries, and applies them to the intangible realm of human psychology and personal growth." }
        ],
        author: "Lt. Col. Sanjeev Malik",
        date: "November 10, 2025",
        readTime: "5 min read",
        category: "Mindset",
        image: "/blogs/2.1.jpg"
    },
    {
        id: "3",
        slug: "why-do-you-need-the-graphene-mentality",
        title: "Why do you need The Graphene Mentality?",
        excerpt: "Before I tell you why you truly need the Graphene Mentality in your life, let me ask you this: what do you think is the common denominator of success?",
        content: [
            { type: 'paragraph', content: "Before I tell you why you truly need the Graphene Mentality in your life, let me ask you this: what do you think is the common denominator of success?" },
            { type: 'paragraph', content: "If you had to decode success into a single word, what would it be?" },
            { type: 'paragraph', content: "Chances are—you’d struggle. And rightly so." },
            { type: 'quote', content: "The truth is: success is never built on a sole virtue." },
            { type: 'paragraph', content: "For centuries, many noble virtues have been competing to become worthy ingredients of success. Hard work, smart work, sincerity, honesty, courage, discipline, patience and persistence. And there are many more in the list." },
            { type: 'paragraph', content: "But here’s the irony: in this endless debate, we often overlook the values of <strong>flexibility, firmness, resilience, and team spirit</strong>—the very essence of <strong>The Graphene Mentality</strong>. These are often neglected by CEOs, personal coaches, academic gurus, motivators and mentors in their mission statements." },
            { type: 'paragraph', content: "The fact is, these values are as essential as other cherished ideals to achieve the critical goals that you’ve visualized in your dreams. Regardless of the nature of your goals—whether they relate to your career, family, or health—you’ll definitely need these values to achieve them." },
            { type: 'paragraph', content: "It is immaterial whether you’re into business, academics, research, art, theatre or sports. With a mindset that is firm, flexible, resilient and cooperative, you’ll always succeed in capturing your targets." },
            { type: 'heading', level: 3, content: "Step-Wise Approach" },
            { type: 'paragraph', content: "Growing up, I was often told that hard work is the ladder to success or smart work is the path to success. But no one ever taught me how to climb that ladder or walk that path." },
            { type: 'paragraph', content: "For 35 years, I couldn’t find a single template to guide me through the moments when motivation fades, zeal disappears, distractions creep in, or failures hit hard." },
            { type: 'paragraph', content: "It is through my experiences—my setbacks, struggles, and triumphs—that I discovered what it truly takes to succeed. The Graphene Mentality is the product of that journey." },
            { type: 'paragraph', content: "It provides an ideal template to guide you at every step of your journey to success. This schematic diagram depicts how we can apply various attributes of The Graphene Mentality at different stages to achieve all of our momentous goals." },
            { type: 'paragraph', content: "Every step in this process is a meticulous exercise in itself:" },
            {
                type: 'list',
                style: 'ordered',
                items: [
                    "First, you must plan what goals to set for yourself by doing <strong>P2P (Purpose to Passion)</strong>.",
                    "Then, you embark on the journey to your goals with utmost <strong>firmness</strong> and unwavering focus.",
                    "Next comes the stage of enduring stress and setbacks (an inevitable part of the goal-chasing process) with attributes of <strong>flexibility and resilience</strong>.",
                    "Finally, remember that winning is not an individual game; it is a <strong>team game</strong>. It is not a solitary battle; it is a collective war! You need to cooperate with your colleagues selflessly, for it is the most efficient method of winning and a speedy way to reach your destination."
                ]
            }
        ],
        author: "Lt. Col. Sanjeev Malik",
        date: "November 17, 2025",
        readTime: "6 min read",
        category: "Strategy",
        image: "/blogs/3.1.jpg"
    }
];

export function getAllArticles() {
    return ARTICLES;
}

export function getArticleBySlug(slug: string) {
    return ARTICLES.find(article => article.slug === slug);
}

export function getOtherArticles(currentId: string) {
    return ARTICLES.filter(article => article.id !== currentId);
}
