<?php

namespace App\Http\Controllers;

use App\Http\Resources\PageResource;
use App\Models\Page;
use App\Services\SeoService;
use App\Settings\WebsiteSettings;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        // Optionally gate unpublished pages
        if ($page->status !== 'published') {
            abort(404);
        }

        // Choose a view based on page type (service vs generic page)
        $component = $page->page_type === 'service' ? 'service' : 'page';

        // Generate SEO data based on page type
        $seo = $page->page_type === 'service'
            ? SeoService::forPage(
                $page->title,
                $page->excerpt ?? 'Lær om '.$page->title.' fra Førstehjælp til Hunde. Kvalificeret rådgivning og kurser i hundesikkerhed.',
                [
                    'keywords' => 'hundesikkerhed, førstehjælp til hunde, '.strtolower($page->title).', denmark, hundekurser',
                    'og_image' => $page->photos && count($page->photos) > 0 ? $page->photos[0] : '/images/logo.png',
                ]
            )
            : SeoService::forPage(
                $page->title,
                $page->excerpt ?? 'Læs om '.$page->title.' fra Førstehjælp til Hunde.',
                [
                    'keywords' => 'hundesikkerhed, førstehjælp til hunde, '.strtolower($page->title).', denmark',
                    'og_image' => '/images/logo.png',
                ]
            );

        return Inertia::render($component, [
            'settings' => app(WebsiteSettings::class)->toArray(),
            'page' => new PageResource($page)->resolve(),
            'seo' => $seo,
        ]);
    }
}
