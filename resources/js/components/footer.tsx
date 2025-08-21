export function Footer({ settings }: { settings: { email?: string; phone_number?: string } }) {
    return (

        <footer className="bg-red-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <img src="/images/logo.png" alt="Logo" className="h-12 w-auto mr-3" />
                            <h4 className="text-xl font-bold">Førstehjælp til Hunde</h4>
                        </div>
                        <p className="text-red-200 mb-4">
                            Din pålidelige partner i hundesikkerhed og førstehjælp.
                            Vi hjælper dig med at beskytte det, du holder af mest.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-4">Hurtige links</h5>
                        <ul className="space-y-2 text-red-200">
                            <li><a href="#" className="hover:text-white transition-colors">Forside</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Om os</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-4">Kontakt</h5>
                        <ul className="space-y-2 text-red-200">
                            <li><a href={`mailto:${settings.email}`} className="hover:text-white transition-colors">{settings.email}</a></li>
                            <li><a href={`tel:${settings.phone_number}`} className="hover:text-white transition-colors">{settings.phone_number}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-red-800 mt-8 pt-8 text-center text-red-300">
                    <p>&copy; 2025 Førstehjælp til Hunde. Alle rettigheder forbeholdes.</p>
                </div>
            </div>
        </footer>

    )
}
