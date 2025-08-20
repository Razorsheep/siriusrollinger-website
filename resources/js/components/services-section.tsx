import { BookOpen, Heart, Lightbulb, ShoppingBag } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Førstehjælpskurser",
            description: "Lær grundlæggende førstehjælp til hunde gennem vores praktiske kurser",
            icon: Heart,
            color: "bg-red-100 text-red-700 border-red-200"
        },
        {
            title: "Foredrag",
            description: "Informative foredrag om hundesikkerhed og førstehjælp",
            icon: BookOpen,
            color: "bg-red-50 text-red-600 border-red-100"
        },
        {
            title: "Førstehjælpsgrej",
            description: "Kvalitetsudstyr til førstehjælp til din hund",
            icon: ShoppingBag,
            color: "bg-red-100 text-red-700 border-red-200"
        },
        {
            title: "Guides og gode råd",
            description: "Praktiske tips og vejledning til hundeejere",
            icon: Lightbulb,
            color: "bg-red-50 text-red-600 border-red-100"
        }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-3xl lg:text-4xl font-bold text-red-900 mb-4">
                        Vores ydelser
                    </h3>
                    <p className="text-xl text-red-700 max-w-3xl mx-auto">
                        Vi tilbyder alt fra praktiske kurser til kvalitetsudstyr, så du altid er klar til at hjælpe din hund
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${service.color}`}>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="h-8 w-8 text-red-600" />
                                </div>
                                <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                                <p className="text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}