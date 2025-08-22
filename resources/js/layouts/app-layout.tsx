
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Head, usePage } from '@inertiajs/react';
import { type BreadcrumbItem, type NavigationData, type SharedData } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    // These props are now optional since we fetch them directly from usePage
    navigationItems?: NavigationData[];
    settings?: any;
    seo?: any;
    showHeader?: boolean;
    showFooter?: boolean;
}

export default ({ 
    children, 
    breadcrumbs, 
    navigationItems: propNavigationItems, 
    settings: propSettings, 
    seo: propSeo,
    showHeader = true,
    showFooter = true,
    ...props 
}: AppLayoutProps) => {
    // Fetch data directly from Inertia page props
    const { navigationItems: pageNavigationItems, settings: pageSettings, seo: pageSeo } = usePage<SharedData>().props;
    
    // Use props as fallbacks if provided, otherwise use page data
    const navigationItems = propNavigationItems || pageNavigationItems || [];
    const settings = propSettings || pageSettings;
    const seo = propSeo || pageSeo;
    
    return (
        <>
            {/* SEO Meta Tags and Structured Data */}
            {seo && (
                <Head>
                    {/* Basic Meta Tags */}
                    {seo.title && <title>{seo.title}</title>}
                    {seo.description && <meta name="description" content={seo.description} />}
                    {seo.keywords && <meta name="keywords" content={seo.keywords} />}
                    {seo.author && <meta name="author" content={seo.author} />}
                    {seo.robots && <meta name="robots" content={seo.robots} />}
                    
                    {/* Open Graph Meta Tags */}
                    {seo.og_title && <meta property="og:title" content={seo.og_title} />}
                    {seo.og_description && <meta property="og:description" content={seo.og_description} />}
                    {seo.og_type && <meta property="og:type" content={seo.og_type} />}
                    {seo.og_url && <meta property="og:url" content={seo.og_url} />}
                    {seo.og_image && <meta property="og:image" content={seo.og_image} />}
                    {seo.og_site_name && <meta property="og:site_name" content={seo.og_site_name} />}
                    
                    {/* Twitter Card Meta Tags */}
                    {seo.twitter_card && <meta name="twitter:card" content={seo.twitter_card} />}
                    {seo.twitter_title && <meta name="twitter:title" content={seo.twitter_title} />}
                    {seo.twitter_description && <meta name="twitter:description" content={seo.twitter_description} />}
                    {seo.twitter_image && <meta name="twitter:image" content={seo.twitter_image} />}
                    
                    {/* Canonical URL */}
                    {seo.canonical && <link rel="canonical" href={seo.canonical} />}
                    
                    {/* Structured Data */}
                    {seo.structured_data && (
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(seo.structured_data)
                            }}
                        />
                    )}
                </Head>
            )}
            
            {showHeader && <Header navigationItems={navigationItems} />}
            
            <main>
                {children}
            </main>
            
            {showFooter && <Footer settings={settings} />}
        </>
    );
};
