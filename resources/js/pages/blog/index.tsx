import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { TipTapJsonRenderer } from '@/components/tiptap-json-renderer';
import { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Search, Calendar, User, Tag, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

export default function BlogIndex() {
    const { settings, blogEntries, categories, navigationItems } = usePage<SharedData>().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Helper function to extract text from content (handles both string and TiptapContent)
    const extractTextFromContent = (content: any): string => {
        if (!content) return '';
        
        if (typeof content === 'string') {
            return content;
        }
        
        // For TiptapContent, recursively extract text
        const extractText = (node: any): string => {
            if (typeof node === 'string') return node;
            if (node.text) return node.text;
            if (node.content && Array.isArray(node.content)) {
                return node.content.map(extractText).join(' ');
            }
            return '';
        };
        
        return extractText(content);
    };

    // Transform backend data to match our frontend structure
    const blogPosts = blogEntries?.map(entry => ({
        id: entry.id,
        title: entry.title,
        excerpt: entry.excerpt || (() => {
            const textContent = extractTextFromContent(entry.content);
            return textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent;
        })(),
        author: entry.author || 'Julie Pio Kragelund',
        date: entry.date,
        category: entry.category,
        readTime: entry.read_time ? `${entry.read_time} min` : '5 min',
        image: entry.image_url || entry.image || '/images/logo.png',
        slug: entry.slug
    })) || [];

    // Create categories with counts from actual data
    const allCategories = [
        { id: 'all', name: 'Alle kategorier', count: blogPosts.length },
        ...(categories?.map(category => ({
            id: category,
            name: category,
            count: blogPosts.filter(post => post.category === category).length
        })) || [])
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('da-DK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title="Blog - Førstehjælp til Hunde" />
            
            <Header settings={settings} navigationItems={navigationItems} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-red-50 to-white py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-red-900 mb-6">
                            Blog & Nyheder
                        </h1>
                        <p className="text-xl text-red-700 max-w-3xl mx-auto mb-8">
                            Få de seneste tips, guides og nyheder om førstehjælp til hunde fra vores eksperter
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-400" />
                                <input
                                    type="text"
                                    placeholder="Søg i artikler..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-red-200 rounded-lg focus:border-red-500 focus:outline-none text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8">
                                <div className="bg-red-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                                        <Filter className="h-5 w-5 mr-2" />
                                        Kategorier
                                    </h3>
                                    <div className="space-y-2">
                                        {allCategories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                                    selectedCategory === category.id
                                                        ? 'bg-red-600 text-white'
                                                        : 'text-red-700 hover:bg-red-100'
                                                }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span>{category.name}</span>
                                                    <span className="text-sm opacity-75">({category.count})</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog Posts */}
                        <div className="lg:col-span-3">
                            {blogPosts.length === 0 ? (
                                <div className="text-center py-16">
                                    <div className="text-red-400 mb-4">
                                        <Search className="h-16 w-16 mx-auto" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-red-900 mb-2">
                                        Ingen blog artikler endnu
                                    </h3>
                                    <p className="text-red-700">
                                        Vi arbejder på at tilføje spændende indhold. Kom snart tilbage!
                                    </p>
                                </div>
                            ) : filteredPosts.length === 0 ? (
                                <div className="text-center py-16">
                                    <div className="text-red-400 mb-4">
                                        <Search className="h-16 w-16 mx-auto" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-red-900 mb-2">
                                        Ingen artikler fundet
                                    </h3>
                                    <p className="text-red-700">
                                        Prøv at ændre dine søgekriterier eller kategorivalg
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {filteredPosts.map((post) => (
                                        <article key={post.id} className="bg-white border-2 border-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {/* Image */}
                                                <div className="md:col-span-1">
                                                    <div className="aspect-video bg-red-100 rounded-lg overflow-hidden">
                                                        <img
                                                            src={post.image}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="md:col-span-2">
                                                    <div className="flex items-center space-x-4 text-sm text-red-600 mb-3">
                                                        <span className="flex items-center">
                                                            <User className="h-4 w-4 mr-1" />
                                                            {post.author}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <Calendar className="h-4 w-4 mr-1" />
                                                            {formatDate(post.date)}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <Tag className="h-4 w-4 mr-1" />
                                                            {post.category}
                                                        </span>
                                                        <span>{post.readTime}</span>
                                                    </div>

                                                    <h2 className="text-2xl font-bold text-red-900 mb-3 hover:text-red-700 transition-colors">
                                                        <Link href={`/blog/${post.slug}`}>
                                                            {post.title}
                                                        </Link>
                                                    </h2>

                                                    <p className="text-red-700 leading-relaxed mb-4">
                                                        {post.excerpt}
                                                    </p>

                                                    <Link
                                                        href={`/blog/${post.slug}`}
                                                        className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors group"
                                                    >
                                                        Læs mere
                                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            {blogPosts.length > 0 && filteredPosts.length > 0 && (
                                <div className="mt-12 flex justify-center">
                                    <nav className="flex items-center space-x-2">
                                        <button className="px-4 py-2 text-red-600 hover:text-red-800 disabled:opacity-50 disabled:cursor-not-allowed">
                                            Forrige
                                        </button>
                                        <span className="px-4 py-2 text-red-700">Side 1 af 1</span>
                                        <button className="px-4 py-2 text-red-600 hover:text-red-800 disabled:opacity-50 disabled:cursor-not-allowed">
                                            Næste
                                        </button>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <NewsletterSignup />

            <Footer settings={settings} />
        </>
    );
}
