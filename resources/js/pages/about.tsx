import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Heart, BookOpen, ShoppingBag, Lightbulb } from 'lucide-react';

export default function About() {
    const { settings, navigationItems, seo } = usePage<SharedData>().props;

    const services = [
        {
            title: "Førstehjælpskurser",
            description: "Lær grundlæggende førstehjælp til hunde gennem vores praktiske kurser",
            icon: Heart,
            color: "bg-red-100 text-red-700 border-red-200"
        },
        {
            title: "Foredrag",
            description: "Informative foredrag om hundesikkerhed og førstehjælp",
            icon: BookOpen,
            color: "bg-red-50 text-red-600 border-red-100"
        },
        {
            title: "Førstehjælpsgrej",
            description: "Kvalitetsudstyr til førstehjælp til din hund",
            icon: ShoppingBag,
            color: "bg-red-100 text-red-700 border-red-200"
        },
        {
            title: "Guides og gode råd",
            description: "Praktiske tips og vejledning til hundeejere",
            icon: Lightbulb,
            color: "bg-red-50 text-red-600 border-red-100"
        }
    ];
    
    return (
        <>
            <Head>
                <title>{seo?.meta_title || 'Om os - Førstehjælp til Hunde'}</title>
                <meta name="description" content={seo?.meta_description || 'Lær om Julie Pio Kragelund, dyrlæge og ekspert i hundesikkerhed og førstehjælp. Erfaren i militære arbejdshunde og taktisk førstehjælp.'} />
                <meta name="keywords" content={seo?.meta_keywords || 'om os, julie pio kragelund, dyrlæge, hundesikkerhed, førstehjælp til hunde, militære arbejdshunde, denmark'} />
                <meta name="author" content={seo?.author || 'Førstehjælp til Hunde'} />
                <meta name="robots" content={`${seo?.robots_index ? 'index' : 'nofollow'}, ${seo?.robots_follow ? 'follow' : 'nofollow'}`} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content={seo?.og_type || 'website'} />
                <meta property="og:url" content={seo?.canonical_url || window.location.href} />
                <meta property="og:title" content={seo?.og_title || 'Om os - Førstehjælp til Hunde'} />
                <meta property="og:description" content={seo?.og_description || 'Lær om Julie Pio Kragelund, dyrlæge og ekspert i hundesikkerhed og førstehjælp. Erfaren i militære arbejdshunde og taktisk førstehjælp.'} />
                <meta property="og:image" content={seo?.og_image || '/images/logo.png'} />
                <meta property="og:site_name" content="Førstehjælp til Hunde" />
                <meta property="og:locale" content="da_DK" />
                
                {/* Twitter */}
                <meta name="twitter:card" content={seo?.twitter_card || 'summary_large_image'} />
                <meta name="twitter:title" content={seo?.twitter_title || 'Om os - Førstehjælp til Hunde'} />
                <meta name="twitter:description" content={seo?.twitter_description || 'Lær om Julie Pio Kragelund, dyrlæge og ekspert i hundesikkerhed og førstehjælp. Erfaren i militære arbejdshunde og taktisk førstehjælp.'} />
                <meta name="twitter:image" content={seo?.twitter_image || '/images/logo.png'} />
                
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
                        "@type": "Person",
                        "name": "Julie Pio Kragelund",
                        "jobTitle": "Dyrlæge og Ekspert i Hundesikkerhed",
                        "description": "Julie Pio Kragelund er uddannet dyrlæge i 2005 og har specialiseret sig i hundesikkerhed og førstehjælp. Hun har omfattende erfaring med militære arbejdshunde og taktisk førstehjælp.",
                        "alumniOf": {
                            "@type": "Organization",
                            "name": "Forsvaret"
                        },
                        "knowsAbout": [
                            "Hundesikkerhed",
                            "Førstehjælp til hunde",
                            "Militære arbejdshunde",
                            "Taktisk førstehjælp",
                            "Veterinær genoplivning"
                        ],
                        "author": [
                            {
                                "@type": "Book",
                                "name": "Friluftsrollinger",
                                "description": "Serie om friluftsliv for familier"
                            },
                            {
                                "@type": "Book",
                                "name": "Førstehjælp og friluftsliv – sådan håndterer du skader i naturen",
                                "description": "Praktisk guide til førstehjælp i naturen"
                            }
                        ],
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Førstehjælp til Hunde"
                        }
                    })
                }}
            />
            
            <Header navigationItems={navigationItems || []} />

                



            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-red-900 mb-4">
                            Om os
                        </h3>
                        <p className="text-xl text-red-700 max-w-3xl mx-auto mb-8">
                            Din pålidelige partner i hundesikkerhed og førstehjælp
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-red-50 rounded-2xl p-8 mb-8">
                            <h4 className="text-2xl font-bold text-red-900 mb-4 text-center">
                                Dyrlæge i ørken og Arktis
                            </h4>
                            <div className="space-y-4 text-red-800 leading-relaxed">
                                <p>
                                    Julie Pio Kragelund er uddannet dyrlæge i 2005 og har arbejdet på dyrehospitaler og klinikker i Danmark og Sverige. Siden 2013 har hun været ansat i Forsvaret og arbejdet med de militære arbejdshunde, herunder Slædepatruljen Sirius og Jægerkorpsets specialhunde.
                                </p>
                                <p>
                                    Julie har udviklet og afholdt adskillige kurser og uddannelser i det danske forsvar indenfor sygdomsforebyggelse, sundhed og førstehjælp for de militære arbejdshunde og hundeførerne.
                                </p>
                                <p>
                                    Derudover er Julie uddannet i NATO-regi som instruktør i taktisk førstehjælp på hund, og i RECOVER som er en internationalt anerkendt organisation indenfor veterinær genoplivning og førstehjælp.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white border-2 border-red-200 rounded-2xl p-8 mb-8">
                            <h4 className="text-xl font-semibold text-red-900 mb-4">
                                Erfaring og ekspertise
                            </h4>
                            <div className="space-y-4 text-red-800 leading-relaxed">
                                <p>
                                    Julie har holdt adskillige kurser om sundhed, sygdom og førstehjælp for blandt andet for jægere, politihunde, canicrosshunde og andre arbejds- og brugshunde.
                                </p>
                                <p>
                                    Hun er desuden uddannet fagjournalist og indenfor voksenpædagogik, og sætter en ære i at formidle og gøre viden forståeligt og praktisk anvendeligt.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-red-50 rounded-2xl p-8">
                            <h4 className="text-xl font-semibold text-red-900 mb-4">
                                Forfatterskab
                            </h4>
                            <p className="text-red-800 leading-relaxed">
                                Julie er forfatter til 3 bøger om friluftsliv for familier med serien "Friluftsrollinger", samt bogen "Førstehjælp og friluftsliv – sådan håndterer du skader i naturen".
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-red-900 mb-4">
                            Vores ydelser
                        </h3>
                        <p className="text-xl text-red-700 max-w-3xl mx-auto">
                            Vi tilbyder alt fra praktiske kurser til kvalitetsudstyr, så du altid er klar til at hjælpe din hund
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${service.color}`}>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                                        <service.icon className="h-8 w-8 text-red-600" />
                                    </div>
                                    <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                                    <p className="text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Er du klar til at blive din hunds helt?
                    </h3>
                    <p className="text-xl text-red-100 mb-8">
                        Tilmeld dig et af vores kurser i dag og få den viden, der kan redde liv
                    </p>
                    <button className="bg-white text-red-600 hover:bg-red-50 font-semibold py-4 px-10 rounded-lg transition-colors shadow-lg hover:shadow-xl text-lg">
                        Kom i gang nu
                    </button>
                </div>
            </section>

            <Footer settings={settings} />
        </>
    );
}
