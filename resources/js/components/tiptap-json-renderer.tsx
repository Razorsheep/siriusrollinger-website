import React from 'react';
import { Image } from './image';

interface TipTapNode {
    type: string;
    content?: TipTapNode[];
    text?: string;
    marks?: Array<{ type: string; attrs?: Record<string, any> }>;
    attrs?: Record<string, any>;
}

interface TipTapJsonRendererProps {
    content: any;
    className?: string;
}

export function TipTapJsonRenderer({ content, className = '' }: TipTapJsonRendererProps) {
    const renderNode = (node: TipTapNode, index: number, parentType?: string): React.ReactNode => {
        const { type, content, text, marks, attrs } = node;

        // Handle text nodes
        if (type === 'text' && text) {
            let element = text;
            
            // Apply marks
            if (marks) {
                marks.forEach(mark => {
                    switch (mark.type) {
                        case 'bold':
                            element = <strong key={index}>{element}</strong>;
                            break;
                        case 'italic':
                            element = <em key={index}>{element}</em>;
                            break;
                        case 'underline':
                            element = <u key={index}>{element}</u>;
                            break;
                        case 'strike':
                            element = <del key={index}>{element}</del>;
                            break;
                                        case 'code':
                            element = <code key={index} className="bg-[var(--color-muted)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] rounded-[var(--radius-sm)] text-sm font-mono">{element}</code>;
                            break;
                        case 'link':
                            {
                                const href = mark.attrs?.href || '#';
                                const target = mark.attrs?.target || '_blank';
                                element = (
                                    <a key={index} href={href} target={target} rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/90">
                                        {element}
                                    </a>
                                );
                            }
                            break;
                    }
                });
            }
            
            return element;
        }

        // Handle image nodes (no children in TipTap image schema)
        if (type === 'image') {
            const imageAttrs = attrs || {};
            const align = imageAttrs.textAlign || imageAttrs.align || 'center';
            const justify = align === 'right' ? 'justify-end' : align === 'left' ? 'justify-start' : 'justify-center';
            // When inside a paragraph, render inline to avoid invalid <figure> inside <p>
            if (parentType === 'paragraph') {
                return (
                    <Image
                        key={index}
                        src={imageAttrs.src}
                        alt={imageAttrs.alt || ''}
                        className="inline-block align-middle max-w-full h-auto rounded-[var(--radius-md)] my-[var(--spacing-xs)]"
                        showLightbox={true}
                    />
                );
            }
            // Otherwise render as block-level figure
            return (
                <div key={index} className={`my-[var(--spacing-md)] flex ${justify}`}>
                    <figure className="w-full max-w-3xl">
                        <Image 
                            src={imageAttrs.src}
                            alt={imageAttrs.alt || ''}
                            className="w-full h-auto rounded-[var(--radius-lg)]"
                        />
                        {imageAttrs.title && (
                            <figcaption className="mt-2 text-xs text-muted-foreground text-center">{imageAttrs.title}</figcaption>
                        )}
                    </figure>
                </div>
            );
        }

        // Handle content nodes
        if (content) {
            const children = content.map((child, childIndex) => 
                renderNode(child, childIndex, type)
            );

            switch (type) {
                case 'doc':
                    return (
                        <div key={index} className={`space-y-4 ${className}`}>
                            {children}
                        </div>
                    );
                case 'paragraph':
                    const paragraphTextAlign = attrs?.textAlign || 'start';
                    return (
                        <p key={index} className={`text-muted-foreground leading-relaxed mb-4 ${
                            paragraphTextAlign === 'center' ? 'text-center' : 
                            paragraphTextAlign === 'right' ? 'text-right' : 'text-left'
                        }`}>
                            {children}
                        </p>
                    );
                case 'heading':
                    const level = attrs?.level || 1;
                    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                    const headingTextAlign = attrs?.textAlign || 'start';
                    return (
                        <HeadingTag 
                            key={index} 
                            className={`font-display font-bold tracking-tight ${
                                headingTextAlign === 'center' ? 'text-center' : 
                                headingTextAlign === 'right' ? 'text-right' : 'text-left'
                            } ${
                                level === 1 ? 'text-3xl' : 
                                level === 2 ? 'text-2xl' : 
                                level === 3 ? 'text-xl' : 'text-lg'
                            } ${level === 1 ? 'mt-8 mb-4' : level === 2 ? 'mt-6 mb-3' : 'mt-4 mb-2'}`}
                        >
                            {children}
                        </HeadingTag>
                    );
                case 'bulletList':
                    return (
                        <ul key={index} className="list-disc space-y-[var(--spacing-sm)] text-[var(--color-muted-foreground)] mb-[var(--spacing-md)] pl-[var(--spacing-xl)]">
                            {children}
                        </ul>
                    );
                case 'orderedList':
                    return (
                        <ol key={index} className="list-decimal space-y-[var(--spacing-sm)] text-[var(--color-muted-foreground)] mb-[var(--spacing-md)] pl-[var(--spacing-xl)]">
                            {children}
                        </ol>
                    );
                case 'listItem':
                    return (
                        <li key={index} className="leading-relaxed">
                            {children}
                        </li>
                    );
                case 'blockquote':
                    return (
                        <blockquote key={index} className="border-l-4 border-[var(--color-primary)] pl-[var(--spacing-md)] italic text-[var(--color-muted-foreground)] bg-[var(--color-muted)]/30 py-[var(--spacing-sm)] rounded-r">
                            {children}
                        </blockquote>
                    );
                case 'codeBlock':
                    return (
                        <pre key={index} className="bg-[var(--color-muted)] p-[var(--spacing-md)] rounded-[var(--radius-lg)] overflow-x-auto">
                            <code className="text-sm font-mono">{children}</code>
                        </pre>
                    );
                case 'horizontalRule':
                    return <hr key={index} className="my-[var(--spacing-xl)] border-[var(--color-border)]" />;
                case 'hardBreak':
                    return <br key={index} />;
                case 'table':
                    return (
                        <div key={index} className="overflow-x-auto my-[var(--spacing-md)]">
                            <table className="min-w-full border border-[var(--color-border)] rounded-[var(--radius-lg)]">
                                {children}
                            </table>
                        </div>
                    );
                case 'tableRow':
                    return <tr key={index}>{children}</tr>;
                case 'tableCell':
                    return (
                        <td key={index} className="border border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)]">
                            {children}
                        </td>
                    );
                case 'tableHeader':
                    return (
                        <th key={index} className="border border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] bg-[var(--color-muted)] font-semibold">
                            {children}
                        </th>
                    );
                default:
                    return <div key={index}>{children}</div>;
            }
        }

        return null;
    };

    if (!content || !content.content) {
        return <div className="text-muted-foreground">No content available</div>;
    }

    return (
        <div className="prose prose-sm max-w-none">
            {renderNode(content, 0)}
        </div>
    );
}
