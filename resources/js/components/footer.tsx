import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export function Footer() {
    const { settings } = usePage<SharedData>().props;

    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Logo and description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            {/* <img src="/images/logo.png" alt="Logo" className="h-12 w-auto mr-2" /> */}
                            <h4 className="text-xl font-bold">Sirius Rollinger</h4>
                        </div>
                        <p className="text-primary-foreground/80 leading-relaxed">
                            {settings?.footer_text}
                        </p>
                    </div>

                    
                </div>

                {/* Quick links section */}
                <div className="mt-12 pt-8 border-t border-primary/40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div>
                            <h5 className="font-semibold mb-4 text-primary-foreground">Hurtige links</h5>
                            <ul className="space-y-2 text-primary-foreground/80">
                                <li><a href="/" className="hover:text-primary-foreground transition-colors">Forside</a></li>
                                <li><a href="/blog" className="hover:text-primary-foreground transition-colors">Blog</a></li>
                                <li><a href="/about" className="hover:text-primary-foreground transition-colors">Om os</a></li>
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
                        {/* <div>
                            <h5 className="font-semibold mb-[var(--spacing-md)] text-[var(--color-white)]">Følg os</h5>
                            <ul className="space-y-[var(--spacing-sm)] text-[var(--color-red-200)]">
                                <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">Facebook</a></li>
                                <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">LinkedIn</a></li>
                            </ul>
                        </div> */}
                        <div>
                            <h5 className="font-semibold mb-4 text-primary-foreground">Kontakt</h5>

                            <ul className="space-y-2 text-primary-foreground/80">
                                
                                {settings?.email && (
                                <div>
                                    <a 
                                        href={`mailto:${settings.email}`} 
                                        className="hover:text-primary-foreground transition-colors flex items-center"
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
                                        className="hover:text-primary-foreground transition-colors flex items-center"
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
                <div className="border-t border-primary/40 mt-8 pt-8 text-center text-primary-foreground/70">
                    <p>&copy; {new Date().getFullYear()} Sirius Rollinger. Alle rettigheder forbeholdes.</p>
                </div>
            </div>
        </footer>
    );
}
