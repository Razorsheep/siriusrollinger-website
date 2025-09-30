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
            
			<section className="py-20 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">SIRIUSROLLINGER og SIRIUS JUNIORDAGE</h3>
						<p className="text-xl text-muted-foreground">Mental og fysisk trivsel for børn og unge gennem fællesskab og natur</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						<div className="space-y-6 text-foreground leading-relaxed">
							<p>
								I en verden, hvor så meget foregår online, stillesiddende og indendørs, ønsker vi med foreningen
								Siriusrollinger at inspirere, stimulere og facilitere børn og unge til at komme mere ud og øge deres
								færdigheder, kompetencer, tryghed og glæde for naturen, friluftsliv og fællesskab. Rammesætningen er
								Slædepatruljen Sirius og dennes tilgang til natur, fællesskab, positivitet og eventyr.
							</p>
							<p>
								Med støtte fra Friluftsrådet og Den Arnstedske Familiefond har vi fået mulighed for at afholde to årlige
								Sirius Juniordage på henholdsvis Sjælland og i Jylland. Målgruppen er drenge og piger mellem 10 og 13 år.
								Udover Sirius Juniordagene ønsker vi at opbygge et netværk i form af en årlig Sirius Junior Festivaldag, hvor
								alle børn og unge, der tidligere har deltaget, mødes igen til opfølgende inspiration, fællesskab og hygge.
							</p>
							<div>
								<h4 className="text-2xl font-semibold text-primary mb-2">Baggrund</h4>
								<p>
									Et stigende antal børn og unge er udfordrede med stress, angst samt mental og fysisk mistrivsel, og særligt
									overgangen til teenageårene kan være svær. Forskning viser, at selvopfattelsen og spørgsmålet om “hvem er jeg,
									hvad er mine menneskelige værdier, og hvad vil jeg stå for” særligt udvikler sig i disse år. Her er det vigtigt
									med rollemodeller, fællesskaber og gode veje frem – netop det ønsker vi at understøtte med Sirius Juniordagene.
								</p>
								<p>
									Forskning viser ligeledes, at natur, friluftsliv og bevægelse blandt andet gør børn og unge mere robuste, øger
									selvværdet og reducerer stress. Desuden medfører det et sundere og stærkere immunforsvar, bedre motorisk
									udvikling og udgør et vigtigt alternativ til de mange fristelser online og på skærme. I april 2023 afholdt vi
									den første version af Sirius Juniordag-konceptet med stor tilslutning og succes.
								</p>
								<p>
									Selvom Slædepatruljen Sirius er et elitekorps, er det ikke det elitære, vi ønsker at dyrke. Det er tankegangen
									bag – opbygningen af hele mennesker med en bred og dyb kompetencepalette, et sundt og solidt selvværd og
									kundskaber til både at lave opbagt sovs og sy et sår på en hund, have hinandens ryg, gå 100 km over isen kun på
									en plade Ritter Sport, blive ved med en opgave, indtil alle er færdige, og kunne ændre kursen, når vejret eller
									forholdene kræver. Det handler ikke så meget om, hvad vi skal være, men om hvem vi gerne vil være som
									mennesker – og hvordan vi kommer derhen.
								</p>
							</div>
						</div>

						<div className="space-y-8">
							<div>
								<h4 className="text-2xl font-semibold text-primary mb-2">Hvem kan komme med?</h4>
								<p className="text-foreground/90 mb-2">For at komme med til Sirius Juniordag skal du:</p>
								<ul className="list-disc pl-6 text-foreground/90 space-y-1">
									<li>Være mellem 10 og 13 år</li>
									<li>Være nysgerrig på fællesskab, natur og Grønland</li>
									<li>Ansøge om at komme med, så vi ved, hvorfor det netop skal være dig, der får en af de 20 pladser (det kan være en mail, en video eller noget helt tredje)</li>
									<li>Have det helt fint med at være en dag alene uden dine forældre og sammen med os</li>
									<li>Vi lægger mere information og tilmelding op, når næste dato er planlagt</li>
								</ul>
							</div>

							<div>
								<h4 className="text-2xl font-semibold text-primary mb-2">Hvad indeholder en Sirius Juniordag?</h4>
								<p className="text-foreground/90 mb-2">Dagsprogrammet går fra kl. 09.00–15.00 og indeholder:</p>
								<ul className="list-disc pl-6 text-foreground/90 space-y-1">
									<li>Introduktion til Slædepatruljen Sirius</li>
									<li>Prøve kræfter med Forsvarets fysiske krav til optagelse ved Sirius</li>
									<li>Orienteringslære</li>
									<li>Bål og mad i det fri</li>
									<li>Vejr, flora og fauna</li>
									<li>Gruppedynamik og drømme</li>
									<li>Røverhistorier og rigtige historier</li>
									<li>Førstehjælp</li>
									<li>Noget hemmeligt og noget hyggeligt</li>
								</ul>
							</div>

							<div className="border rounded-lg p-6 bg-card">
								<h4 className="text-2xl font-semibold text-primary mb-2">Video</h4>
								<p className="text-foreground/90 mb-4">Du kan se en video fra vores første Sirius Juniordag her:</p>
								<div className="aspect-video rounded-md overflow-hidden bg-muted">
									<iframe
										title="Sirius Juniordag 2023"
										src="https://www.youtube-nocookie.com/embed/EP6Lfwb4FWc"
										className="w-full h-full"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            

            
            {/* Latest Blog Entries Section */}
			<section className="py-20 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            Seneste blog artikler
                        </h3>
						<p className="text-xl text-muted-foreground mx-auto">
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
									<article key={entry.id} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
										<div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                                            <img
                                                src={entry.featured_image_preview || entry.featured_image || '/images/logo.png'}
                                                alt={entry.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
										<div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                                            <span className="flex items-center">
												<User className="h-4 w-4 mr-1" />
                                                {entry.author?.name || 'Julie Pio Kragelund'}
                                            </span>
                                            <span className="flex items-center">
												<Calendar className="h-4 w-4 mr-1" />
                                                {formatDate(entry.date)}
                                            </span>
                                        </div>
										<h4 className="text-xl font-bold text-primary mb-2">
                                            {entry.title}
                                        </h4>
										<p className="text-foreground/90 leading-relaxed mb-4">
                                            {entry.excerpt || (entry.content && typeof entry.content === 'string' ? entry.content.substring(0, 120) + '...' : 'Ingen beskrivelse tilgængelig')}
                                        </p>
                                        <Link
                                            href={`/blog/${entry.slug}`}
											className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group"
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
							<div className="text-muted-foreground mb-4">
                                <Calendar className="h-16 w-16 mx-auto" />
                            </div>
							<h3 className="text-xl font-semibold text-primary mb-2">
                                Ingen blog artikler endnu
                            </h3>
							<p className="text-muted-foreground">
                                Vi arbejder på at tilføje spændende indhold. Kom snart tilbage!
                            </p>
                        </div>
                    )}

                    {blogEntries && blogEntries.length > 0 && (
                        <div className="text-center">
                            <Link
                                href="/blog"
								className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                            >
                                Se alle blog artikler
								<ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    )}
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
