"use client";

import { useState } from "react";
import { Copy, Plus, Save, Trash2, Eye, Edit2, List, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentBlock } from "@/lib/articles";
import { ParagraphEditor, HeadingEditor, QuoteEditor, ImageEditor, ListEditor, DividerEditor } from "./BlockEditors";
import Image from "next/image"; // For Preview
import { ArticleCard } from "@/components/articles/ArticleCard"; // Maybe not needed for exact preview, but let's stick to inline preview logic

export const AdminEditor = () => {
    // Article Metadata State
    const [title, setTitle] = useState("New Article Title");
    const [slug, setSlug] = useState("new-article-slug");
    const [excerpt, setExcerpt] = useState("");
    const [author, setAuthor] = useState("Lt. Col. Sanjeev Malik");
    const [category, setCategory] = useState("Leadership");
    const [date, setDate] = useState(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
    const [coverImage, setCoverImage] = useState("");

    // UI State
    const [isPreviewMode, setIsPreviewMode] = useState(false);

    // Blocks State
    const [blocks, setBlocks] = useState<ContentBlock[]>([]);

    // Block Handlers
    const addBlock = (type: ContentBlock['type']) => {
        let newBlock: ContentBlock;
        if (type === 'paragraph') newBlock = { type: 'paragraph', content: '' };
        else if (type === 'heading') newBlock = { type: 'heading', level: 2, content: '' };
        else if (type === 'quote') newBlock = { type: 'quote', content: '' };
        else if (type === 'image') newBlock = { type: 'image', src: '', alt: '', caption: '' };
        else if (type === 'list') newBlock = { type: 'list', items: [''], style: 'unordered' };
        else if (type === 'divider') newBlock = { type: 'divider' };
        else return;

        setBlocks([...blocks, newBlock]);
    };

    const updateBlock = (index: number, updatedBlock: ContentBlock) => {
        const newBlocks = [...blocks];
        newBlocks[index] = updatedBlock;
        setBlocks(newBlocks);
    };

    const removeBlock = (index: number) => {
        setBlocks(blocks.filter((_, i) => i !== index));
    };

    const moveBlock = (index: number, direction: -1 | 1) => {
        if ((index === 0 && direction === -1) || (index === blocks.length - 1 && direction === 1)) return;
        const newBlocks = [...blocks];
        const temp = newBlocks[index];
        newBlocks[index] = newBlocks[index + direction];
        newBlocks[index + direction] = temp;
        setBlocks(newBlocks);
    };

    // Export Logic
    const handleExport = () => {
        const articleData = {
            id: crypto.randomUUID(),
            slug,
            title,
            excerpt,
            content: blocks,
            author,
            date,
            readTime: `${Math.ceil(blocks.length / 3)} min read`,
            category,
            image: coverImage
        };

        navigator.clipboard.writeText(JSON.stringify(articleData, null, 4));
        alert("Article JSON copied to clipboard!");
    };

    return (
        <div className="max-w-7xl mx-auto">

            {/* Toolbar Header */}
            <div className="flex justify-between items-center mb-8 sticky top-24 z-40 bg-background/80 backdrop-blur pb-4 border-b border-border/40">
                <div className="flex gap-2">
                    <Button
                        variant={!isPreviewMode ? "default" : "outline"}
                        onClick={() => setIsPreviewMode(false)}
                        className="gap-2"
                    >
                        <Edit2 className="w-4 h-4" /> Editor
                    </Button>
                    <Button
                        variant={isPreviewMode ? "default" : "outline"}
                        onClick={() => setIsPreviewMode(true)}
                        className="gap-2"
                    >
                        <Eye className="w-4 h-4" /> Live Preview
                    </Button>
                </div>
                <div className="flex gap-2">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" onClick={handleExport}>
                        <Copy className="w-4 h-4" /> Copy JSON
                    </Button>
                </div>
            </div>

            {isPreviewMode ? (
                // --- PREVIEW MODE ---
                <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-2xl overflow-hidden min-h-screen">
                    {/* Cover Image Preview */}
                    {coverImage && (
                        <div className="relative w-full aspect-[21/9] bg-secondary/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                        </div>
                    )}
                    <div className="p-12 md:p-20">
                        <div className="mb-12 text-center">
                            <span className="text-primary text-sm font-bold uppercase tracking-widest">{category}</span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-balance">{title}</h1>
                            <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto">{excerpt}</p>
                        </div>

                        {/* Measure and paragraph classes mirror the published article
                            (app/blogs/[slug]/page.tsx) so the preview shows the real
                            line length. The `prose` classes here were dead - the
                            typography plugin is not installed. */}
                        <div className="article-body font-reading max-w-2xl mx-auto">
                            {blocks.map((block, index) => {
                                // Basic Render Logic mimicking the real article page
                                switch (block.type) {
                                    case 'paragraph': return <p key={index} dangerouslySetInnerHTML={{ __html: block.content }} className="text-lg md:text-xl leading-[1.85] text-foreground/85 mb-6 md:mb-7" />;
                                    case 'heading':
                                        const H = `h${block.level}` as any;
                                        return <H key={index} className="font-serif font-bold mt-8 mb-4">{block.content}</H>;
                                    case 'quote': return <blockquote key={index} className="border-l-4 border-primary bg-secondary/10 p-6 rounded-r-lg italic my-8">&ldquo;{block.content}&rdquo;</blockquote>;
                                    case 'image': return (
                                        <figure key={index} className="my-10">
                                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-secondary/10">
                                                {block.src && <img src={block.src} alt={block.alt} className="w-full h-full object-cover" />}
                                            </div>
                                            {block.caption && <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">{block.caption}</figcaption>}
                                        </figure>
                                    );
                                    case 'list': return block.style === 'ordered' ?
                                        <ol key={index} className="list-decimal pl-6 space-y-2 marker:text-primary text-lg md:text-xl leading-[1.85] text-foreground/85 my-6">{block.items.map((it, i) => <li key={i}>{it}</li>)}</ol> :
                                        <ul key={index} className="list-disc pl-6 space-y-2 marker:text-primary text-lg md:text-xl leading-[1.85] text-foreground/85 my-6">{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
                                    case 'divider': return <hr key={index} className="my-12 border-border/40" />;
                                    default: return null;
                                }
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                // --- EDITOR MODE ---
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left: Editor Canvas (Span 8) */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Metadata Card */}
                        <div className="bg-card border border-border rounded-xl p-6 space-y-6 shadow-sm">
                            <div>
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full text-3xl font-serif font-bold bg-transparent border-b border-border/50 focus:border-primary focus:outline-none pb-2"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Slug</label>
                                    <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full bg-secondary/10 border border-border rounded px-3 py-2 text-sm font-mono" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Author</label>
                                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full bg-secondary/10 border border-border rounded px-3 py-2 text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Excerpt</label>
                                <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full bg-secondary/10 border border-border rounded px-3 py-2 text-sm min-h-[80px]" />
                            </div>
                        </div>

                        {/* Blocks List */}
                        <div className="space-y-4">
                            {blocks.map((block, index) => {
                                if (block.type === 'paragraph') {
                                    return <ParagraphEditor
                                        key={index}
                                        value={block.content}
                                        onChange={(val) => updateBlock(index, { ...block, content: val })}
                                        onRemove={() => removeBlock(index)}
                                        moveUp={() => moveBlock(index, -1)}
                                        moveDown={() => moveBlock(index, 1)}
                                        isFirst={index === 0}
                                        isLast={index === blocks.length - 1}
                                    />;
                                }
                                if (block.type === 'heading') {
                                    return <HeadingEditor
                                        key={index}
                                        value={block.content}
                                        level={block.level}
                                        onChange={(val, level) => updateBlock(index, { ...block, content: val, level })}
                                        onRemove={() => removeBlock(index)}
                                        moveUp={() => moveBlock(index, -1)}
                                        moveDown={() => moveBlock(index, 1)}
                                        isFirst={index === 0}
                                        isLast={index === blocks.length - 1}
                                    />;
                                }
                                if (block.type === 'quote') {
                                    return <QuoteEditor
                                        key={index}
                                        value={block.content}
                                        onChange={(val) => updateBlock(index, { ...block, content: val })}
                                        onRemove={() => removeBlock(index)}
                                        moveUp={() => moveBlock(index, -1)}
                                        moveDown={() => moveBlock(index, 1)}
                                        isFirst={index === 0}
                                        isLast={index === blocks.length - 1}
                                    />;
                                }
                                if (block.type === 'image') {
                                    return <ImageEditor
                                        key={index}
                                        src={block.src}
                                        alt={block.alt}
                                        caption={block.caption}
                                        onChange={(src, alt, caption) => updateBlock(index, { ...block, src, alt, caption })}
                                        onRemove={() => removeBlock(index)}
                                        moveUp={() => moveBlock(index, -1)}
                                        moveDown={() => moveBlock(index, 1)}
                                        isFirst={index === 0}
                                        isLast={index === blocks.length - 1}
                                    />;
                                }
                                if (block.type === 'list') {
                                    return <ListEditor
                                        key={index}
                                        items={block.items}
                                        style={block.style}
                                        onChange={(items, style) => updateBlock(index, { ...block, items, style })}
                                        onRemove={() => removeBlock(index)}
                                        moveUp={() => moveBlock(index, -1)}
                                        moveDown={() => moveBlock(index, 1)}
                                        isFirst={index === 0}
                                        isLast={index === blocks.length - 1}
                                    />
                                }
                                if (block.type === 'divider') {
                                    return <DividerEditor
                                        key={index}
                                        onRemove={() => removeBlock(index)}
                                        moveUp={() => moveBlock(index, -1)}
                                        moveDown={() => moveBlock(index, 1)}
                                        isFirst={index === 0}
                                        isLast={index === blocks.length - 1}
                                    />
                                }
                                return null;
                            })}
                        </div>

                        {/* Add Block Placeholder if empty */}
                        {blocks.length === 0 && (
                            <div className="border-2 border-dashed border-border/50 rounded-xl p-12 text-center text-muted-foreground">
                                <p>No content blocks yet. Use the sidebar to add content.</p>
                            </div>
                        )}
                    </div>

                    {/* Right: Sidebar Toolbar (Span 4) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 space-y-6">

                            {/* Add Blocks Card */}
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-balance">Add Content</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <Button variant="outline" className="justify-start gap-2" onClick={() => addBlock('paragraph')}>
                                        <span className="font-serif">T</span> Text
                                    </Button>
                                    <Button variant="outline" className="justify-start gap-2" onClick={() => addBlock('heading')}>
                                        <span className="font-serif font-bold">H</span> Heading
                                    </Button>
                                    <Button variant="outline" className="justify-start gap-2" onClick={() => addBlock('image')}>
                                        <span className="font-serif">IMG</span> Image
                                    </Button>
                                    <Button variant="outline" className="justify-start gap-2" onClick={() => addBlock('quote')}>
                                        <span className="font-serif">"</span> Quote
                                    </Button>
                                    <Button variant="outline" className="justify-start gap-2" onClick={() => addBlock('list')}>
                                        <List className="w-4 h-4" /> List
                                    </Button>
                                    <Button variant="outline" className="justify-start gap-2" onClick={() => addBlock('divider')}>
                                        <Minus className="w-4 h-4" /> Divider
                                    </Button>
                                </div>
                            </div>

                            {/* Meta & Publish Card */}
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-balance">Publishing</h3>

                                <div>
                                    <label className="text-xs text-muted-foreground mb-1 block">Cover Image URL</label>
                                    <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} className="w-full bg-secondary/10 border border-border rounded px-3 py-2 text-xs" />
                                </div>

                                <div>
                                    <label className="text-xs text-muted-foreground mb-1 block">Category</label>
                                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-secondary/10 border border-border rounded px-3 py-2 text-xs">
                                        <option>Leadership</option>
                                        <option>Strategy</option>
                                        <option>Discipline</option>
                                        <option>Philosophy</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};
