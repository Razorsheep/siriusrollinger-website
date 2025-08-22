import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

export default function Contact() {
    return (
        <AppLayout>
            <main className="min-h-screen bg-gradient-to-br from-[var(--color-red-50)] to-[var(--color-white)]">
                {/* Hero Section */}
                <section className="py-[var(--spacing-4xl)] lg:py-[var(--spacing-5xl)]">
                    <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)] text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-lg)]">
                            Kontakt os
                        </h1>
                        <div className="w-24 h-1 bg-[var(--color-red-600)] mx-auto mb-[var(--spacing-xl)]"></div>
                        <p className="text-xl text-[var(--color-red-700)] mx-auto">
                            Har du spørgsmål om vores kurser eller ønsker du at høre mere? Vi er her for at hjælpe!
                        </p>
                    </div>
                </section>

                {/* Contact Information & Form Section - Two Column Layout */}
                <section className="py-[var(--spacing-3xl)]">
                    <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                        <div className="grid lg:grid-cols-2 gap-[var(--spacing-3xl)]">
                            {/* Left Column - Contact Information */}
                            <div className="space-y-[var(--spacing-2xl)]">
                                {/* Contact Details */}
                                <div>
                                    <h2 className="text-2xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-lg)]">
                                        Kontaktoplysninger
                                    </h2>
                                    <div className="space-y-[var(--spacing-lg)]">
                                        {/* Email */}
                                        <div className="flex items-start space-x-[var(--spacing-md)]">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-red-100)] rounded-full flex items-center justify-center">
                                                <Mail className="h-6 w-6 text-[var(--color-red-600)]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[var(--color-red-900)] mb-[var(--spacing-xs)]">Email</h3>
                                                <p className="text-[var(--color-red-700)]">
                                                    <a href="mailto:kontakt@firstaiddog.dk" 
                                                       className="hover:text-[var(--color-red-800)] transition-colors">
                                                        kontakt@firstaiddog.dk
                                                    </a>
                                                </p>
                                                <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">
                                                    Vi svarer inden for 24 timer
                                                </p>
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-start space-x-[var(--spacing-md)]">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-red-100)] rounded-full flex items-center justify-center">
                                                <Phone className="h-6 w-6 text-[var(--color-red-600)]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[var(--color-red-900)] mb-[var(--spacing-xs)]">Telefon</h3>
                                                <p className="text-[var(--color-red-700)]">
                                                    <a href="tel:+4512345678" 
                                                       className="hover:text-[var(--color-red-800)] transition-colors">
                                                        +45 12 34 56 78
                                                    </a>
                                                </p>
                                                <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">
                                                    Mandag-Fredag 9:00-17:00
                                                </p>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-start space-x-[var(--spacing-md)]">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-red-100)] rounded-full flex items-center justify-center">
                                                <MapPin className="h-6 w-6 text-[var(--color-red-600)]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[var(--color-red-900)] mb-[var(--spacing-xs)]">Lokation</h3>
                                                <p className="text-[var(--color-red-700)]">
                                                    København, Danmark
                                                </p>
                                                <p className="text-[var(--color-red-600)] text-sm mt-[var(--spacing-xs)]">
                                                    Kurser afholdes på forskellige lokationer
                                                </p>
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className="flex items-start space-x-[var(--spacing-md)]">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-red-100)] rounded-full flex items-center justify-center">
                                                <Clock className="h-6 w-6 text-[var(--color-red-600)]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[var(--color-red-900)] mb-[var(--spacing-xs)]">Åbningstider</h3>
                                                <p className="text-[var(--color-red-700)]">
                                                    Mandag-Fredag: 9:00-17:00
                                                </p>
                                                <p className="text-[var(--color-red-700)]">
                                                    Weekend: Efter aftale
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="bg-[var(--color-red-50)] rounded-[var(--radius-xl)] p-[var(--spacing-lg)]">
                                    <h3 className="text-lg font-semibold text-[var(--color-red-900)] mb-[var(--spacing-sm)]">
                                        Ofte stillede spørgsmål
                                    </h3>
                                    <p className="text-[var(--color-red-700)] text-sm leading-relaxed">
                                        Find svar på de mest almindelige spørgsmål om vores kurser og tjenester. 
                                        Hvis du ikke finder svaret her, er du velkommen til at kontakte os direkte.
                                    </p>
                                </div>

                            </div>

                            {/* Right Column - Contact Form */}
                            <div className="lg:pl-[var(--spacing-xl)]">
                                    <ContactForm />
                                
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AppLayout>
    );
}
