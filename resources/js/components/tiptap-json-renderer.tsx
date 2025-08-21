import React from 'react';

interface TipTapNode {
    type: string;
    content?: TipTapNode[];
    text?: string;
    marks?: Array<{ type: string }>;
    attrs?: Record<string, any>;
}

interface TipTapJsonRendererProps {
    content: any;
    className?: string;
}

export function TipTapJsonRenderer({ content, className = '' }: TipTapJsonRendererProps) {
    const renderNode = (node: TipTapNode, index: number): React.ReactNode => {
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
                            element = <code key={index} className="bg-muted px-1 py-0.5 rounded text-sm font-mono">{element}</code>;
                            break;
                        case 'link':
                            // Handle links if you have them
                            break;
                    }
                });
            }
            
            return element;
        }

        // Handle content nodes
        if (content) {
            const children = content.map((child, childIndex) => 
                renderNode(child, childIndex)
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
                        <ul key={index} className="list-disc space-y-2 text-muted-foreground mb-4 pl-6">
                            {children}
                        </ul>
                    );
                case 'orderedList':
                    return (
                        <ol key={index} className="list-decimal space-y-2 text-muted-foreground mb-4 pl-6">
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
                        <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground bg-muted/30 py-2 rounded-r">
                            {children}
                        </blockquote>
                    );
                case 'codeBlock':
                    return (
                        <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm font-mono">{children}</code>
                        </pre>
                    );
                case 'horizontalRule':
                    return <hr key={index} className="my-6 border-border" />;
                case 'hardBreak':
                    return <br key={index} />;
                case 'image':
                    const imageAttrs = attrs || {};
                    return (
                        <div key={index} className="my-4">
                            <img 
                                src={imageAttrs.src} 
                                alt={imageAttrs.alt || ''} 
                                className="max-w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    );
                case 'table':
                    return (
                        <div key={index} className="overflow-x-auto my-4">
                            <table className="min-w-full border border-border rounded-lg">
                                {children}
                            </table>
                        </div>
                    );
                case 'tableRow':
                    return <tr key={index}>{children}</tr>;
                case 'tableCell':
                    return (
                        <td key={index} className="border border-border px-3 py-2">
                            {children}
                        </td>
                    );
                case 'tableHeader':
                    return (
                        <th key={index} className="border border-border px-3 py-2 bg-muted font-semibold">
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
