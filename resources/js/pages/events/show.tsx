import { TipTapJsonRenderer } from '@/components/tiptap-json-renderer';
import { Event, TiptapContent } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Calendar, Clock, MapPin, CalendarPlus } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Image } from '@/components/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

// Helper function to extract plain text from Tiptap JSON content
const extractTextFromTiptap = (content: TiptapContent | string): string => {
    if (typeof content === 'string') {
        return content;
    }
    
    if (!content || !content.content) {
        return '';
    }
    
    const extractText = (node: TiptapContent): string => {
        if (node.type === 'text' && node.text) {
            return node.text;
        }
        
        if (node.content) {
            return node.content.map(extractText).join('');
        }
        
        return '';
    };
    
    return content.content.map(extractText).join(' ');
};

export default function EventShow() {
    const { event } = usePage<{ event: Event }>().props;

    if (!event) {
        return (
            <AppLayout>
                <div className="min-h-screen bg-muted/30 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-primary mb-4">Event ikke fundet</h1>
                        <p className="text-muted-foreground mb-6">Det ønskede event kunne ikke findes.</p>
                        <Link
                            href="/events"
                            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-6 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Tilbage til events
                        </Link>
                    </div>
                </div>
            </AppLayout>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('da-DK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const toICSDate = (dateStr: string): string => {
        const d = new Date(dateStr);
        const iso = d.toISOString(); // 2025-09-30T12:34:56.789Z
        return iso.replace(/[-:]/g, '').replace(/\.\d{3}/, ''); // 20250930T123456Z
    };

    const handleAddToCalendar = () => {
        const uid = `${event.id}@siriusrollinger`;
        const dtStart = toICSDate(event.start_time);
        const dtEnd = event.end_time ? toICSDate(event.end_time) : undefined;
        const description = extractTextFromTiptap(event.content).slice(0, 1000);

        const icsLines = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Sirius Rollinger//Events//DA',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            `UID:${uid}`,
            `DTSTAMP:${toICSDate(new Date().toISOString())}`,
            `DTSTART:${dtStart}`,
            ...(dtEnd ? [`DTEND:${dtEnd}`] : []),
            `SUMMARY:${event.title}`,
            ...(event.location_name ? [`LOCATION:${event.location_name}`] : []),
            ...(description ? [`DESCRIPTION:${description.replace(/\n/g, '\\n')}`] : []),
            'END:VEVENT',
            'END:VCALENDAR',
        ];

        const blob = new Blob([icsLines.join('\n')], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${event.slug || 'event'}.ics`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <AppLayout>
            {/* Breadcrumb */}
            <section className="bg-muted/30 py-4">
                <div className="max-w-6xl mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-primary hover:text-primary/80 transition-colors">Forside</Link>
                        <span className="text-muted-foreground">/</span>
                        <Link href="/events" className="text-primary hover:text-primary/80 transition-colors">Events</Link>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground font-medium">{event.title}</span>
                    </nav>
                </div>
            </section>

            {/* Event Content */}
            <section className="py-8 bg-background">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{event.title}</h1>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {formatDate(event.start_time)}
                                </Badge>
                                {event.location_name && (
                                    <Badge variant="outline" className="flex items-center gap-1">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {event.location_name}
                                    </Badge>
                                )}
                            </div>
                        </div>

                        {event.image && (
                            <div className="mb-8">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full rounded-xl object-cover"
                                />
                            </div>
                        )}

                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <TipTapJsonRenderer content={event.content} />
                        </div>
                    </div>

                    <div className="lg:col-span-1 lg:sticky lg:top-6">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                        <div className="flex-1">
                                            <div className="font-medium">Dato</div>
                                            <div className="text-muted-foreground">{formatDate(event.start_time)}</div>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                        <div className="flex-1">
                                            <div className="font-medium">Tid</div>
                                            <div className="text-muted-foreground">
                                                {new Date(event.start_time).toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' })}
                                                {event.end_time && (
                                                    <>
                                                        {' - '}
                                                        {new Date(event.end_time).toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' })}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {event.location_name && (
                                        <>
                                            <Separator />
                                            <div className="flex items-start gap-3">
                                                <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                                <div className="flex-1">
                                                    <div className="font-medium">Sted</div>
                                                    <div className="text-muted-foreground">{event.location_name}</div>
                                                    {event.location_description && (
                                                        <div className="text-muted-foreground">{event.location_description}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {(event.min_participants || event.max_participants) && (
                                        <>
                                            <Separator />
                                            <div className="flex items-start gap-3">
                                                <div className="h-5 w-5 mt-0.5 rounded-sm bg-muted text-xs font-medium flex items-center justify-center text-muted-foreground">#</div>
                                                <div className="flex-1">
                                                    <div className="font-medium">Deltagere</div>
                                                    <div className="text-muted-foreground">
                                                        {event.min_participants ? `Min: ${event.min_participants}` : ''}
                                                        {(event.min_participants && event.max_participants) ? ' • ' : ''}
                                                        {event.max_participants ? `Max: ${event.max_participants}` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="mt-6">
                                    <Button onClick={handleAddToCalendar} className="inline-flex items-center" size="sm">
                                        <CalendarPlus className="h-4 w-4 mr-2" />
                                        Gem i kalender
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
