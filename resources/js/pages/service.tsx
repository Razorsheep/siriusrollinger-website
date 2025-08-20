import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Head, usePage } from '@inertiajs/react';
import { NavigationData } from '@/types';
import { Calendar, Clock, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

interface ServicePage {
  id: number;
  title: string;
  slug: string;
  content: string;
  page_type: string;
  status: string;
  next_event?: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    registration_link?: string;
  };
  photos?: string[];
  contact_info?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

interface PageProps {
  settings: any;
  navigationItems: NavigationData[];
  page?: ServicePage;
  [key: string]: any;
}

export default function ServiceShow() {
  const { settings, navigationItems, page } = usePage<PageProps>().props;

  if (!page) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service ikke fundet</h1>
          <p className="text-gray-600">Den ønskede service kunne ikke findes.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head title={`${page.title} - Førstehjælp til Hunde`} />

      <Header settings={settings} navigationItems={navigationItems} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-red-900 mb-6">
              {page.title}
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content Column */}
              <div className="lg:col-span-2">
                <div
                  className="prose prose-lg prose-red max-w-none"
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-1 space-y-8">
                
                {/* Next Event Info Box */}
                {page.next_event && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Næste arrangement
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-red-800 text-lg">
                          {page.next_event.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center text-red-700">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{page.next_event.date}</span>
                      </div>
                      
                      <div className="flex items-center text-red-700">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{page.next_event.time}</span>
                      </div>
                      
                      <div className="flex items-start text-red-700">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{page.next_event.location}</span>
                      </div>
                      
                      <p className="text-red-700 text-sm">
                        {page.next_event.description}
                      </p>
                      
                      {page.next_event.registration_link && (
                        <a
                          href={page.next_event.registration_link}
                          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Tilmelding
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Photos Section */}
                {page.photos && page.photos.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Billeder
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {page.photos.map((photo, index) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden">
                          <img
                            src={photo}
                            alt={`${page.title} - billede ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Upcoming Events Calendar Box */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Kommende arrangementer
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-blue-900 mb-1">
                            {page.next_event?.title || 'Ingen kommende arrangementer'}
                          </h4>
                          {page.next_event ? (
                            <>
                              <p className="text-xs text-blue-700 mb-2">
                                {page.next_event.date} • {page.next_event.time}
                              </p>
                              <p className="text-xs text-blue-600 mb-3">
                                {page.next_event.location}
                              </p>
                              {page.next_event.registration_link && (
                                <a
                                  href={page.next_event.registration_link}
                                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-1.5 px-3 rounded-md transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Tilmelding
                                </a>
                              )}
                            </>
                          ) : (
                            <p className="text-xs text-blue-600">
                              Tjek tilbage senere for nye arrangementer
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a
                        href="mailto:info@firstaiddog.dk?subject=Forespørgsel om arrangementer"
                        className="inline-flex items-center text-blue-700 hover:text-blue-800 text-sm font-medium transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Forespørg om private arrangementer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Har du spørgsmål?</h2>
            <p className="text-xl text-red-700 mb-8">
              Kontakt os for at få mere information om vores {page.title.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+45XXXXXXXX"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Ring til os
              </a>
              <a
                href="mailto:info@firstaiddog.dk"
                className="inline-flex items-center bg-white hover:bg-red-50 text-red-600 font-semibold py-3 px-8 rounded-lg border-2 border-red-600 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer settings={settings} />
    </>
  );
}
