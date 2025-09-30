import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { TipTapJsonRenderer } from '@/components/tiptap-json-renderer';

export default function About() {
    const { settings } = usePage<SharedData>().props;

    return (
        <>
            <AppLayout>
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-red-50 to-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                                {settings?.about_title || 'Om Siriusrollinger'}
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                {settings?.hero_text || 'Mental og fysisk trivsel for børn og unge gennem fællesskab og natur'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* About Content Section */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                                <div className="text-center mb-8">
                                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                                </div>
                                
                                <div className="prose prose-lg max-w-none">
                                    {settings?.about_text ? (
                                        <TipTapJsonRenderer content={settings.about_text} />
                                    ) : (
                                        <div>
                                            <h2 className="text-2xl font-bold text-primary mb-4">
                                                Om Siriusrollinger og Sirius Juniordag
                                            </h2>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                <strong className="text-primary">Julie Pio Kragelund og Rasmus Beck</strong>
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Foreningen Siriusrollinger og Sirius Juniordagene blev skabt af Julie Pio Kragelund og Rasmus Beck.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Julie har været dyrlæge for Slædepatruljen Sirius siden 2012 og kender patruljen rigtig godt. Julie er mor til Konrad, Mads og Svend.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Rasmus er IT-chef og er, og har i mange år været, meget engageret i spejderlivet. Rasmus er far til Molly og Wilfred.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed">
                                                Julie og Rasmus deltager alle Sirius Juniordagene, og hver gang deltager der også to tidligere Fupper (som betyder slædepatruljefolk).
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
