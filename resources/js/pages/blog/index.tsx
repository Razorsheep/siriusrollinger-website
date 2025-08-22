import { useState, useMemo } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Search, Filter, User, Calendar, Tag, ArrowRight } from 'lucide-react';
import { SharedData, Tag as TagType } from '@/types';
import AppLayout from '@/layouts/app-layout';

export default function BlogIndex() {
    const { blogEntries, tags, navigationItems, settings, seo } = usePage<SharedData>().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    console.log(tags);

    // Transform blog entries for display
    const transformedEntries = useMemo(() => {
        if (!blogEntries) return [];
        
        return blogEntries.map(entry => ({
            id: entry.id,
            title: entry.title,
            excerpt: entry.excerpt || (entry.content && typeof entry.content === 'string' ? entry.content.substring(0, 150) + '...' : ''),
            author: entry.author?.name || 'Julie Pio Kragelund',
            date: entry.created_at,
            tags: entry.tags || [],
            readTime: '5 min læsning',
            image: entry.featured_image_preview || entry.featured_image || '/images/logo.png',
            slug: entry.slug
        }));
    }, [blogEntries]);

    // Filter entries based on search and tag
    const filteredEntries = useMemo(() => {
        let filtered = transformedEntries;

        if (searchTerm) {
            filtered = filtered.filter(entry =>
                entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                entry.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                entry.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
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
            <section className="relative bg-gradient-to-br from-[var(--color-red-50)] to-[var(--color-white)] py-[var(--spacing-4xl)] lg:py-[var(--spacing-5xl)]">
                <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-lg)]">
                            Blog
                        </h1>
                        <p className="text-xl text-[var(--color-red-700)] max-w-3xl mx-auto mb-[var(--spacing-xl)]">
                            Få de nyeste tips og guides om førstehjælp til hund.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-[var(--spacing-md)] top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-red-400)]" />
                                <input
                                    type="text"
                                    placeholder="Søg i artikler..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-[var(--spacing-md)] py-[var(--spacing-sm)] border-2 border-[var(--color-red-200)] rounded-[var(--radius-lg)] focus:border-[var(--color-red-500)] focus:outline-none text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-[var(--spacing-3xl)] bg-[var(--color-white)]">
                <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                    {/* Tag Filters */}
                    <div className="bg-[var(--color-red-50)] rounded-[var(--radius-xl)] p-[var(--spacing-lg)] mb-[var(--spacing-3xl)]">
                        <h3 className="text-lg font-semibold text-[var(--color-red-900)] mb-[var(--spacing-md)] flex items-center">
                            <Filter className="h-5 w-5 mr-[var(--spacing-sm)]" />
                            Filtrer efter tags
                        </h3>
                        <div className="flex flex-wrap gap-[var(--spacing-sm)]">
                            <button
                                onClick={() => setSelectedTag(null)}
                                className={`px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-[var(--radius-full)] text-sm font-medium transition-colors ${
                                    selectedTag === null
                                        ? 'bg-[var(--color-red-600)] text-[var(--color-white)]'
                                        : 'bg-[var(--color-white)] text-[var(--color-red-700)] hover:bg-[var(--color-red-100)]'
                                }`}
                            >
                                Alle ({transformedEntries.length})
                            </button>
                            {uniqueTags.map((tag) => (
                                <button
                                    key={tag.name}
                                    onClick={() => setSelectedTag(tag.name)}
                                    className={`px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-[var(--radius-full)] text-sm font-medium transition-colors ${
                                        selectedTag === tag.name
                                            ? 'bg-[var(--color-red-600)] text-[var(--color-white)]'
                                            : 'bg-[var(--color-white)] text-[var(--color-red-700)] hover:bg-[var(--color-red-100)]'
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
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-xl)]">
                            {filteredEntries.map((post) => (
                                <article key={post.id} className="bg-[var(--color-white)] border-2 border-[var(--color-red-100)] rounded-[var(--radius-xl)] p-[var(--spacing-lg)] hover:shadow-lg transition-all duration-300">
                                    {/* Image */}
                                    <div className="aspect-video bg-[var(--color-red-100)] rounded-[var(--radius-lg)] overflow-hidden mb-[var(--spacing-md)]">
                                        {post.image && post.image !== '/images/logo.png' ? (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-center text-[var(--color-red-400)]">
                                                <div className="w-16 h-16 mx-auto mb-[var(--spacing-sm)]">
                                                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="text-sm font-medium">Intet billede</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex items-center space-x-[var(--spacing-md)] text-sm text-[var(--color-red-600)] mb-[var(--spacing-sm)]">
                                        <span className="flex items-center">
                                            <User className="h-4 w-4 mr-[var(--spacing-xs)]" />
                                            {post.author}
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-[var(--spacing-xs)]" />
                                            {new Date(post.date).toLocaleDateString('da-DK')}
                                        </span>
                                        <span className="flex items-center">
                                            <Tag className="h-4 w-4 mr-[var(--spacing-xs)]" />
                                            {post.tags.length > 0 ? post.tags[0].name : 'Generelt'}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-sm)] hover:text-[var(--color-red-700)] transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-[var(--color-red-700)] leading-relaxed mb-[var(--spacing-md)]">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-[var(--color-red-600)] hover:text-[var(--color-red-800)] font-semibold transition-colors group"
                                    >
                                        Læs mere
                                        <ArrowRight className="ml-[var(--spacing-sm)] h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : searchTerm ? (
                        <div className="text-center py-[var(--spacing-3xl)]">
                            <div className="text-[var(--color-red-400)] mb-[var(--spacing-md)]">
                                <Search className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-red-900)] mb-[var(--spacing-sm)]">
                                Ingen resultater fundet
                            </h3>
                            <p className="text-[var(--color-red-700)]">
                                Prøv at ændre dine søgekriterier eller tagfilter
                            </p>
                        </div>
                    ) : (
                        <div className="text-center py-[var(--spacing-3xl)]">
                            <div className="text-[var(--color-red-400)] mb-[var(--spacing-md)]">
                                <Search className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-red-900)] mb-[var(--spacing-sm)]">
                                Ingen blog artikler endnu
                            </h3>
                            <p className="text-[var(--color-red-700)]">
                                Vi arbejder på at tilføje spændende indhold. Kom snart tilbage!
                            </p>
                        </div>
                    )}

                    {/* Pagination */}
                    {filteredEntries.length > 0 && (
                        <div className="mt-[var(--spacing-2xl)] flex justify-center">
                            <nav className="flex items-center space-x-[var(--spacing-sm)]">
                                <button className="px-[var(--spacing-md)] py-[var(--spacing-sm)] text-[var(--color-red-600)] hover:text-[var(--color-red-800)] disabled:opacity-50 disabled:cursor-not-allowed">
                                    Forrige
                                </button>
                                <span className="px-[var(--spacing-md)] py-[var(--spacing-sm)] text-[var(--color-red-700)]">Side 1 af 1</span>
                                <button className="px-[var(--spacing-sm)] py-[var(--spacing-sm)] text-[var(--color-red-600)] hover:text-[var(--color-red-800)] disabled:cursor-not-allowed">
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
