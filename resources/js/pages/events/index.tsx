import { Link, usePage } from '@inertiajs/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Event } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/image';

export default function EventsIndex() {
    const { events } = usePage<{ events: Event[] }>().props;
    console.log(events);

    return (
        <AppLayout>
            <section className="bg-background">
                <div className="container mx-auto px-4 py-8">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Kommende events</h1>
                        <p className="text-muted-foreground mt-2">Tilmeld dig vores arrangementer og hold dig opdateret.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events?.map((event) => (
                            <Card key={event.id} className="group overflow-hidden">
                                {event.image && (
                                    <div className="px-6">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            className="h-40 w-full rounded-lg object-cover"
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary" className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {new Date(event.start_time).toLocaleDateString('da-DK', { day: '2-digit', month: 'short', year: 'numeric' })}
                                        </Badge>
                                        {event.location_name && (
                                            <Badge variant="outline" className="flex items-center gap-1">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {event.location_name}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-xl mt-2">{event.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {event.end_time && (
                                        <p className="text-sm text-muted-foreground">
                                            {new Date(event.start_time).toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' })}
                                            {' - '}
                                            {new Date(event.end_time).toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    )}
                                </CardContent>
                                <CardFooter className="justify-between">
                                    <Link href={`/events/${event.slug}`} className="inline-flex items-center gap-2 text-primary hover:text-primary/90">
                                        Læs mere
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                    <Button asChild size="sm">
                                        <Link href={`/events/${event.slug}`}>Se detaljer</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
