export function CtaSection() {
    return (
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
    );
}