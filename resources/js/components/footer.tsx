import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export function Footer() {
    const { settings } = usePage<SharedData>().props;

    return (
        <footer className="bg-[var(--color-red-900)] text-[var(--color-white)] py-[var(--spacing-2xl)]">
            <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                <div className="grid md:grid-cols-3 gap-[var(--spacing-2xl)]">
                    <div className="flex items-center mb-[var(--spacing-md)]">
                        <img src="/images/logo.png" alt="Logo" className="h-12 w-auto mr-[var(--spacing-sm)]" />
                        <h4 className="text-xl font-bold">Førstehjælp til Hunde</h4>
                    </div>
                    <p className="text-[var(--color-red-200)] mb-[var(--spacing-md)]">
                        Vi er dedikerede til at hjælpe hundeejere med at lære førstehjælp, så de kan give deres kæledyr den bedste pleje når det betyder mest.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-[var(--spacing-2xl)] mt-[var(--spacing-2xl)]">
                    <div>
                        <h5 className="font-semibold mb-[var(--spacing-md)]">Hurtige links</h5>
                        <ul className="space-y-[var(--spacing-sm)] text-[var(--color-red-200)]">
                            <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">Forside</a></li>
                            <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">Om os</a></li>
                            <li><a href="#" className="hover:text-[var(--color-white)] transition-colors">Kontakt</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-[var(--spacing-md)]">Kontakt</h5>
                        <ul className="space-y-[var(--spacing-sm)] text-[var(--color-red-200)]">
                            <li><a href={`mailto:${settings.email}`} className="hover:text-[var(--color-white)] transition-colors">{settings.email}</a></li>
                            <li><a href={`tel:${settings.phone_number}`} className="hover:text-[var(--color-white)] transition-colors">{settings.phone_number}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--color-red-800)] mt-[var(--spacing-xl)] pt-[var(--spacing-xl)] text-center text-[var(--color-red-300)]">
                    <p>&copy; {new Date().getFullYear()} Førstehjælp til Hunde. Alle rettigheder forbeholdes.</p>
                </div>
            </div>
        </footer>
    );
}
