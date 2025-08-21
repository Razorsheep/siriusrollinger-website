import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { TipTapJsonRenderer } from '@/components/tiptap-json-renderer';
import { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Calendar, User, Tag, Clock, BookOpen, Heart } from 'lucide-react';

export default function BlogShow() {
    const { settings, blogEntry, navigationItems, seo } = usePage<SharedData>().props;

    if (!blogEntry) {
        return (
            <>
                <Head title="Blog indlæg ikke fundet - Førstehjælp til Hunde" />
                <Header settings={settings} navigationItems={navigationItems || []} />
                <div className="min-h-screen bg-red-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-red-900 mb-4">Blog indlæg ikke fundet</h1>
                        <p className="text-red-700 mb-6">Det ønskede blog indlæg kunne ikke findes.</p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Tilbage til blog
                        </Link>
                    </div>
                </div>
                <Footer settings={settings} />
            </>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('da-DK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const estimatedReadTime = (() => {
        if (!blogEntry.content) return 5;
        
        if (typeof blogEntry.content === 'string') {
            return Math.ceil(blogEntry.content.split(' ').length / 200);
        }
        
        // For TiptapContent, estimate based on content structure
        const countWords = (content: any): number => {
            if (typeof content === 'string') return content.split(' ').length;
            if (content.text) return content.text.split(' ').length;
            if (content.content) {
                return content.content.reduce((acc: number, child: any) => acc + countWords(child), 0);
            }
            return 0;
        };
        
        return Math.ceil(countWords(blogEntry.content) / 200);
    })();

    return (
        <>
            <Head>
                <title>{seo?.meta_title || `${blogEntry.title} - Førstehjælp til Hunde`}</title>
                <meta name="description" content={seo?.meta_description || blogEntry.excerpt || `Læs om ${blogEntry.title} fra Førstehjælp til Hunde.`} />
                <meta name="keywords" content={seo?.meta_keywords || `hundesikkerhed, førstehjælp til hunde, ${blogEntry.title.toLowerCase()}, denmark`} />
                <meta name="author" content={seo?.article_author || blogEntry.author_name || 'Julie Pio Kragelund'} />
                <meta name="robots" content={`${seo?.robots_index ? 'index' : 'noindex'}, ${seo?.robots_follow ? 'follow' : 'nofollow'}`} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content={seo?.og_type || 'article'} />
                <meta property="og:url" content={seo?.canonical_url || window.location.href} />
                <meta property="og:title" content={seo?.og_title || blogEntry.title} />
                <meta property="og:description" content={seo?.og_description || blogEntry.excerpt || `Læs om ${blogEntry.title} fra Førstehjælp til Hunde.`} />
                <meta property="og:image" content={seo?.og_image || (blogEntry.image || '/images/logo.png')} />
                <meta property="og:site_name" content="Førstehjælp til Hunde" />
                <meta property="og:locale" content="da_DK" />
                <meta property="article:published_time" content={seo?.article_published_time || blogEntry.date} />
                <meta property="article:modified_time" content={seo?.article_modified_time || blogEntry.updated_at} />
                <meta property="article:author" content={seo?.article_author || blogEntry.author_name || 'Julie Pio Kragelund'} />
                <meta property="article:section" content={seo?.article_section || blogEntry.category} />
                
                {/* Twitter */}
                <meta name="twitter:card" content={seo?.twitter_card || 'summary_large_image'} />
                <meta name="twitter:title" content={seo?.twitter_title || blogEntry.title} />
                <meta name="twitter:description" content={seo?.twitter_description || blogEntry.excerpt || `Læs om ${blogEntry.title} fra Førstehjælp til Hunde.`} />
                <meta name="twitter:image" content={seo?.twitter_image || (blogEntry.image || '/images/logo.png')} />
                
                {/* Additional SEO */}
                <meta name="geo.region" content={seo?.geo_region || 'DK'} />
                <meta name="geo.placename" content={seo?.geo_placename || 'Denmark'} />
                <link rel="canonical" href={seo?.canonical_url || window.location.href} />
            </Head>

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": blogEntry.title,
                        "description": blogEntry.excerpt || `Læs om ${blogEntry.title} fra Førstehjælp til Hunde.`,
                        "author": {
                            "@type": "Person",
                            "name": blogEntry.author_name || "Julie Pio Kragelund"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Førstehjælp til Hunde",
                            "url": window.location.origin,
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${window.location.origin}/images/logo.png`
                            }
                        },
                        "datePublished": blogEntry.date,
                        "dateModified": blogEntry.date,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": window.location.href
                        },
                        "articleSection": blogEntry.category,
                        "image": blogEntry.image || `${window.location.origin}/images/logo.png`,
                        "keywords": `hundesikkerhed, førstehjælp til hunde, ${blogEntry.title.toLowerCase()}, denmark`
                    })
                }}
            />
            
            <Header settings={settings} navigationItems={navigationItems || []} />

            {/* Breadcrumb */}
            <section className="bg-red-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-red-600 hover:text-red-800 transition-colors">
                            Forside
                        </Link>
                        <span className="text-red-400">/</span>
                        <Link href="/blog" className="text-red-600 hover:text-red-800 transition-colors">
                            Blog
                        </Link>
                        <span className="text-red-400">/</span>
                        <span className="text-red-800 font-medium">{blogEntry.title}</span>
                    </nav>
                </div>
            </section>

            {/* Blog Post Header */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                            <Tag className="h-4 w-4 mr-2" />
                            {blogEntry.category}
                        </div>
                        
                        <h1 className="text-4xl lg:text-5xl font-bold text-red-900 mb-6 leading-tight">
                            {blogEntry.title}
                        </h1>
                        
                        <div className="flex items-center justify-center space-x-6 text-red-600 mb-6">
                            <span className="flex items-center">
                                <User className="h-5 w-5 mr-2" />
                                {blogEntry.author || 'Julie Pio Kragelund'}
                            </span>
                            <span className="flex items-center">
                                <Calendar className="h-5 w-5 mr-2" />
                                {formatDate(blogEntry.date)}
                            </span>
                            <span className="flex items-center">
                                <Clock className="h-5 w-5 mr-2" />
                                {blogEntry.read_time || estimatedReadTime} min læsning
                            </span>
                        </div>

                        {blogEntry.image && (
                            <div className="mb-8">
                                <img
                                    src={blogEntry.image_url || blogEntry.image}
                                    alt={blogEntry.title}
                                    className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-lg prose-red max-w-none">
                        <TipTapJsonRenderer 
                            content={blogEntry.content}
                            className="text-red-800 leading-relaxed text-lg"
                        />
                    </article>
                </div>
            </section>

            {/* Author Bio */}
            <section className="py-12 bg-red-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                                    <BookOpen className="h-10 w-10 text-red-600" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-red-900 mb-2">
                                    {blogEntry.author.name || 'Julie Pio Kragelund'}
                                </h3>
                                <p className="text-red-700 mb-4 leading-relaxed">
                                    Dyrlæge med speciale i førstehjælp til hunde. Julie har over 15 års erfaring 
                                    med at undervise hundeejere og professionelle i at håndtere nødsituationer. 
                                    Hun er uddannet i NATO-regi som instruktør i taktisk førstehjælp på hund.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors"
                                    >
                                        Læs mere om Julie
                                        <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold text-red-900 mb-4">
                        Lær mere om førstehjælp til hunde
                    </h3>
                    <p className="text-xl text-red-700 mb-8 max-w-2xl mx-auto">
                        Udforsk vores blog for at få flere tips, guides og nyheder om hundesikkerhed og førstehjælp
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                        >
                            <BookOpen className="h-5 w-5 mr-2" />
                            Se alle blog indlæg
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            <Heart className="h-5 w-5 mr-2" />
                            Få hjælp til din hund
                        </Link>
                    </div>
                </div>
            </section>

            <NewsletterSignup />

            <Footer settings={settings} />
        </>
    );
}
