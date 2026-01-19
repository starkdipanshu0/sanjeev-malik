"use client";

import { X, Image as ImageIcon, Quote as QuoteIcon, Type, Heading, List, Minus, Plus, Trash2, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Link as LinkIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Types matching lib/articles.ts
export type BlockType = 'paragraph' | 'heading' | 'quote' | 'image' | 'list' | 'divider';

interface BaseBlockProps {
    onRemove: () => void;
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
}

// --- Editors ---

export const ParagraphEditor = ({ value, onChange, ...props }: BaseBlockProps & { value: string, onChange: (val: string) => void }) => {

    const editorRef = React.useRef<HTMLDivElement>(null);
    const [activeFormats, setActiveFormats] = React.useState<Record<string, boolean>>({});

    // Sync initial value / external updates carefully
    React.useEffect(() => {
        if (editorRef.current && editorRef.current.innerHTML !== value) {
            // Only update if significantly different (e.g. init or completely new block)
            // This is a naive check; for a perfect editor we need deeper comparison, 
            // but for this single-user admin, it likely suffices if we don't excessively re-render parent.
            if (document.activeElement !== editorRef.current) {
                editorRef.current.innerHTML = value;
            }
        }
    }, [value]);

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        onChange(e.currentTarget.innerHTML);
    };

    const checkFormats = () => {
        setActiveFormats({
            bold: document.queryCommandState('bold'),
            italic: document.queryCommandState('italic'),
            underline: document.queryCommandState('underline'),
            unorderedList: document.queryCommandState('insertUnorderedList'),
            justifyLeft: document.queryCommandState('justifyLeft'),
            justifyCenter: document.queryCommandState('justifyCenter'),
            justifyRight: document.queryCommandState('justifyRight'),
        });
    };

    const applyFormat = (command: string, value?: string) => {
        document.execCommand(command, false, value);
        // Sync active state or content changes immediately
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
            editorRef.current.focus();
        }
        checkFormats();
    };

    const addLink = () => {
        const url = prompt("Enter URL:", "https://");
        if (url) applyFormat('createLink', url);
    };

    return (
        <div className="relative group bg-card border border-border/50 rounded-lg p-4 transition-all hover:border-primary/50">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity z-10">
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isFirst} onClick={props.moveUp}>↑</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isLast} onClick={props.moveDown}>↓</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive" onClick={props.onRemove}><X className="w-4 h-4" /></Button>
            </div>

            <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <Type className="w-3 h-3" /> Paragraph
                </div>
                {/* WYSIWYG Toolbar */}
                <div className="flex items-center bg-secondary/50 rounded-md p-1 gap-0.5 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Button
                        variant={activeFormats.bold ? "secondary" : "ghost"}
                        size="icon" className={`h-6 w-6 ${activeFormats.bold ? 'text-primary bg-background shadow-sm' : ''}`}
                        onClick={() => applyFormat('bold')} title="Bold"><Bold className="w-3 h-3" />
                    </Button>
                    <Button
                        variant={activeFormats.italic ? "secondary" : "ghost"}
                        size="icon" className={`h-6 w-6 ${activeFormats.italic ? 'text-primary bg-background shadow-sm' : ''}`}
                        onClick={() => applyFormat('italic')} title="Italic"><Italic className="w-3 h-3" />
                    </Button>
                    <Button
                        variant={activeFormats.underline ? "secondary" : "ghost"}
                        size="icon" className={`h-6 w-6 ${activeFormats.underline ? 'text-primary bg-background shadow-sm' : ''}`}
                        onClick={() => applyFormat('underline')} title="Underline"><Underline className="w-3 h-3" />
                    </Button>

                    <div className="w-px h-3 bg-border mx-1" />

                    <Button
                        variant={activeFormats.unorderedList ? "secondary" : "ghost"}
                        size="icon" className={`h-6 w-6 ${activeFormats.unorderedList ? 'text-primary bg-background shadow-sm' : ''}`}
                        onClick={() => applyFormat('insertUnorderedList')} title="Bullet List"><List className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={addLink} title="Link"><LinkIcon className="w-3 h-3" /></Button>

                    <div className="w-px h-3 bg-border mx-1" />

                    <Button
                        variant={activeFormats.justifyLeft ? "secondary" : "ghost"}
                        size="icon" className={`h-6 w-6 ${activeFormats.justifyLeft ? 'text-primary bg-background shadow-sm' : ''}`}
                        onClick={() => applyFormat('justifyLeft')} title="Align Left"><AlignLeft className="w-3 h-3" />
                    </Button>
                    <Button
                        variant={activeFormats.justifyCenter ? "secondary" : "ghost"}
                        size="icon" className={`h-6 w-6 ${activeFormats.justifyCenter ? 'text-primary bg-background shadow-sm' : ''}`}
                        onClick={() => applyFormat('justifyCenter')} title="Align Center"><AlignCenter className="w-3 h-3" />
                    </Button>
                    <Button
                        variant={activeFormats.justifyRight ? "secondary" : "ghost"}
                        size="icon" className={`h-6 w-6 ${activeFormats.justifyRight ? 'text-primary bg-background shadow-sm' : ''}`}
                        onClick={() => applyFormat('justifyRight')} title="Align Right"><AlignRight className="w-3 h-3" />
                    </Button>
                </div>
            </div>

            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                onKeyUp={checkFormats}
                onMouseUp={checkFormats}
                className="w-full min-h-[100px] bg-transparent resize-none focus:outline-none placeholder:text-muted-foreground/40 text-foreground leading-relaxed p-2 rounded-md focus:bg-secondary/20 transition-colors prose prose-sm dark:prose-invert max-w-none"
                style={{ outline: "none" }} // Additional safeguard
            />
            {value === "" && (
                // Placeholder hack because contentEditable doesn't support native placeholder
                <div className="absolute top-[60px] left-6 text-sm text-muted-foreground/40 pointer-events-none select-none">
                    Write your thoughts here...
                </div>
            )}
        </div>
    );
};

