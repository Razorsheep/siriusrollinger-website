import { HeroSection } from '@/components/hero-section';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { NewsletterPopup } from '@/components/newsletter-popup';
import { ServicesSection } from '@/components/services-section';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import AppLayout from '@/layouts/app-layout';

export default function Home() {
    const { settings, blogEntries, navigationItems, seo } = usePage<SharedData>().props;
    const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);

    // Show newsletter popup after 3 seconds, but only if user hasn't dismissed it before
    useEffect(() => {
        const hasDismissed = localStorage.getItem('newsletter-popup-dismissed');
        
        if (!hasDismissed) {
            const timer = setTimeout(() => {
                setShowNewsletterPopup(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    console.log(blogEntries);
    return (
        <AppLayout>
            <HeroSection />
            
            <ServicesSection />
            
            {/* Latest Blog Entries Section */}
            <section className="py-[var(--spacing-4xl)] bg-[var(--color-white)]">
                <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                    <div className="text-center mb-[var(--spacing-3xl)]">
                        <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)]">
                            Seneste blog artikler
                        </h3>
                        <p className="text-xl text-[var(--color-red-700)] mx-auto">
                            Få de nyeste tips og guides om førstehjælp til hunde direkte fra vores eksperter
                        </p>
                    </div>

                    {blogEntries && blogEntries.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-xl)] mb-[var(--spacing-2xl)]">
                            {blogEntries.slice(0, 3).map((entry) => {
                                const formatDate = (dateString: string) => {
                                    const date = new Date(dateString);
                                    return date.toLocaleDateString('da-DK', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    });
                                };

                                return (
                                    <article key={entry.id} className="bg-[var(--color-white)] border-2 border-[var(--color-red-100)] rounded-[var(--radius-xl)] p-[var(--spacing-lg)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="aspect-video bg-[var(--color-red-100)] rounded-[var(--radius-lg)] overflow-hidden mb-[var(--spacing-md)]">
                                            <img
                                                src={entry.featured_image_preview || entry.featured_image || '/images/logo.png'}
                                                alt={entry.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-[var(--spacing-md)] text-sm text-[var(--color-red-600)] mb-[var(--spacing-sm)]">
                                            <span className="flex items-center">
                                                <User className="h-4 w-4 mr-[var(--spacing-xs)]" />
                                                {entry.author?.name || 'Julie Pio Kragelund'}
                                            </span>
                                            <span className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-[var(--spacing-xs)]" />
                                                {formatDate(entry.date)}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-sm)]">
                                            {entry.title}
                                        </h4>
                                        <p className="text-[var(--color-red-700)] leading-relaxed mb-[var(--spacing-md)]">
                                            {entry.excerpt || (entry.content && typeof entry.content === 'string' ? entry.content.substring(0, 120) + '...' : 'Ingen beskrivelse tilgængelig')}
                                        </p>
                                        <Link
                                            href={`/blog/${entry.slug}`}
                                            className="inline-flex items-center text-[var(--color-red-600)] hover:text-[var(--color-red-800)] font-semibold transition-colors group"
                                        >
                                            Læs mere
                                            <ArrowRight className="ml-[var(--spacing-sm)] h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-[var(--spacing-3xl)]">
                            <div className="text-[var(--color-red-400)] mb-[var(--spacing-md)]">
                                <Calendar className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-red-900)] mb-[var(--spacing-sm)]">
                                Ingen blog artikler endnu
                            </h3>
                            <p className="text-[var(--color-red-700)]">
                                Vi arbejder på at tilføje spændende indhold. Kom snart tilbage!
                            </p>
                        </div>
                    )}

                    {blogEntries && blogEntries.length > 0 && (
                        <div className="text-center">
                            <Link
                                href="/blog"
                                className="inline-flex items-center bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-[var(--color-white)] font-semibold py-[var(--spacing-sm)] px-[var(--spacing-xl)] rounded-[var(--radius-lg)] transition-colors shadow-lg hover:shadow-xl"
                            >
                                Se alle blog artikler
                                <ArrowRight className="ml-[var(--spacing-sm)] h-5 w-5" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>
            
            <NewsletterSignup />

            {/* Newsletter Popup */}
            <NewsletterPopup 
                isOpen={showNewsletterPopup} 
                onClose={() => setShowNewsletterPopup(false)} 
            />
        </AppLayout>
    );
}
