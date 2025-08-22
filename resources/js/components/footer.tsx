import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export function Footer() {
    const { settings } = usePage<SharedData>().props;

    return (
        <footer className="bg-[var(--color-red-900)] text-[var(--color-white)] py-[var(--spacing-2xl)]">
            <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-xl)] lg:gap-[var(--spacing-2xl)]">
                    {/* Logo and description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-[var(--spacing-md)]">
                            <img src="/images/logo.png" alt="Logo" className="h-12 w-auto mr-[var(--spacing-sm)]" />
                            <h4 className="text-xl font-bold">Førstehjælp til Hunde</h4>
                        </div>
                        <p className="text-[var(--color-red-200)] leading-relaxed">
                            Vi er dedikerede til at hjælpe hundeejere med at lære førstehjælp, så de kan give deres kæledyr den bedste pleje når det betyder mest.
                        </p>
                    </div>

                    
                </div>

                {/* Quick links section */}
                <div className="mt-[var(--spacing-2xl)] pt-[var(--spacing-xl)] border-t border-[var(--color-red-800)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-xl)]">
                        <div>
                            <h5 className="font-semibold mb-[var(--spacing-md)] text-[var(--color-white)]">Hurtige links</h5>
                            <ul className="space-y-[var(--spacing-sm)] text-[var(--color-red-200)]">
                                <li><a href="/" className="hover:text-[var(--color-white)] transition-colors">Forside</a></li>
                                <li><a href="/blog" className="hover:text-[var(--color-white)] transition-colors">Blog</a></li>
                                <li><a href="/about" className="hover:text-[var(--color-white)] transition-colors">Om os</a></li>
                            </ul>
                        </div>
                        {/* <div>
                            <h5 className="font-semibold mb-[var(--spacing-md)] text-[var(--color-white)]">Ydelser</h5>
                            <ul className="space-y-[var(--spacing-sm)] text-[var(--color-red-200)]">
                                <li><a href="/courses" className="hover:text-[var(--color-white)] transition-colors">Kurser</a></li>
                                <li><a href="/services" className="hover:text-[var(--color-white)] transition-colors">Services</a></li>
                                <li><a href="/emergency" className="hover:text-[var(--color-white)] transition-colors">Akut hjælp</a></li>
                            </ul>
                        </div> */}
                        {/* <div>
                            <h5 className="font-semibold mb-[var(--spacing-md)] text-[var(--color-white)]">Ressourcer</h5>
                            <ul className="space-y-[var(--spacing-sm)] text-[var(--color-red-200)]">
                                <li><a href="/guides" className="hover:text-[var(--color-white)] transition-colors">Guides</a></li>
                                <li><a href="/faq" className="hover:text-[var(--color-white)] transition-colors">FAQ</a></li>
                                <li><a href="/newsletter" className="hover:text-[var(--color-white)] transition-colors">Nyhedsbrev</a></li>
                            </ul>
                        </div> */}
                        <div>
                            <h5 className="font-semibold mb-[var(--spacing-md)] text-[var(--color-white)]">Følg os</h5>
                            <ul className="space-y-[var(--spacing-sm)] text-[var(--color-red-200)]">
                                <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">Facebook</a></li>
                                <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-[var(--spacing-md)] text-[var(--color-white)]">Kontakt</h5>
                            
                            <ul className="space-y-[var(--spacing-sm)] text-[var(--color-red-200)]">
                                <li><a href="/contact" className="hover:text-[var(--color-white)] transition-colors">
                                <span className="mr-2">💬</span>
                                    Forespørgsler
                                </a></li>
                                {settings?.email && (
                                <div>
                                    <a 
                                        href={`mailto:${settings.email}`} 
                                        className="hover:text-[var(--color-white)] transition-colors flex items-center"
                                    >
                                        <span className="mr-2">📧</span>
                                        {settings.email}
                                    </a>
                                </div>
                            )}
                            {settings?.phone_number && (
                                <div>
                                    <a 
                                        href={`tel:${settings.phone_number}`} 
                                        className="hover:text-[var(--color-white)] transition-colors flex items-center"
                                    >
                                        <span className="mr-2">📞</span>
                                        {settings.phone_number}
                                    </a>
                                </div>
                            )}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright section */}
                <div className="border-t border-[var(--color-red-800)] mt-[var(--spacing-xl)] pt-[var(--spacing-xl)] text-center text-[var(--color-red-300)]">
                    <p>&copy; {new Date().getFullYear()} Førstehjælp til Hunde. Alle rettigheder forbeholdes.</p>
                </div>
            </div>
        </footer>
    );
}
