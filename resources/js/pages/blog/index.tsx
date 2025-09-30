import { useState, useMemo } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Search, Filter, User, Calendar, Tag, ArrowRight } from 'lucide-react';
import { SharedData, Tag as TagType, TiptapContent } from '@/types';
import AppLayout from '@/layouts/app-layout';

// Helper function to extract plain text from Tiptap JSON content
const extractTextFromTiptap = (content: TiptapContent | string): string => {
    if (typeof content === 'string') {
        return content;
    }
    
    if (!content || !content.content) {
        return '';
    }
    
    const extractText = (node: TiptapContent): string => {
        if (node.type === 'text' && node.text) {
            return node.text;
        }
        
        if (node.content) {
            return node.content.map(extractText).join('');
        }
        
        return '';
    };
    
    return content.content.map(extractText).join(' ');
};

export default function BlogIndex() {
    const { blogEntries, tags, navigationItems, settings, seo } = usePage<SharedData>().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Transform blog entries for display
    const transformedEntries = useMemo(() => {
        if (!blogEntries) return [];
        
        return blogEntries.map(entry => {
            // Extract text content for excerpt
            const contentText = extractTextFromTiptap(entry.content);
            const excerpt = entry.excerpt || (contentText ? contentText.substring(0, 150) + '...' : '');
            
            return {
                id: entry.id,
                title: entry.title,
                excerpt,
                author: entry.author?.name || 'Julie Pio Kragelund',
                date: entry.created_at,
                tags: entry.tags || [],
                readTime: '5 min læsning',
                image: entry.featured_image_preview || entry.featured_image || '/images/logo.png',
                slug: entry.slug
            };
        });
    }, [blogEntries]);

    // Filter entries based on search and tag
    const filteredEntries = useMemo(() => {
        let filtered = transformedEntries;

        if (searchTerm) {
            filtered = filtered.filter(entry => {
                const searchLower = searchTerm.toLowerCase();
                return entry.title.toLowerCase().includes(searchLower) ||
                       entry.excerpt.toLowerCase().includes(searchLower) ||
                       entry.author.toLowerCase().includes(searchLower) ||
                       (entry.tags && entry.tags.some(tag => tag.name.toLowerCase().includes(searchLower)));
            });
        }

        if (selectedTag) {
            filtered = filtered.filter(entry => 
                entry.tags.some(tag => tag.name === selectedTag)
            );
        }

        return filtered;
    }, [transformedEntries, searchTerm, selectedTag]);

    // Get unique tags for filtering
    const uniqueTags = useMemo(() => {
        if (!tags) return [];
        
        const tagCounts = (tags as TagType[]).reduce((acc: Record<string, number>, tag: TagType) => {
            if (tag && tag.name) {
                acc[tag.name] = (acc[tag.name] || 0) + 1;
            }
            return acc;
        }, {});

        return Object.entries(tagCounts).map(([name, count]) => ({ name, count }));
    }, [tags]);

    return (
        <AppLayout>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-red-50 to-background py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Blog
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Få de nyeste tips og guides om førstehjælp til hund.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Søg i artikler..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-2 border rounded-lg border-input focus:border-primary focus:outline-none text-lg bg-background text-foreground"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tag Filters */}
                    <div className="bg-muted rounded-xl p-6 mb-12">
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                            <Filter className="h-5 w-5 mr-2" />
                            Filtrer efter tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedTag(null)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedTag === null
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-background text-foreground hover:bg-muted'
                                }`}
                            >
                                Alle ({transformedEntries.length})
                            </button>
                            {uniqueTags.map((tag) => (
                                <button
                                    key={tag.name}
                                    onClick={() => setSelectedTag(tag.name)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        selectedTag === tag.name
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-background text-foreground hover:bg-muted'
                                    }`}
                                >
                                    {tag.name}
                                    <span className="text-sm opacity-75">({tag.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Entries */}
                    {filteredEntries.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEntries.map((post) => (
                                <article key={post.id} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                    {/* Image */}
                                    <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                                        {post.image && post.image !== '/images/logo.png' ? (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-center text-muted-foreground">
                                                <div className="w-16 h-16 mx-auto mb-2">
                                                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="text-sm font-medium">Intet billede</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                                        <span className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            {post.author}
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {new Date(post.date).toLocaleDateString('da-DK')}
                                        </span>
                                        <span className="flex items-center">
                                            <Tag className="h-4 w-4 mr-1" />
                                            {post.tags.length > 0 ? post.tags[0].name : 'Generelt'}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-primary mb-2 hover:text-primary/80 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-foreground/90 leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group"
                                    >
                                        Læs mere
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : searchTerm ? (
                        <div className="text-center py-16">
                            <div className="text-muted-foreground mb-4">
                                <Search className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">
                                Ingen resultater fundet
                            </h3>
                            <p className="text-muted-foreground">
                                Prøv at ændre dine søgekriterier eller tagfilter
                            </p>
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-muted-foreground mb-4">
                                <Search className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">
                                Ingen blog artikler endnu
                            </h3>
                            <p className="text-muted-foreground">
                                Vi arbejder på at tilføje spændende indhold. Kom snart tilbage!
                            </p>
                        </div>
                    )}

                    {/* Pagination */}
                    {filteredEntries.length > 0 && (
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                <button className="px-4 py-2 text-primary hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed">
                                    Forrige
                                </button>
                                <span className="px-4 py-2 text-muted-foreground">Side 1 af 1</span>
                                <button className="px-2 py-2 text-primary hover:text-primary/80 disabled:cursor-not-allowed">
                                    Næste
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </section>
        </AppLayout>
    );
}
