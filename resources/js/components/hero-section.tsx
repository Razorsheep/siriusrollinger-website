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
    const [imageBrightness, setImageBrightness] = useState<boolean[]>([]);
    
    // Get hero images from settings or fallback to default image
    const heroImages = settings?.hero_images && settings.hero_images.length > 0 
        ? settings.hero_images.map((image: string) => image.startsWith('https') ? image : `/storage/${image}`)
        : ['/images/hero-image.jpeg'];

    // Function to detect image brightness for adaptive overlay
    const detectImageBrightness = (imageSrc: string, index: number) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            let brightness = 0;
            
            // Sample every 10th pixel for performance
            for (let i = 0; i < data.length; i += 40) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                brightness += (r * 299 + g * 587 + b * 114) / 1000;
            }
            
            const avgBrightness = brightness / (data.length / 40);
            const isBright = avgBrightness > 128; // Threshold for bright images
            
            setImageBrightness(prev => {
                const newBrightness = [...prev];
                newBrightness[index] = isBright;
                return newBrightness;
            });
        };
        img.src = imageSrc;
    };

    // Detect brightness for all images on component mount
    useEffect(() => {
        heroImages.forEach((image: string, index: number) => {
            detectImageBrightness(image, index);
        });
    }, [heroImages]);

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
                                    {/* Enhanced overlay with text content */}
                                    <div className={`absolute inset-0 flex items-center ${
                                        imageBrightness[index] === true ? 'hero-overlay-bright' : 'hero-overlay'
                                    }`}>
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                            <div className="max-w-2xl">
                                                <h2 className="hero-title font-bold text-white mb-6 hero-text-shadow">
                                                    Sirius <span className="text-accent">Rollinger</span>
                                                </h2>
                                                <p className="hero-subtitle text-white/95 mb-8 leading-relaxed hero-text-shadow-sm">
                                                    Mental og fysisk trivsel for børn og unge gennem fællesskab og natur
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-4">
                                                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-300 hero-button-shadow hover:shadow-2xl hover:-translate-y-0.5">
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
                                        ? 'bg-accent' 
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