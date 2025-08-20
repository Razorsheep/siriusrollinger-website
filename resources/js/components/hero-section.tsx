export function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-red-50 to-white py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-red-900 mb-6">
                            Førstehjælp til din <span className="text-red-600">hund</span>
                        </h2>
                        <p className="text-xl text-red-700 mb-8 leading-relaxed">
                            Vi lærer dig både at forebygge og behandle skader på din hund, samt håndtere nødsituationer og give førstehjælp, når det er vigtigst. Sammen kan vi redde liv.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                                Book et kursus
                            </button>
                            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Læs mere
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-red-100 rounded-2xl p-8 shadow-xl">
                            <img
                                src="/images/logo.png"
                                alt="Førstehjælp til Hunde"
                                className="w-full h-auto max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}