import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { ServicesSection } from '@/components/services-section';
import { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function Home() {
    const { settings, blogEntries, navigationItems } = usePage<SharedData>().props;
    
    console.log(navigationItems);
    return (
        <>
            <Head title="Førstehjælp til Hunde - Din Hunds Sikkerhed Kommer Først" />
            
            <Header settings={settings} navigationItems={navigationItems} />

            <HeroSection />

            <ServicesSection />

            {/* Latest Blog Entries Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-red-900 mb-4">
                            Seneste blog artikler
                        </h3>
                        <p className="text-xl text-red-700 max-w-3xl mx-auto">
                            Få de nyeste tips og guides om førstehjælp til hunde direkte fra vores eksperter
                        </p>
                    </div>

                                        {blogEntries && blogEntries.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                                    <article key={entry.id} className="bg-white border-2 border-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="aspect-video bg-red-100 rounded-lg overflow-hidden mb-4">
                                            <img
                                                src={entry.image_url || entry.image || '/images/logo.png'}
                                                alt={entry.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm text-red-600 mb-3">
                                            <span className="flex items-center">
                                                <User className="h-4 w-4 mr-1" />
                                                {entry.author || 'Julie Pio Kragelund'}
                                            </span>
                                            <span className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                {formatDate(entry.date)}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold text-red-900 mb-3">
                                            {entry.title}
                                        </h4>
                                        <p className="text-red-700 leading-relaxed mb-4">
                                            {entry.excerpt || (entry.content ? entry.content.substring(0, 120) + '...' : 'Ingen beskrivelse tilgængelig')}
                                        </p>
                                        <Link
                                            href={`/blog/${entry.slug}`}
                                            className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors group"
                                        >
                                            Læs mere
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-red-400 mb-4">
                                <Calendar className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-red-900 mb-2">
                                Ingen blog artikler endnu
                            </h3>
                            <p className="text-red-700">
                                Vi arbejder på at tilføje spændende indhold. Kom snart tilbage!
                            </p>
                        </div>
                    )}

                    {blogEntries && blogEntries.length > 0 && (
                        <div className="text-center">
                            <Link
                                href="/blog"
                                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                            >
                                Se alle blog artikler
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <NewsletterSignup />

            <Footer settings={settings} />
        </>
    );
}
