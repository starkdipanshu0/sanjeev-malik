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
        slug: "the-psychology-of-graphene",
        title: "The Psychology of Graphene: Why Durability Matters in Leadership",
        excerpt: "Graphene is the strongest material known to science. Here is how its molecular structure can teach us about building resilient, unbreakable teams.",
        content: [
            { type: 'paragraph', content: "In the world of materials science, <strong>graphene</strong> stands alone. A single layer of carbon atoms arranged in a two-dimensional honeycomb lattice, it is incredibly strong—about 200 times stronger than steel—yet lighter than paper." },
            { type: 'heading', level: 3, content: "The Leadership Analogy" },
            { type: 'paragraph', content: "When we talk about leadership, we often mistake <em>rigidity</em> for strength. We believe that to be strong, a leader must be unyielding, hard, and immovable. But graphene teaches us a different lesson." },
            { type: 'image', src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", alt: "Abstract connection structure", caption: "Structure is the source of strength." },
            { type: 'paragraph', content: "Its strength comes from its structure, from the way its connections are formed. It is flexible. It can bend without breaking. This is the essence of <strong>The Graphene Mentality</strong>." },
            { type: 'heading', level: 3, content: "Building Unbreakable Connections" },
            { type: 'paragraph', content: "Just as carbon atoms share electrons to form strong covalent bonds, leaders must share trust, vision, and purpose to build unbreakable teams. The strongest battles are not fought on the field, but in the mind." },
            { type: 'quote', content: "True resilience is not about enduring pain, but transforming it into power." },
            { type: 'paragraph', content: "To cultivate this mentality, one must embrace three core principles: adaptability, transparency, and connectivity." },
            { type: 'divider' },
            { type: 'heading', level: 3, content: "Core Attributes" },
            {
                type: 'list', style: 'unordered', items: [
                    "Adaptability: Bending without breaking.",
                    "Conductivity: Sharing information freely like electrons.",
                    "Strength: Maintaining integrity under pressure."
                ]
            }
        ],
        author: "Lt. Col. Sanjeev Malik",
        date: "October 12, 2025",
        readTime: "5 min read",
        category: "Leadership",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "2",
        slug: "strategic-silence",
        title: "Strategic Silence: The Art of Command Without Chaos",
        excerpt: "In an era of noise, the most powerful leaders know when to stay silent. Discover the tactical advantage of listening before leading.",
        content: [
            { type: 'paragraph', content: "We live in a noisy world. Constant notifications, endless meetings, and the pressure to always have an immediate answer. But in high-stakes environments—like special operations or crisis management—noise is a liability." },
            { type: 'heading', level: 3, content: "The Power of the Pause" },
            { type: 'paragraph', content: "Strategic silence is not passivity. It is an active state of observation. It is the tactical pause before the breach. By withholding immediate reaction, a leader creates space for clarity." },
            { type: 'image', src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop", alt: "Quiet focused look", caption: "Observation precedes action." },
            { type: 'paragraph', content: "When you speak less, your words carry more weight. This is a fundamental truth of command presence." },
            { type: 'quote', content: "Silence is not empty; it is full of answers." },
            { type: 'heading', level: 3, content: "Implementing Silence" },
            { type: 'paragraph', content: "Start by auditing your meetings. Are you filling the dead air? Try waiting. Let the silence do the heavy lifting. You will be surprised at the truths that surface when you stop trying to control the narrative." }
        ],
        author: "Lt. Col. Sanjeev Malik",
        date: "November 05, 2025",
        readTime: "4 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
    },
    {
        id: "3",
        slug: "beyond-the-uniform",
        title: "Beyond the Uniform: Applying Military Discipline to Civil Corporate Life",
        excerpt: "Discipline is not about punishment; it is about freedom. How military-grade routines can unlock creative freedom in the corporate boardroom.",
        content: [
            { type: 'paragraph', content: "There is a misconception that military discipline kills creativity. In reality, discipline creates the structure within which creativity can flourish safely and effectively." },
            { type: 'image', src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", alt: "Structured workplace", caption: "Order creates the space for creativity." },
            { type: 'heading', level: 3, content: "Routine as a Foundation" },
            { type: 'paragraph', content: "In the Army, Standard Operating Procedures (SOPs) save lives. In business, they save time. By automating the mundane through discipline, you free up your mental bandwidth for the exceptional." },
            { type: 'paragraph', content: "Don't look at discipline as a cage. Look at it as a skeleton. It holds you up so you can move." }
        ],
        author: "Lt. Col. Sanjeev Malik",
        date: "December 15, 2025",
        readTime: "6 min read",
        category: "Discipline",
        image: "https://images.unsplash.com/photo-1507208773393-40d9fc9f600e?q=80&w=2070&auto=format&fit=crop"
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
