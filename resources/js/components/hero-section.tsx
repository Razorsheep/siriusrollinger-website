import { Button } from "./ui/button";
import { Link, usePage } from "@inertiajs/react";
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious 
} from "./ui/carousel";
import { SharedData } from "@/types";
import { useEffect, useState } from "react";

export function HeroSection() {
    const { settings } = usePage<SharedData>().props;
    const [api, setApi] = useState<any>(null);
    const [current, setCurrent] = useState(0);
    
    // Get hero images from settings or fallback to default image
    const heroImages = settings?.hero_images && settings.hero_images.length > 0 
        ? settings.hero_images.map((image: string) => image.startsWith('https') ? image : `/storage/${image}`)
        : ['/images/hero-image.jpeg'];

    // Auto-play functionality
    useEffect(() => {
        if (!api || heroImages.length <= 1) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [api, heroImages.length]);

    // Track current slide
    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="relative">
            {/* Full-width Image Carousel */}
            <div className="w-full">
                <Carousel 
                    className="w-full" 
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-0">
                        {heroImages.map((image: string, index: number) => (
                            <CarouselItem key={index} className="pl-0">
                                <div className="aspect-video w-full relative">
                                    <img
                                        src={image}
                                        alt={`Sirius Rollinger ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay with text content */}
                                    <div className="absolute inset-0 bg-primary/20 flex items-center">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                            <div className="max-w-2xl">
                                                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                                                    Sirius <span className="text-destructive">Rollinger</span>
                                                </h2>
                                                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                                    Mental og fysisk trivsel for børn og unge gennem fællesskab og natur
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-4">
                                                    <Button asChild className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold py-2 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                                                        <Link href="/contact">
                                                            Kontakt os
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {heroImages.length > 1 && (
                        <>
                            <CarouselPrevious className="left-4 bg-background/80 hover:bg-background text-foreground border-border" />
                            <CarouselNext className="right-4 bg-background/80 hover:bg-background text-foreground border-border" />
                        </>
                    )}
                </Carousel>
                
                {/* Dots indicator */}
                {heroImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {heroImages.map((_: string, index: number) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    index === current 
                                        ? 'bg-destructive' 
                                        : 'bg-background/50 hover:bg-background/75'
                                }`}
                                onClick={() => api?.scrollTo(index)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}