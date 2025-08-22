import { NewsletterSignup } from '@/components/newsletter-signup';
import { TipTapJsonRenderer } from '@/components/tiptap-json-renderer';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Calendar, User, Tag, Clock, BookOpen, Heart } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

export default function BlogShow() {
    const { settings, blogEntry, navigationItems, seo } = usePage<SharedData>().props;

    if (!blogEntry) {
        return (
            <AppLayout>
                <div className="min-h-screen bg-[var(--color-red-50)] flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)]">Blog indlæg ikke fundet</h1>
                        <p className="text-[var(--color-red-700)] mb-[var(--spacing-lg)]">Det ønskede blog indlæg kunne ikke findes.</p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-[var(--color-white)] font-semibold py-[var(--spacing-sm)] px-[var(--spacing-lg)] rounded-[var(--radius-lg)] transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-[var(--spacing-sm)]" />
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

    const calculateReadTime = (content: string | any): string => {
        if (typeof content === 'string') {
            const words = content.split(' ').length;
            const minutes = Math.ceil(words / 200);
            return `${minutes} min læsning`;
        }
        return '5 min læsning';
    };

    return (
        <AppLayout>
            {/* Breadcrumb */}
            <section className="bg-[var(--color-red-50)] py-[var(--spacing-md)]">
                <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                    <nav className="flex items-center space-x-[var(--spacing-sm)] text-sm">
                        <Link href="/" className="text-[var(--color-red-600)] hover:text-[var(--color-red-800)] transition-colors">
                            Forside
                        </Link>
                        <span className="text-[var(--color-red-400)]">/</span>
                        <Link href="/blog" className="text-[var(--color-red-600)] hover:text-[var(--color-red-800)] transition-colors">
                            Blog
                        </Link>
                        <span className="text-[var(--color-red-400)]">/</span>
                        <span className="text-[var(--color-red-800)] font-medium">{blogEntry.title}</span>
                    </nav>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-[var(--spacing-2xl)] bg-[var(--color-white)]">
                <div className="max-w-4xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                    <div className="text-center mb-[var(--spacing-xl)]">
                        {/* Tags Badge */}
                        <div className="inline-flex items-center px-[var(--spacing-md)] py-[var(--spacing-sm)] bg-[var(--color-red-100)] text-[var(--color-red-700)] rounded-full text-sm font-medium mb-[var(--spacing-md)]">
                            <Tag className="h-4 w-4 mr-[var(--spacing-sm)]" />
                            {blogEntry.tags && blogEntry.tags.length > 0 ? blogEntry.tags[0].name : 'Generelt'}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-lg)] leading-tight">
                            {blogEntry.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex items-center justify-center space-x-[var(--spacing-lg)] text-[var(--color-red-600)] mb-[var(--spacing-lg)]">
                            <span className="flex items-center">
                                <User className="h-5 w-5 mr-[var(--spacing-sm)]" />
                                {blogEntry.author?.name || 'Julie Pio Kragelund'}
                            </span>
                            <span className="flex items-center">
                                <Calendar className="h-5 w-5 mr-[var(--spacing-sm)]" />
                                {formatDate(blogEntry.created_at)}
                            </span>
                            <span className="flex items-center">
                                <Clock className="h-5 w-5 mr-[var(--spacing-sm)]" />
                                {calculateReadTime(blogEntry.content)}
                            </span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {blogEntry.featured_image && (
                        <div className="mb-[var(--spacing-xl)]">
                            <img
                                src={blogEntry.featured_image}
                                alt={blogEntry.title}
                                className="w-full max-w-2xl mx-auto rounded-[var(--radius-xl)] shadow-lg"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="mb-[var(--spacing-xl)]">
                        <TipTapJsonRenderer content={blogEntry.content} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[var(--spacing-2xl)] bg-[var(--color-red-50)]">
                <div className="max-w-4xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)] text-center">
                    <div className="bg-[var(--color-white)] rounded-[var(--radius-2xl)] p-[var(--spacing-xl)] shadow-lg">
                        <div className="w-20 h-20 bg-[var(--color-red-100)] rounded-full flex items-center justify-center mx-auto mb-[var(--spacing-md)]">
                            <BookOpen className="h-10 w-10 text-[var(--color-red-600)]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-sm)]">
                            Lær mere om førstehjælp
                        </h3>
                        <p className="text-[var(--color-red-700)] mb-[var(--spacing-md)] leading-relaxed">
                            Er du interesseret i at lære mere om førstehjælp til hunde? 
                            Tilmeld dig et af vores praktiske kurser og få den viden, der kan redde liv.
                        </p>
                        <Link
                            href="/courses"
                            className="inline-flex items-center text-[var(--color-red-600)] hover:text-[var(--color-red-800)] font-semibold transition-colors"
                        >
                            Se vores kurser
                            <ArrowLeft className="h-4 w-4 ml-[var(--spacing-sm)] rotate-180" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-[var(--spacing-3xl)] bg-[var(--color-white)]">
                <div className="max-w-4xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)] text-center">
                    <h3 className="text-3xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)]">
                        Få de nyeste tips direkte i din indbakke
                    </h3>
                    <p className="text-xl text-[var(--color-red-700)] mb-[var(--spacing-xl)] max-w-2xl mx-auto">
                        Tilmeld dig vores nyhedsbrev og få eksklusive tips om hundesikkerhed og førstehjælp
                    </p>
                    <div className="flex flex-col sm:flex-row gap-[var(--spacing-md)] justify-center">
                        <Link
                            href="/newsletter"
                            className="inline-flex items-center bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-[var(--color-white)] font-semibold py-[var(--spacing-md)] px-[var(--spacing-xl)] rounded-[var(--radius-lg)] transition-colors shadow-lg hover:shadow-xl"
                        >
                            <BookOpen className="h-5 w-5 mr-[var(--spacing-sm)]" />
                            Tilmeld dig nyhedsbrev
                        </Link>
                        <Link
                            href="/courses"
                            className="inline-flex items-center border-2 border-[var(--color-red-600)] text-[var(--color-red-600)] hover:bg-[var(--color-red-600)] hover:text-[var(--color-white)] font-semibold py-[var(--spacing-md)] px-[var(--spacing-xl)] rounded-[var(--radius-lg)] transition-colors"
                        >
                            <Heart className="h-5 w-5 mr-[var(--spacing-sm)]" />
                            Se vores kurser
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
