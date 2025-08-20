<?php

namespace App\Http\Controllers;

use App\Models\Page;
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

        return Inertia::render($component, [
            'settings' => app(WebsiteSettings::class)->toArray(),
            'page' => $page,
        ]);
    }
}
