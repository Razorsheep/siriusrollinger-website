<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Settings\WebsiteSettings;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function show(Page $page)
    {
        // Ensure the page is a service and published
        if ($page->page_type !== 'service' || $page->status !== 'published') {
            abort(404);
        }

        return Inertia::render('services/show', [
            'settings' => app(WebsiteSettings::class)->toArray(),
            'service' => $page,
        ]);
    }
}