export const HeadingEditor = ({ value, level, onChange, ...props }: BaseBlockProps & { value: string, level: 2 | 3, onChange: (val: string, level: 2 | 3) => void }) => {
    return (
        <div className="relative group bg-card border border-border/50 rounded-lg p-4 transition-all hover:border-primary/50">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isFirst} onClick={props.moveUp}>↑</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isLast} onClick={props.moveDown}>↓</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive" onClick={props.onRemove}><X className="w-4 h-4" /></Button>
            </div>
            <div className="mb-2 flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <Heading className="w-3 h-3" /> Heading
                </div>
                <div className="flex bg-secondary/50 rounded-md p-0.5">
                    <button
                        onClick={() => onChange(value, 2)}
                        className={`px-2 py-0.5 text-xs font-bold rounded ${level === 2 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >H2</button>
                    <button
                        onClick={() => onChange(value, 3)}
                        className={`px-2 py-0.5 text-xs font-bold rounded ${level === 3 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >H3</button>
                </div>
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value, level)}
                placeholder="Heading Title"
                className="w-full bg-transparent text-xl font-bold font-serif focus:outline-none placeholder:text-muted-foreground/40 text-foreground"
            />
        </div>
    );
};

export const QuoteEditor = ({ value, onChange, ...props }: BaseBlockProps & { value: string, onChange: (val: string) => void }) => {
    return (
        <div className="relative group bg-card border border-border/50 rounded-lg p-4 border-l-4 border-l-primary transition-all">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isFirst} onClick={props.moveUp}>↑</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isLast} onClick={props.moveDown}>↓</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive" onClick={props.onRemove}><X className="w-4 h-4" /></Button>
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <QuoteIcon className="w-3 h-3" /> Pull Quote
            </div>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter the quote text..."
                className="w-full min-h-[80px] bg-transparent resize-none focus:outline-none placeholder:text-muted-foreground/40 text-foreground italic text-lg font-serif"
            />
        </div>
    );
};

