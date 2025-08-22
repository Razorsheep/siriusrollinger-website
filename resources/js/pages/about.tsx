import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Heart, BookOpen, ShoppingBag, Lightbulb } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

export default function About() {
    //const { settings } = usePage<SharedData>().props;

    const services = [
        {
            title: "Førstehjælpskurser",
            description: "Lær grundlæggende førstehjælp til hunde gennem vores praktiske kurser",
            icon: Heart,
            color: "bg-[var(--color-red-100)] text-[var(--color-red-700)] border-[var(--color-red-200)]"
        },
        {
            title: "Foredrag",
            description: "Informative foredrag om hundesikkerhed og førstehjælp",
            icon: BookOpen,
            color: "bg-[var(--color-red-50)] text-[var(--color-red-600)] border-[var(--color-red-100)]"
        },
        {
            title: "Førstehjælpsgrej",
            description: "Kvalitetsudstyr til førstehjælp til din hund",
            icon: ShoppingBag,
            color: "bg-[var(--color-red-100)] text-[var(--color-red-700)] border-[var(--color-red-200)]"
        },
        {
            title: "Guides og gode råd",
            description: "Praktiske tips og vejledning til hundeejere",
            icon: Lightbulb,
            color: "bg-[var(--color-red-50)] text-[var(--color-red-600)] border-[var(--color-red-100)]"
        }
    ];

    return (
        <>
            <AppLayout>
                {/* About Section */}
                <section className="py-[var(--spacing-4xl)] bg-[var(--color-white)]">
                    <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                        <div className="text-center mb-[var(--spacing-3xl)]">
                            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)]">
                                Om os
                            </h3>
                            <p className="text-xl text-[var(--color-red-700)] max-w-3xl mx-auto mb-[var(--spacing-xl)]">
                                Din pålidelige partner i hundesikkerhed og førstehjælp
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-[var(--color-red-50)] rounded-[var(--radius-2xl)] p-[var(--spacing-xl)] mb-[var(--spacing-xl)]">
                                <h4 className="text-2xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)] text-center">
                                    Dyrlæge i ørken og Arktis
                                </h4>
                                <div className="space-y-[var(--spacing-md)] text-[var(--color-red-800)] leading-relaxed">
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

                            <div className="bg-[var(--color-white)] border-2 border-[var(--color-red-200)] rounded-[var(--radius-2xl)] p-[var(--spacing-xl)] mb-[var(--spacing-xl)]">
                                <h4 className="text-xl font-semibold text-[var(--color-red-900)] mb-[var(--spacing-md)]">
                                    Erfaring og ekspertise
                                </h4>
                                <div className="space-y-[var(--spacing-md)] text-[var(--color-red-800)] leading-relaxed">
                                    <p>
                                        Julie har holdt adskillige kurser om sundhed, sygdom og førstehjælp for blandt andet for jægere, politihunde, canicrosshunde og andre arbejds- og brugshunde.
                                    </p>
                                    <p>
                                        Hun er desuden uddannet fagjournalist og indenfor voksenpædagogik, og sætter en ære i at formidle og gøre viden forståeligt og praktisk anvendeligt.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[var(--color-red-50)] rounded-[var(--radius-2xl)] p-[var(--spacing-xl)]">
                                <h4 className="text-xl font-semibold text-[var(--color-red-900)] mb-[var(--spacing-md)]">
                                    Forfatterskab
                                </h4>
                                <p className="text-[var(--color-red-800)] leading-relaxed">
                                    Julie er forfatter til 3 bøger om friluftsliv for familier med serien "Friluftsrollinger", samt bogen "Førstehjælp og friluftsliv – sådan håndterer du skader i naturen".
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-[var(--spacing-4xl)] bg-[var(--color-white)]">
                    <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                        <div className="text-center mb-[var(--spacing-3xl)]">
                            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)]">
                                Vores ydelser
                            </h3>
                            <p className="text-xl text-[var(--color-red-700)] max-w-3xl mx-auto">
                                Vi tilbyder alt fra praktiske kurser til kvalitetsudstyr, så du altid er klar til at hjælpe din hund
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-xl)]">
                            {services.map((service, index) => (
                                <div key={index} className={`group p-[var(--spacing-lg)] rounded-[var(--radius-xl)] border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${service.color}`}>
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-white)] rounded-full mb-[var(--spacing-md)] group-hover:scale-110 transition-transform">
                                            <service.icon className="h-8 w-8 text-[var(--color-red-600)]" />
                                        </div>
                                        <h4 className="text-lg font-semibold mb-[var(--spacing-sm)]">{service.title}</h4>
                                        <p className="text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-[var(--spacing-4xl)] bg-[var(--color-red-600)]">
                    <div className="max-w-4xl mx-auto text-center px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                        <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-white)] mb-[var(--spacing-lg)]">
                            Er du klar til at blive din hunds helt?
                        </h3>
                        <p className="text-xl text-[var(--color-red-100)] mb-[var(--spacing-xl)]">
                            Tilmeld dig et af vores kurser i dag og få den viden, der kan redde liv
                        </p>
                        <button className="bg-[var(--color-white)] text-[var(--color-red-600)] hover:bg-[var(--color-red-50)] font-semibold py-[var(--spacing-md)] px-[var(--spacing-2xl)] rounded-[var(--radius-lg)] transition-colors shadow-lg hover:shadow-xl text-lg">
                            Kom i gang nu
                        </button>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
