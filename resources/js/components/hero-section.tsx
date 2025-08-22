export function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-[var(--color-red-50)] to-[var(--color-white)] py-[var(--spacing-4xl)] lg:py-[var(--spacing-5xl)]">
            <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                <div className="grid lg:grid-cols-2 gap-[var(--spacing-3xl)] items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl lg:text-6xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-lg)]">
                            Førstehjælp til din <span className="text-[var(--color-red-600)]">hund</span>
                        </h2>
                        <p className="text-xl text-[var(--color-red-700)] mb-[var(--spacing-xl)] leading-relaxed max-w-2xl lg:max-w-none">
                            Lær at håndtere nødsituationer og give din hund den bedste førstehjælp når det betyder mest
                        </p>
                        <div className="flex flex-col sm:flex-row gap-[var(--spacing-md)] justify-center lg:justify-start mb-[var(--spacing-3xl)]">
                            <button className="bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-[var(--color-white)] font-semibold py-[var(--spacing-sm)] px-[var(--spacing-xl)] rounded-[var(--radius-lg)] transition-colors shadow-lg hover:shadow-xl">
                                Kom i gang
                            </button>
                            <button className="border-2 border-[var(--color-red-600)] text-[var(--color-red-600)] hover:bg-[var(--color-red-600)] hover:text-[var(--color-white)] font-semibold py-[var(--spacing-sm)] px-[var(--spacing-xl)] rounded-[var(--radius-lg)] transition-colors">
                                Læs mere
                            </button>
                        </div>
                    </div>
                    
                    {/* Image */}
                    <div className="relative">
                        <div className="bg-[var(--color-red-100)] rounded-[var(--radius-2xl)] p-0 shadow-xl">
                            <img
                                src="/images/hero-image.jpg"
                                alt="Førstehjælp til hunde"
                                className="w-full h-full object-cover rounded-[var(--radius-2xl)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}