export const ImageEditor = ({ src, alt, caption, onChange, ...props }: BaseBlockProps & { src: string, alt: string, caption?: string, onChange: (src: string, alt: string, caption: string) => void }) => {
    return (
        <div className="relative group bg-card border border-border/50 rounded-lg p-4 transition-all hover:border-primary/50">
            <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
                <Button variant="ghost" size="icon" className="h-6 w-6 bg-black/20 backdrop-blur-sm" disabled={props.isFirst} onClick={props.moveUp}>↑</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 bg-black/20 backdrop-blur-sm" disabled={props.isLast} onClick={props.moveDown}>↓</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 bg-black/20 backdrop-blur-sm text-destructive hover:text-destructive" onClick={props.onRemove}><X className="w-4 h-4" /></Button>
            </div>

            <div className="mb-4 flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <ImageIcon className="w-3 h-3" /> Image
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <input
                        type="text"
                        value={src}
                        onChange={(e) => onChange(e.target.value, alt, caption || "")}
                        placeholder="Image URL (e.g., Unsplash)"
                        className="w-full bg-secondary/20 border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    />
                    <input
                        type="text"
                        value={alt}
                        onChange={(e) => onChange(src, e.target.value, caption || "")}
                        placeholder="Alt Text (Required)"
                        className="w-full bg-secondary/20 border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    />
                    <input
                        type="text"
                        value={caption}
                        onChange={(e) => onChange(src, alt, e.target.value)}
                        placeholder="Caption (Optional)"
                        className="w-full bg-secondary/20 border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    />
                </div>

                <div className="relative aspect-video bg-black/5 rounded-md overflow-hidden flex items-center justify-center border border-dashed border-border">
                    {src ? (
                        <div className="relative w-full h-full">
                            {/* Validating URL simply by trying to render it */}
                            <img src={src} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <span className="text-xs text-muted-foreground">Preview</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export const ListEditor = ({ items, style, onChange, ...props }: BaseBlockProps & { items: string[], style: 'unordered' | 'ordered', onChange: (items: string[], style: 'unordered' | 'ordered') => void }) => {
    const updateItem = (index: number, val: string) => {
        const newItems = [...items];
        newItems[index] = val;
        onChange(newItems, style);
    };

    const addItem = () => {
        onChange([...items, ""], style);
    };

    const removeItem = (index: number) => {
        if (items.length === 1) return;
        const newItems = items.filter((_, i) => i !== index);
        onChange(newItems, style);
    };

    return (
        <div className="relative group bg-card border border-border/50 rounded-lg p-4 transition-all hover:border-primary/50">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isFirst} onClick={props.moveUp}>↑</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isLast} onClick={props.moveDown}>↓</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive" onClick={props.onRemove}><X className="w-4 h-4" /></Button>
            </div>

            <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <List className="w-3 h-3" /> List
                </div>
                <div className="flex bg-secondary/50 rounded-md p-0.5">
                    <button
                        onClick={() => onChange(items, 'unordered')}
                        className={`px-2 py-0.5 text-xs font-bold rounded ${style === 'unordered' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >Bullet</button>
                    <button
                        onClick={() => onChange(items, 'ordered')}
                        className={`px-2 py-0.5 text-xs font-bold rounded ${style === 'ordered' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >Number</button>
                </div>
            </div>

            <div className="space-y-2">
                {items.map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                        <span className="text-muted-foreground pt-2 text-xs select-none">
                            {style === 'unordered' ? '•' : `${i + 1}.`}
                        </span>
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => updateItem(i, e.target.value)}
                            placeholder={`Item ${i + 1}`}
                            className="flex-1 bg-transparent border-b border-border/30 focus:border-primary focus:outline-none py-1 text-sm"
                        />
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-destructive" onClick={() => removeItem(i)}>
                            <Minus className="w-3 h-3" />
                        </Button>
                    </div>
                ))}
                <Button variant="outline" size="sm" onClick={addItem} className="mt-2 text-xs">
                    <Plus className="w-3 h-3 mr-1" /> Add Item
                </Button>
            </div>
        </div>
    );
};

export const DividerEditor = (props: BaseBlockProps) => {
    return (
        <div className="relative group bg-secondary/5 border-y border-dashed border-border/50 py-4 flex items-center justify-center">
            <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isFirst} onClick={props.moveUp}>↑</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" disabled={props.isLast} onClick={props.moveDown}>↓</Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive" onClick={props.onRemove}><X className="w-4 h-4" /></Button>
            </div>
            <div className="w-full h-px bg-border/50" />
            <span className="absolute bg-background px-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Divider</span>
        </div>
    );
};
