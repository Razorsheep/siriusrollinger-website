import { HeroSection } from '@/components/hero-section';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { NewsletterPopup } from '@/components/newsletter-popup';
import { ServicesSection } from '@/components/services-section';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Calendar, User, ArrowRight, Users, MapPin, Clock, Star, CheckCircle, Mountain, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import AppLayout from '@/layouts/app-layout';

export default function Home() {
    const { blogEntries } = usePage<SharedData>().props;
    const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);

    // Show newsletter popup after 3 seconds, but only if user hasn't dismissed it before
    useEffect(() => {
        const hasDismissed = localStorage.getItem('newsletter-popup-dismissed');
        // const hasDismissed = false;
        
        if (!hasDismissed) {
            const timer = setTimeout(() => {
                setShowNewsletterPopup(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <AppLayout>
            <HeroSection />
            
            {/* Statistics Section */}
            {/* <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            Sirius Rollinger i tal
                        </h3>
                        <p className="text-xl text-muted-foreground">
                            Vi har skabt positive oplevelser for børn og unge siden 2023
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">200+</div>
                            <div className="text-sm text-muted-foreground">Børn inspireret</div>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                <Mountain className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">15</div>
                            <div className="text-sm text-muted-foreground">Juniordage afholdt</div>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                <MapPin className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">2</div>
                            <div className="text-sm text-muted-foreground">Lokationer</div>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                <Heart className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">98%</div>
                            <div className="text-sm text-muted-foreground">Tilfredshed</div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* About Section */}
			<section className="py-24 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-20">
						<h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6">SIRIUSROLLINGER og SIRIUS JUNIORDAGE</h3>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Mental og fysisk trivsel for børn og unge gennem fællesskab og natur
                        </p>
						<p>
							I en verden, hvor så meget foregår online, stillesiddende og indendørs, ønsker vi med foreningen
							Siriusrollinger at inspirere, stimulere og facilitere børn og unge til at komme mere ud og øge deres
							færdigheder, kompetencer, tryghed og glæde for naturen, friluftsliv og fællesskab.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div className="space-y-8">
                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                                        <Mountain className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-primary">Vores Mission</h4>
                                </div>
                                <p className="text-foreground/90 leading-relaxed">
                                    
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-primary">Vores Tilgang</h4>
                                </div>
                                <p className="text-foreground/90 leading-relaxed">
                                    Med støtte fra Friluftsrådet og Den Arnstedske Familiefond afholder vi to årlige
                                    Sirius Juniordage på henholdsvis Sjælland og i Jylland. Målgruppen er drenge og piger mellem 10 og 13 år.
                                </p>
                            </div>
						</div>

						<div className="space-y-8">
                            <div className="bg-card border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                                        <CheckCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-primary">Hvem kan komme med?</h4>
                                </div>
                                <p className="text-foreground/90 mb-4">For at komme med til Sirius Juniordag skal du:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-foreground/90">Være mellem 10 og 13 år</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-foreground/90">Være nysgerrig på fællesskab, natur og Grønland</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-foreground/90">Ansøge om at komme med - vi vil gerne vide, hvorfor det skal være dig</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-foreground/90">Have det fint med at være en dag alene uden forældre</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-card border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-primary">Hvad indeholder en Sirius Juniordag?</h4>
                                </div>
                                <p className="text-foreground/90 mb-4">Dagsprogrammet går fra kl. 09.00–15.00 og indeholder:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {[
                                        "Introduktion til Slædepatruljen Sirius",
                                        "Fysiske krav og udfordringer",
                                        "Orienteringslære",
                                        "Bål og mad i det fri",
                                        "Vejr, flora og fauna",
                                        "Gruppedynamik og drømme",
                                        "Røverhistorier og rigtige historier",
                                        "Førstehjælp",
                                        "Noget hemmeligt og hyggeligt"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-foreground/90">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
						</div>
					</div>
				</div>
			</section>

            {/* Video Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            Se Sirius Juniordag i aktion
                        </h3>
                        <p className="text-xl text-muted-foreground">
                            Få et indblik i vores første Sirius Juniordag fra 2023
                        </p>
                    </div>
                    
                    <div className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted">
                            <iframe
                                title="Sirius Juniordag 2023"
                                src="https://www.youtube-nocookie.com/embed/EP6Lfwb4FWc"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Star className="h-5 w-5 text-primary-foreground" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Section */}
            <section className="py-24 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Baggrund og Vision</h3>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 mb-8">
                            <h4 className="text-2xl font-semibold text-primary mb-4">Udfordringerne</h4>
                            <p className="text-foreground/90 leading-relaxed mb-4">
                                Et stigende antal børn og unge er udfordrede med stress, angst samt mental og fysisk mistrivsel, og særligt
                                overgangen til teenageårene kan være svær. Forskning viser, at selvopfattelsen og spørgsmålet om "hvem er jeg,
                                hvad er mine menneskelige værdier, og hvad vil jeg stå for" særligt udvikler sig i disse år.
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 mb-8">
                            <h4 className="text-2xl font-semibold text-primary mb-4">Løsningen</h4>
                            <p className="text-foreground/90 leading-relaxed mb-4">
                                Forskning viser ligeledes, at natur, friluftsliv og bevægelse blandt andet gør børn og unge mere robuste, øger
                                selvværdet og reducerer stress. Desuden medfører det et sundere og stærkere immunforsvar, bedre motorisk
                                udvikling og udgør et vigtigt alternativ til de mange fristelser online og på skærme.
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                            <h4 className="text-2xl font-semibold text-primary mb-4">Vores Filosofi</h4>
                            <p className="text-foreground/90 leading-relaxed">
                                Selvom Slædepatruljen Sirius er et elitekorps, er det ikke det elitære, vi ønsker at dyrke. Det er tankegangen
                                bag – opbygningen af hele mennesker med en bred og dyb kompetencepalette, et sundt og solidt selvværd og
                                kundskaber til både at lave opbagt sovs og sy et sår på en hund, have hinandens ryg, og kunne ændre kursen, når vejret eller
                                forholdene kræver.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            

            
            {/* Latest Blog Entries Section */}
			<section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-20">
						<h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                            Seneste blog artikler
                        </h3>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Få de nyeste tips og guides om førstehjælp til hunde direkte fra vores eksperter
                        </p>
                    </div>

					{blogEntries && blogEntries.length > 0 ? (
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
									<article key={entry.id} className="bg-card border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
										<div className="aspect-video bg-muted rounded-xl overflow-hidden mb-6 group-hover:rounded-2xl transition-all duration-300">
                                            <img
                                                src={entry.featured_image_preview || entry.featured_image || '/images/logo.png'}
                                                alt={entry.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
										<div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                                            <span className="flex items-center bg-primary/10 px-3 py-1 rounded-full">
												<User className="h-3 w-3 mr-1" />
                                                {entry.author?.name || 'Julie Pio Kragelund'}
                                            </span>
                                            <span className="flex items-center bg-primary/10 px-3 py-1 rounded-full">
												<Calendar className="h-3 w-3 mr-1" />
                                                {formatDate(entry.date)}
                                            </span>
                                        </div>
										<h4 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                                            {entry.title}
                                        </h4>
										<p className="text-foreground/90 leading-relaxed mb-6">
                                            {entry.excerpt || (entry.content && typeof entry.content === 'string' ? entry.content.substring(0, 120) + '...' : 'Ingen beskrivelse tilgængelig')}
                                        </p>
                                        <Link
                                            href={`/blog/${entry.slug}`}
											className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group/link"
                                        >
                                            Læs mere
											<ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
						<div className="text-center py-20">
							<div className="text-muted-foreground mb-6">
                                <Calendar className="h-20 w-20 mx-auto" />
                            </div>
							<h3 className="text-2xl font-semibold text-primary mb-4">
                                Ingen blog artikler endnu
                            </h3>
							<p className="text-muted-foreground text-lg">
                                Vi arbejder på at tilføje spændende indhold. Kom snart tilbage!
                            </p>
                        </div>
                    )}

                    {blogEntries && blogEntries.length > 0 && (
                        <div className="text-center">
                            <Link
                                href="/blog"
								className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Se alle blog artikler
								<ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    )}
                </div>
			</section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                            <Heart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Er du klar til at blive en del af Sirius Juniordag?
                        </h3>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Tilmeld dig vores kommende event og få en oplevelse, der vil forme dig som menneske og give dig venskaber for livet
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-white text-primary hover:bg-white/90 font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
                        >
                            Kontakt os i dag
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="/blog"
                            className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-10 rounded-xl transition-all duration-300"
                        >
                            Læs vores blog
                        </Link>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white/80">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-1">20</div>
                            <div className="text-sm">Pladser per event</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-1">6</div>
                            <div className="text-sm">Timer aktivitet</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-1">100%</div>
                            <div className="text-sm">Sikker oplevelse</div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <NewsletterSignup /> */}

            {/* Newsletter Popup */}
            {/* <NewsletterPopup 
                isOpen={showNewsletterPopup} 
                onClose={() => setShowNewsletterPopup(false)} 
            /> */}
        </AppLayout>
    );
}
