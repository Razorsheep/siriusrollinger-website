import { TipTapJsonRenderer } from '@/components/tiptap-json-renderer';
import { Image } from '@/components/image';
import { usePage } from '@inertiajs/react';
import { NavigationData, ServicePage } from '@/types';
import { Calendar, Clock, MapPin, Phone, Mail, ExternalLink, X } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface PageProps {
  settings: any;
  navigationItems: NavigationData[];
  page?: ServicePage;
  [key: string]: any;
}

export default function ServiceShow() {
  const { page } = usePage<PageProps>().props;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  const openLightbox = (src: string, alt: string) => {
    console.log('Opening lightbox:', { src, alt });
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setIsLightboxOpen(true);
  };



  if (!page) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ydelse ikke fundet</h1>
          <p className="text-gray-600">Den ønskede ydelse kunne ikke findes.</p>
        </div>
      </div>
    );
  }

  console.log(page);
  return (
    <>


      <AppLayout>
        <main className="min-h-screen bg-[var(--color-white)]">
        {/* Hero Section */}
        <section className="py-[var(--spacing-4xl)] bg-gradient-to-br from-[var(--color-red-50)] to-[var(--color-white)]">
          <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)] text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-xl)]">
              {page.title}
            </h1>
            <div className="w-24 h-1 bg-[var(--color-red-600)] mx-auto mb-[var(--spacing-xl)]"></div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-[var(--spacing-3xl)]">
          <div className="max-w-7xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--spacing-2xl)]">
              
              {/* Main Content Column */}
              <div className="lg:col-span-2">
                <div ref={contentRef} className="prose prose-lg prose-red max-w-none">
                  <TipTapJsonRenderer 
                    content={page.content}
                    className="prose prose-lg prose-red max-w-none"
                  />

                </div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-1 space-y-[var(--spacing-xl)]">


                {/* Photos Section */}
                {page.images && page.images.length > 0 && (
                  <div className="bg-[var(--color-white)] border border-[var(--color-gray-200)] rounded-[var(--radius-xl)] p-[var(--spacing-xl)]">
                    <h3 className="text-xl font-bold text-[var(--color-gray-900)] mb-[var(--spacing-md)]">
                      Billeder
                    </h3>
                    <div className="grid grid-cols-2 gap-[var(--spacing-md)]">
                      {page.images.map((image, index) => {
                        console.log(`Image ${index}:`, { 
                          preview_url: image.preview_url, 
                          url: image.url, 
                          name: image.name 
                        });
                        return (
                          <div
                            key={index}
                            className="aspect-square rounded-[var(--radius-lg)] overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--color-red-500)]"
                          >
                            <Image
                              src={image.preview_url}
                              alt={`${page.title} - billede ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                              lightboxSrc={image.url || image.preview_url}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {/* Next Event Info Box */}
                {page.next_event && (
                  <div className="bg-[var(--color-red-50)] border border-[var(--color-red-200)] rounded-[var(--radius-xl)] p-[var(--spacing-xl)]">
                    <h3 className="text-xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)] flex items-center">
                      <Calendar className="h-5 w-5 mr-[var(--spacing-sm)]" />
                      Næste arrangement
                    </h3>
                    
                    <div className="space-y-[var(--spacing-md)]">
                      <div>
                        <h4 className="font-semibold text-[var(--color-red-800)] text-lg">
                          {page.next_event.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center text-[var(--color-red-700)]">
                        <Calendar className="h-4 w-4 mr-[var(--spacing-sm)] flex-shrink-0" />
                        <span>{page.next_event.date}</span>
                      </div>
                      
                      <div className="flex items-center text-[var(--color-red-700)]">
                        <Clock className="h-4 w-4 mr-[var(--spacing-sm)] flex-shrink-0" />
                        <span>{page.next_event.time}</span>
                      </div>
                      
                      <div className="flex items-start text-[var(--color-red-700)]">
                        <MapPin className="h-4 w-4 mr-[var(--spacing-sm)] flex-shrink-0 mt-[var(--spacing-xs)]" />
                        <span>{page.next_event.location}</span>
                      </div>
                      
                      <p className="text-[var(--color-red-700)] text-sm">
                        {page.next_event.description}
                      </p>
                      
                      {page.next_event.registration_link && (
                        <a
                          href={page.next_event.registration_link}
                          className="inline-flex items-center bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-[var(--color-white)] font-semibold py-[var(--spacing-sm)] px-[var(--spacing-md)] rounded-[var(--radius-lg)] transition-colors text-sm"
                        >
                          <ExternalLink className="h-4 w-4 mr-[var(--spacing-sm)]" />
                          Tilmelding
                        </a>
                      )}
                    </div>
                  </div>
                )}

                

                
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[var(--spacing-3xl)] bg-[var(--color-red-50)]">
          <div className="max-w-4xl mx-auto px-[var(--spacing-md)] sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)] text-center">
            <h2 className="text-3xl font-bold text-[var(--color-red-900)] mb-[var(--spacing-md)]">Har du spørgsmål?</h2>
            <p className="text-xl text-[var(--color-red-700)] mb-[var(--spacing-xl)]">
              Kontakt os for at få mere information om vores {page.title.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--spacing-md)] justify-center">
              <a
                href="tel:+45XXXXXXXX"
                className="inline-flex items-center bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-[var(--color-white)] font-semibold py-[var(--spacing-md)] px-[var(--spacing-xl)] rounded-[var(--radius-lg)] transition-colors"
              >
                <Phone className="h-4 w-4 mr-[var(--spacing-sm)]" />
                Ring til os
              </a>
              <a
                href="mailto:info@firstaiddog.dk"
                className="inline-flex items-center bg-[var(--color-white)] hover:bg-[var(--color-red-50)] text-[var(--color-red-600)] font-semibold py-[var(--spacing-md)] px-[var(--spacing-xl)] rounded-[var(--radius-lg)] border-2 border-[var(--color-red-600)] transition-colors"
              >
                <Mail className="h-4 w-4 mr-[var(--spacing-sm)]" />
                Send email
              </a>
            </div>
          </div>
        </section>

                </main>
        </AppLayout>
      </>
    );
  }
