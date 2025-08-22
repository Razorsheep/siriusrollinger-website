import { BookOpen, Heart, Lightbulb, ShoppingBag } from "lucide-react";

export function ServicesSection() {
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
        <section className="py-[var(--spacing-4xl)] bg-[var(--color-white)]">
            <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
                <div className="text-center mb-[var(--spacing-3xl)]">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)]">
                        Vores ydelser
                    </h3>
                    <p className="text-xl text-[var(--color-red-700)] mx-auto">
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
    );
}