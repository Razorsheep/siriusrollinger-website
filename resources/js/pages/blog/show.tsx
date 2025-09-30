import { NewsletterSignup } from '@/components/newsletter-signup';
import { TipTapJsonRenderer } from '@/components/tiptap-json-renderer';
import { SharedData, TiptapContent } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Calendar, User, Tag, Clock, BookOpen, Heart } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Image } from '@/components/image';

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

export default function BlogShow() {
    const { blogEntry } = usePage<SharedData>().props;

    if (!blogEntry) {
        return (
            <AppLayout>
                <div className="min-h-screen bg-red-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-primary mb-4">Blog indlæg ikke fundet</h1>
                        <p className="text-muted-foreground mb-6">Det ønskede blog indlæg kunne ikke findes.</p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-6 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Tilbage til blog
                        </Link>
                    </div>
                </div>
            </AppLayout>
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

    const calculateReadTime = (content: string | TiptapContent): string => {
        const textContent = extractTextFromTiptap(content);
        if (textContent) {
            const words = textContent.split(' ').length;
            const minutes = Math.ceil(words / 200);
            return `${minutes} min læsning`;
        }
        return '5 min læsning';
    };

    return (
        <AppLayout>
            {/* Breadcrumb */}
            <section className="bg-red-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                            Forside
                        </Link>
                        <span className="text-muted-foreground">/</span>
                        <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">
                            Blog
                        </Link>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground font-medium">{blogEntry.title}</span>
                    </nav>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-8 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        {/* Tags Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium mb-4">
                            <Tag className="h-4 w-4 mr-2" />
                            {blogEntry.tags && blogEntry.tags.length > 0 ? blogEntry.tags[0].name : 'Generelt'}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                            {blogEntry.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-6">
                            <span className="flex items-center">
                                <User className="h-5 w-5 mr-2" />
                                {blogEntry.author?.name || 'Julie Pio Kragelund'}
                            </span>
                            <span className="flex items-center">
                                <Calendar className="h-5 w-5 mr-2" />
                                {formatDate(blogEntry.created_at)}
                            </span>
                            <span className="flex items-center">
                                <Clock className="h-5 w-5 mr-2" />
                                {calculateReadTime(blogEntry.content)}
                            </span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {blogEntry.featured_image && (
                        <div className="mb-8">
                            <Image
                                src={blogEntry.featured_image}
                                alt={blogEntry.title}
                                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="mb-8">
                        <TipTapJsonRenderer content={blogEntry.content} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/* <section className="py-8 bg-red-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-background rounded-2xl p-8 shadow-lg">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                            Lær mere om førstehjælp
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            Er du interesseret i at lære mere om førstehjælp til hunde? 
                            Tilmeld dig et af vores praktiske kurser og få den viden, der kan redde liv.
                        </p>
                        <Link
                            href="/courses"
                            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                        >
                            Se vores kurser
                            <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* Newsletter Signup */}
            {/* <section className="py-12 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold text-primary mb-4">
                        Få de nyeste tips direkte i din indbakke
                    </h3>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Tilmeld dig vores nyhedsbrev og få eksklusive tips om hundesikkerhed og førstehjælp
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/newsletter"
                            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                        >
                            <BookOpen className="h-5 w-5 mr-2" />
                            Tilmeld dig nyhedsbrev
                        </Link>
                        <Link
                            href="/courses"
                            className="inline-flex items-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-colors"
                        >
                            <Heart className="h-5 w-5 mr-2" />
                            Se vores kurser
                        </Link>
                    </div>
                </div>
            </section> */}
        </AppLayout>
    );
}
