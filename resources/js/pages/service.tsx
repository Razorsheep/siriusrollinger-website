import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Head, usePage } from '@inertiajs/react';
import { NavigationData } from '@/types';

interface ServicePage {
  id: number;
  title: string;
  slug: string;
  content: string;
  page_type: string;
  status: string;
}

interface PageProps {
  settings: any;
  navigationItems: NavigationData[];
  page?: ServicePage; // PageController passes `page`
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
        <section className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-red-900 mb-6">
              {page.title}
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg prose-red max-w-none"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </section>

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
                Ring til os
              </a>
              <a
                href="mailto:info@firstaiddog.dk"
                className="inline-flex items-center bg-white hover:bg-red-50 text-red-600 font-semibold py-3 px-8 rounded-lg border-2 border-red-600 transition-colors"
              >
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
